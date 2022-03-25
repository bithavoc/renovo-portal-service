import { MigrationInterface, QueryRunner } from "typeorm";

export class OrgMemberUnique1648170087959 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE organization_members ADD CONSTRAINT organization_members_user_organization_uk UNIQUE(user_id, organization_id);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
