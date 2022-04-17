import { Entity, Column, PrimaryColumn, BaseEntity, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import OrganizationEntity from "./Organization";
import UserEntity from "./user";

@Entity({ name: "organization_members" })
export default class OrganizationMemberEntity extends BaseEntity {
    @PrimaryColumn({ name: "member_id" })
    id: string;

    @Column({ name: "created_at" })
    createdAt: Date;

    @ManyToOne(() => UserEntity, user => user.organizationMembers)
    @JoinColumn({ name: "user_id" })
    user: UserEntity;

    @ManyToOne(() => OrganizationEntity, org => org.members)
    @JoinColumn({ name: "organization_id" })
    organization: OrganizationEntity;
}
