import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateOrganizationMemberTable1648164146086 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE organization_members(
            member_id TEXT NOT NULL PRIMARY KEY,
            organization_id TEXT NOT NULL,
            user_id UUID NOT NULL,
            created_at TIMESTAMPTZ NOT NULL,
            CONSTRAINT organization_members_organization_fk FOREIGN KEY(organization_id) REFERENCES organizations(organization_id) ON UPDATE CASCADE ON DELETE CASCADE,
            CONSTRAINT organization_members_user_fk FOREIGN KEY(user_id) REFERENCES users(user_id) ON UPDATE CASCADE ON DELETE CASCADE
            )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE organization_members`);
    }
}
