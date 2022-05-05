import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAssetProtections1651709371323 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE asset_protections(
            asset_protection_id TEXT NOT NULL,
            asset_id TEXT NOT NULL,
            protection_id TEXT NOT NULL,
            created_at TIMESTAMPTZ NOT NULL,
            CONSTRAINT asset_protections_pk PRIMARY KEY (asset_protection_id),
            CONSTRAINT asset_protections_asset_fk FOREIGN KEY (asset_id) REFERENCES assets(asset_id),
            CONSTRAINT asset_protections_protection_fk FOREIGN KEY (protection_id) REFERENCES protections(protection_id)
            )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
