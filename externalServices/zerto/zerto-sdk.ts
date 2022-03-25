/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type LtrVolumesResponse = LtrVolumes[];

export interface LtrVolumes {
  /**
   * @format $uuid
   * @example f0f0b347-c586-498e-a766-347a43d225c0
   */
  identifier?: string;

  /** @example 8 */
  totalDurationInSeconds?: number;

  /** @example 2020-05-02T13:05:23.050Z */
  endTimeInUtc?: string;

  /** @example 2020-03-11T14:05:00.000Z */
  startTimeInUtc?: string;

  /** @example New Virtual Machine.vmdk */
  name?: string;
  details?: string;
  mirrorIdentifier?: string;
  dataPoolIdentifiers?: string[];
  copiedSizeInBytes?: number;
  diskSizeInBytes?: number;
  status?: "Success" | "NotAvailable" | "Partial" | "Aborted" | "Failed";
  actualBackupMethod?: string;
  waitInQueueDurationInSeconds?: number;
  zerosSkippedSizeInBytes?: number;
  redundantDataProcessedInBytes?: number;
  repositories?: LtrVolumeRepository;
  host?: LtrVolumeHost;
}

export type LtrVMsResponse = LtrVMs[];

export interface LtrVMs {
  identifier?: string;
  name?: string;
  numberOfVolumes?: number;
  copiedSizeInBytes?: number;
  details?: string;
  status?: string;
  hosts?: LtrHost[];
  totalDurationInSeconds?: number;
  actualBackupMethod?: string;
}

export interface LtrHost {
  identifier?: string;
  name?: string;
  vraName?: string;
}

export type LtrTasksResponse = LtrTask[];

export interface LtrTask {
  /** @example d1d84617-7bff-4d90-b73b-b540069764a9 */
  identifier?: string;
  status?: "Success" | "NotAvailable" | "Partial" | "Aborted" | "Failed";

  /** @example 2020-03-20T01:01:55.953Z */
  startTimeInUtc?: string;

  /** @example 2020-03-27T00:00:00.000Z */
  expirationDateInUtc?: string;

  /** @example 19 */
  totalDurationInSeconds?: number;

  /** @example 1 */
  numberOfVMs?: number;

  /** @example 13238272 */
  copiedSizeInBytes?: number;

  /** @example 536870912 */
  diskSizeInBytes?: number;
  triggerRetentionType?: "Manual" | "Daily" | "Weekly" | "Monthly" | "Yearly" | "Unknown";
  triggerBackupMethod?: "full" | "Incremental" | "Unknown";

  /** @example null */
  siteIdentifier?: string;

  /** @example Retention process successful. Total VPG size: 512.0 MB. Total size saved since last retention process 12.6 MB. Retention process duration: 00:00:19. */
  details?: string;
  vpg?: { identifier?: string; name?: string };
  zorg?: { identifier?: string; name?: string };
  repositories?: { identifier?: string; name?: string }[];
  hosts?: { identifier?: string; name?: string; vraName?: string }[];
}

export interface LtrVolumeRepository {
  /** @example dd667e7a-3794-4f90-852a-539b33a5853e */
  identifier?: string;
  name?: string;
  path?: string;
  storageType?: string;
  connectionType?: string;
}

export interface LtrVolumeHost {
  identifier?: string;
  name?: string;
  vraName?: string;
}

export interface AlertsNotificationsPreferenceBody {
  /** Account id of the user */
  accountId?: string;
  user?: { email?: string };

  /** enable the feature */
  isNotificationEnabled?: boolean;

  /** disable all the warrning alerts */
  isWarningsDisabled?: boolean;

  /** disable all the error alerts */
  isErrorsDisabled?: boolean;

  /** Number of hours to prevent the sending of a notification */
  preventPeriodInHours?: number;

  /** Send email when the alert is resolved */
  isSendOnResolved?: boolean;

  /** A list of all the selected alert types */
  enabledAlertTypes?: AlertsNotificationAlertTypeMin[];
}

export interface AlertsNotificationsPreferenceResponse {
  /** Account id of the user */
  accountId?: string;
  user?: { email?: string };

  /** enable the feature */
  isNotificationEnabled?: boolean;

  /** disable all the warrning alerts */
  isWarningsDisabled?: boolean;

  /** disable all the error alerts */
  isErrorsDisabled?: boolean;

  /** Number of hours to prevent the sending of a notification */
  preventPeriodInHours?: number;

  /** Send email when the alert is resolved */
  isSendOnResolved?: boolean;

  /** A list of all the selected alert types */
  enabledAlertTypes?: AlertsNotificationAlertTypeMin[];

  /** TODO- add description */
  suspended?: "bounceRate";
}

export interface AlertsNotificationAlertTypeMin {
  /** The ID of the alert */
  type?: string;

  /** Warning or Error of the alert */
  severity?: string;
}

export interface ProtectedVmsBody {
  vmsIdentifiers?: any[];
}

export type VmsVolumesResponse = VmsVolumes[];

export interface VmsVolumes {
  /** The VM name. */
  name?: string;

  /** The VM identifier. */
  identifier?: string;
  volumes?: ProtectedVolumes[];
}

export interface Vms {
  /** @example 3511b4b6-460f-4aa8-9956-661c3c26a9e6.vm-11 */
  identifier?: string;

  /** @example SomeVM */
  name?: string;

  /** @example 22 */
  provisionedStorageMb?: number;

  /** @example 11 */
  usedStorageMb?: number;
  vpgs?: ProtectedVpgs[];
  zorg?: { name?: string; identifier?: string };
}

export interface ProtectedVmsSite {
  /** @example Boston */
  name?: string;

  /** @example vCenter */
  type?: string;

  /** @example Protected */
  role?: string;
}

export interface ProtectedVpgs {
  /** @example VPG01 */
  name?: string;

  /**
   * @format $uuid
   * @example 3511b4b6-460f-4aa8-9956-661c3c26a9e6
   */
  identifier?: string;

  /** @example MeetingSLA */
  status?: string;

  /** @example Error */
  state?: string;
  protectedSite?: ProtectedVmsSite;
  recoverySite?: ProtectedVmsSite;
}

export type ProtectedVmsVolumes = ProtectedVolumes[];

export interface ProtectedVolumes {
  datastore?: ProtectedDatastore;

  /** @example true */
  isThinProvisioned?: boolean;

  /**
   * @format $uuid
   * @example a511b4b6-460f-4aa8-9956-661c3c26a9e2
   */
  vpgIdentifier?: string;
  owningVm?: OwningVm;
  path?: ProtectedVolumePath;
  size?: ProtectedVolumeSize;

  /** @example Journal */
  volumeType?: string;
}

export interface ProtectedDatastore {
  /** @example DS_1 */
  name?: string;

  /**
   * @format $uuid
   * @example a511b4b6-460f-4aa8-9956-661c3c26a9e2
   */
  identifier?: string;
}

export interface OwningVm {
  /** @example 3511b4b6-460f-4aa8-9956-661c3c26a9e6.vm-11 */
  identifier?: string;

  /** @example SomeVM */
  name?: string;
}

export interface ProtectedVolumePath {
  /** @example DS1/some_folder/vm-some_disk.vmdk */
  fileName?: string;

  /** @example [DS_1] ZeRTO volumes/some_vm_volume.vmdk */
  full?: string;

  /** @example ZeRTO volumes/some_vm_volume.vmdk */
  relative?: string;
}

export interface ProtectedVolumeSize {
  /**
   * The provisioned volume size in bytes
   * @example 2343
   */
  provisioned?: number;

  /**
   * The used volume size in bytes
   * @example 934
   */
  used?: number;
}

export interface SitesExecutiveSummary {
  /** The name of the site where the VPG is protected. */
  protectedSiteName?: string;

  /** The name of the site where the VPG is recovering to. */
  recoverySiteName?: string;

  /** The average throughput in MB. For ZVM versions prior to 6.0, the summary will show 'N/S'. */
  avgThroughput?: number;

  /** The average WAN traffic in MB. For ZVM versions prior to 6.0, the summary will show 'N/S'. */
  avgOutgoingWANtraffic?: number;

  /** The average I/O operations per second. For ZVM versions prior to 6.0, the summary will show 'N/S'. */
  avgIops?: number;

  /** The average compression rate in percentage  (1 - (avgOutgoingWANtrafficInMb / avgThroughputInMb) * 100). */
  avgCompressionRate?: number;
}

export interface VpgExecutiveSummary {
  /**
   * The name of the VPG.
   * @example vpg1
   */
  name?: string;

  /**
   * The name of the site where the VPG is protected.
   * @example site1
   */
  protectedSiteName?: string;

  /**
   * The name of the site where the VPG is recovering to.
   * @example site2
   */
  recoverySiteName?: string;

  /**
   * The average throughput in MB. For ZVM versions prior to 6.0, the summary will show 'N/S'.
   * @example 100
   */
  avgThroughput?: number;

  /**
   * The average WAN traffic in MB. For ZVM versions prior to 6.0, the summary will show 'N/S'.
   * @example 100
   */
  avgOutgoingWANtraffic?: number;

  /**
   * The average I/O operations per second. For ZVM versions prior to 6.0, the summary will show 'N/S'.
   * @example 100
   */
  avgIops?: number;

  /** The average compression rate in percentage  (1 - (avgOutgoingWANtrafficInMb / avgThroughputInMb) * 100). */
  avgCompressionRate?: number;
}

/**
 * The site identifier (can be * for all).
 */
export type SitesIds = string[];

/**
 * The network stats.
 */
export interface NetworkStats {
  /** The total amount of I/O operations per second. */
  iops?: StatsData;

  /** The WAN traffic in MBps. */
  wanTraffic?: StatsData;

  /** The throughput in Mb. */
  throughput?: StatsData;
}

export interface SiteNetworkPerformanceSample {
  /**
   * The average WAN traffic in MBps.
   * @example 100
   */
  avgWanTraffic?: number;

  /**
   * The average throughput in MBps.
   * @example 100
   */
  avgThroughput?: number;

  /**
   * The maximum WAN traffic in MBps.
   * @example 100
   */
  maxWanTraffic?: number;

  /**
   * The maximum throughput in MBps.
   * @example 100
   */
  maxThroughput?: number;

  /**
   * The bandwidth limit for all outgoing traffic to peer recovery sites in MBps.
   * @example 100
   */
  bandwidthThrottlingThreshold?: number;

  /**
   * The start time of the report.
   * @example 2016-07-17T13:13:55.798Z
   */
  startDate?: string;

  /**
   * The end time of the report.
   * @example 2016-07-17T13:13:55.798Z
   */
  endDate?: string;
}

export interface VpgNetworkPerformanceSample {
  /**
   * The average WAN traffic in MBps.
   * @example 100
   */
  avgWanTraffic?: number;

  /**
   * The average throughput in MBps.
   * @example 100
   */
  avgThroughput?: number;

  /**
   * The maximum WAN traffic in MBps.
   * @example 100
   */
  maxWanTraffic?: number;

  /**
   * The maximum throughput in MBps.
   * @example 100
   */
  maxThroughput?: number;

  /**
   * The start time of the report.
   * @example 2016-07-17T13:13:55.798Z
   */
  startDate?: string;

