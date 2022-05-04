import { Entity, PrimaryColumn, BaseEntity, ManyToOne, JoinColumn, Column } from "typeorm";
import ProtectionEntity from "./Protection";
import SiteEntity from "./Site";

export enum UserRole {
    ADMIN = "admin",
    EDITOR = "editor",
    GHOST = "ghost",
}

export type Purpose = "protection" | "recovery";

@Entity({ name: "protection_sites" })
export default class ProtectionSiteEntity extends BaseEntity {
    @PrimaryColumn({ name: "protection_id" })
    protectionId: string;

    @PrimaryColumn({ name: "site_id" })
    siteId: string;

    @Column({ name: "created_at" })
    createdAt: Date;

    @ManyToOne(() => ProtectionEntity, protection => protection.sites)
    @JoinColumn({ name: "protection_id" })
    protection: ProtectionEntity;

    @ManyToOne(() => SiteEntity, site => site.protections)
    @JoinColumn({ name: "site_id" })
    site: SiteEntity;

    @Column({
        type: "enum",
        enum: ["protection", "recovery"],
        default: "protection"
    })
    purpose: Purpose;
}
