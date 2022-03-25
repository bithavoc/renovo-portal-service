import { Entity, Column, PrimaryColumn, BaseEntity, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import OrganizationEntity from "./organization";

@Entity({ name: "sites" })
export default class SiteEntity extends BaseEntity {
    @PrimaryColumn({ name: "site_id" })
    siteId: string;

    @Column()
    title: string;

    @Column({ name: "created_at" })
    createdAt: Date;

    @Column({ name: "user_id" })
    userId: string;

    @ManyToOne(() => OrganizationEntity, org => org.sites)
    @JoinColumn({ name: "organization_id" })
    organization: OrganizationEntity;
}