  /**
   * The end time of the report.
   * @example 2016-07-17T13:13:55.798Z
   */
  endDate?: string;

  /** The status of the VPG. */
  vpgStatus?: VpgStatus;

  /** The substatus of the VPG. */
  vpgSubStatus?: VpgSubStatus;
}

export interface IopsSample {
  /**
   * The average I/O operations per second.
   * @example 100
   */
  avg?: number;

  /**
   * The maximum I/O operations per second.
   * @example 100
   */
  max?: number;

  /**
   * The start time of the report.
   * @example 2016-07-17T13:13:55.798Z
   */
  startDate?: string;

  /**
   * The end time of the report.
   * @example 2016-07-17T13:13:55.798Z
   */
  endDate?: string;
}

/**
 * An array of site connections.
 */
export type SitesList = {
  protectedSiteIdentifier?: string;
  protectedSiteName?: string;
  recoverySiteIdentifier?: string;
  recoverySiteName?: string;
}[];

export interface StatsData {
  /** @example 100 */
  min?: number;

  /** @example 100 */
  max?: number;

  /** @example 100 */
  avg?: number;
}

export interface Stats {
  /**
   * The average RPO over the selected timeframe.
   * @example 100
   */
  avg?: number;

  /**
   * The maximum RPO over the selected timeframe.
   * @example 100
   */
  max?: number;

  /**
   * The minimum RPO over the selected timeframe.
   * @example 100
   */
  min?: number;

  /**
   * The amount of time the RPO is not available (no information for the RPO exist).
   * @example 3
   */
  totalNA?: number;

  /**
   * The amount of time the VPG is not recoverable (failing over is not possible).
   * @example 5
   */
  totalNR?: number;
}

export interface StatsJournal {
  /**
   * The average joural history over the selected timeframe.
   * @example 100
   */
  avg?: number;

  /**
   * The maximum journal history over the selected timeframe.
   * @example 100
   */
  max?: number;

  /**
   * The minimum journal history over the selected timeframe.
   * @example 100
   */
  min?: number;

  /**
   * The amount of time the VPG is not recoverable (failing over is not possible).
   * @example 3
   */
  totalNR?: number;

  /**
   * The amount of time the journal history is not available (no information for the journal history exists).
   * @example 5
   */
  totalNA?: number;
}

/**
 * Journal storage statistics
 */
export interface StatsStorage {
  /**
   * The average journal storage.
   * @example 100
   */
  avg?: number;

  /**
   * The maximum journal storage.
   * @example 100
   */
  max?: number;

  /**
   * The minimum journal storage.
   * @example 100
   */
  min?: number;
}

export interface RpoSummary {
  /**
   * The name of the VPG.
   * @example Server1
   */
  name?: string;

  /**
   * The name of the site where the VMs are protected.
   * @example Berlin
   */
  protectedSiteName?: string;

  /**
   * The name of the site where the protected VMs are recovered to.
   * @example Tel Aviv
   */
  recoverySiteName?: string;

  /**
   * The average RPO over the selected timeframe.
   * @example 7
   */
  avg?: number;

  /**
   * The configured RPO.
   * @example 60
   */
  configured?: number;

  /**
   * The percentage of time the VPG met the SLA.
   * @example 95
   */
  meetingSlaPercentage?: number;
}

/**
 * Summary information about the journal.
 */
export interface JournalSummary {
  /**
   * The name of the VPG.
   * @example Server1
   */
  name?: string;

  /**
   * The name of the site where the VMs are protected.
   * @example Berlin
   */
  protectedSiteName?: string;

  /**
   * The name of the site where the VMs are recovered to.
   * @example Tel Aviv
   */
  recoverySiteName?: string;

  /**
   * The average of the journal history over the selected time.
   * @example 400
   */
  avg?: number;

  /**
   * The configured journal history.
   * @example 76
   */
  configured?: number;

  /**
   * The average journal storage over the selected timeframe.
   * @example 2220
   */
  totalUsedStorage?: number;

  /**
   * The percentage of time the journal history met the SLA.
   * @example 90
   */
  meetingSlaPercentage?: number;
}

/**
 * A summary of RPO breaches
 */
export interface RpoBreach {
  /**
   * The date and time at which the breach started, in RFC 3339 standard ('1970-01-01T00:00:00Z'). If only the end date is added, the start date by default will be the end date minus 7 days.
   * @example 2016-07-17T13:13:55.798Z
   */
  startDate?: string;

  /**
   * The date and time at which the breach ended. The date is in RFC 3339 standard ('1970-01-01T00:00:00Z'). The default is the current time.
   * @example 2016-07-17T13:13:55.798Z
   */
  endDate?: string;

  /**
   * The duration of the breach.
   * @example 300
   */
  duration?: number;

  /**
   * The maximum RPO value that was reached during the breach event.
   * @example 1000
   */
  maxRpo?: number;

  /**
   * The configured RPO.
   * @example 500
   */
  configuredRpo?: number;
}

/**
 * A summary of the journal history breaches.
 */
export interface JournalBreach {
  /**
   * The date and time at which the breach started. The date is in RFC 3339 standard ('1970-01-01T00:00:00Z'). If only the end date is added, the start date by default will be the end date minus 7 days.
   * @example 2016-07-17T13:13:55.798Z
   */
  startDate?: string;

  /**
   * The date and time at which the breach ended. The date is in RFC 3339 standard ('1970-01-01T00:00:00Z'). The default is the current time.
   * @example 2016-07-17T13:13:55.798Z
   */
  endDate?: string;

  /**
   * The minimum journal history value that was reached during the breach event.
   * @example 1000
   */
  minJournalHistory?: number;

  /**
   * The configured journal history.
   * @example 500
   */
  configured?: number;
}

/**
 * The average RPO for a specific VPG.
 */
export interface RpoAverage {
  /**
   * The average RPO.
   * @example 5
   */
  avg?: number;

  /**
   * The maximum RPO.
   * @example 6
   */
  max?: number;

  /**
   * The configured RPO.
   * @example 300
   */
  configured?: number;

  /**
   * The start time of the report.
   * @example 2016-07-17T13:13:55.798Z
   */
  sampleStartDate?: string;

  /**
   * The end time of the report.
   * @example 2016-07-17T13:13:55.798Z
   */
  sampleEndDate?: string;

  /**
   * The average RPO ignoring the time the VPG was not recoverable.
   * @example 55
   */
  avgIgnoringNonRecoverable?: number;

  /**
   * Has the VPG been in a non recovered state during the timeframe.
   * @example true
   */
  doesNonRecoverableExist?: boolean;

  /**
   * Percentagte of valid samples.
   * @example 55
   */
  validSamplesPercentage?: number;

  /** The status of the VPG. */
  vpgStatus?: VpgStatus;

  /** The substatus of the VPG. */
  vpgSubStatus?: VpgSubStatus;
}

/**
 * A summary of the journal storage.
 */
export interface TotalUsedJournalStorage {
  /**
   * The average size of the journal storage.
   * @example 5
   */
  avg?: number;

  /**
   * The maximum size of the journal storage.
   * @example 6
   */
  max?: number;

  /**
   * The average journal storage ignoring the time the VPG was not recoverable
   * @example 55
   */
  avgIgnoringNonRecoverable?: number;

  /**
   * The start time of the report.
   * @example 2016-07-17T13:13:55.798Z
   */
  sampleStartDate?: string;

  /**
   * The end time of the report.
   * @example 2016-07-17T13:13:55.798Z
   */
  sampleEndDate?: string;

  /**
   * Has the VPG been in a non recovered state during the timeframe
   * @example true
   */
  doesNonRecoverableExist?: boolean;

  /**
   * Percentagte of valid samples
   * @example 55
   */
  validSamplesPercentage?: number;
}

/**
 * A summary of the actual journal history.
 */
export interface ActualJournalHistory {
  /**
   * The average journal history.
   * @example 5
   */
  avg?: number;

  /**
   * The min journal history.
   * @example 6
   */
  min?: number;

  /**
   * The configured journal history.
   * @example 300
   */
  configured?: number;

  /**
   * The average journal history ignoring the time the VPG was not recoverable.
   * @example 55
   */
  avgIgnoringNonRecoverable?: number;

  /**
   * The start time of the report.
   * @example 2016-07-17T13:13:55.798Z
   */
  sampleStartDate?: string;

  /**
   * The end time of the report.
   * @example 2016-07-17T13:13:55.798Z
   */
  sampleEndDate?: string;

  /**
   * Has the VPG been in a non recovered state during the timeframe.
   * @example true
   */
  doesNonRecoverableExist?: boolean;

  /**
   * Percentagte of valid sample.
   * @example 55
   */
  validSamplesPercentage?: number;
}

/**
 * A summary of the actual journal history per recovery site.
 */
export interface SiteJournalHistory {
  /**
   * The average journal history.
   * @example 5
   */
  avg?: number;

  /**
   * The min journal history.
   * @example 6
   */
  min?: number;

  /**
   * The start time of the report.
   * @example 2016-07-17T13:13:55.798Z
   */
  sampleStartDate?: string;

  /**
   * The end time of the report.
   * @example 2016-07-17T13:13:55.798Z
   */
  sampleEndDate?: string;
}

/**
 * A summary of the journal history statistics per recovery site.
 */
export interface SiteJournalHistoryStats {
  /**
   * The average journal history.
   * @example 5
   */
  min?: number;

  /**
   * The max journal history.
   * @example 6
   */
  max?: number;

  /**
   * The avg journal history.
   * @example 7
   */
  avg?: number;
}

/**
 * A summary of the journal size statistics per recovery site.
 */
export interface SiteJournalSizeStats {
  /**
   * The average journal storage.
   * @example 5
   */
  min?: number;

  /**
   * The max journal storage.
   * @example 6
   */
  max?: number;

  /**
   * The avg journal storage.
   * @example 7
   */
  avg?: number;
}

/**
 * Summary information about SLA statuses.
 */
export interface StatusesProportions {
  /**
   * The percentage of time the SLA was met for a selected time frame.
   * @example 5
   */
  meetingSlaPrecentage?: number;

  /**
   * The percentage of time the SLA was not met for a selected time frame.
   * @example 50
   */
  notMeetingSlaPrecentage?: number;

  /**
   * The percentage of time the system was processing for a selected time frame.
   * @example 45
   */
  pendingPrecentage?: number;
}

export interface Credentials {
  /** @example name */
  username?: string;

  /** @example password */
  password?: string;
}

/**
 * Authenticate a user with credentials.
 */
export interface Authenticate {
  /** @example Bearer */
  type?: string;

  /** @example JWT */
  token?: string;
}

/**
 * Aggregation count of all accounts enabled sites.
 */
export interface AccountAggregations {
  /**
   * The number of healthy VPGs across all sites.
   * @example 0
   */
  healthyVpgsCount?: number;

  /**
   * The number of VPGs that have warnings across all sites.
   * @example 0
   */
  alertedVpgsCount?: number;

  /**
   * The number of VPGs that have errors across all sites.
   * @example 0
   */
  faultedVpgsCount?: number;

