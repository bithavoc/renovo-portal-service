import {MigrationInterface, QueryRunner} from "typeorm";

export class AddPasswordToUsers1630761427800 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE users ADD password TEXT NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE users DROP COLUMN password`);
    }

}
