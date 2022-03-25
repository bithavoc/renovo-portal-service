import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAssetsTable1648185874871 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE assets(
            asset_id TEXT NOT NULL PRIMARY KEY,
            title TEXT NOT NULL,
            site_id TEXT NOT NULL,
            organization_id TEXT NOT NULL,
            zerto_meta JSONB,
            veeam_meta JSONB,
            created_at TIMESTAMPTZ NOT NULL,
            CONSTRAINT assets_site_fk FOREIGN KEY (site_id) REFERENCES sites(site_id),
            CONSTRAINT assets_organization_fk FOREIGN KEY (organization_id) REFERENCES organizations(organization_id)
            )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
