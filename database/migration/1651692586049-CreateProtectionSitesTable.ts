import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProtectionSitesTable1651692586049 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE protection_sites(
            protection_id TEXT NOT NULL,
            site_id TEXT NOT NULL,
            created_at TIMESTAMPTZ NOT NULL,
            CONSTRAINT protection_sites_pk PRIMARY KEY (protection_id, site_id),
            CONSTRAINT protection_sites_site_fk FOREIGN KEY (site_id) REFERENCES sites(site_id),
            CONSTRAINT protection_sites_protection_fk FOREIGN KEY (protection_id) REFERENCES protections(protection_id)
            )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
