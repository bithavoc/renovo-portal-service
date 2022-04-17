import { Entity, PrimaryColumn, BaseEntity, ManyToOne, JoinColumn, Column } from "typeorm";
import AssetEntity from "./Asset";
import OrganizationEntity from "./Organization";
import SiteEntity from "./Site";

@Entity({ name: "site_organizations" })
export default class SiteOrganizationEntity extends BaseEntity {
    @PrimaryColumn({ name: "site_organization_id" })
    siteOrganizationId: string;

    @Column({ name: "site_id" })
    siteId: string;

    @Column({ name: "organization_id" })
    organizationId: string;

    @Column({ name: "created_at" })
    createdAt: Date;

    @ManyToOne(() => OrganizationEntity, org => org.sites)
    @JoinColumn({ name: "organization_id" })
    organization: OrganizationEntity;

    @ManyToOne(() => SiteEntity, site => site.organizations)
    @JoinColumn({ name: "site_id" })
    site: SiteEntity;
}
