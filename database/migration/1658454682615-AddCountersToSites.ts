import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCountersToSites1658454682615 implements MigrationInterface {
    name = 'AddCountersToSites1658454682615'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE sites ADD protections_count BIGINT NOT NULL DEFAULT(0), ADD assets_count BIGINT NOT NULL DEFAULT(0);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE sites DROP COLUMN protections_count, DROP COLUMN assets_count`);
    }
}
