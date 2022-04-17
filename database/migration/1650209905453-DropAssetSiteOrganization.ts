import { MigrationInterface, QueryRunner } from "typeorm";

export class DropAssetSiteOrganization1650209905453 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE asset_sites DROP COLUMN organization_id;`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
