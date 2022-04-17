import { Entity, PrimaryColumn, BaseEntity, ManyToOne, JoinColumn, Column } from "typeorm";
import AssetEntity from "./Asset";
import OrganizationEntity from "./organization";
import SiteEntity from "./site";

@Entity({ name: "asset_sites" })
export default class AssetSiteEntity extends BaseEntity {
    @PrimaryColumn({ name: "asset_id" })
    assetId: string;

    @PrimaryColumn({ name: "site_id" })
    siteId: string;

    @Column({ name: "organization_id" })
    organizationId: string;

    @Column({ name: "created_at" })
    createdAt: Date;

    @ManyToOne(() => OrganizationEntity, org => org.assetSites)
    @JoinColumn({ name: "organization_id" })
    organization: OrganizationEntity;

    @ManyToOne(() => AssetEntity, asset => asset.sites)
    @JoinColumn({ name: "asset_id" })
    asset: AssetEntity;

    @ManyToOne(() => SiteEntity, site => site.assets)
    @JoinColumn({ name: "site_id" })
    site: SiteEntity;
}
