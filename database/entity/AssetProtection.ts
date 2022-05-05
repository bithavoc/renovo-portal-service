import { Entity, PrimaryColumn, BaseEntity, ManyToOne, JoinColumn, Column } from "typeorm";
import AssetEntity from "./Asset";
import ProtectionEntity from "./Protection";

@Entity({ name: "asset_protections" })
export default class AssetProtectionEntity extends BaseEntity {
    @PrimaryColumn({ name: "asset_protection_id" })
    assetProtectionId: string;

    @Column({ name: "protection_id" })
    protectionId: string;

    @Column({ name: "asset_id" })
    assetId: string;

    @Column({ name: "created_at" })
    createdAt: Date;

    @ManyToOne(() => AssetEntity, asset => asset.protections)
    @JoinColumn({ name: "asset_id" })
    asset: AssetEntity;

    @ManyToOne(() => ProtectionEntity, protection => protection.assets)
    @JoinColumn({ name: "protection_id" })
    protection: ProtectionEntity;
}
