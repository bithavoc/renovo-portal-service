import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAssetSiteTable1650165891862 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE asset_sites(
            asset_id TEXT NOT NULL,
            site_id TEXT NOT NULL,
            organization_id TEXT NOT NULL,
            created_at TIMESTAMPTZ NOT NULL,
            CONSTRAINT asset_sites_pk PRIMARY KEY (asset_id, site_id),
            CONSTRAINT asset_sites_site_fk FOREIGN KEY (site_id) REFERENCES sites(site_id),
            CONSTRAINT asset_sites_asset_fk FOREIGN KEY (asset_id) REFERENCES assets(asset_id),
            CONSTRAINT asset_sites_org_fk FOREIGN KEY (organization_id) REFERENCES organizations(organization_id)
            )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
