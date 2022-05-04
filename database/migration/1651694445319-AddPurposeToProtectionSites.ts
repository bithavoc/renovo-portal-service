import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPurposeToProtectionSites1651694445319 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE protection_sites ADD COLUMN purpose TEXT NOT NULL DEFAULT('protection');
         `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
