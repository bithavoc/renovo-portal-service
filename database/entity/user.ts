import { Entity, Column, PrimaryColumn, BaseEntity, OneToMany } from "typeorm";
import SiteEntity from "./site";
import TokenEntity from "./token";

@Entity({ name: "users" })
export default class UserEntity extends BaseEntity {
    @PrimaryColumn({ name: "user_id" })
    userId: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({ name: "first_name" })
    firstName: string;

    @Column({ name: "last_name" })
    lastName: string;

    @Column({ name: "created_at" })
    createdAt: Date;

    @OneToMany(type => TokenEntity, token => token.user)
    tokens: TokenEntity[];

    @OneToMany(type => SiteEntity, site => site.user)
    sites: SiteEntity[];

    getVacCompanies(): string[] {
        return [
            '12f3eda9-dc87-4ca2-aaef-cc8c437d883e', // ACE
            'f8e25a71-ff35-4fa0-844d-445055a4a9c4' // AL Smith
        ]
    }
}
