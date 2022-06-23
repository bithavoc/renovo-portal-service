import { MigrationInterface, QueryRunner } from "typeorm";

export class AddHealthToProtections1656019688926 implements MigrationInterface {
    name = 'AddHealthToProtections1656019688926'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE protections ADD health TEXT NOT NULL DEFAULT('unknown')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE protections DROP COLUMN health `);
    }

}
