import { Entity, Column, PrimaryColumn, BaseEntity, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { OrganizationLocation } from "../../externalServices/vac/vac-sdk";
import { SiteDetails } from "../../externalServices/zerto/zerto-sdk";
import { Protection } from "../../resolvers/protections";
import AssetEntity from "./Asset";
import AssetSiteEntity from "./AssetSite";
import OrganizationEntity from "./Organization";
import ProtectionSiteEntity from "./ProtectionSite";
import SiteOrganizationEntity from "./SiteOrganization";

@Entity({ name: "sites" })
export default class SiteEntity extends BaseEntity {
    @PrimaryColumn({ name: "site_id" })
    siteId: string;

    @Column()
    title: string;

    @Column({ name: "created_at" })
    createdAt: Date;

    @Column({ type: 'simple-json', name: "zerto_meta", nullable: true })
    zertoMeta?: SiteDetails;

    @Column({ type: 'simple-json', name: "veeam_meta", nullable: true })
    veeamMeta?: OrganizationLocation;

    @OneToMany(type => AssetSiteEntity, assetSite => assetSite.site)
    assets: AssetSiteEntity[];

    @OneToMany(type => SiteOrganizationEntity, siteOrg => siteOrg.site)
    organizations: SiteOrganizationEntity[];

    @OneToMany(type => ProtectionSiteEntity, protectionSite => protectionSite.site)
    protections: ProtectionSiteEntity[];
}
