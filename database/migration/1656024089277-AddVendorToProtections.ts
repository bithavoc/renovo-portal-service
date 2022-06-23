import { MigrationInterface, QueryRunner } from "typeorm";

export class AddVendorToProtections1656024089277 implements MigrationInterface {
    name = 'AddVendorToProtections1656024089277'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE protections ADD vendor TEXT NOT NULL DEFAULT('')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE protections DROP COLUMN vendor `);
    }
}