  /**
   * The average actual time since the last checkpoint was written to the journal, for all VPGs in all of the customer's sites.
   * @example 0
   */
  averageActualRpo?: number;

  /**
   * The average configured SLA RPO that the user defines in the ZVM.
   * @example 0
   */
  averageConfiguredRpo?: number;

  /**
   * The number of transmitting sites.
   * @example 0
   */
  sitesCount?: number;

  /**
   * The number of VPGs across all sites.
   * @example 0
   */
  vpgsCount?: number;

  /**
   * The number of virtual machines across all sites.
   * @example 0
   */
  vmsCount?: number;

  /**
   * The number of alerts across all sites.
   * @example 0
   */
  alertsCount?: number;

  /**
   * The number of tasks across all sites.
   * @example 0
   */
  tasksCount?: number;

  /**
   * The size of all protected data across all sites.
   * @example 0
   */
  protectedDataSize?: number;
}

/**
 * The type of site
 */
export enum SiteType {
  VCenter = "vCenter",
  VCD = "vCD",
  SCVMM = "SCVMM",
  AWS = "AWS",
  Azure = "Azure",
}

/**
 * The status of a VPG
 */
export enum VpgStatus {
  Initializing = "Initializing",
  MeetingSLA = "MeetingSLA",
  NotMeetingSLA = "NotMeetingSLA",
  RpoNotMeetingSLA = "RpoNotMeetingSLA",
  HistoryNotMeetingSLA = "HistoryNotMeetingSLA",
  FailingOver = "FailingOver",
  Moving = "Moving",
  Deleting = "Deleting",
  Recovered = "Recovered",
  Inactive = "Inactive",
}

/**
 * The substatus of a VPG
 */
export enum VpgSubStatus {
  NoneInitialSync = "None InitialSync",
  Creating = "Creating",
  VolumeInitialSync = "VolumeInitialSync",
  Sync = "Sync",
  RecoveryPossible = "RecoveryPossible",
  DeltaSync = "DeltaSync",
  NeedsConfiguration = "NeedsConfiguration",
  Error = "Error",
  EmptyProtectionGroup = "EmptyProtectionGroup",
  DisconnectedFromPeerNoRecoveryPoints = "DisconnectedFromPeerNoRecoveryPoints",
  FullSync = "FullSync",
  VolumeDeltaSync = "VolumeDeltaSync",
  VolumeFullSync = "VolumeFullSync",
  FailingOverCommitting = "FailingOverCommitting",
  FailingOverBeforeCommit = "FailingOverBeforeCommit",
  FailingOverRollingBack = "FailingOverRollingBack",
  Promoting = "Promoting",
  MovingCommitting = "MovingCommitting",
  MovingBeforeCommit = "MovingBeforeCommit",
  MovingRollingBack = "MovingRollingBack",
  Deleting = "Deleting",
  PendingRemove = "PendingRemove",
  BitmapSync = "BitmapSync",
  DisconnectedFromPeer = "DisconnectedFromPeer",
  ReplicationPausedUserInitiated = "ReplicationPausedUserInitiated",
  ReplicationPausedSystemInitiated = "ReplicationPausedSystemInitiated",
  RecoveryStorageProfileError = "RecoveryStorageProfileError",
  Backup = "Backup",
  RollingBack = "RollingBack",
  RecoveryStorageError = "RecoveryStorageError",
  JournalStorageError = "JournalStorageError",
  VmNotProtectedError = "VmNotProtectedError",
  JournalOrRecoveryMissingError = "JournalOrRecoveryMissingError",
  AddedVmsInInitialSync = "AddedVmsInInitialSync",
  ReplicationPausedForMissingVolume = "ReplicationPausedForMissingVolume",
}

/**
 * The health status of a VPG
 */
export enum VpgHealth {
  Healthy = "Healthy",
  Warned = "Warned",
  Erroneous = "Erroneous",
}

export interface SiteTopology {
  /**
   * @format uuid
   * @example e902c6b6-6e52-48fd-893f-b7824120dae2
   */
  identifier?: string;

  /** @example London DR */
  name?: string;

  /** The type of site */
  type?: SiteType;

  /** @example 6.0.0 */
  vesrion?: string;

  /**
   * @pattern ^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$
   * @example 127.0.0.1
   */
  zvmpIp?: string;
  connectionStatus?: "Connected" | "TemporaryDisconnected" | "PermanentDisconnected";

  /** @example 2016-07-17T13:13:55.798Z */
  lastConnetionTime?: string;
  zorgs?: Zorg[];
  vras?: Vra[];
  incomingFromSites?: TopologyDirectedSiteIn[];
  outgoingToSites?: TopologyDirectedSiteIn[];

  /** @example 5 */
  selfVpgsCount?: number;
}

/**
 * The details of a specific site
 */
export interface SiteDetails {
  /**
   * The ID of this site.
   * @format uuid
   * @example e902c6b6-6e52-48fd-893f-b7824120dae2
   */
  identifier?: string;

  /**
   * The name of the site.
   * @example London DR
   */
  name?: string;

  /** The type of site. */
  type?: SiteType;

  /**
   * The ZVM version of the site.
   * @example 6.0.0
   */
  vesrion?: string;

  /**
   * The local IP of the ZVM
   * @pattern ^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$
   * @example 127.0.0.1
   */
  zvmpIp?: string;

  /** The connection status of the site to the Zerto Analytics service. */
  connectionStatus?: "Connected" | "TemporaryDisconnected" | "PermanentDisconnected";

  /**
   * The last time the site connected to Zerto Analytics service.
   * @example 2016-07-17T13:13:55.798Z
   */
  lastConnetionTime?: string;

  /** The list of ZORGS related to the site. */
  zorgs?: Zorg[];

  /**
   * whether the ZVM is enabled to send data to Zerto Analytics service.
   * @example true
   */
  isTransmissionEnabled?: boolean;

  /**
   * The number of ZORGS on the site.
   * @example 5
   */
  zorgsCount?: number;

  /** @example true */
  isConnected?: boolean;
}

/**
 * Retrieves a collection of VPGs, each with summary information. The operation retrieves all available VPGs in all enabled sites.
 */
export interface Vpgs {
  vpgs?: Vpg[];

  /**
   * The number of healthy VPGs
   * @example 10
   */
  healthyVpgsCount?: number;

  /**
   * The number of VPGs that have warnings.
   * @example 0
   */
  warnedVpgsCount?: number;

  /**
   * The number of VPGs that have errors.
   * @example 0
   */
  erroneousVpgsCount?: number;
}

/**
 * Information for a specific VPG, by its ID.
 */
export interface VpgDetails {
  /** Summary details for each VPG. */
  summary?: VpgSummary;

  /**
   * The configured history of the journal in minutes.
   * @example 300
   */
  configuredJournalHistory?: number;

  /**
   * The earliest recovery point in time in the journal.
   * @example 2016-07-17T13:13:55.798Z
   */
  earliestRecoveryPoint?: string;

  /**
   * The actual history of the journal.
   * @example 766
   */
  actualJournalHistory?: number;

  /** The summary of alerts for this VPG. */
  alerts?: Alert[];

  /** The summary of tasks for this VPG. */
  tasks?: Task[];

  /** The summary of VMs included in this VPG. */
  vms?: Vm[];
}

/**
 * Information for a specific VPG.
 */
export interface Vpg {
  /**
   * A unique identifier for the VPG.
   * @format uuid
   * @example e902c6b6-6e52-48fd-893f-b7824120dae2
   */
  identifier?: string;

  /**
   * The name of the VPG.
   * @example PROD_SQL1
   */
  name?: string;

  /**
   * The number of virtual machines in the VPG.
   * @example 2
   */
  vmsCount?: number;

  /** Information related to the protected site. */
  protectedSite?: Site;

  /** Information related to the recovery site. */
  recoverySite?: Site;

  /**
   * The actual time since the last checkpoint was written to the journal.
   * @example 23
   */
  actualRpo?: number;

  /**
   * The configured SLA RPO that the user defines in the ZVM.
   * @example 50
   */
  configuredRpo?: number;

  /** The health status of the VPG. */
  health?: VpgHealth;

  /** The status of the VPG. */
  status?: VpgStatus;

  /** The substatus of the VPG. */
  subStatus?: VpgSubStatus;

  /** The summary of tasks in the site where the API is running. */
  runningTasks?: Task[];

  /**
   * The configured journal history.
   * @example 800
   */
  configuredJournalHistory?: number;

  /**
   * The actual history of the journal.
   * @example 766
   */
  actualJournalHistory?: number;

  /**
   * The name of the ZORG, Zerto organization.
   * @example customer_gold
   */
  zorgName?: string;

  /**
   * whether the recovery site ZVM sending data to Zerto Analytics service.
   * @example true
   */
  isRecoverySiteTransmit?: boolean;
}

/**
 * Summary information for a VPG
 */
export interface VpgSummary {
  /**
   * A unique identifier for the VPG.
   * @format uuid
   * @example e902c6b6-6e52-48fd-893f-b7824120dae2
   */
  identifier?: string;

  /**
   * The name of the VPG.
   * @example PROD_SQL1
   */
  name?: string;

  /**
   * The number of virtual machines in the VPG.
   * @example 2
   */
  vmsCount?: number;

  /** Information related to the protected site. */
  protectedSite?: Site;

  /** Information related to the recovery site. */
  recoverySite?: Site;

  /**
   * The actual time since the last checkpoint was written to the journal.
   * @example 23
   */
  actualRpo?: number;

  /**
   * The configured SLA RPO that the user defines in the ZVM.
   * @example 50
   */
  configuredRpo?: number;

  /** The health status of the VPG. */
  health?: VpgHealth;

  /** The status of the VPG. */
  status?: VpgStatus;

  /** The substatus of the VPG. */
  subStatus?: VpgSubStatus;

  /** The summary of tasks in the site where the API is running. */
  runningTasks?: Task[];

  /**
   * The actual size of the journal.
   * @example 766
   */
  actualJournalHistory?: number;

  /**
   * The name of the ZORG, Zerto organization.
   * @example customer_gold
   */
  zorgName?: string;
}

/**
 * Summary information about a VM
 */
export interface Vm {
  /**
   * The name of the virtual machine.
   * @example SQL_PROD
   */
  name?: string;

  /**
   * The identifier of the virtual machine.
   * @example ac91b170-0131-4656-9fe8-ce0cd037aebd
   */
  identifier?: string;

  /**
   * The total provisioned storage for all VMs volumes.
   * @example 100
   */
  provisionedStorage?: number;

  /**
   * The storage used by all the volumes of the VM.
   * @example 100
   */
  usedStorage?: number;

  /**
   * The total storage used by the journal of this VM.
   * @example 100
   */
  usedJournalStorage?: number;

  /**
   * The average I/O operations per second. For ZVM versions prior to 6.0, the field will show 'N/S'.
   * @example 88
   */
  avgIops?: number;

  /**
   * The average throughput in MB. For ZVM versions prior to 6.0, the field will show 'N/S'.
   * @example 5
   */
  avgThroughput?: number;

  /**
   * The average WAN traffic in MB. For ZVM versions prior to 6.0, the field will show 'N/S'.
   * @example 12
   */
  avgOutgoingWANtraffic?: number;
}

