import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeSiteOrganization1648181269738 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE sites DROP COLUMN user_id;
        ALTER TABLE sites ADD COLUMN organization_id TEXT NOT NULL;
        ALTER TABLE sites ADD CONSTRAINT sites_organization_fk FOREIGN KEY (organization_id) REFERENCES organizations(organization_id);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
