import { Entity, Column, PrimaryColumn, BaseEntity, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import OrganizationMemberEntity from "./OrganizationMember";

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
}