/**
 * Information for a specific alert.
 */
export interface Alert {
  /**
   * Internal alert identifier.
   * @format uuid
   * @example 6553da44-a844-48a3-83fb-f08233bc52ed
   */
  identifier?: string;

  /**
   * The alert help identifier as denoted on the ZVM.
   * @example VPG0011
   */
  type?: string;

  /** The severity of the alert. */
  severity?: "Warning" | "Error";

  /**
   * the description of the alert
   * @example The Zerto Virtual Manager is not connected to site
   */
  description?: string;

  /** The information of the site related to the alert. */
  site?: Site;

  /** The type of the entity that issued the alert. */
  entityType?:
  | "Zvm"
  | "Vra"
  | "Vpg"
  | "CloudConnector"
  | "Storage"
  | "License"
  | "Zcm"
  | "VCD"
  | "Backup"
  | "AWS"
  | "FileRecoveryComponent";
  affectedZorgs?: string[];

  /**
   * The timestamp on the alert creation.
   * @example 2016-07-17T13:13:55.798Z
   */
  collectionTime?: string;
}

/**
 * A count of all alerts by alert type and alerts entity types.
 */
export interface AlertsAggreations {
  /**
   * Alert entity type.
   * @example Vpg
   */
  entity?: string;

  /**
   * The number of error alerts.
   * @example 10
   */
  erroneousCount?: number;

  /**
   * The number of warning alerts.
   * @example 11
   */
  warningCount?: number;
}

/**
 * Information for a specific task
 */
export interface Task {
  /**
   * The idetifier of the task for which information is returned.
   * @format uuid
   * @example 88d68edc-351f-45c5-9837-c183d9cedcbb
   */
  identifier?: string;

  /**
   * The name of the task.
   * @example Update Protection Group
   */
  name?: string;

  /**
   * The percentage of the task already done, if the status of the task is in-progress.
   * @example 46
   */
  progressPercentage?: number;

  /** The status of the task. */
  status?: "InProgress" | "WaitingForUserInput" | "Paused" | "Failed" | "Completed" | "Cancelling";

  /**
   * The time the task started.
   * @example 2016-07-17T13:13:55.798Z
   */
  startingTime?: string;

  /**
   * The time the task ended.
   * @example 2016-07-17T13:13:55.798Z
   */
  completionTime?: string;

  /**
   * The user who initiated the task.
   * @example user
   */
  initiatedBy?: string;

  /** A list of sites that are related to the task. */
  relatedSiteList?: Site[];

  /** A list of the IDs of VPGs related to this task. */
  relatedVpgList?: string[];
}

/**
 * Information about a specific site
 */
export interface Site {
  /**
   * The ID of this site.
   * @format uuid
   * @example e902c6b6-6e52-48fd-893f-b7824120dae2
   */
  identifier?: string;

  /**
   * The name of the site.
   * @example London DR
   */
  name?: string;

  /** The type of site. */
  type?: SiteType;

  /**
   * The ZVM IP address
   * @example 192.168.5.6
   */
  zvmIp?: string;
}

/**
 * Information about a specific ZORG.
 */
export interface Zorg {
  /**
   * The identifier of the ZORG.
   * @format uuid
   * @example e902c6b6-6e52-48fd-893f-b7824120dae2
   */
  identifier?: string;

  /**
   * The ZORG name.
   * @example Zorg
   */
  name?: string;
}

export type SupportedZorg = Zorg & { hasSupportedVpgs?: boolean };

/**
 * Information about a specific VRA.
 */
export interface Vra {
  /**
   * The VRA name.
   * @example Vra
   */
  name?: string;

  /**
   * The VRA version.
   * @example 6.0
   */
  version?: string;

  /**
   * The VRA installation status.
   * @example Installed
   */
  status?: string;

  /** @example 0 */
  progress?: number;
}

export interface TopologyDirectedSiteIn {
  /** @example 10 */
  directedVpgsCount?: number;

  /**
   * @format uuid
   * @example 88d68edc-351f-45c5-9837-c183d9cedcbb
   */
  identifier?: string;
}

/**
 * Information for a specific event
 */
export interface Event {
  /**
   * The identifier of the event for which information is returned.
   * @format uuid
   * @example 88d68edc-351f-45c5-9837-c183d9cedcbb
   */
  identifier?: string;

  /**
   * The event description.
   * @example Alert turned off at 1/3/2018 1:42:39 PM after 0:0:9: VPG VpgName now meets configured history of 11 minutes
   */
  description?: string;

  /** The event category. */
  category?: "Alerts" | "Events";

  /**
   * The help identifier associated with the event.
   * @example EV0057
   */
  code?: string;

  /**
   * The current status of the event (completed or not).
   * @example true
   */
  completedSuccessfully?: boolean;

  /** The event type. */
  type?:
  | "Unknown"
  | "CreateProtectionGroup"
  | "RemoveProtectionGroup"
  | "FailOver"
  | "FailOverTest"
  | "StopFailOverTest"
  | "Move"
  | "ProtectVM"
  | "UnprotectVM"
  | "InstallVra"
  | "UninstallVra"
  | "UpdateProtectionGroup"
  | "InsertTaggedCP"
  | "HandleMirrorPromotion"
  | "ActivateAllMirrors"
  | "LogCollection"
  | "ForceReconfigurationOfNewVM"
  | "ClearSite"
  | "ForceRemoveProtectionGroup"
  | "ForceUpdateProtectionGroup"
  | "ForceKillProtectionGroup"
  | "PrePostScript"
  | "InitFullSync"
  | "Pair"
  | "Unpair"
  | "InstallCloudConnector"
  | "UninstallCloudConnector"
  | "RedeployCloudConnector"
  | "ScriptExecutionFailure"
  | "SetAdvancedSiteSettings"
  | "Clone"
  | "KeepDisk"
  | "FailoverBeforeCommit"
  | "FailoverCommit"
  | "FailoverRollback"
  | "MoveBeforeCommit"
  | "MoveRollback"
  | "MoveCommit"
  | "MaintainHost"
  | "UpgradeVra"
  | "MoveProtectionGroupToManualOperationNeeded"
  | "PauseProtectionGroup"
  | "ResumeProtectionGroup"
  | "UpgradeZVM"
  | "BulkUpgradeVras"
  | "BulkUninstallVras"
  | "AlertTurnedOn"
  | "AlertTurnedOff"
  | "ChangeRecoveryHost"
  | "BackupProtectionGroup"
  | "CleanupProtectionGroupVipDiskbox"
  | "RestoreProtectionGroup"
  | "PreScript"
  | "PostScript"
  | "RemoveVmFromVc"
  | "ChangeVraPasswordIpSettings"
  | "FlrJournalMount"
  | "FlrJournalUnmount"
  | "Login"
  | "StartVMsWithOrder"
  | "HostEnteringMaintenanceMode"
  | "HostExitingMaintenanceMode"
  | "VmRestoredToSnapshot"
  | "ProtectedVmRemovedFromHypervisor"
  | "ProtectedVmAddedToHypervisor"
  | "PauseProtectionGroupForMissingVm"
  | "ResumeProtectionGroupAfterUserRemovedMissingVm"
  | "ResumeProtectionGroupAfterVmReadded";

  /**
   * The timestamp of the event creation.
   * @example 2016-07-17T13:13:55.798Z
   */
  occurredOn?: string;

  /** Information about a specific site */
  site?: { identifier?: string; name?: string; type?: SiteType };

  /** Information about a specific ZORG. */
  zorg?: Zorg;
}

/**
 * Events list with total count of events (according to query parameters)
 */
export interface Events {
  /** Information for a specific event */
  events?: Event;

  /** @example 50 */
  totalCount?: number;
}

/**
 * Average RPO list of a single account
 */
export interface AccountRpoAverage {
  /**
   * The average RPO of a specific hour.
   * @example 15
   */
  rpo?: number;

  /**
   * The start time of the average RPO.
   * @example 2016-07-17T13:00:00.798Z
   */
  sampleStartDate?: string;

  /**
   * The end time of the average RPO.
   * @example 2016-07-17T14:00:00.798Z
   */
  sampleEndDate?: string;
}

/**
 * The aggregated storage used in datastore/s / datastore cluster, for a selected site.
 */
export interface DatastoresUsage {
  /**
   * Total amount of storage used for recovery journal, in bytes.
   * @example 10000
   */
  journal?: number;

  /**
   * Total amount of storage used for recovery volumes, in bytes.
   * @example 10000
   */
  recovery?: number;

  /**
   * Total amount of storage used for protected volumes, in bytes.
   * @example 10000
   */
  protected?: number;

  /**
   * Total amount of storage used for scratch volumes, in bytes.
   * @example 10000
   */
  scratch?: number;

  /**
   * Total amount of storage used for appliance volumes, in bytes.
   * @example 10000
   */
  appliance?: number;

  /**
   * Total amount of other storage used, beside the journal, recovery and protected volumes, in bytes
   * @example 10000
   */
  other?: number;

  /**
   * Total free space in all datastores, in bytes.
   * @example 10000
   */
  free?: number;
}

/**
 * The datastore information.
 */
export interface DatastoreConfig {
  /** List of datastore devices. */
  devices?: string[];
}

/**
 * The datastore health status.
 */
export interface DatastoreHealthAlert {
  /**
   * The alert description.
   * @example Datastore alert
   */
  description?: string;

  /** The alert level. */
  level?: string;

  /** Link to alert details. */
  link?: string;
}

/**
 * The datastore information.
 */
export interface DatastoreHealth {
  /** Alerts associated with the datastore. */
  alerts?: DatastoreHealthAlert[];

  /** The datastore health status. */
  status?: string;
}

/**
 * The amount of storage used by the datastore stats.
 */
export interface DatastoreUsageStats {
  /**
   * The datastore capacity in bytes.
   * @example 100000
   */
  capacity?: number;

  /**
   * The datastore free space in bytes.
   * @example 100000
   */
  freeSpace?: number;

  /**
   * The datastore provisioned size in bytes.
   * @example 100000
   */
  provisionedSize?: number;

  /**
   * The amount used by the datastore in bytes.
   * @example 100000
   */
  usedSize?: number;
}

/**
 * The amount of storage used.
 */
export interface Usage {
  /** The provisioned size in bytes. */
  provisionedSize?: number;

  /** The storage used by the datastore in bytes. */
  usedSize?: number;
}

/**
 * The total amount of storage used for Zerto in the datastores. Size is displayed in bytes.
 */
export interface DatastoreZertoUsageStats {
  /** Amount of storage used for datastore appliances. */
  appliances?: Usage;

  /** Amount of storage used for recovery journals. */
  journal?: Usage;

  /** Amount of storage used for protected volumes. */
  protected?: Usage;

  /** Amount of storage used for recovery volumes. */
  recovery?: Usage;

  /** Amount of storage used for scratch volumes. */
  scratch?: Usage;

  /** Amount of storage not used for Zerto. */
  unknown?: Usage;
}

/**
 * The datastore information.
 */
export interface DatastoreStats {
  /** The datastore availability status. */
  availabilityStatus?: string;

  /**
   * The number of VRAs using the datastore.
   * @example 2
   */
  numberOfVRAs?: number;

