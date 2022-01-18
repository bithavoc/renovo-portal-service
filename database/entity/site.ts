import { Entity, Column, PrimaryColumn, BaseEntity, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import UserEntity from "./user";

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

    @ManyToOne(() => UserEntity, user => user.sites)
    @JoinColumn({ name: "user_id" })
    user: UserEntity;
}
