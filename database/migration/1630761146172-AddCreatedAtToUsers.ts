import {MigrationInterface, QueryRunner} from "typeorm";

export class AddCreatedAtToUsers1630761146172 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE users ADD created_at TIMESTAMPTZ NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE users DROP COLUMN created_at`);
    }

}