  /**
   * The number of incoming VMs to be recovered using the datastore.
   * @example 10
   */
  numberOfIncomingVMs?: number;

  /**
   * The number of outgoing VMs to be protected using the datastore.
   * @example 10
   */
  numberOfOutgoingVMs?: number;

  /** The datastore usage. */
  usage?: { datastore?: DatastoreUsageStats; zerto?: DatastoreZertoUsageStats };
}

/**
 * The datastore site information
 */
export interface DatastoresSite {
  /**
   * the datastore ID
   * @example datastore-id
   */
  identifer?: string;

  /**
   * the datastore name
   * @example Datstore Name
   */
  name?: string;

  /** The datastore's site */
  site?: { identifier?: string; name?: string; siteType?: "vCenter" | "vCD" | "SCVMM" | "AWS" | "Azure" };

  /** The datastore's cluster if exist */
  cluster?: { identifier?: string; name?: string };
}

/**
 * The datastore site list information
 */
export type DatastoresSiteList = DatastoresSite[];

/**
 * The datastore list and information.
 */
export interface Datastore {
  /**
   * The datastore identifier.
   * @example datastore-id
   */
  identifer?: string;

  /**
   * The datastore name.
   * @example Datstore Name
   */
  name?: string;

  /** The site by which to filter the datastore. */
  site?: { identifier?: string; name?: string; siteType?: "vCenter" | "vCD" | "SCVMM" | "AWS" | "Azure" };

  /** The datastore cluster, if it exists. */
  cluster?: { identifier?: string; name?: string };

  /** The datastore configuration details. */
  config?: DatastoreConfig;

  /** The datastore health status. */
  health?: DatastoreHealth;

  /** The datastore stats. */
  stats?: DatastoreStats;
}

/**
 * The datastores list and usage.
 */
export interface Datastores {
  /** Datastores list. */
  datastores?: Datastore[];

  /** The aggregated storage used in a datastore/s or datastore cluster, for the selected site. */
  usage?: DatastoresUsage;
}

/**
 * Information about a specific error.
 */
export interface Error {
  /** The error code. */
  errorCode?: number;

  /** The error message. */
  errorMessage?: string;
}

/**
 * Information for a specific license
 */
export interface License {
  alerts?: LicenseAlerts[];

  /**
   * The number of available VMs.
   * @example 999
   */
  availableVMsCount?: number;

  /**
   * The number of used VMs.
   * @example 1
   */
  usedVMsCount?: number;

  /**
   * The timestamp of the license expiration.
   * @example 2016-07-17T13:13:55.798Z
   */
  expirationDate?: string;

  /**
   * License key.
   * @example ET5XEZVVN69WYHYPGG2KXWHH5FPF5EAGLRYHSZUZMZ
   */
  licenseKey?: string;

  /**
   * License type.
   * @example Trial
   */
  licenseType?: string;

  /** Site names */
  siteNames?: string[];

  /** License status */
  status?: "Healthy" | "Warning" | "Error";
}

/**
 * License alerts
 */
export interface LicenseAlerts {
  /**
   * Internal alert identifier.
   * @format uuid
   * @example 6553da44-a844-48a3-83fb-f08233bc52ed
   */
  identifier?: string;

  /**
   * The alert help identifier as denoted on the ZVM.
   * @example VPG0011
   */
  type?: string;

  /**
   * The timestamp of creation alert date.
   * @example 2016-07-17T13:13:55.798Z
   */
  createdDateInUtc?: string;

  /** The severity of the alert. */
  severity?: "Warning" | "Error";
}

/**
 * The identifier and name of the datastore .
 */
export interface DatastoreEntity {
  /**
   * A unique identifier for the datastore.
   * @format uuid
   * @example e902c6b6-6e52-48fd-893f-b7824120dae2
   */
  identifier?: string;

  /**
   * The datastore name.
   * @example DS_PROD_1
   */
  name?: string;
}

/**
 * The identifier and name of the VPG.
 */
export interface VpgEntity {
  /**
   * A unique identifier for the VPG.
   * @format uuid
   * @example e902c6b6-6e52-48fd-893f-b7824120dae2
   */
  identifier?: string;

  /**
   * The VPG name.
   * @example PROD_SQL1
   */
  name?: string;
}

/**
 * Identifier and name of a virtual machine
 */
export interface VmEntity {
  /**
   * A unique identifier for the virtual machine.
   * @format uuid
   * @example e902c6b6-6e52-48fd-893f-b7824120dae2
   */
  identifier?: string;

  /**
   * The virtual machine name.
   * @example SQL_PROD
   */
  name?: string;
}

/**
 * The used and provisioned storage of a volume.
 */
export interface VolumeSize {
  /**
   * The amount of data in the volume which is in use.
   * @example 10000
   */
  used?: number;

  /**
   * The amount of data in the volume which has been provisioned.
   * @example 500000
   */
  provisioned?: number;
}

/**
 * The full path, relative path and file name of the volume.
 */
export interface VolumePath {
  /**
   * The file name of a volume.
   * @example SQL_BACKUP_VOLUME
   */
  fileName?: string;

  /**
   * The full path of a volume.
   * @example DSCLUSTER/CLUSTER1/DS1/SQL_BACKUP_VOLUME
   */
  full?: string;

  /**
   * The relative path of a volume.
   * @example SQL_BACKUP_VOLUME
   */
  relative?: string;
}

/**
 * Information about a specific volume.
 */
export interface Volume {
  /** The identifier and name of a datastore. */
  datastore?: DatastoreEntity;

  /** The identifier and name of the VPG. */
  vpg?: VpgEntity;

  /** The identifier and name of the VM. */
  protectedVM?: VmEntity;

  /** The identifier and name of the VM. */
  owningVM?: VmEntity;

  /** The used and provisioned size of a volume. */
  size?: VolumeSize;

  /** The file name, full path and relative path of a volume. */
  path?: VolumePath;

  /**
   * The volume identifier.
   * @example scsi:0:1
   */
  volumeIdentifier?: string;

  /** The volume type. */
  volumeType?: "JOURNAL" | "RECOVERY" | "PROTECTED" | "VRA" | "ZCC" | "CLONE" | "RESTORE";

