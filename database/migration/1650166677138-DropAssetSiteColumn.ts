import { MigrationInterface, QueryRunner } from "typeorm";

export class DropAssetSiteColumn1650166677138 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE assets DROP COLUMN site_id`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE assets ADD COLUMN site_id TEXT`);
    }

}
