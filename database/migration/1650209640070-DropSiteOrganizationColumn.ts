import { MigrationInterface, QueryRunner } from "typeorm";

export class DropSiteOrganizationColumn1650209640070 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE sites DROP COLUMN organization_id; ALTER TABLE assets DROP COLUMN organization_id;`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
