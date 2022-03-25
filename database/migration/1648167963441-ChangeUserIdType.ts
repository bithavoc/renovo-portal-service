import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeUserIdType1648167963441 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE tokens DROP CONSTRAINT tokens_user_id_fkey; 
        ALTER TABLE sites DROP CONSTRAINT sites_user_id_fkey; 
        ALTER TABLE organization_members DROP CONSTRAINT organization_members_user_fk; 
        ALTER TABLE users ALTER COLUMN user_id TYPE TEXT;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
