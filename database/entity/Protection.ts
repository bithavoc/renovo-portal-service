import { Entity, Column, PrimaryColumn, BaseEntity, OneToMany } from "typeorm";
import { Vpg } from "../../externalServices/zerto/zerto-sdk";
import ProtectionSiteEntity from "./ProtectionSite";

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

    @OneToMany(type => ProtectionSiteEntity, protectionSite => protectionSite.protection)
    sites: ProtectionSiteEntity[];
}
