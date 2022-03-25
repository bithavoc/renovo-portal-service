import { Entity, Column, PrimaryColumn, BaseEntity, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { OrganizationLocation } from "../../externalServices/vac/vac-sdk";
import { SiteDetails } from "../../externalServices/zerto/zerto-sdk";
import AssetEntity from "./Asset";
import OrganizationEntity from "./organization";

@Entity({ name: "sites" })
export default class SiteEntity extends BaseEntity {
    @PrimaryColumn({ name: "site_id" })
    siteId: string;

    @Column()
    title: string;

    @Column({ name: "created_at" })
    createdAt: Date;

    @ManyToOne(() => OrganizationEntity, org => org.sites)
    @JoinColumn({ name: "organization_id" })
    organization: OrganizationEntity;

    @Column({ type: 'simple-json', name: "zerto_meta", nullable: true })
    zertoMeta?: SiteDetails;

    @Column({ type: 'simple-json', name: "veeam_meta", nullable: true })
    veeamMeta?: OrganizationLocation;

    @OneToMany(type => AssetEntity, asset => asset.site)
    assets: AssetEntity[];
}
