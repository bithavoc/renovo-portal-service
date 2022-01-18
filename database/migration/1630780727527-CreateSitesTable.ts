import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSitesTable1630780727527 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE sites(site_id TEXT NOT NULL PRIMARY KEY, user_id UUID NOT NULL REFERENCES users(user_id), title TEXT NOT NULL, created_at TIMESTAMPTZ NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE sites`);
    }

}
