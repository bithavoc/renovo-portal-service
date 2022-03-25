import { MigrationInterface, QueryRunner } from "typeorm";

export class RebuildUserIdConstraints1648168443088 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE tokens ALTER COLUMN user_id TYPE TEXT;
        ALTER TABLE tokens ADD CONSTRAINT tokens_user_id_fkey FOREIGN KEY(user_id) REFERENCES users(user_id) ON UPDATE CASCADE ON DELETE CASCADE; 
        ALTER TABLE sites ALTER COLUMN user_id TYPE TEXT;
        ALTER TABLE sites ADD CONSTRAINT sites_user_id_fkey FOREIGN KEY(user_id) REFERENCES users(user_id) ON UPDATE CASCADE ON DELETE CASCADE;
        ALTER TABLE organization_members ALTER COLUMN user_id TYPE TEXT;
        ALTER TABLE organization_members ADD CONSTRAINT organization_members_user_fk FOREIGN KEY(user_id) REFERENCES users(user_id) ON UPDATE CASCADE ON DELETE CASCADE;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
