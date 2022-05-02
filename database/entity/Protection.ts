import { Entity, Column, PrimaryColumn, BaseEntity, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Vpg } from "../../externalServices/zerto/zerto-sdk";
import AssetSiteEntity from "./AssetSite";

@Entity({ name: "protections" })
export default class ProtectionEntity extends BaseEntity {
    @PrimaryColumn({ name: "protection_id" })
    protectionId: string;

    @Column()
    title: string;

    @Column({ name: "created_at" })
    createdAt: Date;

    @Column({ type: 'simple-json', name: "zerto_meta", nullable: true })
    zertoMeta?: Vpg;

    // @Column({ type: 'simple-json', name: "veeam_meta", nullable: true })
    // veeamMeta?: {
    //     vm?: ProtectedVirtualMachine
    // };

    // @OneToMany(type => AssetSiteEntity, assetSite => assetSite.asset)
    // sites: AssetSiteEntity[];
}
