import { ForbiddenError } from "apollo-server";
import { Arg, Ctx, Field, FieldResolver, ID, InputType, ObjectType, Query, Resolver, Root } from "type-graphql";
import AssetProtectionEntity from "../database/entity/AssetProtection";
import ProtectionEntity from "../database/entity/Protection";
import ProtectionSiteEntity from "../database/entity/ProtectionSite";
import TokenEntity from "../database/entity/token";
import { Vendor } from "../vendors/type";
import { AssetProtection } from "./AssetProtections";
import { Page } from "./pagination/page";
import { Paginate } from "./pagination/paginator";
import { PageRequest } from "./pagination/request";
import { ProtectionSite } from "./ProtectionSites";

@ObjectType()
export class ZertoProtectionVpg {
  @Field({ nullable: true })
  identifier?: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true, description: 'The number of virtual machines in the VPG' })
  vmsCount?: number;

  // /** Information related to the protected site. */
  // protectedSite?: Site;

  // /** Information related to the recovery site. */
  // recoverySite?: Site;

  @Field({ nullable: true, description: 'The actual time since the last checkpoint was written to the journal, in seconds' })
  actualRpo?: number;

  @Field({ nullable: true, description: 'The configured SLA RPO that the user defines in the ZVM, in seconds' })
  configuredRpo?: number;


  @Field({ nullable: true })
  status?: string;

  // status?: VpgStatus;

  // /** The health status of the VPG. */
  // health?: VpgHealth;

  // /** The substatus of the VPG. */
  // subStatus?: VpgSubStatus;

  // /** The summary of tasks in the site where the API is running. */
  // runningTasks?: Task[];

  @Field({ nullable: true, description: 'The configured journal history, example: 800' })
  configuredJournalHistory?: number;

  @Field({ nullable: true, description: 'The actual history of the journal, example: 766' })
  actualJournalHistory?: number;

  @Field({ nullable: true, description: 'The name of the ZORG, Zerto organizatio, example: customer_gold' })
  zorgName?: string;

  @Field({ nullable: true, description: 'whether the recovery site ZVM sending data to Zerto Analytics service.' })
  isRecoverySiteTransmit?: boolean;
}

@ObjectType()
export class VeeamProtectionBackupServerJobMeta {
  @Field({ nullable: true })
  instanceUid?: string;

  @Field({ nullable: true, description: 'Name of a job configured on a client Veeam Backup & Replication server' })
  name?: string;

  @Field({ nullable: true, description: 'UID assigned to a client Veeam Backup & Replication server' })
  backupServerUid?: string;

  @Field({ nullable: true })
  locationUid?: string;

  @Field({ nullable: true })
  siteUid?: string;

  @Field({ nullable: true })
  organizationUid?: string;

  @Field({ nullable: true, description: 'Status of the latest job session' })
  status:
    | "Unknown"
    | "None"
    | "Idle"
    | "Success"
    | "Warning"
    | "Failed"
    | "Running"
    | "Starting"
    | "Stopping"
    | "Enabling"
    | "Disabling"
    | "WaitingTape"
    | "WaitingRepository";

  @Field({ nullable: true, description: 'Type of a job configured on a client Veeam Backup & Replication server' })
  type?:
    | "Unknown"
    | "BackupVm"
    | "ReplicationVM"
    | "CopyVm"
    | "CopyFile"
    | "FileToTape"
    | "BackupToTape"
    | "BackupCopy"
    | "ImmediateBackupCopy"
    | "SqlLogBackup"
    | "OracleLogBackup"
    | "SureBackup"
    | "AgentPolicy"
    | "AgentBackupJob"
    | "BackupFile"
    | "BackupFileCopy"
    | "AzureBackupJob"
    | "AwsBackupJob"
    | "AhvStorageSnapshotJob";

  @Field({ nullable: true, description: 'Date and time when the latest job session started' })
  lastRun?: string;

  @Field({ nullable: true, description: 'Date and time when the latest job session ended' })
  lastEndTime?: string;

  @Field({ nullable: true, description: 'Duration of the latest job session, in seconds' })
  lastDuration?: number;

  @Field({ nullable: true, description: 'Rate at which VM data was processed during the latest job session' })
  processingRate?: number;

  @Field({ nullable: true, description: 'Average time a job session takes to complete, in seconds' })
  avgDuration?: number;

  @Field({ nullable: true, description: 'Total amount of data that was transferred to target during the latest job session, in bytes' })
  transferredData?: number;

  @Field({ nullable: true, description: 'Bottleneck in the process of transferring the data from source to target' })
  bottleneck?:
    | "Unknown"
    | "Network"
    | "None"
    | "Proxy"
    | "Source"
    | "SourceWanAccelerator"
    | "Target"
    | "TargetWanAccelerator";

