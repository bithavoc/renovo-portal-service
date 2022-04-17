import { Entity, Column, PrimaryColumn, BaseEntity, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { ProtectedVirtualMachine } from "../../externalServices/vac/vac-sdk";
import { Vms } from "../../externalServices/zerto/zerto-sdk";
import AssetSiteEntity from "./AssetSite";
import OrganizationEntity from "./Organization";

@Entity({ name: "assets" })
export default class AssetEntity extends BaseEntity {
    @PrimaryColumn({ name: "asset_id" })
    assetId: string;

    @Column()
    title: string;

    @Column({ name: "created_at" })
    createdAt: Date;

    @Column({ type: 'simple-json', name: "zerto_meta", nullable: true })
    zertoMeta?: Vms;

    @Column({ type: 'simple-json', name: "veeam_meta", nullable: true })
    veeamMeta?: {
        vm?: ProtectedVirtualMachine
    };

    @OneToMany(type => AssetSiteEntity, assetSite => assetSite.asset)
    sites: AssetSiteEntity[];
}
