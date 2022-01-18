import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateToken1630707703870 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE tokens(token TEXT NOT NULL PRIMARY KEY, user_id UUID NOT NULL REFERENCES users(user_id), created_at TIMESTAMPTZ NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE tokens`);
    }

}
