import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProtectionsTable1651489422541 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE protections(
            protection_id TEXT NOT NULL,
            title TEXT NOT NULL,
            zerto_meta JSONB,
            veeam_meta JSONB,
            created_at TIMESTAMPTZ NOT NULL,
            CONSTRAINT protections_pk PRIMARY KEY (protection_id)
            )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE protections`)
    }
}
