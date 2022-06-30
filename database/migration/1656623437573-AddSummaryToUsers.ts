import { MigrationInterface, QueryRunner } from "typeorm";

export class AddSummaryToUsers1656623437573 implements MigrationInterface {
    name = 'AddSummaryToUsers1656623437573'
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE users ADD summary_id TEXT NULL;
        ALTER TABLE users ADD CONSTRAINT users_summary_fk FOREIGN KEY(summary_id) REFERENCES summaries(summary_id) ON UPDATE CASCADE ON DELETE SET NULL;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE users DROP COLUMN summary_id;
        ALTER TABLE users DROP CONSTRAINT users_summary_fk;`);
    }
}
