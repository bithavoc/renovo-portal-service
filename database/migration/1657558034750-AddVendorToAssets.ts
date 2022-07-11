import { MigrationInterface, QueryRunner } from "typeorm";

export class AddVendorToAssets1657558034750 implements MigrationInterface {
    name = 'AddVendorToAssets1657558034750'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE assets ADD vendor TEXT NOT NULL DEFAULT('')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE assets DROP COLUMN vendor `);
    }
}