  @Field({ description: 'Indicates whether a job schedule is enabled' })
  isEnabled: boolean;

  @Field({
    nullable: true,
    description: 'Type of a schedule configured for a job'
  })
  /** Type of a schedule configured for a job. */
  scheduleType?:
    | "Unknown"
    | "NotScheduled"
    | "Daily"
    | "Monthly"
    | "Periodically"
    | "Continuously"
    | "BackupWindow"
    | "Chained";

  @Field({
    nullable: true,
    description: 'Message that is displayed in case a backup job fails, Every line break is represented by the `\r\n` control characters.'
  })
  failureMessage?: string;

  @Field({
    nullable: true,
    description: 'Type of a target backup location'
  })
  targetType?: "Unknown" | "Local" | "Cloud";

  @Field({
    nullable: true,
    description: 'Name of a target backup location.'
  })
  destination?: string;

  @Field({ nullable: true, description: 'Number of retention policy units' })
  retentionLimit?: number;

  @Field({ nullable: true, description: '"Unknown" | "Days" | "RestorePoints"' })
  retentionLimitType?: "Unknown" | "Days" | "RestorePoints";

  @Field({ nullable: true, description: 'Indicates whether the GFS retention is enabled' })
  isGfsOptionEnabled?: boolean;
}

@ObjectType()
export class VeeamProtectionBackupAgentJobMeta {
  @Field({ nullable: true })
  instanceUid?: string;

  @Field({ nullable: true, description: 'UID assigned to a Veeam backup agent' })
  backupAgentUid?: string;

  @Field({ nullable: true, description: 'Name of a Veeam backup agent job' })
  name?: string;

  // @Field({ nullable: true })
  // locationUid?: string;

  // @Field({ nullable: true })
  // siteUid?: string;

  // @Field({ nullable: true })
  // organizationUid?: string;

  // @Field({ nullable: true, description: 'Status of the latest job session' })
  // status:
  //   | "Unknown"
  //   | "None"
  //   | "Idle"
  //   | "Success"
  //   | "Warning"
  //   | "Failed"
  //   | "Running"
  //   | "Starting"
  //   | "Stopping"
  //   | "Enabling"
  //   | "Disabling"
  //   | "WaitingTape"
  //   | "WaitingRepository";

  // @Field({ nullable: true, description: 'Type of a job configured on a client Veeam Backup & Replication server' })
  // type?:
  //   | "Unknown"
  //   | "BackupVm"
  //   | "ReplicationVM"
  //   | "CopyVm"
  //   | "CopyFile"
  //   | "FileToTape"
  //   | "BackupToTape"
  //   | "BackupCopy"
  //   | "ImmediateBackupCopy"
  //   | "SqlLogBackup"
  //   | "OracleLogBackup"
  //   | "SureBackup"
  //   | "AgentPolicy"
  //   | "AgentBackupJob"
  //   | "BackupFile"
  //   | "BackupFileCopy"
  //   | "AzureBackupJob"
  //   | "AwsBackupJob"
  //   | "AhvStorageSnapshotJob";

  // @Field({ nullable: true, description: 'Date and time when the latest job session started' })
  // lastRun?: string;

  // @Field({ nullable: true, description: 'Date and time when the latest job session ended' })
  // lastEndTime?: string;

  // @Field({ nullable: true, description: 'Duration of the latest job session, in seconds' })
  // lastDuration?: number;

  // @Field({ nullable: true, description: 'Rate at which VM data was processed during the latest job session' })
  // processingRate?: number;

  // @Field({ nullable: true, description: 'Average time a job session takes to complete, in seconds' })
  // avgDuration?: number;

  // @Field({ nullable: true, description: 'Total amount of data that was transferred to target during the latest job session, in bytes' })
  // transferredData?: number;

  // @Field({ nullable: true, description: 'Bottleneck in the process of transferring the data from source to target' })
  // bottleneck?:
  //   | "Unknown"
  //   | "Network"
  //   | "None"
  //   | "Proxy"
  //   | "Source"
  //   | "SourceWanAccelerator"
  //   | "Target"
  //   | "TargetWanAccelerator";

  // @Field({ description: 'Indicates whether a job schedule is enabled' })
  // isEnabled: boolean;

  // @Field({
  //   nullable: true,
  //   description: 'Type of a schedule configured for a job'
  // })
  // /** Type of a schedule configured for a job. */
  // scheduleType?:
  //   | "Unknown"
  //   | "NotScheduled"
  //   | "Daily"
  //   | "Monthly"
  //   | "Periodically"
  //   | "Continuously"
  //   | "BackupWindow"
  //   | "Chained";

  // @Field({
  //   nullable: true,
  //   description: 'Message that is displayed in case a backup job fails, Every line break is represented by the `\r\n` control characters.'
  // })
  // failureMessage?: string;

