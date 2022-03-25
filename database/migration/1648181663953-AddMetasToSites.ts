import { MigrationInterface, QueryRunner } from "typeorm";

export class AddMetasToSites1648181663953 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE sites ADD COLUMN zerto_meta JSONB;
        ALTER TABLE sites ADD COLUMN veeam_meta JSONB;
         `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
