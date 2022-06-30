import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSummariesTable1656623207505 implements MigrationInterface {
    name = 'CreateSummariesTable1656623207505'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE summaries(
            summary_id TEXT NOT NULL,
            stats JSONB NOT NULL,
            created_at TIMESTAMPTZ NOT NULL,
            CONSTRAINT summaries_pk PRIMARY KEY (summary_id)
            )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE summaries`);
    }

}