  // @Field({
  //   nullable: true,
  //   description: 'Type of a target backup location'
  // })
  // targetType?: "Unknown" | "Local" | "Cloud";

  // @Field({
  //   nullable: true,
  //   description: 'Name of a target backup location.'
  // })
  // destination?: string;

  // @Field({ nullable: true, description: 'Number of retention policy units' })
  // retentionLimit?: number;

  // @Field({ nullable: true, description: '"Unknown" | "Days" | "RestorePoints"' })
  // retentionLimitType?: "Unknown" | "Days" | "RestorePoints";

  // @Field({ nullable: true, description: 'Indicates whether the GFS retention is enabled' })
  // isGfsOptionEnabled?: boolean;
}

@ObjectType()
export class VeeamProtectionMeta {
  @Field({ nullable: true })
  backupServerJob?: VeeamProtectionBackupServerJobMeta;
  @Field({ nullable: true })
  backupAgentJob?: VeeamProtectionBackupAgentJobMeta;
}

@ObjectType()
export class Protection {
  @Field(type => ID)
  protectionId: string;

  @Field()
  title: string;

  @Field(() => [ProtectionSite])
  sites: ProtectionSite[];

  @Field(() => [AssetProtection])
  assets: AssetProtection[];

  @Field({ nullable: true })
  veeamMeta?: VeeamProtectionMeta

  @Field({ nullable: true })
  zertoMeta?: ZertoProtectionVpg

  @Field({ description: 'health of the protection: "healthy" | "warned" | "erroneous" | "unknown"' })
  health: string;

  @Field({ description: 'vendor of the protection: "Zerto" | "Veeam"' })
  vendor: Vendor;
}

@ObjectType()
export class ProtectionsPage extends Page<Protection> {
  @Field(() => [Protection])
  items: Protection[];
}

@Resolver(Protection)
class ProtectionsResolver {
  @Query(returns => ProtectionsPage)
  async getProtections(
    @Ctx("token") token?: TokenEntity,
    @Arg("sitesIdentifiers", type => [String], { nullable: true }) siteIdentifiers?: string[],
    @Arg("page", type => PageRequest, { nullable: true }) pageRequest?: PageRequest,
    @Arg("titleContains", { nullable: true }) titleContains?: string,
    @Arg("healthContains", type => [String], { nullable: true }) healthContains?: string[],
    @Arg("vendorContains", type => [String], { nullable: true }) vendorContains?: string[],
  ): Promise<ProtectionsPage> {
    if (!token) {
      throw new ForbiddenError("access denied")
    }
    const page = await Paginate(pageRequest, () => {
      let query = ProtectionEntity.createQueryBuilder("prot");
      // query.addSelect("prot.*")
      // query.addOrderBy("prot.title", "ASC")
      if (siteIdentifiers) {
        console.log('querying by sites', siteIdentifiers);
        query = query.innerJoinAndSelect('prot.sites', 'psites', 'psites.siteId IN (:...siteIdentifiers)', {
          siteIdentifiers
        })
      }
      if (titleContains) {
        query.andWhere('prot.title ILIKE :titleTerm', {
          titleTerm: `%${titleContains}%`
        })
      }
      if (healthContains) {
        console.log('querying by health', healthContains);
        query = query.andWhere('prot.health IN (:...healthContains)', {
          healthContains
        })
      }
      if (vendorContains) {
        console.log('querying by vendor', vendorContains);
        query = query.andWhere('prot.vendor IN (:...vendorContains)', {
          vendorContains
        })
      }
      return query;
    }, () => new ProtectionsPage())
    console.log("returned page", page);
    return page;
  }

  @FieldResolver()
  async sites(@Root() protection: ProtectionEntity): Promise<ProtectionSite[]> {
    const sites = await ProtectionSiteEntity.createQueryBuilder('protsite').where({
      protectionId: protection.protectionId
    }).getMany();
    return sites;
  }

  @FieldResolver()
  async assets(@Root() protection: ProtectionEntity): Promise<AssetProtection[]> {
    const list = await AssetProtectionEntity.createQueryBuilder('assetprot').where({
      protectionId: protection.protectionId
    }).getMany();
    return list;
  }

  @Query(returns => Protection, { nullable: true })
  async getProtection(
    @Ctx("token") token: TokenEntity | null,
    @Arg("protectionId") protectionId: string,
  ): Promise<Protection | null> {
    if (!token) {
      throw new ForbiddenError("access denied")
    }
    return await ProtectionEntity.createQueryBuilder("prot").leftJoinAndSelect('prot.sites', 'sites').where({
      protectionId,
    }).getOne()
  }
}

export default ProtectionsResolver;
