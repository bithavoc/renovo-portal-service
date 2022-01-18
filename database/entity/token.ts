import { Entity, Column, PrimaryColumn, BaseEntity, ManyToOne, JoinColumn } from "typeorm";
import UserEntity from "./user";

@Entity({name: "tokens" })
export default class TokenEntity extends BaseEntity {
    @PrimaryColumn()
    token: string;

    @Column({name: "user_id"})
    userId: string;

    @Column({name: "created_at"})
    createdAt: Date;

    @ManyToOne(() => UserEntity, user => user.tokens)
    @JoinColumn({name: "user_id"})
    user: UserEntity;
}
