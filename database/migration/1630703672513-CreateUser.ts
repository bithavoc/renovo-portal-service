import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUser1630703672513 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE users(user_id UUID NOT NULL PRIMARY KEY, email TEXT NOT NULL, first_name TEXT NOT NULL, last_name TEXT NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE users`);
    }
}
