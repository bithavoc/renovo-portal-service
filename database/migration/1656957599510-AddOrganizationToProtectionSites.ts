import { MigrationInterface, QueryRunner } from "typeorm";

export class AddOrganizationToProtectionSites1656957599510 implements MigrationInterface {
    name = 'AddOrganizationToProtectionSites1656957599510'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE protection_sites ADD organization_id TEXT NULL;
        ALTER TABLE protection_sites ADD CONSTRAINT protection_sites_organization_fk FOREIGN KEY(organization_id) REFERENCES organizations(organization_id) ON UPDATE CASCADE ON DELETE SET NULL;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE protection_sites DROP COLUMN organization_id;
        `);
    }
}
