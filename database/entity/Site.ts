import { Entity, Column, PrimaryColumn, BaseEntity, OneToMany } from "typeorm";
import { BackupRepository, OrganizationLocation } from "../../externalServices/vac/vac-sdk";
import { SiteDetails } from "../../externalServices/zerto/zerto-sdk";
import AssetSiteEntity from "./AssetSite";
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
    veeamMeta?: {
        organizationLocation?: OrganizationLocation;
        backupRepository?: BackupRepository
    };

    @OneToMany(type => AssetSiteEntity, assetSite => assetSite.site)
    assets: AssetSiteEntity[];

    @Column({ name: "assets_count" })
    assetsCount: number;

    @OneToMany(type => SiteOrganizationEntity, siteOrg => siteOrg.site)
    organizations: SiteOrganizationEntity[];

    @OneToMany(type => ProtectionSiteEntity, protectionSite => protectionSite.site)
    protections: ProtectionSiteEntity[];

    @Column({ name: "protections_count" })
    protectionsCount: number;
}
