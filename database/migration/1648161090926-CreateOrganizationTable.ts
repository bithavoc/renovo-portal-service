import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateOrganizationTable1648161090926 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE organizations(organization_id TEXT NOT NULL PRIMARY KEY, title TEXT NOT NULL, created_at TIMESTAMPTZ NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE organizations`);
    }
}
