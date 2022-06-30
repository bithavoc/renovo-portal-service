import { Entity, Column, PrimaryColumn, BaseEntity } from "typeorm";
import { Stats } from "../../resolvers/Stats";

@Entity({ name: "summaries" })
export default class SummaryEntity extends BaseEntity {
    @PrimaryColumn({ name: "summary_id" })
    summaryId: string;

    @Column({ name: "created_at" })
    createdAt: Date;

    @Column({ type: 'simple-json', name: "stats" })
    stats: Stats;
}
