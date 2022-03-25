import { Entity, Column, PrimaryColumn, BaseEntity, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { OrganizationLocation } from "../../externalServices/vac/vac-sdk";
import { SiteDetails, Vms } from "../../externalServices/zerto/zerto-sdk";
import OrganizationEntity from "./organization";
import SiteEntity from "./site";

@Entity({ name: "assets" })
export default class AssetEntity extends BaseEntity {
    @PrimaryColumn({ name: "asset_id" })
    assetId: string;

    @Column()
    title: string;

    @Column({ name: "created_at" })
    createdAt: Date;

    @ManyToOne(() => SiteEntity, site => site.assets)
    @JoinColumn({ name: "site_id" })
    site: SiteEntity;

    @ManyToOne(() => OrganizationEntity, org => org.assets)
    @JoinColumn({ name: "organization_id" })
    organization: OrganizationEntity;

    @Column({ type: 'simple-json', name: "zerto_meta", nullable: true })
    zertoMeta?: Vms;

    // @Column({ type: 'simple-json', name: "veeam_meta", nullable: true })
    // veeamMeta?: OrganizationLocation;
}
