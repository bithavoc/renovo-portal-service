import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSiteOrganizationTable1650209011918 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE site_organizations(
            site_organization_id TEXT NOT NULL,
            site_id TEXT NOT NULL,
            organization_id TEXT NOT NULL,
            created_at TIMESTAMPTZ NOT NULL,
            CONSTRAINT site_organizations_pk PRIMARY KEY (site_organization_id),
            CONSTRAINT site_organizations_site_fk FOREIGN KEY (site_id) REFERENCES sites(site_id),
            CONSTRAINT site_organizations_org_fk FOREIGN KEY (organization_id) REFERENCES organizations(organization_id)
            )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE site_organizations`)
    }
}