  /**
   * A boolean which determines if the volume was set to Thin provisioned.
   * @example true
   */
  isThinProvisioned?: boolean;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";
import FormData = require("form-data");

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "undefined" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Zerto Analytics APIs
 * @version 2.0.0
 * @externalDocs https://docs.api.zerto.com/error-guide/error-guide.html
 *
 * The REST APIs provide a way to access key monitoring and reporting metrics, without having to use the Zerto User Interface. <br/>
 * It includes information from multiple Zerto Virtual Managers aggregated and consolidated in a single location <br/>
 * The Zerto Analytics Monitoring RESTful API allows you access to real time monitoring information about your environments, including information about VPGs, Tasks, Alerts and Events. <br/>
 * The Zerto Analytics Reporting RESTful API allows you access to reporting information, including information about your RPO, Journal and Network performance of up to one month
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  v2 = {
    /**
 * @description All requests to the server, apart from the request to authenticate, must contain a security token which is provided on successful authentication. \ In order to authenticate, the user sends myZerto credentials (user/password).
 * 
 * @tags Authentication
 * @name AuthTokenCreate
 * @summary Authentication

 * @request POST:/v2/auth/token
 */
    authTokenCreate: (data: Credentials, params: RequestParams = {}) =>
      this.request<Authenticate, Error>({
        path: `/v2/auth/token`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
 * @description Retrieve statistics related to all the user’s sites - belonging to a single account.
 * 
 * @tags Monitoring
 * @name MonitoringList
 * @summary Get account details

 * @request GET:/v2/monitoring/
 * @secure
 */
    monitoringList: (query?: { zorgIdentifier?: string }, params: RequestParams = {}) =>
      this.request<AccountAggregations, Error>({
        path: `/v2/monitoring/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Retrieve a list of all sites.
 * 
 * @tags Monitoring
 * @name MonitoringSitesList
 * @summary Get sites information

 * @request GET:/v2/monitoring/sites
 * @secure
 */
    monitoringSitesList: (query?: { zorgIdentifier?: string }, params: RequestParams = {}) =>
      this.request<SiteDetails[], Error>({
        path: `/v2/monitoring/sites`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Retrieves a collection of Sites topology information structures for all the available user’s sites, including disabled and non-transmitting due to lack of a transmitter (older ZVR versions). | The following note should be taken into consideration: \ The information might not be complete, since there are sites that do not transmit (disabled), yet this API concludes their presence and VPG count from the VPGs they share with transmitting sites. Such a disabled site might have relations with other disabled sites, which this API does not reveal.
 * 
 * @tags Monitoring
 * @name MonitoringSitesFormatTopologyList
 * @summary Get sites topology information

 * @request GET:/v2/monitoring/sites?format=topology
 * @secure
 */
    monitoringSitesFormatTopologyList: (query?: { zorgIdentifier?: string }, params: RequestParams = {}) =>
      this.request<SiteTopology[], Error>({
        path: `/v2/monitoring/sites?format=topology`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Retrieve a list of all VPGs.
 * 
 * @tags Monitoring
 * @name MonitoringVpgsList
 * @summary Get all VPGs

 * @request GET:/v2/monitoring/vpgs
 * @secure
 */
    monitoringVpgsList: (query?: { zorgIdentifier?: string }, params: RequestParams = {}) =>
      this.request<Vpgs, Error>({
        path: `/v2/monitoring/vpgs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Retrieve information about a specific VPG - using the VPG identifier.
 * 
 * @tags Monitoring
 * @name MonitoringVpgsDetail
 * @summary Get details of a VPG

 * @request GET:/v2/monitoring/vpgs/{vpgIdentifier}
 * @secure
 */
    monitoringVpgsDetail: (vpgIdentifier: string, params: RequestParams = {}) =>
      this.request<VpgDetails, Error>({
        path: `/v2/monitoring/vpgs/${vpgIdentifier}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Retrieve information about all existing alerts.
 * 
 * @tags Monitoring
 * @name MonitoringAlertsList
 * @summary Get alerts details

 * @request GET:/v2/monitoring/alerts
 * @secure
 */
    monitoringAlertsList: (query?: { zorgIdentifier?: string; limitTo?: number }, params: RequestParams = {}) =>
      this.request<Alert[], Error>({
        path: `/v2/monitoring/alerts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Retreive the number of alerts sorted by entity (for example: VPG, ZCM) and by type (warning or error).
 * 
 * @tags Monitoring
 * @name MonitoringAlertsFormatAggregationsList
 * @summary Get alert count

 * @request GET:/v2/monitoring/alerts?format=aggregations
 * @secure
 */
    monitoringAlertsFormatAggregationsList: (query?: { zorgIdentifier?: string }, params: RequestParams = {}) =>
      this.request<AlertsAggreations[], Error>({
        path: `/v2/monitoring/alerts?format=aggregations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Retrieve information about a specific alert using the alert identifier.
 * 
 * @tags Monitoring
 * @name MonitoringAlertsDetail
 * @summary Get details of a specific alert

 * @request GET:/v2/monitoring/alerts/{alertIdentifier}
 * @secure
 */
    monitoringAlertsDetail: (alertIdentifier: string, params: RequestParams = {}) =>
      this.request<Alert, Error>({
        path: `/v2/monitoring/alerts/${alertIdentifier}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Retrieve details of all existing tasks.
 * 
 * @tags Monitoring
 * @name MonitoringTasksList
 * @summary Get tasks’ details

 * @request GET:/v2/monitoring/tasks
 * @secure
 */
    monitoringTasksList: (query?: { zorgIdentifier?: string; limitTo?: number }, params: RequestParams = {}) =>
      this.request<Task[], Error>({
        path: `/v2/monitoring/tasks`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Retrieve information about a specific task using the task identifier.
 * 
 * @tags Monitoring
 * @name MonitoringTasksDetail
 * @summary Get details of a specific Task

 * @request GET:/v2/monitoring/tasks/{taskIdentifier}
 * @secure
 */
    monitoringTasksDetail: (taskIdentifier: string, params: RequestParams = {}) =>
      this.request<Task, Error>({
        path: `/v2/monitoring/tasks/${taskIdentifier}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Retreive details of all existing events.
 * 
 * @tags Monitoring
 * @name MonitoringEventsList
 * @summary Get events’ details

 * @request GET:/v2/monitoring/events
 * @secure
 */
    monitoringEventsList: (
      query?: { category?: string; limitTo?: number; startDate?: string; endDate?: string; zorgIdentifier?: string },
      params: RequestParams = {},
    ) =>
      this.request<Events, Error>({
        path: `/v2/monitoring/events`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Retrieve a list of all ZORGs.
 * 
 * @tags Monitoring
 * @name MonitoringZorgsList
 * @summary Get all ZORGs

 * @request GET:/v2/monitoring/zorgs
 * @secure
 */
    monitoringZorgsList: (params: RequestParams = {}) =>
      this.request<SupportedZorg[], Error>({
        path: `/v2/monitoring/zorgs`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Get a list of datastore/s, filtered by site. Enter a site identifier only to get the list of all datastores. Enter a site identifier and cluster identifier to get a list of datastores in the cluster. Enter a site identifier and datastore identifier to get specific datastore info.
 * 
 * @tags Monitoring
 * @name MonitoringDatastoresList
 * @summary Retrieves account datastore information

 * @request GET:/v2/monitoring/datastores
 * @secure
 */
    monitoringDatastoresList: (
      query: { siteIdentifier: string; clusterIdentifier?: string; datastoreIdentifier?: string },
      params: RequestParams = {},
    ) =>
      this.request<Datastores, Error>({
        path: `/v2/monitoring/datastores`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Retrieves account volumes by datastore. Enter a site identifier and cluster identifier to get the list of volumes that exist in the datastore cluster. Or, enter a site identifier and datastore indentifier to get the list of volumes that exist in the datastore. To retrieve all volumes for a specific VPG, enter a VPG identifier only.
 * 
 * @tags Monitoring
 * @name MonitoringVolumesList
 * @summary Get a list of volumes that exist in the specified datastore/s

 * @request GET:/v2/monitoring/volumes
 * @secure
 */
    monitoringVolumesList: (
      query?: {
        siteIdentifier?: string;
        clusterIdentifier?: string;
        datastoreIdentifier?: string;
        vpgIdentifier?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Volume[], Error>({
        path: `/v2/monitoring/volumes`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Retrieve a list of all the protected virtual machines from all sites.
 * 
 * @tags Monitoring
 * @name MonitoringProtectedVmsList
 * @summary Get all protected VMs.

 * @request GET:/v2/monitoring/protected-vms
 * @secure
 */
    monitoringProtectedVmsList: (params: RequestParams = {}) =>
      this.request<Vms, Error>({
        path: `/v2/monitoring/protected-vms`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Creates a report of the requested protected virtual machines' volumes.
 * 
 * @tags Monitoring
 * @name MonitoringProtectedVmsCreate
 * @summary Create a report request to retrieve protected VMs' volumes for specific VMs.

 * @request POST:/v2/monitoring/protected-vms
 * @secure
 */
    monitoringProtectedVmsCreate: (data: ProtectedVmsBody, params: RequestParams = {}) =>
      this.request<any, Error>({
        path: `/v2/monitoring/protected-vms`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
 * @description Retrieve a list of protected virtual machines' volumes.
 * 
 * @tags Monitoring
 * @name MonitoringProtectedVmsReportIdDetail
 * @summary Get protected VMs volumes by report ID.

 * @request GET:/v2/monitoring/protected-vms?reportId={reportId}
 * @secure
 */
    monitoringProtectedVmsReportIdDetail: (reportId: string, query: { reportId: string }, params: RequestParams = {}) =>
      this.request<VmsVolumesResponse, Error>({
        path: `/v2/monitoring/protected-vms?reportId=${reportId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Retrieve a specified protected VM by ID.
 * 
 * @tags Monitoring
 * @name MonitoringProtectedVmsDetail
 * @summary Get a protected VM by ID

 * @request GET:/v2/monitoring/protected-vms/{vmIdentifier}
 * @secure
 */
    monitoringProtectedVmsDetail: (vmIdentifier: string, params: RequestParams = {}) =>
      this.request<Vms, Error>({
        path: `/v2/monitoring/protected-vms/${vmIdentifier}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Retrieves protected vms' volumes
 * 
 * @tags Monitoring
 * @name MonitoringProtectedVmsVolumesDetail
 * @summary Get a protected VM's volumes by VM ID

 * @request GET:/v2/monitoring/protected-vms/{vmIdentifier}/volumes
 * @secure
 */
    monitoringProtectedVmsVolumesDetail: (vmIdentifier: string, params: RequestParams = {}) =>
      this.request<ProtectedVmsVolumes, Error>({
        path: `/v2/monitoring/protected-vms/${vmIdentifier}/volumes`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Retrieve a list of all licenses.
 * 
 * @tags Licenses
 * @name LicensesList
 * @summary Get account licenses

 * @request GET:/v2/licenses
 * @secure
 */
    licensesList: (params: RequestParams = {}) =>
      this.request<License[], Error>({
        path: `/v2/licenses`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Retrieves RPO historical statistics for a given VPG.
 * 
 * @tags RPO Reports
 * @name ReportsRpoSummaryList
 * @summary Retrieves RPO executive summary of the VPG

 * @request GET:/v2/reports/rpo-summary
 * @secure
 */
    reportsRpoSummaryList: (
      query: { startDate?: string; endDate?: string; vpgIdentifier: string },
      params: RequestParams = {},
    ) =>
      this.request<RpoSummary, Error>({
        path: `/v2/reports/rpo-summary`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Retrieves journal historical statistics for a given VPG.
 * 
 * @tags Journal Reports
 * @name ReportsJournalSummaryList
 * @summary Retrieves Journal executive summary

 * @request GET:/v2/reports/journal-summary
 * @secure
 */
    reportsJournalSummaryList: (
      query: { startDate?: string; endDate?: string; vpgIdentifier: string },
      params: RequestParams = {},
    ) =>
      this.request<JournalSummary, Error>({
        path: `/v2/reports/journal-summary`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Retrieves Journal Storage minimum, maximum and average. Statistics over the selected timeframe.
 * 
 * @tags Journal Reports
 * @name ReportsStatsJournalStorageList
 * @summary Retrieves Journal Storage minimum, maximum and average. Statistics over the selected timeframe

 * @request GET:/v2/reports/stats-journal-storage
 * @secure
 */
    reportsStatsJournalStorageList: (
      query: { startDate?: string; endDate?: string; vpgIdentifier: string },
      params: RequestParams = {},
    ) =>
      this.request<StatsData, Error>({
        path: `/v2/reports/stats-journal-storage`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Retrieves Journal history min, max and avg Statistics over the selected timeframe.
 * 
 * @tags Journal Reports
 * @name ReportsStatsJournalHistoryList
 * @summary Retrieves Journal history min, max and avg Statistics over the selected timeframe.

 * @request GET:/v2/reports/stats-journal-history
 * @secure
 */
    reportsStatsJournalHistoryList: (
      query: { startDate?: string; endDate?: string; vpgIdentifier: string },
      params: RequestParams = {},
    ) =>
      this.request<StatsJournal, Error>({
        path: `/v2/reports/stats-journal-history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Retrieves the journal history breaches over the selected timeframe.
 * 
 * @tags Journal Reports
 * @name ReportsJournalBreachList
 * @summary Retrieves the journal history breaches over the selected timeframe.

 * @request GET:/v2/reports/journal-breach
 * @secure
 */
    reportsJournalBreachList: (
      query: { startDate?: string; endDate?: string; vpgIdentifier: string },
      params: RequestParams = {},
    ) =>
      this.request<JournalBreach[], Error>({
        path: `/v2/reports/journal-breach`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Retrieves Rpo min, max and avg. Stats.
 * 
 * @tags RPO Reports
 * @name ReportsStatsRpoList
 * @summary Retrieves Rpo min, max and avg. Stats.

 * @request GET:/v2/reports/stats-rpo
 * @secure
 */
    reportsStatsRpoList: (
      query: { startDate?: string; endDate?: string; vpgIdentifier: string },
      params: RequestParams = {},
    ) =>
      this.request<Stats, Error>({
        path: `/v2/reports/stats-rpo`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Retrieves RPO breaches over the selected timeframe.
 * 
 * @tags RPO Reports
 * @name ReportsRpoBreachList
 * @summary Retrieves RPO Breaches over the selected timeframe

 * @request GET:/v2/reports/rpo-breach
 * @secure
 */
    reportsRpoBreachList: (
      query: { startDate?: string; endDate?: string; vpgIdentifier: string },
      params: RequestParams = {},
    ) =>
      this.request<RpoBreach[], Error>({
        path: `/v2/reports/rpo-breach`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Retrieves RPO SLA status distribution over the selected timeframe.
 * 
 * @tags RPO Reports
 * @name ReportsRpoStatusesProportionsList
 * @summary Retrieves RPO SLA status distribution over the selected timeframe.

 * @request GET:/v2/reports/rpo-statuses-proportions
 * @secure
 */
    reportsRpoStatusesProportionsList: (
      query: { startDate?: string; endDate?: string; vpgIdentifier: string },
      params: RequestParams = {},
    ) =>
      this.request<StatusesProportions, Error>({
        path: `/v2/reports/rpo-statuses-proportions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description RRetrieves journal history SLA status distribution over selected timeframe.
 * 
 * @tags Journal Reports
 * @name ReportsJournalStatusesProportionsList
 * @summary Retrieves journal history SLA status distribution over selected timeframe.

 * @request GET:/v2/reports/journal-statuses-proportions
 * @secure
 */
    reportsJournalStatusesProportionsList: (
      query: { startDate?: string; endDate?: string; vpgIdentifier: string },
      params: RequestParams = {},
    ) =>
      this.request<StatusesProportions, Error>({
        path: `/v2/reports/journal-statuses-proportions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Retrieves list of average RPO values for a specific VPG, filtered by start date, end date, and optional interval. The interval defines the RPO samples interval. by default a 1 minutes interval.
 * 
 * @tags RPO Reports
 * @name ReportsRpoAverageList
 * @summary Retrieves list of historical average RPO values for a specific VPG over selected timeframe

 * @request GET:/v2/reports/rpo-average
 * @secure
 */
    reportsRpoAverageList: (
      query: { vpgIdentifier: string; startDate?: string; endDate?: string; interval?: number },
      params: RequestParams = {},
    ) =>
      this.request<RpoAverage[], Error>({
        path: `/v2/reports/rpo-average`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Retrieves the list of historical average journal storage values for a specific VPG, filtered by start date, end date, and optional interval. The interval defines the journal storage samples interval.
 * 
 * @tags Journal Reports
 * @name ReportsJournalSizeAverageList
 * @summary Retrieves list of historical average Journal storage values for a specific VPG over the selected timeframe

 * @request GET:/v2/reports/journal-size-average
 * @secure
 */
    reportsJournalSizeAverageList: (
      query: { vpgIdentifier: string; startDate?: string; endDate?: string; interval?: number },
      params: RequestParams = {},
    ) =>
      this.request<TotalUsedJournalStorage, Error>({
        path: `/v2/reports/journal-size-average`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Retrieves the list of historical average journal history values for a specific VPG, filtered by start date, end date, and optional interval. The interval defines the journal history samples interval.
 * 
 * @tags Journal Reports
 * @name ReportsJournalHistoryAverageList
 * @summary Retrieves list of historical average Journal history values for a specific VPG over the selected timeframe

 * @request GET:/v2/reports/journal-history-average
 * @secure
 */
    reportsJournalHistoryAverageList: (
      query: { vpgIdentifier: string; startDate?: string; endDate?: string; interval?: number },
      params: RequestParams = {},
    ) =>
      this.request<ActualJournalHistory, Error>({
        path: `/v2/reports/journal-history-average`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Get list of samples of average Journal History values for all VPGs replicating to a specified recovery site, filtered by start date, end date, and optional interval. The interval defines the Journal History samples interval.
 * 
 * @tags Journal Reports
 * @name ReportsSiteJournalHistoryAverageList
 * @summary Retrieves the average Journal History values for all VPGs replicating to a specificied recovery site and timeframe.

 * @request GET:/v2/reports/site-journal-history-average
 * @secure
 */
    reportsSiteJournalHistoryAverageList: (
      query: { recoverySiteIdentifier: string; startDate?: string; endDate?: string; interval?: number },
      params: RequestParams = {},
    ) =>
      this.request<SiteJournalHistory, Error>({
        path: `/v2/reports/site-journal-history-average`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Get list of samples of total Journal Size of all VPGs replicating to a specified recovery site, filtered by start date, end date, and optional interval. The interval defines the Journal Size samples interval.
 * 
 * @tags Journal Reports
 * @name ReportsSiteJournalSizeAverageList
 * @summary Retrieves the total Journal Size of all VPGs replicating to a specified recovery site and timeframe.

 * @request GET:/v2/reports/site-journal-size-average
 * @secure
 */
    reportsSiteJournalSizeAverageList: (
      query: { recoverySiteIdentifier: string; startDate?: string; endDate?: string; interval?: number },
      params: RequestParams = {},
    ) =>
      this.request<SiteJournalHistory, Error>({
        path: `/v2/reports/site-journal-size-average`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Get Max, Avg. and Min Journal History statistics for all VPGs replicating to a specified recovery site, filtered by start date, end date, and optional interval. The interval defines the journal history samples interval.
 * 
 * @tags Journal Reports
 * @name ReportsSiteJournalHistoryStatsList
 * @summary Retrieves Journal History stats.

 * @request GET:/v2/reports/site-journal-history-stats
 * @secure
 */
    reportsSiteJournalHistoryStatsList: (
      query: { recoverySiteIdentifier: string; startDate?: string; endDate?: string; interval?: number },
      params: RequestParams = {},
    ) =>
      this.request<SiteJournalHistoryStats, Error>({
        path: `/v2/reports/site-journal-history-stats`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Get Max, Avg. and Min of total Journal Size statistics for all VPGs replicating to a specified recovery site, filtered by start date, end date, and optional interval. The interval defines the journal history samples interval.
 * 
 * @tags Journal Reports
 * @name ReportsSiteJournalSizeStatsList
 * @summary Retrieves Journal Size stats.

 * @request GET:/v2/reports/site-journal-size-stats
 * @secure
 */
    reportsSiteJournalSizeStatsList: (
      query: { recoverySiteIdentifier: string; startDate?: string; endDate?: string; interval?: number },
      params: RequestParams = {},
    ) =>
      this.request<SiteJournalSizeStats, Error>({
        path: `/v2/reports/site-journal-size-stats`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Get a Journal History executive summary for all VPGs replicating to a specified recovery site.
 * 
 * @tags Journal Reports
 * @name ReportsSiteJournalHistorySummaryList
 * @summary Retrieves Journal History executive summary.

 * @request GET:/v2/reports/site-journal-history-summary
 * @secure
 */
    reportsSiteJournalHistorySummaryList: (
      query: { recoverySiteIdentifier: string; startDate?: string; endDate?: string; interval?: number },
      params: RequestParams = {},
    ) =>
      this.request<SiteJournalHistory, Error>({
        path: `/v2/reports/site-journal-history-summary`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Get all the sites, protected and recovery, filtered by start date and end date. - When startDate is omitted, the default startDate is 7 days before the endDate. - When endDate is ommited, the default endDate is the current date. - When both startDate and endDate are omitted, the default date range is the last 7 days.
 * 
 * @tags Network Reports
 * @name ReportsSitesListList
 * @summary Retrieves the list of sites that existed in the selected timeframe

 * @request GET:/v2/reports/sites-list
 * @secure
 */
    reportsSitesListList: (
      query?: { startDate?: string; endDate?: string; zorgIdentifier?: string },
      params: RequestParams = {},
    ) =>
      this.request<SitesList, Error>({
        path: `/v2/reports/sites-list`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Get a network executive summary for sites, filtered by start date and end date. The following options are available: - To view the network executive summary of all outgoing traffic from a protected site to all its replicating sites, specify only the protected site identifier. - To view the network executive summary between two sites, specifiy both the protected site identifier and the recovery site identifier.
 * 
 * @tags Network Reports
 * @name ReportsSitesNetworkSummaryList
 * @summary Retrieves sites network performance executive summary

 * @request GET:/v2/reports/sites-network-summary
 * @secure
 */
    reportsSitesNetworkSummaryList: (
      query?: {
        startDate?: string;
        endDate?: string;
        protectedSiteIdentifier?: string;
        recoverySiteIdentifier?: string;
        zorgIdentifier?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SitesExecutiveSummary, Error>({
        path: `/v2/reports/sites-network-summary`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Get Max, Avg. and Min network statistics for Throughput, Wan and IOPS traffic for sites, filtered by start date and end date. The following options are available: - To view network stats of all outgoing traffic from a protected site to all its replicating sites, specify only the protected site identifier. - To view network stats between two sites, specifiy both the protected site identifier and the recovery site identifier.
 * 
 * @tags Network Reports
 * @name ReportsSitesNetworkStatsList
 * @summary Retrieves sites network stats

 * @request GET:/v2/reports/sites-network-stats
 * @secure
 */
    reportsSitesNetworkStatsList: (
      query?: {
        startDate?: string;
        endDate?: string;
        protectedSiteIdentifier?: string;
        recoverySiteIdentifier?: string;
        zorgIdentifier?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<NetworkStats, Error>({
        path: `/v2/reports/sites-network-stats`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Get list of samples of average and maximum network performance metrics (throughput and WAN traffic) for sites, filtered by start date and end date, and optional intervals.\ The following options are available: - To view average and maximum network performance of throughput vs. WAN traffic of all outgoing traffic from a protected site to all its replicating sites, specify only the protected site identifier. - To view average and maximum network performance of throughput and WAN traffic between two sites, specifiy both the protected site identifier and the recovery site identifier.
 * 
 * @tags Network Reports
 * @name ReportsSitesNetworkPerformanceAverageList
 * @summary Throughput vs. WAN traffic list

 * @request GET:/v2/reports/sites-network-performance-average
 * @secure
 */
    reportsSitesNetworkPerformanceAverageList: (
      query?: {
        startDate?: string;
        endDate?: string;
        protectedSiteIdentifier?: string;
        recoverySiteIdentifier?: string;
        interval?: number;
        zorgIdentifier?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SiteNetworkPerformanceSample[], Error>({
        path: `/v2/reports/sites-network-performance-average`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Get average and maximum IOPS performance for sites, filtered by start date and end date, and optional intervals. The following options are available: - To view average and maximum IOPS performance of all outgoing traffic from a protected site to all its replicating sites, specify only the protected site identifier. - To view average and maximum IOPS performance between two sites, specify both the protected site identifier and the recovery site identifier.
 * 
 * @tags Network Reports
 * @name ReportsSitesNetworkIopsAverageList
 * @summary Average IOPS vs. maximum IOPs list

 * @request GET:/v2/reports/sites-network-iops-average
 * @secure
 */
    reportsSitesNetworkIopsAverageList: (
      query?: {
        startDate?: string;
        endDate?: string;
        protectedSiteIdentifier?: string;
        recoverySiteIdentifier?: string;
        interval?: number;
        zorgIdentifier?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<IopsSample[], Error>({
        path: `/v2/reports/sites-network-iops-average`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Get a network executive summary for a given VPG, filtered by start date and end date.
 * 
 * @tags Network Reports
 * @name ReportsVpgNetworkSummaryList
 * @summary Retrieves sites network performance executive summary

 * @request GET:/v2/reports/vpg-network-summary
 * @secure
 */
    reportsVpgNetworkSummaryList: (
      query: { startDate?: string; endDate?: string; vpgIdentifier: string },
      params: RequestParams = {},
    ) =>
      this.request<VpgExecutiveSummary, Error>({
        path: `/v2/reports/vpg-network-summary`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Get Max, Avg. and Min network statistics for Throughput, Wan and IOPS traffic for a given VPG, filtered by start date and end date.
 * 
 * @tags Network Reports
 * @name ReportsVpgNetworkStatsList
 * @summary Retrieves VPG network stats

 * @request GET:/v2/reports/vpg-network-stats
 * @secure
 */
    reportsVpgNetworkStatsList: (
      query: { startDate?: string; endDate?: string; vpgIdentifier: string },
      params: RequestParams = {},
    ) =>
      this.request<NetworkStats, Error>({
        path: `/v2/reports/vpg-network-stats`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Get average and maximum network performance of throughput vs. WAN traffic for a specific VPG filtered by start date and end date, and optional intervals.
 * 
 * @tags Network Reports
 * @name ReportsVpgNetworkPerformanceAverageList
 * @summary Throughput vs. WAN traffic list

 * @request GET:/v2/reports/vpg-network-performance-average
 * @secure
 */
    reportsVpgNetworkPerformanceAverageList: (
      query: {
        startDate?: string;
        endDate?: string;
        protectedSiteIdentifier?: string;
        vpgIdentifier: string;
        interval?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<VpgNetworkPerformanceSample[], Error>({
        path: `/v2/reports/vpg-network-performance-average`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Get average and maximum IOPS performance for a specific VPG, filtered by start date and end date, and optional intervals.
 * 
 * @tags Network Reports
 * @name ReportsVpgNetworkIopsAverageList
 * @summary Average IOPS vs. maximum IOPS list

 * @request GET:/v2/reports/vpg-network-iops-average
 * @secure
 */
    reportsVpgNetworkIopsAverageList: (
      query: {
        startDate?: string;
        endDate?: string;
        protectedSiteIdentifier?: string;
        vpgIdentifier: string;
        interval?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<IopsSample[], Error>({
        path: `/v2/reports/vpg-network-iops-average`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Get average RPO for all VPGs in a single account, filtered by last 30 days.
 * 
 * @tags RPO Reports
 * @name ReportsAccountRpoAverageList
 * @summary Average RPO of all VPGs in a single account.

 * @request GET:/v2/reports/account-rpo-average
 * @secure
 */
    reportsAccountRpoAverageList: (
      query?: { zorgIdentifier?: string; startDate?: string; endDate?: string },
      params: RequestParams = {},
    ) =>
      this.request<AccountRpoAverage[], Error>({
        path: `/v2/reports/account-rpo-average`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve all active Planner sites for a specific account – includes ID, Name and Type.
     *
     * @tags Planner
     * @name PlannerSitesList
     * @summary Get all active Planner sites for the account.
     * @request GET:/v2/planner/sites
     * @secure
     */
    plannerSitesList: (params: RequestParams = {}) =>
      this.request<any, Error>({
        path: `/v2/planner/sites`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a report request for the selected site's VMs for a specific timeframe, retrieving all stats data for ZCAs, WAN, Journal size and array of VMs avg IOPs, avg throughput and journal size.
     *
     * @tags Planner
     * @name PlannerSitesCreate
     * @summary Create a Report request.
     * @request POST:/v2/planner/sites
     * @secure
     */
    plannerSitesCreate: (data: any, params: RequestParams = {}) =>
      this.request<any, Error>({
        path: `/v2/planner/sites`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve all active Planner sites for a specific account – includes ID, Name and Type.
     *
     * @tags Planner
     * @name PlannerSitesReportIdDetail
     * @summary Get all active Planner sites for the account.
     * @request GET:/v2/planner/sites?reportId={reportId}
     * @secure
     */
    plannerSitesReportIdDetail: (reportId: string, query: { reportId: string }, params: RequestParams = {}) =>
      this.request<any[], Error>({
        path: `/v2/planner/sites?reportId=${reportId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve datacenter, host, and VMs for a specific site. - The list of VMs per site does not include VRAs.
     *
     * @tags Planner
     * @name PlannerSitesDetail
     * @summary Get all data for a specific site.
     * @request GET:/v2/planner/sites/{siteIdentifier}
     * @secure
     */
    plannerSitesDetail: (siteIdentifier: string, params: RequestParams = {}) =>
      this.request<any, Error>({
        path: `/v2/planner/sites/${siteIdentifier}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a report request for the selected VMs for a specific timeframe, retrieving all stats data for ZCAs, WAN, Journal size and array of VMs avg IOPs, avg throughput and journal size.
     *
     * @tags Planner
     * @name PlannerReportsStatsCreate
     * @summary Create a Report request.
     * @request POST:/v2/planner/reports/stats
     * @secure
     */
    plannerReportsStatsCreate: (data: any, params: RequestParams = {}) =>
      this.request<any, Error>({
        path: `/v2/planner/reports/stats`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
 * @description Create a report request for the selected VMs for a specific timeframe, retrieving all stats data for ZCAs, WAN, Journal size and array of VMs avg IOPs, avg throughput and journal size.
 * 
 * @tags Planner
 * @name PlannerReportsStatsList
 * @summary Retrieve all Stats data.

 * @request GET:/v2/planner/reports/stats
 * @secure
 */
    plannerReportsStatsList: (query?: { reportId?: string }, params: RequestParams = {}) =>
      this.request<any, Error>({
        path: `/v2/planner/reports/stats`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a report request to retrieve ZCAs for a specific VMs list, and timeframe.
     *
     * @tags Planner
     * @name PlannerReportsStatsZcasCreate
     * @summary Create a Report request.
     * @request POST:/v2/planner/reports/stats/zcas
     * @secure
     */
    plannerReportsStatsZcasCreate: (data: any, params: RequestParams = {}) =>
      this.request<any, Error>({
        path: `/v2/planner/reports/stats/zcas`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
 * No description
 * 
 * @tags Planner
 * @name PlannerReportsStatsZcasList
 * @summary Create a report request to retrieve ZCAs for a specific VMs list, and timeframe.

 * @request GET:/v2/planner/reports/stats/zcas
 * @secure
 */
    plannerReportsStatsZcasList: (query?: { reportId?: string }, params: RequestParams = {}) =>
      this.request<any, Error>({
        path: `/v2/planner/reports/stats/zcas`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a report request to retrieve WAN for a specific VMs list, and timeframe.
     *
     * @tags Planner
     * @name PlannerReportsStatsWanCreate
     * @summary Create a Report request.
     * @request POST:/v2/planner/reports/stats/wan
     * @secure
     */
    plannerReportsStatsWanCreate: (data: any, params: RequestParams = {}) =>
      this.request<any, Error>({
        path: `/v2/planner/reports/stats/wan`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
 * No description
 * 
 * @tags Planner
 * @name PlannerReportsStatsWanList
 * @summary Create a report request to retrieve WAN for a specific VMs list, and timeframe.

 * @request GET:/v2/planner/reports/stats/wan
 * @secure
 */
    plannerReportsStatsWanList: (query?: { reportId?: string }, params: RequestParams = {}) =>
      this.request<any, Error>({
        path: `/v2/planner/reports/stats/wan`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a report request to retrieve the Journal Size for a specific VMs list, and timeframe.
     *
     * @tags Planner
     * @name PlannerReportsStatsJournalSizeCreate
     * @summary Create a Report request.
     * @request POST:/v2/planner/reports/stats/journal-size
     * @secure
     */
    plannerReportsStatsJournalSizeCreate: (data: any, params: RequestParams = {}) =>
      this.request<any, Error>({
        path: `/v2/planner/reports/stats/journal-size`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
 * No description
 * 
 * @tags Planner
 * @name PlannerReportsStatsJournalSizeList
 * @summary Create a report request to retrieve the Journal Size for a specific VMs list, and timeframe.

 * @request GET:/v2/planner/reports/stats/journal-size
 * @secure
 */
    plannerReportsStatsJournalSizeList: (query?: { reportId?: string }, params: RequestParams = {}) =>
      this.request<any, Error>({
        path: `/v2/planner/reports/stats/journal-size`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a report request to retrieve the Network Performance for a specific VMs list, and timeframe.
     *
     * @tags Planner
     * @name PlannerReportsNetworkPerformanceCreate
     * @summary Create a Report request.
     * @request POST:/v2/planner/reports/network-performance
     * @secure
     */
    plannerReportsNetworkPerformanceCreate: (data: any, params: RequestParams = {}) =>
      this.request<any, Error>({
        path: `/v2/planner/reports/network-performance`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
 * No description
 * 
 * @tags Planner
 * @name PlannerReportsNetworkPerformanceList
 * @summary Create a report request to retrieve the Network Performance for a specific VMs list, and timeframe.

 * @request GET:/v2/planner/reports/network-performance
 * @secure
 */
    plannerReportsNetworkPerformanceList: (query?: { reportId?: string }, params: RequestParams = {}) =>
      this.request<any[], Error>({
        path: `/v2/planner/reports/network-performance`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get data for all LTR tasks in a specific time frame (Default=3 days)
     *
     * @tags Long Term Retention
     * @name LtrTasksList
     * @summary Get data for all LTR tasks in a specific time frame
     * @request GET:/v2/ltr/tasks
     * @secure
     */
    ltrTasksList: (
      query?: { format?: "shallow" | "deep"; startDate?: string; endDate?: string },
      params: RequestParams = {},
    ) =>
      this.request<LtrTasksResponse, Error>({
        path: `/v2/ltr/tasks`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get data for all VMs associated with a specific LTR task
     *
     * @tags Long Term Retention
     * @name LtrTasksVmsDetail
     * @summary Get data for all VMs associated with a specific LTR task
     * @request GET:/v2/ltr/tasks/{taskId}/vms
     * @secure
     */
    ltrTasksVmsDetail: (taskId: string, params: RequestParams = {}) =>
      this.request<LtrVMsResponse, Error>({
        path: `/v2/ltr/tasks/${taskId}/vms`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get volume level information for a specific VM associated to a specific LTR task
     *
     * @tags Long Term Retention
     * @name LtrTasksVmsVolumesDetail
     * @summary Get volume level information for a specific VM associated to a specific LTR task
     * @request GET:/v2/ltr/tasks/{taskId}/vms/{vmId}/volumes
     * @secure
     */
    ltrTasksVmsVolumesDetail: (taskId: string, vmId: string, params: RequestParams = {}) =>
      this.request<LtrVolumesResponse, Error>({
        path: `/v2/ltr/tasks/${taskId}/vms/${vmId}/volumes`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  v1 = {
    /**
     * @description Get a list of all available alerts (Types and Severity)
     *
     * @tags Alerts Notification
     * @name AlertsNotificationsSettingsAlertTypesList
     * @summary Get a list of all available alerts
     * @request GET:/v1/alerts-notifications/settings/alert-types
     * @secure
     */
    alertsNotificationsSettingsAlertTypesList: (params: RequestParams = {}) =>
      this.request<AlertsNotificationAlertTypeMin, Error>({
        path: `/v1/alerts-notifications/settings/alert-types`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create - user preferences settings (Enable/Disable the feature & manage frequency settings) and enable selected alerts
     *
     * @tags Alerts Notification
     * @name AlertsNotificationsSettingsUsersMeCreate
     * @summary create user preferences settings
     * @request POST:/v1/alerts-notifications/settings/users/me
     * @secure
     */
    alertsNotificationsSettingsUsersMeCreate: (data: AlertsNotificationsPreferenceBody, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/v1/alerts-notifications/settings/users/me`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Get configured user preferences settings and enabled alert (type & severity)
     *
     * @tags Alerts Notification
     * @name AlertsNotificationsSettingsUsersMeList
     * @summary Get configured user preferences settings
     * @request GET:/v1/alerts-notifications/settings/users/me
     * @secure
     */
    alertsNotificationsSettingsUsersMeList: (params: RequestParams = {}) =>
      this.request<AlertsNotificationsPreferenceResponse, Error>({
        path: `/v1/alerts-notifications/settings/users/me`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update - user preferences settings (Enable/Disable the feature & manage frequency settings) and enable specific alerts
     *
     * @tags Alerts Notification
     * @name AlertsNotificationsSettingsUsersMeUpdate
     * @summary Update user preferences settings
     * @request PUT:/v1/alerts-notifications/settings/users/me
     * @secure
     */
    alertsNotificationsSettingsUsersMeUpdate: (data: AlertsNotificationsPreferenceBody, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/v1/alerts-notifications/settings/users/me`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
}
