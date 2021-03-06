import { Entity, Column, PrimaryColumn, BaseEntity, OneToMany, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import OrganizationMemberEntity from "./OrganizationMember";
import SummaryEntity from "./Summary";
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

    @OneToMany(type => OrganizationMemberEntity, member => member.user)
    organizationMembers: OrganizationMemberEntity[];

    static findByIdOrEmail(idOrEmail: string) {
        return UserEntity.createQueryBuilder("user").where("user.email = :idOrEmail OR user.user_id = :idOrEmail", {
            idOrEmail
        });
    }

    static async findByIdOrEmailOrFail(idOrEmail: string) {
        const user = await this.findByIdOrEmail(idOrEmail).getOne()
        if (!user) {
            throw new Error("user not found")
        }
        return user;
    }

    getVacCompanies(): string[] {
        return [
            '12f3eda9-dc87-4ca2-aaef-cc8c437d883e', // ACE
            'f8e25a71-ff35-4fa0-844d-445055a4a9c4' // AL Smith
        ]
    }

    // get summary(): UserSummary {
    //     return {
    //         protections: {
    //             generalHealth: {
    //                 healthy: 800,
    //                 erroneous: 140,
    //             },
    //             total: 940
    //         },
    //         assets: {
    //             total: 3400
    //         }
    //     }
    // }

    @Column({ name: "summary_id", nullable: true })
    summaryId?: string;

    @OneToOne(() => SummaryEntity, { nullable: true })
    @JoinColumn({ name: "summary_id" })
    summary?: SummaryEntity;
}
