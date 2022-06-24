import { Entity, Column, PrimaryColumn, BaseEntity, OneToMany } from "typeorm";
import OrganizationMemberEntity from "./OrganizationMember";
import SiteOrganizationEntity from "./SiteOrganization";

@Entity({ name: "organizations" })
export default class OrganizationEntity extends BaseEntity {
    @PrimaryColumn({ name: "organization_id" })
    id: string;

    @Column()
    title: string;

    @Column({ name: "created_at" })
    createdAt: Date;

    @OneToMany(type => OrganizationMemberEntity, member => member.organization)
    members: OrganizationMemberEntity[];

    @OneToMany(type => SiteOrganizationEntity, siteOrg => siteOrg.organization)
    sites: SiteOrganizationEntity[];
}
