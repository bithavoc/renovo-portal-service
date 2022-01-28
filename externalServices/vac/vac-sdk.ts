// @ts-nocheck
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

import { File, Blob } from 'file-api';
import fetch, { Body } from 'node-fetch';

/**
 * Array of the `filter` query expressions.
 */
export type FilterParameter = FilterExpression[];

/**
 * Array of the `sort` query expressions.
 */
export type SortParameter = SortExpression[];

/**
 * Type of rules that determine how specified values are compared with resource property values.
 */
export enum Collation {
  Ordinal = "ordinal",
  Ignorecase = "ignorecase",
  Lexicographic = "lexicographic",
}

export interface FilterExpression {
  /** Path to the required resource property. */
  property?: string;

  /** Inner expressions. Can be used only with `and`, `or` and `not` operation. */
  items?: FilterExpression[];

  /** Filter operation. */
  operation:
  | "in"
  | "contains"
  | "subset"
  | "superset"
  | "equals"
  | "notEquals"
  | "lessThan"
  | "lessThanOrEqual"
  | "greaterThan"
  | "greaterThanOrEqual"
  | "exclusiveOr"
  | "or"
  | "and"
  | "not";

  /** Type of rules that determine how specified values are compared with resource property values. */
  collation?: Collation;

  /** Resource property value. */
  value?: object;
}

export interface SortExpression {
  /** Path to the required resource property. */
  property: string;

  /** Direction specifier. */
  direction: "ascending" | "descending";

  /** Type of rules that determine how specified values are compared with resource property values. */
  collation?: Collation;
}

/**
 * Array of the `select` query expressions.
 */
export type SelectParameter = SelectExpression[];

export interface SelectExpression {
  /** Path to the required resource property. */
  propertyPath: string;
}

export interface AsyncActionInfo {
  /**
   * UID assigned to an async action.
   * @format uuid
   */
  id: string;

  /**
   * UID assigned to a user who initiates an async action.
   * @format uuid
   */
  initiatorUid: string;

  /** Name of async action. Used only for debug purposes. */
  actionName: string;

  /** Current stage of a long running action. */
  status: "running" | "succeed" | "canceled" | "failed";
}

export interface AsyncActionsConfig {
  /**
   * Amount of time an async action result is retained, in seconds.
   * @format int32
   */
  resultRetentionTime: number;
}

/**
 * @example [{"value":"bb06d148-37f8-4480-bb0b-943c53cfc3cc","path":"/mappedMasterOrganizationUid","op":"replace"}]
 */
export type JsonPatches = JsonPatch[];

export interface JsonPatch {
  /** Performed operation. */
  op: "add" | "replace" | "test" | "remove" | "move" | "copy";

  /** Value that is added, replaced, tested or removed by the PATCH operation. */
  value: string;

  /** JSON Pointer containing path to a location from which data is moved or copied. */
  from?: string;

  /** JSON Pointer containing path to a target location where the PATCH operation is performed. */
  path: string;
}

/**
 * @example {"instanceUid":"fcdb7145-3634-4d34-99fd-138879cd9c2c","name":"Job state","category":"BackupVmJob","organizationUid":"39f65b4c-a7d2-451e-936d-aeae418b53e1","internalId":1,"knowledge":{"summary":"Job is in a disabled state for more than an allowed time period.","cause":"Veeam Backup & Replication server allows to disable scheduled backup jobs during maintenance windows. If backup job stays in a disabled state for more than an allowed time period, it should be enabled back.","resolution":"Open Veeam Backup & Replication console and enable all disabled backup jobs."},"isPredifined":true,"isEnabled":false}
 */
export interface Alarm {
  /**
   * UID assigned to an alarm template.
   * @format uuid
   */
  instanceUid?: string;

  /** Name of an alarm template. */
  name: string;

  /** Category of an alarm template. */
  category?:
  | "Unknown"
  | "ManagementAgent"
  | "Location"
  | "Company"
  | "User"
  | "Internal"
  | "BackupAgent"
  | "VmFailoverPlan"
  | "BackupServer"
  | "EnterpriseManager"
  | "BackupProxy"
  | "BackupRepository"
  | "BackupVmJob"
  | "BackupServerAgentJob"
  | "BackupWanAccelerator"
  | "BackupCloudGateway"
  | "BackupLicense"
  | "BackupTenantRepository"
  | "SureBackupJob"
  | "BackupAgentJob"
  | "DiscoveryRule"
  | "Integrator"
  | "Site"
  | "Reseller"
  | "ResellerCloudRepository"
  | "BackupMicrosoft365Server"
  | "OneServer";

  /**
   * UID assigned to an organization.
   * @format uuid
   */
  organizationUid?: string;

  /**
   * ID assigned to an alarm template in Veeam Service Provider Console internal alarm database.
   * @format int32
   */
  internalId?: number;

  /** Knowledge base for an alarm template. */
  knowledge?: AlarmKnowledge;

  /** Indicates whether an alarm template is predefined. */
  isPredifined?: boolean;

  /**  Indicates whether an alarm template is enabled. */
  isEnabled: boolean;
}

/**
 * Knowledge base for an alarm template.
 */
export interface AlarmKnowledge {
  /** General description of an alarm template. */
  summary?: string;

  /** Possible causes of an alarm trigger. */
  cause?: string;

  /** Recommended solutions. */
  resolution?: string;
}

/**
 * @example {"instanceUid":"08b46982-1160-4804-bb12-6227b521972e","alarmTemplateUid":"5cf175f4-d596-4636-bf8e-f166516418df","repeatCount":3,"object":{"instanceUid":"baf8d020-fb95-41ba-be4f-89b44dca4fcd","type":"ObjectEntity","companyUid":"39f65b4c-a7d2-451e-936d-aeae418b53e1","locationUid":"5523b04d-077b-4526-a219-4533d6f23987","managementAgentUid":"d4b32a13-0b1b-4e7f-9050-309fa0eb7055","computerName":"ws-5floor","objectName":"Premium repository"},"lastActivation":{"instanceUid":"86477f51-389e-49bb-9480-25dc9abc71d2","time":"2020-01-12T23:20:50.5200000+00:00","status":"Error","message":"Free space (2.55%, 1.01 GB) is below the defined threshold (5%).\r\n","remark":"\r\n"}}
 */
export interface ActiveAlarm {
  /**
   * UID assigned to a triggered alarm.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to an alarm template.
   * @format uuid
   */
  alarmTemplateUid?: string;

  /**
   * Number of times that an alarm changed its status.
   * @format int32
   */
  repeatCount?: number;

  /** Alarm object. */
  object?: AlarmObject;

  /** Latest alarm activation. */
  lastActivation?: LastAlarmActivation;
}

export interface AlarmObject {
  /**
   * UID assigned to an object for which an alarm was triggered.
   * @format uuid
   */
  instanceUid?: string;

  /** Object type. */
  type?:
  | "Unknown"
  | "ManagementAgent"
  | "Location"
  | "Company"
  | "User"
  | "Internal"
  | "ObjectEntity"
  | "DiscoveryRule"
  | "Integrator"
  | "Reseller"
  | "Site"
  | "ResellerCloudRepository"
  | "BackupAgent"
  | "FailoverPlan"
  | "BackupServer"
  | "BackupServerJob"
  | "EnterpriseManagerServer"
  | "BackupProxy"
  | "BackupRepository"
  | "BackupWanAccelerator"
  | "CloudGateway"
  | "CloudRepository"
  | "VOneServer"
  | "BackupMicrosoft365Server";

  /**
   * UID assigned to a organization for which an alarm was triggered.
   * @format uuid
   */
  organizationUid?: string;

  /**
   * UID assigned to a location for which an alarm was triggered.
   * @format uuid
   */
  locationUid?: string;

  /**
   * UID assigned to a managed agent that is installed on an alarm object.
   * @format uuid
   */
  managementAgentUid?: string;

  /** Name of a computer for which an alarm was triggered. */
  computerName?: string;

  /**
   * UID assigned to an alarm object.
   * @format uuid
   */
  objectUid?: string;

  /** Name of an alarm object. */
  objectName?: string;
}

export interface LastAlarmActivation {
  /**
   * UID assigned to the last alarm trigger.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * Date and time of the last alarm trigger.
   * @format date-time
   */
  time?: string;

  /** Alarm status. */
  status?: "Unknown" | "Resolved" | "Info" | "Warning" | "Error" | "Acknowledged";

  /**
   * Cause of the alarm trigger.
   * > Every line break is represented by the `\r\n` control characters.
   *
   */
  message?: string;

  /**
   * Comment to the resolved alarm.
   * > Every line break is represented by the `\r\n` control characters.
   *
   */
  remark?: string;
}

/**
 * @example {"password":"Password1"}
 */
export interface WelcomeEmailOptions {
  /**
   * Password for created account.
   * @format password
   */
  password: string;
}

export interface Reseller {
  /**
   * UID assigned to a reseller.
   * @format uuid
   */
  instanceUid?: string;

  /** ProPartner Portal ID assigned to a reseller. */
  proPartnerId?: string;

  /**
   * Name of a reseller.
   * > Can be changed using the `PatchOrganization` operation.
   *
   */
  name?: string;

  /** Reseller status. */
  status?: "Unknown" | "Active" | "Disabled";

  /** Array of the Veeam Service Provider Console components that a reseller can access. */
  permissions?: ("Unknown" | "REST")[];

  /** Reseller quota. */
  quota: ResellerQuota;

  /** Resource representation of the related organization entity. */
  _embedded?: EmbeddedForOrganizationChildren;
}

export interface ResellerQuota {
  /**
   * UID assigned to a reseller.
   * @format uuid
   */
  resellerUid?: string;

  /**
   * Maximum number of client servers that a reseller can manage.
   * > If quota is unlimited, the property value is 0.
   *
   * @format int32
   * @min 0
   * @max 99999
   */
  serversQuota?: number;

  /** Indicates whether a reseller can manage an unlimited number of company servers. */
  isServersQuotaUnlimited?: boolean;

  /**
   * Maximum number of client workstations that a reseller can manage.
   * > If quota is unlimited, the property value is 0.
   *
   * @format int32
   * @min 0
   * @max 99999
   */
  workstationsQuota?: number;

  /** Indicates whether a reseller can manage an unlimited number of company workstations. */
  isWorkstationsQuotaUnlimited?: boolean;

  /**
   * Maximum amount of data transfer out traffic available to a reseller, in bytes.
   * > If quota is unlimited, the property value is 0.'
   *
   * @format int64
   * @min 1073741824
   * @max 1073740750258176
   */
  dataTransferOutQuota?: number;

  /** Indicates whether the amount of data transfer out traffic available to a reseller is unlimited. */
  isDataTransferOutQuotaUnlimited?: boolean;

  /**
   * Number of days during which deleted backup files of reseller clients must be kept in the recycle bin by the service provider.
   * @format int32
   * @max 99
   */
  insiderProtectionQuota?: number;

  /** Indicates whether WAN acceleration is enabled for replication jobs of reseller clients. */
  isWanAccelerationEnabled?: boolean;
}

export interface ResellerLicenseResource {
  /**
   * UID assigned to a reseller.
   * @format uuid
   */
  resellerUid?: string;

  /** Status of VCSP Pulse configuration. */
  pulseConfigurationStatus?: "Unknown" | "NotConfigured" | "Configured" | "Warning" | "Error";

  /** Status message. */
  pulseConfigurationStatusMessage?: string;

  /** Indicates whether license management is enabled for a reseller. */
  isLicenseManagementEnabled?: boolean;

  /** ID assigned to a license rental agreement contract. */
  licenseContractId?: string;

  /**
   * Number of license points available to a reseller.
   * @format int32
   * @min 0
   * @max 99999
   */
  licensePointsQuota?: number;

  /** Indicates whether a reseller can use an unlimited number of licanse points. */
  isLicensePointsQuotaUnlimited?: boolean;

  /**
   * Number of license points used by a reseller.
   * @format double
   */
  licensePointsUsage?: number;

  /** Indicates whether a reseller can add new companies to VCSP Pulse. */
  isCreatingNewCompaniesToPulseEnabled?: boolean;
}

/**
 * @example {"resellerUid":"00000000-0000-0000-0000-000000000000","siteUid":"94b797c3-058d-4829-83fa-2713fb02acea","tenantsQuota":45,"usedTenantsQuota":0,"isTenantsQuotaUnlimited":false}
 */
export interface ResellerSiteResource {
  /**
   * UID assigned to a reseller.
   * @format uuid
   */
  resellerUid?: string;

  /**
   * UID assigned to a site.
   * @format uuid
   */
  siteUid: string;

  /**
   * Maximum number of companies that a reseller can manage on a site.
   * @format int32
   * @min 1
   * @max 99999
   */
  tenantsQuota?: number;

  /**
   * Number of companies that a reseller manages on a site
   * @format int32
   */
  usedTenantsQuota?: number;

  /** Indicates whether a reseller has unlimited quota for managed companies. */
  isTenantsQuotaUnlimited?: boolean;
}

export interface ResellerSiteBackupResource {
  /**
   * UID assigned to a cloud backup resource.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a site.
   * @format uuid
   */
  siteUid?: string;

  /**
   * UID assigned to a reseller.
   * @format uuid
   */
  resellerUid?: string;

  /**
   * UID assigned to a cloud backup repository.
   * @format uuid
   */
  repositoryUid: string;

  /** Cloud repository friendly name configured for a reseller. */
  resourceFriendlyName: string;

  /**
   * Amount of space allocated to a reseller, in bytes.
   * @format int64
   */
  storageQuota?: number;

  /** Indicates whether the amount of space allocated to a reseller is unlimited. */
  isStorageQuotaUnlimited?: boolean;

  /**
   * Number of servers that a reseller can store on a cloud backup repository.
   * @format int32
   */
  serversQuota?: number;

  /** Indicates whether the number of servers that a reseller can store on a cloud backup repository is unlimited. */
  isServersQuotaUnlimited?: boolean;

  /**
   * Number of workstations that a reseller can store on a cloud backup repository.
   * @format int32
   */
  workstationsQuota?: number;

  /** Indicates whether the number of workstations that a reseller can store on a cloud backup repository is unlimited. */
  isWorkstationsQuotaUnlimited?: boolean;

  /**
   * Number of VMs that a reseller can store on a cloud backup repository.
   * @format int32
   */
  vmsQuota?: number;

  /** Indicates whether the number of VMs that a reseller can store on a cloud backup repository is unlimited. */
  isVmsQuotaUnlimited?: boolean;
}

/**
 * @example {"repositoryUid":"88788f9e-d8f5-4eb4-bc4f-9b3f5403bcec","resourceFriendlyName":"AtriumResource","storageQuota":1073741824,"isStorageQuotaUnlimited":false,"serversQuota":1,"isServersQuotaUnlimited":false,"workstationsQuota":1,"isWorkstationsQuotaUnlimited":false,"vmsQuota":1,"isVmsQuotaUnlimited":false}
 */
export interface ResellerSiteBackupResourceInput {
  /**
   * UID assigned to a cloud backup repository.
   * @format uuid
   */
  repositoryUid: string;

  /** Cloud repository friendly name configured for a reseller. */
  resourceFriendlyName: string;

  /**
   * Amount of space allocated to a reseller, in bytes.
   * @format int64
   */
  storageQuota?: number;

  /** Indicates whether the amount of space allocated to a reseller is unlimited. */
  isStorageQuotaUnlimited?: boolean;

  /**
   * Number of servers that a reseller can store on a cloud backup repository.
   * @format int32
   */
  serversQuota?: number;

  /** Indicates whether the number of servers that a reseller can store on a cloud backup repository is unlimited. */
  isServersQuotaUnlimited?: boolean;

  /**
   * Number of workstations that a reseller can store on a cloud backup repository.
   * @format int32
   */
  workstationsQuota?: number;

  /** Indicates whether the number of workstations that a reseller can store on a cloud backup repository is unlimited. */
  isWorkstationsQuotaUnlimited?: boolean;

  /**
   * Number of VMs that a reseller can store on a cloud backup repository.
   * @format int32
   */
  vmsQuota?: number;

  /** Indicates whether the number of VMs that a reseller can store on a cloud backup repository is unlimited. */
  isVmsQuotaUnlimited?: boolean;
}

export interface ResellerSiteBackupResourceUsage {
  /**
   * UID assigned to a cloud backup resource.
   * @format uuid
   */
  backupResourceUid?: string;

  /**
   * UID assigned to a reseller.
   * @format uuid
   */
  resellerUid?: string;

  /**
   * Amount of space allocated to a reseller, in bytes.
   * @format int64
   */
  storageQuota?: number;

  /**
   * Amount of space consumed by all companies of a reseller, in bytes.
   * @format int64
   */
  usedStorageQuota?: number;

  /**
   * Amount of archive tier space consumed by all companies of a reseller, in bytes.
   * @format int64
   */
  archiveTierUsage?: number;

  /**
   * Amount of capacity tier space consumed by all company backups excluding backup copies, in bytes.
   * @format int64
   */
  capacityTierUsage?: number;

  /**
   * Amount of performance tier space consumed by all companies of a reseller, in bytes.
   * @format int64
   */
  perfomanceTierUsage?: number;

  /**
   * Number of server backups that a reseller stores on a cloud repository.
   * @format int32
   */
  serverBackups?: number;

  /**
   * Number of workstation backups that a reseller stores on a cloud repository.
   * @format int32
   */
  workstationBackups?: number;

  /**
   * Number of VM backups that a reseller stores on a cloud repository.
   * @format int32
   */
  vmBackups?: number;
}

export interface ResellerSiteReplicationResource {
  /**
   * UID assigned to a cloud replication resource.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a site.
   * @format uuid
   */
  siteUid?: string;

  /**
   * UID assigned to a reseller.
   * @format uuid
   */
  resellerUid?: string;

  /**
   * UID assigned to a hardware plan.
   * @format uuid
   */
  hardwarePlanUid: string;

  /**
   * Maximum number of companies that a reseller can subscribe to a hardware plan.
   * @format int32
   */
  tenantsPerPlanQuota?: number;

  /** Indicates whether WAN acceleration is enabled. */
  isWanAccelerationEnabled?: boolean;

  /**
   * UID assigned to a WAN accelerator.
   * @format uuid
   */
  wanAcceleratorUid?: string;
}

/**
 * @example {"hardwarePlanUid":"14464dc9-214f-4c5c-b339-d286f2a478a2","tenantsPerPlanQuota":1073741824,"isWanAccelerationEnabled":false,"wanAcceleratorUid":null}
 */
export interface ResellerSiteReplicationResourceInput {
  /**
   * UID assigned to a hardware plan.
   * @format uuid
   */
  hardwarePlanUid: string;

  /**
   * Maximum number of companies that a reseller can subscribe to a hardware plan.
   * @format int32
   */
  tenantsPerPlanQuota?: number;

  /** Indicates whether WAN acceleration is enabled. */
  isWanAccelerationEnabled?: boolean;

  /**
   * UID assigned to a WAN accelerator.
   * @format uuid
   */
  wanAcceleratorUid?: string;
}

export interface ResellerSiteReplicationResourceUsage {
  /**
   * UID assigned to a cloud replication resource.
   * @format uuid
   */
  replicationResourceUid?: string;

  /**
   * UID assigned to a reseller.
   * @format uuid
   */
  resellerUid?: string;

  /**
   * UID assigned to a hardware plan.
   * @format uuid
   */
  hardwarePlanUid?: string;

  /**
   * Number of companies that are subscribe to a hardware plan.
   * @format int32
   */
  tenantsPerPlanUsage?: number;
}

export interface ResellerSiteVcdReplicationResource {
  /**
   * UID assigned to a reseller VMware Cloud Director replication resource.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a site.
   * @format uuid
   */
  siteUid?: string;

  /**
   * UID assigned to a reseller.
   * @format uuid
   */
  resellerUid?: string;

  /**
   * UID assigned to a VMware Cloud Director organization whose resources are allocated to a reseller.
   * @format uuid
   */
  vcdOrganizationUid: string;
}

/**
 * @example {"vcdOrganizationUid":"2405374a-360d-476c-a7fc-0e5f01c7f2a0"}
 */
export interface ResellerSiteVcdReplicationResourceInput {
  /**
   * UID assigned to a VMware Cloud Director organization whose resources are allocated to a reseller.
   * @format uuid
   */
  vcdOrganizationUid: string;
}

/**
 * @example {"description":null,"proPartnerId":null,"organizationInput":{"name":"Atrium Solutions","alias":"atrium","taxId":"34598","email":"d.baker@atrium.com","phone":"606-932-3427","country":1,"state":17,"city":"South Shore","street":"464 Hinkle Deegan Lake Road","notes":"Basic configuration","zipCode":"41175","website":"www.atrium.com","companyId":"2"},"quota":{"resellerUid":"00000000-0000-0000-0000-000000000000","serversQuota":null,"isServersQuotaUnlimited":true,"workstationsQuota":null,"isWorkstationsQuotaUnlimited":true,"dataTransferOutQuota":null,"isDataTransferOutQuotaUnlimited":true,"insiderProtectionQuota":0,"isWanAccelerationEnabled":false},"ownerCredentials":{"userName":"owner","password":"Password1"},"permissions":["REST"]}
 */
export interface ResellerInput {
  /** Description of a reseller. */
  description?: string;

  /** ProPartner Portal ID assigned to a reseller. */
  proPartnerId?: string;

  /** Reseller organization settings. */
  organizationInput: OrganizationInput;

  /** Service quota configured for a reseller. */
  quota: ResellerQuota;

  /** User credentials configured for Service Provider Global Administrator. */
  ownerCredentials: OwnerCredentials;

  /** Reseller permissions. */
  permissions?: ResellerPermissions;
}

export interface Provider {
  /**
   * UID assigned to a service provider.
   * @format uuid
   */
  instanceUid: string;

  /** Resource representation of the related organization entity. */
  _embedded?: EmbeddedForOrganizationChildren;
}

export interface Company {
  /**
   * UID assigned to a company.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * Name of a company.
   * > Can be changed using the `PatchOrganization` operation.
   *
   */
  name?: string;

  /** Status of a service provider. You can set the `Active` or `Disabled` value using the PATCH method. */
  status?:
  | "Unknown"
  | "Active"
  | "Disabled"
  | "Expired"
  | "Creating"
  | "Deleting"
  | "Deleted"
  | "SiteResourceCreationFailed"
  | "SiteResourceCreating"
  | "SiteResourceUpdating"
  | "SiteResourceUpdateFailed";

  /**
   * UID assigned to a reseller that manages the company.
   * @format uuid
   */
  resellerUid?: string;

  /**
   * UID assigned to a company subscription plan.
   * @format uuid
   */
  subscriptionPlanUid?: string;

  /** Array of the Veeam Service Provider Console components that a company can access. */
  permissions?: ("Unknown" | "REST")[];

  /** Indicates whether a company must receive notifications about alarms that were triggered for this company. */
  IsAlarmDetectEnabled?: boolean;

  /** Resource representation of the related organization entity. */
  _embedded?: EmbeddedForOrganizationChildren;
}

/**
 * Resource representation of the related organization entity.
 */
export interface EmbeddedForOrganizationChildren {
  /** Resource representation of an organization. */
  organization?: Organization;
}

/**
 * @example {"resellerUid":null,"organizationInput":{"name":"Alpha","alias":"Alpha","taxId":"643-70-9745","email":"s.smith@alpha.com","phone":"906-284-7082","country":1,"state":22,"city":"Marquette","street":"4493 Railroad Street","notes":null,"zipCode":49855,"website":"www.alpha.com","companyId":2},"subscriptionPlanUid":null,"permissions":["REST"],"IsAlarmDetectEnabled":false}
 */
export interface CompanyInput {
  /**
   * UID assigned to a reseller that manages the company.
   * @format uuid
   */
  resellerUid?: string;

  /** Company properties. */
  organizationInput: OrganizationInput;

  /**
   * UID assigned to a company subscription plan.
   * @format uuid
   */
  subscriptionPlanUid?: string;

  /** Company permissions. */
  permissions?: CompanyPermissions;

  /** Defines whether a company must receive notifications about alarms that were triggered for this company. */
  IsAlarmDetectEnabled?: boolean;
}

/**
 * Array of the Veeam Service Provider Console components that a reseller can access.
 */
export type ResellerPermissions = ("Unknown" | "REST")[];

/**
 * Array of the Veeam Service Provider Console components that a company can access.
 */
export type CompanyPermissions = ("Unknown" | "REST")[];

/**
 * @example {"siteUid":"151fe1fc-625a-46c4-819c-203d804388bc","cloudTenantType":"VCD","companyUid":"24edf757-97e3-49d1-a432-f0ea268d8380","cloudTenantUid":"00000000-0000-0000-0000-000000000000","vCloudOrganizationUid":"7f9cf3d7-53b3-403f-86c7-c314d90ba230","lastActive":null,"leaseExpirationEnabled":false,"leaseExpirationDate":null,"ownerCredentials":{"userName":"vcdTenant","password":"Password1"},"description":null,"throttlingEnabled":false,"throttlingValue":1,"throttlingUnit":"MbytePerSec","maxConcurrentTask":1,"backupProtectionEnabled":false,"backupProtectionPeriodDays":7,"gatewaySelectionType":"StandaloneGateways","gatewayPoolsUids":null,"isGatewayFailoverEnabled":false}
 */
export interface CompanySiteResource {
  /**
   * UID assigned to a site.
   * @format uuid
   */
  siteUid: string;

  /** Tenant type in Veeam Cloud Connect. */
  cloudTenantType?: "Unknown" | "General" | "VCD";

  /**
   * UID assigned to a company.
   * @format uuid
   */
  companyUid?: string;

  /**
   * UID assigned to a company tenant.
   * @format uuid
   */
  cloudTenantUid?: string;

  /**
   * UID assigned to a VMware Cloud Director organization.
   * @format uuid
   */
  vCloudOrganizationUid?: string;

  /**
   * The last time when a tenant was active.
   * @format date-time
   */
  lastActive?: string;

  /** Indicates whether a company account must be disabled automatically. */
  leaseExpirationEnabled?: boolean;

  /**
   * Date and time when a company account must be disabled.
   * @format date-time
   */
  leaseExpirationDate?: string;

  /** Company owner credentials or username of a tenant account configured for a VMware Cloud Director organization. */
  ownerCredentials: OwnerCredentials;

  /** Company description. */
  description?: string;

  /** Indicates whether incoming network traffic that will be accepted from a company is limited. */
  throttlingEnabled?: boolean;

  /**
   * Maximum incoming network traffic bandwidth that will be accepted from a company.
   * @format int32
   * @min 1
   * @max 9999
   */
  throttlingValue?: number;

  /** Measurement units for incoming network traffic accepted from a company. */
  throttlingUnit?: "MbitPerSec" | "KbytePerSec" | "MbytePerSec";

  /**
   * Maximum number of concurrent tasks available to a company.
   * @format int32
   * @min 1
   * @max 10000
   */
  maxConcurrentTask?: number;

  /** Indicates whether deleted backup file protection is enabled. */
  backupProtectionEnabled?: boolean;

  /**
   * Number of days during which deleted backup files must be kept in the recycle bin on the Veeam Cloud Connect server.
   * @format int32
   * @min 1
   * @max 99
   */
  backupProtectionPeriodDays?: number;

  /** Type of cloud gateway selection. */
  gatewaySelectionType?: "Unknown" | "StandaloneGateways" | "GatewayPool";

  /** Collection of UIDs assigned to gateway pools that are allocated to a company. If the collection is empty, company will automatically use a standalone gateway. */
  gatewayPoolsUids?: string[];

  /** Indicates whether a company is allowed to fail over to a cloud gateway that is not added to a selected cloud gateway pool. */
  isGatewayFailoverEnabled?: boolean;
}

export interface CompanySiteTrafficResource {
  /**
   * UID assigned to a site.
   * @format uuid
   */
  siteUid?: string;

  /**
   * Maximum amount of data transfer out traffic available to a company, in bytes.
   * > Minimum value is equal to 1 GB. <br>
   * > If quota is unlimited, the property value is 0.'
   *
   * @format int64
   * @min 1073741824
   * @max 1073740750258176
   */
  dataTransferOutQuota?: number;

  /** Indicates whether the amount of data transfer out traffic available to a company is unlimited. */
  isDataTransferOutQuotaUnlimited?: boolean;
}

export interface CompanySiteBackupResource {
  /**
   * UID assigned to a site backup resource allocated to a company.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a company.
   * @format uuid
   */
  companyUid?: string;

  /**
   * UID assigned to a site.
   * @format uuid
   */
  siteUid?: string;

  /**
   * UID assigned to a cloud repository.
   * @format uuid
   */
  repositoryUid: string;

  /** Name of a cloud backup repository. */
  cloudRepositoryName: string;

  /**
   * Amount of space allocated to a company on a cloud repository, in bytes.
   * @format int64
   * @min 1073741824
   */
  storageQuota: number;

  /**
   * Maximum number of Veeam backup agents in the Server mode that a company is allowed to store on a cloud repository.
   * @format int32
   */
  serversQuota?: number;

  /** Indicates whether a company is allowed to store an unlimited number of Veeam backup agents in the Server mode on a cloud repository. */
  isServersQuotaUnlimited?: boolean;

  /**
   * Maximum number of Veeam backup agents in the Workstation mode that a company is allowed to store on a cloud repository.
   * @format int32
   */
  workstationsQuota?: number;

  /** Indicates whether a company is allowed to store an unlimited number of Veeam backup agents in the Workstation mode on a cloud repository. */
  isWorkstationsQuotaUnlimited?: boolean;

  /**
   * Maximum number of VMs that a company is allowed to store on a cloud repository.
   * @format int32
   */
  vmsQuota?: number;

  /** Indicates whether a company is allowed to store an unlimited number of VMs on a cloud repository. */
  isVmsQuotaUnlimited?: boolean;

  /** Indicates whether WAN acceleration is enabled. */
  isWanAccelerationEnabled?: boolean;

  /**
   * UID assigned to a WAN accelerator.
   * @format uuid
   */
  wanAcceleratorUid?: string;

  /** Indicates whether the repository is used by default. */
  isDefault?: boolean;
}

/**
 * @example {"repositoryUid":"90b37cb5-ca36-4158-840d-c4c8b38f8251","cloudRepositoryName":"PittsburghCompany repo","storageQuota":10737418240,"serversQuota":null,"isServersQuotaUnlimited":true,"workstationsQuota":null,"isWorkstationsQuotaUnlimited":true,"vmsQuota":null,"isVmsQuotaUnlimited":true,"isWanAccelerationEnabled":false,"wanAcceleratorUid":null,"isDefault":false}
 */
export interface CompanySiteBackupResourceInput {
  /**
   * UID assigned to a cloud repository.
   * @format uuid
   */
  repositoryUid: string;

  /** Name of a cloud backup repository. */
  cloudRepositoryName: string;

  /**
   * Amount of space allocated to a company on a cloud repository, in bytes.
   * @format int64
   * @min 1073741824
   */
  storageQuota: number;

  /**
   * Maximum number of Veeam backup agents in the Server mode that a company is allowed to store on a cloud repository.
   * @format int32
   */
  serversQuota?: number;

  /** Indicates whether a company is allowed to store an unlimited number of Veeam backup agents in the Server mode on a cloud repository. */
  isServersQuotaUnlimited?: boolean;

  /**
   * Maximum number of Veeam backup agents in the Workstation mode that a company is allowed to store on a cloud repository.
   * @format int32
   */
  workstationsQuota?: number;

  /** Indicates whether a company is allowed to store an unlimited number of Veeam backup agents in the Workstation mode on a cloud repository. */
  isWorkstationsQuotaUnlimited?: boolean;

  /**
   * Maximum number of VMs that a company is allowed to store on a cloud repository.
   * @format int32
   */
  vmsQuota?: number;

  /** Indicates whether a company is allowed to store an unlimited number of VMs on a cloud repository. */
  isVmsQuotaUnlimited?: boolean;

  /** Indicates whether WAN acceleration is enabled. */
  isWanAccelerationEnabled?: boolean;

  /**
   * UID assigned to a WAN accelerator.
   * @format uuid
   */
  wanAcceleratorUid?: string;

  /** Defines whether a cloud repository is set by default. */
  isDefault?: boolean;
}

export interface CompanySiteBackupResourceUsage {
  /**
   * UID assigned to a company.
   * @format uuid
   */
  companyUid?: string;

  /**
   * UID assigned to a cloud backup resource.
   * @format uuid
   */
  backupResourceUid?: string;

  /**
   * Amount of space allocated to a company, in bytes.
   * @format int64
   */
  storageQuota?: number;

  /**
   * Amount of space consumed by a company, in bytes.
   * @format int64
   */
  usedStorageQuota?: number;

  /**
   * Amount of archive tier space consumed by a company, in bytes.
   * @format int64
   */
  archiveTierUsage?: number;

  /**
   * Amount of capacity tier space consumed by all company backups excluding backup copies, in bytes.
   * @format int64
   */
  capacityTierUsage?: number;

  /**
   * Amount of performance tier space consumed by a company, in bytes.
   * @format int64
   */
  perfomanceTierUsage?: number;

  /**
   * Number of server backups that a company stores on a cloud repository.
   * @format int32
   */
  serverBackups?: number;

  /**
   * Number of workstation backups that a company stores on a cloud repository.
   * @format int32
   */
  workstationBackups?: number;

  /**
   * Number of VM backups that a company stores on a cloud repository.
   * @format int32
   */
  vmBackups?: number;
}

/**
 * @example {"hardwarePlans":[{"hardwarePlanUid":"14464dc9-214f-4c5c-b339-d286f2a478a2","isWanAccelerationEnabled":false,"wanAcceleratorUid":null}],"isFailoverCapabilitiesEnabled":false,"isPublicAllocationEnabled":false,"numberOfPublicIps":0}
 */
export interface CompanySiteReplicationResourceInput {
  /** Array of hardware plans. */
  hardwarePlans?: CompanySiteReplicationResourceHardwarePlan[];

  /** Indicates whether performing failover is available to a company. */
  isFailoverCapabilitiesEnabled?: boolean;

  /** Indicates whether public IP addresses are allocated to a company. */
  isPublicAllocationEnabled?: boolean;

  /**
   * Number of allocated public IP addresses.
   * @format int32
   * @min 0
   */
  numberOfPublicIps?: number;
}

export interface CompanySiteReplicationResourceHardwarePlan {
  /**
   * UID assigned to a hardware plan.
   * @format uuid
   */
  hardwarePlanUid: string;

  /** Indicates whether WAN acceleration is enabled. */
  isWanAccelerationEnabled?: boolean;

  /**
   * UID assigned to a WAN accelerator.
   * @format uuid
   */
  wanAcceleratorUid?: string;
}

export interface CompanySiteReplicationResource {
  /**
   * UID assigned to a cloud replication resource.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a company.
   * @format uuid
   */
  companyUid?: string;

  /**
   * UID assigned to a site.
   * @format uuid
   */
  siteUid?: string;

  /** Array of hardware plans. */
  hardwarePlans?: CompanySiteReplicationResourceHardwarePlan[];

  /** Indicates whether performing failover is available to a company. */
  isFailoverCapabilitiesEnabled?: boolean;

  /** Indicates whether public IP addresses are allocated to a company. */
  isPublicAllocationEnabled?: boolean;

  /**
   * Number of allocated public IP addresses.
   * @format int32
   */
  numberOfPublicIps?: number;
}

export interface CompanySiteReplicationResourceUsage {
  /**
   * UID assigned to a hardware plan.
   * @format uuid
   */
  hardwarePlanUid?: string;

  /**
   * UID assigned to a company.
   * @format uuid
   */
  companyUid?: string;

  /**
   * Number of replicated VMs vCPUs.
   * @format int32
   */
  vCPUsConsumed?: number;

  /**
   * Amount of RAM consumed by company replicas, in bytes.
   * @format int64
   */
  memoryUsage?: number;

  /**
   * Amount of cloud storage space consumed by company replicas, in bytes.
   * @format int64
   */
  storageUsage?: number;

  /**
   * Number of physical cores in cloud hosts.
   * @format int32
   */
  hostsCoresCount?: number;

  /**
   * Number of replicated VMs.
   * @format int32
   */
  numberOfVms?: number;
}

export interface CompanySiteReplicationResourceNetworkAppliance {
  /**
   * UID assigned to a network extension appliance.
   * @format uuid
   */
  instanceUid?: string;

  /** Name of a network extension appliance. */
  name: string;

  /**
   * UID assigned to a hardware plan.
   * @format uuid
   */
  hardwarePlanUid?: string;

  /** Name of a host on which network extension appliance is deployed. */
  hostName?: string;

  /** Name of a root host on which network extension appliance is deployed. */
  rootHostName?: string;

  /** Name of an external production network. */
  externalNetworkName?: string;

  /** IP addressing settings for the configured network extension appliance. */
  tcpIpSettings?: NetworkApplianceTcpIpSettings;
}

export interface NetworkApplianceTcpIpSettings {
  /** Indicates whether IP address is automatically assigned to network extension appliance by a DHCP server. */
  dhcpEnabled?: boolean;

  /**
   * IP address of a network extension appliance.
   * > The `null` value indicates that IP address is automatically assigned by a DHCP server.
   *
   * @pattern ^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$
   */
  ipAddress?: string;

  /**
   * Subnet mask of a network extension appliance.
   * > The `null` value indicates that IP address is automatically assigned by a DHCP server.
   *
   * @pattern ^(((255\.){3}(255|254|252|248|240|224|192|128+))|((255\.){2}(255|254|252|248|240|224|192|128|0+)\.0)|((255\.)(255|254|252|248|240|224|192|128|0+)(\.0+){2})|((255|254|252|248|240|224|192|128|0+)(\.0+){3}))$
   */
  subnetMask?: string;

  /**
   * Default gateway of a network extension appliance.
   * > The `null` value indicates that IP address is automatically assigned by a DHCP server.
   *
   * @pattern ^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$
   */
  defaultGateway?: string;
}

export interface CompanySiteReplicationResourceVcdNetworkAppliance {
  /**
   * UID assigned to a network extension appliance.
   * @format uuid
   */
  instanceUid?: string;

  /** Name of a network extension appliance. */
  name: string;

  /**
   * UID assigned to an organization VDC.
   * @format uuid
   */
  dataCenterUid?: string;

  /** Name of an organization VDC. */
  dataCenterName?: string;

  /** IP addressing settings for the configured network extension appliance. */
  tcpIpSettings?: NetworkApplianceTcpIpSettings;
}

export interface CompanySiteVcdReplicationResource {
  /**
   * UID assigned to a VMware Cloud Director replication resource.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a company.
   * @format uuid
   */
  companyUid?: string;

  /**
   * UID assigned to a site.
   * @format uuid
   */
  siteUid?: string;

  /** Array of data centers */
  dataCenters?: CompanySiteVcdReplicationResourceDataCenter[];

  /** Indicates whether performing failover is available to a company. */
  isFailoverCapabilitiesEnabled?: boolean;
}

/**
 * @example {"dataCenters":[{"dataCenterUid":"1605f30e-6a4f-4d85-984a-89cca9b7de43","isWanAccelerationEnabled":false,"wanAcceleratorUid":null}],"isFailoverCapabilitiesEnabled":false}
 */
export interface CompanySiteVcdReplicationResourceInput {
  /** Array of organization VDCs. */
  dataCenters?: CompanySiteVcdReplicationResourceDataCenter[];

  /** Indicates whether performing failover is available to a company. */
  isFailoverCapabilitiesEnabled?: boolean;
}

export interface CompanySiteVcdReplicationResourceDataCenter {
  /**
   * UID assigned to an organization VDC.
   * @format uuid
   */
  dataCenterUid: string;

  /** Indicates whether WAN acceleration is enabled. */
  isWanAccelerationEnabled?: boolean;

  /**
   * UID assigned to a WAN accelerator.
   * @format uuid
   */
  wanAcceleratorUid?: string;
}

export interface CompanySiteVcdReplicationResourceUsage {
  /**
   * UID assigned to a VMware Cloud Director replication resource.
   * @format uuid
   */
  dataCenterUid?: string;

  /**
   * UID assigned to a company.
   * @format uuid
   */
  companyUid?: string;

  /**
   * Number of replicated VMs CPUs.
   * @format int32
   */
  cpuCountConsumed?: number;

  /**
   * Amount of RAM consumed by company replicas, in bytes.
   * @format int64
   */
  memoryUsage?: number;

  /**
   * Amount of space consumed by company replicas, in bytes.
   * @format int64
   */
  storageUsage?: number;
}

/**
 * @example {"instanceUid":"00000000-0000-0000-0000-000000000000","organizationUid":"0fe1c027-e6b0-419a-8606-0ff67dd41a04","name":"SP_CompanyLocationUser","quotaGb":3000,"isDefault":false}
 */
export interface OrganizationLocation {
  /**
   * UID assigned to a location in Veeam Service Provider Console.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to an organization.
   * @format uuid
   */
  organizationUid?: string;

  /** Name of a location. */
  name: string;

  /**
   * Amount of storage space allocated to a location, in gigabytes.
   * @format int32
   * @min 0
   * @max 2147483647
   */
  quotaGb: number;

  /** Indicates whether a location is default. */
  isDefault?: boolean;
}

export interface OrgContainer {
  /**
   * UID assigned to an organization.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * Name of an organization.
   * @pattern ^[^\/\\\[\]:;|=,+\*\?<>@"]+$
   */
  name: string;

  /** Type of an organization container. */
  type?: "Unknown" | "DefaultCompanies" | "DefaultResellers" | "Custom";

  /** Array of UIDs assigned to organizations in a container. */
  childrenOrganizations?: string[];

  /** Array of UIDs assigned to child organization containers. */
  childrenContainers?: string[];
}

/**
 * @example {"name":"OrgContainer1","childrenOrganizations":["5a9e523c-9acf-4585-8f38-8f919ad0ece8"],"childrenContainers":null}
 */
export interface OrgContainerInput {
  /**
   * Name of a container.
   * @pattern ^[^\/\\\[\]:;|=,+\*\?<>@"]+$
   */
  name: string;

  /** Array of UIDs assigned to organizations that must be included in a container. */
  childrenOrganizations?: string[];

  /** Array of UIDs assigned to child organization containers. */
  childrenContainers?: string[];
}

export interface Organization {
  /**
   * UID assigned to an organization.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * Name of an organization.
   * @pattern ^[^\/\\\[\]:;|=,+\*\?<>@"]+$
   */
  name: string;

  /**
   * Alias of an organization.
   * @pattern ^[a-zA-Z\d\!\#\$\%\&\(\)\-\.\^\"\_\{\}\~\'\ \`]+$
   */
  alias?: string;

  /** Type of an organization. */
  type?: "Unknown" | "Company" | "Provider" | "Reseller";

  /** Organization Tax ID. */
  taxId?: string;

  /**
   * Contact email address.
   * @pattern ^(")?(?:[^\."])(?:(?:[\.])?(?:[\w\-!#$%&'*+\/=?\^_`{|}~]))*\1@(\w[\-\w]*\.){1,5}([A-Za-z]){2,6}$
   */
  email?: string;

  /** Telephone number of a primary contact of an organization. */
  phone?: string;

  /**
   * System ID assigned to an organization country of residence.
   * @format int32
   * @min 1
   */
  country?: number;

  /**
   * System ID assigned to a USA state where an organization is located.
   * @format int32
   * @min 1
   */
  state?: number;

  /** City where an organization is located. */
  city?: string;

  /** Street where an organization is located. */
  street?: string;

  /**  Additional information about an organization. */
  notes?: string;

  /** Postal code. */
  zipCode?: string;

  /** Organization website. */
  website?: string;

  /** ID of an organization used for 3rd party applications. */
  companyId?: string;
}

export interface OrganizationInput {
  /**
   * Name of an organization.
   * @pattern ^[^\/\\\[\]:;|=,+\*\?<>@"]+$
   */
  name: string;

  /**
   * Alias of an organization.
   * @pattern ^[a-zA-Z\d\!\#\$\%\&\(\)\-\.\^\"\_\{\}\~\'\ \`]+$
   */
  alias?: string;

  /** Organization Tax ID. */
  taxId?: string;

  /**
   * Contact email address.
   * @pattern ^(")?(?:[^\."])(?:(?:[\.])?(?:[\w\-!#$%&'*+\/=?\^_`{|}~]))*\1@(\w[\-\w]*\.){1,5}([A-Za-z]){2,6}$
   */
  email?: string;

  /** Telephone number of a primary contact of an organization. */
  phone?: string;

  /**
   * System ID assigned to an organization country of residence.
   * @format int32
   * @min 1
   */
  country?: number;

  /**
   * System ID assigned to a USA state where an organization is located.
   * @format int32
   * @min 1
   */
  state?: number;

  /** City where an organization is located. */
  city?: string;

  /** Street where an organization is located. */
  street?: string;

  /** Additional information about an organization. */
  notes?: string;

  /** Postal code. */
  zipCode?: string;

  /** Organization website. */
  website?: string;

  /** ID of an organization used for 3rd party applications. */
  companyId?: string;
}

export interface UnverifiedAgent {
  /**
   * UID assigned to a management agent.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to an organization to which a management agent belongs.
   * @format uuid
   */
  organizationUid?: string;

  /** Name of a computer on which a management agent is deployed. */
  hostName?: string;

  /**
   * Time when a management agent was registered.
   * @format date-time
   */
  registrationTime?: string;

  /** Additional information. */
  tag?: string;

  /** Reason for management agent being unverified. */
  rejectReason?: string;

  /** Role of a management agent. */
  type?: "Unknown" | "CloudConnect" | "Client" | "Hosted";

  /** Status of a management agent. */
  status?: "Unknown" | "Accepted" | "Inaccessible" | "Pending" | "Rejected" | "Applying";

  /** Management agent status message. */
  statusMessage?: string;
}

export interface ManagementAgent {
  /**
   * UID assigned to a management agent.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a location to which a management agent belongs.
   * @format uuid
   */
  locationUid: string;

  /**
   * UID assigned to an organization to which a management agent belongs.
   * @format uuid
   */
  organizationUid?: string;

  /** Name of a computer on which a management agent is deployed. */
  hostName?: string;

  /**
   * Date and time when a management agent on a computer sent the latest heartbeat.
   * @format date-time
   */
  lastHeartbeatTime?: string;

  /** Version of a management agent deployed on a computer. */
  version?: string;

  /**
   * Date and time when a computer was discovered.
   * @format date-time
   */
  discoveryTime?: string;

  /** Additional information. */
  tag?: string;

  /** Status of a management agent. */
  status?:
  | "Unknown"
  | "Healthy"
  | "Inaccessible"
  | "Warning"
  | "Updating"
  | "Error"
  | "Restarting"
  | "Installation"
  | "FailedToUpdate";

  /** Role of a management agent. */
  type?: "Unknown" | "CloudConnect" | "Client" | "Hosted";

  /** Information about a computer on which a management agent is deployed. */
  computerInfo?: ComputerInfo;

  /** Connection status of a management agent. */
  connectionStatus?: "Unknown" | "Online" | "Inaccessible" | "Rejected";

  /** Indicates whether computer reboot is required. */
  isRebootRequired?: boolean;

  /**
   * Company owner user name that is used to connect a management agent to a cloud gateway.
   * @format uuid
   */
  connectionAccount?: string;

  /** Status of a management agent version. */
  versionStatus?: "Unknown" | "UpToDate" | "OutOfDate" | "PatchAvailable";

  /** Role of a management agent. */
  role?: "Unknown" | "Master" | "Client";
}

/**
 * Information about a Veeam Cloud Connect server on which a management agent is deployed.
 */
export interface CloudAgent {
  /**
   * UID assigned to a Veeam Cloud Connect server on which a management agent is installed.
   * @format uuid
   */
  siteUid?: string;

  /** Name of a site. */
  siteName: string;

  /** Description of a site. */
  description: string;

  /**
   * UID assigned to a management agent.
   * @format uuid
   */
  managementAgentUid?: string;
}

/**
 * Information about a computer on which a management agent is deployed.
 */
export interface ComputerInfo {
  /**
   * UID assigned to a computer.
   * @format uuid
   */
  uniqueUid?: string;

  /**
   * UUID in Win32_ComputerSystem WMI class.
   * @format uuid
   */
  biosUuid?: string;

  /** Name of a computer. */
  hostName?: string;

  /** FQDN of a computer. */
  fqdn?: string;

  /** Operating system installed on a computer. */
  guestOs?: string;

  /** Type of a computer operating system. */
  guestOsType?: "Unknown" | "Workstation" | "DomainController" | "Server" | "Linux" | "Mac";

  /** Version of a computer operating system. */
  guestOsVersion?: string;

  /**
   * SKU of a computer operating system.
   * @format int32
   */
  guestOsSku?: number;

  /** Type of a computer platform. */
  platformType?: "Unknown" | "Windows" | "HyperV" | "Linux" | "Mac" | "vSphere" | "Azure" | "Amazon" | "Other";

  /** Computer IP addresses. */
  ipAddresses?: string[];

  /** Computer MAC addresses. */
  macAddresses?: string[];

  /** Array of applications installed on a computer. */
  applications?: (
    | "Unknown"
    | "OtherApp"
    | "MicrosoftExchangeServer"
    | "MicrosoftSqlServer"
    | "MicrosoftActiveDirectory"
    | "MicrosoftSharePoint"
    | "Oracle"
    | "MySQL"
    | "PostgreSQL"
    | "MongoDB"
    | "ApacheServer"
  )[];
}

/**
 * @example {"instanceUid":"DF997BD3-4AE9-4841-8152-8FF5CC703EAB","name":"VBR","managementAgentUid":"8BDD0D87-D160-40B5-88D3-E77A6F912AF6","version":"9.5.4.1000","installationUid":"C42C94E9-DB8A-4CF4-AF57-911EFA7FEE87"}
 */
export interface BackupServer {
  /**
   * UID assigned to a Veeam Backup & Replication server.
   * @format uuid
   */
  instanceUid?: string;

  /** Name of a Veeam Backup & Replication server. */
  name?: string;

  /**
   * UID assigned to an organization to which a management agent belongs.
   * @format uuid
   */
  organizationUid?: string;

  /**
   * UID assigned to a Veeam Backup & Replication server location.
   * @format uuid
   */
  locationUid?: string;

  /**
   * UID assigned to a management agent installed on a Veeam Backup & Replication server.
   * @format uuid
   */
  managementAgentUid?: string;

  /** Version of Veeam Backup & Replication installed on a server. */
  version?: string;

  /** Version of Veeam Backup & Replication with additional information on installed patch version. */
  displayVersion?: string;

  /** UID assigned to Veeam Backup & Replication installation. */
  installationUid?: string;

  /** Role of a Veeam Backup & Replication server. */
  backupServerRoleType?: "Unknown" | "CloudConnect" | "Client" | "Hosted";

  /** Backup server status. */
  status?: "Unknown" | "Healthy" | "Warning" | "Inaccessible";
}

/**
 * @example {"instanceUid":"27a8baf5-179e-4eae-81d5-772aa2331562","name":"Media servers Failover to Columbus","backupServerUid":"DF997BD3-4AE9-4841-8152-8FF5CC703EAB","type":"Local","objectsCount":5,"status":"InProgress","tenantUid":"ABC97BD3-4AE9-4841-8152-8FF5CC703678","preFailoverCommand":"","postFailoverCommand":""}
 */
export interface BackupFailoverPlan {
  /**
   * UID assigned to a failover plan.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a failover plan by Veeam Backup & Replication.
   * @format uuid
   */
  originalUid?: string;

  /**
   * UID assigned to a Veeam Backup & Replication server on which a failover plan is configured.
   * @format uuid
   */
  backupServerUid?: string;

  /** Name of a failover plan. */
  name?: string;

  /** Type of a failover plan. */
  type?: "Unknown" | "Local" | "Cloud" | "Tenant";

  /** Status of a failover plan. */
  status?: "Unknown" | "Ready" | "InProgress" | "InUndoProgress" | "Success" | "Failed" | "Completed" | "UndoFailed";

  /**
   * UID assigned to a tenant for which a failover plan is configured.
   * @format uuid
   */
  tenantUid?: string;

  /**
   * Number of objects in a job.
   * @format int32
   */
  objectsCount?: number;

  /** Indicates whether a custom script must be executed before a failover plan. */
  preFailoverScriptEnabled?: boolean;

  /**
   * Path to a script file that is executed before a failover.
   * > Property modification is performed asynchronously and cannot be tracked.
   *
   */
  preFailoverCommand?: string;

  /**
   * Path to a script file that is executed after a failover.
   * > Property modification is performed asynchronously and cannot be tracked.
   *
   */
  postFailoverCommand?: string;

  /** Indicates whether a custom script must be executed after a failover plan. */
  postFailoverScriptEnabled?: boolean;
}

export interface BackupFailoverPlanObject {
  /**
   * UID assigned to a VM included in a failover plan.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a failover plan.
   * @format uuid
   */
  planUid?: string;

  /** Name of a VM included in a failover plan. */
  name?: string;

  /** Name of a host running the VM. */
  hostName?: string;

  /** Name of a folder that contains replicas. */
  folderName?: string;

  /** Path to a folder that contains replicas. */
  path?: string;

  /**
   * Veeam Backup & Replication server on which a failover plan is configured.
   * @format uuid
   */
  backupServerUid?: string;

  /** Information about a failover session. Can be obtained only from a server with Veeam Backup & Replication version 11 or later. */
  restoreSession?: BackupFailoverPlanRestoreSession;
}

export interface BackupFailoverPlanRestoreSession {
  /**
   * UID assigned to a protected VM.
   * @format uuid
   */
  instanceUid?: string;

  /** Status of a failover session. */
  backupStatus?: "Unknown" | "Running" | "Success" | "Warning" | "Failed";

  /**
   * UID assigned to a replication restore point.
   * @format uuid
   */
  restorePointUid?: string;

  /**
   * Date and time of the replication restore point creation.
   * @format date-time
   */
  restorePointDateTime?: string;

  /**
   * Failover session start date and time.
   * @format date-time
   */
  startDateTime?: string;

  /**
   * Failover session end date and time.
   * @format date-time
   */
  endDateTime?: string;
}

/**
 * @example {"instanceUid":"8db62bf7-581b-437b-b640-76212ff40b3a","name":"Silver Hardware Plan","backupServerUid":"DF997BD3-4AE9-4841-8152-8FF5CC703EAB","CpuQuota":7770,"MemoryQuota":7368000,"NetworkQuota":3}
 */
export interface BackupHardwarePlan {
  /**
   * UID assigned to a hardware plan.
   * @format uuid
   */
  instanceUid?: string;

  /** Name of a hardware plan. */
  name?: string;

  /**
   * UID assigned to a Veeam Backup & Replication server on which a hardware plan is configured.
   * @format uuid
   */
  backupServerUid?: string;

  /**
   * Maximum CPU resources that VM replicas can utilize, in MHz.
   * @format int64
   */
  cpuQuota?: number;

  /**
   * Indicates whether CPU resources that VM replicas can utilize are unlimited.
   * @format boolean
   */
  isCpuQuotaUnlimited?: any;

  /**
   * Maximum RAM resources that VM replicas can utilize, in bytes.
   * @format int64
   */
  memoryQuota?: number;

  /**
   * Indicates whether RAM resources that VM replicas can utilize are unlimited.
   * @format boolean
   */
  isMemoryQuotaUnlimited?: any;

  /**
   * Number of IP networks with internet access that are available to tenant VM replicas.
   * @format int32
   */
  networkWithInternetQuota?: number;

  /**
   * Number of IP networks without internet access that are available to tenant VM replicas.
   * @format int32
   */
  networkWithoutInternetQuota?: number;
}

export interface BackupHardwarePlanStorage {
  /**
   * UID assigned to a hardware plan storage.
   * @format uuid
   */
  instanceUid?: string;

  /** Friendly name of a hardware plan storage. */
  name?: string;

  /**
   * UID assigned to a hardware plan.
   * @format uuid
   */
  hardwarePlanUid?: string;

  /**
   * Amount of disk space provided to a tenant.
   * @format int64
   */
  quota?: number;
}

/**
 * @example {"instanceUid":"0000568E-F90F-4702-8151-CBE3CE2A8C10","name":"Tenant01","description":"Created by Veeam Service Provider Console at 01.01.2019","hashedPassword":"5E884898DA28047151D0E56F8DC6292773603D0D6AABBDD62A11EF721D1542D8","type":"General","backupServerUid":"DF997BD3-4AE9-4841-8152-8FF5CC703EAB","gatewaySelectionType":"StandaloneGateways","isEnabled":true,"isLeaseExpirationEnabled":true,"leaseExpirationDate":"1985-04-12T23:20:50.5200000+00:00","isBackupProtectionEnabled":true,"backupProtectionPeriod":14,"isGatewayFailoverEnabled":true,"isThrottlingEnabled":true,"throttlingValue":4,"throttlingUnit":"MbytePerSec","maxConcurrentTask":7,"isBackupResourcesEnabled":true,"isNativeReplicationResourcesEnabled":true,"isVcdReplicationResourcesEnabled":true}
 */
export interface CloudTenant {
  /**
   * UID assigned to a Veeam Cloud Connect tenant.
   * @format uuid
   */
  instanceUid?: string;

  /** Name of a tenant account. */
  name?: string;

  /** Description of a tenant account. */
  description?: string;

  /** Password of a tenant account. */
  hashedPassword?: string;

  /** Type of a tenant account. */
  type?: "Unknown" | "General" | "VCD";

  /**
   * UID assigned to a Veeam Cloud Connect server.
   * @format uuid
   */
  backupServerUid?: string;

  /**
   * The last time when a tenant was active.
   * @format date-time
   */
  lastActive?: string;

  /** Type of gateway selection. */
  gatewaySelectionType?: "Unknown" | "StandaloneGateways" | "GatewayPool";

  /** Indicates whether a tenant account is enabled. */
  isEnabled?: boolean;

  /** Indicates whether a tenant account must be disabled automatically. */
  isLeaseExpirationEnabled?: boolean;

  /**
   * Date and time when a company account must be disabled.
   * @format date-time
   */
  leaseExpirationDate?: string;

  /** Indicates whether deleted backup file protection is enabled. */
  isBackupProtectionEnabled?: boolean;

  /**
   * Number of days during which deleted backup files must be kept in the recycle bin on the Veeam Cloud Connect server.
   * @format int32
   */
  backupProtectionPeriod?: number;

  /** Indicates whether a tenant is allowed to fail over to a cloud gateway that is not added to a selected cloud gateway pool. */
  isGatewayFailoverEnabled?: boolean;

  /**
   * Collection of UIDs assigned to gateway pools that are allocated to a company.
   * > If the collection is empty, company will automatically use a standalone gateway.
   *
   */
  gatewayPoolsUids?: string[];

  /** Indicates whether incoming network traffic that will be accepted from a tenant is limited. */
  isThrottlingEnabled?: boolean;

  /**
   * Maximum incoming network traffic bandwidth that will be accepted from a tenant.
   * > If throttling is disabled, the property value is `null`.
   *
   * @format int32
   */
  throttlingValue?: number;

  /**
   * Measurement units for incoming network traffic accepted from a company.
   * > If throttling is disabled, the property value is `null`.
   *
   */
  throttlingUnit?: "MbitPerSec" | "KbytePerSec" | "MbytePerSec";

  /**
   * Maximum number of concurrent tasks available to a tenant.
   * @format int32
   */
  maxConcurrentTask?: number;

  /** Indicates whether cloud backup resources are allocated to a tenant. */
  isBackupResourcesEnabled?: boolean;

  /** Indicates whether cloud replication resources are allocated to a tenant. */
  isNativeReplicationResourcesEnabled?: boolean;

  /** Indicates whether organization VDCs are allocated to a tenant as cloud hosts. */
  isVcdReplicationResourcesEnabled?: boolean;
}

/**
 * @example {"instanceUid":"1111568E-F90F-4702-8151-CBE3CE2A8C10","tenantUid":"0000568E-F90F-4702-8151-CBE3CE2A8C10","name":"SubTenant01","description":"SubTenant X for Agent X","backupServerUid":"DF997BD3-4AE9-4841-8152-8FF5CC703EAB","isEnabled":true}
 */
export interface CloudSubTenant {
  /**
   * UID assigned to a subtenant account.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a tenant that manages a subtenant account.
   * @format uuid
   */
  tenantUid?: string;

  /** Username of a subtenant account. */
  name?: string;

  /** Description of a subtenant account. */
  description?: string;

  /**
   * UID assigned to a Veeam Cloud Connect server.
   * @format uuid
   */
  backupServerUid?: string;

  /** Indicates whether a subtenant account is enabled. */
  isEnabled?: boolean;
}

/**
 * @example {"instanceUid":"6062568E-F90F-4702-8151-CBE3CE2A8C10","name":"BACKUPPRX01","version":"9.5.4.2000","backupServerUid":"DF997BD3-4AE9-4841-8152-8FF5CC703EAB","isOutOfDate":false,"isDisabled":false,"status":"Healthy","type":"vSphere"}
 */
export interface BackupProxy {
  /**
   * UID assigned to a backup proxy.
   * @format uuid
   */
  instanceUid?: string;

  /** Name of a backup proxy. */
  name?: string;

  /** Version of a backup proxy service. */
  version?: string;

  /**
   * UID assigned to a Veeam Backup & Replication server.
   * @format uuid
   */
  backupServerUid?: string;

  /** Indicates whether a backup proxy service is outdated. */
  isOutOfDate?: boolean;

  /** Indicates whether a backup proxy is disabled. */
  isDisabled?: boolean;

  /**
   * UID assigned to a server that performs a role of a backup proxy.
   * @format uuid
   */
  hostUid?: string;

  /** Computer name of a server that performs a role of a backup proxy. */
  hostName?: string;

  /** Backup proxy status. */
  status?: "Unknown" | "Healthy" | "Warning" | "Error";

  /** Type of a backup proxy. */
  type?: "Unknown" | "vSphere" | "HyperV" | "HyperVOffhost" | "File";
}

/**
 * @example {"instanceUid":"81536849-36C5-4044-9DC5-D1393062ADA8","name":"BACKUPCGW01","backupServerUid":"DF997BD3-4AE9-4841-8152-8FF5CC703EAB","port":10001,"isOutOfDate":false,"isDisabled":false,"status":"Healthy","externalPort":666,"externalIp":"10.17.26.1"}
 */
export interface CloudGateway {
  /**
   * UID assigned to a cloud gateway.
   * @format uuid
   */
  instanceUid?: string;

  /** Name of a cloud gateway. */
  name?: string;

  /**
   * UID assigned to a Veeam Backup & Replication server.
   * @format uuid
   */
  backupServerUid?: string;

  /**
   * UID assigned to a cloud gateway pool that includes the cloud gateway.
   * @format uuid
   */
  gatewayPoolUid?: string;

  /**
   * Internal port that is listening to external connections.
   * @format int32
   */
  port?: number;

  /**
   * Port for external connections.
   * @format int32
   */
  externalPort?: number;

  /** IP address of a network interface card on a cloud gateway. */
  externalIp?: string;

  /** Indicates whether a cloud gateway service is outdated. */
  isOutOfDate?: boolean;

  /**
   * UID assigned to a server that performs a role of a cloud gateway.
   * @format uuid
   */
  hostUid?: string;

  /** Indicates whether a cloud gateway is disabled. */
  isDisabled?: boolean;

  /** Status of a cloud gateway. */
  status?: "Unknown" | "Healthy" | "Warning" | "Error";
}

/**
 * @example {"instanceUid":"8B7AC327-3D08-4F51-9D36-ECA703D4565A","name":"BACKUPCGPOOLW01","backupServerUid":"DF997BD3-4AE9-4841-8152-8FF5CC703EAB"}
 */
export interface CloudGatewayPool {
  /**
   * UID assigned to a cloud gateway pool.
   * @format uuid
   */
  instanceUid?: string;

  /** Name of a cloud gateway pool. */
  name?: string;

  /**
   * UID assigned to a Veeam Backup & Replication server.
   * @format uuid
   */
  backupServerUid?: string;

  /**
   * Number of cloud gateways added to a cloud gateway pool.
   * @format int32
   */
  numberOfGateways?: number;
}

/**
 * @example {"name":"adfs","displayName":"Active Directory Federation Services","template":"ADFS","type":"SAML2","organizationUid":"0242e3ca-1cc2-4d90-8285-0e7a9b375418","enabled":true}
 */
export interface IdentityProvider {
  /**
   * Name of an identity provider.
   * @pattern ^[\._a-zA-Z0-9]+$
   */
  name: string;

  /**
   * Display name of an identity provider.
   * @pattern ^[^\<\>\"\'\%\;\(\)\&\^\+\|]+$
   */
  displayName: string;
  template: IdentityProviderTemplate;
  type: IdentityProviderType;

  /**
   * UID assigned to an organization.
   * @format uuid
   */
  organizationUid?: string;

  /** Indicates whether an identity provider is enabled. */
  enabled?: boolean;
}

export enum IdentityProviderType {
  Unknown = "Unknown",
  SAML2 = "SAML2",
}

export enum IdentityProviderTemplate {
  Unknown = "Unknown",
  Keycloak = "Keycloak",
  ADFS = "ADFS",
  Okta = "Okta",
  Custom = "Custom",
}

/**
 * @example {"name":"Sigma","displayName":"Sigma","template":"Keycloak","type":"SAML2","configurationValidationSucceeded":true,"errorMessage":null,"configuration":"\n <identityProvider>\n <saml2\n entityId=\"Sigma\"\n returnUrl=\"https://vspc:1280/Saml2/Sigma/\"\n modulePath=\"Saml2/Sigma/\"\n authenticateRequestSigningBehavior=\"IfIdpWantAuthnRequestsSigned\"\n outboundSigningAlgorithm=\"http://www.w3.org/2001/04/xmldsig-more#rsa-sha256\"\n > \n <compatibility ignoreMissingInResponseTo=\"true\" unpackEntitiesDescriptorInIdentityProviderMetadata=\"true\" />\n <nameIdPolicy format=\"EmailAddress\"/>\n <requestedAuthnContext \n comparison=\"Exact\"\n classRef=\"Password\"\n />\n <metadata \n cacheDuration=\"PT1H\" \n validDuration=\"7.12:00:00\" \n wantAssertionsSigned=\"true\"\n >\n <organization \n name=\"Sigma\" \n displayName=\"Sigma\" \n url=\"https://vspc:1280\" \n language=\"en\" \n />\n <contactPerson \n type=\"Other\" \n email=\"\" \n />\n <requestedAttributes>\n <add name=\"Minimal\" />\n </requestedAttributes>\n </metadata>\n <identityProviders>\n <add\n entityId=\"http://keycloak.vspc:8080/auth/realms/master\"\n metadataLocation=\"http://keycloak.vspc:8080/auth/realms/master/protocol/saml/descriptor\"\n allowUnsolicitedAuthnResponse=\"true\"\n loadMetadata=\"true\"\n />\n </identityProviders>\n \n \n <serviceCertificates>\n <add \n status=\"Current\"\n use=\"Both\"\n fileName=\"data:application/x-pkcs12;base64,MIIJ4AIBAzCCCZwGCSqGSIb3DQEHAaCCCY0EggmJMIIJhTCCBd4GCSqGSIb3DQEHAaCCBc8EggXLMIIFxzCCBcMGCyqGSIb3DQEMCgECoIIE/jCCBPowHAYKKoZIhvcNAQwBAzAOBAh+4+aU9uel+QICB9AEggTYZpp0tMgqweHx1/jkPuSD70AfAoongtgXpFSxKML8Rr88Qfnfqw1yvZJkKSagtRbV5EF0VLDrSZfg1Z1aMCLDd9A3wqvNC3BbgUe+bAdGrqCp3XvFDXd/tC1HN0EhwYkoZE5OwgfJm64dm+bzRuY1ANyrPjcPstc0aUwsryUwoaxXRfGEyhk5R7MXJBCyx/gkkooyXzkuceU1qb8L9IUyBN56XMt8xmR7iyTq2vcMzv+J4z9A2I9B2wnhnncSy1jvijKygMO0qGfL1dZV+tQtr5SYyVN6606+c99OMYwT8g0KWfNSLiDz5yMfNYb6b5kC4I/6samRwh/hDv7+edkVuftGb575nQn3lBkNq5PbRovseOIhREThicDx9ixq/GsbYn7x8ad8ZP/vX3NHO+eaialwzj1O+s6xCHiBZrfHjxnt5JqPpBJ/CUmNDTKoQ6k8jmm2ckhP+PXfZJJgI2LDKv1g8HSvWpGy1y8+PPXEnjDQDOSKLhh5irYWQxx25+3aWNh/+OAV6zszn7cI3uTZE8bN/3AECRFxWNJx5kR3FR7SVdR9dbjKj2aidOoDfGnGfSjpmY4Ow7yaBW4KzJMVi6ruU3zNuyK8wjqRHYfJQs2gDJdUG03gIGOucKps5rpbH0qzO4vGK1r9jrxHjuKPL1lZVAVE3nvZdqLR+dU7qyVKNNcRjYDobXiSeUtMaF6MrMSQeUKds1fz97ModxDuP71rp0jCzJi00v4lGy5SzwwGAbnwdUkbijJBiGER3f9Nts8Yx3/qQ4twlkrcLyn3xkY6VAQrY7p5T2wssR8xLKMgzU+CU/0KGDcTT2dTcTDQT1bcFZypuMDiIZ28BPzd5TReciFr+YthitEDvIHcDrG2UuY2Ir77yfD08iZIDy8jsIg9fDAeaGPQCIwlCuWDi4raYGg5FysqGujkxfz7hZUzs/F4vwWX0ouWvqjfPzsGRn+OS0ZCi28HXWM7he8iGAbZzA87XPOXyMEtZLrl/09tvSkHOfMd0yXPAXUNim6OMXHVWNwfdc7Da3dYUJM+FPc6A9uE5w0DDaXYFygCpP1bznpVSVq5AcRngcrJl/2+6GntvEHNL+5WVJqbqBQ8M+Lcg0exPX9OC/KoR0bl1L8RdvBL+m9XrJsX4kfScS/1kEPpUYD9BP+6PlEdjtwWzD7ub0GcvwfVekUti4REVbD0FuF3j6k7J/9RkYSp4HTak6P5ps1Qfo8ue8XdJBZUtqC674eb2aRrmkr2fvnzJych+ztPunOR6vMmdwE84ukEz1s6owp6qwmWnZ0Vaul3tbMZ89WGSaCdfKiwWPuXbtLEqTtx6FB2Af7vB4h8srViZRyXw/0GLEFwGme4IzXfoGuYo1vq5stsVm7jVlnHa75GHRCNH4te4UMrDtpv3L+qMCXmCGJ7uVc1B+Vg4pJF057ITuaBZN7DrPDjxtZA49u4z9SarRwhUbH3nmGHAr6/ntsB5CIs5KjxAoHX+OGazxE64zEKC4shR/Vj8MthKszfbfVYtP7IH9+DRurfh3zoqhPglXcYieQ4LKgyiyRgp66jpTg1/FeFSYQE3tVkHJIpu1B8NIcD3Bm7IGS8kV+MyW3OGebABVM4GDXlNbMRTqeegnlCfMAldXuSHEtXudIrKRV4P9rUWzGBsTATBgkqhkiG9w0BCRUxBgQEAQAAADAfBgkqhkiG9w0BCRQxEh4QAEEATQBHAC0AVgBBAEMAJDB5BgkrBgEEAYI3EQExbB5qAE0AaQBjAHIAbwBzAG8AZgB0ACAARQBuAGgAYQBuAGMAZQBkACAAUgBTAEEAIABhAG4AZAAgAEEARQBTACAAQwByAHkAcAB0AG8AZwByAGEAcABoAGkAYwAgAFAAcgBvAHYAaQBkAGUAcjCCA58GCSqGSIb3DQEHBqCCA5AwggOMAgEAMIIDhQYJKoZIhvcNAQcBMBwGCiqGSIb3DQEMAQMwDgQIDYEQnhB4LpsCAgfQgIIDWHYiX0spwWoCkzChuX/XoOFuQKfFPLxwHbr01mmlkMh9xaaETYiEys5drr7KP+jUw6dMy08NZJ9PV70TsEdG9DDL7EIidTsEA25CZXxLktyn730N2rmuGZ1hG1pB+Buj7wKSGQhF18I53s3q9S1bupWiV+xkhvxyp3DCjqY1GEKIzZiJFmIviVBEUxRtuWdIIwdbV1tcw/rIB71GsYB2vFo3V5as/J7nfWpTjiLSbORxWjkl8BRO0AUkg1qx5rQyeIBugn+ExzT+u51VeAdbTXwq8qLiKxaGvSiSyRX3AcrYLL/rW/pWGc/KNjnRxJpmZfe61J68oXigqdP7oKdaRvkJKyfeODd8SvdtkxA8w6sv+A3DPEeMAQUT5lYUoTRyjxZeSpScdyZBhuTNjidxb2AhWbd/7Z+AAK5+d7VzWMCLy0eGn0Af2PwI+IU3Tc0HIDz92+ijHNMZzAtIOnpGeAu/1iIIUlyFrALotSgO9r4KjIY3TgiUFQsvABNX3lcyImC4/IMqVzwPG0OmSYXz8DpDkO0bqVh+XKs1rRHGfO/hLJdzYygNSJgyWkut3SqXkSxvyDO5iQI4t8ziavQzWPUPKOj/LtqNFEzr1yy79G6TVLIc5by3OkglDUWOYeLopQQCEpYkxFaciRJOpAzXouhJbVVUtCLxGqUp/LQtWzJ0lrT4YumXNaW9AeZx+CUS76fyRrl+g3wsLs4jV80NM0W1cfweeIac6z0ql2/Q5UAkxy0yJZnoWJl8kCTCZ5TUADV8b/KoBZbz3EblZ0JthC4sKt3/DGjXuS0i+RxowAMX2+BpWuvp9838gXTkiJ2KLAGL1OaJn6m4tb2lAZSVh9gVrJBt2SL5mmZXCzt3XGuaN6bWm9RaPikXRCHTCz9DcwlKcMXu3OebVXD9XylVnSpptyxXKUhbRlT7QMSKKDLfqAZfG4aPbVEzWo95B0iHduOcDUN8biNxm5ZbBeJiXIhvhYBRkU/iyaBqUdCjuKIvXXCHBK1NQZLeQWDfTpMT3OLY37FEmVkK/lFO1dgowwAGE/URufqS/CgWC7r2WMsQRqX590vAi0Py2Cp+oh7SWm3fZqQax3r+5fPcpQMdnLsLjM3bQfp/9DjzexMwF9Er+n1M3IkIBw4wOzAfMAcGBSsOAwIaBBS9qHemVZA1Vk8rJ8KI6VlNkPRr5AQUCjqzhtsN24vg9lZfSDXHxyAbx0gCAgfQ\"\n />\n </serviceCertificates>\n </saml2>\n </identityProvider>\n ","rulesCount":0,"configurationCompleted":true,"enabled":true,"organizationUid":"00000000-0000-0000-0000-000000000000"}
 */
export interface IdentityProviderSettings {
  /**
   * Name of an identity provider.
   * @pattern ^[\._a-zA-Z0-9]+$
   */
  name: string;

  /**
   * Display name of an identity provider.
   * @pattern ^[^\<\>\"\'\%\;\(\)\&\^\+\|]+$
   */
  displayName: string;
  template?: IdentityProviderTemplate;
  type?: IdentityProviderType;

  /**
   * Indicates whether an identity provider successfully passed validation procedure.
   * > If the value is `false`, an identity provider is not functional.
   *
   */
  configurationValidationSucceeded?: boolean;

  /**
   * Error message.
   * > If identity provider validation fails, the property value is not `null`.
   *
   */
  errorMessage?: string;

  /**
   * Identity provider type configuration.
   * > For the `SAML` identity provider type use the [Sustainsys.Saml2](https://saml2.sustainsys.com/en/stable/configuration.html#sustainsys-saml2-section) configuration.
   *
   */
  configuration: string;

  /**
   * Number of mapping rules configured for a service provider.
   * @format int32
   */
  rulesCount?: number;

  /**
   * Indicates whether the identity provider configuration is completed.
   * >If configuration is not completed, an identity provider is not available on the authorization screen of the Veeam Service Provider Console web interface.
   * >You can complete configuration by modifying this property using the PATCH operation.
   * >If another identity provider is already enabled for an organization, this value cannot be modified.
   *
   */
  configurationCompleted?: boolean;

  /** Indicates whether an identity provider is enabled. */
  enabled?: boolean;

  /**
   * UID assigned to an organization.
   * @format uuid
   */
  organizationUid?: string;
}

/**
 * @example {"instanceUid":"00000000-0000-0000-0000-000000000000","name":"CompanyLocationUser","providerName":null,"description":"Keycloak Company Location User","role":"CompanyLocationUser","enabled":true,"managedCompaniesUids":null,"manageAllCompanies":true,"organizationMappingSourceClaimType":"Company","locationsMappingSourceClaimType":null,"additionalMappings":null,"attributeMappings":null,"_embedded":null}
 */
export interface IdentityProviderRoleMappingRule {
  /**
   * UID assigned to a mapping rule.
   * @format uuid
   */
  instanceUid?: string;

  /** Name of a mapping rule. Each mapping rule configured for a single identity provider must have a unique name. */
  name: string;

  /** Name of an identity provider. */
  providerName?: string;

  /** Mapping rule description. */
  description?: string;

  /** User role. */
  role:
  | "Unknown"
  | "PortalAdministrator"
  | "PortalOperator"
  | "PortalReadonlyOperator"
  | "CompanyLocationUser"
  | "CompanyLocationAdministrator"
  | "CompanyOwner"
  | "CompanyAdministrator"
  | "CompanyInvoiceAuditor"
  | "ResellerOwner"
  | "ResellerOperator"
  | "ResellerUser"
  | "ResellerInvoiceAuditor"
  | "ResellerAdministrator";

  /** Indicates whether a mapping rule is enabled. */
  enabled?: boolean;

  /**
   * Array of UIDs assigned to companies managed by a user.
   * >Required for the `PortalOperator`, `PortalReadonlyOperator`, `ResellerOperator`, `ResellerUser`
   * and `ResellerAdministrator` user roles.
   *
   */
  managedCompaniesUids?: string[];

  /** Indicates whether a user must manage all available companies. Overrides values of the `managedCompaniesUids` property. */
  manageAllCompanies?: boolean;

  /** Organization mapping claim type containing organization alias */
  organizationMappingSourceClaimType: string;

  /**
   * Location mapping claim containing user locations in the following format: `Location1;Location2`.
   * >This property can be specified for the `CompanyLocationUser`, `CompanyLocationAdministrator` and `CompanySubtenant` user roles.
   * Otherwise a user is assigned to the first available company location.
   *
   */
  locationsMappingSourceClaimType?: string;

  /** Array of additional mappings required for rule selection. */
  additionalMappings?: IdentityProviderClaimMatchRule[];

  /** Array of mapping claims attributed to user parameters. */
  attributeMappings?: IdentityProviderAttributeMapping[];

  /** Resource representation of the related identity provider entity. */
  _embedded?: { providerInfo?: IdentityProvider };
}

export interface IdentityProviderClaimMatchRule {
  /** Mapping claim type. */
  claimType: string;

  /** Logical operator. */
  operator: "Unknown" | "Equals" | "NotEquals" | "Contains" | "NotContains" | "MatchRegex";

  /** Mapping claim value. */
  value: string;

  /** Indicates whether value comparison must be case sensitive. */
  matchCase: boolean;
}

export interface IdentityProviderAttributeMapping {
  /** Mapping claim type. */
  claimType: string;

  /** Indicates whether mapping claim name can be identified automatically. */
  allowAliases?: boolean;

  /** User parameter to which a claim type is mapped. */
  attribute: "Unknown" | "FirstName" | "LastName" | "Name" | "Address" | "Phone";

  /** Default attribute value. */
  defaultValue?: string;
}

/**
 * @example {"instanceUid":"447AC327-3D08-4F51-9D36-ECA703D4565A","name":"BACKUPWANACC01","backupServerUid":"DF997BD3-4AE9-4841-8152-8FF5CC703EAB"}
 */
export interface SiteWanAcceleratorResource {
  /**
   * UID assigned to a WAN accelerator.
   * @format uuid
   */
  instanceUid?: string;

  /** Name of a WAN accelerator. */
  name?: string;

  /**
   * UID assigned to a Veeam Backup & Replication server.
   * @format uuid
   */
  backupServerUid?: string;
}

/**
 * @example {"instanceUid":"85C41EAE-A598-49C5-B92C-9E5138D170EC","name":"BACKUPREPOSITORY01","backupServerUid":"DF997BD3-4AE9-4841-8152-8FF5CC703EAB"}
 */
export interface BackupRepository {
  /**
   * UID assigned to a backup repository.
   * @format uuid
   */
  instanceUid?: string;

  /** Name of a backup repository. */
  name?: string;

  /**
   * UID assigned to a Veeam Backup & Replication server.
   * @format uuid
   */
  backupServerUid?: string;

  /**
   * UID assigned to a scale-out backup repository which includes the backup repository as an extent.
   * @format uuid
   */
  parentRepositoryUid?: string;

  /** Indicates whether the per-VM backup job option is enabled in the backup repository settings. VM backup files option in the repository settings is enabled. Displays if the per-VM backup job option is enabled or not in the backup repository settings. */
  perVMBackupFiles?: boolean;

  /**
   * Total disk space of backup repository, in bytes.
   * @format int64
   */
  capacity?: number;

  /** Indicates whether information about total disk space is available. */
  isCapacityAvailable?: boolean;

  /**
   * Free disk space of backup repository, in bytes.
   * @format int64
   */
  freeSpace?: number;

  /** Indicates whether a backup repository has free space. */
  isFreeSpaceAvailable?: boolean;

  /**
   * Amount of used space on a backup repository, in bytes.
   * @format int64
   */
  usedSpace?: number;

  /** Indicates whether information about used space is available. */
  isUsedSpaceAvailable?: boolean;

  /** Type of a backup repository. */
  type?:
  | "Unknown"
  | "Windows"
  | "Linux"
  | "Share"
  | "Cloud"
  | "ScaleOut"
  | "MicrosoftAzureBlobStorage"
  | "AmazonS3"
  | "AmazonS3Compatible"
  | "AmazonS3External"
  | "AzureExternal"
  | "DellEmcDataDomain"
  | "HpeStoreOnce"
  | "QuantumDxi"
  | "IbmCloudObjectStorage"
  | "NFS"
  | "ExaGrid"
  | "MicrosoftAzureArchive"
  | "MicrosoftAzureDataBox"
  | "GoogleCloud"
  | "Infinidat"
  | "Fujitsu"
  | "AmazonS3Glacier"
  | "S3Compatible";

  /**
   * UID assigned to a backup repository if it is used as a cloud repository.
   * @format uuid
   */
  cloudRepositoryUid?: string;

  /** Path to the folder where backup files are stored. */
  path?: string;

  /** Name of a computer that performs a role of a backup repository. */
  hostName?: string;

  /**
   * UID assigned to a computer that performs a role of a backup repository.
   * @format uuid
   */
  hostUid?: string;

  /** Indicates whether a backup repository service is outdated. */
  isOutOfDate?: boolean;

  /** Status of a backup repository. */
  status?: "Unknown" | "Healthy" | "Warning" | "Error";

  /** Indicates whether a backup repository is used as a cloud repository. */
  isCloud?: boolean;
}

/**
 * @example {"instanceUid":"7eced22b-5e67-45e1-bc00-37e399903bed","name":"BACKUPWAN01","backupServerUid":"DF997BD3-4AE9-4841-8152-8FF5CC703EAB"}
 */
export interface BackupWanAccelerator {
  /**
   * UID assigned to a WAN accelerator.
   * @format uuid
   */
  instanceUid?: string;

  /** Name of a WAN accelerator. */
  name?: string;

  /**
   * UID assigned to a Veeam Backup & Replication server.
   * @format uuid
   */
  backupServerUid?: string;

  /** Version of a WAN accelerator service. */
  version?: string;

  /**
   * UID assigned to a computer that performs a role of a WAN accelerator.
   * @format uuid
   */
  hostUid?: string;

  /** Name of a computer that performs a role of a WAN accelerator. */
  hostName?: string;

  /** Indicates whether a WAN accelerator service is outdated. */
  isOutOfDate?: boolean;

  /** WAN accelerator status. */
  status?: "Unknown" | "Healthy" | "Warning" | "Error";

  /** Indicates whether a WAN accelerator is used in the Veeam Cloud Connect infrastructure. */
  isCloud?: boolean;
}

export interface BackupServerAgentJob {
  /**
   * UID assigned to an agent backup job.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * Number of job sessions.
   * @format int32
   */
  totalJobsCount?: number;

  /**
   * Number of successful job sessions.
   * @format int32
   */
  successJobsCount?: number;

  /** Location of backup files. */
  destination?: string;

  /** Backup scope settings. */
  source?: BackupServerAgentJobSource;

  /** Status of the latest job session */
  jobMode?: "Unknown" | "ManagedByBackupServer" | "ManagedByAgent";

  /** Type of a protected computer operating system. */
  osType?: "Unknown" | "Windows" | "Linux" | "Mac";

  /** License type of a backup job. */
  licenseType?: "Unknown" | "Server" | "Workstation" | "Limited";

  /** Resource representation of the related Veeam Backup & Replication server job entity. */
  _embedded?: EmbeddedForBackupServerJobChildren;
}

export interface BackupServerAgentJobSource {
  /** Backup mode. */
  backupMode?: "Unknown" | "EntireComputer" | "Volume" | "File";

  /** Indicates whether a backup job protects individual folders. */
  backupUserFolders?: boolean;

  /** Indicates whether agent operating system is included in a backup scope. */
  backupOperatingSystem?: boolean;

  /** Files and folders of an agent computer are included in a backup scope. */
  fileSystemItems?: { volumes?: string[]; filesAndFolders?: string[] };
}

export interface BackupServerAgentJobObject {
  /**
   * UID assigned to a Veeam backup agent.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a Veeam Backup & Replication server.
   * @format uuid
   */
  backupServerUid?: string;

  /**
   * UID assigned to a Veeam backup agent.
   * @format uuid
   */
  agentUid?: string;

  /**
   * UID assigned to a job.
   * @format uuid
   */
  jobUid?: string;

  /** Computer name of a Veeam backup agent. */
  computer?: string;

  /** Status of a job. */
  backupStatus?: "Unknown" | "None" | "Success" | "Warning" | "Failed" | "Running";

  /**
   * Date and time when the latest job session started.
   * @format date-time
   */
  lastRun?: string;

  /**
   * Date and time when the latest job session ended.
   * @format date-time
   */
  lastEndTime?: string;

  /**
   * Duration of the latest job session, in seconds.
   * @format int32
   */
  lastDuration?: number;

  /**
   * Number of restore points available in the backup chain.
   * @format int32
   */
  restorePointsCount?: number;

  /** Type of a protected computer operating system. */
  osType?: "Unknown" | "Windows" | "Linux" | "Mac";

  /**
   * Message that is displayed in case a backup job fails.
   * > Every line break is represented by the `\r\n` control characters.
   *
   */
  failureMessage?: string;
}

/**
 * @example {"instanceUid":"EDEB5975-B409-49B5-8ECE-FFFECB13494F","name":"Web server Backup to Cloud","backupServerUid":"DF997BD3-4AE9-4841-8152-8FF5CC703EAB","status":"Success","type":"BackupVm","lastRun":"2016-11-01T10:35:28.0000000-07:00","endTime":"2016-11-01T10:40:56.0000000-07:00","duration":328,"processingRate":17,"avgDuration":328,"transferredData":1052,"bottleneck":"Source","isEnabled":true,"scheduleType":"Periodically","retentionLimit":14,"retentionLimitType":"RestorePoints","isGfsOptionEnabled":true}
 */
export interface BackupServerJob {
  /**
   * UID assigned to a job configured on a client Veeam Backup & Replication server.
   * @format uuid
   */
  instanceUid?: string;

  /** Name of a job configured on a client Veeam Backup & Replication server. */
  name?: string;

  /**
   * UID assigned to a client Veeam Backup & Replication server.
   * @format uuid
   */
  backupServerUid?: string;

  /**
   * UID assigned to a Veeam Backup & Replication server location.
   * @format uuid
   */
  locationUid?: string;

  /**
   * UID assigned to a site.
   * @format uuid
   */
  siteUid?: string;

  /**
   * UID assigned to an organization.
   * @format uuid
   */
  organizationUid?: string;

  /**
   * Status of the latest job session.
   * > Can be changed to Running or Stopping using the PATCH endpoint.
   *
   */
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

  /** Type of a job configured on a client Veeam Backup & Replication server. */
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

  /**
   * Date and time when the latest job session started.
   * @format date-time
   */
  lastRun?: string;

  /**
   * Date and time when the latest job session ended.
   * @format date-time
   */
  lastEndTime?: string;

  /**
   * Duration of the latest job session, in seconds.
   * @format int32
   */
  lastDuration?: number;

  /**
   * Rate at which VM data was processed during the latest job session
   * @format float
   */
  processingRate?: number;

  /**
   * Average time a job session takes to complete, in seconds.
   * @format int32
   */
  avgDuration?: number;

  /**
   * Total amount of data that was transferred to target during the latest job session, in bytes.
   * @format int64
   */
  transferredData?: number;

  /** Bottleneck in the process of transferring the data from source to target. */
  bottleneck?:
  | "Unknown"
  | "Network"
  | "None"
  | "Proxy"
  | "Source"
  | "SourceWanAccelerator"
  | "Target"
  | "TargetWanAccelerator";

  /**
   * Indicates whether a job schedule is enabled.
   * > Can be changed using the PATCH endpoint.
   *
   */
  isEnabled: boolean;

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

  /**
   * Message that is displayed in case a backup job fails.
   * > Every line break is represented by the `\r\n` control characters.
   *
   */
  failureMessage?: string;

  /** Type of a target backup location. */
  targetType?: "Unknown" | "Local" | "Cloud";

  /** Name of a target backup location. */
  destination?: string;

  /**
   * Number of retention policy units.
   * @format int32
   */
  retentionLimit?: number;

  /** Type of retention policy units. */
  retentionLimitType?: "Unknown" | "Days" | "RestorePoints";

  /** Indicates whether the GFS retention is enabled. */
  isGfsOptionEnabled?: boolean;
}

/**
 * Resource representation of the related Veeam Backup & Replication server job entity.
 */
export interface EmbeddedForBackupServerJobChildren {
  /** Resource representation of a job. */
  backupServerJob?: BackupServerJob;
}

export interface BackupServerFileShareJob {
  /**
   * UID assigned to a file share backup job.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a target backup repository.
   * @format uuid
   */
  targetRepositoryUid?: string;

  /**
   * UID assigned to an archive repository.
   * @format uuid
   */
  archiveRepositoryUid?: string;

  /**
   * Duration of file retention.
   * @format int32
   */
  retention?: number;

  /** Measurement units of file retention duration. */
  retentionUnit?: "Minutes" | "Hours" | "Days" | "Months" | "Years";

  /** Indicates whether long-term file retention is enabled. */
  isArchiveRetentionEnabled?: boolean;

  /**
   * Duration of long-term file retention.
   * @format int32
   */
  archiveRetention?: number;

  /** Measurement units of long-term file retention duration. */
  archiveRetentionUnit?: "Minutes" | "Hours" | "Days" | "Months" | "Years";

  /** Resource representation of the related Veeam Backup & Replication server job entity. */
  _embedded?: EmbeddedForBackupServerJobChildren;
}

export interface BackupServerFileShareJobObject {
  /**
   * UID assigned to a file share backup job.
   * @format uuid
   */
  jobUid?: string;

  /**
   * UID assigned to a file share server.
   * @format uuid
   */
  fileServerUid?: string;

  /** Name of a file share. */
  name?: string;

  /** Processed files and folders. */
  sources?: BackupServerFileJobObjectSource[];

  /** Information about the latest job session. */
  lastSession?: BackupServerFileShareJobObjectLastSession;
}

export interface BackupServerFileShareCopyJobObject {
  /**
   * UID assigned to a job.
   * @format uuid
   */
  jobUid?: string;

  /**
   * UID assigned to a file share server.
   * @format uuid
   */
  fileServerUid?: string;

  /** Path to a location of protected data. */
  path?: string;

  /** Processed files and folders. */
  sources?: BackupServerFileJobObjectSource[];

  /** Information about the latest job session. */
  lastSession?: BackupServerJobObjectLastSession;
}

export interface BackupServerFileJobObjectSource {
  /** Path to a location of protected data. */
  path?: string;

  /** Type of protected object. */
  type?: "Unknown" | "File" | "Directory";

  /** Names and name masks of files that must be included into a backup scope. */
  inclusionMasks?: string[];

  /** Names and name masks of files that must be excluded from a backup scope. */
  exclusionMasks?: string[];
}

export interface BackupServerFileTapeJobObject {
  /**
   * UID assigned to a job.
   * @format uuid
   */
  jobUid?: string;

  /** Host name of a server, on which protected files and folders reside. */
  hostName?: string;

  /** Array of protected files and folders. */
  sources?: BackupServerFileTapeJobObjectSource[];

  /** Resource representation of the latest job session. */
  lastSession?: BackupServerJobObjectLastSession;
}

export interface BackupServerFileTapeJobObjectSource {
  /** Path to a location where protected files and folders reside. */
  path?: string;

  /** Type of a protected unit. */
  type?: "Unknown" | "File" | "Directory";
}

export interface BackupServerFileShareJobObjectLastSession {
  /** Status of a job. */
  backupStatus?: "Unknown" | "Running" | "Success" | "Warning" | "Failed";

  /**
   * Total number of files in all sources.
   * @format int64
   */
  sourceFilesCount?: number;

  /**
   * Number of processed files.
   * @format int64
   */
  changedFilesCount?: number;

  /**
   * Number of skipped files.
   * @format int64
   */
  skippedFilesCount?: number;

  /**
   * Number of backed up files.
   * @format int64
   */
  backedUpFilesCount?: number;

  /**
   * Total size of backed up file share data, in bytes.
   * @format int64
   */
  transferredSize?: number;

  /**
   * Total size of all source files, in bytes.
   * @format int64
   */
  sourceSize?: number;

  /**
   * Time taken to complete the latest job session, in seconds.
   * @format int32
   */
  duration?: number;

  /** Message that is displayed after a job session finishes. */
  messages?: string[];
}

export interface BackupServerJobObjectLastSession {
  /** Status of the latest job session. */
  backupStatus?: "Unknown" | "Running" | "Success" | "Warning" | "Failed";

  /**
   * Size of backup files, in bytes.
   * @format int64
   */
  totalBackedSize?: number;

  /**
   * Size of processed data, in bytes.
   * @format int64
   */
  sourceSize?: number;

  /**
   * Time taken to complete the latest job session, in seconds.
   * @format int32
   */
  duration?: number;

  /** Array of job session messages. */
  messages?: string[];
}

export interface BackupServerBackupCopyJob {
  /**
   * UID assigned to a job.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a target repository.
   * @format uuid
   */
  targetRepositoryUid?: string;

  /**
   * UID assigned to a target WAN accelerator.
   * @format uuid
   */
  targetWanAcceleratorUid?: string;

  /**
   * UID assigned to a source WAN accelerator.
   * @format uuid
   */
  sourceWanAcceleratorUid?: string;

  /**
   * Number of weeks during which the weekly backup must be stored on the target repository.
   * @format int32
   */
  weeklyRestorePointsToKeep?: number;

  /**
   * Number of months during which the monthly backup must be stored on the target repository.
   * @format int32
   */
  monthlyRestorePointsToKeep?: number;

  /**
   * Number of years during which the yearly backup must be stored on the target repository.
   * @format int32
   */
  yearlyRestorePointsToKeep?: number;

  /** Type of a retention policy of a backup copy job. */
  retentionPolicyType?: "Unknown" | "None" | "Simple" | "GFS";

  /** Indicates whether a warning is enabled in case backup copy job fails to complete within the specified RPO interval. */
  isRpoOptionsEnabled?: boolean;

  /**
   * Desired RPO interval value.
   * @format int32
   */
  rpoOptionsValue?: number;

  /** Measurement units of a desired RPO interval value. */
  rpoOptionsUnit?: "Minutes" | "Hours" | "Days" | "Months" | "Years";

  /** Resource representation of the related Veeam Backup & Replication server job entity. */
  _embedded?: EmbeddedForBackupServerJobChildren;
}

export interface BackupServerImmediateBackupCopyJob {
  /**
   * UID assigned to a job.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a target backup repository.
   * @format uuid
   */
  targetRepositoryUid?: string;

  /**
   * UID assigned to a target WAN accelerator.
   * @format uuid
   */
  targetWanAcceleratorUid?: string;

  /**
   * UID assigned to a source WAN accelerator.
   * @format uuid
   */
  sourceWanAcceleratorUid?: string;

  /**
   * Number of weeks during which the weekly backup must be stored on the target repository.
   * @format int32
   */
  weeklyRestorePointsToKeep?: number;

  /**
   * Number of months during which the monthly backup must be stored on the target repository.
   * @format int32
   */
  monthlyRestorePointsToKeep?: number;

  /**
   * Number of years during which the yearly backup must be stored on the target repository.
   * @format int32
   */
  yearlyRestorePointsToKeep?: number;

  /** Type of a retention policy of a backup copy job. */
  retentionPolicyType?: "Unknown" | "None" | "Simple" | "GFS";

  /** Indicates whether a warning is enabled in case backup copy job fails to complete within the specified RPO interval. */
  isRpoOptionsEnabled?: boolean;

  /**
   * Desired RPO interval value.
   * @format int32
   */
  rpoOptionsValue?: number;

  /** Measurement units of a desired RPO interval value. */
  rpoOptionsUnit?: "Minutes" | "Hours" | "Days" | "Months" | "Years";

  /** Resource representation of the related Veeam Backup & Replication server job entity. */
  _embedded?: EmbeddedForBackupServerJobChildren;
}

export interface BackupServerFileShareCopyJob {
  /**
   * UID assigned to a job.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a source file share job.
   * @format uuid
   */
  sourceFileShareJobUid?: string;

  /**
   * UID assigned to a target backup repository.
   * @format uuid
   */
  targetRepositoryUid?: string;

  /**
   * Duration of backup file retention.
   * @format int32
   */
  retention?: number;

  /** Measurement units of backup file retention duration. */
  retentionUnit?: "Minutes" | "Hours" | "Days" | "Months" | "Years";

  /** Resource representation of the related Veeam Backup & Replication server job entity. */
  _embedded?: EmbeddedForBackupServerJobChildren;
}

export interface BackupServerFileCopyJob {
  /**
   * UID assigned to a job.
   * @format uuid
   */
  instanceUid: string;

  /**
   * UID assigned to a target host.
   * @format uuid
   */
  targetHostUid?: string;

  /** Path to a location on a target repository where copied files reside. */
  targetPath?: string;

  /**
   * Size of a job source, in bytes.
   * @format int64
   */
  sourceSize?: number;

  /** Resource representation of the related Veeam Backup & Replication server job entity. */
  _embedded?: EmbeddedForBackupServerJobChildren;
}

export interface BackupServerVmCopyJob {
  /**
   * UID assigned to a job.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a target repository.
   * @format uuid
   */
  targetRepositoryUid?: string;

  /** Resource representation of the related Veeam Backup & Replication server job entity. */
  _embedded?: EmbeddedForBackupServerJobChildren;
}

export interface BackupServerBackupTapeJob {
  /**
   * UID assigned to a job.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a media pool for full backups.
   * @format uuid
   */
  fullMediaPoolUid?: string;

  /**
   * UID assigned to a media pool for full backups.
   * @format uuid
   */
  incrementalMediaPoolUid?: string;

  /** Indicates whether a job runs by GFS scheme. */
  isGfsEnabled?: boolean;

  /** Resource representation of the related Veeam Backup & Replication server job entity. */
  _embedded?: EmbeddedForBackupServerJobChildren;
}

export interface BackupServerJobLinkedJobObject {
  /**
   * UID assigned to a tape job.
   * @format uuid
   */
  jobUid?: string;

  /**
   * UID assigned to a backup job processed by a tape job.
   * @format uuid
   */
  linkedJobUid?: string;
}

export interface BackupServerJobLinkedRepositoryObject {
  /**
   * UID assigned to a tape job.
   * @format uuid
   */
  jobUid?: string;

  /**
   * UID assigned to a backup repository processed by a tape job.
   * @format uuid
   */
  linkedRepositoryUid?: string;
}

export interface BackupServerFileTapeJob {
  /**
   * UID assigned to a tape job.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a media pool for full backups.
   * @format uuid
   */
  fullMediaPoolUid?: string;

  /**
   * UID assigned to a media pool for increment backups.
   * @format uuid
   */
  incrementalMediaPoolUid?: string;

  /** Resource representation of the related Veeam Backup & Replication server job entity. */
  _embedded?: EmbeddedForBackupServerJobChildren;
}

export interface BackupServerBackupVmJob {
  /**
   * UID assigned to a backup job.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a target repository.
   * @format uuid
   */
  targetRepositoryUid?: string;

  /**
   * Number of VMs included in a job.
   * @format int32
   */
  protectedVmCount?: number;

  /** Resource representation of the related Veeam Backup & Replication server job entity. */
  _embedded?: EmbeddedForBackupServerJobChildren;
}

export interface BackupServerReplicationVmJob {
  /**
   * UID assigned to a replication job.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * Number of VMs included in a job.
   * @format int32
   */
  protectedVmCount?: number;

  /** Indicates whether VM replicas are created on a cloud host. */
  isCloudJob?: boolean;

  /**
   * UID assigned to a cloud host.
   * @format uuid
   */
  cloudHostUid?: string;

  /**
   * UID assigned to a target host for VM replicas.
   * @format uuid
   */
  targetHostUid?: string;

  /**
   * UID assigned to a source WAN accelerator.
   * @format uuid
   */
  sourceWanAcceleratorUid?: string;

  /**
   * UID assigned to a target WAN accelerator.
   * @format uuid
   */
  targetWanAcceleratorUid?: string;

  /** Indicates whether WAN acceleration is enabled. */
  throughWanAccelerators?: boolean;

  /** Resource representation of the related Veeam Backup & Replication server job entity. */
  _embedded?: EmbeddedForBackupServerJobChildren;
}

export interface BackupServerVmJobObject {
  /**
   * UID assigned to a job.
   * @format uuid
   */
  jobUid?: string;

  /**
   * UID assigned to a protected VM.
   * @format uuid
   */
  instanceUid?: string;

  /** Name of a VM. */
  name?: string;

  /** VM platform. */
  platform?: "Unknown" | "vSphere" | "HyperV" | "Vcd";

  /** Reference ID of a VM. */
  hierarchyRef?: string;

  /** Indicates whether the VM is excluded from a job. */
  isExcluded?: boolean;

  /** Information about the latest job session. */
  lastSession?: BackupServerJobObjectLastSession;
}

/**
 * @example {"instanceUid":"EDEB5975-B409-49B5-8ECE-FFFECB13494F","backupServerUid":"DF997BD3-4AE9-4841-8152-8FF5CC703EAB","name":"Organization XOrg"}
 */
export interface VcdServer {
  /**
   * UID assigned to a VMware Cloud Director server.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a Veeam Backup & Replication server.
   * @format uuid
   */
  backupServerUid?: string;

  /** Name of a VMware Cloud Director server. */
  name?: string;
}

/**
 * @example {"instanceUid":"EDEB5975-B409-49B5-8ECE-FFFECB13494F","name":"Organization XOrg","vcdServerUid":"F3E3815E-938F-482F-B3E5-2B7B5190932C"}
 */
export interface VcdOrganization {
  /**
   * UID assigned to a VMware Cloud Director organization.
   * @format uuid
   */
  instanceUid?: string;

  /** Name of a VMware Cloud Director organization. */
  name?: string;

  /**
   * UID assigned to a VMware Cloud Director server.
   * @format uuid
   */
  vcdServerUid?: string;

  /**
   * UID assigned to a site.
   * @format uuid
   */
  siteUid?: string;
}

export interface VcdOrganizationDataCenter {
  /**
   * UID assigned to an organization VDC.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a VMware Cloud Director organization.
   * @format uuid
   */
  vcdOrganizationUid?: string;

  /**
   * UID assigned to a VMware Cloud Director server.
   * @format uuid
   */
  vcdServerUid?: string;

  /**
   * UID assigned to a site.
   * @format uuid
   */
  siteUid?: string;

  /** Name of an organization VDC. */
  name?: string;
}

export interface VcdOrganizationUser {
  /** UID assigned to a VMware Cloud Director organization user. */
  instanceUid?: string;

  /**
   * UID assigned to a VMware Cloud Director organization.
   * @format uuid
   */
  vcdOrganizationUid?: string;

  /** Name of a VMware Cloud Director organization user. */
  name?: string;
}

export interface SubscriptionPlan {
  /**
   * UID assigned to a subscription plan.
   * @format uuid
   */
  instanceUid?: string;

  /** Name of a subscription plan. */
  name: string;

  /**
   * Name of an organization whose user created a subscription plan.
   * @format uuid
   */
  organizationUid?: string;

  /** Type of subscription plan. */
  type?: "Unknown" | "Predefined" | "Provider" | "Reseller";

  /** Description of a subscription plan. */
  description?: string;

  /** Currency chosen for a subscription plan. */
  currency: string;

  /** Tax type specified for a subscription plan. */
  taxType: "Unknown" | "VAT" | "GST" | "SalesTax";

  /**
   * Tax amount, in percent.
   * @format double
   * @min 0
   * @max 100
   */
  taxPercent: number;

  /**
   * Discount amount, in percent.
   * @format double
   * @min 0
   * @max 100
   */
  discountPercent: number;

  /** Charge rates for managed backup services. */
  managedBackup?: SubscriptionPlanManagedBackup;

  /** Charge rates for resources consumed by cloud VM replicas. */
  cloudReplication?: SubscriptionPlanCloudReplication;

  /** Charge rates for managed file share backup services. */
  fileShareBackup?: SubscriptionPlanFileShareBackup;

  /** Charge rates for storing backups in cloud repositories. */
  cloudBackup?: SubscriptionPlanCloudBackup;
}

export interface SubscriptionPlanManagedBackup {
  /**
   * Flat charge rate for provided services, per month.
   * @format double
   * @min 0
   * @max 1000000
   */
  managedServicePrice?: number;

  /**
   * Charge rate for a managed VM, per month.
   * @format double
   * @min 0
   * @max 1000000
   */
  managedVmPrice?: number;

  /**
   * Charge rate for a managed cloud VM, per month.
   * @format double
   * @min 0
   * @max 1000000
   */
  managedCloudVmPrice?: number;

  /**
   * Charge rate for a managed workstation agent, per month.
   * @format double
   * @min 0
   * @max 1000000
   */
  managedWorkstationPrice?: number;

  /**
   * Charge rate for a managed server agent, per month.
   * @format double
   * @min 0
   * @max 1000000
   */
  managedServerAgentPrice?: number;

  /**
   * Number of VMs that are managed for free.
   * @format int32
   * @min 0
   * @max 1000000
   */
  freeManagedVms?: number;

  /**
   * Number of cloud VMs that are managed for free.
   * @format int32
   * @min 0
   * @max 1000000
   */
  freeManagedCloudVms?: number;

  /**
   * Number of workstations that are managed for free.
   * @format int32
   * @min 0
   * @max 1000000
   */
  freeManagedWorkstations?: number;

  /**
   * Number of server agents that are managed for free.
   * @format int32
   * @min 0
   * @max 1000000
   */
  freeManagedServerAgents?: number;

  /**
   * Extra charge rate for Microsoft Windows servers.
   * @format double
   * @min 0
   * @max 1000000
   */
  windowsServerOsPrice?: number;

  /**
   * Extra charge rate for Microsoft Windows workstations.
   * @format double
   * @min 0
   * @max 1000000
   */
  windowsClientOsPrice?: number;

  /**
   * Extra charge rate for Linux computers.
   * @format double
   * @min 0
   * @max 1000000
   */
  linuxOsPrice?: number;

  /**
   * Extra charge rate for Mac OS computers.
   * @format double
   * @min 0
   * @max 1000000
   */
  macOsPrice?: number;
}

export interface SubscriptionPlanFileShareBackup {
  /**
   * Charge rate for one GB or TB of backup repository space consumed by file share backups.
   * @format double
   * @min 0
   * @max 1000000
   */
  fileShareBackupUsedSpacePrice?: number;

  /** Measurement units of backup repository space consumed by file share backups. */
  fileShareBackupUsedSpaceUnits?: "GB" | "TB";

  /**
   * Amount of backup repository space that can be consumed by file share backups for free.
   * @format int32
   * @min 0
   * @max 1000000
   */
  freeFileShareBackupUsedSpace?: number;

  /** Measurement units of backup repository space that can be consumed by file share backups for free. */
  freeFileShareBackupUsedSpaceUnits?: "GB" | "TB";

  /**
   * Charge rate for one GB or TB of archive repository space consumed by file share backups.
   * @format double
   * @min 0
   * @max 1000000
   */
  fileShareArchiveUsedSpacePrice?: number;

  /** Measurement units of archive repository space consumed by file share backups. */
  fileShareArchiveUsedSpaceUnits?: "GB" | "TB";

  /**
   * Amount of archive repository space that can be consumed by file share backups for free.
   * @format int32
   * @min 0
   * @max 1000000
   */
  freeFileShareArchiveUsedSpace?: number;

  /** Measurement units of archive repository space that can be consumed by file share backups for free. */
  freeFileShareArchiveUsedSpaceUnits?: "GB" | "TB";

  /**
   * Charge rate for one GB or TB of source data.
   * @format double
   * @min 0
   * @max 1000000
   */
  sourceAmountOfDataPrice?: number;

  /** Measurement units of source data. */
  sourceAmountOfDataUnits?: "GB" | "TB";

  /**
   * Amount of source data that is processed for free.
   * @format int32
   * @min 0
   * @max 1000000
   */
  freeSourceAmountOfData?: number;

  /** Measurement units of source data that is processed for free. */
  freeSourceAmountOfDataUnits?: "GB" | "TB";
}

export interface SubscriptionPlanCloudReplication {
  /**
   * Charge rate for one VM replica registered on a cloud host, per month.
   * @format double
   * @min 0
   * @max 1000000
   */
  replicatedVmPrice?: number;

  /**
   * Charge rate for one GB or TB of cloud storage space consumed by VM replica files.
   * @format double
   * @min 0
   * @max 1000000
   */
  cloudStorageConsumedSpacePrice?: number;

  /** Measurement units of cloud storage space consumed by VM replica files. */
  cloudStorageConsumedSpaceUnits?: "GB" | "TB";

  /**
   * Amount of cloud storage space that can be consumed by VM replicas for free.
   * @format int32
   * @min 0
   * @max 1000000
   */
  freeCloudStorageConsumedSpace?: number;

  /** Measurement units of cloud storage space that can be consumed by VM replicas for free. */
  freeCloudStorageConsumedSpaceUnits?: "GB" | "TB";

  /**
   * Charge rate for a CPU and memory resources usage by a VM on a cloud host.
   * @format double
   * @min 0
   * @max 1000000
   */
  computeResourcesPrice?: number;

  /** Measurement units of time period of CPU and memory resources usage by a VM on a cloud host */
  computeResourcesUnits?: "Minutes" | "Hours" | "Days" | "Weeks" | "Months";

  /**
   * Amount of time during which VM replicas can consume compute resources on a cloud host for free.
   * @format int64
   * @min 0
   * @max 9999
   */
  freeComputeResources?: number;

  /** Measurement units of time during which VM replicas can consume compute resources on a cloud host for free. */
  freeComputeResourcesUnits?: "Minutes" | "Hours" | "Days" | "Weeks" | "Months";

  /**
   * Charge rate for one GB or TB of VM replica data downloaded from cloud storage.
   * @format double
   * @min 0
   * @max 1000000
   */
  replicationDataTransferOutPrice?: number;

  /** Measurement units of VM replica data downloaded from cloud storage. */
  replicationDataTransferOutUnits?: "GB" | "TB";
}

export interface SubscriptionPlanCloudBackup {
  /**
   * Charge rate for storing one VM in backup on a cloud repository, per month.
   * @format double
   * @min 0
   * @max 1000000
   */
  vmCloudBackupsPrice?: number;

  /**
   * Charge rate for storing backup data of one server computer on a cloud repository, per month.
   * @format double
   * @min 0
   * @max 1000000
   */
  serverCloudBackupsPrice?: number;

  /**
   * Charge rate for storing backup data for one workstation computer on a cloud repository, per month.
   * @format double
   * @min 0
   * @max 1000000
   */
  workstationCloudBackupsPrice?: number;

  /** Type of charge rate for storage space on a cloud repository. */
  cloudRepositorySpaceUsageAlgorithm?: "Allocated" | "Consumed" | "Granular";

  /**
   * Charge rate for one GB or TB of allocated storage space on a cloud repository.
   * @format double
   * @min 0
   * @max 1000000
   */
  cloudRepositoryAllocatedSpacePrice?: number;

  /** Measurement units of allocated storage space on a cloud repository. */
  cloudRepositoryAllocatedSpaceUnits?: "GB" | "TB";

  /**
   * Charge rate for one GB or TB of consumed storage space on a cloud repository.
   * @format double
   * @min 0
   * @max 1000000
   */
  cloudRepositoryConsumedSpacePrice?: number;

  /** Measurement units of consumed storage space on a cloud repository. */
  cloudRepositoryConsumedSpaceUnits?: "GB" | "TB";

  /**
   * Amount of storage space that can be consumed by backup files for free.
   * @format int32
   * @min 0
   * @max 2096128
   */
  freeCloudRepositoryConsumedSpace?: number;

  /** Measurement units of storage space that can be consumed by backup files for free. */
  freeCloudRepositoryConsumedSpaceUnits?: "GB" | "TB";

  /**
   * Charge rate for one GB or TB of data downloaded from a cloud repository
   * @format double
   * @min 0
   * @max 1000000
   */
  backupDataTransferOutPrice?: number;

  /** Measurement units of data downloaded from a cloud repository. */
  backupDataTransferOutUnits?: "GB" | "TB";

  /**
   * Charge rate for cloud repository space that is consumed by deleted backup files.
   * @format double
   * @min 0
   * @max 1000000
   */
  insiderProtectionUsedSpacePrice?: number;

  /** Measurement units for cloud repository space that is consumed by deleted backup files. */
  insiderProtectionUsedSpaceUnits?: "GB" | "TB";

  /**
   * Charge rate for one GB or TB of consumed performance tier space.
   * @format double
   * @min 0
   * @max 1000000
   */
  performanceTierUsedSpacePrice?: number;

  /** Measurement units of consumed performance tier space. */
  performanceTierUsedSpaceUnits?: "GB" | "TB";

  /**
   * Charge rate for one GB or TB of consumed capacity tier space.
   * @format double
   * @min 0
   * @max 1000000
   */
  capacityTierUsedSpacePrice?: number;

  /** Measurement units of consumed capacity tier space. */
  capacityTierUsedSpaceUnits?: "GB" | "TB";

  /**
   * Charge rate for one GB or TB of consumed archive tier space.
   * @format double
   * @min 0
   * @max 1000000
   */
  archiveTierUsedSpacePrice?: number;

  /** Measurement units of consumed archive tier space. */
  archiveTierUsedSpaceUnits?: "GB" | "TB";
}

/**
 * @example {"name":"Pittsburgh subscription plan","description":"Subscription plan for Pittsburgh clients","currency":"USD","taxType":"VAT","taxPercent":10,"discountPercent":12,"managedBackup":{"managedServicePrice":21,"managedVmPrice":2,"managedCloudVmPrice":0,"managedWorkstationPrice":4,"managedServerAgentPrice":3,"freeManagedVms":0,"freeManagedCloudVms":0,"freeManagedWorkstations":0,"freeManagedServerAgents":0,"windowsServerOsPrice":0,"windowsClientOsPrice":0,"linuxOsPrice":0,"macOsPrice":0},"cloudReplication":{"replicatedVmPrice":10,"cloudStorageConsumedSpacePrice":10,"cloudStorageConsumedSpaceUnits":"TB","freeCloudStorageConsumedSpace":null,"freeCloudStorageConsumedSpaceUnits":"GB","computeResourcesPrice":0,"computeResourcesUnits":"Hours","freeComputeResources":1,"freeComputeResourcesUnits":"Hours","replicationDataTransferOutPrice":0,"replicationDataTransferOutUnits":"GB"},"fileShareBackup":{"fileShareBackupUsedSpacePrice":0,"fileShareBackupUsedSpaceUnits":"GB","freeFileShareBackupUsedSpace":null,"freeFileShareBackupUsedSpaceUnits":"GB","fileShareArchiveUsedSpacePrice":0,"fileShareArchiveUsedSpaceUnits":"GB","freeFileShareArchiveUsedSpace":null,"freeFileShareArchiveUsedSpaceUnits":"GB","sourceAmountOfDataPrice":0,"sourceAmountOfDataUnits":"GB","freeSourceAmountOfData":null,"freeSourceAmountOfDataUnits":"GB"},"cloudBackup":{"vmCloudBackupsPrice":5,"serverCloudBackupsPrice":6,"workstationCloudBackupsPrice":7,"cloudRepositorySpaceUsageAlgorithm":"Consumed","cloudRepositoryAllocatedSpacePrice":0,"cloudRepositoryAllocatedSpaceUnits":"GB","cloudRepositoryConsumedSpacePrice":15,"cloudRepositoryConsumedSpaceUnits":"TB","freeCloudRepositoryConsumedSpace":null,"freeCloudRepositoryConsumedSpaceUnits":"GB","backupDataTransferOutPrice":8,"backupDataTransferOutUnits":"GB","insiderProtectionUsedSpacePrice":0,"insiderProtectionUsedSpaceUnits":"GB","performanceTierUsedSpacePrice":0,"performanceTierUsedSpaceUnits":"GB","capacityTierUsedSpacePrice":0,"capacityTierUsedSpaceUnits":"GB","archiveTierUsedSpacePrice":0,"archiveTierUsedSpaceUnits":"GB"}}
 */
export interface SubscriptionPlanInput {
  /** Name of a subscription plan. */
  name: string;

  /** Description of a subscription plan. */
  description?: string;

  /** Currency chosen for a subscription plan. */
  currency: string;

  /** Tax type specified for a subscription plan. */
  taxType: "Unknown" | "VAT" | "GST" | "SalesTax";

  /**
   * Tax amount, in percent.
   * @format double
   * @min 0
   * @max 100
   */
  taxPercent: number;

  /**
   * Discount amount, in percent.
   * @format double
   * @min 0
   * @max 100
   */
  discountPercent: number;

  /** Charge rates for managed backup services. */
  managedBackup?: SubscriptionPlanManagedBackup;

  /** Charge rates for resources consumed by cloud VM replicas. */
  cloudReplication?: SubscriptionPlanCloudReplication;

  /** Charge rates for managed file share backup services. */
  fileShareBackup?: SubscriptionPlanFileShareBackup;

  /** Charge rates for storing backups in cloud repositories. */
  cloudBackup?: SubscriptionPlanCloudBackup;
}

export interface Certificate {
  /** Subject of a certificate. */
  issuedTo: string;

  /** Certificate issuer. */
  issuedBy: string;

  /** Certificate friendly name. */
  friendlyName: string;

  /** Thumbprint. */
  thumbprint: string;

  /** Certificate serial number. */
  serialNumber: string;

  /**
   * Certificate expiration date.
   * @format date-time
   */
  expirationDate: string;
}

/**
 * @example {"thumbprint":"EC697A8832C338BA1693BAB1D51F4F18110625DF"}
 */
export interface InstallCertificate {
  /** Certificate thumbprint in the Certificate Store. */
  thumbprint: string;
}

/**
 * @example {"backupServerUid":"DF997BD3-4AE9-4841-8152-8FF5CC703EAB","autoupdateEnabled":false,"contactPerson":"John Smith","edition":"Enterprise Plus","company":"Veeam","email":"John.Smith@veeam.com","units":1000,"unitType":"Instances","usedUnits":100,"status":"Valid","cloudConnect":"Yes","autoUpdateEnabled":true,"packages":["Suite"],"type":"Rental","supportIds":["987412365"],"licenseIds":["514c45eb-9543-4799-8003-1e59385b774c"],"expirationDate":"2018-10-24T14:00:00.0000000-07:00","supportExpirationDate":"2018-10-24T14:00:00.0000000-07:00"}
 */
export interface BackupServerLicense {
  /**
   * UID assigned to a backup server.
   * @format uuid
   */
  backupServerUid?: string;

  /** Indicates whether license updates automatically. */
  autoUpdateEnabled: boolean;

  /** License edition. */
  edition?: string;

  /** Monitoring status. */
  monitoring?: boolean;

  /** Product packages. */
  packages?: ("Unknown" | "None" | "Starter" | "Essentials" | "Backup" | "ONE" | "Suite" | "Orchestrator")[];

  /** Name of an organization to which a licensed server belongs. */
  company?: string;

  /** Email address of an organization to which a licensed server belongs. */
  email?: string;

  /** [Legacy] Name of a contact person in an organization to which the license is issued. */
  contactPerson?: string;

  /**
   * License expiration date and time.
   * @format date-time
   */
  expirationDate?: string;

  /**
   * Support expiration date and time.
   * @format date-time
   */
  supportExpirationDate?: string;

  /** License IDs. */
  licenseIds?: string[];

  /** License IDs required to contact Veeam Support. */
  supportIds?: string[];

  /** Type of licensed units. */
  sectionTypes?: ("Unknown" | "Socket" | "Instance" | "All")[];

  /** Current status of the license. */
  status?: "Unknown" | "Valid" | "Warning" | "Error" | "Expired" | "Unlicensed";

  /** Indicates whether Veeam Cloud Connect is included in a license. */
  cloudConnect?: "Unknown" | "No" | "Yes" | "Enterprise";

  /**
   * Number of licensed sockets.
   * @format double
   */
  sockets?: number;

  /**
   * Number of used sockets.
   * @format double
   */
  usedSockets?: number;

  /**
   * Available protected capacity for NAS backup.
   * @format double
   */
  capacity?: number;

  /**
   * Consumed capacity for NAS backup.
   * @format double
   */
  usedCapacity?: number;

  /**
   * Number of available license units.
   * @format double
   */
  units?: number;

  /**
   * Number of used license units.
   * @format double
   */
  usedUnits?: number;

  /** Type of license units. */
  unitType?: "Unknown" | "Instances" | "Points";

  /** Type of the license. */
  type?: "Unknown" | "NotInstalled" | "Community" | "Rental" | "Subscription" | "Evaluation" | "NFR" | "Perpetual";
}

/**
 * @example {"siteUid":"DF997BD3-4AE9-4841-8152-8FF5CC703EAB","autoupdateEnabled":false,"contactPerson":"John Smith","edition":"Enterprise Plus","company":"Veeam","email":"John.Smith@veeam.com","units":1000,"unitType":"Instances","usedUnits":100,"status":"Valid","cloudConnect":"Yes","autoUpdateEnabled":true,"packages":["Suite"],"type":"Rental","supportIds":["987412365"],"licenseIds":["514c45eb-9543-4799-8003-1e59385b774c"],"expirationDate":"2018-10-24T14:00:00.0000000-07:00","supportExpirationDate":"2018-10-24T14:00:00.0000000-07:00"}
 */
export interface SiteLicense {
  /**
   * UID assigned to a site.
   * @format uuid
   */
  siteUid?: string;

  /** Indicates whether a license updates automatically. */
  autoUpdateEnabled: boolean;

  /** License edition. */
  edition?: string;

  /** Indicates if monitoring is enabled for a Veeam Cloud Connect server. */
  monitoring?: boolean;

  /** Product packages. */
  packages?: ("Unknown" | "None" | "Starter" | "Essentials" | "Backup" | "ONE" | "Suite" | "Orchestrator")[];

  /** Name of an organization to which a licensed server belongs. */
  company?: string;

  /** Email address of an organization to which a licensed server belongs. */
  email?: string;

  /** [Legacy] Name of a contact person in an organization to which a license is issued. */
  contactPerson?: string;

  /**
   * License expiration date and time.
   * @format date-time
   */
  expirationDate?: string;

  /**
   * Support expiration date and time.
   * @format date-time
   */
  supportExpirationDate?: string;

  /** License IDs. */
  licenseIds?: string[];

  /** License IDs required to contact Veeam Support. */
  supportIds?: string[];

  /** Types of licensed units. */
  sectionTypes?: ("Unknown" | "Socket" | "Instance" | "All")[];

  /** Current status of a license. */
  status?: "Unknown" | "Valid" | "Warning" | "Error" | "Expired";

  /** Indicates whether a license includes Veeam Cloud Connect. */
  cloudConnect?: "Unknown" | "No" | "Yes" | "Enterprise";

  /**
   * Number of available license units.
   * @format double
   */
  units?: number;

  /**
   * Number of used license units.
   * @format double
   */
  usedUnits?: number;

  /** Type of license units. */
  unitType?: "Unknown" | "Instances" | "Points";

  /** Type of a license. */
  type?: "Unknown" | "NotInstalled" | "Community" | "Rental" | "Subscription" | "Evaluation" | "NFR" | "Perpetual";
}

/**
 * @example {"licenseId":"514c45eb-9543-4799-8003-1e59385b774c","contactPerson":"John Smith","edition":"Enterprise Plus","package":"Suite","licenseeCompany":"Veeam","licenseeEmail":"John.Smith@veeam.com","licenseeAdministratorEmail":"Adam.Jang@veeam.com","instances":1000,"status":"Valid","type":"Rental","cloudConnect":"Yes","supportId":"987412365","expirationDate":"2018-10-24T14:00:00.0000000-07:00","supportExpirationDate":"2018-10-24T14:00:00.0000000-07:00","lastUpdateDate":"2019-10-24T14:00:00.0000000-07:00","lastUpdateMessage":"","lastUpdateState":"Unknown"}
 */
export interface ConsoleLicense {
  /** License ID. */
  licenseId?: string;

  /** License edition. */
  edition?: string;

  /** Product packages. */
  package?: "Unknown" | "None" | "Starter" | "Essentials" | "Backup" | "ONE" | "Suite" | "Orchestrator";

  /** Name of an organization to which a license is issued. */
  licenseeCompany?: string;

  /** Email address of a contact person in an organization. */
  licenseeEmail?: string;

  /** Email address of a license administrator in a company. */
  licenseeAdministratorEmail?: string;

  /** [Legacy] Name of a contact person in an organization to which the license is issued. */
  contactPerson?: string;

  /**
   * License expiration date and time.
   * @format date-time
   */
  expirationDate?: string;

  /**
   * Support expiration date and time.
   * @format date-time
   */
  supportExpirationDate?: string;

  /** Support ID required for contacting Veeam Support. */
  supportId?: string;

  /** Current status of the license. */
  status?: "Unknown" | "Valid" | "Warning" | "Error" | "Expired";

  /** Description of a license status. */
  statusMessage?: string;

  /** Indicates whether a license includes Veeam Cloud Connect. */
  cloudConnect?: "Unknown" | "No" | "Yes" | "Enterprise";

  /**
   * Total number of available instances.
   * @format double
   */
  instances?: number;

  /** Type of a license. */
  type?: "Unknown" | "NotInstalled" | "Community" | "Rental" | "Subscription" | "Evaluation" | "NFR" | "Perpetual";

  /**
   * Date and time when license was last updated.
   * @format date-time
   */
  lastUpdateDate?: string;

  /** Message to the last license update. */
  lastUpdateMessage?: string;

  /** Status of the last license update. */
  lastUpdateStatus?: "Unknown" | "Success" | "Warning" | "Error";
}

export interface ConsoleLicenseUsage {
  /** License unit type. */
  unitType?: "Unknown" | "Instances" | "Points";

  /**
   * Number of units that have licenses assigned and are fully managed by Veeam Service Provider Console.
   * @format double
   */
  usedUnits?: number;

  /**
   * Number of objects that have licenses assigned and are fully managed by Veeam Service Provider Console.
   * @format int
   */
  usedCount?: number;

  /**
   * Number of units that were activated within the current calendar month.
   * @format double
   */
  newUnits?: number;

  /**
   * Number of objects that were activated within the current calendar month.
   * @format int
   */
  newCount?: number;

  /**
   * Total number of available license units.
   * @format double
   */
  licensedUnits?: number;

  /** Counters for each type of licensed objects. */
  counters?: ConsoleLicenseSummaryCounter[];
}

/**
 * @example {"instanceUid":"D80427DD-3F62-4AF3-A206-98ABC24C87E5","organizationUid":"A41427DD-3F62-4AF3-A206-98ABC24C87E5","name":"Backup Policy X","configId":"CC221975-B409-49B5-8ECE-FFFECB13494F","description":"Backup Policy X","mode":"Server","operationMode":"Server","type":"Provider","accessMode":"Public"}
 */
export interface BackupPolicy {
  /**
   * UID assigned to a backup policy.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to an organization to whose agents a backup policy is assigned.
   * @format uuid
   */
  organizationUid?: string;

  /** Backup policy name. Pattern is '^[^$()%]+$' for Windows policy and '^[^~"#%&*:<>?/\\{|}.'`]+$' for Linux and Mac policies. */
  name: string;

  /** Backup policy description. */
  description?: string;

  /**
   * System ID assigned to a backup policy configuration.
   * @format uuid
   */
  configId?: string;

  /** Backup job operation mode. */
  operationMode: BackupJobOperationMode;

  /**
   * Backup job operation mode.
   * > Property is deprecated. We recommend to use the `operationMode` property.
   *
   */
  mode?: "Unknown" | "Workstation" | "Server";

  /** Backup policy type. */
  type?: "Unknown" | "Predefined" | "Provider" | "Reseller" | "Client";

  /** Backup policy access mode. */
  accessMode: BackupPolicyAccessMode;

  /** Type of guest OS on a managed computer. */
  systemType?: "Unknown" | "Windows" | "Linux" | "Mac";

  /** Name of a company, reseller or service provider that created a backup policy. */
  createdBy?: string;

  /**
   * Date and time when settings of a backup policy were last modified.
   * @format date-time
   */
  modifiedDate?: string;

  /**
   * Number of companies to whose Veeam backup agents a policy is assigned.
   * @format int32
   */
  companiesCount?: number;
}

/**
 * Backup job operation mode.
 */
export enum BackupJobOperationMode {
  Unknown = "Unknown",
  Workstation = "Workstation",
  Server = "Server",
}

/**
 * Backup policy access mode.
 */
export enum BackupPolicyAccessMode {
  Private = "Private",
  Public = "Public",
}

export interface BackupPolicyToAssign {
  /**
   * UID assigned to an organization to whose agents a backup policy is assigned.
   * @format uuid
   */
  companyUid?: string;

  /** Array of backup policies available to assign. */
  backupPolicies?: BackupPolicy[];
}

/**
 * @example {"name":"ServerEntireCloud_Custom","description":"Job configuration for Windows computers.","operationMode":"Server","cloudRepositoryConnectionSettings":{"backupResourceUid":"5b03d390-813f-40bc-886b-011de50b65d7","username":"alpha\\administrator","password":"Password1"},"jobConfiguration":{"backupSource":{"backupMode":"EntireComputer","computerLevelOptions":{"includeUsbDrives":true},"volumeLevelOptions":null,"fileLevelOptions":null},"backupTarget":{"targetType":"CloudRepository","localPath":null,"sharedFolder":null,"backupRepository":null,"cloudRepository":{"backupCacheSettings":{"location":"C:\\string\\","maximumSizeGb":1}}},"serverModeSettings":{"retentionSettings":{"retentionMode":"RestorePoints","retentionCount":7},"scheduleSetting":{"scheduleType":"Daily","dailyScheduleSettings":{"time":"00:30","dailyMode":"Everyday","specificDays":null},"monthlyScheduleSettings":null,"periodicalScheduleSettings":null,"continuousScheduleSettings":{"backupWindowSettings":{"scheduleWindow":null,"shiftForMinutes":0}},"retrySettings":{"enabled":true,"retryTimes":3,"waitTimeoutMinutes":10},"backupWindow":null},"indexingSettings":null,"applicationAwareProcessingSettings":{"enabled":false,"transactionLogProcessingMode":"ProcessTransactionLogsWithJob","sqlServerTransactionLogHandlingSettings":null,"oracleTransactionLogHandlingSettings":null,"sharePointAccountSettings":null,"scriptSettings":null}},"workstationModeSettings":{"scheduleSetting":{"periodicalScheduleEnabled":true,"periodicalScheduleSettings":{"dailyScheduleSettings":{"time":"00:30","dailyMode":"Everyday","specificDays":null},"shutdownAction":"SkipBackup","finalizingAction":"KeepRunning"},"eventTriggerSettings":{"backupOnLock":false,"backupOnLogOff":false,"backupOnTargetConnection":false,"ejectTargetOnBackupComplete":false,"backupNotOften":2,"notOftenTimeUnit":"Hours"}},"retentionSettings":{"retentionDays":7}},"advancedSettings":{"backupStorage":{"compressionLevel":"Optimal","storageOptimization":"Local","encryptionEnabled":false,"password":null,"passwordHint":null},"scheduleSettings":null,"maintenanceSettings":null},"gfsRetentionSettings":null}}
 */
export interface WindowsCustomJobConfiguration {
  /**
   * Job name.
   * @pattern ^[^$()%]+$
   */
  name: string;

  /** Job description. */
  description?: string;

  /** Backup job operation mode. */
  operationMode: BackupJobOperationMode;

  /** Settings required to connect a cloud repository that is used as a target location for backups. */
  cloudRepositoryConnectionSettings?: CloudRepositoryConnectionSettings;

  /** Job configuration. */
  jobConfiguration: WindowsBackupJobConfiguration;
}

/**
 * Settings required to connect a cloud repository that is used as a target location for backups.
 */
export interface CloudRepositoryConnectionSettings {
  /**
   * UID assigned to a cloud repository.'
   * @format uuid
   */
  backupResourceUid: string;

  /** User name. */
  username: string;

  /**
   * Password.
   * @format password
   */
  password?: string;
}

/**
 * @example {"name":"WindowSchedule","description":null,"operationMode":"Server","accessMode":"Private","createSubtenants":true,"createSubFolders":false,"unlimitedSubtenantQuota":false,"repositoryQuotaGb":1,"jobConfiguration":{"backupSource":{"backupMode":"FilesFolders","computerLevelOptions":null,"volumeLevelOptions":null,"fileLevelOptions":{"directories":["E:\\Archive"],"inclusionMasks":null,"exclusionMasks":null,"osfilesIncluded":true,"excludeOneDriveFolders":true,"personalFilesIncluded":true,"personalFilesAdvancedSettings":{"mode":"Granular","inclusions":["Desktop"],"exclusions":["RoamingUsers"]}}},"backupTarget":{"targetType":"SharedFolder","localPath":null,"sharedFolder":{"path":"\\\\az-cl01-vbr\\AZShareSMB01","credentials":{"username":"administrator","password":"Password1"},"backupCacheSettings":null},"backupRepository":null,"cloudRepository":null},"serverModeSettings":{"retentionSettings":{"retentionMode":"Days","retentionCount":1},"scheduleSetting":{"scheduleType":"Continuously","dailyScheduleSettings":null,"monthlyScheduleSettings":null,"periodicalScheduleSettings":null,"continuousScheduleSettings":{"backupWindowSettings":{"scheduleWindow":[{"day":"Sunday","hours":[0,1,2,3,4,5,6,22,23]}],"shiftForMinutes":30}},"retrySettings":{"enabled":true,"retryTimes":3,"waitTimeoutMinutes":1},"backupWindow":[{"day":"Tuesday","hours":[0,1,2,3,4,5,6,22,23]}]},"indexingSettings":null,"applicationAwareProcessingSettings":{"enabled":true,"transactionLogProcessingMode":"ProcessTransactionLogsWithJob","sqlServerTransactionLogHandlingSettings":{"credentials":{"username":"admin","password":null},"logsProcessingMode":"TruncateLogs","periodicallyBackupSetting":null},"oracleTransactionLogHandlingSettings":{"credentials":{"accountType":"Oracle","username":"orladmin","password":"Password1"},"archivedLogsRetentionMode":"DeleteLogsOlderThanHours","backupLifeTimeHours":60,"backupSizeThresholdGb":10,"backupLogsPeriodically":true,"periodicallyBackupSetting":{"backupLogsEveryMin":480,"backupRetentionMode":"KeepLastDays","keepBackupsOnlyLastDays":60}},"sharePointAccountSettings":null,"scriptSettings":{"mode":"IgnoreErrors","preFreezeScript":{"fileName":"Script1.bat","content":"bWQgYzpcc3lzdGVtXHRlc3Rfc2NyaXB0"},"postThawScript":{"fileName":"Script2.exe","content":"aGpnYmFramJuIHp6a2puYWYsdmJqZWlqa2psMTIzNDI0NXJ0Z252bWJuIGFqa2tMTURWYy4u"},"credentials":{"username":"sptadmin","password":"P@ssw0rd"}}}},"workstationModeSettings":null,"advancedSettings":{"backupStorage":{"compressionLevel":"Dedupe","storageOptimization":"Lan","encryptionEnabled":true,"password":"P@ssw0rd","passwordHint":"@0"},"scheduleSettings":null,"maintenanceSettings":{"backupHealthCheckSettings":null,"fullBackupFileMaintenanceSettings":{"enableDeletedFilesRetention":true,"removeDeletedItemsDataAfter":30,"defragmentAndCompactFullBackupFileSettings":null}}},"gfsRetentionSettings":null}}
 */
export interface WindowsBackupPolicyInput {
  /**
   * Backup policy name.
   * @pattern ^[^$()%]+$
   */
  name: string;

  /** Backup policy description. */
  description?: string;

  /** Backup job operation mode. */
  operationMode: BackupJobOperationMode;

  /** Backup policy access mode. */
  accessMode: BackupPolicyAccessMode;

  /**
   * Defines whether a subtenant must be created for each Veeam Agent for Microsoft Windows.
   * > Available if a cloud repository is selected as backup destination.
   *
   */
  createSubtenants?: boolean;

  /**
   * Defines whether a subfolder must be created for each Veeam Agent for Microsoft Windows on the shared folder.
   * > Available if a shared folder is selected as backup destination.
   *
   */
  createSubFolders?: boolean;

  /**
   * Defines whether a subtenant can consume unlimited amount of space on a repository.
   * > Available if a cloud repository is selected as backup destination.
   *
   */
  unlimitedSubtenantQuota?: boolean;

  /**
   * Maximum amount of space that a subtenant can consume on a repository.
   * > If a subtenant can consume unlimited amount of space, the value of this property is ignored. <br>
   * > Available if a cloud repository is selected as backup destination.
   *
   * @format int32
   */
  repositoryQuotaGb?: number;

  /** Job configuration. */
  jobConfiguration: WindowsBackupJobConfiguration;
}

export interface WindowsBackupPolicy {
  /**
   * UID assigned to a backup policy template.
   * @format uuid
   */
  instanceUid?: string;

  /** Indicates whether a subtenant must be created for each Veeam Agent for Microsoft Windows. */
  createSubtenants?: boolean;

  /** Indicates whether a subfolder must be created for each Veeam backup agent on the shared folder. */
  createSubFolders?: boolean;

  /** Indicates whether a subtenant can consume unlimited amount of space on a repository. */
  unlimitedSubtenantQuota?: boolean;

  /**
   * Maximum amount of space that a subtenant can consume on a repository.
   * > If a subtenant can consume unlimited amount of space, the value of this property is ignored.
   *
   * @format int32
   */
  repositoryQuotaGb?: number;

  /** Backup job operation mode. */
  operationMode: BackupJobOperationMode;

  /** Job configuration. */
  jobConfiguration: WindowsBackupJobConfiguration;
}

export interface WindowsBackupJobConfiguration {
  /** Data included in the backup scope. */
  backupSource: WindowsBackupSource;

  /** Location of the backup files. */
  backupTarget: WindowsBackupTarget;

  /** Settings required for the Server operation mode. */
  serverModeSettings?: WindowsServerModeJobSettings;

  /** Settings required for the Workstation operation mode. */
  workstationModeSettings?: WindowsWorkstationModeJobSettings;

  /** Advanced job settings. */
  advancedSettings?: WindowsAdvancedJobSettings;

  /**
   * GFS retention policy settings for the backup job.
   * > The null value indicates that GFS retention is disabled. <br>
   * > Available only to Veeam Agent for Microsoft Windows starting from version 5.0.'
   *
   */
  gfsRetentionSettings?: WindowsGfsRetentionSettings;
}

export interface WindowsAdvancedJobSettings {
  /** Storage settings for a backup jobs. */
  backupStorage?: WindowsBackupStorage;

  /** Scheduling settings for a backup chain created with a backup job. */
  scheduleSettings?: WindowsAdvancedScheduleSettings;

  /** Maintenance settings for a backup chain created with the backup job. */
  maintenanceSettings?: WindowsMaintenanceJobSettings;
}

export interface WindowsMaintenanceJobSettings {
  /**
   * Scheduling settings for periodic health checks of the latest restore points.
   * > The `null` value indicates that health checks are disabled.
   *
   */
  backupHealthCheckSettings?: MonthlyOrWeeklyScheduleSettings;

  /**
   * Full backup file maintenance settings
   * > The `null` value indicates that maintenance of full backup files is disabled.
   *
   */
  fullBackupFileMaintenanceSettings?: WindowsFullBackupFileMaintenanceSettings;
}

export interface WindowsFullBackupFileMaintenanceSettings {
  /** [For Veeam backup repository and cloud repository targets] Defines whether the deleted backup files must be removed after a specific time period. */
  enableDeletedFilesRetention?: boolean;

  /**
   * [For Veeam backup repository and cloud repository targets] Number of days for which the deleted backup files are stored.
   * @format int32
   * @min 1
   * @max 999
   */
  removeDeletedItemsDataAfter?: number;

  /**
   * Settings for periodic compacting of full backup files
   * > The `null` value indicates that compacting is disabled.
   *
   */
  defragmentAndCompactFullBackupFileSettings?: MonthlyOrWeeklyScheduleSettings;
}

export interface WindowsAdvancedScheduleSettings {
  /**
   * Week days on which creation of synthetic full backups is scheduled
   * > The `null` value indicates that periodic creation of synthetic full backups is disabled.
   *
   */
  syntheticFullOnDays?: ("Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday")[];

  /**
   * Scheduling settings for periodically created active full backups.
   * > The `null` value indicates that periodic creation of active full backups is disabled.
   *
   */
  activeFullSettings?: MonthlyOrWeeklyScheduleWithDaySettings;
}

export interface MonthlyOrWeeklyScheduleSettings {
  /**
   * Scheduling settings for monthly full backup creation.
   * > If the `weeklyOnDays` property is also provided, monthly schedule is ignored.'
   *
   */
  monthlySettings?: WindowsMonthlyScheduleCalendarSettings;

  /**
   * Scheduling settings for weekly full backup creation.
   * > If the `monthlySettings` property is also provided, it is ignored.
   *
   */
  weeklyOnDays?: ("Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday")[];
}

export interface MonthlyOrWeeklyScheduleWithDaySettings {
  /**
   * Scheduling settings for monthly full backup creation.
   * > If the `weeklyOnDays` property is also provided, monthly schedule is ignored.
   *
   */
  monthlySettings?: WindowsMonthlyScheduleCalendarWithDaySettings;

  /**
   * Scheduling settings for weekly full backup creation.
   * > If the `monthlySettings` property is also provided, it is ignored.
   *
   */
  weeklyOnDays?: ("Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday")[];
}

export interface WindowsServerJobScheduleSettings {
  /** Type of periodicity. */
  scheduleType?: "NotScheduled" | "Daily" | "Monthly" | "Periodically" | "Continuously";

  /** Scheduling settings required for a daily running job. */
  dailyScheduleSettings?: WindowsDailyScheduleSettings;

  /** Scheduling settings required for a monthly running job. */
  monthlyScheduleSettings?: WindowsMonthlyScheduleSettings;

  /** Scheduling settings required to run a job repeatedly throughout a day. */
  periodicalScheduleSettings?: WindowsPeriodicalScheduleSettings;

  /**
   * Scheduling settings for a continuously running job.
   * > The `null` value indicates that a job can be run at any time.
   *
   */
  continuousScheduleSettings?: WindowsContinuousScheduleSettings;

  /** Automatic retry settings. */
  retrySettings?: WindowsServerJobRetrySettings;

  /**
   * Time interval within which a job must complete.
   * > The `null` value indicates that a job can be run at any time.
   *
   */
  backupWindow?: JobScheduleWindowDay[];
}

export interface WindowsServerJobRetrySettings {
  /** Indicates whether Veeam Agent for Microsoft Windows must attempt to run the backup job again if the job fails. */
  enabled?: boolean;

  /**
   * Number of attempts to run a job.
   * @format int32
   * @min 1
   * @max 777
   */
  retryTimes?: number;

  /**
   * Time interval between attempts to run a job.
   * @format int32
   * @min 1
   * @max 999
   */
  waitTimeoutMinutes?: number;
}

export interface WindowsContinuousScheduleSettings {
  /** Permitted time window for a continuously running job. */
  backupWindowSettings?: WindowsPeriodicallyScheduleWindowSettings;
}

export interface WindowsPeriodicalScheduleSettings {
  /**
   * Time interval for a periodically running job, in minutes.
   * @min 1
   * @max 1440
   */
  intervalInMinutes: number;

  /** Permitted time window for a periodically running job. */
  backupWindowSettings?: WindowsPeriodicallyScheduleWindowSettings;
}

export interface WindowsPeriodicallyScheduleWindowSettings {
  /**
   * Permitted time window for a job.
   * > By default includes all days and all hours.
   *
   */
  scheduleWindow?: JobScheduleWindowDay[];

  /**
   * Exact time of the job start within an hour, in minutes.
   * @format int32
   * @min 0
   * @max 59
   */
  shiftForMinutes?: number;
}

export interface JobScheduleWindowDay {
  /** Days when job runs are permitted. */
  day: "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";

  /**
   * Hours when job runs are permitted.
   * > Empty array indicates that job runs are denied during the whole day.
   *
   */
  hours?: number[];
}

export interface WindowsMonthlyScheduleCalendarWithDaySettings {
  /** Schedule type. */
  monthlyMode: "Unknown" | "Day" | "DayOfWeek" | "LastDayOfMonth";

  /**
   * Counting number of the week day.
   * > Required for the `DaysOfWeek` schedule type.
   *
   */
  weekDayNumber?: "First" | "Second" | "Third" | "Fourth" | "Last";

  /**
   * Name of the week day.
   * > Required for the `DaysOfWeek` schedule type.
   *
   */
  dayOfWeek?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

  /**
   * Day of the month.
   * > Required for the `Day` schedule type.
   *
   * @format int32
   * @min 1
   * @max 31
   */
  day?: number;

  /** Month. */
  months?: ("Jan" | "Feb" | "Mar" | "Apr" | "May" | "Jun" | "Jul" | "Aug" | "Sep" | "Oct" | "Nov" | "Dec" | "All")[];
}

export interface WindowsMonthlyScheduleCalendarSettings {
  /** Counting number of the week day. */
  weekDayNumber: "First" | "Second" | "Third" | "Fourth" | "Last";

  /** Name of the week day. */
  dayOfWeek?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

  /** Month. */
  months?: ("Jan" | "Feb" | "Mar" | "Apr" | "May" | "Jun" | "Jul" | "Aug" | "Sep" | "Oct" | "Nov" | "Dec" | "All")[];
}

export interface WindowsMonthlyScheduleSettings {
  /**
   * Timestamp of a job start.
   * @format time-of-day
   */
  time?: string;

  /** Job calendar settings. */
  calendarSettings: WindowsMonthlyScheduleCalendarWithDaySettings;
}

export interface WindowsDailyScheduleSettings {
  /**
   * Timestamp of a job start.
   * @format time-of-day
   */
  time?: string;

  /** Type of daily schedule. */
  dailyMode?: "Everyday" | "WeekDays" | "SpecificDays";

  /**
   * Name of the week day.
   * > Required for the `SpecificDays` type of daily schedule.
   *
   */
  specificDays?: ("Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday")[];
}

export interface WindowsServerModeJobSettings {
  /** Retention settings. */
  retentionSettings?: WindowsServerJobRetentionSettings;

  /** Scheduling settings. */
  scheduleSetting?: WindowsServerJobScheduleSettings;

  /** Guest OS indexing settings. */
  indexingSettings?: WindowsIndexingSettings;

  /** Application-aware processing settings. */
  applicationAwareProcessingSettings?: WindowsApplicationAwareProcessingSettings;
}

export interface WindowsApplicationAwareProcessingSettings {
  /** Indicates whether the application-aware processing is enabled. */
  enabled?: boolean;

  /** Application-aware processing type. */
  transactionLogProcessingMode?: "ProcessTransactionLogsWithJob" | "PerformCopyOnly";

  /** Transaction log handling settings for Microsoft SQL Server. */
  sqlServerTransactionLogHandlingSettings?: WindowsSqlServerTransactionLogHandlingSettings;

  /** Archived log handling settings for Oracle database. */
  oracleTransactionLogHandlingSettings?: WindowsOracleTransactionLogHandlingSettings;

  /** Microsoft SharePoint account settings. */
  sharePointAccountSettings?: SharePointAccountSettings;

  /** Execution settings for pre-freeze and post-thaw scripts. */
  scriptSettings?: WindowsJobScriptSettings;
}

export interface WindowsJobScriptSettings {
  /** Script processing mode. */
  mode?: "Disabled" | "IgnoreErrors" | "FailJobOnError";

  /** Path to a pre-freeze script file. */
  preFreezeScript?: WindowsJobScript;

  /** Path to a post-thaw script file. */
  postThawScript?: WindowsJobScript;

  /** Credentials of a user account with permissions to run scripts. */
  credentials?: WindowsJobScriptExecutionAccount;
}

export interface WindowsJobScript {
  /** Script file name. */
  fileName: string;

  /**
   * Script content in the Base64 format. The property is required and write-only.
   * @format byte
   */
  content?: string;
}

export interface WindowsJobScriptExecutionAccount {
  /** User name. */
  username: string;

  /**
   * Password.
   * > Required only during job or policy initial configuration. <br>
   * > For resource modification, the `null` value can be used instead of the previously provided password.
   *
   * @format password
   */
  password?: string;
}

export interface SharePointAccountSettings {
  /** User name. */
  username: string;

  /**
   * Password.
   * @format password
   */
  password?: string;
}

export interface WindowsOracleTransactionLogHandlingSettings {
  /** Credentials of a user account that Veeam Agent for Microsoft Windows must use to connect to the Oracle database. */
  credentials?: WindowsOracleAccountSettings;

  /** Archived log processing mode. */
  archivedLogsRetentionMode?: "DoNotDeleteArchivedLogs" | "DeleteLogsOlderThanHours" | "DeleteLogsOverGb";

  /**
   * Amount of time after which archived logs must be deleted, in hours.
   * > Required for the `DeleteLogsOlderThanHours` archived log processing mode.
   *
   * @format int32
   * @min 1
   * @max 60
   */
  backupLifeTimeHours?: number;

  /**
   * Maximum threshold for archived log file size, in GB.
   * > If an archived log file exceeds the limitation, it is deleted. <br>
   * > Required for the `DeleteLogsOverGb` archived log processing mode.
   *
   * @format int32
   * @min 1
   * @max 999
   */
  backupSizeThresholdGb?: number;

  /** Indicates whether Veeam Agent for Microsoft Windows must back up archive logs. */
  backupLogsPeriodically?: boolean;

  /** Archive log backup settings. */
  periodicallyBackupSetting?: WindowsPolicyPeriodicallyLogBackupSettings;
}

export interface WindowsPolicyPeriodicallyLogBackupSettings {
  /**
   * Frequency for archived logs backup, in minutes.
   * @format int32
   * @min 5
   * @max 480
   */
  backupLogsEveryMin?: number;

  /** Type of a retention policy for archived logs. */
  backupRetentionMode?: "UntilBackupIsDeleted" | "KeepLastDays";

  /**
   * Number of days for which archived logs are kept.
   * @format int32
   * @min 1
   * @max 60
   */
  keepBackupsOnlyLastDays?: number;
}

export interface WindowsOracleAccountSettings {
  /** Type of the account used to access Oracle database. */
  accountType?: "Oracle" | "Windows";

  /** User name. */
  username: string;

  /**
   * Password.
   * @format password
   */
  password?: string;
}

export interface WindowsSqlServerTransactionLogHandlingSettings {
  /** Credentials of a user account that Veeam Agent for Microsoft Windows must use to connect to the Microsoft SQL Server. */
  credentials?: WindowsMsSqlAccountSettings;

  /** Transaction log processing mode. */
  logsProcessingMode?: "TruncateLogs" | "DoNotTruncateLogs" | "BackupLogsPeriodically";

  /** Settings for periodic transaction log backup. */
  periodicallyBackupSetting?: WindowsPolicyPeriodicallyLogBackupSettings;
}

export interface WindowsMsSqlAccountSettings {
  /** User name. */
  username: string;

  /**
   * Password.
   * @format password
   */
  password?: string;
}

export interface WindowsWorkstationJobPeriodicalScheduleSettings {
  /** Scheduling settings required for a daily running job. */
  dailyScheduleSettings?: WindowsDailyScheduleSettings;

  /** Action that Veeam Agent for Microsoft Windows must perform in case your computer is powered off at the time when the scheduled backup job must start. */
  shutdownAction?: "SkipBackup" | "BackupOncePoweredOn";

  /** Finalizing action that must be performed after the backup job completes successfully. */
  finalizingAction?: "KeepRunning" | "Sleep" | "Shutdown" | "Hibernate";
}

export interface WindowsWorkstationJobEventTriggerSettings {
  /** Indicates whether a scheduled backup job must start when the user locks the computer. */
  backupOnLock?: boolean;

  /** Indicates whether a scheduled backup job must start when the user working with the computer performs a logout operation. */
  backupOnLogOff?: boolean;

  /** Indicates whether a scheduled backup job must start when the backup storage becomes available. */
  backupOnTargetConnection?: boolean;

  /**
   * Indicates whether Veeam Agent for Microsoft Windows must unmount the storage device after the backup job completes successfully.
   * > Cannot be enabled if the `backupOnTargetConnection` property has the `false` value.
   *
   */
  ejectTargetOnBackupComplete?: boolean;

  /**
   * Minutely, hourly or daily interval between the backup job sessions.
   * @format int32
   * @min 1
   * @max 99
   */
  backupNotOften?: number;

  /** Measurement units for interval between the backup job sessions. */
  notOftenTimeUnit?: "Minutes" | "Hours" | "Days";
}

export interface WindowsWorkstationJobScheduleSettings {
  /** Indicates whether backup must be performed periodically. */
  periodicalScheduleEnabled?: boolean;

  /** Scheduling settings for daily backup job launch. */
  periodicalScheduleSettings?: WindowsWorkstationJobPeriodicalScheduleSettings;

  /** Settings for events that trigger the backup job launch. */
  eventTriggerSettings?: WindowsWorkstationJobEventTriggerSettings;
}

export interface WindowsWorkstationModeJobSettings {
  /** Scheduling settings for a backup job. */
  scheduleSetting?: WindowsWorkstationJobScheduleSettings;

  /** Retention policy settings for a backup job. */
  retentionSettings?: WindowsWorkstationJobRetentionSettings;
}

export interface WindowsIndexingSettings {
  /** Indexing mode. */
  indexingType: "None" | "Everything" | "SpecifiedFolders" | "ExceptSpecifiedFolders";

  /**
   * Array of paths to the indexed folders.
   * > Required for the `SpecifiedFolders` indexing mode.
   *
   */
  includedFolders?: string[];

  /**
   * Array of paths to folders that are excluded from the indexing scope.
   * > Required for the `ExceptSpecifiedFolders` indexing mode.
   *
   */
  excludedFolders?: string[];
}

export interface WindowsBackupStorage {
  /** Compression level for the backup. */
  compressionLevel?: "Unknown" | "NoCompression" | "Dedupe" | "Optimal" | "High" | "Extreme";

  /** Type of a backup target. */
  storageOptimization?: "Unknown" | "Local16TbPlusBackup" | "Local" | "Lan" | "Wan";

  /**
   * Indicates whether encryption is enabled.
   * > Encryption cannot be enabled for backup files stored on the Veeam backup repository.
   *
   */
  encryptionEnabled?: boolean;

  /**
   * Password used for encryption.
   * > Required if encryption is enabled.
   *
   * @format password
   */
  password?: string;

  /**
   * Hint for the password.
   * > Must not consist of the password itself.
   *
   */
  passwordHint?: string;
}

export interface WindowsBackupTarget {
  /**
   * Target location for the created backup.
   * > To store entire computer backups on the `LocalFolder` target location, you must use an external drive.
   * > The `OneDrive` target type cannot be assigned using RESTful API.
   *
   */
  targetType: "Unknown" | "LocalFolder" | "SharedFolder" | "BackupRepository" | "CloudRepository" | "OneDrive";

  /**
   * Path to the folder where backup files must be stored.
   * > Required for the `LocalFolder` target location.
   *
   * @pattern ^[a-zA-Z]:(\\(?!(aux|con|nul|prn|com[1-9]|lpt[1-9])(\\|$))([^<>:"/\\|?*]+))+\\?$
   */
  localPath?: string;

  /**
   * Shared folder settings.
   * > Required for the `SharedFolder` target location.
   *
   */
  sharedFolder?: WindowsSharedFolderTarget;

  /**
   * Veeam Backup & Replication repository settings.
   * > Required for the `BackupRepository` target location.
   *
   */
  backupRepository?: WindowsBackupRepositoryTarget;

  /**
   * Cloud repository settings.
   * > Optional for the `CloudRepository` target location.
   *
   */
  cloudRepository?: WindowsCloudRepositoryTarget;
}

export interface DiscoveryRuleScheduleSettings {
  /** Schedule type */
  scheduleType: "NotScheduled" | "Daily" | "Monthly" | "Periodically" | "Continuously";

  /** Time zone settings. */
  timeZone?: TimeZone;

  /** Scheduling settings required to run discovery daily. */
  dailyScheduleSettings?: DiscoveryRuleDailyScheduleSettings;

  /** Scheduling settings required to run discovery monthly. */
  monthlyScheduleSettings?: DiscoveryRuleMonthlyScheduleSettings;

  /** Scheduling settings required to run discovery repeatedly throughout a day. */
  periodicalScheduleSettings?: DiscoveryRulePeriodicalScheduleSettings;
}

export interface DiscoveryRuleDailyScheduleSettings {
  /**
   * Time of the day when discovery must run.
   * @format time-of-day
   */
  time?: string;

  /**
   * Week days on which discovery must be performed.
   * > Required for the `SpecificDay` schedule type.
   *
   */
  specificDays?: ("Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday")[];
}

export interface DiscoveryRuleMonthlyScheduleSettings {
  /**
   * Time of the day when discovery must run.
   * @format time-of-day
   */
  time: string;

  /** Discovery calendar settings. */
  calendarSettings: DiscoveryRuleMonthlyScheduleCalendarWithDaySettings;
}

export interface DiscoveryRuleMonthlyScheduleCalendarWithDaySettings {
  /** Type of schedule for monthly discovery. */
  monthlyMode: "Unknown" | "Day" | "DayOfWeek" | "LastDayOfMonth";

  /**
   * Counting number of the week day.
   * > Required for the `DayOfWeek` schedule type.
   *
   */
  weekDayNumber?: "First" | "Second" | "Third" | "Fourth" | "Last";

  /**
   * Week day.
   * > Required for the `DayOfWeek` schedule type.
   *
   */
  dayOfWeek?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

  /**
   * Day of the month.
   * > Required for the `Day` schedule type.
   *
   * @format int32
   * @min 1
   * @max 31
   */
  day?: number;

  /** Month. */
  months: ("Jan" | "Feb" | "Mar" | "Apr" | "May" | "Jun" | "Jul" | "Aug" | "Sep" | "Oct" | "Nov" | "Dec" | "All")[];
}

export interface DiscoveryRulePeriodicalScheduleSettings {
  /**
   * Time interval for a periodically running discovery, in minutes. Discovery starts at the beginning of an hour after the specified time interval.
   * @min 1
   * @max 43200
   */
  intervalInMinutes?: number;
}

export interface TimeZone {
  /** ID assigned to a time zone. */
  timeZoneId: string;

  /** Time zone name. */
  displayName?: string;

  /**
   * UTC offset, in minutes.
   * @format int32
   * @min -720
   * @max 720
   */
  utcOffset?: number;
}

export interface WindowsGfsRetentionSettings {
  /**
   * GFS retention policy settings for weekly full backups.
   * The `null` value indicates that long-term retention is disabled for weekly full backups.
   *
   */
  weekly?: WindowsGfsWeeklyRetentionSettings;

  /**
   * GFS retention policy settings for monthly full backups.
   * > The `null` value indicates that long-term retention is disabled for monthly full backups.
   *
   */
  monthly?: WindowsGfsMonthlyRetentionSettings;

  /**
   * GFS retention policy settings for yearly full backups.
   * > The `null` value indicates that long-term retention is disabled for yearly full backups.
   *
   */
  yearly?: WindowsGfsYearlyRetentionSettings;
}

export interface WindowsGfsWeeklyRetentionSettings {
  /**
   * Number of weeks during which restore points must not be modified or deleted.
   * @format int32
   * @min 1
   * @max 999
   */
  keepWeeklyBackupsForWeeks: number;

  /** Week day when Veeam Backup & Replication must assign the weekly GFS flag to a full restore point. */
  useFullBackupFrom?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
}

export interface WindowsGfsMonthlyRetentionSettings {
  /**
   * Number of months during which restore points must not be modified or deleted.
   * @format int32
   * @min 1
   * @max 999
   */
  keepMonthlyBackupsForMonths: number;

  /** Week when Veeam Backup & Replication must assign the monthly GFS flag to a full restore point. */
  useWeeklyFullBackupForTheFollowingWeekOfMonth?: "First" | "Last";
}

export interface WindowsGfsYearlyRetentionSettings {
  /**
   * Number of years during which restore points must not be modified or deleted.
   * @format int32
   * @min 1
   * @max 999
   */
  keepYearlyBackupsForYears: number;

  /** Month when Veeam Backup & Replication must assign the yearly GFS flag to a full restore point. */
  useMonthlyFullBackupForTheFollowingMonth?:
  | "Jan"
  | "Feb"
  | "Mar"
  | "Apr"
  | "May"
  | "Jun"
  | "Jul"
  | "Aug"
  | "Sep"
  | "Oct"
  | "Nov"
  | "Dec";
}

export interface WindowsSharedFolderTarget {
  /**
   * UNC name of the network shared folder in which you want to store backup files. The UNC name must start with two back slashes (\\).
   * @pattern ^(\\\\[^/\\\]\[":;|<>+=,?* _]+\\[^/\\\]\[":;|<>+=,?*]+)((?:\\[^\\/:*?"<>|]+)*\\?)$
   */
  path: string;

  /**
   * Credentials of a user account that has access permissions on the shared folder.
   * > If no user credentials are specified, backup job uses the Active Directory computer account or account configured in Veeam Agent for Microsoft Windows.'
   *
   */
  credentials: WindowsPolicyTargetCredentials;

  /**
   * Local backup cache settings.
   * > The `null` value indicates that local backup cache is disabled.
   *
   */
  backupCacheSettings?: BackupCacheSettings;
}

export interface WindowsPolicyTargetCredentials {
  /** User name. */
  username: string;

  /**
   * Password.
   * @format password
   */
  password?: string;
}

export interface WindowsBackupServerConnectionOptions {
  /**
   * DNS name or IP address of a Veeam Backup & Replication server that manages the target backup repository.
   * @pattern (^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\_\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-\_]*[A-Za-z0-9])$)|($(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])^)|(^(?:(?:[0-9a-fA-F:]){1,4}(?:(?::(?:[0-9a-fA-F]){1,4}|:)){2,7})+$)
   */
  address: string;

  /**
   * Port over which Veeam Agent for Microsoft Windows must communicate with the backup repository.
   * @format int32
   * @min 1
   * @max 65535
   */
  port?: number;

  /** Name of a backup repository. */
  remoteRepositoryName: string;
}

export interface WindowsBackupRepositoryTarget {
  /** Veeam Backup & Replication server connection settings. */
  backupServer: WindowsBackupServerConnectionOptions;

  /**
   * Credentials of a user account that has access to the backup repository.
   * > If no user credentials are specified, backup job uses the Active Directory computer account.
   *
   */
  credentials?: WindowsPolicyTargetCredentials;

  /**
   * Local backup cache settings.
   * > The `null` value indicates that local backup cache is disabled.
   *
   */
  backupCacheSettings?: BackupCacheSettings;
}

export interface WindowsCloudRepositoryTarget {
  /**
   * Local backup cache settings.
   * > The `null` value indicates that local backup cache is disabled.
   *
   */
  backupCacheSettings?: BackupCacheSettings;
}

export interface BackupCacheSettings {
  /**
   * Path to the folder in which backup cache files must be stored.
   * @pattern ^[a-zA-Z]:(\\(?!(aux|con|nul|prn|com[1-9]|lpt[1-9])(\\|$))([^<>:"/\\|?*]+))+\\?$
   */
  location: string;

  /**
   * Maximum size of the backup cache, in GB.
   * @format int32
   * @min 1
   * @max 65535
   */
  maximumSizeGb?: number;
}

export interface WindowsBackupSource {
  /** Backup mode. */
  backupMode: "Unknown" | "EntireComputer" | "Volume" | "FilesFolders";

  /** Settings for entire computer backup. */
  computerLevelOptions?: WindowsComputerLevelBackupSource;

  /** Settings required for the `Volume` backup mode. */
  volumeLevelOptions?: WindowsVolumeLevelBackupSource;

  /** Settings required for the `FilesFolders` backup mode. */
  fileLevelOptions?: WindowsFileLevelBackupSource;
}

export interface WindowsComputerLevelBackupSource {
  /**
   * Indicates whether external USB drives must be included in the backup.
   * > USB flash drives are not supported.
   *
   */
  includeUsbDrives: boolean;
}

export interface WindowsVolumeLevelBackupSource {
  /** Filter type. */
  mode?: "Unknown" | "InclusionMode" | "ExclusionMode";

  /**
   * Indicates whether agent operating system is included in a backup scope.
   * >Available only if the `InclusionMode` filter type is selected.
   *
   */
  backupOperatingSystem?: boolean;

  /**
   * Array of drive letters of volumes that must be included in the backup scope.
   * > Drive letters must be specified in the following format: `C:\`.
   *
   */
  inclusions?: string[];

  /**
   * Array of drive letters of volumes that must be excluded from the backup scope.
   * > Drive letters must be specified in the following format: `C:\`.
   *
   */
  exclusions?: string[];
}

export interface WindowsFileLevelBackupSource {
  /**
   * Array of paths to folders containing the files that must be protected.
   * > Can be skipped, if the `osfilesIncluded` or `personalFilesIncluded` property has the `true` value.'
   *
   */
  directories?: string[];

  /** Array of file names and/or masks for file types that must be protected. */
  inclusionMasks?: string[];

  /** Array of file names and/or masks for file types that must not be protected. */
  exclusionMasks?: string[];

  /**
   * Indicates whether the job must protect the OS data.
   * > The `true` value automatically applies the `true` value to the `personalFilesIncluded` property.
   *
   */
  osfilesIncluded?: boolean;

  /** Indicates whether the OneDrive folders must be excluded from the backup scope. */
  excludeOneDriveFolders?: boolean;

  /**
   * Indicates whether the job must protect the user profile folder including all user settings and data.
   * > Has the `true` value if the `osfilesIncluded` property has the `true` value.'
   *
   */
  personalFilesIncluded?: boolean;

  /** Advanced settings for personal files included in the backup scope. */
  personalFilesAdvancedSettings?: WindowsPersonalFilesBackupAdvancedSettings;
}

export interface WindowsPersonalFilesBackupAdvancedSettings {
  /** Type of personal file protection. */
  mode?: "Unknown" | "All" | "Granular";

  /** Profile folders that must be included in the backup scope. */
  inclusions?: (
    | "Unknown"
    | "Desktop"
    | "Documents"
    | "Pictures"
    | "Video"
    | "Music"
    | "Favorites"
    | "Downloads"
    | "ApplicationData"
    | "OtherFilesAndFolders"
  )[];

  /** Exclusions configured for personal file backup. */
  exclusions?: ("Unknown" | "RoamingUsers")[];
}

export interface WindowsWorkstationJobRetentionSettings {
  /**
   * Number of days for which backup files must be stored in the target location. Days without backups are not included.
   * @format int32
   * @min 1
   * @max 730
   */
  retentionDays?: number;
}

export interface WindowsServerJobRetentionSettings {
  /**
   * Retention policy type.
   * > The `Days` type is available only for Veeam Agent for Microsoft Windows version 5.0 or later. For earlier versions the `RestorePoints` type is used.'
   *
   */
  retentionMode?: "Unknown" | "Days" | "RestorePoints";

  /**
   * Retention policy counter value.
   * @format int32
   * @min 1
   * @max 730
   */
  retentionCount?: number;
}

export interface LinuxBackupPolicy {
  /**
   * UID assigned to a backup policy template.
   * @format uuid
   */
  instanceUid?: string;

  /** Indicates whether a subtenant must be created for each Veeam Agent for Linux. */
  createSubtenants?: boolean;

  /** Indicates whether a subtenant can consume unlimited amount of space on a repository. */
  unlimitedSubtenantQuota?: boolean;

  /**
   * Maximum amount of space that a subtenant can consume on a repository.
   * > If a subtenant can consume unlimited amount of space, the value of this property is ignored.'
   *
   * @format int32
   */
  repositoryQuotaGB?: number;

  /** Backup job operation mode. */
  operationMode: BackupJobOperationMode;

  /** Job configuration. */
  jobConfiguration: LinuxBackupJobConfiguration;
}

/**
 * @example {"name":"LServerVolumeCloudComplex","description":"","operationMode":"Server","accessMode":"Private","createSubtenants":true,"unlimitedSubtenantQuota":false,"repositoryQuotaGB":1,"jobConfiguration":{"backupSource":{"backupMode":"Volume","volumeLevelOptions":{"volumes":[{"volumeType":"Device","path":"/home"}]},"fileLevelOptions":null},"backupTarget":{"targetType":"CloudRepository","localPath":null,"sharedFolder":null,"backupRepository":null,"enableDeletedFilesRetention":false,"removeDeletedItemsDataAfter":30},"backupStorage":{"compressionLevel":"Optimal","blockSize":"Local","encryptionEnabled":false,"password":null,"passwordHint":null,"isSnapshotRequired":true},"indexingSettings":{"indexingType":"ExceptSpecifiedFolders","includedFolders":null,"excludedFolders":["home"]},"scriptSettings":null,"retentionSettings":{"restorePointsCount":7},"scheduleSettings":{"scheduleType":"Daily","dailyScheduleSettings":{"time":"03:30","dailyMode":"Everyday","specificDays":null},"monthlyScheduleSettings":null,"periodicallyScheduleSettings":null,"activeFullSettings":{"scheduleType":"Weekly","dayOfMonth":2,"weeklyOnDays":["Monday","Saturday"]},"retrySettings":{"enabled":true,"retryTimes":3,"waitTimeoutMinutes":10}},"applicationAwareProcessingSettings":{"oracleAapSettings":{"processingType":"TryProcess","credentials":{"username":"root1","password":"Password1"},"truncationConfig":{"truncationMode":"TruncateDisabled","sizeGB":10,"lifeTimeHours":24},"useOracleCredentials":true},"mySqlAapSettings":{"processingType":"RequireSuccess","credentials":{"username":"root2","password":"Password1"},"authType":"MySQLPassword","passwordFilePath":""},"postgreSqlAapSettings":{"processingType":"TryProcess","credentials":{"username":"root3","password":"Password1"},"authType":"PSQLPassword"}}}}
 */
export interface LinuxBackupPolicyInput {
  /**
   * Backup policy name.
   * @pattern ^[^~"#%&*:<>?/\\{|}.'`$]+$
   */
  name: string;

  /** Backup policy description. */
  description?: string;

  /** Backup job operation mode. */
  operationMode: BackupJobOperationMode;

  /** Backup policy access mode. */
  accessMode: BackupPolicyAccessMode;

  /**
   * Defines whether a subtenant must be created for each Veeam Agent for Microsoft Windows.
   * > Available if a cloud repository is selected as backup destination.
   *
   */
  createSubtenants?: boolean;

  /**
   * Defines whether a subtenant can consume unlimited amount of space on a repository.
   * > Available if a cloud repository is selected as backup destination.
   *
   */
  unlimitedSubtenantQuota?: boolean;

  /**
   * Maximum amount of space that a subtenant can consume on a repository.
   * > If a subtenant can consume unlimited amount of space, the value of this property is ignored. <br>
   * > Available if a cloud repository is selected as backup destination.
   *
   * @format int32
   */
  repositoryQuotaGB?: number;

  /** Job configuration. */
  jobConfiguration: LinuxBackupJobConfiguration;
}

export interface LinuxBackupJobConfiguration {
  /** Data included in the backup scope. */
  backupSource: LinuxBackupSource;

  /** Location of the backup files. */
  backupTarget: LinuxBackupTarget;

  /** Backup storage settings. */
  backupStorage?: LinuxBackupStorage;

  /** Guest OS indexing settings. */
  indexingSettings?: LinuxIndexingSettings;

  /** Execution settings for job and snapshot scripts. */
  scriptSettings?: LinuxJobScriptSettings;

  /** Retention policy settings for a backup job. */
  retentionSettings?: LinuxJobRetentionSettings;

  /** Scheduling settings for a backup job. */
  scheduleSettings?: LinuxJobScheduleSettings;

  /** Application-aware processing settings. */
  applicationAwareProcessingSettings?: LinuxJobApplicationAwareProcessingSettings;
}

/**
 * @example {"name":"ServerEntireCloud_Custom","description":"Linux Policy","operationMode":"Server","cloudRepositoryConnectionSettings":{"backupResourceUid":"5b03d390-813f-40bc-886b-011de50b65d7","username":"admin","password":"Password1"},"jobConfiguration":{"backupSource":{"backupMode":"EntireComputer","volumeLevelOptions":null,"fileLevelOptions":null},"backupTarget":{"targetType":"CloudRepository","localPath":null,"sharedFolder":null,"backupRepository":null,"enableDeletedFilesRetention":true,"removeDeletedItemsDataAfter":5},"backupStorage":{"compressionLevel":"Optimal","blockSize":"Local","encryptionEnabled":false,"password":null,"passwordHint":null,"isSnapshotRequired":true},"indexingSettings":null,"scriptSettings":{"enabled":false,"preJobScript":null,"postJobScript":null,"preFreezeScript":null,"postThawScript":null},"retentionSettings":{"restorePointsCount":10},"scheduleSettings":{"scheduleType":"Daily","dailyScheduleSettings":{"time":"03:30","dailyMode":"Everyday","specificDays":null},"monthlyScheduleSettings":null,"periodicallyScheduleSettings":null,"activeFullSettings":{"scheduleType":"Monthly","dayOfMonth":2,"weeklyOnDays":["Saturday"]},"retrySettings":{"enabled":true,"retryTimes":3,"waitTimeoutMinutes":10}},"applicationAwareProcessingSettings":{"oracleAapSettings":{"processingType":"DisableProcess","credentials":null,"truncationConfig":{"truncationMode":"TruncateDisabled","sizeGB":1,"lifeTimeHours":1},"useOracleCredentials":false},"mySqlAapSettings":{"processingType":"DisableProcess","credentials":{"username":"string","password":"string"},"authType":"MySQLPassword","passwordFilePath":null},"postgreSqlAapSettings":{"processingType":"DisableProcess","credentials":{"username":"string","password":"string"},"authType":"PSQLPassword"}}}}
 */
export interface LinuxCustomJobConfiguration {
  /**
   * Backup job name.
   * @pattern ^[^~"#%&*:<>?/\\{|}.'`$]+$
   */
  name: string;

  /** Job description. */
  description?: string;

  /** Backup job operation mode. */
  operationMode: BackupJobOperationMode;

  /** Settings required to connect a cloud repository that is used as a target location for backups. */
  cloudRepositoryConnectionSettings?: CloudRepositoryConnectionSettings;

  /** Job configuration. */
  jobConfiguration: LinuxBackupJobConfiguration;
}

export interface LinuxBackupSource {
  /** Backup mode. */
  backupMode: "Unknown" | "EntireComputer" | "Volume" | "FilesFolders";

  /** Settings required for the `Volume` backup mode. */
  volumeLevelOptions?: LinuxVolumeLevelBackupSource;

  /** Settings required for the `FilesFolders` backup mode. */
  fileLevelOptions?: LinuxFileLevelBackupSource;
}

export interface LinuxVolumeLevelBackupSource {
  /** Array of source directories. */
  volumes: LinuxBackupVolumeSourceSettings[];
}

export interface LinuxBackupVolumeSourceSettings {
  /** Volume type. */
  volumeType: "Device" | "MountPoint" | "LVM" | "BTRFS";

  /** Path to a block device or mount point. */
  path: string;
}

export interface LinuxFileLevelBackupSource {
  /** Array of paths to folders containing the files that must be protected. */
  directories: string[];

  /**
   * Array of inclusion masks.
   * > Use `*` to represent any amount of letters, and `?` to represent a single letter.
   *
   */
  inclusionMasks?: string[];

  /**
   * Array of exclusion masks.
   * > Use `*` to represent any amount of letters, and `?` to represent a single letter. You can additionally specify path to a folder.
   *
   */
  exclusionMasks?: string[];
}

export interface LinuxBackupTarget {
  /** Target location for the created backup. */
  targetType: "Unknown" | "LocalFolder" | "SharedFolder" | "BackupRepository" | "CloudRepository";

  /**
   * Path to the folder where backup files must be stored.
   * > Required for the `LocalFolder` target location.
   *
   * @pattern ^\/([A-z0-9-_+]+\/)*([A-z0-9-_]+)$
   */
  localPath?: string;

  /**
   * Shared folder settings.
   * > Required for the `SharedFolder` target location.
   *
   */
  sharedFolder?: LinuxSharedFolderTarget;

  /**
   * Veeam Backup & Replication repository settings.
   * > Required for the `BackupRepository` target location.'
   *
   */
  backupRepository?: LinuxBackupServerSettings;

  /** Defines whether the deleted backup files must be removed after a specific time period. */
  enableDeletedFilesRetention?: boolean;

  /**
   * Number of days for which the deleted backup files are stored.
   * @min 1
   * @max 999
   */
  removeDeletedItemsDataAfter?: number;
}

export interface LinuxBackupStorage {
  /** Compression level for the backup. */
  compressionLevel?: "Unknown" | "NoCompression" | "Dedupe" | "Optimal" | "High" | "Extreme";

  /** Type of data block size. */
  blockSize?: "Unknown" | "Local100TbPlusBackup" | "Local" | "Lan" | "Wan";

  /**
   * Indicates whether encryption is enabled.
   * > Encryption cannot be enabled for backup files stored on the Veeam backup repository.
   *
   */
  encryptionEnabled?: boolean;

  /**
   * Password used for encryption.
   * > Required if encryption is enabled.
   *
   * @format password
   */
  password?: string;

  /**
   * Hint for the password.
   * > The hint must not consist of the password.
   *
   */
  passwordHint?: string;

  /** Indicates whether Veeam Agent for Linux must create a snapshot of a backed-up volume during backup. */
  isSnapshotRequired?: boolean;
}

export interface LinuxIndexingSettings {
  /** Indexing mode. */
  indexingType?: "None" | "EveryFolders" | "SpecifiedFolders" | "ExceptSpecifiedFolders";

  /**
   * Array of paths to the indexed folders.
   * > Required for the `SpecifiedFolders` indexing mode.'
   *
   */
  includedFolders?: string[];

  /**
   * Array of paths to folders that are excluded from the indexing scope.
   * > Required for the `ExceptSpecifiedFolders` indexing mode.
   *
   */
  excludedFolders?: string[];
}

export interface LinuxJobScriptSettings {
  /** Indicates whether script processing is enabled. */
  enabled?: boolean;

  /** Path to a pre-job script. */
  preJobScript?: LinuxJobScript;

  /** Path to a post-job script. */
  postJobScript?: LinuxJobScript;

  /** Path to a pre-freeze script. */
  preFreezeScript?: LinuxJobScript;

  /** Path to a post-thaw script. */
  postThawScript?: LinuxJobScript;
}

export interface LinuxJobScript {
  /** Script file name. */
  fileName: string;

  /**
   * Script content in the Base64 format. The property is write-only.
   * @format byte
   */
  content?: string;
}

export interface LinuxJobRetentionSettings {
  /**
   * Number of restore points that must be kept in the target location.
   * @format int32
   * @min 1
   * @max 730
   */
  restorePointsCount?: number;
}

export interface LinuxJobScheduleSettings {
  /** Type of periodicity. */
  scheduleType?: "Unknown" | "NotScheduled" | "Daily" | "Monthly" | "Periodically";

  /** Scheduling settings required for a daily running job. */
  dailyScheduleSettings?: LinuxDailyScheduleSettings;

  /** Scheduling settings required for a monthly running job. */
  monthlyScheduleSettings?: LinuxMonthlyScheduleSettings;

  /** Scheduling settings required to run a job repeatedly throughout a day. */
  periodicallyScheduleSettings?: LinuxPeriodicallyScheduleSettings;

  /**
   * Scheduling settings for periodically created active full backups.
   * > The `null` value indicates that periodic creation of active full backups is disabled.'
   *
   */
  activeFullSettings?: LinuxActiveFullSettings;

  /** Automatic retry settings. */
  retrySettings?: LinuxScheduleRetrySettings;
}

export interface LinuxDailyScheduleSettings {
  /**
   * Timestamp of a job start.
   * @format time-of-day
   */
  time?: string;

  /** Type of daily schedule. */
  dailyMode?: "Everyday" | "SpecificDays";

  /** Name of the week day. Required for the SpecificDays type of daily schedule. */
  specificDays?: ("Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday")[];
}

export interface LinuxMonthlyScheduleSettings {
  /**
   * Timestamp of a job start.
   * @format time-of-day
   */
  time?: string;

  /**
   * Day of the month.
   * @min 1
   * @max 31
   */
  dayOfMonth?: number;
}

export interface LinuxPeriodicallyScheduleSettings {
  /**
   * Time interval for a periodically running job, in minutes.
   * @min 1
   * @max 1440
   */
  intervalInMinutes?: number;
}

export interface LinuxActiveFullSettings {
  /** Type of periodicity. */
  scheduleType?: "Unknown" | "NotScheduled" | "Monthly" | "Weekly";

  /**
   * Day of the month.
   * @min 1
   * @max 31
   */
  dayOfMonth?: number;

  /** Name of the week day. */
  weeklyOnDays?: ("Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday")[];
}

export interface LinuxScheduleRetrySettings {
  /** Indicates whether Veeam Agent for Linux must attempt to run the backup job again if the job fails. */
  enabled?: boolean;

  /**
   * Number of attempts to run a job.
   * @format int32
   * @min 1
   * @max 777
   */
  retryTimes?: number;

  /**
   * Time interval between attempts to run a job.
   * @format int32
   * @min 1
   * @max 999
   */
  waitTimeoutMinutes?: number;
}

export interface LinuxJobApplicationAwareProcessingSettings {
  /** Archived log handling settings for Oracle database. */
  oracleAapSettings?: LinuxOracleApplicationAwareProcessingSettings;

  /** MySQL database processing settings. */
  mySqlAapSettings?: LinuxMySqlApplicationAwareProcessingSettings;

  /** PostgreSQL database processing settings. */
  postgreSqlAapSettings?: LinuxPostgreSqlApplicationAwareProcessingSettings;
}

export interface LinuxOracleApplicationAwareProcessingSettings {
  /** Processing type. */
  processingType?: "DisableProcess" | "TryProcess" | "RequireSuccess";

  /** Credentials of a user account that Veeam Agent for Linux must use to connect to the Oracle database. */
  credentials?: LinuxBaseCredentials;

  /** Archived log processing settings. */
  truncationConfig?: LinuxOracleArchivedLogsTruncationConfig;

  /** Indicates whether the Oracle account credentials must be used. */
  useOracleCredentials?: boolean;
}

export interface LinuxOracleArchivedLogsTruncationConfig {
  /** Archived log processing mode. */
  truncationMode?: "TruncateDisabled" | "TruncateByAge" | "TruncateBySize";

  /**
   * Maximum threshold for archived log file size, in GB. If an archived log file exceeds the limitation, it is deleted.
   * > Required for the `TruncateBySize` archived log processing mode.
   *
   * @format int64
   * @min 1
   * @max 999
   */
  sizeGB?: number;

  /**
   * Amount of time after which archived logs must be deleted, in hours.
   * > Required for the `TruncateByAge` archived log processing mode.
   *
   * @format int64
   * @min 1
   * @max 60
   */
  lifeTimeHours?: number;
}

export interface LinuxMySqlApplicationAwareProcessingSettings {
  /** Transaction log processing mode. */
  processingType?: "DisableProcess" | "TryProcess" | "RequireSuccess";

  /** Credentials of a user account that Veeam Agent for Linux must use to connect to the MySQL database. */
  credentials?: LinuxBaseCredentials;

  /** Type of credentials format. */
  authType?: "MySQLPassword" | "MySQLPasswordFile";

  /** Path to the password file. */
  passwordFilePath?: string;
}

export interface LinuxPostgreSqlApplicationAwareProcessingSettings {
  /** PostgreSQL database processing type. */
  processingType?: "DisableProcess" | "TryProcess" | "RequireSuccess";

  /** Credentials of a user account that Veeam Agent for Linux must use to connect to the PostgreSQL database. */
  credentials?: LinuxBaseCredentials;

  /** Type of credentials format. */
  authType?: "PSQLPassword" | "PSQLPasswordFile" | "PSQLPeer";
}

export interface LinuxSharedFolderTarget {
  /** Type of a network shared folder. */
  targetType: "NFS" | "SMB";

  /**
   * Path to a network shared folder.'
   * @pattern ^([^/\\\][":;|<>+=,?* _]+\/[^/\\\][":;|<>+=,?*]+)((?:\/[^\\/:*?"<>|]+)*\/?)$
   */
  path: string;

  /** Credentials of a user account that has access permissions on a shared folder. */
  credentials?: LinuxCommonCredentials;
}

export interface LinuxBackupServerSettings {
  /** Settings required to connect a Linux computer to a Veeam Backup & Replication server. */
  connection: LinuxConnectionSettings;

  /** Name of a backup repository. */
  remoteRepositoryName?: string;

  /** Credentials of a user account that has access to a backup repository. */
  credentials: LinuxCommonCredentials;
}

export interface LinuxConnectionSettings {
  /**
   * DNS name or IP address of a Veeam Backup & Replication server.
   * @pattern (^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\_\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-\_]*[A-Za-z0-9])$)|($(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])^)|(^(?:(?:[0-9a-fA-F:]){1,4}(?:(?::(?:[0-9a-fA-F]){1,4}|:)){2,7})+$)
   */
  serverName: string;

  /**
   * Number of a port over which Veeam Agent for Linux must communicate with a Veeam Backup & Replication server.
   * @format int32
   * @min 1
   */
  serverPort?: number;
}

export interface LinuxBaseCredentials {
  /**
   * Username.
   * @pattern ^[^\/\\\[\]:;|=,+\*\?<>@"!#$%^&(){}]+(?<!\.)$
   */
  username: string;

  /**
   * Password.
   * @format password
   */
  password?: string;
}

export interface LinuxCommonCredentials {
  /**
   * Username.
   * @pattern ^[^\/\\\[\]:;|=,+\*\?<>@"!#$%^&(){}]+(?<!\.)$
   */
  username: string;

  /**
   * Password.
   * @format password
   */
  password?: string;

  /** Domain. */
  domain?: string;
}

/**
 * @example {"managementAgentUid":"BB111975-B409-49B5-8ECE-FFFECB13494F","name":"VAW AgentX","operationMode":"Server","guiMode":"ReadOnly","platform":"Cloud"}
 */
export interface BackupAgent {
  /**
   * UID assigned to a Veeam backup agent.
   * @format uuid
   */
  instanceUid?: string;

  /** Name of a platform on which Veeam backup agent is deployed. */
  agentPlatform?: "Unknown" | "Windows" | "Linux" | "Mac";

  /** Status of a Veeam backup agent. */
  status?: "Unknown" | "Active" | "NotRunning";

  /**
   * UID assigned to a management agent that is deployed along with Veeam backup agent.
   * @format uuid
   */
  managementAgentUid?: string;

  /**
   * UID assigned to a site on which an organization that owns Veeam backup agents is registered.
   * @format uuid
   */
  siteUid?: string;

  /**
   * UID assigned to an organization to which Veeam backup agents belong.
   * @format uuid
   */
  organizationUid?: string;

  /** Name of a managed computer on which Veeam backup agent is deployed. */
  name?: string;

  /** Backup job operation mode. */
  operationMode?: "Unknown" | "UnLicensed" | "Server" | "Workstation";

  /** Indicates the UI access mode for the Veeam backup agent. */
  guiMode: "Unknown" | "ReadOnly" | "Full";

  /** Computer platform on which Veeam backup agent is deployed. */
  platform?: "Unknown" | "Physical" | "Cloud" | "Virtual";

  /** Version of Veeam backup agent deployed on a managed computer. */
  version?: string;

  /**
   * Date and time when Veeam backup agent was activated.
   * @format date-time
   */
  activationTime?: string;

  /**
   * Management mode of Veeam backup agent.
   * > You can change management mode to `ManagedByConsole` or `UnManaged` using the PATCH endpoint.
   *
   */
  managementMode?: "Unknown" | "UnManaged" | "ManagedByVBR" | "ManagedByConsole";

  /** Type of Veeam backup agent installation procedure. */
  installationType?: "Unknown" | "Full" | "Restricted" | "Broken" | "Installing" | "Uninstalling";

  /**
   * Number of all jobs.
   * @format int32
   */
  totalJobsCount?: number;

  /**
   * Number of running jobs.
   * @format int32
   */
  runningJobsCount?: number;

  /**
   * Number of successful jobs.
   * @format int32
   */
  successJobsCount?: number;
}

/**
 * @example {"instanceUid":"82b693e8-2d33-40f3-8991-a26e8bd86158","managementAgentUid":"99ea35b0-d23f-41ab-8bb3-2e06555f039b","cbtDriverStatus":"NotInstalled"}
 */
export interface WindowsBackupAgent {
  /**
   * UID assigned to a Veeam backup agent.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a management agent that is deployed along with Veeam backup agent.
   * @format uuid
   */
  managementAgentUid?: string;

  /** CBT driver status. */
  cbtDriverStatus?: "Unknown" | "NotInstalled" | "Installed" | "Error" | "Installing" | "Uninstalling";
}

/**
 * @example {"backupAgentUid":"07773b42-89fb-7227-9c6a-95e6908f25de","disableScheduledBackups":true,"disableControlPanelNotification":true,"disableBackupOverMeteredConnection":true,"disableScheduleWakeup":false,"throttleBackupActivity":true,"restrictVpnConnections":false,"limitBandwidthConsumption":true,"bandwidthSpeedLimit":10,"bandwidthSpeedLimitUnit":"MbytePerSec","flrWithoutAdminPrivilegesAllowed":true}
 */
export interface BackupAgentSettings {
  /**
   * UID assigned to a Veeam backup agent.
   * @format uuid
   */
  backupAgentUid?: string;

  /** Indicates whether a Veeam backup agent job schedule is disabled. */
  disableScheduledBackups: boolean;

  /** Indicates whether Control Panel notifications. */
  disableControlPanelNotification: boolean;

  /** Indicates whether backup over metered connections is disabled. */
  disableBackupOverMeteredConnection: boolean;

  /** Indicates whether a scheduled wake up timer is disabled. */
  disableScheduleWakeup: boolean;

  /** Indicates whether Veeam backup agent throttles backup activities when system is busy. */
  throttleBackupActivity: boolean;

  /** Indicates whether backup over VPN connections is disabled. */
  restrictVpnConnections: boolean;

  /** Indicates whether bandwidth consumption for backup jobs is limited. */
  limitBandwidthConsumption?: boolean;

  /**
   * Value of maximum speed for transferring backed-up data.
   * @format int32
   * @min 1
   * @max 9999
   */
  bandwidthSpeedLimit?: number;

  /** Measurement units of maximum speed for transferring backed-up data. */
  bandwidthSpeedLimitUnit?: "MbitPerSec" | "KbytePerSec" | "MbytePerSec";

  /** Indicates whether file-level restore is available to users that do not have administrative privileges. */
  flrWithoutAdminPrivilegesAllowed: boolean;
}

export interface BackupAgentJob {
  /**
   * UID assigned to a Veeam backup agent job.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a Veeam backup agent.
   * @format uuid
   */
  backupAgentUid?: string;

  /**
   * UID assigned to an organization.
   * @format uuid
   */
  organizationUid?: string;

  /** Name of a Veeam backup agent job. */
  name?: string;

  /** Description of a Veeam backup agent job. */
  description?: string;

  /**
   * UID assigned to a backup job configuration.
   * @format uuid
   */
  configUid?: string;

  /** Type of guest OS on a managed computer. */
  systemType?: "Unknown" | "Windows" | "Linux" | "Mac";

  /**
   * UID of a backup policy assigned to a Veeam backup agent.
   * @format uuid
   */
  backupPolicyUid?: string;

  /**
   * Message that is displayed in case a backup policy job fails.
   * > Every line break is represented by the `\r\n` control characters.
   *
   */
  backupPolicyFailureMessage?: string;

  /**
   * Status of the latest job session.
   * > Can be changed to `Running` or `Stopping` using the PATCH endpoint.
   *
   */
  status: "Unknown" | "None" | "Success" | "Warning" | "Failed" | "Starting" | "Running" | "Stopping";

  /** Operation mode of a Veeam backup agent. */
  operationMode?: "Unknown" | "UnLicensed" | "Server" | "Workstation";

  /** Location where backup files for a Veeam backup agent reside. */
  destination?: string;

  /**
   * Number of restore points.
   * @format int32
   */
  restorePoints?: number;

  /**
   * Date and time when the latest job session started.
   * @format date-time
   */
  lastRun?: string;

  /**
   * Date and time when the latest job session finished.
   * @format date-time
   */
  lastEndTime?: string;

  /**
   * Duration of the latest backup job session, in seconds.
   * @format int32
   */
  lastDuration?: number;

  /**
   * Date and time of the next scheduled backup job session.
   * @format date-time
   */
  nextRun?: string;

  /**
   * Average duration of a backup job session, in seconds.
   * @format int32
   */
  avgDuration?: number;

  /** Type of backup operation mode. */
  backupMode?: "Unknown" | "EntireComputer" | "Volume" | "File";

  /** Type of a location where backup files for a Veeam backup agent reside. */
  targetType?: "Unknown" | "LocalFolder" | "SharedFolder" | "BackupRepository" | "CloudRepository";

  /**
   * Indicates whether a job schedule is enabled.
   * > Can be changed using the PATCH endpoint.
   *
   */
  isEnabled?: boolean;

  /** Type of schedule configured for the job. */
  scheduleType?: "Unknown" | "NotScheduled" | "Daily" | "Monthly" | "Periodically" | "Continuously";

  /** Message that is displayed in case a backup job fails. */
  failureMessage?: string;

  /**
   * Total size of all restore points, in bytes.
   * @format int64
   */
  backedUpSize?: number;
}

/**
 * @example {"backupAgentUid":"CCEB5975-B409-49B5-8ECE-FFFECB13494F","name":"VAW job 2 Cloud","configUid":"AF097BD3-4AE9-4841-8152-8FF5CC703EAB","status":"Success","operationMode":"Server","backupMode":"File","destination":"\\\\share\\backup\\test","restorePoints":4,"lastRun":"2018-11-01T10:35:00.0000000+00:00","lastEndTime":"2018-11-01T10:45:00.0000000+00:00","lastDuration":600,"nextRun":"2018-12-01T10:35:00.0000000+00:00","avgDuration":575,"targetType":"Local","isEnabled":true,"schedulingType":"Periodically","failureMessage":"","lastModifiedDate":"2018-11-01T10:45:00.0000000+00:00","lastModifiedBy":"someuser","backedUpSize":12550788}
 */
export interface WindowsBackupAgentJob {
  /**
   * UID assigned to a Veeam Agent for Microsoft Windows job.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a Veeam Agent for Microsoft Windows.
   * @format uuid
   */
  backupAgentUid?: string;

  /**
   * UID assigned to an organization.
   * @format uuid
   */
  organizationUid?: string;

  /** Name of a Veeam Agent for Microsoft Windows job. */
  name?: string;

  /**
   * UID assigned to a backup job configuration.
   * @format uuid
   */
  configUid?: string;

  /**
   * UID of a backup policy assigned to a Veeam Agent for Microsoft Windows.
   * @format uuid
   */
  backupPolicyUid?: string;

  /** Message that is displayed in case a backup policy job fails. */
  backupPolicyFailureMessage?: string;

  /**
   * Status of the latest job session.
   * > Can be changed to `Running` or `Stopping` using the PATCH endpoint.
   *
   */
  status: "Unknown" | "None" | "Success" | "Warning" | "Failed" | "Starting" | "Running" | "Stopping";

  /** Operation mode of a Veeam Agent for Microsoft Windows. */
  operationMode?: "Unknown" | "UnLicensed" | "Server" | "Workstation";

  /** Location where backup files for a Veeam Agent for Microsoft Windows reside. */
  destination?: string;

  /**
   * Number of restore points.
   * @format int32
   */
  restorePoints?: number;

  /**
   * Date and time when the latest job session started.
   * @format date-time
   */
  lastRun?: string;

  /**
   * Date and time when the latest job session finished.
   * @format date-time
   */
  lastEndTime?: string;

  /**
   * Duration of the latest backup job session, in seconds.
   * @format int32
   */
  lastDuration?: number;

  /**
   * Date and time of the next scheduled backup job session.
   * @format date-time
   */
  nextRun?: string;

  /**
   * Average duration of a backup job session, in seconds.
   * @format int32
   */
  avgDuration?: number;

  /** Type of backup operation mode. */
  backupMode?: "Unknown" | "EntireComputer" | "Volume" | "File";

  /** Type of a location where backup files for a Veeam Agent for Microsoft Windows reside. */
  targetType?: "Unknown" | "Local" | "Cloud";

  /**
   * Indicates whether a job schedule is enabled.
   * > Can be changed using the PATCH endpoint.
   *
   */
  isEnabled?: boolean;

  /** Type of schedule configured for the job. */
  scheduleType?: "Unknown" | "NotScheduled" | "Daily" | "Monthly" | "Periodically" | "Continuously";

  /** Events that trigger the backup job launch. */
  scheduleEvents?: ("Unknown" | "AtLock" | "AtLogoff" | "WhenBackupTargetIsConnected")[];

  /**
   * Date and time when settings of the backup job were last modified.
   * @format date-time
   */
  lastModifiedDate?: string;

  /** Name of the user who last modified job settings. */
  lastModifiedBy?: string;

  /** Message that is displayed in case a backup job fails. */
  failureMessage?: string;

  /**
   * Total size of all restore points, in bytes.
   * @format int64
   */
  backedUpSize?: number;

  /**
   * Amount of free space available on the target repository.
   * > If the job has never been run, the property value is `null`.
   *
   * @format int64
   */
  freeSpace?: number;
}

/**
 * @example {"instanceUid":"82b693e8-2d33-40f3-8991-a26e8bd86158","managementAgentUid":"99ea35b0-d23f-41ab-8bb3-2e06555f039b"}
 */
export interface LinuxBackupAgent {
  /**
   * UID assigned to a Veeam backup agent.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a management agent that is deployed along with Veeam backup agent.
   * @format uuid
   */
  managementAgentUid?: string;
}

export interface LinuxBackupAgentJob {
  /**
   * UID assigned to a Veeam Agent for Linux job.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a Veeam backup agent.
   * @format uuid
   */
  backupAgentUid?: string;

  /** Name of a Veeam backup agent job. */
  name?: string;
}

/**
 * @example {"instanceUid":"82b693e8-2d33-40f3-8991-a26e8bd86158","managementAgentUid":"99ea35b0-d23f-41ab-8bb3-2e06555f039b"}
 */
export interface MacBackupAgent {
  /**
   * UID assigned to a Veeam Agent for Mac.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a management agent that is deployed along with Veeam Agent for Mac.
   * @format uuid
   */
  managementAgentUid?: string;
}

export interface MacBackupAgentJob {
  /**
   * UID assigned to a Veeam Agent for Mac job.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a Veeam backup agent.
   * @format uuid
   */
  backupAgentUid?: string;

  /** Name of a Veeam backup agent job. */
  name?: string;
}

/**
 * @example {"serverAddress":"smtp://z.vspc.local:25","tlsMode":"auto","timeout":"00:05:00","passwordCredential":null,"oAuth2Credential":null,"exclusivelyAcceptedCertificateHash":null,"serverCertificate":null}
 */
export interface SmtpSettings {
  /** SMTP server URI containing protocol, host and port. */
  serverAddress: string;

  /** Type of secure socket comminucation used to connect to an SMTP server. */
  tlsMode: "auto" | "none" | "sslOnConnect" | "startTls" | "startTlsWhenAvailable";

  /**
   * Connection timeout.
   * @format time
   */
  timeout: string;

  /** Credentials required to access SMTP server. */
  passwordCredential?: { userName: string; password?: string; saslMechanism?: string };

  /** Server X509 certificate hex-encoded hash in the `<hash-algorithm>:<hash-hex>` format. */
  exclusivelyAcceptedCertificateHash?: string;

  /** Server X509 certificate information. */
  serverCertificate?: {
    friendlyName: string;
    subjectName: string;
    issuerName: string;
    notAfter: string;
    notBefore: string;
    serialNumber: string;
    signatureAlgorithm: string;
    hash: string;
    isValid: boolean;
  };
}

/**
 * @example {"from":"notification@mycompany.com","to":"s.smith@mycompany.com"}
 */
export interface TestEmailOptions {
  /** Email address from which test notification message is sent. */
  from: string;

  /** Email address to which test notification message is sent. */
  to: string;
}

export interface NotificationBillingSettings {
  /** Email address from which notifications are sent. */
  from?: string;

  /** Text that is displayed as a subject of notification. */
  subject?: string;
}

export interface NotificationDiscoverySettings {
  /** Email address from which notifications are sent. */
  from?: string;

  /** Email address at which notifications are sent. */
  to?: string;

  /** Text that is displayed as a subject of notification. */
  subject?: string;

  /** Indicates whether daily notifications are enabled. */
  isDailyNotificationEnabled?: boolean;

  /**
   * Time at which daily notifications are sent.
   * @format date-time
   */
  dailyTime?: string;
}

export interface NotificationAlarmsSettings {
  /** Email address from which notifications must be sent. */
  from?: string;

  /** Email address at which notifications must be sent. */
  to?: string;

  /** Subject of notification message. */
  dailySubject?: string;

  /** Indicates whether summary daily notifications is enabled. */
  isDailyNotificationEnabled?: boolean;

  /**
   * Time of the day when summary daily notifications are sent.
   * @format date-time
   */
  dailyTime?: string;
}

export interface NotificationLicenseSettings {
  /** Email address from which notifications must be sent. */
  from?: string;

  /** Email address at which notifications must be sent. */
  to?: string;

  /** Indicates whether notifications are enabled. */
  enabled?: boolean;
}

export interface PolicySettings {
  /** Organization MFA policy status. */
  mfaPolicyStatus?: "Unknown" | "Disabled" | "Enabled" | "EnabledByInheritance";

  /** Enforce MFA policy for child organizations. */
  enforceMfaPolicy?: boolean;
}

export interface NotificationSettings {
  /** SMTP server settings. */
  smtp: SmtpSettings;

  /** Billing notification settings. */
  billing: NotificationBillingSettings;

  /** Settings for notifications about discovery results. */
  discovery: NotificationDiscoverySettings;

  /** Alarm notification settings. */
  alarms: NotificationAlarmsSettings;

  /** License notification settings. */
  license: NotificationLicenseSettings;

  /** Level of notifications. */
  level?: "Unknown" | "disabled" | "summary" | "all";

  /** Default email address from which notification messages must be sent. */
  defaultFrom?: string;
}

export interface BrandingSettings {
  /**
   * Portal web address.
   * @pattern ^(http|https):\/\/[\w\d-._~:/?#\[\]@!$&'()*+,;=]+$
   */
  webUri: string;

  /** Interface color scheme. */
  portalColorTheme?: "Unknown" | "Blue" | "Green" | "Yellow" | "Turquoise";
}

export interface LicenseSettings {
  /** Indicates whether license auto update is enabled. */
  isAutoUpdateEnabled: boolean;
}

export interface DiscoveryRule {
  /**
   * UID assigned to a discovery rule.
   * @format uuid
   */
  instanceUid?: string;

  /** Name of a discovery rule */
  name: string;

  /**
   * UID assigned to a master agent.
   * @format uuid
   */
  masterAgentUid: string;

  /**
   * UID assigned to a location for which a discovery rule is configured.
   * @format uuid
   */
  locationUid?: string;

  /**
   * UID assigned to a company for which a discovery rule is configured.
   * @format uuid
   */
  companyUid?: string;

  /** Type of guest OS. */
  systemType?: "Unknown" | "Windows" | "Linux";

  /** Current status of a discovery rule. */
  status?:
  | "Unknown"
  | "Created"
  | "Running"
  | "Success"
  | "Canceled"
  | "Failed"
  | "CancellationRequested"
  | "CancellationRequestFailed";

  /**
   * Date and time of the latest discovery session.
   * @format date-time
   */
  lastRun?: string;

  /** Discovery filter. */
  filter?: DiscoveryRuleFilter;

  /** Settings configured for email notifications about discovery results. */
  notificationSettings?: DiscoveryRuleNotificationSettings;

  /** Discovery scheduling settings. */
  scheduleSettings?: DiscoveryRuleScheduleSettings;

  /**
   * Number of discovered computers.
   * @format int32
   */
  totalComputersCount?: number;

  /**
   * Number of online computers.
   * @format int32
   */
  onlineComputersCount?: number;

  /**
   * Number of offline computers.
   * @format int32
   */
  offlineComputersCount?: number;
}

/**
 * Resource representation of the related discovery rule entity.
 */
export interface EmbeddedForDiscoveryRuleChildren {
  /** Resource representation of a discovery rule. */
  discoveryRule?: DiscoveryRule;
}

/**
 * Resource representation of the related Windows discovery rule entity.
 */
export interface EmbeddedForWindowsDiscoveryRuleChildren {
  /** Resource representation of a descovery rule. */
  discoveryRule?: DiscoveryRule;

  /** Resource representation of a Windows discovery rule. */
  windowsDiscoveryRule?: WindowsDiscoveryRule;
}

/**
 * Resource representation of the related Linux discovery rule entity.
 */
export interface EmbeddedForLinuxDiscoveryRuleChildren {
  /** Resource representation of discovery rule. */
  discoveryRule?: DiscoveryRule;

  /** Resource representation of a Linux discovery rule. */
  linuxDiscoveryRule?: LinuxDiscoveryRule;
}

export interface WindowsDiscoveryRule {
  /**
   * UID assigned to a discovery rule.
   * @format uuid
   */
  instanceUid?: string;

  /** Discovery method. */
  method?: "Unknown" | "NetworkBased" | "AD" | "Manual";

  /** Indicates whether Veeam Service Provider Console must use master agent credentials to connect discovered computers. */
  useMasterManagementAgentCredentials?: boolean;

  /** Credentials of an account with Local Administrator permissions on discovered computers. */
  accessAccount: DiscoveryRuleCredentials;

  /** Settings configured for Veeam backup agent deployment. */
  deploymentSettings?: WindowsDiscoveryRuleDeploymentSettings;

  /** Resource representation of the related discovery rule entity. */
  _embedded?: EmbeddedForDiscoveryRuleChildren;
}

export interface LinuxDiscoveryRule {
  /**
   * UID assigned to a discovery rule.
   * @format uuid
   */
  instanceUid?: string;

  /** Discovery method. */
  method?: "Unknown" | "NetworkBased" | "Manual";

  /** Credentials to connect discovered computers. */
  credentials: LinuxDiscoveryCredentials[];

  /** Settings configured for Veeam backup agent deployment. */
  deploymentSettings?: LinuxDiscoveryRuleDeploymentSettings;

  /** Resource representation of the related discovery rule entity. */
  _embedded?: EmbeddedForDiscoveryRuleChildren;
}

export interface DiscoveryRuleFilter {
  /** Array of applied exclusion masks. For custom discovery rules this property is ignored. */
  exclusionMask?: string[];

  /** Indicates whether discovery is performed among accessible computers only. */
  ignoreInaccessibleMachine?: boolean;

  /** Type of operating system. */
  osTypes?: (
    | "Unknown"
    | "WindowsServer"
    | "WindowsWorkstation"
    | "CentOS"
    | "Debian"
    | "OracleLinux"
    | "Fedora"
    | "Ubuntu"
    | "OpenSUSE"
    | "SLES"
    | "RedHat"
  )[];

  /** Applications that must run on discovered computers. */
  applications?: (
    | "Unknown"
    | "OtherApp"
    | "MicrosoftExchangeServer"
    | "MicrosoftSqlServer"
    | "MicrosoftActiveDirectory"
    | "MicrosoftSharePoint"
    | "Oracle"
    | "MySQL"
    | "PostgreSQL"
    | "MongoDB"
    | "ApacheServer"
  )[];

  /**
   * Name of an application required for the `OtherApp` application type.
   * > Available only for Linux computers.
   *
   */
  customApplication?: string;

  /** Platforms on which discovered computers must run. */
  platforms?: (
    | "Unknown"
    | "Other"
    | "MicrosoftHyperVandVmWareVSpere"
    | "Physical"
    | "MicrosoftAzure"
    | "AmazonWebServices"
  )[];
}

/**
 * @example {"networkName":"Production","firstIp":"172.17.53.1","lastIp":"172.17.53.50"}
 */
export interface DiscoveryRuleNetwork {
  /** Name of a network configured in Veeam Service Provider Console. */
  networkName: string;

  /**
   * First IP-address in the range set for discovery.
   * @pattern ^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$
   */
  firstIp: string;

  /**
   * Last IP-address in the range set for discovery.
   * @pattern ^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$
   */
  lastIp: string;

  /** Trust options for Linux computers in the selected range of IP addresses. */
  trustOptions?: MachinesNetworkTrustOptions;
}

export interface MachinesNetworkTrustOptions {
  /** Type of trusted computer selection. */
  trustOption: "Unknown" | "All" | "KnownList";

  /** List of trusted computers required for the `KnownList` type of selection. */
  knownHostList?: string;
}

export interface WindowsNetworkBasedDiscoveryRule {
  /**
   * UID assigned to a network-based discovery rule.
   * @format uuid
   */
  instanceUid?: string;

  /** Network settings. */
  networks: DiscoveryRuleNetwork[];

  /** Resource representation of the related Windows discovery rule entity. */
  _embedded?: EmbeddedForWindowsDiscoveryRuleChildren;
}

export interface LinuxNetworkBasedDiscoveryRule {
  /**
   * UID assigned to a network-based discovery rule.
   * @format uuid
   */
  instanceUid?: string;

  /** Network settings. */
  networks: DiscoveryRuleNetwork[];

  /** Resource representation of the related Linux discovery rule entity. */
  _embedded?: EmbeddedForLinuxDiscoveryRuleChildren;
}

/**
 * @example {"name":"Windows Network Rule","masterAgentUid":"0470c47d-fd2e-4bf5-903d-8a78542e9239","networks":[{"networkName":"Production","firstIp":"172.17.53.1","lastIp":"172.17.53.50","trustOptions":null}],"useMasterManagementAgentCredentials":true,"accessAccount":{"userName":".\\administrator","password":"Password1"},"filter":{"exclusionMask":["string"],"ignoreInaccessibleMachine":true,"osTypes":["WindowsServer"],"applications":["MicrosoftExchangeServer"],"customApplication":null,"platforms":["MicrosoftHyperVandVmWareVSpere"]},"notificationSettings":{"isEnabled":true,"scheduleType":"Days","scheduleTime":"08:00","scheduleDay":"Sunday","to":"administrator@mycompany.com","subject":"VSPC Discovery Results","notifyOnTheFirstRun":false},"deploymentSettings":{"isEnabled":true,"backupPolicyUid":"c948986f-e275-4eb1-9678-4aae8a6d3925","setReadOnlyAccess":true,"backupAgentSettings":{"backupAgentUid":"00000000-0000-0000-0000-000000000000","disableScheduledBackups":true,"disableControlPanelNotification":true,"disableBackupOverMeteredConnection":true,"disableScheduleWakeup":true,"throttleBackupActivity":true,"restrictVpnConnections":true,"limitBandwidthConsumption":true,"bandwidthSpeedLimit":2,"bandwidthSpeedLimitUnit":"MbitPerSec","flrWithoutAdminPrivilegesAllowed":true}},"scheduleSettings":{"scheduleType":"NotScheduled","timeZone":null,"dailyScheduleSettings":null,"monthlyScheduleSettings":null,"periodicalScheduleSettings":null}}
 */
export interface WindowsNetworkBasedDiscoveryRuleInput {
  /**
   * Name of a network-based discovery rule.
   * @pattern ^[^\<\>\=\%\~]+$
   */
  name: string;

  /**
   * UID assigned to a master agent.
   * @format uuid
   */
  masterAgentUid: string;

  /** Range of IP addresses. */
  networks: DiscoveryRuleNetwork[];

  /** Use credentials specified in the master management agent configuration */
  useMasterManagementAgentCredentials?: boolean;

  /** Credentials of an account with Local Administrator permissions on discovered computers. */
  accessAccount: DiscoveryRuleCredentials;

  /** Discovery filter. */
  filter?: DiscoveryRuleFilter;

  /** Settings configured for email notifications about discovery results. */
  notificationSettings?: DiscoveryRuleNotificationSettings;

  /** Settings configured for Veeam backup agent deployment. */
  deploymentSettings?: WindowsDiscoveryRuleDeploymentSettings;

  /** Discovery scheduling settings. */
  scheduleSettings?: DiscoveryRuleScheduleSettings;
}

/**
 * @example {"name":"Linux Network Rule","masterAgentUid":"1ae4ef20-c191-4ddf-bf79-90d24aff6e59","networks":[{"networkName":"netw","firstIp":"172.25.48.41","lastIp":"172.25.48.60","trustOptions":{"trustOption":"KnownList","knownHostList":"srv4"}}],"credentials":[{"username":"root","password":"Password1","priority":0,"description":"Network-based rule for Linux computers","sshPort":22,"elevateAccountPrivileges":true,"addAccountToSudoersFile":true,"useSuIfsudoFails":true,"rootPassword":"Password1","sshPrivateKey":"-----BEGIN RSA PRIVATE KEY-----\nMIIEogIBAAKCAQEArVMvwKOymfth5E0wq38d7svfmLVsVAHtIJYMlJBTx6Y+R2+3\nDcAqVLZG9neFJU2ivudafbZnu1TykuM0sKRXRix+cpMUGevoY026m6lo0s7m3ft9\nF5oOrr1LefsSadI7MTRhCPrHBKt+G9taMhovnGHq/8JzUflX2k1v7Sjy+zhJzpGW\nmJckhHZ+Jyd28JCdAWNiSEZgoEKGdLBL8/nkEm8Su4SRRKiTxRSbHtof+tUjIdoL\ntmdT9CiYM11eb46GMV8haaDEwpd0pL7iWZfXIo6ZZcKZ60JU70tYmz69JaYfVOLb\nasaI3ng22dzmt89Kk4C1i0ueVMH3WE7MvndpzwIBJQKCAQAODantBlqW3Qfv6pU+\nVmo19NrHMU34+Ty9c/Muo+seBo9tk2+1Ab4+OErxY6MDBkt3QzDZwq52+Qy/zTuf\nnp9K4QNVZd8JBUoxkK5D+PqpTwvMzzOn97wAVImURMokQXprxfoHpaFvFNLfqgBk\n7V3OaM3dYssUfAA0S3fHHv7xxijIfW/F4EKGk7B1+WX1LIoka4OF3fRtktqlv0xV\nIDG1YqugiwEHL2cxVHmviqJOfP496JKzz9TXS6TMWbRThykQjXf8irOfQsAbjmuO\nFFp+FCK8XITKuS9tBinpKpsUZoLiZ3r+uAO3gVWutdsdrJChYP87+Aaj82PWr+tv\nfSNlAoGBAOynYVyFklx597Yg4jdVg6+TEMlQ8Ga4TK6Iba8NzGPt6qRq1UeRninF\ncw7jIVojtqdqzKnnm+d5Ri4tS5rjLJjTwyePpR5HU3mwlDCpaJIS0XUptNOwwqso\n9Y/a92iwzAMA1Z4s3q+ye2tinP0WZb1B7RxMjrBNOuswnv3An7BFAoGBALt+eoI1\nNujkC/JXQVYgkkWtJJgu+d314qSate929cW8w37p/OevwcafOlocCvQPGOa7g6XP\nyCtw6CQtv2jbiZ2RddyvTP8kYg71o4MtND5SGiJ+Q2B2PmDbCcPZ5IZ5PyNru6Wj\nClX/bFVh0lszbpWLPKKwdJwhd+d6i3dJewUDAoGBALMW4eUmz5/tmNzanVpOjSrr\n1VoTvNgcxGhnPj9Itll1xlLpEBp8CP0EH7g9Lf8GRQkSjQr0dftHBK1StcFR+DxN\nOb0SwiTAWtihTYyb4G6KyAWjBWHtjGXZzpZgg+CFytHXHjKC0ghrZFFDtRKNfWyg\nl8JjcuZISENHY4+YsDJdAoGAfq9niGklGeYxleft4D+FbVlQE8y2qrrlPslmLC3I\nqDNvVcCxzPo20k/pKCDJIXH8EYWeI+1CD4OjxWsEyk8lodD8nAe+ZzRCQXWKKDNM\n0Cmi9LYthl27ceAbWtF+u7m1ChhcMaWDhjb2K9pP3MHi72vqsx1H3x2IXiJeO9ez\n/HcCgYEAvbcMG79y8Io4lm+c/emqnIPIL0fyrwo7SJ9qdojN63IV3YtQvct+V/Za\nOnLVizuPAye0Bk2qbc4nSt9Jj+E3PrOrZCyEtdQHwT90WM5fzb5OOk6sIwMJaajn\nY6mMXL0VW0XYI6PhfFPdwKhi2nPP07VzN302VWxTI3HeNT7Hg6A=\n-----END RSA PRIVATE KEY-----\n","passphrase":"","type":"LinuxCertificate"}],"filter":{"exclusionMask":[],"ignoreInaccessibleMachine":true,"osTypes":["Debian","Ubuntu"],"applications":[],"customApplication":null,"platforms":["MicrosoftHyperVandVmWareVSpere","Physical"]},"notificationSettings":{"isEnabled":true,"scheduleType":"Weeks","scheduleTime":"05:00","scheduleDay":"Monday","to":"admin@mycompany.com","subject":"Linux Discovery","notifyOnTheFirstRun":false},"deploymentSettings":{"isEnabled":false,"backupPolicyUid":null,"setReadOnlyAccess":true},"scheduleSettings":{"scheduleType":"NotScheduled","timeZone":null,"dailyScheduleSettings":null,"monthlyScheduleSettings":null,"periodicalScheduleSettings":null}}
 */
export interface LinuxNetworkBasedDiscoveryRuleInput {
  /**
   * Name of a network-based discovery rule.
   * @pattern ^[^\<\>\=\%\~]+$
   */
  name: string;

  /**
   * UID assigned to a master agent.
   * @format uuid
   */
  masterAgentUid: string;

  /** Range of IP addresses. */
  networks: DiscoveryRuleNetwork[];

  /** Credentials to connect discovered computers. */
  credentials: LinuxDiscoveryCredentialsInput[];

  /** Discovery filter. */
  filter?: DiscoveryRuleFilter;

  /** Settings configured for email notifications about discovery results. */
  notificationSettings?: DiscoveryRuleNotificationSettings;

  /** Settings configured for Veeam backup agent deployment. */
  deploymentSettings?: LinuxDiscoveryRuleDeploymentSettings;

  /** Discovery scheduling settings. */
  scheduleSettings?: DiscoveryRuleScheduleSettings;
}

export interface WindowsCustomDiscoveryRule {
  /**
   * UID assigned to a custom discovery rule.
   * @format uuid
   */
  instanceUid?: string;

  /** Array of IP addresses or DNS names of computers on which Veeam backup agent is deployed. */
  hosts: string[];

  /** Resource representation of the related Windows discovery rule entity. */
  _embedded?: EmbeddedForWindowsDiscoveryRuleChildren;
}

export interface LinuxCustomDiscoveryRule {
  /**
   * UID assigned to a custom discovery rule.
   * @format uuid
   */
  instanceUid?: string;

  /** Array of IP addresses or DNS names of computers on which Veeam backup agent is deployed. */
  hosts: string[];

  /** Resource representation of the related Linux discovery rule entity. */
  _embedded?: EmbeddedForLinuxDiscoveryRuleChildren;
}

/**
 * @example {"name":"Complex Custom Rule","masterAgentUid":"0470c47d-fd2e-4bf5-903d-8a78542e9239","hosts":["vaw2.hv1.tech.local","172.16.21.161"],"useMasterManagementAgentCredentials":true,"accessAccount":{"userName":".\\administrator","password":"Password1"},"filter":{"exclusionMask":["string"],"ignoreInaccessibleMachine":true,"osTypes":["WindowsServer","WindowsWorkstation"],"applications":["MicrosoftExchangeServer"],"customApplication":null,"platforms":["MicrosoftHyperVandVmWareVSpere"]},"notificationSettings":{"isEnabled":true,"scheduleType":"Days","scheduleTime":"08:00","scheduleDay":"Sunday","to":"administrator@mycompany.com","subject":"VSPC Discovery Results","notifyOnTheFirstRun":false},"deploymentSettings":{"isEnabled":true,"backupPolicyUid":"c948986f-e275-4eb1-9678-4aae8a6d3925","setReadOnlyAccess":true,"backupAgentSettings":{"backupAgentUid":"00000000-0000-0000-0000-000000000000","disableScheduledBackups":true,"disableControlPanelNotification":true,"disableBackupOverMeteredConnection":true,"disableScheduleWakeup":true,"throttleBackupActivity":true,"restrictVpnConnections":true,"limitBandwidthConsumption":true,"bandwidthSpeedLimit":2,"bandwidthSpeedLimitUnit":"MbitPerSec","flrWithoutAdminPrivilegesAllowed":true}},"scheduleSettings":{"scheduleType":"NotScheduled","timeZone":null,"dailyScheduleSettings":null,"monthlyScheduleSettings":null,"periodicalScheduleSettings":null}}
 */
export interface WindowsCustomDiscoveryRuleInput {
  /**
   * Name of a discovery rule.
   * @pattern ^[^\<\>\=\%\~]+$
   */
  name: string;

  /**
   * UID assigned to a management agent.
   * @format uuid
   */
  masterAgentUid: string;

  /** Array of IP addresses or DNS names of computers on which Veeam backup agent is deployed. */
  hosts: string[];

  /** Use credentials specified in the master management agent configuration */
  useMasterManagementAgentCredentials?: boolean;

  /** Credentials of an account with Local Administrator permissions on discovered computers. */
  accessAccount: DiscoveryRuleCredentials;

  /** Discovery filter. */
  filter?: DiscoveryRuleFilter;

  /** Settings configured for email notifications about discovery results. */
  notificationSettings?: DiscoveryRuleNotificationSettings;

  /** Settings configured for Veeam backup agent deployment. */
  deploymentSettings?: WindowsDiscoveryRuleDeploymentSettings;

  /** Discovery scheduling settings. */
  scheduleSettings?: DiscoveryRuleScheduleSettings;
}

/**
 * @example {"name":"Simple Linux Custom Rule","masterAgentUid":"1ae4ef20-c191-4ddf-bf79-90d24aff6e59","hosts":["srv2"],"credentials":[{"username":"root","password":"Password1","priority":0,"description":null,"sshPort":22,"elevateAccountPrivileges":false,"addAccountToSudoersFile":false,"useSuIfsudoFails":false,"rootPassword":"1","sshPrivateKey":null,"passphrase":null,"type":"LinuxBased"}],"filter":null,"notificationSettings":null,"deploymentSettings":null,"scheduleSettings":{"scheduleType":"NotScheduled","timeZone":null,"dailyScheduleSettings":null,"monthlyScheduleSettings":null,"periodicalScheduleSettings":null}}
 */
export interface LinuxCustomDiscoveryRuleInput {
  /**
   * Name of a discovery rule.
   * @pattern ^[^\<\>\=\%\~]+$
   */
  name: string;

  /**
   * UID assigned to a management agent.
   * @format uuid
   */
  masterAgentUid: string;

  /** Array of IP addresses or DNS names of computers on which Veeam Agent for Linux is deployed. */
  hosts: string[];

  /** Credentials to connect discovered computers. */
  credentials: LinuxDiscoveryCredentialsInput[];

  /** Discovery filter. */
  filter?: DiscoveryRuleFilter;

  /** Settings configured for email notifications about discovery results. */
  notificationSettings?: DiscoveryRuleNotificationSettings;

  /** Settings configured for Veeam backup agent deployment. */
  deploymentSettings?: LinuxDiscoveryRuleDeploymentSettings;

  /** Discovery scheduling settings. */
  scheduleSettings?: DiscoveryRuleScheduleSettings;
}

export interface WindowsActiveDirectoryBasedDiscoveryRule {
  /**
   * UID assigned to an Active Directory discovery rule.
   * @format uuid
   */
  instanceUid?: string;

  /** LDAP query that returns a list of computers to scan. */
  customQuery?: string;

  /** Active Directory discovery method. */
  adMethod: "Unknown" | "Search" | "Query" | "Custom";

  /**
   * Number of days for which offline computers are skipped from discovery.
   * @format int32
   */
  skipOfflineComputersDays?: number;

  /** Resource representation of the related Windows discovery rule entity. */
  _embedded?: EmbeddedForWindowsDiscoveryRuleChildren;
}

/**
 * @example {"name":"Alpha AD Rule","masterAgentUid":"0470c47d-fd2e-4bf5-903d-8a78542e9239","skipOfflineComputersDays":45,"customQuery":"OU=auto, DC=n, DC=local","adMethod":"Query","useMasterManagementAgentCredentials":true,"accessAccount":{"userName":"alpha\\administrator","password":"Password1"},"filter":{"exclusionMask":["string"],"ignoreInaccessibleMachine":true,"osTypes":["WindowsServer"],"applications":["MicrosoftExchangeServer","MicrosoftActiveDirectory"],"customApplication":null,"platforms":["MicrosoftHyperVandVmWareVSpere"]},"notificationSettings":{"isEnabled":true,"scheduleType":"Days","scheduleTime":"08:00","scheduleDay":"Sunday","to":"administrator@vspc.com","subject":"VSPC Discovery Results","notifyOnTheFirstRun":false},"deploymentSettings":{"isEnabled":true,"backupPolicyUid":"c948986f-e275-4eb1-9678-4aae8a6d3925","setReadOnlyAccess":true,"backupAgentSettings":{"backupAgentUid":"00000000-0000-0000-0000-000000000000","disableScheduledBackups":true,"disableControlPanelNotification":true,"disableBackupOverMeteredConnection":true,"disableScheduleWakeup":true,"throttleBackupActivity":true,"restrictVpnConnections":true,"limitBandwidthConsumption":false,"bandwidthSpeedLimit":2,"bandwidthSpeedLimitUnit":"MbitPerSec","flrWithoutAdminPrivilegesAllowed":true}},"scheduleSettings":{"scheduleType":"NotScheduled","timeZone":null,"dailyScheduleSettings":null,"monthlyScheduleSettings":null,"periodicalScheduleSettings":null}}
 */
export interface WindowsActiveDirectoryBasedDiscoveryRuleInput {
  /**
   * Name of an Active Directory discovery rule.
   * @pattern ^[^\<\>\=\%\~]+$
   */
  name: string;

  /**
   * UID assigned to a master agent.
   * @format uuid
   */
  masterAgentUid: string;

  /**
   * Number of days for which offline computers are skipped from discovery.
   * @format int32
   */
  skipOfflineComputersDays?: number;

  /** LDAP query that returns a list of computers to scan. */
  customQuery?: string;

  /** Active Directory discovery method. */
  adMethod: "Unknown" | "Search" | "Query" | "Custom";

  /** Use credentials specified in the master management agent configuration */
  useMasterManagementAgentCredentials?: boolean;

  /** Credentials of an account with Local Administrator permissions on discovered computers. */
  accessAccount: DiscoveryRuleCredentials;

  /** Discovery filter. */
  filter?: DiscoveryRuleFilter;

  /** Settings configured for email notifications about discovery results. */
  notificationSettings?: DiscoveryRuleNotificationSettings;

  /** Settings configured for Veeam backup agent deployment. */
  deploymentSettings?: WindowsDiscoveryRuleDeploymentSettings;

  /** Discovery scheduling settings. */
  scheduleSettings?: DiscoveryRuleScheduleSettings;
}

/**
 * @example {"isEnabled":true,"scheduleType":"Days","scheduleTime":"12:30","scheduleDay":"Sunday","to":"administrator@vac.com","subject":"VSPC Discovery Results","notifyOnTheFirstRun":false}
 */
export interface DiscoveryRuleNotificationSettings {
  /** Indicates whether notifications about discovery results are enabled. */
  isEnabled?: boolean;

  /** Notification frequency. */
  scheduleType: "Days" | "Weeks";

  /**
   * Time at which notifications must are sent.
   * @format time-of-day
   */
  scheduleTime?: string;

  /** Day at which notifications must are sent. */
  scheduleDay?: "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";

  /** Email address at which notifications must be sent. */
  to?: string;

  /**
   * Subject of a notification message.
   * @pattern ^[^\<\>\=\%\~]+$
   */
  subject?: string;

  /** Indicates whether a notification must be sent on the first  */
  notifyOnTheFirstRun?: boolean;
}

export interface WindowsDiscoveryRuleDeploymentSettings {
  /** Indicates whether Veeam backup agent is automatically installed on computers as part of discovery. */
  isEnabled?: boolean;

  /**
   * UID of a discovery rule that must be assigned after Veeam Agent for Microsoft Windows installation.
   * @format uuid
   */
  backupPolicyUid?: string;

  /** Indicates whether the read-only access mode is enabled for Veeam Agent for Microsoft Windows. */
  setReadOnlyAccess?: boolean;

  /** Veeam backup agent settings. */
  backupAgentSettings?: BackupAgentSettings;
}

export interface LinuxDiscoveryRuleDeploymentSettings {
  /** Indicates whether Veeam backup agent is automatically installed on computers as part of discovery. */
  isEnabled?: boolean;

  /**
   * UID of a discovery rule that must be assigned after installation.
   * @format uuid
   */
  backupPolicyUid?: string;

  /** Indicates whether the read-only access mode is enabled for Veeam Agent for Linux. */
  setReadOnlyAccess?: boolean;
}

export interface DiscoveredComputer {
  /**
   * UID assigned to a discovered computer.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a rule used to discover a computer.
   * @format uuid
   */
  ruleUid?: string;

  /**
   * UID assigned to a management agent installed on a discovered computer.
   * @format uuid
   */
  managementAgentUid?: string;

  /**
   * Date and time when a computer was discovered.
   * @format date-time
   */
  discoveredTime?: string;

  /** Status of Veeam backup agent installation on a discovered computer. */
  backupAgentInstallationStatus?: "Unknown" | "Installed" | "NotInstalled";

  /**
   * Computer connection status.
   * > If management agent is not installed on the computer, the connection status does not change after discovery.'
   *
   */
  status?: "Unknown" | "Online" | "Offline" | "Error";

  /** Veeam backup agent version. */
  backupAgentVersion?: string;

  /** Veeam backup agent management status. */
  backupAgentManagementStatus?: "Unknown" | "UnManaged" | "ManagedByVBR" | "ManagedByConsole";

  /** Information about a discovered computer. */
  info?: ComputerInfo;
}

export interface AutoDeploymentSettings {
  /**
   * UID assigned to an organization that manages Veeam backup agent auto deployment.
   * @format uuid
   */
  organizationUid?: string;

  /** Indicates whether auto deployment is enabled. */
  isEnabled?: boolean;

  /**
   * UID of a backup policy that must be assigned to a Veeam Agent for Microsoft Windows.
   * @format uuid
   */
  windowsBackupPolicyUid?: string;

  /**
   * UID of a backup policy that must be assigned to a Veeam Agent for Linux.
   * @format uuid
   */
  linuxBackupPolicyUid?: string;

  /**
   * UID of a backup policy that must be assigned to a Veeam Agent for Mac.
   * @format uuid
   */
  macBackupPolicyUid?: string;

  /** Indicates whether retry is enabled in case deployment session fails. */
  isRetryEnabled?: boolean;

  /**
   * Number of allowed retries.
   * @format int32
   */
  retryCount?: number;

  /**
   * Time interval in minutes after which the next deployment attempt starts.
   * @format int32
   */
  retryInterval?: number;

  /** Indicates whether Veeam Service Provider Console accepts connections from new management agents. */
  acceptNewConnections?: boolean;

  /** Indicates whether CBT driver is installed during auto deployment. */
  installDriver?: boolean;

  /** Indicates whether the read-only access mode is enabled for Veeam backup agent. */
  setReadOnlyAccess?: boolean;

  /** Veeam backup agent settings. */
  backupAgentSettings?: BackupAgentSettings;
}

export interface About {
  /**
   * UID assigned to a Veeam Service Provider Console unique installation type.
   * @format uuid
   */
  installationId?: string;

  /**
   * Date of Veeam Service Provider Console installation.
   * @format date-time
   */
  installationDate?: string;

  /** Current version of Veeam Agent for Windows. */
  actualVawVersion?: string;

  /** Current version of Veeam Agent for Linux. */
  actualValVersion?: string;

  /** Current version of Veeam Agent for Mac. */
  actualVamVersion?: string;

  /** Veeam Service Provider Console Server version. */
  serverVersion?: string;

  /** Management agent version. */
  managementAgentVersion?: string;
}

export interface BackupAgentAssignedBackupPolicy {
  /**
   * UID assigned to a backup policy configuration.
   * @format uuid
   */
  configUid?: string;

  /**
   * UID assigned to a Veeam backup agent.
   * @format uuid
   */
  backupAgentUid?: string;

  /**
   * UID assigned to a backup policy.
   * @format uuid
   */
  backupPolicyUid?: string;

  /** Status of the policy assignment. */
  status?: "Unknown" | "Applying" | "Applied" | "Warning" | "Failed" | "Removing";

  /** Indicates whether a backup policy is custom. */
  isCustom?: boolean;

  /** Indicates whether a newer revision of a backup policy exists that has not been assigned to an agent. */
  isOutOfDate?: boolean;

  /** Message that is displayed in case backup policy assignment fails. */
  backupPolicyFailureMessage?: string;

  /**
   * Revision of a backup policy.
   * @format int32
   */
  backupPolicyRevision?: number;

  /**
   * Date of the policy assignment.
   * > If the backup policy is assigned to a Linux or Mac computer, the value of this property is `null`.
   *
   * @format date-time
   */
  assignedDate?: string;

  /**
   * Organization or user who assigned a backup policy.
   * > If the backup policy is assigned to a Linux or Mac computer, the value of this property is `null`.
   *
   */
  assignedBy?: string;
}

export interface UserLogin {
  /**
   * System ID assigned to a user identity.
   * @format int64
   */
  id: number;

  /**
   * UID assigned to a user.
   * @format uuid
   */
  userUid: string;

  /** Username. */
  userName?: string;

  /**
   * UID assigned to a user company.
   * @format uuid
   */
  companyId?: string;

  /** Name of a user company. */
  companyName?: string;

  /** Name of an identity provider that manages user identity. */
  identityProviderName: string;

  /** Description of a user identity. */
  description: string;

  /** Indicates whether a user identity has the read-only access. */
  isReadAccessOnly: boolean;

  /** Services that are available to the user identity. */
  scopes?: ("unknown" | "integration" | "rest" | "ui")[];

  /**
   * User identity status.
   * > You can change status to `enabled` or `disabled` using the PATCH method.
   *
   */
  status:
  | "Unknown"
  | "enabled"
  | "disabled"
  | "disabledDueToUser"
  | "disabledDueToCompany"
  | "disabledDueToSystem"
  | "disabledDueSystemComponentsRestrictions";

  /** Parameters of a user identity. */
  parameters?: string;

  /** Provided identity. */
  identifierInProvider: string;

  /**
   * Date and time of identity creation.
   * @format date-time
   */
  creationDate?: string;
}

export interface RsaKeyPair {
  /** Private key. */
  privateKey: string;

  /** Public key. */
  publicKey: string;
}

export interface TotpSecret {
  /** TOTP secret encoded in the Base 32 format. */
  secret: string;

  /** URL encoded secret for authentication applications. */
  secretUrl: string;
}

export interface AsymmetricAlgorithmChallenge {
  /**
   * Decryption challenge.
   * @format binary
   */
  challenge: File;

  /**
   * Date and time when a challenge will expire.
   * @format date-time
   */
  expirationTime: string;
}

export interface OAuth2Result {
  /** Access token. */
  access_token?: string;

  /** Token type. */
  token_type?: string;

  /** Refresh token. */
  refresh_token?: string;

  /** MFA token. */
  mfa_token?: string;

  /** Encrypted authorization code. */
  encrypted_code?: string;

  /**
   * Date and time when an access token will expire.
   * @format int32
   */
  expires_in?: number;
}

/**
 * @example {"error":"invalid_request","error_description":"Cannot complete login due to incorrect username or password, or no sufficient rights.","error_uri":null}
 */
export interface OAuth2Error {
  /** Error type. */
  error?:
  | "invalid_request"
  | "invalid_client"
  | "invalid_grant"
  | "unauthorized_client"
  | "unsupported_grant_type"
  | "invalid_scope";

  /** Error description. */
  error_description?: string;

  /** Error URI. */
  error_uri?: string;
}

export interface AuthenticationResult {
  /** Access token. */
  accessToken?: string;

  /** Refresh token. */
  refreshToken?: string;

  /** Multi-factor authentication token. */
  mfaToken?: string;

  /**
   * Date and time when access token will expire.
   * @format date-time
   */
  expirationTime?: string;
}

export interface User {
  /**
   * UID assigned to a user.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a user organization.
   * @format uuid
   */
  organizationUid?: string;

  /** Username. */
  userName?: string;

  /** User status. */
  status?: "Unknown" | "Enabled" | "Disabled";

  /** User MFA policy status. */
  mfaPolicyStatus?: "Unknown" | "Disabled" | "Enabled" | "EnabledByInheritance";

  /** Status of user MFA policy configuration. */
  mfaPolicyConfigurationStatus?: "Unknown" | "NotConfigured" | "Configured";

  /** User role. */
  role:
  | "Unknown"
  | "PortalAdministrator"
  | "PortalOperator"
  | "PortalReadonlyOperator"
  | "SiteAdministrator"
  | "CompanyLocationAdministrator"
  | "CompanyLocationUser"
  | "CompanyOwner"
  | "CompanyAdministrator"
  | "CompanyInvoiceAuditor"
  | "CompanySubtenant"
  | "ResellerOwner"
  | "ResellerOperator"
  | "ResellerUser"
  | "ResellerInvoiceAuditor"
  | "ResellerAdministrator";

  /** User profile. */
  profile: UserProfile;

  /** User credentials. */
  credentials?: CredentialsInfo;
}

/**
 * @example {"firstName":"Mark","lastName":"Brown","title":"Mr","status":"Enabled","email":"mark.brown@delta.com","address":"90 West Broad St Columbus OH 43215","phone":"(524) 745-5371"}
 */
export interface UserProfile {
  /** User first name. */
  firstName?: string;

  /** User last name. */
  lastName?: string;

  /** User title. */
  title?: "Unknown" | "Mr" | "Miss" | "Mrs" | "Ms";

  /**
   * User email address.
   * @pattern ^(")?(?:[^\."])(?:(?:[\.])?(?:[\w\-!#$%&'*+\/=?\^_`{|}~]))*\1@(\w[\-\w]*\.){1,5}([A-Za-z]){2,6}$
   */
  email?: string;

  /** Address of a user or user organization. */
  address?: string;

  /** Telephone number of a user or user organization. */
  phone?: string;
}

/**
 * @example {"instanceUid":"00000000-0000-0000-0000-000000000000","organizationUid":"0fe1c027-e6b0-419a-8606-0ff67dd41a04","role":"CompanySubtenant","mfaPolicyStatus":"Enabled","profile":{"firstName":"John","lastName":"Brown","title":"Mr","email":"j.brown@exonco.com","address":null,"phone":"301 329 9338"},"credentials":{"userName":"subtenant","password":"P@ssw0rd"},"backupResource":{"companySiteBackupResourceUid":"e2d9aee9-fbf3-43c2-9474-74cd2154daa1","description":null,"vcdUserId":null,"resourceFriendlyName":"CloudRepo","storageQuota":1073741824,"isStorageQuotaUnlimited":false}}
 */
export interface UserInput {
  /**
   * UID assigned to a user.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to an organization.
   * @format uuid
   */
  organizationUid: string;

  /** User role in Veeam Service Provider Console. */
  role:
  | "Unknown"
  | "PortalAdministrator"
  | "PortalOperator"
  | "PortalReadonlyOperator"
  | "SiteAdministrator"
  | "CompanyLocationAdministrator"
  | "CompanyLocationUser"
  | "CompanyOwner"
  | "CompanyAdministrator"
  | "CompanyInvoiceAuditor"
  | "CompanySubtenant"
  | "ResellerOwner"
  | "ResellerOperator"
  | "ResellerUser"
  | "ResellerInvoiceAuditor"
  | "ResellerAdministrator";

  /** User MFA policy status. */
  mfaPolicyStatus?: "Unknown" | "Disabled" | "Enabled";

  /** User profile. */
  profile: UserProfile;

  /** User credentials. */
  credentials: Credentials;

  /** Backup resource configured for a subtenant account. */
  backupResource?: UserBackupResourceInput;
}

export interface UserBackupResource {
  /**
   * UID assigned to a subtenant user in Veeam Service Provider Console.
   * @format uuid
   */
  userUid?: string;

  /** Subtenant user description. */
  description?: string;

  /**
   * UID assigned to a subtenant user in Veeam Cloud Connect.
   * @format uuid
   */
  subtenantUid?: string;

  /** UID assigned to a VMware Cloud Director organization user account. */
  vcdUserId?: string;

  /**
   * UID assigned to a company backup resource.
   * @format uuid
   */
  companySiteBackupResourceUid: string;

  /** Friendly name of a subtenant backup resource. */
  resourceFriendlyName: string;

  /**
   * Subtenant quota, in bytes.
   * @format int64
   * @min 1073741824
   */
  storageQuota?: number;

  /**
   * Amount of storage space used by a subtenant, in bytes.
   * @format int64
   */
  storageQuotaUsage?: number;

  /** Indicates whether a subtenant has unlimited quota. */
  isStorageQuotaUnlimited?: boolean;
}

export interface UserBackupResourceInput {
  /**
   * UID assigned to a company site backup resource.
   * @format uuid
   */
  companySiteBackupResourceUid: string;

  /** Subtenant user description. */
  description?: string;

  /** UID assigned to a VMware Cloud Director organization user account. */
  vcdUserId?: string;

  /** Friendly name of a subtenant backup resource. */
  resourceFriendlyName: string;

  /**
   * Subtenant quota, in bytes.
   * @format int64
   * @min 1073741824
   */
  storageQuota?: number;

  /** Defines whether a subtenant has unlimited quota. */
  isStorageQuotaUnlimited?: boolean;
}

export interface SingleLicenseReport {
  /** License usage report status. */
  reportStatus?: "Unknown" | "ApprovalRequired" | "Finalization" | "Approved";

  /** Report parameters */
  reportParemeters?: LicenseReportParameters;

  /** Report summary information. */
  reportSummary?: LicenseReportSummary;

  /** Number of license points used by managed organizations. */
  organizationsUsage?: OrganizationLicenseUsage[];

  /** Array of Veeam Cloud Connect servers from which Veeam Service Provider Console could not collect the license usage data. */
  notCollectedCloudServers?: string[];

  /** Usage of licenses with the same support ID. */
  usageDetails?: OrganizationUsageOfLicensesWithSameSupportId[];

  /** Usage of licenses issued to organizations other than report owner. */
  appendices?: LicenseReportAppendix[];
}

export interface LicenseReportAppendix {
  /** Licensee company name. */
  licenseCompanyName?: string;

  /** Appendix summary information. */
  appendixSummary?: LicenseReportSummary;

  /** Number of license points used by managed organizations. */
  organizationsUsage?: OrganizationLicenseUsage[];

  /** Array of Veeam Cloud Connect servers from which Veeam Service Provider Console could not collect the license usage data. */
  notCollectedCloudServers?: string[];

  /** Array of cloned Veeam Cloud Connect servers. */
  clonedCloudServers?: string[];

  /** Detailed information about license usage. */
  usageDetails?: OrganizationUsageOfLicensesWithSameSupportId[];
}

export interface OrganizationUsageOfLicensesWithSameSupportId {
  /** Organization name. */
  organizationName?: string;

  /**
   * UID assigned to an organization.
   * @format uuid
   */
  organizationUid?: string;

  /**
   * UID assigned to a tenant.
   * > For resellers the property value is `null`.
   *
   * @format uuid
   */
  tenantUid?: string;

  /** License support ID. */
  supportId?: string;

  /** Array of client servers from which Veeam Service Provider Console could not collect the license usage data. */
  notCollectedClientServers?: string[];

  /** Array of cloned client servers. */
  clonedClientServers?: string[];

  /** License usage for each license and product. */
  usageByLicenseAndProduct?: ProductLicenseUsage[];
}

export interface ProductLicenseUsage {
  /** License ID. */
  licenseId?: string;

  /** Product type. */
  productType?: "Unknown" | "EnterpriseManager" | "BackupAndReplication" | "CloudConnect" | "VSPC" | "VONE" | "VBM365";

  /** License edition. */
  licenseEdition?: string;

  /**
   * Number of license points used by an organization.
   * @format double
   */
  usedPoints?: number;

  /** License usage for each workload type. */
  workloadUsage?: WorkloadLicenseUsage[];
}

export interface OrganizationLicenseUsage {
  /** Organization type. */
  organizationType?: "Unknown" | "Company" | "Reseller";

  /** Organization name. */
  organizationName?: string;

  /**
   * UID assigned to an organization.
   * @format uuid
   */
  organizationUid?: string;

  /**
   * UID assigned to a tenant.
   * > For resellers the property value is `null`.
   *
   * @format uuid
   */
  tenantUid?: string;

  /**
   * Number of license points used by an organization.
   * @format double
   */
  usedPoints?: number;
}

export interface LicenseReportSummary {
  /**
   * Number of report owner license points used by managed organizations.
   * @format double
   */
  totalPoints: number;

  /** License usage for each product. */
  productsUsage: TotalProductLicenseUsage[];
}

export interface TotalProductLicenseUsage {
  /** Product type. */
  productType?: "Unknown" | "EnterpriseManager" | "BackupAndReplication" | "CloudConnect" | "VSPC" | "VONE" | "VBM365";

  /**
   * Number of used license points.
   * @format double
   */
  totalPoints?: number;

  /** License edition. */
  licenseEdition?: string;

  /** License usage for each workload type. */
  workloadUsage?: WorkloadLicenseUsage[];
}

export interface WorkloadLicenseUsage {
  /** Workload type. */
  workloadType?:
  | "Unknown"
  | "VBR_VM"
  | "VBR_Cloud_VM"
  | "VAC_Workstation_Agent"
  | "VAC_Server_Agent"
  | "VBR_Workstation_Agent"
  | "VBR_Server_Agent"
  | "VBR_Application_Plugins"
  | "VBR_NAS_Backup"
  | "CC_VM_Backup"
  | "CC_Workstation_Backup"
  | "CC_Server_Backup"
  | "CC_VM_Replica"
  | "VONE_VM"
  | "VONE_Cloud_VM"
  | "VONE_Workstation_Agent"
  | "VONE_Server_Agent"
  | "VONE_Nas_Backup"
  | "VBM365_User";

  /**
   * Number of managed agents.
   * @format int32
   */
  initialCount?: number;

  /**
   * Number of managed agents after report finalization.
   * @format int32
   */
  reportedCount?: number;

  /**
   * Number of managed agents that were activated within the current calendar month.
   * @format int32
   */
  newCount?: number;

  /**
   * Number of points a single workload uses.
   * @format double
   */
  weight?: number;

  /**
   * Number of points used by all managed agents of the same type.
   * @format double
   */
  usedPoints?: number;
}

export interface LicenseReportParameters {
  /**
   * Report ID.
   * @format int32
   */
  reportId: number;

  /** Name of a report owner organization. */
  organizationName: string;

  /**
   * UID assigned to a report owner organization.
   * @format uuid
   */
  organizationUid: string;

  /** Name of a licensee organization. */
  licenseCompanyName: string;

  /**
   * Date of report generation.
   * @format date
   */
  generationDate: string;

  /** Reporting interval. */
  reportInterval: LicenseReportInterval;
}

export interface LicenseReportInterval {
  /**
   * Start date of reporting interval.
   * @format date
   */
  startOfInterval: string;

  /**
   * End date of reporting interval.
   * @format date
   */
  endOfInterval: string;
}

export interface SingleLicenseReportSettings {
  /** Indicates whether reports are approved automatically. */
  autoApprove: boolean;
}

export interface LicenseReportFinalizationStatus {
  /** Report finalization status. */
  reportApprovalStatus: "Unknown" | "NotApproved" | "Approved" | "Finalized" | "Finalization" | "NotApprovable";

  /** Message. */
  message: string;
}

export interface CloudLicenseCounter {
  /** License type. */
  type: "Unknown" | "CC_Server_Backup" | "CC_Workstation_Backup" | "CC_VM_Backup" | "CC_VM_Replica";

  /** License unit type. */
  unitType: "Unknown" | "Instances" | "Points";

  /**
   * Number of units with rental licenses installed.
   * @format double
   */
  rentalUnits: number;

  /**
   * Number of units that were activated within the current calendar month.
   * @format double
   */
  newUnits: number;

  /**
   * Number of units that have licenses assigned and are fully managed by Veeam Service Provider Console.
   * @format double
   */
  usedUnits: number;

  /**
   * Number of objects with rental licenses installed.
   * @format int32
   */
  rentalCount: number;

  /**
   * Number of objects that were activated within the current calendar month.
   * @format int32
   */
  newCount: number;

  /**
   * Number of objects that have licenses assigned and are fully managed by Veeam Service Provider Console.
   * @format int32
   */
  usedCount: number;
}

export interface CompanyCloudLicenseUsage {
  /**
   * UID assigned to a company.
   * @format uuid
   */
  companyUid: string;

  /**
   * UID assigned to a tenant.
   * @format uuid
   */
  tenantUid: string;

  /** License usage counters. */
  counters: CloudLicenseCounter[];
}

export interface SiteCloudLicenseUsage {
  /**
   * UID assigned to a Veeam Backup & Replication installation.
   * @format uuid
   */
  installationId: string;

  /**
   * UID assigned to a site.
   * @format uuid
   */
  siteUid: string;

  /** ID assigned to a license. */
  licenseId: string;

  /** License usage counters. */
  counters: CloudLicenseCounter[];
}

export interface CompanyBackupServerLicenseUsage {
  /**
   * UID assigned to a company.
   * @format uuid
   */
  companyUid: string;

  /**
   * UID assigned to a tenant.
   * @format uuid
   */
  tenantUid: string;

  /** License usage counters. */
  counters: BackupServerLicenseCounter[];
}

export interface BackupServerLicenseUsage {
  /**
   * UID assigned to a Veeam Backup & Replication server.
   * @format uuid
   */
  backupServerUid: string;

  /**
   * UID assigned to a Veeam Backup & Replication installation.
   * @format uuid
   */
  installationId: string;

  /** License usage counters. */
  counters: BackupServerLicenseCounter[];
}

export interface BackupServerLicenseCounter {
  /** License type. */
  type:
  | "Unknown"
  | "VBR_vSphere_VM"
  | "VBR_HyperV_VM"
  | "VBR_AHV_VM"
  | "VBR_NAS_Backup"
  | "VBR_Cloud_VM"
  | "VBR_Application_Plugins"
  | "VBR_Server_Agent"
  | "VBR_Workstation_Agent"
  | "VBR_RHV_VM";

  /** License unit type. */
  unitType: "Unknown" | "Instances" | "Points";

  /**
   * Number of units that were activated within the current calendar month.
   * @format double
   */
  newUnits: number;

  /**
   * Number of units that have licenses assigned and are fully managed by Veeam Service Provider Console.
   * @format double
   */
  usedUnits: number;

  /**
   * Number of objects that were activated within the current calendar month.
   * @format int32
   */
  newCount: number;

  /**
   * Number of objects that have licenses assigned and are fully managed by Veeam Service Provider Console.
   * @format int32
   */
  usedCount: number;
}

export interface VOneServerLicense {
  /**
   * UID assigned to a Veeam ONE server.
   * @format uuid
   */
  vOneServerUid?: string;

  /** Indicates whether license updates automatically. */
  autoUpdateEnabled: boolean;

  /** Name of an organization to which a licensed server belongs. */
  company?: string;

  /** Email address of an organization to which a licensed server belongs. */
  email?: string;

  /**
   * License expiration date and time.
   * @format date-time
   */
  expirationDate?: string;

  /**
   * Support expiration date and time.
   * @format date-time
   */
  supportExpirationDate?: string;

  /**
   * License ID.
   * @format uuid
   */
  licenseId?: string;

  /** License ID required to contact Veeam Support. */
  supportId?: string;

  /** Current status of the license. */
  status?: "Unknown" | "Valid" | "Warning" | "Error" | "Expired" | "Unlicensed";

  /** Status message. */
  statusMessage?: string;

  /**
   * Number of licensed sockets.
   * @format double
   */
  sockets?: number;

  /**
   * Number of used sockets.
   * @format double
   */
  usedSockets?: number;

  /**
   * Number of available license units.
   * @format double
   */
  units?: number;

  /**
   * Number of used license units.
   * @format double
   */
  usedUnits?: number;

  /** Type of license units. */
  unitType?: "Unknown" | "Instances" | "Points";

  /** Type of the license. */
  type?: "Unknown" | "NotInstalled" | "Community" | "Rental" | "Subscription" | "Evaluation" | "NFR" | "Perpetual";
}

export interface CompanyVOneServerLicenseUsage {
  /**
   * UID assigned to a company.
   * @format uuid
   */
  companyUid: string;

  /**
   * UID assigned to a tenant.
   * @format uuid
   */
  tenantUid: string;

  /** License usage counters. */
  counters: VOneServerLicenseCounter[];
}

export interface VOneServerLicenseUsage {
  /**
   * UID assigned to a Veeam ONE server.
   * @format uuid
   */
  vOneServerUid: string;

  /**
   * UID assigned to a Veeam ONE installation.
   * @format uuid
   */
  installationId: string;

  /** License usage counters. */
  counters: VOneServerLicenseCounter[];
}

export interface VOneServerLicenseCounter {
  /** License type. */
  type: "Unknown" | "FileShare" | "VM" | "CloudVM" | "ServerAgent" | "WorkstationAgent";

  /** License unit type. */
  unitType: "Unknown" | "Instances" | "Points";

  /**
   * Number of units that were activated within the current calendar month.
   * @format double
   */
  newUnits: number;

  /**
   * Number of units that have licenses assigned and are fully managed by Veeam Service Provider Console.
   * @format double
   */
  usedUnits: number;

  /**
   * Number of objects that were activated within the current calendar month.
   * @format int32
   */
  newCount: number;

  /**
   * Number of objects that have licenses assigned and are fully managed by Veeam Service Provider Console.
   * @format int32
   */
  usedCount: number;
}

export interface Vbm365ServerLicense {
  /**
   * UID assigned to a Veeam Backup for Microsoft 365 server.
   * @format uuid
   */
  vbm365ServerUid?: string;

  /** Indicates whether license updates automatically. */
  autoUpdateEnabled: boolean;

  /** Name of an organization to which a licensed server belongs. */
  company?: string;

  /** Email address of an organization to which a licensed server belongs. */
  email?: string;

  /**
   * License expiration date and time.
   * @format date-time
   */
  expirationDate?: string;

  /**
   * Support expiration date and time.
   * @format date-time
   */
  supportExpirationDate?: string;

  /**
   * License ID.
   * @format uuid
   */
  licenseId?: string;

  /** License ID required to contact Veeam Support. */
  supportId?: string;

  /** Current status of the license. */
  status?: "Unknown" | "Valid" | "Warning" | "Error" | "Expired" | "Unlicensed";

  /**
   * Number of licensed users.
   * @format int32
   */
  licensedUsers?: number;

  /**
   * Number of protected users.
   * @format int32
   */
  protectedUsers?: number;

  /** Type of the license. */
  type?: "Unknown" | "NotInstalled" | "Community" | "Rental" | "Subscription" | "Evaluation" | "NFR" | "Perpetual";
}

export interface CompanyVbm365ServerLicenseUsage {
  /**
   * UID assigned to a company.
   * @format uuid
   */
  companyUid: string;

  /**
   * UID assigned to a tenant.
   * @format uuid
   */
  tenantUid: string;

  /** License usage counters. */
  counters: Vbm365ServerLicenseCounter[];
}

export interface Vbm365ServerLicenseUsage {
  /**
   * UID assigned to a Veeam Backup for Microsoft 365 server.
   * @format uuid
   */
  vbm365ServerUid: string;

  /**
   * UID assigned to a Veeam Backup for Microsoft 365 installation.
   * @format uuid
   */
  installationId: string;

  /** License usage counters. */
  counters: Vbm365ServerLicenseCounter[];
}

export interface Vbm365ServerLicenseCounter {
  /** License type. */
  type: "Unknown" | "User";

  /** License unit type. */
  unitType: "Unknown" | "Instances" | "Points";

  /**
   * Number of units that were activated within the current calendar month.
   * @format double
   */
  newUnits: number;

  /**
   * Number of units that have licenses assigned and are fully managed by Veeam Service Provider Console.
   * @format double
   */
  usedUnits: number;

  /**
   * Number of objects that were activated within the current calendar month.
   * @format int32
   */
  newCount: number;

  /**
   * Number of objects that have licenses assigned and are fully managed by Veeam Service Provider Console.
   * @format int32
   */
  usedCount: number;
}

export interface ConsoleLicenseSummaryCounter {
  /** License type. */
  type?: "Unknown" | "VAC_Server_Agent" | "VAC_Workstation_Agent";

  /** License unit type. */
  unitType?: "Unknown" | "Instances" | "Points";

  /**
   * Number of units that have licenses assigned and are fully managed by Veeam Service Provider Console.
   * @format double
   */
  usedUnits?: number;

  /**
   * Number of units that were activated within the current calendar month.
   * @format double
   */
  newUnits?: number;

  /**
   * Number of objects that were activated within the current calendar month.
   * @format int32
   */
  newCount?: number;

  /**
   * Number of objects that have licenses assigned and are fully managed by Veeam Service Provider Console.
   * @format int32
   */
  usedCount?: number;
}

export interface ConsoleLicenseCounter {
  /** License type. */
  type?: "Unknown" | "VAC_Server_Agent" | "VAC_Workstation_Agent";

  /** License unit type */
  unitType?: "Unknown" | "Instances" | "Points";

  /**
   * Number of units that have licenses assigned and are fully managed by Veeam Service Provider Console.
   * @format double
   */
  usedUnits?: number;

  /**
   * Number of objects that have licenses assigned and are fully managed by Veeam Service Provider Console.
   * @format int32
   */
  usedCount?: number;

  /**
   * Number of units that were activated within the current calendar month.
   * @format double
   */
  newUnits?: number;

  /**
   * Number of objects that were activated within the current calendar month.
   * @format int32
   */
  newCount?: number;
}

export interface CompanyConsoleLicenseUsage {
  /**
   * UID assigned to a company.
   * @format uuid
   */
  companyUid: string;

  /**
   * UID assigned to a tenant.
   * @format uuid
   */
  tenantUid: string;

  /** License usage counters. */
  counters: ConsoleLicenseCounter[];
}

export interface ResponseError {
  /**
   * Error message.
   * > Every line break is represented by the `\r\n` control characters.
   *
   */
  message: string;

  /** Error type. */
  type: "unspecified" | "transport" | "logical" | "retryableLogical" | "security";

  /**
   * Error code.
   * @format int32
   */
  code: number;
}

export interface ResponseMetadata {
  /** Paging information. */
  pagingInfo?: PagingInformation;
}

/**
 * Pagination data.
 */
export interface PagingInformation {
  /**
   * Number of total resources.
   * @format int32
   */
  total: number;

  /**
   * Number of resources on the current page.
   * @format int32
   */
  count: number;

  /**
   * Number of resources that are skipped.
   * @format int32
   */
  offset: number;
}

export interface EmptyResponse {
  errors: ResponseError[];
  data?: object;
  meta?: ResponseMetadata;
}

/**
 * @example {"errors":[{"message":"The property at path 'mfaPolicyConfigurationStatus' could not be updated.","type":"logical","code":1001,"failedJsonPatch":{"value":"NotConfigured","path":"mfaPolicyConfigurationStatus","op":"replace"}}]}
 */
export interface ErrorResponse {
  errors?: ResponseError[];
}

/**
 * @example {"backupPolicyUid":null,"allowAutoRebootIfNeeded":true,"setReadOnlyAccess":true,"installCbtDriver":false,"credentials":null,"backupAgentSettings":null}
 */
export interface DeploymentConfiguration {
  /**
   * UID of a backup policy that must be assigned to Veeam backup agent.
   * @format uuid
   */
  backupPolicyUid?: string;

  /** Indicates whether system reboot is allowed. */
  allowAutoRebootIfNeeded?: boolean;

  /** Indicates whether the read-only access mode is enabled for Veeam backup agents. */
  setReadOnlyAccess?: boolean;

  /** Indicates whether CBT driver is installed during agent deployment. */
  installCbtDriver?: boolean;

  /** Credentials for accessing discovered computers. */
  credentials?: DomainCredentials;

  /** Veeam backup agent global settings. */
  backupAgentSettings?: BackupAgentSettings;
}

/**
 * @example {"backupPolicyUid":null,"setReadOnlyAccess":true,"credentials":null}
 */
export interface LinuxDeploymentConfiguration {
  /**
   * UID of a backup policy that is assigned to Veeam Agent for Linux.
   * @format uuid
   */
  backupPolicyUid?: string;

  /** Indicates whether the read-only access mode is enabled for Veeam Agent for Linux. */
  setReadOnlyAccess?: boolean;

  /** Credentials to connect discovered computers. */
  credentials?: LinuxDiscoveryCredentials[];
}

export interface LinuxDiscoveryCredentials {
  /**
   * UID assigned to a set of credentials
   * @format uuid
   */
  instanceUid?: string;

  /** Username. */
  username: string;

  /**
   * Password.
   * @format password
   */
  password?: string;

  /**
   * Priority level of credentials.
   * @format int32
   * @min 0
   */
  priority?: number;

  /** Credentials description. */
  description?: string;

  /**
   * SSH port that must be used to connect to a Linux server.
   * @format int32
   */
  sshPort?: number;

  /** Indicates whether a non-root account must be provided with root account privileges. */
  elevateAccountPrivileges?: boolean;

  /** Indicates whether an account must be added to sudoers file. */
  addAccountToSudoersFile?: boolean;

  /** Indicates whether the `su` command can be used instead of the `sudo` command. */
  useSuIfsudoFails?: boolean;

  /**
   * Password for a root account.
   * @format password
   */
  rootPassword?: string;

  /**
   * SSH private key.
   * @format password
   */
  sshPrivateKey?: string;

  /**
   * Passphrase for the private key.
   * @format password
   */
  passphrase?: string;

  /** Type of Linux credentials. */
  type: "Unknown" | "LinuxBased" | "LinuxCertificate";
}

export interface LinuxDiscoveryCredentialsInput {
  /** Username. */
  username: string;

  /**
   * Password.
   * @format password
   */
  password?: string;

  /**
   * Priority level of credentials.
   * @format int32
   * @min 0
   */
  priority?: number;

  /** Credentials description. */
  description?: string;

  /**
   * SSH port that must be used to connect to a Linux server.
   * @format int32
   */
  sshPort?: number;

  /** Indicates whether a non-root account must be provided with root account privileges. */
  elevateAccountPrivileges?: boolean;

  /** Indicates whether an account must be added to sudoers file. */
  addAccountToSudoersFile?: boolean;

  /** Indicates whether the `su` command can be used instead of the `sudo` command. */
  useSuIfsudoFails?: boolean;

  /**
   * Password for a root account.
   * @format password
   */
  rootPassword?: string;

  /**
   * SSH private key.
   * @format password
   */
  sshPrivateKey?: string;

  /**
   * Passphrase for the private key.
   * @format password
   */
  passphrase?: string;

  /** Type of Linux credentials. */
  type: "Unknown" | "LinuxBased" | "LinuxCertificate";
}

export interface DeploymentInformation {
  /**
   * UID assigned to a deployment task.
   * @format uuid
   */
  deployTaskUid?: string;

  /**
   * ID assigned to a deployment task.
   * @format int32
   */
  deployTaskId?: number;
}

export interface DeploymentLog {
  /**
   * Percentage of deployment progress.
   * @format int32
   */
  completePercentage?: number;

  /** Deployment status. */
  status?: "success" | "failed" | "warning";

  /** Log entry containing details about deployment process. */
  logEntries?: DeploymentLogEntry[];
}

export interface DeploymentLogEntry {
  /**
   * UID assigned to a deployment task.
   * @format uuid
   */
  taskUid?: string;

  /**
   * Event represented by the log entry.
   * @format int32
   */
  event?: number;

  /**
   * UID assigned to a deployed management agent.
   * @format uuid
   */
  managementAgentUid?: string;

  /**
   * UUID in Win32_ComputerSystem WMI class.
   * @format uuid
   */
  biosUuid?: string;

  /** Hostname of a target computer. */
  hostName?: string;

  /** Name of a deployment task. */
  taskName?: string;

  /** Message. */
  message?: string;

  /**
   * Time and date of an event.
   * @format date-time
   */
  time?: string;
}

export interface DomainCredentials {
  /** Domain credentials username. */
  userName: string;

  /**
   * Domain credentials password.
   * @format password
   */
  password: string;
}

export interface DiscoveryRuleCredentials {
  /** Username. */
  userName: string;

  /**
   * Credentials.
   * @format password
   */
  password?: string;
}

export interface CredentialsInfo {
  /** Username. */
  userName?: string;

  /**
   * Password.
   * @format password
   */
  password?: string;
}

export interface Credentials {
  /**
   * Username.
   * @pattern ^[^\/\\\[\]:;|=,+\*\?<>@"!#$%^&(){}]+(?<!\.)$
   */
  userName: string;

  /**
   * Password.
   * @format password
   */
  password: string;
}

export interface OwnerCredentials {
  /**
   * Username.
   * @pattern ^[a-zA-Z0-9!#$%&()\-.^_{}~'` ]+(?<!\.)$
   */
  userName: string;

  /**
   * Password.
   * @format password
   */
  password?: string;
}

export interface Country {
  /**
   * System ID assigned to a country.
   * @format int32
   */
  id?: number;

  /** Country name. */
  name?: string;

  /** Two-letter code of a country. */
  code?: string;
}

export interface UsaState {
  /**
   * System ID assigned to a USA state.
   * @format int32
   */
  id?: number;

  /** USA state name. */
  name?: string;

  /** Postal code of a USA state. */
  code?: string;
}

export interface Currency {
  /**
   * System ID assigned to a currency.
   * @format int32
   */
  id?: number;

  /** Currency name. */
  name?: string;

  /** Three-letter code according to ISO 4217. */
  code?: string;
}

export interface BackupServerHost {
  /**
   * UID assigned to a server.
   * @format uuid
   */
  instanceUid?: string;

  /** Host name of a server. */
  name?: string;

  /**
   * UID assigned to a Veeam Backup & Replication server.
   * @format uuid
   */
  backupServerUid?: string;

  /** Type of a server. */
  type?:
  | "Unknown"
  | "ESX"
  | "ESXi"
  | "VirtualCenter"
  | "LinuxHost"
  | "LocalHost"
  | "WindowsHost"
  | "Share"
  | "HyperVServer"
  | "HyperVCluster"
  | "Scvmm"
  | "BackupServer"
  | "SmbServer"
  | "SmbCluster"
  | "VcdSystem"
  | "ExternalInfrastructureServer"
  | "NasFiler";
}

export interface BackupServerAgentProtectionGroup {
  /**
   * UID assigned to a server.
   * @format uuid
   */
  instanceUid?: string;

  /** Host name of a server. */
  name?: string;

  /**
   * UID assigned to a Veeam Backup & Replication server.
   * @format uuid
   */
  backupServerUid?: string;
}

export interface ProtectedVirtualMachine {
  /**
   * UID assigned to a protected virtual machine.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a backup server.
   * @format uuid
   */
  backupServerUid?: string;

  /**
   * UID assigned to an organization.
   * @format uuid
   */
  organizationUid?: string;

  /** Virtual machine hostname. */
  name?: string;

  /** Virtual machine reference that includes hypervisor identifier. */
  hierarchyReference?: string;

  /** IP addresses. */
  ipAddresses?: string[];

  /**
   * Total size of protected virtual machine disks, in bytes.
   * @format int64
   */
  provisionedSourceSize?: number;

  /**
   * Used space on protected virtual machine disks, in bytes.
   * @format int64
   */
  usedSourceSize?: number;

  /**
   * Total size of all restore points, in bytes.
   * @format int64
   */
  totalRestorePointSize?: number;

  /**
   * Size of the latest restore point, in bytes.
   * @format int64
   */
  latestRestorePointSize?: number;

  /**
   * Number of restore points.
   * @format int32
   */
  restorePoints?: number;

  /**
   * Time and date of the latest restore point creation.
   * @format date-time
   */
  latestRestorePointDate?: string;

  /**
   * UID assigned to a backup job that created the latest restore point.
   * @format uuid
   */
  jobUid?: string;
}

export interface ProtectedVirtualMachineBackup {
  /**
   * UID assigned to a backup chain.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a virtual machine.
   * @format uuid
   */
  virtualMachineUid?: string;

  /**
   * UID assigned to a backup job.
   * @format uuid
   */
  jobUid?: string;

  /** Backup job type. */
  backupType?: "Unknown" | "Backup" | "Replication" | "BackupCopy" | "BackupToTape";

  /**
   * UID assigned to a repository on which the restore point resides.
   * @format uuid
   */
  repositoryUid?: string;

  /**
   * Total size of all restore points, in bytes.
   * @format int64
   */
  totalRestorePointSize?: number;

  /**
   * Size of the latest restore point, in bytes.
   * @format int64
   */
  latestRestorePointSize?: number;

  /**
   * Number of restore points.
   * @format int32
   */
  restorePoints?: number;

  /**
   * Time and date of the latest restore point creation.
   * @format date-time
   */
  latestRestorePointDate?: string;

  /** Type of a target repository. */
  targetType?: "Unknown" | "Local" | "Cloud";
}

export interface ProtectedVirtualMachineBackupRestorePoint {
  /**
   * UID assigned to a restore point.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a backup chain.
   * @format uuid
   */
  backupUid?: string;

  /**
   * UID assigned to a protected virtual machine.
   * @format uuid
   */
  virtualMachineUid?: string;

  /** Path to a backup file location. */
  filePath?: string;

  /** Array of enabled GFS retention types. */
  gfsType?: ("Weekly," | "Monthly," | "Quarterly," | "Yearly")[];

  /**
   * UID assigned to a backup job.
   * @format uuid
   */
  jobUid?: string;

  /**
   * UID assigned to a repository on which the restore point resides.
   * @format uuid
   */
  repositoryUid?: string;

  /**
   * Size of a restore point, in bytes. Includes all virtual machines protected by the same backup job.
   * @format int64
   */
  size?: number;

  /**
   * Total size of protected virtual machine disks, in bytes.
   * @format int64
   */
  provisionedSourceSize?: number;

  /**
   * Used space on protected virtual machine disks, in bytes.
   * @format int64
   */
  usedSourceSize?: number;

  /**
   * Size of backup increment, in bytes.
   * @format int64
   */
  incrementRawDataSize?: number;

  /**
   * Number of vCPU cores of a cloud virtual machine.
   * @format int32
   */
  cpuCores?: number;

  /**
   * Protected virtual machine memory, in bytes.
   * @format int64
   */
  memory?: number;

  /**
   * Time and date when backup was created.
   * @format date-time
   */
  backupCreationTime?: string;

  /**
   * Time and date when a restore point was created.
   * @format date-time
   */
  fileCreationTime?: string;

  /** Indicates whether a retore point has successfully passed a health check. */
  isConsistent?: boolean;
}

export interface ProtectedVirtualMachineReplicaRestorePoint {
  /**
   * UID assigned to a restore point.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a virtual machine.
   * @format uuid
   */
  virtualMachineUid?: string;

  /**
   * UID assigned to a replication chain.
   * @format uuid
   */
  backupUid?: string;

  /**
   * UID assigned to a replication job.
   * @format uuid
   */
  jobUid?: string;

  /**
   * UID assigned to a hardware plan.
   * @format uuid
   */
  hardwarePlanUid?: string;

  /**
   * Time and date when a restore point was created.
   * @format date-time
   */
  creationDate?: string;
}

export interface ProtectedCloudVirtualMachine {
  /**
   * UID assigned to a protected cloud virtual machine.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a backup server.
   * @format uuid
   */
  backupServerUid?: string;

  /**
   * UID assigned to an organization.
   * @format uuid
   */
  organizationUid?: string;

  /** Virtual machine hostname. */
  name?: string;

  /** Resource ID of a cloud virtual machine. */
  resourceId?: string;

  /** Array of locations where backup files for a cloud virtual machine reside. */
  destinations?: string[];

  /**
   * Time and date of the latest backup restore point creation.
   * @format date-time
   */
  latestBackupDate?: string;
}

export interface ProtectedCloudVirtualMachineBackup {
  /**
   * UID assigned to a virtual machine.
   * @format uuid
   */
  cloudVirtualMachineUid?: string;

  /**
   * UID assigned to a backup job.
   * @format uuid
   */
  jobUid?: string;

  /** Backup job type. */
  backupType?: "Unknown" | "Backup" | "Snapshot" | "RemoteSnapshot" | "BackupCopy" | "BackupToTape";

  /** Location where backup chain resides. */
  destination?: string;

  /**
   * Total size of all restore points, in bytes.
   * @format int64
   */
  totalRestorePointSize?: number;

  /**
   * Size of the latest restore point, in bytes.
   * @format int64
   */
  latestRestorePointSize?: number;

  /**
   * Number of restore points.
   * @format int32
   */
  restorePoints?: number;

  /**
   * Time and date of the latest restore point creation.
   * @format date-time
   */
  latestRestorePointDate?: string;
}

export interface ProtectedComputerManagedByConsole {
  /**
   * UID assigned to a backup agent installed on a computer.
   * @format uuid
   */
  backupAgentUid?: string;

  /**
   * UID assigned to an organization.
   * @format uuid
   */
  organizationUid?: string;

  /** Hostname of a protected computer. */
  name?: string;

  /**
   * Number of jobs.
   * @format int32
   */
  numberOfJobs?: number;

  /** Operation mode. */
  operationMode?: "Unknown" | "Server" | "Workstation";

  /**
   * Time and date of the latest restore point creation.
   * @format date-time
   */
  latestRestorePointDate?: string;
}

export interface ProtectedComputerManagedByConsoleJob {
  /**
   * UID assigned to a Veeam backup agent.
   * @format uuid
   */
  backupAgentUid?: string;

  /**
   * UID assigned to a job that protects the computer.
   * @format uuid
   */
  jobUid?: string;

  /** Name of a job that protects the computer. */
  jobName?: string;

  /**
   * Size of protected data, in bytes.
   * @format int64
   */
  sourceSize?: number;

  /**
   * Total size of all restore points, in bytes.
   * @format int64
   */
  totalRestorePointSize?: number;

  /**
   * Size of the latest restore point, in bytes.
   * @format int64
   */
  latestRestorePointSize?: number;

  /**
   * Number of restore points.
   * @format int32
   */
  restorePoints?: number;

  /**
   * Time and date of the latest restore point creation.
   * @format date-time
   */
  latestRestorePointDate?: string;

  /** Type of a target repository. */
  targetType?: "Unknown" | "Local" | "Cloud";
}

export interface ProtectedComputerManagedByConsoleRestorePoint {
  /**
   * UID assigned to a restore point.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a Veeam backup agent.
   * @format uuid
   */
  backupAgentUid?: string;

  /**
   * UID assigned to a backup job that created the restore point.
   * @format uuid
   */
  jobUid?: string;

  /** Protected objects. */
  backedupItems?: string;

  /** Path to the protected object locations. */
  destination?: string;

  /**
   * Size of the restore point, in bytes.
   * @format int64
   */
  size?: number;

  /**
   * Size of backup increment, in bytes.
   * @format int64
   */
  incrementRawDataSize?: number;

  /**
   * Size of the protected data, in bytes.
   * @format int64
   */
  sourceSize?: number;

  /**
   * Date of the restore point creation.
   * @format date-time
   */
  creationDate?: string;
}

export interface ProtectedComputerManagedByBackupServer {
  /**
   * UID assigned to a protected computer.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * Protected computer UID assigned in Veeam Backup & Replication.
   * @format uuid
   */
  sourceInstanceUid?: string;

  /**
   * UID assigned to a backup server.
   * @format uuid
   */
  backupServerUid?: string;

  /** Protection group UIDs. */
  protectionGroups?: string[];

  /**
   * UID assigned to an organization.
   * @format uuid
   */
  organizationUid?: string;

  /** Hostname of a protected computer. */
  name?: string;

  /** Computer IP addresses. */
  ipAddresses?: string[];

  /** Operating system installed on a protected computer. */
  guestOs?: string;

  /** Platform type of a protected computer. */
  platformType?: "Unknown" | "Windows" | "Linux" | "Mac";

  /** Operation mode. */
  operationMode?: "Unknown" | "Server" | "Workstation";

  /**
   * Time and date of the latest restore point creation.
   * @format date-time
   */
  latestRestorePointDate?: string;
}

export interface ProtectedComputerManagedByBackupServerBackup {
  /**
   * UID assigned to a backup chain.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a Veeam backup agent.
   * @format uuid
   */
  backupAgentUid?: string;

  /**
   * UID assigned to a backup job that created the restore point.
   * @format uuid
   */
  jobUid?: string;

  /** Name of a job that protects the computer. */
  jobName?: string;

  /** Job type. */
  jobKind?: "Unknown" | "Backup" | "Copy";

  /**
   * Total size of protected computer disks, in bytes.
   * @format int64
   */
  provisionedSourceSize?: number;

  /**
   * Used space on protected computer disks, in bytes.
   * @format int64
   */
  usedSourceSize?: number;

  /**
   * UID assigned to a target repository.
   * @format uuid
   */
  repositoryUid?: string;

  /**
   * Total size of all restore points, in bytes.
   * @format int64
   */
  totalRestorePointSize?: number;

  /**
   * Size of the latest restore point, in bytes.
   * @format int64
   */
  latestRestorePointSize?: number;

  /**
   * Number of restore points.
   * @format int32
   */
  restorePoints?: number;

  /**
   * Time and date of the latest restore point creation.
   * @format date-time
   */
  latestRestorePointDate?: string;

  /** Type of a target repository. */
  targetType?: "Unknown" | "Local" | "Cloud";
}

export interface ProtectedComputerManagedByBackupServerRestorePoint {
  /**
   * UID assigned to a restore point.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a Veeam backup agent.
   * @format uuid
   */
  backupAgentUid?: string;

  /**
   * UID assigned to a backup chain.
   * @format uuid
   */
  backupUid?: string;

  /**
   * UID assigned to a backup job that created the restore point.
   * @format uuid
   */
  jobUid?: string;

  /**
   * UID assigned to a target repository
   * @format uuid
   */
  repositoryUid?: string;

  /**
   * Size of the restore point, in bytes.
   * @format int64
   */
  size?: number;

  /**
   * Total size of protected computer disks, in bytes.
   * @format int64
   */
  provisionedSourceSize?: number;

  /**
   * Used space on protected computer disks, in bytes.
   * @format int64
   */
  usedSourceSize?: number;

  /**
   * Size of the backup increment, in bytes.
   * @format int64
   */
  incrementRawDataSize?: number;

  /**
   * Size of protected data, in bytes.
   * @format int64
   */
  sourceSize?: number;

  /**
   * Number of protected computer CPU cores.
   * @format int32
   */
  cpuCores?: number;

  /**
   * Protected computer memory, in bytes.
   * @format int64
   */
  memory?: number;

  /** Type of a target repository. */
  targetType?: "Unknown" | "Local" | "Cloud";

  /**
   * Time and date when backup was created.
   * @format date-time
   */
  backupCreationTime?: string;

  /**
   * Time and date when a restore point was created.
   * @format date-time
   */
  fileCreationTime?: string;
}

export interface ProtectedFileServer {
  /**
   * UID assigned to a file share.
   * @format uuid
   */
  fileServerUid?: string;

  /**
   * UID assigned to a backup server.
   * @format uuid
   */
  backupServerUid?: string;

  /**
   * UID assigned to an organization.
   * @format uuid
   */
  organizationUid?: string;

  /**
   * UID assigned to a backup job that protects a file share.
   * @format uuid
   */
  jobUid?: string;

  /**
   * UID assigned to a backup repository.
   * @format uuid
   */
  repositoryUid?: string;

  /**
   * UID assigned to an archive repository.
   * @format uuid
   */
  archiveRepositoryUid?: string;

  /** Name of a file share. */
  name?: string;

  /**
   * Size of archived file copies, in bytes.
   * @format int64
   */
  archiveSize?: number;

  /**
   * Size of recent file copies, in bytes.
   * @format int64
   */
  shortTermBackupSize?: number;

  /**
   * Number of restore points for long-term retention.
   * @format int32
   */
  archiveRestorePoints?: number;

  /**
   * Number of restore points.
   * @format int32
   */
  restorePoints?: number;

  /**
   * Time and date of the latest restore point creation.
   * @format date-time
   */
  latestRestorePointDate?: string;

  /**
   * Size of the protected data, in bytes.
   * @format int64
   */
  sourceSize?: number;

  /** File share backup scope. */
  sources?: ProtectedFileServerSource[];
}

export interface ProtectedFileServerSource {
  /** Path to a location of protected data. */
  path?: string;

  /** Names and name masks of files that must be included into a backup scope. */
  inclusionMasks?: string[];

  /** Names and name masks of files that must be excluded from a backup scope. */
  exclusionMasks?: string[];
}

export interface LocationAggregatedUsage {
  /**
   * UID assigned to a company.
   * @format uuid
   */
  companyUid?: string;

  /**
   * UID assigned to a reseller.
   * @format uuid
   */
  resellerUid?: string;

  /**
   * UID assigned to a location.
   * @format uuid
   */
  locationUid?: string;

  /**
   * Date of data aggregation.
   * @format date
   */
  date?: string;

  /** Managed services counters. */
  counters?: AggregatedUsage[];
}

export interface ResellerAggregatedUsage {
  /**
   * UID assigned to a reseller.
   * @format uuid
   */
  resellerUid?: string;

  /**
   * Date of data aggregation.
   * @format date
   */
  date?: string;

  /** Managed services counters. */
  counters?: AggregatedUsage[];
}

export interface AggregatedUsage {
  /**
   * Counter value.
   * @format int64
   */
  value?: number;

  /** Counter type. */
  type?:
  | "Unknown"
  | "VmCloudBackups"
  | "VbrCloudBackupsDataTransferOut"
  | "VbrCloudBackupsDataTransferIn"
  | "ServerCloudBackups"
  | "WorkstationCloudBackups"
  | "AgentCloudBackupDataTransferOut"
  | "AgentCloudBackupDataTransferIn"
  | "CloudRepositoryUsageByServerAgent"
  | "CloudRepositoryUsageByWorkstationAgent"
  | "CloudRepositoryUsageByVm"
  | "CloudRepositoryUsageByUnknownFiles"
  | "BackedupVms"
  | "ReplicatedVms"
  | "ManagedVms"
  | "ManagedCloudVms"
  | "ManagedServerAgents"
  | "ManagedWorkstationAgents"
  | "ManagedAgentsWindowsDesktopOS"
  | "ManagedAgentsWindowsServerOS"
  | "ManagedAgentsLinuxOS"
  | "ManagedAgentsMacOS"
  | "ManagedUsers"
  | "VmCloudReplicas"
  | "VbrCloudReplicaDataTransferOut"
  | "VbrCloudReplicaDataTransferIn"
  | "VmCloudReplicaStorageUsage"
  | "VmCloudReplicaComputeTime"
  | "FileShareBackupSize"
  | "FileShareArchiveSize"
  | "FileShareSourceSize"
  | "CloudInsiderProtectionBackupSize"
  | "CloudCapacityTierBackupSize"
  | "CloudArchiveTierBackupSize"
  | "CloudPerfomanceTierBackupSize";
}

export interface EnterpriseManager {
  /**
   * UID assigned to a Veeam Backup Enterprise Manager server.
   * @format uuid
   */
  instanceUid?: string;

  /** Hostname of a Veeam Backup Enterprise Manager server. */
  name?: string;

  /**
   * UID assigned to a management agent installed on a Veeam Backup Enterprise Manager server.
   * @format uuid
   */
  managementAgentUid?: string;

  /**
   * UID assigned to a Veeam Backup Enterprise Manager installation.
   * @format uuid
   */
  installationUid?: string;

  /** Version of a Veeam Backup Enterprise Manager. */
  version?: string;

  /** Status of a Veeam Backup Enterprise Manager server. */
  status?: "Unknown" | "Healthy" | "Inaccessible" | "OutofDate";
}

export interface EnterpriseManagerBackupServer {
  /**
   * UID assigned to a Veeam Backup & Replication server.
   * @format uuid
   */
  instanceUid?: string;

  /** DNS name or IP address of a Veeam Backup & Replication server. */
  address?: string;

  /** Port used by Veeam Backup Service. */
  port?: number;

  /**
   * Information about a Veeam Backup & Replication server.
   * > If management agent is not installed on this server, the property value is `null`.'
   *
   */
  backupServer?: BackupServer;
}

/**
 * @example {"organizationUid":"00000000-0000-0000-0000-000000000000","organizationType":"Company","organizationScope":"CurrentObject","emailContent":"SP_ Company welcome template","showSelfServiceSection":true,"isDefault":false}
 */
export interface CustomWelcomeEmailTemplate {
  /**
   * UID assigned to an organization.
   * @format uuid
   */
  organizationUid?: string;

  /** Type of an organization. */
  organizationType?: "Unknown" | "Company" | "Reseller";

  /** Scope of notified organizations. */
  organizationScope?: "Unknown" | "CurrentObject" | "ChildObjects";

  /** Content of an email message. */
  emailContent?: string;

  /** Indicates whether the **Self-service** section is included in the email message. */
  showSelfServiceSection?: boolean;

  /** Indicates whether an email message template is selected by default. */
  isDefault?: boolean;
}

export interface VOneServer {
  /**
   * UID assigned to a Veeam ONE server.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a Veeam ONE server location.
   * @format uuid
   */
  locationUid?: string;

  /**
   * UID assigned to an organization.
   * @format uuid
   */
  organizationUid?: string;

  /**
   * UID assigned to a management agent installed on a Veeam ONE server.
   * @format uuid
   */
  managementAgentUid?: string;

  /**
   * UID assigned to a Veeam ONE installation.
   * @format uuid
   */
  installationUid?: string;

  /** Host name of a Veeam ONE server. */
  name?: string;

  /** Veeam ONE version installed on a server. */
  version?: string;

  /** Veeam ONE server status. */
  status?: "Unknown" | "Healthy" | "Warning" | "Inaccessible";
}

export interface Vbm365Server {
  /**
   * UID assigned to a Veeam Backup for Microsoft 365 server.
   * @format uuid
   */
  instanceUid?: string;

  /**
   * UID assigned to a Veeam Backup for Microsoft 365 server location.
   * @format uuid
   */
  locationUid?: string;

  /**
   * UID assigned to an organization.
   * @format uuid
   */
  organizationUid?: string;

  /**
   * UID assigned to a management agent installed on a Veeam Backup for Microsoft 365 Server.
   * @format uuid
   */
  managementAgentUid?: string;

  /**
   * UID assigned to a Veeam Backup for Microsoft 365 server installation.
   * @format uuid
   */
  installationUid?: string;

  /** Host name of a Veeam Backup for Microsoft 365 server. */
  name?: string;

  /** Veeam Backup for Microsoft 365 version installed on a server. */
  version?: string;

  /** Veeam Backup for Microsoft 365 server status. */
  status?: "Unknown" | "Healthy" | "Warning" | "Inaccessible";
}

export interface PulseConfiguration {
  /**
   * VCSP Pulse authentication token.
   * @format password
   */
  token?: string;

  /** Status of VCSP Pulse configuration. */
  status?: "Unknown" | "NotConfigured" | "Configured" | "Warning" | "Error";

  /** Status message. */
  statusMessage?: string;

  /** Indicates whether company management in VCSP Pulse is enabled. */
  isCompanyMappingEnabled: boolean;

  /** Indicates whether license management in VCSP Pulse is enabled. */
  isLicenseManagementEnabled: boolean;

  /** Indicates whether a VCSP Pulse tenant must be created for each new company. */
  isPushingNewCompaniesToPulseEnabled: boolean;

  /**
   * Date of the last VCSP Pulse integration update.
   * @format date-time
   */
  lastUpdateDate?: string;

  /**
   * Date when the VCSP Pulse Portal connection token expires.
   * @format date-time
   */
  tokenExpirationDate?: string;
}

export interface PulseLicenseContract {
  /** ID assigned to a rental agreement contract. */
  contractId?: string;

  /**
   * Date of rental agreement contract expiration.
   * @format date-time
   */
  expirationDate?: string;

  /**
   * Maximum number of license points that can be consumed according to rental agreement contract.
   * @format float
   */
  pointsLimit?: number;

  /** Indicates whether rental agreement contract must be automatically updated. */
  automaticExtensionAlwaysOn?: boolean;
}

export interface PulseLicenseProduct {
  /** ID assigned to a licensed Veeam product. */
  productId?: string;

  /** Name of a licensed Veeam product. */
  name?: string;

  /** Edition of a licensed Veeam product. */
  edition?: string;

  /** Version of a licensed Veeam product. */
  version?: string;

  /** Array of Veeam product workloads included in the VCSP Pulse license. */
  workloads?: PulseLicenseProductWorkload[];
}

export interface PulseLicenseProductWorkload {
  /** ID addigned to a workload. */
  workloadId?: string;

  /** Name of a workload. */
  name?: string;

  /**
   * License unit multiplier for the workload type.
   * @format double
   */
  multiplier?: number;
}

export interface PulseLicense {
  /**
   * UID assigned to a VCSP Pulse license.
   * @format uuid
   */
  instanceUid: string;

  /**
   * ID assigned to a VCSP Pulse license in SalesForce.
   * @format uuid
   */
  licenseId?: string;

  /** Type of a VCSP Pulse license. */
  type: "Unknown" | "Rental" | "Internal" | "Trial";

  /** Status of VCSP Pulse license assignement. */
  assignStatus: "Unknown" | "Assigned" | "Assigning" | "FailedToAssign" | "Revoking" | "FailedToRevoke" | "NotAssigned";

  /** Type of VCSP Pulse license usage. */
  usageType: "Unknown" | "SingleCustomerUse" | "MultiCustomerUse" | "InternalUse";

  /** ID assigned to a rental agreement contract. */
  contractId: string;

  /** Name of an organization that created VCSP Pulse license. */
  createdBy?: string;

  /** ID asigned to a Veeam product that requires a license. */
  productId: string;

  /** Description of a VCSP Pulse license. */
  description?: string;

  /**
   * Date of the VCSP Pulse license expiration.
   * @format date-time
   */
  expirationDate?: string;

  /**
   * Number of license points.
   * @format double
   */
  points: number;

  /** Status of VCSP Pulse license automatic update. */
  automaticExtensionStatus: "Unknown" | "Off" | "On" | "AlwaysOn" | "AlwaysOff" | "SwitchingToOn" | "SwitchingToOff";

  /**
   * UID of a company to which a VCSP Pulse license is assigned.
   * @format uuid
   */
  assignedCompanyUid?: string;

  /**
   * UID of a reseller to which a VCSP Pulse license is assigned.
   * @format uuid
   */
  assignedResellerUid?: string;
}

/**
 * @example {"productId":"VBR_PLS_11_0_0","contractId":"02429772","description":null,"expirationDate":"2021-11-14T01:31:07.3352853-05:00","type":"Rental","isAutomaticExtensionEnabled":false,"workloads":[{"workloadId":"Cloud VM_VBR_PLS_11_0_0","count":1},{"workloadId":"File Share_VBR_PLS_11_0_0","count":1},{"workloadId":"Server_VBR_PLS_11_0_0","count":1},{"workloadId":"VM_VBR_PLS_11_0_0","count":1},{"workloadId":"Workstation_VBR_PLS_11_0_0","count":1},{"workloadId":"Enterprise Application_VBR_PLS_11_0_0","count":1}]}
 */
export interface PulseLicenseInput {
  /** ID asigned to a Veeam product that requires a license. */
  productId: string;

  /** ID assigned to a rental agreement contract. */
  contractId: string;

  /** Description of a VCSP Pulse license. */
  description?: string;

  /**
   * Date of the VCSP Pulse license expiration.
   * @format date-time
   */
  expirationDate: string;

  /** Type of a VCSP Pulse license. */
  type?: "Unknown" | "Rental" | "Internal" | "Trial";

  /** Defines whether VCSP Pulse license must be updated automatically. */
  isAutomaticExtensionEnabled?: boolean;

  /** Array of workloads that must be licensed. */
  workloads: PulseLicenseWorkloadInput[];
}

export interface PulseLicenseWorkloadInput {
  /** ID assigned to a workload type. */
  workloadId: string;

  /**
   * Number of objects.
   * @format int32
   * @min 1
   * @max 100000
   */
  count: number;
}

export interface PulseTenant {
  /** UID assigned to a VCSP Pulse tenant. */
  instanceUid?: string;

  /** Mapping status of a VCSP Pulse tenant. */
  mappingStatus?: "Unknown" | "NotMapped" | "Mapped" | "MappingInProggress" | "FailedToMap";

  /** Message for mapping status of a VCSP Pulse tenant. */
  mappingStatusMessage?: string;

  /** Name of a VCSP Pulse tenant. */
  name?: string;

  /**
   * UID assigned to a master organization mapped to a VCSP Pulse tenant.
   * @format uuid
   */
  mappedMasterOrganizationUid?: string;

  /** Array of UIDs assigned to organizations merged with a master organization. */
  mergedOrganizationUids?: string[];
}

export interface CloudTenantProductVersionInfo {
  /**
   * UID assigned to a Veeam product.
   * @format uuid
   */
  instanceUid?: string;

  /** Veeam product type. */
  productType?: "Unknown" | "VBR";

  /** Version of a Veeam product. */
  version?: string;

  /**
   * UID assigned to a Veeam Cloud Connect server managing a tenant that uses a Veeam product.
   * @format uuid
   */
  siteUid?: string;

  /**
   * UID assigned to a company associated with a tenant that uses a Veeam product.
   * @format uuid
   */
  companyUid?: string;

  /**
   * UID assigned to a tenant that uses a Veeam product.
   * @format uuid
   */
  tenantUid?: string;

  /** Indicates whether information on Veeam product version is available. */
  isVersionInfoAvailable?: boolean;
}

export enum ResellerExpand {
  Organization = "Organization",
}

export enum IdentityProviderRoleMappingRuleExpand {
  IdentityProvider = "IdentityProvider",
}

export enum CompanyExpand {
  Organization = "Organization",
}

export enum ProviderExpand {
  Organization = "Organization",
}

export enum WindowsDiscoveryRuleExpand {
  DiscoveryRule = "DiscoveryRule",
}

export enum WindowsNetworkBasedDiscoveryRuleExpand {
  DiscoveryRule = "DiscoveryRule",
  WindowsDiscoveryRule = "WindowsDiscoveryRule",
}

export enum WindowsActiveDirectoryBasedDiscoveryRuleExpand {
  DiscoveryRule = "DiscoveryRule",
  WindowsDiscoveryRule = "WindowsDiscoveryRule",
}

export enum WindowsCustomDiscoveryRuleExpand {
  DiscoveryRule = "DiscoveryRule",
  WindowsDiscoveryRule = "WindowsDiscoveryRule",
}

export enum LinuxDiscoveryRuleExpand {
  DiscoveryRule = "DiscoveryRule",
}

export enum LinuxNetworkBasedDiscoveryRuleExpand {
  DiscoveryRule = "DiscoveryRule",
  LinuxDiscoveryRule = "LinuxDiscoveryRule",
}

export enum LinuxCustomDiscoveryRuleExpand {
  DiscoveryRule = "DiscoveryRule",
  LinuxDiscoveryRule = "LinuxDiscoveryRule",
}

export enum BackupServerBackupVmJobExpand {
  BackupServerJob = "BackupServerJob",
}

export enum BackupServerReplicationVmJobExpand {
  BackupServerJob = "BackupServerJob",
}

export enum BackupServerBackupCopyJobExpand {
  BackupServerJob = "BackupServerJob",
}

export enum BackupServerFileShareJobExpand {
  BackupServerJob = "BackupServerJob",
}

export enum BackupServerFileShareCopyJobExpand {
  BackupServerJob = "BackupServerJob",
}

export enum BackupServerImmediateBackupCopyJobExpand {
  BackupServerJob = "BackupServerJob",
}

export enum BackupServerVmCopyJobExpand {
  BackupServerJob = "BackupServerJob",
}

export enum BackupServerFileCopyJobExpand {
  BackupServerJob = "BackupServerJob",
}

export enum BackupServerFileTapeJobExpand {
  BackupServerJob = "BackupServerJob",
}

export enum BackupServerBackupTapeJobExpand {
  BackupServerJob = "BackupServerJob",
}

export enum BackupServerAgentJobExpand {
  BackupServerJob = "BackupServerJob",
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://vac.renovodata.com/api/v3";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  private addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  private addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
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
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
          .then((data) => {
            if (r.ok) {
              r.data = data;
            } else {
              r.error = data;
            }
            return r;
          })
          .catch((e) => {
            r.error = e;
            return r;
          });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title VSPC REST
 * @version 3.2
 * @baseUrl https://vac.renovodata.com/api/v3
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  token = {
    /**
     * @description Performs authentication using the OAuth 2.0 Authorization Framework.
     *
     * @tags Authentication
     * @name OAuth2IssueToken
     * @summary OAuth 2.0 Authentication
     * @request POST:/token
     */
    oAuth2IssueToken: (
      data: {
        grant_type: "password" | "refresh_token" | "authorization_code" | "public_key" | "mfa" | "as";
        username?: string;
        password?: string;
        refresh_token?: string;
        mfa_token?: string;
        mfa_code?: string;
        code?: string;
        public_key?: string;
        userUid?: string;
      },
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<OAuth2Result, OAuth2Error>({
        path: `/token`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),
  };
  authentication = {
    /**
     * @description Issues an RSA key pair. > You can specify the key size if needed.
     *
     * @tags Authentication
     * @name GenerateNewRsaKeyPair
     * @summary Obtain RSA Keys
     * @request GET:/authentication/keys/rsa
     * @secure
     */
    generateNewRsaKeyPair: (query?: { keySize?: number; select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: RsaKeyPair; errors?: ResponseError[] }, ErrorResponse>({
        path: `/authentication/keys/rsa`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Issues a PKCS#12 container with an RSA private key and an X.509 certificate.
     *
     * @tags Authentication
     * @name GenerateNewPkcs12KeyPair
     * @request GET:/authentication/keys/rsa-pkcs12
     * @secure
     */
    generateNewPkcs12KeyPair: (
      query: { keySize?: number; subject: string; password?: string; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: RsaKeyPair; errors?: ResponseError[] }, ErrorResponse>({
        path: `/authentication/keys/rsa-pkcs12`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Decrypts an encrypted PKCS#12 container. > If container does not include private key the server will return an error with the `1210` code.
     *
     * @tags Authentication
     * @name DecryptPkcs12Container
     * @request POST:/authentication/keys/rsa-pkcs12/decrypt
     * @secure
     */
    decryptPkcs12Container: (
      body: { certificateContent: string; password?: string },
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: RsaKeyPair; errors?: ResponseError[] }, ErrorResponse>({
        path: `/authentication/keys/rsa-pkcs12/decrypt`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Issues a TOTP secret and a URL-encoded secret for authenticate applications.
     *
     * @tags Authentication
     * @name GenerateTotpSecret
     * @summary Obtain TOTP Secret
     * @request GET:/authentication/keys/totp-secret
     * @secure
     */
    generateTotpSecret: (query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: TotpSecret; errors?: ResponseError[] }, ErrorResponse>({
        path: `/authentication/keys/totp-secret`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Generates a decryption challenge for the specified public key. The challenge must be decrypted in 30 seconds. > Operation is deprecated. We recommend to authorize using the `/users/{userUid}/logins/apikey` or `/token` endpoint.
     *
     * @tags Authentication
     * @name AsymmetricAlgorithmChallenge
     * @summary Generate Asymmetric Authentication Challenge
     * @request POST:/authentication/asymmetricalgorithm
     * @deprecated
     */
    asymmetricAlgorithmChallenge: (body: File, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<
        { meta?: ResponseMetadata; data?: AsymmetricAlgorithmChallenge; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/authentication/asymmetricalgorithm`,
        method: "POST",
        query: query,
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * @description Issues access and refresh tokens in response to a decrypted challenge. > Operation is deprecated. We recommend to authorize using the `/token` endpoint.
     *
     * @tags Authentication
     * @name AsymmetricAlgorithmCompleteChallenge
     * @summary Obtain Tokens for Decrypted Challenge
     * @request PATCH:/authentication/asymmetricalgorithm
     * @deprecated
     */
    asymmetricAlgorithmCompleteChallenge: (body: File, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: AuthenticationResult; errors?: ResponseError[] }, ErrorResponse>({
        path: `/authentication/asymmetricalgorithm`,
        method: "PATCH",
        query: query,
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * @description Issues access and refresh tokens for the specified username and password. > Operation is deprecated. We recommend to authorize using the `/token` endpoint.
     *
     * @tags Authentication
     * @name UsernamePasswordAuthenticate
     * @summary Authenticate with User Name and Password
     * @request POST:/authentication/usernamepassword
     * @deprecated
     */
    usernamePasswordAuthenticate: (
      data: { username: string; password: string },
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: AuthenticationResult[]; errors?: ResponseError[] }, ErrorResponse>(
        {
          path: `/authentication/usernamepassword`,
          method: "POST",
          query: query,
          body: data,
          type: ContentType.FormData,
          format: "json",
          ...params,
        },
      ),

    /**
     * @description Returns access and refresh tokens in response to refresh token. > Operation is deprecated. We recommend to authorize using the `/token` endpoint.
     *
     * @tags Authentication
     * @name RefreshTokenAuthenticate
     * @summary Obtain New Pair of Tokens
     * @request POST:/authentication/refresh
     * @deprecated
     */
    refreshTokenAuthenticate: (
      data: { refreshToken: string },
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: AuthenticationResult; errors?: ResponseError[] }, ErrorResponse>({
        path: `/authentication/refresh`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),
  };
  asyncActions = {
    /**
     * @description Returns a configuration of an async action service.
     *
     * @tags AsyncActions
     * @name GetAsyncActionsConfig
     * @summary Get Async Action Configuration
     * @request GET:/asyncActions/config
     * @secure
     */
    getAsyncActionsConfig: (query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: AsyncActionsConfig; errors?: ResponseError[] }, ErrorResponse>({
        path: `/asyncActions/config`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of an async action with the specified UID.
     *
     * @tags AsyncActions
     * @name GetAsyncActionInfo
     * @summary Get Async Action
     * @request GET:/asyncActions/{actionId}
     * @secure
     */
    getAsyncActionInfo: (actionId: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: AsyncActionInfo; errors?: ResponseError[] }, ErrorResponse>({
        path: `/asyncActions/${actionId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Cancels an action with the specified UID.
     *
     * @tags AsyncActions
     * @name CancelAsyncAction
     * @summary Cancel Async Action
     * @request DELETE:/asyncActions/{actionId}
     * @secure
     */
    cancelAsyncAction: (actionId: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/asyncActions/${actionId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of results of an action with the specified UID.
     *
     * @tags AsyncActions
     * @name GetAsyncActionResult
     * @summary Get Async Action Result
     * @request GET:/asyncActions/{actionId}/result
     * @secure
     */
    getAsyncActionResult: (actionId: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<object, ErrorResponse>({
        path: `/asyncActions/${actionId}/result`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes results of an action with the specified UID.
     *
     * @tags AsyncActions
     * @name ClearAsyncActionResult
     * @summary Delete Async Action Result
     * @request DELETE:/asyncActions/{actionId}/result
     * @secure
     */
    clearAsyncActionResult: (actionId: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/asyncActions/${actionId}/result`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * @description Returns a resource representation of a currently logged in user.
     *
     * @tags Accounts
     * @name GetCurrentUser
     * @summary Get Current User
     * @request GET:/users/me
     * @secure
     */
    getCurrentUser: (query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: User; errors?: ResponseError[] }, ErrorResponse>({
        path: `/users/me`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all user identities.
     *
     * @tags Accounts
     * @name GetLogins
     * @summary Get All User Identities
     * @request GET:/users/logins
     * @secure
     */
    getLogins: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: UserLogin[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/users/logins`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all authentication types configured for a user with the specified UID.
     *
     * @tags Accounts
     * @name GetUserLogins
     * @summary Get All Identities of User
     * @request GET:/users/{userUid}/logins
     * @secure
     */
    getUserLogins: (userUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: UserLogin[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/users/${userUid}/logins`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of subtenant user backup resources.
     *
     * @tags Accounts
     * @name GetUsersBackupResources
     * @summary Get All User Backup Resources
     * @request GET:/users/backupResources
     * @secure
     */
    getUsersBackupResources: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: UserBackupResource[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/users/backupResources`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Enables multi-factor authentication for a user with the specified UID.
     *
     * @tags Accounts
     * @name AddTotpLogin
     * @summary Enable MFA for User
     * @request POST:/users/{userUid}/logins/totp
     * @secure
     */
    addTotpLogin: (
      userUid: string,
      query: {
        secretUrl: string;
        code: string;
        description: string;
        scopes: ("unknown" | "integration" | "rest" | "ui")[];
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: UserLogin; errors?: ResponseError[] }, ErrorResponse>({
        path: `/users/${userUid}/logins/totp`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Assigns a public key to a user with the specified UID.
     *
     * @tags Accounts
     * @name AddAsymmetricAlgorithmLogin
     * @summary Assign Public Key to User
     * @request POST:/users/{userUid}/logins/asymmetricalgorithm
     * @secure
     */
    addAsymmetricAlgorithmLogin: (
      userUid: string,
      query: {
        description: string;
        scopes: ("unknown" | "integration" | "rest" | "ui")[];
        isReadAccessOnly?: boolean;
        select?: string;
      },
      body: File,
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: UserLogin; errors?: ResponseError[] }, ErrorResponse>({
        path: `/users/${userUid}/logins/asymmetricalgorithm`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Assigns an API key to a user with the specified UID.
     *
     * @tags Accounts
     * @name AddApiKeyLogin
     * @summary Assign API Key to User
     * @request POST:/users/{userUid}/logins/apikey
     * @secure
     */
    addApiKeyLogin: (
      userUid: string,
      query: {
        description: string;
        scopes: ("unknown" | "integration" | "rest" | "ui")[];
        isReadAccessOnly?: boolean;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: UserLogin; errors?: ResponseError[] }, ErrorResponse>({
        path: `/users/${userUid}/logins/apikey`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a user identity with the specified ID.
     *
     * @tags Accounts
     * @name GetUserLogin
     * @summary Get User Identity
     * @request GET:/users/{userUid}/logins/{userLoginId}
     * @secure
     */
    getUserLogin: (userUid: string, userLoginId: number, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: UserLogin; errors?: ResponseError[] }, ErrorResponse>({
        path: `/users/${userUid}/logins/${userLoginId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a user identity with the specified ID.
     *
     * @tags Accounts
     * @name UpdateUserLogin
     * @summary Modify User Identity
     * @request PATCH:/users/{userUid}/logins/{userLoginId}
     * @secure
     */
    updateUserLogin: (
      userUid: string,
      userLoginId: number,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: UserLogin; errors?: ResponseError[] }, ErrorResponse>({
        path: `/users/${userUid}/logins/${userLoginId}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a user identity with the specified ID.
     *
     * @tags Accounts
     * @name DeleteUserLogin
     * @summary Delete User Identity
     * @request DELETE:/users/{userUid}/logins/{userLoginId}
     * @secure
     */
    deleteUserLogin: (userUid: string, userLoginId: number, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: boolean; errors?: ResponseError[] }, ErrorResponse>({
        path: `/users/${userUid}/logins/${userLoginId}`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Resets a password of a specific user.
     *
     * @tags Accounts
     * @name CreateResetPasswordRequest
     * @summary Reset User Password
     * @request POST:/users/resetpassword
     */
    createResetPasswordRequest: (
      body: { email: string; userName: string; returnUrl?: string },
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: boolean; errors?: ResponseError[] }, ErrorResponse>({
        path: `/users/resetpassword`,
        method: "POST",
        query: query,
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Completes a request for password reset.
     *
     * @tags Accounts
     * @name CompleteResetPasswordRequest
     * @summary Complete Password Reset
     * @request PUT:/users/resetpassword
     */
    completeResetPasswordRequest: (
      body: { code: string; newPassword: string },
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: boolean; errors?: ResponseError[] }, ErrorResponse>({
        path: `/users/resetpassword`,
        method: "PUT",
        query: query,
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all users.
     *
     * @tags Accounts
     * @name GetUsers
     * @summary Get All Users
     * @request GET:/users
     * @secure
     */
    getUsers: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: User[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new user with specific properties.
     *
     * @tags Accounts
     * @name CreateUser
     * @summary Create User
     * @request POST:/users
     * @secure
     */
    createUser: (body: UserInput, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: User; errors?: ResponseError[] }, ErrorResponse>({
        path: `/users`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a user with the specified UID.
     *
     * @tags Accounts
     * @name GetUser
     * @summary Get User
     * @request GET:/users/{userUid}
     * @secure
     */
    getUser: (userUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: User; errors?: ResponseError[] }, ErrorResponse>({
        path: `/users/${userUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a user with the specified UID.
     *
     * @tags Accounts
     * @name PatchUser
     * @summary Modify User
     * @request PATCH:/users/{userUid}
     * @secure
     */
    patchUser: (userUid: string, body: JsonPatches, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: User; errors?: ResponseError[] }, ErrorResponse>({
        path: `/users/${userUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a user with the specified UID.
     *
     * @tags Accounts
     * @name DeleteUser
     * @summary Delete User
     * @request DELETE:/users/{userUid}
     * @secure
     */
    deleteUser: (userUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/users/${userUid}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a backup resource available to a subtenant user with the specified UID.
     *
     * @tags Accounts
     * @name GetUserBackupResource
     * @summary Get User Backup Resource
     * @request GET:/users/{userUid}/backupResource
     * @secure
     */
    getUserBackupResource: (userUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: UserBackupResource; errors?: ResponseError[] }, ErrorResponse>({
        path: `/users/${userUid}/backupResource`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a backup resource available to a subtenant user with the specified UID.
     *
     * @tags Accounts
     * @name PatchUserBackupResource
     * @summary Modify User Backup Resource
     * @request PATCH:/users/{userUid}/backupResource
     * @secure
     */
    patchUserBackupResource: (
      userUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: UserBackupResource; errors?: ResponseError[] }, ErrorResponse>({
        path: `/users/${userUid}/backupResource`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all locations assigned to a user with the specified UID.
     *
     * @tags Accounts
     * @name GetUserLocations
     * @summary Get All User Locations
     * @request GET:/users/{userUid}/locations
     * @secure
     */
    getUserLocations: (
      userUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: OrganizationLocation[]; errors?: ResponseError[] }, ErrorResponse>(
        {
          path: `/users/${userUid}/locations`,
          method: "GET",
          query: query,
          secure: true,
          format: "json",
          ...params,
        },
      ),

    /**
     * @description Assigns a location to a user with the specified UID.
     *
     * @tags Accounts
     * @name SetUserToLocation
     * @summary Assign Location to User
     * @request POST:/users/{userUid}/locations
     * @secure
     */
    setUserToLocation: (userUid: string, query: { locationUid: string; select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: User; errors?: ResponseError[] }, ErrorResponse>({
        path: `/users/${userUid}/locations`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Unassigns a location from a user with the specified UID.
     *
     * @tags Accounts
     * @name DeleteUserFromLocation
     * @summary Unassign Location from User
     * @request DELETE:/users/{userUid}/locations
     * @secure
     */
    deleteUserFromLocation: (userUid: string, query: { locationUid: string }, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/users/${userUid}/locations`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Revoke access token for a specific user identity or all tokens if the `userLoginId` parameter value is not specified.
     *
     * @tags Accounts
     * @name RevokeAuthenticationToken
     * @summary Revoke Authentication Token
     * @request DELETE:/users/{userUid}/tokens
     * @secure
     */
    revokeAuthenticationToken: (
      userUid: string,
      query?: { userLoginId?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: boolean; errors?: ResponseError[] }, ErrorResponse>({
        path: `/users/${userUid}/tokens`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  about = {
    /**
     * @description Returns general information about the currently installed version of Veeam Service Provider Console.
     *
     * @tags About
     * @name GetAboutInformation
     * @summary Get Veeam Service Provider Console Version
     * @request GET:/about
     * @secure
     */
    getAboutInformation: (query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: About; errors?: ResponseError[] }, ErrorResponse>({
        path: `/about`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  configuration = {
    /**
     * @description Returns a collection resource representation of security cerificates on Veeam Service Provider Console server that are available for installation.
     *
     * @tags Configuration
     * @name GetAllAvailableCertificates
     * @summary Get All Certificates on Veeam Service Provider Console Server
     * @request GET:/configuration/certificates
     * @secure
     */
    getAllAvailableCertificates: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: Certificate[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/configuration/certificates`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a Veeam Service Provider Console server security certificate.
     *
     * @tags Configuration
     * @name GetCertificate
     * @summary Get Certificate
     * @request GET:/configuration/certificates/console
     * @secure
     */
    getCertificate: (query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: Certificate; errors?: ResponseError[] }, ErrorResponse>({
        path: `/configuration/certificates/console`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Installs a Veeam Service Provider Console server security certificate.
     *
     * @tags Configuration
     * @name InstallCertificate
     * @summary Install Certificate
     * @request PUT:/configuration/certificates/console
     * @secure
     */
    installCertificate: (body: InstallCertificate, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: Certificate; errors?: ResponseError[] }, ErrorResponse>({
        path: `/configuration/certificates/console`,
        method: "PUT",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all backup policies.
     *
     * @tags Backup Policies
     * @name GetBackupPolicies
     * @summary Get All Backup Policies
     * @request GET:/configuration/backupPolicies
     * @secure
     */
    getBackupPolicies: (
      query?: {
        availableToAssignForCompanyUid?: string;
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupPolicy[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/configuration/backupPolicies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all backup policies that can be assigned to agents.
     *
     * @tags Backup Policies
     * @name GetBackupPoliciesToAssign
     * @summary Get All Available Backup Policies
     * @request GET:/configuration/backupPoliciesToAssign
     * @secure
     */
    getBackupPoliciesToAssign: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupPolicyToAssign[]; errors?: ResponseError[] }, ErrorResponse>(
        {
          path: `/configuration/backupPoliciesToAssign`,
          method: "GET",
          query: query,
          secure: true,
          format: "json",
          ...params,
        },
      ),

    /**
     * @description Returns a resource representation of a backup policy with the specified UID.
     *
     * @tags Backup Policies
     * @name GetBackupPolicy
     * @summary Get Backup Policy
     * @request GET:/configuration/backupPolicies/{policyUid}
     * @secure
     */
    getBackupPolicy: (policyUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupPolicy; errors?: ResponseError[] }, ErrorResponse>({
        path: `/configuration/backupPolicies/${policyUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a backup policy with the specified UID.
     *
     * @tags Backup Policies
     * @name DeleteBackupPolicy
     * @summary Delete Backup Policy
     * @request DELETE:/configuration/backupPolicies/{policyUid}
     * @secure
     */
    deleteBackupPolicy: (policyUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/configuration/backupPolicies/${policyUid}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a backup policy with the specified UID.
     *
     * @tags Backup Policies
     * @name PatchBackupPolicy
     * @summary Modify Backup Policy
     * @request PATCH:/configuration/backupPolicies/{policyUid}
     * @secure
     */
    patchBackupPolicy: (
      policyUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupPolicy; errors?: ResponseError[] }, ErrorResponse>({
        path: `/configuration/backupPolicies/${policyUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a copy of a backup policy with the specified UID.
     *
     * @tags Backup Policies
     * @name CopyBackupPolicy
     * @summary Copy Backup Policy
     * @request POST:/configuration/backupPolicies/{policyUid}/copy
     * @secure
     */
    copyBackupPolicy: (
      policyUid: string,
      query: { newPolicyName: string; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupPolicy; errors?: ResponseError[] }, ErrorResponse>({
        path: `/configuration/backupPolicies/${policyUid}/copy`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all backup policies configured for Microsoft Windows computers.
     *
     * @tags Backup Policies
     * @name GetWindowsBackupPolicies
     * @summary Get All Policies for Windows Computers
     * @request GET:/configuration/backupPolicies/windows
     * @secure
     */
    getWindowsBackupPolicies: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: WindowsBackupPolicy[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/configuration/backupPolicies/windows`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a backup policy for Microsoft Windows computers.
     *
     * @tags Backup Policies
     * @name CreateWindowsBackupPolicy
     * @summary Create Backup Policy for Windows Computers
     * @request POST:/configuration/backupPolicies/windows
     * @secure
     */
    createWindowsBackupPolicy: (
      body: WindowsBackupPolicyInput,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: WindowsBackupPolicy; errors?: ResponseError[] }, ErrorResponse>({
        path: `/configuration/backupPolicies/windows`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all backup policies configured for Linux computers.
     *
     * @tags Backup Policies
     * @name GetLinuxBackupPolicies
     * @summary Get All Policies for Linux Computers
     * @request GET:/configuration/backupPolicies/linux
     * @secure
     */
    getLinuxBackupPolicies: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: LinuxBackupPolicy[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/configuration/backupPolicies/linux`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a backup policy for Linux computers.
     *
     * @tags Backup Policies
     * @name CreateLinuxBackupPolicy
     * @summary Create Backup Policy for Linux Computers
     * @request POST:/configuration/backupPolicies/linux
     * @secure
     */
    createLinuxBackupPolicy: (body: LinuxBackupPolicyInput, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: LinuxBackupPolicy; errors?: ResponseError[] }, ErrorResponse>({
        path: `/configuration/backupPolicies/linux`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a Windows computer backup policy with the specified UID.
     *
     * @tags Backup Policies
     * @name GetWindowsBackupPolicy
     * @summary Get Backup Policy for Windows Computers
     * @request GET:/configuration/backupPolicies/windows/{policyUid}
     * @secure
     */
    getWindowsBackupPolicy: (policyUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: WindowsBackupPolicy; errors?: ResponseError[] }, ErrorResponse>({
        path: `/configuration/backupPolicies/windows/${policyUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a Windows computer backup policy with the specified UID.
     *
     * @tags Backup Policies
     * @name PatchWindowsBackupPolicy
     * @summary Modify Backup Policy for Windows Computers
     * @request PATCH:/configuration/backupPolicies/windows/{policyUid}
     * @secure
     */
    patchWindowsBackupPolicy: (
      policyUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: WindowsBackupPolicy; errors?: ResponseError[] }, ErrorResponse>({
        path: `/configuration/backupPolicies/windows/${policyUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a Linux computer backup policy with the specified UID.
     *
     * @tags Backup Policies
     * @name GetLinuxBackupPolicy
     * @summary Get Backup Policy for Linux Computers
     * @request GET:/configuration/backupPolicies/linux/{policyUid}
     * @secure
     */
    getLinuxBackupPolicy: (policyUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: LinuxBackupPolicy; errors?: ResponseError[] }, ErrorResponse>({
        path: `/configuration/backupPolicies/linux/${policyUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a Linux computer backup policy with the specified UID.
     *
     * @tags Backup Policies
     * @name PatchLinuxBackupPolicy
     * @summary Modify Backup Policy for Linux Computers
     * @request PATCH:/configuration/backupPolicies/linux/{policyUid}
     * @secure
     */
    patchLinuxBackupPolicy: (
      policyUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: LinuxBackupPolicy; errors?: ResponseError[] }, ErrorResponse>({
        path: `/configuration/backupPolicies/linux/${policyUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  organizations = {
    /**
     * @description Returns a collection resource representation of all organization containers.
     *
     * @tags Containers
     * @name GetOrgContainers
     * @summary Get All Containers
     * @request GET:/organizations/containers
     * @secure
     */
    getOrgContainers: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: OrgContainer[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/containers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new organization container with specific properties.
     *
     * @tags Containers
     * @name CreateOrgContainer
     * @summary Create Container
     * @request POST:/organizations/containers
     * @secure
     */
    createOrgContainer: (body: OrgContainerInput, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: OrgContainer; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/containers`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of an organization container with the specified UID.
     *
     * @tags Containers
     * @name GetOrgContainer
     * @summary Get Container
     * @request GET:/organizations/containers/{containerUid}
     * @secure
     */
    getOrgContainer: (containerUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: OrgContainer; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/containers/${containerUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies an organization container with the specified UID.
     *
     * @tags Containers
     * @name PatchOrgContainer
     * @summary Modify Container
     * @request PATCH:/organizations/containers/{containerUid}
     * @secure
     */
    patchOrgContainer: (
      containerUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: OrgContainer; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/containers/${containerUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes an organization container with the specified UID.
     *
     * @tags Containers
     * @name DeleteOrgContainer
     * @summary Delete Container
     * @request DELETE:/organizations/containers/{containerUid}
     * @secure
     */
    deleteOrgContainer: (containerUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/organizations/containers/${containerUid}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all resellers.
     *
     * @tags Resellers
     * @name GetResellers
     * @summary Get All Resellers
     * @request GET:/organizations/resellers
     * @secure
     */
    getResellers: (
      query?: {
        expand?: ResellerExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: Reseller[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/resellers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new reseller with specific properties.
     *
     * @tags Resellers
     * @name CreateReseller
     * @summary Create Reseller
     * @request POST:/organizations/resellers
     * @secure
     */
    createReseller: (body: ResellerInput, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: Reseller; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/resellers`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all identity providers.
     *
     * @tags Single Sign On
     * @name GetIdentityProviders
     * @summary Get All Identity Providers
     * @request GET:/organizations/identityProviders
     * @secure
     */
    getIdentityProviders: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: IdentityProviderSettings[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/identityProviders`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Checks whether the specified name of an identity provider is unique.
     *
     * @tags Single Sign On
     * @name CheckUniquenessForIdentityProviderName
     * @summary Check Uniqueness of Identity Provider Name.
     * @request POST:/organizations/identityProviders/name
     * @secure
     */
    checkUniquenessForIdentityProviderName: (query: { name: string; select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: boolean; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/identityProviders/name`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all identity providers managing user identities of an organization with the specified UID.
     *
     * @tags Single Sign On
     * @name GetOrganizationIdentityProviders
     * @summary Get All Identity Providers of Organization
     * @request GET:/organizations/{organizationUid}/identityProviders
     * @secure
     */
    getOrganizationIdentityProviders: (
      organizationUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: IdentityProviderSettings[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/${organizationUid}/identityProviders`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new SAML2 identity provider.
     *
     * @tags Single Sign On
     * @name CreateSaml2IdentityProvider
     * @summary Create SAML2 Identity Provider
     * @request POST:/organizations/{organizationUid}/identityProviders/saml2
     * @secure
     */
    createSaml2IdentityProvider: (
      organizationUid: string,
      body: IdentityProviderSettings,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: IdentityProviderSettings; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/${organizationUid}/identityProviders/saml2`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of mapping rules configured for all identity providers of an organization with the specified UID.
     *
     * @tags Single Sign On
     * @name GetOrganizationIdentityProvidersRules
     * @summary Get Mapping Rules of All Organization Identity Providers
     * @request GET:/organizations/{organizationUid}/identityProviders/rules
     * @secure
     */
    getOrganizationIdentityProvidersRules: (
      organizationUid: string,
      query?: {
        expand?: IdentityProviderRoleMappingRuleExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: IdentityProviderRoleMappingRule[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/${organizationUid}/identityProviders/rules`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all mapping rules.
     *
     * @tags Single Sign On
     * @name GetOrganizationsIdentityProvidersRules
     * @summary Get All Mapping Rules
     * @request GET:/organizations/identityProviders/rules
     * @secure
     */
    getOrganizationsIdentityProvidersRules: (
      query?: {
        expand?: IdentityProviderRoleMappingRuleExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: IdentityProviderRoleMappingRule[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/identityProviders/rules`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of mapping rules configured for an organization identity provider with the specified name.
     *
     * @tags Single Sign On
     * @name GetIdentityProviderRules
     * @summary Get Mapping Rules of Organization Identity Provider
     * @request GET:/organizations/{organizationUid}/identityProviders/{identityProviderName}/rules
     * @secure
     */
    getIdentityProviderRules: (
      organizationUid: string,
      identityProviderName: string,
      query?: {
        expand?: IdentityProviderRoleMappingRuleExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: IdentityProviderRoleMappingRule[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/${organizationUid}/identityProviders/${identityProviderName}/rules`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates mapping rule for an organization identity provider with the specified name.
     *
     * @tags Single Sign On
     * @name CreateIdentityProviderRule
     * @summary Create Mapping Rule for Organization Identity Provider
     * @request POST:/organizations/{organizationUid}/identityProviders/{identityProviderName}/rules
     * @secure
     */
    createIdentityProviderRule: (
      organizationUid: string,
      identityProviderName: string,
      body: IdentityProviderRoleMappingRule,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: IdentityProviderRoleMappingRule; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/${organizationUid}/identityProviders/${identityProviderName}/rules`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of an organization identity provider mapping rule with the specified UID.
     *
     * @tags Single Sign On
     * @name GetIdentityProviderRule
     * @summary Get Organization Identity Provider Mapping Rule
     * @request GET:/organizations/{organizationUid}/identityProviders/{identityProviderName}/rules/{ruleUid}
     * @secure
     */
    getIdentityProviderRule: (
      organizationUid: string,
      identityProviderName: string,
      ruleUid: string,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: IdentityProviderRoleMappingRule; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/${organizationUid}/identityProviders/${identityProviderName}/rules/${ruleUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies an organization identity provider mapping rule with the specified UID.
     *
     * @tags Single Sign On
     * @name PatchIdentityProviderRule
     * @summary Modify Organization Identity Provider Mapping Rule
     * @request PATCH:/organizations/{organizationUid}/identityProviders/{identityProviderName}/rules/{ruleUid}
     * @secure
     */
    patchIdentityProviderRule: (
      organizationUid: string,
      identityProviderName: string,
      ruleUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: IdentityProviderRoleMappingRule; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/${organizationUid}/identityProviders/${identityProviderName}/rules/${ruleUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes an organization identity provider mapping rule with the specified UID.
     *
     * @tags Single Sign On
     * @name DeleteIdentityProviderRule
     * @summary Delete Organization Identity Provider Mapping Rule
     * @request DELETE:/organizations/{organizationUid}/identityProviders/{identityProviderName}/rules/{ruleUid}
     * @secure
     */
    deleteIdentityProviderRule: (
      organizationUid: string,
      identityProviderName: string,
      ruleUid: string,
      params: RequestParams = {},
    ) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/organizations/${organizationUid}/identityProviders/${identityProviderName}/rules/${ruleUid}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of an organization identity provider with the specified name.
     *
     * @tags Single Sign On
     * @name GetIdentityProvider
     * @summary Get Organization Identity Provider
     * @request GET:/organizations/{organizationUid}/identityProviders/{identityProviderName}
     * @secure
     */
    getIdentityProvider: (
      organizationUid: string,
      identityProviderName: string,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: IdentityProviderSettings; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/${organizationUid}/identityProviders/${identityProviderName}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies an organization identity provider with the specified name.
     *
     * @tags Single Sign On
     * @name PatchIdentityProvider
     * @summary Modify Organization Identity Provider
     * @request PATCH:/organizations/{organizationUid}/identityProviders/{identityProviderName}
     * @secure
     */
    patchIdentityProvider: (
      organizationUid: string,
      identityProviderName: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: IdentityProviderSettings; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/${organizationUid}/identityProviders/${identityProviderName}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes an organization identity provider with the specified name.
     *
     * @tags Single Sign On
     * @name DeleteIdentityProvider
     * @summary Delete Organization Identity Provider
     * @request DELETE:/organizations/{organizationUid}/identityProviders/{identityProviderName}
     * @secure
     */
    deleteIdentityProvider: (organizationUid: string, identityProviderName: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/organizations/${organizationUid}/identityProviders/${identityProviderName}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Revalidates an organization identity provider with the specified name.
     *
     * @tags Single Sign On
     * @name RevalidateIdentityProvider
     * @summary Revalidate Organization Identity Provider
     * @request POST:/organizations/{organizationUid}/identityProviders/{identityProviderName}/revalidate
     * @secure
     */
    revalidateIdentityProvider: (organizationUid: string, identityProviderName: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/organizations/${organizationUid}/identityProviders/${identityProviderName}/revalidate`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns content of the metadata XML file that is sent to an organization identity provider. > Error response is returned in the JSON format.'
     *
     * @tags Single Sign On
     * @name GetSaml2IdentityProviderClientMetadata
     * @summary Get Metadata for Organization Identity Provider.
     * @request GET:/organizations/{organizationUid}/identityProviders/saml2/{identityProviderName}/metadata
     */
    getSaml2IdentityProviderClientMetadata: (
      organizationUid: string,
      identityProviderName: string,
      params: RequestParams = {},
    ) =>
      this.request<object, ErrorResponse>({
        path: `/organizations/${organizationUid}/identityProviders/saml2/${identityProviderName}/metadata`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a reseller with the specified UID.
     *
     * @tags Resellers
     * @name GetReseller
     * @summary Get Reseller
     * @request GET:/organizations/resellers/{resellerUid}
     * @secure
     */
    getReseller: (resellerUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: Reseller; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/resellers/${resellerUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a reseller with the specified UID.
     *
     * @tags Resellers
     * @name PatchReseller
     * @summary Modify Reseller
     * @request PATCH:/organizations/resellers/{resellerUid}
     * @secure
     */
    patchReseller: (resellerUid: string, body: JsonPatches, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: Reseller; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/resellers/${resellerUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a reseller with the specified UID.
     *
     * @tags Resellers
     * @name DeleteReseller
     * @summary Delete Reseller
     * @request DELETE:/organizations/resellers/{resellerUid}
     * @secure
     */
    deleteReseller: (resellerUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/organizations/resellers/${resellerUid}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of the Veeam Service Provider Console components that a reseller with the specified UID can access.
     *
     * @tags Resellers
     * @name GetResellerPermissions
     * @summary Get Reseller Permissions
     * @request GET:/organizations/resellers/{resellerUid}/permissions
     * @secure
     */
    getResellerPermissions: (resellerUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: ResellerPermissions; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/resellers/${resellerUid}/permissions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies set of the Veeam Service Provider Console components that a reseller with the specified UID can access.
     *
     * @tags Resellers
     * @name PatchResellerPermissions
     * @summary Modify Reseller Permissions
     * @request PATCH:/organizations/resellers/{resellerUid}/permissions
     * @secure
     */
    patchResellerPermissions: (
      resellerUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: ResellerPermissions; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/resellers/${resellerUid}/permissions`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Sends a welcome email to a reseller with the specified UID.
     *
     * @tags Resellers
     * @name SendWelcomeEmailToReseller
     * @summary Send Welcome Email to Reseller
     * @request POST:/organizations/resellers/{resellerUid}/welcomeEmail
     * @secure
     */
    sendWelcomeEmailToReseller: (resellerUid: string, body: WelcomeEmailOptions, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/organizations/resellers/${resellerUid}/welcomeEmail`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of companies managed by a reseller with the specified UID.
     *
     * @tags Resellers
     * @name GetCompaniesByReseller
     * @summary Get All Companies Managed by Reseller
     * @request GET:/organizations/resellers/{resellerUid}/companies
     * @secure
     */
    getCompaniesByReseller: (
      resellerUid: string,
      query?: {
        expand?: CompanyExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: Company[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/resellers/${resellerUid}/companies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Assigns a company with the specified UID to a reseller.
     *
     * @tags Resellers
     * @name AssignCompanyToReseller
     * @summary Assign Company to Reseller
     * @request POST:/organizations/resellers/{resellerUid}/companies
     * @secure
     */
    assignCompanyToReseller: (resellerUid: string, query: { companyUid: string }, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/organizations/resellers/${resellerUid}/companies`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Unassigns a company with the specified UID from a reseller.
     *
     * @tags Resellers
     * @name UnassignCompanyFromReseller
     * @summary Unassign Company from Reseller
     * @request DELETE:/organizations/resellers/{resellerUid}/companies
     * @secure
     */
    unassignCompanyFromReseller: (resellerUid: string, query: { companyUid: string }, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/organizations/resellers/${resellerUid}/companies`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all custom settings configured for email notifications.
     *
     * @tags Organizations
     * @name GetCustomWelcomeEmailTemplates
     * @summary Get All Custom Settings of Email Notification
     * @request GET:/organizations/configuration/notification/welcomeEmails
     * @secure
     */
    getCustomWelcomeEmailTemplates: (
      query?: {
        organizationUid?: string;
        organizationType?: "Unknown" | "Company" | "Reseller";
        organizationScope?: "Unknown" | "CurrentObject" | "ChildObjects";
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CustomWelcomeEmailTemplate[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/configuration/notification/welcomeEmails`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of custom settings configured for email notifications of an organization with the specified UID.
     *
     * @tags Organizations
     * @name GetCustomWelcomeEmailTemplate
     * @summary Get Custom Settings of Organization Email Notifications
     * @request GET:/organizations/{organizationUid}/configuration/notification/welcomeEmail
     * @secure
     */
    getCustomWelcomeEmailTemplate: (
      organizationUid: string,
      query: { organizationType: "Unknown" | "Company" | "Reseller"; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CustomWelcomeEmailTemplate; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/${organizationUid}/configuration/notification/welcomeEmail`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Configures custom settings for email notifications of an organization with the specified UID.
     *
     * @tags Organizations
     * @name CreateCustomWelcomeEmailTemplate
     * @summary Configure Custom Settings for Organization Email Notifications
     * @request POST:/organizations/{organizationUid}/configuration/notification/welcomeEmail
     * @secure
     */
    createCustomWelcomeEmailTemplate: (
      organizationUid: string,
      body: CustomWelcomeEmailTemplate,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CustomWelcomeEmailTemplate; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/${organizationUid}/configuration/notification/welcomeEmail`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies custom settings configured for email notification of an organization with the specified UID.
     *
     * @tags Organizations
     * @name PatchCustomWelcomeEmailTemplate
     * @summary Modify Custom Settings of Organization Email Notifications
     * @request PATCH:/organizations/{organizationUid}/configuration/notification/welcomeEmail
     * @secure
     */
    patchCustomWelcomeEmailTemplate: (
      organizationUid: string,
      query: {
        organizationType: "Unknown" | "Company" | "Reseller";
        organizationScope: "Unknown" | "CurrentObject" | "ChildObjects";
        select?: string;
      },
      body: JsonPatches,
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CustomWelcomeEmailTemplate; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/${organizationUid}/configuration/notification/welcomeEmail`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of all alarm templates configured for an organization with the specified UID.
     *
     * @tags Organizations
     * @name GetOrganizationAlarms
     * @summary Get All Organization Alarm Templates
     * @request GET:/organizations/{organizationUid}/configuration/alarms
     * @secure
     */
    getOrganizationAlarms: (
      organizationUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: Alarm[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/${organizationUid}/configuration/alarms`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Enables all alarm templates configured for an organization with the specified UID.
     *
     * @tags Organizations
     * @name EnableOrganizationAlarms
     * @summary Enable Organization Alarm Templates
     * @request POST:/organizations/{organizationUid}/configuration/alarms/enable
     * @secure
     */
    enableOrganizationAlarms: (organizationUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/organizations/${organizationUid}/configuration/alarms/enable`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Disables all alarm templates configured for an organization with the specified UID.
     *
     * @tags Organizations
     * @name DisableOrganizationAlarms
     * @summary Disable Organization Alarm Templates
     * @request POST:/organizations/{organizationUid}/configuration/alarms/disable
     * @secure
     */
    disableOrganizationAlarms: (organizationUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/organizations/${organizationUid}/configuration/alarms/disable`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of policy settings configured for an organization with the specified UID.
     *
     * @tags Organizations
     * @name GetOrganizationPolicySettings
     * @summary Get Organization Policy Settings
     * @request GET:/organizations/{organizationUid}/configuration/policy
     * @secure
     */
    getOrganizationPolicySettings: (organizationUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: PolicySettings; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/${organizationUid}/configuration/policy`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies policy settings configured for an organization with the specified UID.
     *
     * @tags Organizations
     * @name PatchOrganizationPolicySettings
     * @summary Modify Organization Policy Settings
     * @request PATCH:/organizations/{organizationUid}/configuration/policy
     * @secure
     */
    patchOrganizationPolicySettings: (
      organizationUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: PolicySettings; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/${organizationUid}/configuration/policy`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of notification settings of an organization with the specified UID.
     *
     * @tags Organizations
     * @name GetOrganizationNotificationSettings
     * @summary Get Organization Notification Settings
     * @request GET:/organizations/{organizationUid}/configuration/notification
     * @secure
     */
    getOrganizationNotificationSettings: (
      organizationUid: string,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: NotificationSettings; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/${organizationUid}/configuration/notification`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies notification settings of an organization with the specified UID.
     *
     * @tags Organizations
     * @name PatchOrganizationNotificationSettings
     * @summary Modify Organization Notification Settings
     * @request PATCH:/organizations/{organizationUid}/configuration/notification
     * @secure
     */
    patchOrganizationNotificationSettings: (
      organizationUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: NotificationSettings; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/${organizationUid}/configuration/notification`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Checks provided SMTP server settings. Returns updated and corrected settings and additional information on SMTP server.
     *
     * @tags Organizations
     * @name TestNotificationSmtpSettings
     * @summary Test SMTP Server Settings
     * @request POST:/organizations/{organizationUid}/configuration/notification/smtp/test
     * @secure
     */
    testNotificationSmtpSettings: (
      organizationUid: string,
      body: SmtpSettings,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: SmtpSettings; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/${organizationUid}/configuration/notification/smtp/test`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Sends test email message with the specified settings.
     *
     * @tags Organizations
     * @name SendTestNotificationEmail
     * @summary Test Email Notifications
     * @request POST:/organizations/{organizationUid}/configuration/notification/test
     * @secure
     */
    sendTestNotificationEmail: (organizationUid: string, body: TestEmailOptions, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/organizations/${organizationUid}/configuration/notification/test`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of branding settings of an organization with the specified UID.
     *
     * @tags Organizations
     * @name GetOrganizationBrandingSettings
     * @summary Get Organization Branding Settings
     * @request GET:/organizations/{organizationUid}/configuration/branding
     * @secure
     */
    getOrganizationBrandingSettings: (
      organizationUid: string,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BrandingSettings; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/${organizationUid}/configuration/branding`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies branding settings of an organization with the specified UID.
     *
     * @tags Organizations
     * @name PatchOrganizationBrandingSettings
     * @summary Modify Organization Branding Settings
     * @request PATCH:/organizations/{organizationUid}/configuration/branding
     * @secure
     */
    patchOrganizationBrandingSettings: (
      organizationUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BrandingSettings; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/${organizationUid}/configuration/branding`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of Veeam backup agent automatic deployment settings configured for an organization with the specified UID.
     *
     * @tags Organizations
     * @name GetOrganizationAutoDeploymentSettings
     * @summary Get Organization Automatic Deployment Settings
     * @request GET:/organizations/{organizationUid}/configuration/autodeployment
     * @secure
     */
    getOrganizationAutoDeploymentSettings: (
      organizationUid: string,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: AutoDeploymentSettings; errors?: ResponseError[] }, ErrorResponse>(
        {
          path: `/organizations/${organizationUid}/configuration/autodeployment`,
          method: "GET",
          query: query,
          secure: true,
          format: "json",
          ...params,
        },
      ),

    /**
     * @description Modifies Veeam backup agent automatic deployment settings configured for an organization with the specified UID.
     *
     * @tags Organizations
     * @name PatchOrganizationAutoDeploymentSettings
     * @summary Modify Organization Automatic Deployment Settings
     * @request PATCH:/organizations/{organizationUid}/configuration/autodeployment
     * @secure
     */
    patchOrganizationAutoDeploymentSettings: (
      organizationUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: AutoDeploymentSettings; errors?: ResponseError[] }, ErrorResponse>(
        {
          path: `/organizations/${organizationUid}/configuration/autodeployment`,
          method: "PATCH",
          query: query,
          body: body,
          secure: true,
          type: ContentType.Json,
          format: "json",
          ...params,
        },
      ),

    /**
     * @description Returns a collection resource representation of all license management resources allocated to resellers.
     *
     * @tags Resellers
     * @name GetResellersLicenseResources
     * @summary Get All Reseller License Management Resources
     * @request GET:/organizations/resellers/licenseResource
     * @secure
     */
    getResellersLicenseResources: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ResellerLicenseResource[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/resellers/licenseResource`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a license management resource allocated to a reseller with the specified UID.
     *
     * @tags Resellers
     * @name GetResellerLicenseResource
     * @summary Get License Management Resource Allocated to Reseller
     * @request GET:/organizations/resellers/{resellerUid}/licenseResource
     * @secure
     */
    getResellerLicenseResource: (resellerUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<
        { meta?: ResponseMetadata; data?: ResellerLicenseResource; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/resellers/${resellerUid}/licenseResource`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a license management resource allocated to a reseller with the specified UID.
     *
     * @tags Resellers
     * @name PatchResellerLicenseResource
     * @summary Modify License Management Resource Allocated to Reseller
     * @request PATCH:/organizations/resellers/{resellerUid}/licenseResource
     * @secure
     */
    patchResellerLicenseResource: (
      resellerUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ResellerLicenseResource; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/resellers/${resellerUid}/licenseResource`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of managed company quotas configured for all resellers.
     *
     * @tags Resellers
     * @name GetResellersSiteResources
     * @summary Get All Reseller Site Resources
     * @request GET:/organizations/resellers/sites
     * @secure
     */
    getResellersSiteResources: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: ResellerSiteResource[]; errors?: ResponseError[] }, ErrorResponse>(
        {
          path: `/organizations/resellers/sites`,
          method: "GET",
          query: query,
          secure: true,
          format: "json",
          ...params,
        },
      ),

    /**
     * @description Returns a collection resource representation of managed company quotas configured for a reseller with the specified UID on all sites.
     *
     * @tags Resellers
     * @name GetResellerSiteResources
     * @summary Get All Site Resources Allocated to Reseller
     * @request GET:/organizations/resellers/{resellerUid}/sites
     * @secure
     */
    getResellerSiteResources: (
      resellerUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: ResellerSiteResource[]; errors?: ResponseError[] }, ErrorResponse>(
        {
          path: `/organizations/resellers/${resellerUid}/sites`,
          method: "GET",
          query: query,
          secure: true,
          format: "json",
          ...params,
        },
      ),

    /**
     * @description Creates a managed company quota for a reseller with the specified UID.
     *
     * @tags Resellers
     * @name CreateResellerSiteResource
     * @summary Create Reseller Site Resource
     * @request POST:/organizations/resellers/{resellerUid}/sites
     * @secure
     */
    createResellerSiteResource: (
      resellerUid: string,
      body: ResellerSiteResource,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: ResellerSiteResource; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/resellers/${resellerUid}/sites`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a managed companies quota configured for a reseller on a site with the specified UID.
     *
     * @tags Resellers
     * @name GetResellerSiteResource
     * @summary Get Reseller Site Resource
     * @request GET:/organizations/resellers/{resellerUid}/sites/{siteUid}
     * @secure
     */
    getResellerSiteResource: (
      resellerUid: string,
      siteUid: string,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: ResellerSiteResource; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/resellers/${resellerUid}/sites/${siteUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a managed companies quota configured for a reseller on the site with the specified UID.
     *
     * @tags Resellers
     * @name PatchResellerSiteResource
     * @summary Modify Reseller Site Resource
     * @request PATCH:/organizations/resellers/{resellerUid}/sites/{siteUid}
     * @secure
     */
    patchResellerSiteResource: (
      resellerUid: string,
      siteUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: ResellerSiteResource; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/resellers/${resellerUid}/sites/${siteUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a managed companies quota configured for a reseller on the site with the specified UID.
     *
     * @tags Resellers
     * @name DeleteResellerSiteResource
     * @summary Delete Reseller Site Resource
     * @request DELETE:/organizations/resellers/{resellerUid}/sites/{siteUid}
     * @secure
     */
    deleteResellerSiteResource: (resellerUid: string, siteUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/organizations/resellers/${resellerUid}/sites/${siteUid}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all reseller cloud backup resources.
     *
     * @tags Resellers
     * @name GetResellersSiteBackupResources
     * @summary Get All Reseller Backup Resources
     * @request GET:/organizations/resellers/sites/backupResources
     * @secure
     */
    getResellersSiteBackupResources: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ResellerSiteBackupResource[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/resellers/sites/backupResources`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all cloud backup resources allocated to a reseller on a site with the specified UID.
     *
     * @tags Resellers
     * @name GetResellerSiteBackupResources
     * @summary Get All Backup Resources Allocated to Reseller on Site
     * @request GET:/organizations/resellers/{resellerUid}/sites/{siteUid}/backupResources
     * @secure
     */
    getResellerSiteBackupResources: (
      resellerUid: string,
      siteUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ResellerSiteBackupResource[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/resellers/${resellerUid}/sites/${siteUid}/backupResources`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a reseller cloud backup resource on a site with the specified UID.
     *
     * @tags Resellers
     * @name CreateResellerSiteBackupResource
     * @summary Create Reseller Backup Resource on Site
     * @request POST:/organizations/resellers/{resellerUid}/sites/{siteUid}/backupResources
     * @secure
     */
    createResellerSiteBackupResource: (
      resellerUid: string,
      siteUid: string,
      body: ResellerSiteBackupResourceInput,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ResellerSiteBackupResource; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/resellers/${resellerUid}/sites/${siteUid}/backupResources`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of cloud backup resource usage by all resellers.
     *
     * @tags Resellers
     * @name GetResellersSiteBackupResourcesUsages
     * @summary Get Usage of All Reseller Backup Resources
     * @request GET:/organizations/resellers/sites/backupResources/usage
     * @secure
     */
    getResellersSiteBackupResourcesUsages: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ResellerSiteBackupResourceUsage[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/resellers/sites/backupResources/usage`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of usage of all cloud backup resources allocated to a reseller on a site with the specified UID.
     *
     * @tags Resellers
     * @name GetResellerSiteBackupResourcesUsage
     * @summary Get Usage of Reseller Backup Resources on Site
     * @request GET:/organizations/resellers/{resellerUid}/sites/{siteUid}/backupResources/usage
     * @secure
     */
    getResellerSiteBackupResourcesUsage: (
      resellerUid: string,
      siteUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ResellerSiteBackupResourceUsage[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/resellers/${resellerUid}/sites/${siteUid}/backupResources/usage`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a reseller cloud backup resource with the specified UID.
     *
     * @tags Resellers
     * @name GetResellerSiteBackupResource
     * @summary Get Reseller Backup Resource
     * @request GET:/organizations/resellers/{resellerUid}/sites/{siteUid}/backupResources/{resourceUid}
     * @secure
     */
    getResellerSiteBackupResource: (
      resellerUid: string,
      siteUid: string,
      resourceUid: string,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ResellerSiteBackupResource; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/resellers/${resellerUid}/sites/${siteUid}/backupResources/${resourceUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a reseller cloud backup resource with the specified UID.
     *
     * @tags Resellers
     * @name PatchResellerSiteBackupResource
     * @summary Modify Reseller Backup Resource
     * @request PATCH:/organizations/resellers/{resellerUid}/sites/{siteUid}/backupResources/{resourceUid}
     * @secure
     */
    patchResellerSiteBackupResource: (
      resellerUid: string,
      siteUid: string,
      resourceUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ResellerSiteBackupResource; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/resellers/${resellerUid}/sites/${siteUid}/backupResources/${resourceUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a reseller cloud backup resource with the specified UID.
     *
     * @tags Resellers
     * @name DeleteResellerSiteBackupResource
     * @summary Delete Reseller Backup Resource
     * @request DELETE:/organizations/resellers/{resellerUid}/sites/{siteUid}/backupResources/{resourceUid}
     * @secure
     */
    deleteResellerSiteBackupResource: (
      resellerUid: string,
      siteUid: string,
      resourceUid: string,
      params: RequestParams = {},
    ) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/organizations/resellers/${resellerUid}/sites/${siteUid}/backupResources/${resourceUid}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all reseller cloud replication resources.
     *
     * @tags Resellers
     * @name GetResellersSiteReplicationResources
     * @summary Get All Reseller Replication Resources
     * @request GET:/organizations/resellers/sites/replicationResources
     * @secure
     */
    getResellersSiteReplicationResources: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ResellerSiteReplicationResource[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/resellers/sites/replicationResources`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all cloud replication resources allocated to a reseller on a site with the specified UID.
     *
     * @tags Resellers
     * @name GetResellerSiteReplicationResources
     * @summary Get All Replication Resources Allocated to Reseller on Site
     * @request GET:/organizations/resellers/{resellerUid}/sites/{siteUid}/replicationResources
     * @secure
     */
    getResellerSiteReplicationResources: (
      resellerUid: string,
      siteUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ResellerSiteReplicationResource[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/resellers/${resellerUid}/sites/${siteUid}/replicationResources`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a reseller site replication resource on a site with the specified UID.
     *
     * @tags Resellers
     * @name CreateResellerSiteReplicationResource
     * @summary Create Reseller Replication Resource on Site
     * @request POST:/organizations/resellers/{resellerUid}/sites/{siteUid}/replicationResources
     * @secure
     */
    createResellerSiteReplicationResource: (
      resellerUid: string,
      siteUid: string,
      body: ResellerSiteReplicationResourceInput,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ResellerSiteReplicationResource; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/resellers/${resellerUid}/sites/${siteUid}/replicationResources`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of site replication resource usage by all resellers.
     *
     * @tags Resellers
     * @name GetResellersSiteReplicationResourcesUsages
     * @summary Get Usage of All Reseller Replication Resources
     * @request GET:/organizations/resellers/sites/replicationResources/usage
     * @secure
     */
    getResellersSiteReplicationResourcesUsages: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ResellerSiteReplicationResourceUsage[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/resellers/sites/replicationResources/usage`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of cloud replication resource usage by a reseller on a site with the specified UID.
     *
     * @tags Resellers
     * @name GetResellerSiteReplicationResourcesUsage
     * @summary Get Usage of Replication Resources by Reseller on Site
     * @request GET:/organizations/resellers/{resellerUid}/sites/{siteUid}/replicationResources/usage
     * @secure
     */
    getResellerSiteReplicationResourcesUsage: (
      resellerUid: string,
      siteUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ResellerSiteReplicationResourceUsage[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/resellers/${resellerUid}/sites/${siteUid}/replicationResources/usage`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a reseller cloud replication resource with the specified UID.
     *
     * @tags Resellers
     * @name GetResellerSiteReplicationResource
     * @summary Get Reseller Replication Resource
     * @request GET:/organizations/resellers/{resellerUid}/sites/{siteUid}/replicationResources/{resourceUid}
     * @secure
     */
    getResellerSiteReplicationResource: (
      resellerUid: string,
      siteUid: string,
      resourceUid: string,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ResellerSiteReplicationResource; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/resellers/${resellerUid}/sites/${siteUid}/replicationResources/${resourceUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a reseller cloud replication resource with the specified UID.
     *
     * @tags Resellers
     * @name PatchResellerSiteReplicationResource
     * @summary Modify Reseller Replication Resource
     * @request PATCH:/organizations/resellers/{resellerUid}/sites/{siteUid}/replicationResources/{resourceUid}
     * @secure
     */
    patchResellerSiteReplicationResource: (
      resellerUid: string,
      siteUid: string,
      resourceUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ResellerSiteReplicationResource; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/resellers/${resellerUid}/sites/${siteUid}/replicationResources/${resourceUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a reseller cloud replication resource with the specified UID.
     *
     * @tags Resellers
     * @name DeleteResellerSiteReplicationResource
     * @summary Delete Reseller Replication Resource
     * @request DELETE:/organizations/resellers/{resellerUid}/sites/{siteUid}/replicationResources/{resourceUid}
     * @secure
     */
    deleteResellerSiteReplicationResource: (
      resellerUid: string,
      siteUid: string,
      resourceUid: string,
      params: RequestParams = {},
    ) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/organizations/resellers/${resellerUid}/sites/${siteUid}/replicationResources/${resourceUid}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all reseller VMware Cloud Director replication resources.
     *
     * @tags Resellers
     * @name GetResellersSiteVcdReplicationResources
     * @summary Get All Reseller VMware Cloud Director Replication Resources
     * @request GET:/organizations/resellers/sites/vcdReplicationResources
     * @secure
     */
    getResellersSiteVcdReplicationResources: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ResellerSiteVcdReplicationResource[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/resellers/sites/vcdReplicationResources`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all VMware Cloud Director replication resources allocated to a reseller on a site with the specified UID.
     *
     * @tags Resellers
     * @name GetResellerSiteVcdReplicationResources
     * @summary Get All VMware Cloud Director Replication Resources Allocated to Reseller on Site
     * @request GET:/organizations/resellers/{resellerUid}/sites/{siteUid}/vcdReplicationResources
     * @secure
     */
    getResellerSiteVcdReplicationResources: (
      resellerUid: string,
      siteUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ResellerSiteVcdReplicationResource[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/resellers/${resellerUid}/sites/${siteUid}/vcdReplicationResources`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a VMware Cloud Director replication resource allocated to a reseller on a site with the specified UID.
     *
     * @tags Resellers
     * @name CreateResellerSiteVcdReplicationResource
     * @summary Create Reseller VMware Cloud Director Replication Resource on Site
     * @request POST:/organizations/resellers/{resellerUid}/sites/{siteUid}/vcdReplicationResources
     * @secure
     */
    createResellerSiteVcdReplicationResource: (
      resellerUid: string,
      siteUid: string,
      body: ResellerSiteVcdReplicationResourceInput,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ResellerSiteVcdReplicationResource; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/resellers/${resellerUid}/sites/${siteUid}/vcdReplicationResources`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a reseller VMware Cloud Director replication resource with the specified UID.
     *
     * @tags Resellers
     * @name GetResellerSiteVcdReplicationResource
     * @summary Get Reseller VMware Cloud Director Replication Resource
     * @request GET:/organizations/resellers/{resellerUid}/sites/{siteUid}/vcdReplicationResources/{resourceUid}
     * @secure
     */
    getResellerSiteVcdReplicationResource: (
      resellerUid: string,
      siteUid: string,
      resourceUid: string,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ResellerSiteVcdReplicationResource; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/resellers/${resellerUid}/sites/${siteUid}/vcdReplicationResources/${resourceUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a reseller VMware Cloud Director replication resource with the specified UID.
     *
     * @tags Resellers
     * @name DeleteResellerSiteVcdReplicationResource
     * @summary Delete Reseller VMware Cloud Director Replication Resource
     * @request DELETE:/organizations/resellers/{resellerUid}/sites/{siteUid}/vcdReplicationResources/{resourceUid}
     * @secure
     */
    deleteResellerSiteVcdReplicationResource: (
      resellerUid: string,
      siteUid: string,
      resourceUid: string,
      params: RequestParams = {},
    ) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/organizations/resellers/${resellerUid}/sites/${siteUid}/vcdReplicationResources/${resourceUid}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of services consumed by resellers.
     *
     * @tags Resellers
     * @name GetResellersAggregatedUsage
     * @summary Get Services Usage by All Resellers
     * @request GET:/organizations/resellers/usage
     * @secure
     */
    getResellersAggregatedUsage: (
      query?: {
        fromDate?: string;
        toDate?: string;
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ResellerAggregatedUsage[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/resellers/usage`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of services consumed by a reseller with the specified UID.
     *
     * @tags Resellers
     * @name GetResellerAggregatedUsage
     * @summary Get Services Usage by Reseller
     * @request GET:/organizations/resellers/{resellerUid}/usage
     * @secure
     */
    getResellerAggregatedUsage: (
      resellerUid: string,
      query?: {
        fromDate?: string;
        toDate?: string;
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ResellerAggregatedUsage[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/resellers/${resellerUid}/usage`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all organizations (service provider, resellers, companies).
     *
     * @tags Organizations
     * @name GetOrganizations
     * @summary Get All Organizations
     * @request GET:/organizations
     * @secure
     */
    getOrganizations: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: Organization[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of an organization with the specified UID.
     *
     * @tags Organizations
     * @name GetOrganization
     * @summary Get Organization
     * @request GET:/organizations/{organizationUid}
     * @secure
     */
    getOrganization: (organizationUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: Organization; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/${organizationUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies an organization with the specified UID.
     *
     * @tags Organizations
     * @name PatchOrganization
     * @summary Modify Organization
     * @request PATCH:/organizations/{organizationUid}
     * @secure
     */
    patchOrganization: (
      organizationUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: Organization; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/${organizationUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Refreshes a security token issued to an organization with the specified UID.
     *
     * @tags Organizations
     * @name RefreshSecurityToken
     * @summary Refresh Organization Security Token
     * @request POST:/organizations/{organizationUid}/configuration/refreshsecuritytoken
     * @secure
     */
    refreshSecurityToken: (organizationUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/organizations/${organizationUid}/configuration/refreshsecuritytoken`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all users created for a Veeam Service Provider Console organization with the specified UID.
     *
     * @tags Accounts
     * @name GetUsersByOrganization
     * @summary Get All Organization Users
     * @request GET:/organizations/{organizationUid}/users
     * @secure
     */
    getUsersByOrganization: (
      organizationUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: User[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/${organizationUid}/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a service provider.
     *
     * @tags Provider
     * @name GetProvider
     * @summary Get Service Provider
     * @request GET:/organizations/provider
     * @secure
     */
    getProvider: (query?: { expand?: ProviderExpand[]; select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: Provider; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/provider`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all companies managed by a service provider.
     *
     * @tags Provider
     * @name GetProviderCompanies
     * @summary Get Companies Managed by Service Provider
     * @request GET:/organizations/provider/companies
     * @secure
     */
    getProviderCompanies: (
      query?: {
        expand?: CompanyExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: Company[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/provider/companies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all companies managed in Veeam Service Provider Console.
     *
     * @tags Companies
     * @name GetCompanies
     * @summary Get All Companies
     * @request GET:/organizations/companies
     * @secure
     */
    getCompanies: (
      query?: {
        expand?: CompanyExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: Company[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/companies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new company managed in Veeam Service Provider Console. > After you create a company, you must create a company site resource by performing the `CreateCompanySiteResource` operation.
     *
     * @tags Companies
     * @name CreateCompany
     * @summary Create Company
     * @request POST:/organizations/companies
     * @secure
     */
    createCompany: (body: CompanyInput, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: Company; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/companies`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a company with the specified UID.
     *
     * @tags Companies
     * @name GetCompany
     * @summary Get Company
     * @request GET:/organizations/companies/{companyUid}
     * @secure
     */
    getCompany: (companyUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: Company; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/companies/${companyUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a company managed in Veeam Service Provider Console.
     *
     * @tags Companies
     * @name PatchCompany
     * @summary Modify Company
     * @request PATCH:/organizations/companies/{companyUid}
     * @secure
     */
    patchCompany: (companyUid: string, body: JsonPatches, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: Company; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/companies/${companyUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a company with the specified UID.
     *
     * @tags Companies
     * @name DeleteCompany
     * @summary Delete Company
     * @request DELETE:/organizations/companies/{companyUid}
     * @secure
     */
    deleteCompany: (
      companyUid: string,
      query: { removeAllAgents: boolean; removeBackups: boolean },
      params: RequestParams = {},
    ) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/organizations/companies/${companyUid}`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of the Veeam Service Provider Console components that a company with the specified UID can access.
     *
     * @tags Companies
     * @name GetCompanyPermissions
     * @summary Get Company Permissions
     * @request GET:/organizations/companies/{companyUid}/permissions
     * @secure
     */
    getCompanyPermissions: (companyUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: CompanyPermissions; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/companies/${companyUid}/permissions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a set of the Veeam Service Provider Console components that a company with the specified UID can access.
     *
     * @tags Companies
     * @name PatchCompanyPermissions
     * @summary Modify Company Permissions
     * @request PATCH:/organizations/companies/{companyUid}/permissions
     * @secure
     */
    patchCompanyPermissions: (
      companyUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: CompanyPermissions; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/companies/${companyUid}/permissions`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Sends a welcome email to a company with the specified UID.
     *
     * @tags Companies
     * @name SendWelcomeEmailToCompany
     * @summary Send Welcome Email to Company
     * @request POST:/organizations/companies/{companyUid}/welcomeEmail
     * @secure
     */
    sendWelcomeEmailToCompany: (companyUid: string, body: WelcomeEmailOptions, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/organizations/companies/${companyUid}/welcomeEmail`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of all site resources allocated to all companies.
     *
     * @tags Companies
     * @name GetCompaniesSiteResources
     * @summary Get All Company Site Resources
     * @request GET:/organizations/companies/sites
     * @secure
     */
    getCompaniesSiteResources: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: CompanySiteResource[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/companies/sites`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of site resources allocated to a company with the specified UID.
     *
     * @tags Companies
     * @name GetCompanySiteResources
     * @summary Get All Site Resources Allocated to Company
     * @request GET:/organizations/companies/{companyUid}/sites
     * @secure
     */
    getCompanySiteResources: (
      companyUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: CompanySiteResource[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/companies/${companyUid}/sites`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Allocates a new site resource to a company with the specified UID.
     *
     * @tags Companies
     * @name CreateCompanySiteResource
     * @summary Create Company Site Resource
     * @request POST:/organizations/companies/{companyUid}/sites
     * @secure
     */
    createCompanySiteResource: (
      companyUid: string,
      body: CompanySiteResource,
      query?: { includeInSummaryEmail?: boolean; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: CompanySiteResource; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/companies/${companyUid}/sites`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of company site resource with the specified UID.
     *
     * @tags Companies
     * @name GetCompanySiteResource
     * @summary Get Company Site Resource
     * @request GET:/organizations/companies/{companyUid}/sites/{siteUid}
     * @secure
     */
    getCompanySiteResource: (
      companyUid: string,
      siteUid: string,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: CompanySiteResource; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/companies/${companyUid}/sites/${siteUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a company site resource with the specified UID.
     *
     * @tags Companies
     * @name PatchCompanySiteResource
     * @summary Modify Company Site Resource
     * @request PATCH:/organizations/companies/{companyUid}/sites/{siteUid}
     * @secure
     */
    patchCompanySiteResource: (
      companyUid: string,
      siteUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: CompanySiteResource; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/companies/${companyUid}/sites/${siteUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a company site resource with the specified UID.
     *
     * @tags Companies
     * @name DeleteCompanySiteResource
     * @summary Delete Company Site Resource
     * @request DELETE:/organizations/companies/{companyUid}/sites/{siteUid}
     * @secure
     */
    deleteCompanySiteResource: (
      companyUid: string,
      siteUid: string,
      query: { removeBackups: boolean },
      params: RequestParams = {},
    ) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/organizations/companies/${companyUid}/sites/${siteUid}`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all company cloud backup resources.
     *
     * @tags Companies
     * @name GetCompaniesSiteBackupResources
     * @summary Get All Company Backup Resources
     * @request GET:/organizations/companies/sites/backupResources
     * @secure
     */
    getCompaniesSiteBackupResources: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanySiteBackupResource[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/companies/sites/backupResources`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all cloud backup resources allocated to a company on a site with the specified UID.
     *
     * @tags Companies
     * @name GetCompanySiteBackupResources
     * @summary Get All Backup Resources Allocated to Company on Site
     * @request GET:/organizations/companies/{companyUid}/sites/{siteUid}/backupResources
     * @secure
     */
    getCompanySiteBackupResources: (
      companyUid: string,
      siteUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanySiteBackupResource[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/companies/${companyUid}/sites/${siteUid}/backupResources`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Allocate a new cloud backup resource to a company with the specified UID.
     *
     * @tags Companies
     * @name CreateCompanySiteBackupResource
     * @summary Creates Company Backup Resource on Site
     * @request POST:/organizations/companies/{companyUid}/sites/{siteUid}/backupResources
     * @secure
     */
    createCompanySiteBackupResource: (
      companyUid: string,
      siteUid: string,
      body: CompanySiteBackupResourceInput,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanySiteBackupResource; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/companies/${companyUid}/sites/${siteUid}/backupResources`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a cloud backup resource usage by a company on a site with the specified UID.
     *
     * @tags Companies
     * @name GetCompanySiteBackupResourcesUsage
     * @summary Get Usage of All Backup Resources Allocated to Company on Site
     * @request GET:/organizations/companies/{companyUid}/sites/{siteUid}/backupResources/usage
     * @secure
     */
    getCompanySiteBackupResourcesUsage: (
      companyUid: string,
      siteUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanySiteBackupResourceUsage[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/companies/${companyUid}/sites/${siteUid}/backupResources/usage`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of cloud backup resource usage by all companies.
     *
     * @tags Companies
     * @name GetCompaniesSiteBackupResourcesUsages
     * @summary Get Usage of All Company Backup Resources
     * @request GET:/organizations/companies/sites/backupResources/usage
     * @secure
     */
    getCompaniesSiteBackupResourcesUsages: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanySiteBackupResourceUsage[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/companies/sites/backupResources/usage`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of company cloud backup resource with the specified UID.
     *
     * @tags Companies
     * @name GetCompanySiteBackupResource
     * @summary Get Company Backup Resource
     * @request GET:/organizations/companies/{companyUid}/sites/{siteUid}/backupResources/{resourceUid}
     * @secure
     */
    getCompanySiteBackupResource: (
      companyUid: string,
      siteUid: string,
      resourceUid: string,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanySiteBackupResource; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/companies/${companyUid}/sites/${siteUid}/backupResources/${resourceUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a company cloud backup resource with the specified UID.
     *
     * @tags Companies
     * @name PatchCompanySiteBackupResource
     * @summary Modify Company Backup Resource
     * @request PATCH:/organizations/companies/{companyUid}/sites/{siteUid}/backupResources/{resourceUid}
     * @secure
     */
    patchCompanySiteBackupResource: (
      companyUid: string,
      siteUid: string,
      resourceUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanySiteBackupResource; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/companies/${companyUid}/sites/${siteUid}/backupResources/${resourceUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a company cloud backup resource with the specified UID.
     *
     * @tags Companies
     * @name DeleteCompanySiteBackupResource
     * @summary Delete Company Backup Resource
     * @request DELETE:/organizations/companies/{companyUid}/sites/{siteUid}/backupResources/{resourceUid}
     * @secure
     */
    deleteCompanySiteBackupResource: (
      companyUid: string,
      siteUid: string,
      resourceUid: string,
      params: RequestParams = {},
    ) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/organizations/companies/${companyUid}/sites/${siteUid}/backupResources/${resourceUid}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a cloud traffic quota configured for a company on a site with the specified UID.
     *
     * @tags Companies
     * @name GetCompanySiteTrafficResource
     * @summary Get Company Traffic Resource
     * @request GET:/organizations/companies/{companyUid}/sites/{siteUid}/traffic
     * @secure
     */
    getCompanySiteTrafficResource: (
      companyUid: string,
      siteUid: string,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanySiteTrafficResource; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/companies/${companyUid}/sites/${siteUid}/traffic`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies cloud traffic quota configured for a company on a site with the specified UID.
     *
     * @tags Companies
     * @name PatchCompanySiteTrafficResource
     * @summary Modify Company Traffic Resource
     * @request PATCH:/organizations/companies/{companyUid}/sites/{siteUid}/traffic
     * @secure
     */
    patchCompanySiteTrafficResource: (
      companyUid: string,
      siteUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanySiteTrafficResource; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/companies/${companyUid}/sites/${siteUid}/traffic`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all company cloud replication resources.
     *
     * @tags Companies
     * @name GetCompaniesSiteReplicationResources
     * @summary Get All Company Replication Resources
     * @request GET:/organizations/companies/sites/replicationResources
     * @secure
     */
    getCompaniesSiteReplicationResources: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanySiteReplicationResource[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/companies/sites/replicationResources`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of a cloud replication resources allocated to a company on a site with the specified UID.
     *
     * @tags Companies
     * @name GetCompanySiteReplicationResources
     * @summary Get All Replication Resources Allocated to Company on Site
     * @request GET:/organizations/companies/{companyUid}/sites/{siteUid}/replicationResources
     * @secure
     */
    getCompanySiteReplicationResources: (
      companyUid: string,
      siteUid: string,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanySiteReplicationResource; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/companies/${companyUid}/sites/${siteUid}/replicationResources`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Allocates a new cloud replication resource to a company on a site with the specified UID.
     *
     * @tags Companies
     * @name CreateCompanySiteReplicationResource
     * @summary Create Company Replication Resource on Site
     * @request POST:/organizations/companies/{companyUid}/sites/{siteUid}/replicationResources
     * @secure
     */
    createCompanySiteReplicationResource: (
      companyUid: string,
      siteUid: string,
      body: CompanySiteReplicationResourceInput,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanySiteReplicationResource; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/companies/${companyUid}/sites/${siteUid}/replicationResources`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a cloud replication resource allocated to a company on a site with the specified UID.
     *
     * @tags Companies
     * @name PatchCompanySiteReplicationResource
     * @summary Modify Company Replication Resource on Site
     * @request PATCH:/organizations/companies/{companyUid}/sites/{siteUid}/replicationResources
     * @secure
     */
    patchCompanySiteReplicationResource: (
      companyUid: string,
      siteUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanySiteReplicationResource; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/companies/${companyUid}/sites/${siteUid}/replicationResources`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a company hardware plan with the specified UID.
     *
     * @tags Companies
     * @name GetCompanySiteReplicationResourceHardwarePlan
     * @summary Get Company Hardware Plan
     * @request GET:/organizations/companies/{companyUid}/sites/{siteUid}/replicationResources/hardwarePlans/{hardwarePlanUid}
     * @secure
     */
    getCompanySiteReplicationResourceHardwarePlan: (
      companyUid: string,
      siteUid: string,
      hardwarePlanUid: string,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanySiteReplicationResourceHardwarePlan; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/companies/${companyUid}/sites/${siteUid}/replicationResources/hardwarePlans/${hardwarePlanUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Unsubscribes a company from a hardware plan with the specified UID.
     *
     * @tags Companies
     * @name DeleteCompanySiteReplicationResourceHardwarePlan
     * @summary Unsubscribe Company from Hardware Plan
     * @request DELETE:/organizations/companies/{companyUid}/sites/{siteUid}/replicationResources/hardwarePlans/{hardwarePlanUid}
     * @secure
     */
    deleteCompanySiteReplicationResourceHardwarePlan: (
      companyUid: string,
      siteUid: string,
      hardwarePlanUid: string,
      params: RequestParams = {},
    ) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/organizations/companies/${companyUid}/sites/${siteUid}/replicationResources/hardwarePlans/${hardwarePlanUid}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of a network extension appliances configured for a company on a site with the specified UID.
     *
     * @tags Companies
     * @name GetCompanySiteReplicationResourcesNetworkAppliances
     * @summary Get All Network Extension Appliances Allocated to Company on Site
     * @request GET:/organizations/companies/{companyUid}/sites/{siteUid}/replicationResources/networkextensionAppliance
     * @secure
     */
    getCompanySiteReplicationResourcesNetworkAppliances: (
      companyUid: string,
      siteUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanySiteReplicationResourceNetworkAppliance[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/companies/${companyUid}/sites/${siteUid}/replicationResources/networkextensionAppliance`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a company network extension appliance with the specified UID.
     *
     * @tags Companies
     * @name GetCompanySiteReplicationResourcesNetworkAppliance
     * @summary Get Company Network Extension Appliance
     * @request GET:/organizations/companies/{companyUid}/sites/{siteUid}/replicationResources/networkextensionAppliance/{applianceUid}
     * @secure
     */
    getCompanySiteReplicationResourcesNetworkAppliance: (
      companyUid: string,
      siteUid: string,
      applianceUid: string,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanySiteReplicationResourceNetworkAppliance; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/companies/${companyUid}/sites/${siteUid}/replicationResources/networkextensionAppliance/${applianceUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a company network extension appliance with the specified UID.
     *
     * @tags Companies
     * @name PatchCompanySiteReplicationResourcesNetworkAppliance
     * @summary Modify Company Network Extension Appliance
     * @request PATCH:/organizations/companies/{companyUid}/sites/{siteUid}/replicationResources/networkextensionAppliance/{applianceUid}
     * @secure
     */
    patchCompanySiteReplicationResourcesNetworkAppliance: (
      companyUid: string,
      siteUid: string,
      applianceUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanySiteReplicationResourceNetworkAppliance; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/companies/${companyUid}/sites/${siteUid}/replicationResources/networkextensionAppliance/${applianceUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of usage of all company cloud replication resources.
     *
     * @tags Companies
     * @name GetCompaniesSiteReplicationResourcesUsages
     * @summary Get Usage of All Company Replication Resources
     * @request GET:/organizations/companies/sites/replicationResources/usage
     * @secure
     */
    getCompaniesSiteReplicationResourcesUsages: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanySiteReplicationResourceUsage[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/companies/sites/replicationResources/usage`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of usage of all cloud replication resources allocated to a company on a site with the specified UID.
     *
     * @tags Companies
     * @name GetCompanySiteReplicationResourcesUsage
     * @summary Get Usage of All Replication Resources Allocated to Company on Site
     * @request GET:/organizations/companies/{companyUid}/sites/{siteUid}/replicationResources/usage
     * @secure
     */
    getCompanySiteReplicationResourcesUsage: (
      companyUid: string,
      siteUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanySiteReplicationResourceUsage[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/companies/${companyUid}/sites/${siteUid}/replicationResources/usage`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all company VMware Cloud Director replication resources.
     *
     * @tags Companies
     * @name GetCompaniesSiteVcdReplicationResources
     * @summary Get All Company VMware Cloud Director Replication Resources
     * @request GET:/organizations/companies/sites/vcdReplicationResources
     * @secure
     */
    getCompaniesSiteVcdReplicationResources: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanySiteVcdReplicationResource[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/companies/sites/vcdReplicationResources`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of a VMware Cloud Director replication resource allocated to a company on a site with the specified UID.
     *
     * @tags Companies
     * @name GetCompanySiteVcdReplicationResources
     * @summary Get All VMware Cloud Director Replication Resources Allocated to Company on Site
     * @request GET:/organizations/companies/{companyUid}/sites/{siteUid}/vcdReplicationResources
     * @secure
     */
    getCompanySiteVcdReplicationResources: (
      companyUid: string,
      siteUid: string,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanySiteVcdReplicationResource; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/companies/${companyUid}/sites/${siteUid}/vcdReplicationResources`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Allocates a new VMware Cloud Director replication resource to a company with the specified UID.
     *
     * @tags Companies
     * @name CreateCompanySiteVcdReplicationResource
     * @summary Create Company VMware Cloud Director Replication Resource on Site
     * @request POST:/organizations/companies/{companyUid}/sites/{siteUid}/vcdReplicationResources
     * @secure
     */
    createCompanySiteVcdReplicationResource: (
      companyUid: string,
      siteUid: string,
      body: CompanySiteVcdReplicationResourceInput,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanySiteVcdReplicationResource; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/companies/${companyUid}/sites/${siteUid}/vcdReplicationResources`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a VMware Cloud Director replication resource allocated to a company on a site with the specified UID.
     *
     * @tags Companies
     * @name PatchCompanySiteVcdReplicationResource
     * @summary Modify Company VMware Cloud Director Replication Resource
     * @request PATCH:/organizations/companies/{companyUid}/sites/{siteUid}/vcdReplicationResources
     * @secure
     */
    patchCompanySiteVcdReplicationResource: (
      companyUid: string,
      siteUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanySiteVcdReplicationResource; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/companies/${companyUid}/sites/${siteUid}/vcdReplicationResources`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of an organization VDC with the specified UID.
     *
     * @tags Companies
     * @name GetCompanySiteVcdReplicationResourceDataCenter
     * @summary Get Company Organization VDC
     * @request GET:/organizations/companies/{companyUid}/sites/{siteUid}/vcdReplicationResources/dataCenters/{dataCenterUid}
     * @secure
     */
    getCompanySiteVcdReplicationResourceDataCenter: (
      companyUid: string,
      siteUid: string,
      dataCenterUid: string,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanySiteVcdReplicationResourceDataCenter; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/companies/${companyUid}/sites/${siteUid}/vcdReplicationResources/dataCenters/${dataCenterUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Unassignes from a company an organization VDC with the specified UID.
     *
     * @tags Companies
     * @name DeleteCompanySiteVcdReplicationResourceDataCenter
     * @summary Unassign Organization VDC from Company
     * @request DELETE:/organizations/companies/{companyUid}/sites/{siteUid}/vcdReplicationResources/dataCenters/{dataCenterUid}
     * @secure
     */
    deleteCompanySiteVcdReplicationResourceDataCenter: (
      companyUid: string,
      siteUid: string,
      dataCenterUid: string,
      params: RequestParams = {},
    ) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/organizations/companies/${companyUid}/sites/${siteUid}/vcdReplicationResources/dataCenters/${dataCenterUid}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of VMware Cloud Director replication resource usage by all companies.
     *
     * @tags Companies
     * @name GetCompaniesSiteVcdReplicationResourcesUsages
     * @summary Get Usage of All Company VMware Cloud Director Replication Resources
     * @request GET:/organizations/companies/sites/vcdReplicationResources/usage
     * @secure
     */
    getCompaniesSiteVcdReplicationResourcesUsages: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanySiteVcdReplicationResourceUsage[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/companies/sites/vcdReplicationResources/usage`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of usage of all VMware Cloud Director replication resources allocated to a company on a site with the specified UID.
     *
     * @tags Companies
     * @name GetCompanySiteVcdReplicationResourcesUsage
     * @summary Get Usage of All VMware Cloud Director Replication Resources Allocated to Company on Site
     * @request GET:/organizations/companies/{companyUid}/sites/{siteUid}/vcdReplicationResources/usage
     * @secure
     */
    getCompanySiteVcdReplicationResourcesUsage: (
      companyUid: string,
      siteUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanySiteVcdReplicationResourceUsage[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/companies/${companyUid}/sites/${siteUid}/vcdReplicationResources/usage`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all network extension appliances configured for a company on a site with the specified system ID.
     *
     * @tags Companies
     * @name GetCompanySiteVcdReplicationResourcesNetworkAppliances
     * @summary Get All VMware Cloud Director Replication Resources Allocated to Company on Site
     * @request GET:/organizations/companies/{companyUid}/sites/{siteUid}/vcdReplicationResources/networkExtensionAppliance
     * @secure
     */
    getCompanySiteVcdReplicationResourcesNetworkAppliances: (
      companyUid: string,
      siteUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          meta?: ResponseMetadata;
          data?: CompanySiteReplicationResourceVcdNetworkAppliance[];
          errors?: ResponseError[];
        },
        ErrorResponse
      >({
        path: `/organizations/companies/${companyUid}/sites/${siteUid}/vcdReplicationResources/networkExtensionAppliance`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a company network extension appliance with the specified UID.
     *
     * @tags Companies
     * @name GetCompanySiteVcdReplicationResourcesNetworkAppliance
     * @summary Get Company Network Extension Appliance
     * @request GET:/organizations/companies/{companyUid}/sites/{siteUid}/vcdReplicationResources/networkExtensionAppliance/{applianceUid}
     * @secure
     */
    getCompanySiteVcdReplicationResourcesNetworkAppliance: (
      companyUid: string,
      siteUid: string,
      applianceUid: string,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanySiteReplicationResourceVcdNetworkAppliance; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/companies/${companyUid}/sites/${siteUid}/vcdReplicationResources/networkExtensionAppliance/${applianceUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a company network extension appliance with the specified UID.
     *
     * @tags Companies
     * @name PatchCompanySiteVcdReplicationResourcesNetworkAppliance
     * @summary Modify Company Network Extension Appliance
     * @request PATCH:/organizations/companies/{companyUid}/sites/{siteUid}/vcdReplicationResources/networkExtensionAppliance/{applianceUid}
     * @secure
     */
    patchCompanySiteVcdReplicationResourcesNetworkAppliance: (
      companyUid: string,
      siteUid: string,
      applianceUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanySiteReplicationResourceVcdNetworkAppliance; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/companies/${companyUid}/sites/${siteUid}/vcdReplicationResources/networkExtensionAppliance/${applianceUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of services consumed by companies.
     *
     * @tags Companies
     * @name GetCompaniesAggregatedUsage
     * @summary Get Services Usage by All Companies
     * @request GET:/organizations/companies/usage
     * @secure
     */
    getCompaniesAggregatedUsage: (
      query?: {
        fromDate?: string;
        toDate?: string;
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: LocationAggregatedUsage[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/companies/usage`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of services consumed by a company with the specified UID.
     *
     * @tags Companies
     * @name GetCompanyAggregatedUsage
     * @summary Get Services Usage by Company
     * @request GET:/organizations/companies/{companyUid}/usage
     * @secure
     */
    getCompanyAggregatedUsage: (
      companyUid: string,
      query?: {
        fromDate?: string;
        toDate?: string;
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: LocationAggregatedUsage[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/organizations/companies/${companyUid}/usage`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all organization locations.
     *
     * @tags Locations
     * @name GetLocations
     * @summary Get All Locations
     * @request GET:/organizations/locations
     * @secure
     */
    getLocations: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: OrganizationLocation[]; errors?: ResponseError[] }, ErrorResponse>(
        {
          path: `/organizations/locations`,
          method: "GET",
          query: query,
          secure: true,
          format: "json",
          ...params,
        },
      ),

    /**
     * @description Creates a new organization location.
     *
     * @tags Locations
     * @name CreateLocation
     * @summary Create Location
     * @request POST:/organizations/locations
     * @secure
     */
    createLocation: (body: OrganizationLocation, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: OrganizationLocation; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/locations`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all locations of an organization with the specified UID.
     *
     * @tags Locations
     * @name GetLocationsByOrganization
     * @summary Get All Organization Locations
     * @request GET:/organizations/{organizationUid}/locations
     * @secure
     */
    getLocationsByOrganization: (
      organizationUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: OrganizationLocation[]; errors?: ResponseError[] }, ErrorResponse>(
        {
          path: `/organizations/${organizationUid}/locations`,
          method: "GET",
          query: query,
          secure: true,
          format: "json",
          ...params,
        },
      ),

    /**
     * @description Returns a resource representation of a organization location with the specified UID.
     *
     * @tags Locations
     * @name GetLocation
     * @summary Get Location
     * @request GET:/organizations/locations/{locationUid}
     * @secure
     */
    getLocation: (locationUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: OrganizationLocation; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/locations/${locationUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies an organization location.
     *
     * @tags Locations
     * @name PatchLocation
     * @summary Modify Location
     * @request PATCH:/organizations/locations/{locationUid}
     * @secure
     */
    patchLocation: (locationUid: string, body: JsonPatches, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: OrganizationLocation; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/locations/${locationUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes an organization location with the specified UID.
     *
     * @tags Locations
     * @name DeleteLocation
     * @summary Delete Location
     * @request DELETE:/organizations/locations/{locationUid}
     * @secure
     */
    deleteLocation: (locationUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/organizations/locations/${locationUid}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all users that are assigned to a location with the specified UID.
     *
     * @tags Accounts
     * @name GetUsersByLocation
     * @summary Get All Location Users
     * @request GET:/organizations/locations/{locationUid}/users
     * @secure
     */
    getUsersByLocation: (
      locationUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: User[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/locations/${locationUid}/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a subscription plan assigned to a company with the specified UID. If there is no subscription plan assigned the response will be empty.
     *
     * @tags Subscription Plans
     * @name GetAssignedToCompanySubscriptionPlan
     * @summary Get Subscription Plan Assigned to Company
     * @request GET:/organizations/companies/{companyUid}/subscriptionPlan
     * @secure
     */
    getAssignedToCompanySubscriptionPlan: (
      companyUid: string,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: SubscriptionPlan; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/companies/${companyUid}/subscriptionPlan`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all RSA and API keys issued to users of an organization with the specified UID.
     *
     * @tags Accounts
     * @name GetOrganizationApiKeys
     * @summary Get Organization Keys
     * @request GET:/organizations/{organizationUid}/keys
     * @secure
     */
    getOrganizationApiKeys: (
      organizationUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: UserLogin[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/organizations/${organizationUid}/keys`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  licensing = {
    /**
     * @description Returns a collection resource representation of all licenses installed on the Veeam Cloud Connect servers.
     *
     * @tags Licensing
     * @name GetSiteLicenses
     * @summary Get All Site Licenses
     * @request GET:/licensing/sites
     * @secure
     */
    getSiteLicenses: (query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: SiteLicense[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/licensing/sites`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a license installed on the Veeam Cloud Connect server with the specified UID.
     *
     * @tags Licensing
     * @name GetSiteLicense
     * @summary Get Site License
     * @request GET:/licensing/sites/{siteUid}
     * @secure
     */
    getSiteLicense: (siteUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: SiteLicense; errors?: ResponseError[] }, ErrorResponse>({
        path: `/licensing/sites/${siteUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Installs a license on the Veeam Cloud Connect server with the specified UID.
     *
     * @tags Licensing
     * @name InstallSiteLicense
     * @summary Install Site License
     * @request PUT:/licensing/sites/{siteUid}
     * @secure
     */
    installSiteLicense: (
      siteUid: string,
      data: { license: File },
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: SiteLicense; errors?: ResponseError[] }, ErrorResponse>({
        path: `/licensing/sites/${siteUid}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a license on a Veeam Cloud Connect server with the specified UID.
     *
     * @tags Licensing
     * @name PatchSiteLicense
     * @summary Modify Site License
     * @request PATCH:/licensing/sites/{siteUid}
     * @secure
     */
    patchSiteLicense: (siteUid: string, body: JsonPatches, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: SiteLicense; errors?: ResponseError[] }, ErrorResponse>({
        path: `/licensing/sites/${siteUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a license installed on the Veeam Cloud Connect server with the specified UID.
     *
     * @tags Licensing
     * @name DeleteSiteLicense
     * @summary Delete Site License
     * @request DELETE:/licensing/sites/{siteUid}
     * @secure
     */
    deleteSiteLicense: (siteUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/licensing/sites/${siteUid}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Downloads a license from the Internet and installs it on the Veeam Cloud Connect server with the specified UID.
     *
     * @tags Licensing
     * @name UpdateSiteLicense
     * @summary Update Site License
     * @request POST:/licensing/sites/{siteUid}/update
     * @secure
     */
    updateSiteLicense: (siteUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: SiteLicense; errors?: ResponseError[] }, ErrorResponse>({
        path: `/licensing/sites/${siteUid}/update`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of the Veeam Cloud Connect licenses usage.
     *
     * @tags Licensing
     * @name GetSitesUsage
     * @summary Get Usage of All Site Licenses
     * @request GET:/licensing/sites/usage
     * @secure
     */
    getSitesUsage: (query?: { select?: string }, params: RequestParams = {}) =>
      this.request<
        { meta?: ResponseMetadata; data?: SiteCloudLicenseUsage[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/licensing/sites/usage`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of license usage by the Veeam Cloud Connect server with the specified UID.
     *
     * @tags Licensing
     * @name GetSiteUsage
     * @summary Get Site License Usage
     * @request GET:/licensing/sites/{siteUid}/usage
     * @secure
     */
    getSiteUsage: (siteUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: SiteCloudLicenseUsage; errors?: ResponseError[] }, ErrorResponse>({
        path: `/licensing/sites/${siteUid}/usage`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of the Veeam Cloud Connect licenses usage by companies.
     *
     * @tags Licensing
     * @name GetSiteUsageByCompanies
     * @summary Get Usage of Site Licenses by All Companies
     * @request GET:/licensing/sites/usage/companies
     * @secure
     */
    getSiteUsageByCompanies: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanyCloudLicenseUsage[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/licensing/sites/usage/companies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of the Veeam Cloud Connect license usage by a company with the specified UID.
     *
     * @tags Licensing
     * @name GetSiteUsageByCompany
     * @summary Get Usage of Site Licenses by Company
     * @request GET:/licensing/sites/usage/companies/{companyUid}
     * @secure
     */
    getSiteUsageByCompany: (companyUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanyCloudLicenseUsage; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/licensing/sites/usage/companies/${companyUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of Veeam Cloud Connect license usage by a tenant with the specified UID.
     *
     * @tags Licensing
     * @name GetSiteUsageByTenantUid
     * @summary Get Usage of Veeam Backup and Replication Licenses by Tenant
     * @request GET:/licensing/sites/usage/companies/vcc/{tenantUid}
     * @secure
     */
    getSiteUsageByTenantUid: (tenantUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanyCloudLicenseUsage; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/licensing/sites/usage/companies/vcc/${tenantUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of the Veeam license usage reports.
     *
     * @tags Licensing
     * @name GetLicensingReports
     * @summary Get All License Usage Reports
     * @request GET:/licensing/reports
     * @secure
     */
    getLicensingReports: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: SingleLicenseReport[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/licensing/reports`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of the latest Veeam license usage reports.
     *
     * @tags Licensing
     * @name GetLatestLicensingReports
     * @summary Get Latest License Usage Reports
     * @request GET:/licensing/reports/latest
     * @secure
     */
    getLatestLicensingReports: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: SingleLicenseReport[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/licensing/reports/latest`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of the Veeam license usage reports with the specified generation date.
     *
     * @tags Licensing
     * @name GetLicensingReportsForDate
     * @summary Get License Usage Reports for Date
     * @request GET:/licensing/reports/{date}
     * @secure
     */
    getLicensingReportsForDate: (
      date: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: SingleLicenseReport[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/licensing/reports/${date}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Finalize the Veeam license usage reports.
     *
     * @tags Licensing
     * @name FinalizeLicensingReports
     * @summary Finalize License Usage Reports
     * @request POST:/licensing/reports/finalization
     * @secure
     */
    finalizeLicensingReports: (query?: { select?: string }, params: RequestParams = {}) =>
      this.request<
        { meta?: ResponseMetadata; data?: LicenseReportFinalizationStatus; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/licensing/reports/finalization`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of license usage report settings.
     *
     * @tags Licensing
     * @name GetLicensingReportsSettings
     * @summary Get License Usage Report Settings
     * @request GET:/licensing/reports/settings
     * @secure
     */
    getLicensingReportsSettings: (query?: { select?: string }, params: RequestParams = {}) =>
      this.request<
        { meta?: ResponseMetadata; data?: SingleLicenseReportSettings; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/licensing/reports/settings`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies the Veeam licenses usage reports settings.
     *
     * @tags Licensing
     * @name PatchLicensingReportsSettings
     * @summary Modify License Usage Report Settings
     * @request PATCH:/licensing/reports/settings
     * @secure
     */
    patchLicensingReportsSettings: (body: JsonPatches, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<
        { meta?: ResponseMetadata; data?: SingleLicenseReportSettings; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/licensing/reports/settings`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of the licenses installed on all managed Veeam Backup & Replication servers.
     *
     * @tags Licensing
     * @name GetBackupServersLicenses
     * @summary Get All Veeam Backup & Replication Licenses
     * @request GET:/licensing/backupServers
     * @secure
     */
    getBackupServersLicenses: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupServerLicense[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/licensing/backupServers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a license installed on a managed Veeam Backup & Replication server with the specified UID.
     *
     * @tags Licensing
     * @name GetBackupServerLicense
     * @summary Get Veeam Backup & Replication License
     * @request GET:/licensing/backupServers/{backupServerUid}
     * @secure
     */
    getBackupServerLicense: (backupServerUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupServerLicense; errors?: ResponseError[] }, ErrorResponse>({
        path: `/licensing/backupServers/${backupServerUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Install a license on a managed Veeam Backup & Replication server with the specified UID.
     *
     * @tags Licensing
     * @name InstallBackupServerLicense
     * @summary Install Veeam Backup & Replication License
     * @request PUT:/licensing/backupServers/{backupServerUid}
     * @secure
     */
    installBackupServerLicense: (
      backupServerUid: string,
      data: { license: File },
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupServerLicense; errors?: ResponseError[] }, ErrorResponse>({
        path: `/licensing/backupServers/${backupServerUid}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a license from a managed Veeam Backup & Replication server with the specified UID.
     *
     * @tags Licensing
     * @name DeleteBackupServerLicense
     * @summary Delete Veeam Backup & Replication License
     * @request DELETE:/licensing/backupServers/{backupServerUid}
     * @secure
     */
    deleteBackupServerLicense: (
      backupServerUid: string,
      query: { sectionForDelete: "Socket" | "Instance" | "All" },
      params: RequestParams = {},
    ) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/licensing/backupServers/${backupServerUid}`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a license on a managed Veeam Backup & Replication server with the specified UID.
     *
     * @tags Licensing
     * @name PatchBackupServerLicense
     * @summary Modify Veeam Backup & Replication License
     * @request PATCH:/licensing/backupServers/{backupServerUid}
     * @secure
     */
    patchBackupServerLicense: (
      backupServerUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupServerLicense; errors?: ResponseError[] }, ErrorResponse>({
        path: `/licensing/backupServers/${backupServerUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Downloads a new license from the Internet and installs it on a Veeam Backup & Replication server.
     *
     * @tags Licensing
     * @name UpdateBackupServerLicense
     * @summary Update Veeam Backup & Replication License
     * @request POST:/licensing/backupServers/{backupServerUid}/update
     * @secure
     */
    updateBackupServerLicense: (backupServerUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupServerLicense; errors?: ResponseError[] }, ErrorResponse>({
        path: `/licensing/backupServers/${backupServerUid}/update`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of the Veeam Backup & Replication licenses usage.
     *
     * @tags Licensing
     * @name GetBackupServersUsage
     * @summary Get Usage of All Veeam Backup & Replication Licenses
     * @request GET:/licensing/backupServers/usage
     * @secure
     */
    getBackupServersUsage: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerLicenseUsage[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/licensing/backupServers/usage`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of the license usage by a Veeam Backup & Replication server with the specified UID.
     *
     * @tags Licensing
     * @name GetBackupServerUsage
     * @summary Get Usage of Veeam Backup & Replication License
     * @request GET:/licensing/backupServers/{backupServerUid}/usage
     * @secure
     */
    getBackupServerUsage: (backupServerUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerLicenseUsage; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/licensing/backupServers/${backupServerUid}/usage`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of the Veeam Backup & Replication licenses usage by companies.
     *
     * @tags Licensing
     * @name GetBackupServerUsageByCompanies
     * @summary Get Usage of Veeam Backup & Replication Licenses by All Companies
     * @request GET:/licensing/backupServers/usage/companies
     * @secure
     */
    getBackupServerUsageByCompanies: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanyBackupServerLicenseUsage[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/licensing/backupServers/usage/companies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of the Veeam Backup & Replication license usage by a company with the specified UID.
     *
     * @tags Licensing
     * @name GetBackupServerUsageByCompany
     * @summary Get Usage of Veeam Backup & Replication Licenses by Company
     * @request GET:/licensing/backupServers/usage/companies/{companyUid}
     * @secure
     */
    getBackupServerUsageByCompany: (companyUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanyBackupServerLicenseUsage; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/licensing/backupServers/usage/companies/${companyUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of Veeam Backup & Replication license usage by a tenant with the specified UID.
     *
     * @tags Licensing
     * @name GetBackupServerUsageByTenantUid
     * @summary Get Usage of Veeam Backup & Replication Licenses by Tenant
     * @request GET:/licensing/backupServers/usage/companies/vcc/{tenantUid}
     * @secure
     */
    getBackupServerUsageByTenantUid: (tenantUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanyBackupServerLicenseUsage; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/licensing/backupServers/usage/companies/vcc/${tenantUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of the licenses installed on all managed Veeam One servers.
     *
     * @tags Licensing
     * @name GetVOneServersLicenses
     * @summary Get All Veeam One Licenses
     * @request GET:/licensing/voneServers
     * @secure
     */
    getVOneServersLicenses: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: VOneServerLicense[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/licensing/voneServers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a license installed on a managed Veeam One server with the specified UID.
     *
     * @tags Licensing
     * @name GetVOneServerLicense
     * @summary Get Veeam One License
     * @request GET:/licensing/voneServers/{vOneServerUid}
     * @secure
     */
    getVOneServerLicense: (vOneServerUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: VOneServerLicense; errors?: ResponseError[] }, ErrorResponse>({
        path: `/licensing/voneServers/${vOneServerUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Install a license on a managed Veeam One server with the specified UID.
     *
     * @tags Licensing
     * @name InstallVOneServerLicense
     * @summary Install Veeam One License
     * @request PUT:/licensing/voneServers/{vOneServerUid}
     * @secure
     */
    installVOneServerLicense: (
      vOneServerUid: string,
      data: { license: File },
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: VOneServerLicense; errors?: ResponseError[] }, ErrorResponse>({
        path: `/licensing/voneServers/${vOneServerUid}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a license from a managed Veeam One server with the specified UID.
     *
     * @tags Licensing
     * @name DeleteVOneServerLicense
     * @summary Delete Veeam One License
     * @request DELETE:/licensing/voneServers/{vOneServerUid}
     * @secure
     */
    deleteVOneServerLicense: (vOneServerUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/licensing/voneServers/${vOneServerUid}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a license on a managed Veeam One server with the specified UID.
     *
     * @tags Licensing
     * @name PatchVOneServerLicense
     * @summary Modify Veeam One License
     * @request PATCH:/licensing/voneServers/{vOneServerUid}
     * @secure
     */
    patchVOneServerLicense: (
      vOneServerUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: VOneServerLicense; errors?: ResponseError[] }, ErrorResponse>({
        path: `/licensing/voneServers/${vOneServerUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Downloads a new license from the Internet and installs it on a Veeam One server.
     *
     * @tags Licensing
     * @name UpdateVOneServerLicense
     * @summary Update Veeam One License
     * @request POST:/licensing/voneServers/{vOneServerUid}/update
     * @secure
     */
    updateVOneServerLicense: (vOneServerUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: VOneServerLicense; errors?: ResponseError[] }, ErrorResponse>({
        path: `/licensing/voneServers/${vOneServerUid}/update`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of the Veeam One licenses usage.
     *
     * @tags Licensing
     * @name GetVOneServersUsage
     * @summary Get Usage of All Veeam One Licenses
     * @request GET:/licensing/voneServers/usage
     * @secure
     */
    getVOneServersUsage: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: VOneServerLicenseUsage[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/licensing/voneServers/usage`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of the license usage by a Veeam One server with the specified UID.
     *
     * @tags Licensing
     * @name GetVOneServerUsage
     * @summary Get Usage of Veeam One License
     * @request GET:/licensing/voneServers/{vOneServerUid}/usage
     * @secure
     */
    getVOneServerUsage: (vOneServerUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: VOneServerLicenseUsage; errors?: ResponseError[] }, ErrorResponse>(
        {
          path: `/licensing/voneServers/${vOneServerUid}/usage`,
          method: "GET",
          query: query,
          secure: true,
          format: "json",
          ...params,
        },
      ),

    /**
     * @description Returns a resource representation of the Veeam One licenses usage by companies.
     *
     * @tags Licensing
     * @name GetVOneServerUsageByCompanies
     * @summary Get Usage of Veeam One Licenses by All Companies
     * @request GET:/licensing/voneServers/usage/companies
     * @secure
     */
    getVOneServerUsageByCompanies: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanyVOneServerLicenseUsage[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/licensing/voneServers/usage/companies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of the Veeam One license usage by a company with the specified UID.
     *
     * @tags Licensing
     * @name GetVOneServerUsageByCompany
     * @summary Get Usage of Veeam One Licenses by Company
     * @request GET:/licensing/voneServers/usage/companies/{companyUid}
     * @secure
     */
    getVOneServerUsageByCompany: (companyUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanyVOneServerLicenseUsage; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/licensing/voneServers/usage/companies/${companyUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of Veeam One license usage by a tenant with the specified UID.
     *
     * @tags Licensing
     * @name GetVOneServerUsageByTenantUid
     * @summary Get Usage of Veeam One Licenses by Tenant
     * @request GET:/licensing/voneServers/usage/companies/vcc/{tenantUid}
     * @secure
     */
    getVOneServerUsageByTenantUid: (tenantUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanyVOneServerLicenseUsage; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/licensing/voneServers/usage/companies/vcc/${tenantUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of the licenses installed on all managed Veeam Backup for Microsoft 365 servers.
     *
     * @tags Licensing
     * @name GetVbm365ServersLicenses
     * @summary Get All Veeam Backup for Microsoft 365 Licenses
     * @request GET:/licensing/vbm365Servers
     * @secure
     */
    getVbm365ServersLicenses: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: Vbm365ServerLicense[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/licensing/vbm365Servers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a license installed on a managed Veeam Backup for Microsoft 365 server with the specified UID.
     *
     * @tags Licensing
     * @name GetVbm365ServerLicense
     * @summary Get Veeam Backup for Microsoft 365 License
     * @request GET:/licensing/vbm365Servers/{vbm365ServerUid}
     * @secure
     */
    getVbm365ServerLicense: (vbm365ServerUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: Vbm365ServerLicense; errors?: ResponseError[] }, ErrorResponse>({
        path: `/licensing/vbm365Servers/{vbm365ServerUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Install a license on a managed Veeam Backup for Microsoft 365 server with the specified UID.
     *
     * @tags Licensing
     * @name InstallVbm365ServerLicense
     * @summary Install Veeam Backup for Microsoft 365 License
     * @request PUT:/licensing/vbm365Servers/{vbm365ServerUid}
     * @secure
     */
    installVbm365ServerLicense: (
      vbm365ServerUid: string,
      data: { license: File },
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: Vbm365ServerLicense; errors?: ResponseError[] }, ErrorResponse>({
        path: `/licensing/vbm365Servers/{vbm365ServerUid}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a license on a managed Veeam Backup for Microsoft 365 server with the specified UID.
     *
     * @tags Licensing
     * @name PatchVbm365ServerLicense
     * @summary Modify Veeam Backup for Microsoft 365 License
     * @request PATCH:/licensing/vbm365Servers/{vbm365ServerUid}
     * @secure
     */
    patchVbm365ServerLicense: (
      vbm365ServerUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: Vbm365ServerLicense; errors?: ResponseError[] }, ErrorResponse>({
        path: `/licensing/vbm365Servers/{vbm365ServerUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Downloads a new license from the Internet and installs it on a Veeam Backup for Microsoft 365 server.
     *
     * @tags Licensing
     * @name UpdateVbm365ServerLicense
     * @summary Update Veeam Backup for Microsoft 365 License
     * @request POST:/licensing/vbm365Servers/{vbm365ServerUid}/update
     * @secure
     */
    updateVbm365ServerLicense: (vbm365ServerUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: Vbm365ServerLicense; errors?: ResponseError[] }, ErrorResponse>({
        path: `/licensing/vbm365Servers/{vbm365ServerUid}/update`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of the Veeam Backup for Microsoft 365 licenses usage.
     *
     * @tags Licensing
     * @name GetVbm365ServersUsage
     * @summary Get Usage of All Veeam Backup for Microsoft 365 Licenses
     * @request GET:/licensing/vbm365Servers/usage
     * @secure
     */
    getVbm365ServersUsage: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: Vbm365ServerLicenseUsage[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/licensing/vbm365Servers/usage`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of the license usage by a Veeam Backup for Microsoft 365 server with the specified UID.
     *
     * @tags Licensing
     * @name GetVbm365ServerUsage
     * @summary Get Usage of Veeam Backup for Microsoft 365 License
     * @request GET:/licensing/vbm365Servers/{vbm365ServerUid}/usage
     * @secure
     */
    getVbm365ServerUsage: (vbm365ServerUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<
        { meta?: ResponseMetadata; data?: Vbm365ServerLicenseUsage; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/licensing/vbm365Servers/{vbm365ServerUid}/usage`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of the Veeam Backup for Microsoft 365 licenses usage by companies.
     *
     * @tags Licensing
     * @name GetVbm365ServerUsageByCompanies
     * @summary Get Usage of Veeam Backup for Microsoft 365 Licenses by All Companies
     * @request GET:/licensing/vbm365Servers/usage/companies
     * @secure
     */
    getVbm365ServerUsageByCompanies: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanyVbm365ServerLicenseUsage[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/licensing/vbm365Servers/usage/companies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of the Veeam Backup for Microsoft 365 license usage by a company with the specified UID.
     *
     * @tags Licensing
     * @name GetVbm365ServerUsageByCompany
     * @summary Get Usage of Veeam Backup for Microsoft 365 Licenses by Company
     * @request GET:/licensing/vbm365Servers/usage/companies/{companyUid}
     * @secure
     */
    getVbm365ServerUsageByCompany: (companyUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanyVbm365ServerLicenseUsage; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/licensing/vbm365Servers/usage/companies/${companyUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of Veeam Backup for Microsoft 365 license usage by a tenant with the specified UID.
     *
     * @tags Licensing
     * @name GetVbm365ServerUsageByTenantUid
     * @summary Get Usage of Veeam Backup for Microsoft 365 Licenses by Tenant
     * @request GET:/licensing/vbm365Servers/usage/companies/vcc/{tenantUid}
     * @secure
     */
    getVbm365ServerUsageByTenantUid: (tenantUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanyVbm365ServerLicenseUsage; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/licensing/vbm365Servers/usage/companies/vcc/${tenantUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns resource representation of the currently installed Veeam Service Provider Console license.
     *
     * @tags Licensing
     * @name GetConsoleLicenseInformation
     * @summary Get Veeam Service Provider Console License
     * @request GET:/licensing/console
     * @secure
     */
    getConsoleLicenseInformation: (query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: ConsoleLicense; errors?: ResponseError[] }, ErrorResponse>({
        path: `/licensing/console`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Installs Veeam Service Provider Console license.
     *
     * @tags Licensing
     * @name InstallConsoleLicense
     * @summary Install Veeam Service Provider Console License
     * @request PUT:/licensing/console
     * @secure
     */
    installConsoleLicense: (data: { license: File }, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: ConsoleLicense; errors?: ResponseError[] }, ErrorResponse>({
        path: `/licensing/console`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of the Veeam Service Provider Console license usage.
     *
     * @tags Licensing
     * @name GetConsoleLicenseUsage
     * @summary Get Veeam Service Provider Console License Usage
     * @request GET:/licensing/console/usage
     * @secure
     */
    getConsoleLicenseUsage: (query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: ConsoleLicenseUsage; errors?: ResponseError[] }, ErrorResponse>({
        path: `/licensing/console/usage`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of the Veeam Service Provider Console license usage by managed companies.
     *
     * @tags Licensing
     * @name GetConsoleLicenseUsageByCompanies
     * @summary Get Veeam Service Provider Console License Usage by All Companies
     * @request GET:/licensing/console/usage/companies
     * @secure
     */
    getConsoleLicenseUsageByCompanies: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanyConsoleLicenseUsage[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/licensing/console/usage/companies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of the Veeam Service Provider Console license usage by a managed company with the specified UID.
     *
     * @tags Licensing
     * @name GetConsoleLicenseUsageByCompany
     * @summary Get Veeam Service Provider Console License Usage by Company
     * @request GET:/licensing/console/usage/companies/{companyUid}
     * @secure
     */
    getConsoleLicenseUsageByCompany: (companyUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanyConsoleLicenseUsage; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/licensing/console/usage/companies/${companyUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of Veeam Service Provider Console license usage by a tenant with the specified UID.
     *
     * @tags Licensing
     * @name GetConsoleLicenseUsageByTenantUid
     * @summary Get Veeam Service Provider Console Licenses Usage by Tenant
     * @request GET:/licensing/console/usage/companies/vcc/{tenantUid}
     * @secure
     */
    getConsoleLicenseUsageByTenantUid: (tenantUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<
        { meta?: ResponseMetadata; data?: CompanyConsoleLicenseUsage; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/licensing/console/usage/companies/vcc/${tenantUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Downloads a new Veeam Service Provider Console license from the Internet and installs it.
     *
     * @tags Licensing
     * @name UpdateConsoleLicense
     * @summary Update Veeam Service Provider Console License
     * @request POST:/licensing/console/update
     * @secure
     */
    updateConsoleLicense: (query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: ConsoleLicense; errors?: ResponseError[] }, ErrorResponse>({
        path: `/licensing/console/update`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of the currently installed Veeam Service Provider Console license settings.
     *
     * @tags Licensing
     * @name GetConsoleLicenseSettings
     * @summary Get Veeam Service Provider Console License Settings
     * @request GET:/licensing/console/settings
     * @secure
     */
    getConsoleLicenseSettings: (query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: LicenseSettings; errors?: ResponseError[] }, ErrorResponse>({
        path: `/licensing/console/settings`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  subscriptionPlans = {
    /**
     * @description Returns a collection resource representation of all subscription plans.
     *
     * @tags Subscription Plans
     * @name GetSubscriptionPlans
     * @summary Get All Subscription Plans
     * @request GET:/subscriptionPlans
     * @secure
     */
    getSubscriptionPlans: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: SubscriptionPlan[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/subscriptionPlans`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a subscription plan.
     *
     * @tags Subscription Plans
     * @name CreateSubscriptionPlan
     * @summary Create Subscription Plan
     * @request POST:/subscriptionPlans
     * @secure
     */
    createSubscriptionPlan: (body: SubscriptionPlanInput, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: SubscriptionPlan; errors?: ResponseError[] }, ErrorResponse>({
        path: `/subscriptionPlans`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a subscription plan with the specified UID.
     *
     * @tags Subscription Plans
     * @name GetSubscriptionPlan
     * @summary Get Subscription Plan
     * @request GET:/subscriptionPlans/{subscriptionPlanUid}
     * @secure
     */
    getSubscriptionPlan: (subscriptionPlanUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: SubscriptionPlan; errors?: ResponseError[] }, ErrorResponse>({
        path: `/subscriptionPlans/${subscriptionPlanUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a subscription plan with the specified UID.
     *
     * @tags Subscription Plans
     * @name PatchSubscriptionPlan
     * @summary Modify Subscription Plan
     * @request PATCH:/subscriptionPlans/{subscriptionPlanUid}
     * @secure
     */
    patchSubscriptionPlan: (
      subscriptionPlanUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: SubscriptionPlan; errors?: ResponseError[] }, ErrorResponse>({
        path: `/subscriptionPlans/${subscriptionPlanUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a subscription plan with the specified UID.
     *
     * @tags Subscription Plans
     * @name DeleteSubscriptionPlan
     * @summary Delete Subscription Plan
     * @request DELETE:/subscriptionPlans/{subscriptionPlanUid}
     * @secure
     */
    deleteSubscriptionPlan: (subscriptionPlanUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/subscriptionPlans/${subscriptionPlanUid}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all companies to which a subscription plan with the specified UID is assigned.
     *
     * @tags Subscription Plans
     * @name GetCompaniesBySubscriptionPlan
     * @summary Get Companies by Subscription Plan
     * @request GET:/subscriptionPlans/{subscriptionPlanUid}/companies
     * @secure
     */
    getCompaniesBySubscriptionPlan: (
      subscriptionPlanUid: string,
      query?: {
        expand?: CompanyExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: Company[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/subscriptionPlans/${subscriptionPlanUid}/companies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  discovery = {
    /**
     * @description Returns a collection resource representation of all discovery rules.
     *
     * @tags Discovery
     * @name GetDiscoveryRules
     * @summary Get All Discovery Rules
     * @request GET:/discovery/rules
     * @secure
     */
    getDiscoveryRules: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: DiscoveryRule[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/discovery/rules`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a discovery rule with the specified UID.
     *
     * @tags Discovery
     * @name GetDiscoveryRule
     * @summary Get Discovery Rule
     * @request GET:/discovery/rules/{ruleUid}
     * @secure
     */
    getDiscoveryRule: (ruleUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: DiscoveryRule; errors?: ResponseError[] }, ErrorResponse>({
        path: `/discovery/rules/${ruleUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a discovery rule with the specified UID.
     *
     * @tags Discovery
     * @name PatchDiscoveryRule
     * @summary Modify Discovery Rule
     * @request PATCH:/discovery/rules/{ruleUid}
     * @secure
     */
    patchDiscoveryRule: (ruleUid: string, body: JsonPatches, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: DiscoveryRule; errors?: ResponseError[] }, ErrorResponse>({
        path: `/discovery/rules/${ruleUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a discovery rule with the specified UID.
     *
     * @tags Discovery
     * @name DeleteDiscoveryRule
     * @summary Delete Discovery Rule
     * @request DELETE:/discovery/rules/{ruleUid}
     * @secure
     */
    deleteDiscoveryRule: (ruleUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/discovery/rules/${ruleUid}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Run discovery by a discovery rule with the specified UID. Returns a positive response when the discovery task is added to the internal queue and not when the task is executed.
     *
     * @tags Discovery
     * @name StartDiscoveryRule
     * @summary Start Discovery Rule
     * @request POST:/discovery/rules/{ruleUid}/start
     * @secure
     */
    startDiscoveryRule: (ruleUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/discovery/rules/${ruleUid}/start`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Stop discovery by a discovery rule with the specified UID. Returns a positive response when the task is added to the internal queue and not when the task is executed.
     *
     * @tags Discovery
     * @name StopDiscoveryRule
     * @summary Stop Discovery Rule
     * @request POST:/discovery/rules/{ruleUid}/stop
     * @secure
     */
    stopDiscoveryRule: (ruleUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/discovery/rules/${ruleUid}/stop`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Resets results of discovery by a discovery rule with the specified UID.
     *
     * @tags Discovery
     * @name ResetComputersByDiscoveryRule
     * @summary Reset Discovery Rule Results
     * @request POST:/discovery/rules/{ruleUid}/reset
     * @secure
     */
    resetComputersByDiscoveryRule: (ruleUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/discovery/rules/${ruleUid}/reset`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all Windows discovery rules.
     *
     * @tags Discovery
     * @name GetWindowsDiscoveryRules
     * @summary Get All Discovery Rules for Windows
     * @request GET:/discovery/rules/windows
     * @secure
     */
    getWindowsDiscoveryRules: (
      query?: {
        expand?: WindowsDiscoveryRuleExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: WindowsDiscoveryRule[]; errors?: ResponseError[] }, ErrorResponse>(
        {
          path: `/discovery/rules/windows`,
          method: "GET",
          query: query,
          secure: true,
          format: "json",
          ...params,
        },
      ),

    /**
     * @description Returns a resource representation of a Windows discovery rule with the specified UID.
     *
     * @tags Discovery
     * @name GetWindowsDiscoveryRule
     * @summary Get Discovery Rule for Windows
     * @request GET:/discovery/rules/windows/{ruleUid}
     * @secure
     */
    getWindowsDiscoveryRule: (ruleUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: WindowsDiscoveryRule; errors?: ResponseError[] }, ErrorResponse>({
        path: `/discovery/rules/windows/${ruleUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a Windows discovery rule with the specified UID.
     *
     * @tags Discovery
     * @name PatchWindowsDiscoveryRule
     * @summary Modify Discovery Rule for Windows
     * @request PATCH:/discovery/rules/windows/{ruleUid}
     * @secure
     */
    patchWindowsDiscoveryRule: (
      ruleUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: WindowsDiscoveryRule; errors?: ResponseError[] }, ErrorResponse>({
        path: `/discovery/rules/windows/${ruleUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all Windows network-based discovery rules.
     *
     * @tags Discovery
     * @name GetWindowsNetworkBasedDiscoveryRules
     * @summary Get All Network-Based Discovery Rules for Windows
     * @request GET:/discovery/rules/windows/networkBased
     * @secure
     */
    getWindowsNetworkBasedDiscoveryRules: (
      query?: {
        expand?: WindowsNetworkBasedDiscoveryRuleExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: WindowsNetworkBasedDiscoveryRule[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/discovery/rules/windows/networkBased`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a Windows network-based discovery rule.
     *
     * @tags Discovery
     * @name CreateWindowsNetworkBasedDiscoveryRule
     * @summary Create Network-Based Discovery Rule for Windows
     * @request POST:/discovery/rules/windows/networkBased
     * @secure
     */
    createWindowsNetworkBasedDiscoveryRule: (
      body: WindowsNetworkBasedDiscoveryRuleInput,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: WindowsNetworkBasedDiscoveryRule; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/discovery/rules/windows/networkBased`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a Windows network-based discovery rule.
     *
     * @tags Discovery
     * @name GetWindowsNetworkBasedDiscoveryRule
     * @summary Get Network-Based Discovery Rule for Windows
     * @request GET:/discovery/rules/windows/networkBased/{ruleUid}
     * @secure
     */
    getWindowsNetworkBasedDiscoveryRule: (ruleUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<
        { meta?: ResponseMetadata; data?: WindowsNetworkBasedDiscoveryRule; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/discovery/rules/windows/networkBased/${ruleUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a Windows network-based discovery rule with the specified UID.
     *
     * @tags Discovery
     * @name PatchWindowsNetworkBasedDiscoveryRule
     * @summary Modify Network-Based Discovery Rule for Windows
     * @request PATCH:/discovery/rules/windows/networkBased/{ruleUid}
     * @secure
     */
    patchWindowsNetworkBasedDiscoveryRule: (
      ruleUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: WindowsNetworkBasedDiscoveryRule; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/discovery/rules/windows/networkBased/${ruleUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all Active Directory discovery rules.
     *
     * @tags Discovery
     * @name GetWindowsActiveDirectoryBasedDiscoveryRules
     * @summary Get All Active Directory Discovery Rules for Windows
     * @request GET:/discovery/rules/windows/adBased
     * @secure
     */
    getWindowsActiveDirectoryBasedDiscoveryRules: (
      query?: {
        expand?: WindowsActiveDirectoryBasedDiscoveryRuleExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: WindowsActiveDirectoryBasedDiscoveryRule[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/discovery/rules/windows/adBased`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates an Active Directory discovery rule.
     *
     * @tags Discovery
     * @name CreateWindowsActiveDirectoryBasedDiscoveryRule
     * @summary Create Active Directory Discovery Rule for Windows
     * @request POST:/discovery/rules/windows/adBased
     * @secure
     */
    createWindowsActiveDirectoryBasedDiscoveryRule: (
      body: WindowsActiveDirectoryBasedDiscoveryRuleInput,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: WindowsActiveDirectoryBasedDiscoveryRule; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/discovery/rules/windows/adBased`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of an Active Directory discovery rule with the specified UID.
     *
     * @tags Discovery
     * @name GetWindowsActiveDirectoryBasedDiscoveryRule
     * @summary Get Active Directory Discovery Rule for Windows
     * @request GET:/discovery/rules/windows/adBased/{ruleUid}
     * @secure
     */
    getWindowsActiveDirectoryBasedDiscoveryRule: (
      ruleUid: string,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: WindowsActiveDirectoryBasedDiscoveryRule; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/discovery/rules/windows/adBased/${ruleUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies an Active Directory discovery rule with the specified UID.
     *
     * @tags Discovery
     * @name PatchWindowsActiveDirectoryBasedDiscoveryRule
     * @summary Modify Active Directory Discovery Rule for Windows
     * @request PATCH:/discovery/rules/windows/adBased/{ruleUid}
     * @secure
     */
    patchWindowsActiveDirectoryBasedDiscoveryRule: (
      ruleUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: WindowsActiveDirectoryBasedDiscoveryRule; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/discovery/rules/windows/adBased/${ruleUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all Windows discovery rules based on lists of IP addresses and DNS names.
     *
     * @tags Discovery
     * @name GetWindowsCustomDiscoveryRules
     * @summary Get All Import-Based Discovery Rules for Windows
     * @request GET:/discovery/rules/windows/custom
     * @secure
     */
    getWindowsCustomDiscoveryRules: (
      query?: {
        expand?: WindowsCustomDiscoveryRuleExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: WindowsCustomDiscoveryRule[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/discovery/rules/windows/custom`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a Windows rule based on a list of IP addresses and DNS names.
     *
     * @tags Discovery
     * @name CreateWindowsCustomDiscoveryRule
     * @summary Create Import-Based Discovery Rule for Windows
     * @request POST:/discovery/rules/windows/custom
     * @secure
     */
    createWindowsCustomDiscoveryRule: (
      body: WindowsCustomDiscoveryRuleInput,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: WindowsCustomDiscoveryRule; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/discovery/rules/windows/custom`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a Windows discovery rule based on a list of IP addresses and DNS names.
     *
     * @tags Discovery
     * @name GetWindowsCustomDiscoveryRule
     * @summary Get Import-Based Discovery Rule for Windows
     * @request GET:/discovery/rules/windows/custom/{ruleUid}
     * @secure
     */
    getWindowsCustomDiscoveryRule: (ruleUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<
        { meta?: ResponseMetadata; data?: WindowsCustomDiscoveryRule; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/discovery/rules/windows/custom/${ruleUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a Windows discovery rule based on a list of IP addresses and DNS names.
     *
     * @tags Discovery
     * @name PatchWindowsCustomDiscoveryRule
     * @summary Modify Import-Based Discovery Rule for Windows
     * @request PATCH:/discovery/rules/windows/custom/{ruleUid}
     * @secure
     */
    patchWindowsCustomDiscoveryRule: (
      ruleUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: WindowsCustomDiscoveryRule; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/discovery/rules/windows/custom/${ruleUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all Linux discovery rules.
     *
     * @tags Discovery
     * @name GetLinuxDiscoveryRules
     * @summary Get All Discovery Rules for Linux
     * @request GET:/discovery/rules/linux
     * @secure
     */
    getLinuxDiscoveryRules: (
      query?: {
        expand?: LinuxDiscoveryRuleExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: LinuxDiscoveryRule[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/discovery/rules/linux`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a Linux discovery rule with the specified UID.
     *
     * @tags Discovery
     * @name GetLinuxDiscoveryRule
     * @summary Get Discovery Rule for Linux
     * @request GET:/discovery/rules/linux/{ruleUid}
     * @secure
     */
    getLinuxDiscoveryRule: (ruleUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: LinuxDiscoveryRule; errors?: ResponseError[] }, ErrorResponse>({
        path: `/discovery/rules/linux/${ruleUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a Linux discovery rule with the specified UID.
     *
     * @tags Discovery
     * @name PatchLinuxDiscoveryRule
     * @summary Modify Discovery Rule for Windows
     * @request PATCH:/discovery/rules/linux/{ruleUid}
     * @secure
     */
    patchLinuxDiscoveryRule: (
      ruleUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: LinuxDiscoveryRule; errors?: ResponseError[] }, ErrorResponse>({
        path: `/discovery/rules/linux/${ruleUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all Linux network-based discovery rules.
     *
     * @tags Discovery
     * @name GetLinuxNetworkBasedDiscoveryRules
     * @summary Get All Network-Based Discovery Rules for Linux
     * @request GET:/discovery/rules/linux/networkBased
     * @secure
     */
    getLinuxNetworkBasedDiscoveryRules: (
      query?: {
        expand?: LinuxNetworkBasedDiscoveryRuleExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: LinuxNetworkBasedDiscoveryRule[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/discovery/rules/linux/networkBased`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a Linux network-based discovery rule.
     *
     * @tags Discovery
     * @name CreateLinuxNetworkBasedDiscoveryRule
     * @summary Create Network-Based Discovery Rule for Linux
     * @request POST:/discovery/rules/linux/networkBased
     * @secure
     */
    createLinuxNetworkBasedDiscoveryRule: (
      body: LinuxNetworkBasedDiscoveryRuleInput,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: LinuxNetworkBasedDiscoveryRule; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/discovery/rules/linux/networkBased`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a Linux network-based discovery rule.
     *
     * @tags Discovery
     * @name GetLinuxNetworkBasedDiscoveryRule
     * @summary Get Network-Based Discovery Rule for Linux
     * @request GET:/discovery/rules/linux/networkBased/{ruleUid}
     * @secure
     */
    getLinuxNetworkBasedDiscoveryRule: (ruleUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<
        { meta?: ResponseMetadata; data?: LinuxNetworkBasedDiscoveryRule; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/discovery/rules/linux/networkBased/${ruleUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a Linux network-based discovery rule with the specified UID.
     *
     * @tags Discovery
     * @name PatchLinuxNetworkBasedDiscoveryRule
     * @summary Modify Network-Based Discovery Rule for Linux
     * @request PATCH:/discovery/rules/linux/networkBased/{ruleUid}
     * @secure
     */
    patchLinuxNetworkBasedDiscoveryRule: (
      ruleUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: LinuxNetworkBasedDiscoveryRule; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/discovery/rules/linux/networkBased/${ruleUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all Linux discovery rules based on lists of IP addresses and DNS names.
     *
     * @tags Discovery
     * @name GetLinuxCustomDiscoveryRules
     * @summary Get All Import-Based Discovery Rules for Linux
     * @request GET:/discovery/rules/linux/custom
     * @secure
     */
    getLinuxCustomDiscoveryRules: (
      query?: {
        expand?: LinuxCustomDiscoveryRuleExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: LinuxCustomDiscoveryRule[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/discovery/rules/linux/custom`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a Linux rule based on a list of IP addresses and DNS names.
     *
     * @tags Discovery
     * @name CreateLinuxCustomDiscoveryRule
     * @summary Create Import-Based Discovery Rule for Linux
     * @request POST:/discovery/rules/linux/custom
     * @secure
     */
    createLinuxCustomDiscoveryRule: (
      body: LinuxCustomDiscoveryRuleInput,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: LinuxCustomDiscoveryRule; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/discovery/rules/linux/custom`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a Linux discovery rule based on a list of IP addresses and DNS names.
     *
     * @tags Discovery
     * @name GetLinuxCustomDiscoveryRule
     * @summary Get Import-Based Discovery Rule for Linux
     * @request GET:/discovery/rules/linux/custom/{ruleUid}
     * @secure
     */
    getLinuxCustomDiscoveryRule: (ruleUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<
        { meta?: ResponseMetadata; data?: LinuxCustomDiscoveryRule; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/discovery/rules/linux/custom/${ruleUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a Linux discovery rule based on a list of IP addresses and DNS names.
     *
     * @tags Discovery
     * @name PatchLinuxCustomDiscoveryRule
     * @summary Modify Import-Based Discovery Rule for Linux
     * @request PATCH:/discovery/rules/linux/custom/{ruleUid}
     * @secure
     */
    patchLinuxCustomDiscoveryRule: (
      ruleUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: LinuxCustomDiscoveryRule; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/discovery/rules/linux/custom/${ruleUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all discovered computers.
     *
     * @tags Discovery
     * @name GetDiscoveryComputers
     * @summary Get All Discovered Computers
     * @request GET:/discovery/computers
     * @secure
     */
    getDiscoveryComputers: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: DiscoveredComputer[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/discovery/computers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all time zones.
     *
     * @tags Misc
     * @name GetTimeZones
     * @summary Get Time Zones
     * @request GET:/discovery/timeZones
     * @secure
     */
    getTimeZones: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: TimeZone[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/discovery/timeZones`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all computers discovered with a rule with the specified UID.
     *
     * @tags Discovery
     * @name GetDiscoveryComputersByRule
     * @summary Get All Computers Discovered with Specific Rule
     * @request GET:/discovery/rules/{ruleUid}/computers
     * @secure
     */
    getDiscoveryComputersByRule: (
      ruleUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: DiscoveredComputer[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/discovery/rules/${ruleUid}/computers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a discovered computer with the specified UID.
     *
     * @tags Discovery
     * @name GetDiscoveryComputer
     * @summary Get Discovered Computer
     * @request GET:/discovery/computers/{computerUid}
     * @secure
     */
    getDiscoveryComputer: (computerUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: DiscoveredComputer; errors?: ResponseError[] }, ErrorResponse>({
        path: `/discovery/computers/${computerUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Deploys Veeam backup agent and management agent on a discovered computer with the specified UID. Deploys only the missing component if the other one is already installed. Initiates an async action. Async action UID is equal to deployment task UID if installation is initiated.
     *
     * @tags Discovery
     * @name InstallBackupAgentOnDiscoveryComputer
     * @summary Install Backup Agent on Discovered Computer
     * @request POST:/discovery/computers/{computerUid}/installBackupAgent
     * @secure
     */
    installBackupAgentOnDiscoveryComputer: (
      computerUid: string,
      body: DeploymentConfiguration,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: string; errors?: ResponseError[] }, ErrorResponse>({
        path: `/discovery/computers/${computerUid}/installBackupAgent`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deploy Veeam backup agent and management agent on a discovered Linux computer with the specified UID. Deploys only the missing component if the other one is already installed. > Initiates an async action. Async action UID is equal to deployment task UID if installation is initiated.
     *
     * @tags Discovery
     * @name InstallLinuxBackupAgentOnDiscoveryComputer
     * @summary Install Backup Agent on Discovered Linux Computer
     * @request POST:/discovery/computers/{computerUid}/installLinuxBackupAgent
     * @secure
     */
    installLinuxBackupAgentOnDiscoveryComputer: (
      computerUid: string,
      body: LinuxDeploymentConfiguration,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: string; errors?: ResponseError[] }, ErrorResponse>({
        path: `/discovery/computers/${computerUid}/installLinuxBackupAgent`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Reboots Veeam backup agent on a discovered computer with the specified UID. Returns positive response when management agent receives the reboot task and not when the task is executed.
     *
     * @tags Discovery
     * @name RebootDiscoveryComputer
     * @summary Reboot Discovered Computer
     * @request POST:/discovery/computers/{computerUid}/reboot
     * @secure
     */
    rebootDiscoveryComputer: (computerUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/discovery/computers/${computerUid}/reboot`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  infrastructure = {
    /**
     * @description Returns a collection resource representation of all unverified management agents.
     *
     * @tags Management Agents
     * @name GetUnverifiedAgents
     * @summary Get All Unverified Management Agents
     * @request GET:/infrastructure/unverifiedAgents
     * @secure
     */
    getUnverifiedAgents: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: UnverifiedAgent[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/unverifiedAgents`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of an unverified management agent with the specified UID.
     *
     * @tags Management Agents
     * @name GetUnverifiedAgent
     * @summary Get Unverified Management Agent
     * @request GET:/infrastructure/unverifiedAgents/{unverifiedAgentUid}
     * @secure
     */
    getUnverifiedAgent: (unverifiedAgentUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: UnverifiedAgent; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/unverifiedAgents/${unverifiedAgentUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all management agents.
     *
     * @tags Management Agents
     * @name GetManagementAgents
     * @summary Get All Management Agents
     * @request GET:/infrastructure/managementAgents
     * @secure
     */
    getManagementAgents: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: ManagementAgent[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/managementAgents`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a management agent with the specified UID.
     *
     * @tags Management Agents
     * @name GetManagementAgent
     * @summary Get Management Agent
     * @request GET:/infrastructure/managementAgents/{managementAgentUid}
     * @secure
     */
    getManagementAgent: (managementAgentUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: ManagementAgent; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/managementAgents/${managementAgentUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a management agent with the specified UID.
     *
     * @tags Management Agents
     * @name PatchManagementAgent
     * @summary Modify Management Agent
     * @request PATCH:/infrastructure/managementAgents/{managementAgentUid}
     * @secure
     */
    patchManagementAgent: (
      managementAgentUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: ManagementAgent; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/managementAgents/${managementAgentUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Restarts a management agent with the specified UID. Returns a positive response when the management agent receives the restart task and not when the task is executed.
     *
     * @tags Management Agents
     * @name RestartManagementAgent
     * @summary Restart Management Agent
     * @request POST:/infrastructure/managementAgents/{managementAgentUid}/restart
     * @secure
     */
    restartManagementAgent: (managementAgentUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/infrastructure/managementAgents/${managementAgentUid}/restart`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Runs system reboot on a computer where management agent with the specified UID is installed. Returns a positive response when the management agent receives the reboot task and not when the task is executed.
     *
     * @tags Management Agents
     * @name RebootSystemOnManagementAgent
     * @summary Reboot System on Managed Computer
     * @request POST:/infrastructure/managementAgents/{managementAgentUid}/reboot
     * @secure
     */
    rebootSystemOnManagementAgent: (managementAgentUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/infrastructure/managementAgents/${managementAgentUid}/reboot`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all Veeam Backup & Replication servers.
     *
     * @tags Backup Servers
     * @name GetBackupServers
     * @summary Get All Backup Servers
     * @request GET:/infrastructure/backupServers
     * @secure
     */
    getBackupServers: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupServer[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupServers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a Veeam Backup & Replication server with the specified UID.
     *
     * @tags Backup Servers
     * @name GetBackupServer
     * @summary Get Backup Server
     * @request GET:/infrastructure/backupServers/{backupServerUid}
     * @secure
     */
    getBackupServer: (backupServerUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupServer; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupServers/${backupServerUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Forces data collection from a Veeam Backup & Replication server with the specified UID. Returns a positive response when the collection task is added to the internal queue and not when the task is executed.
     *
     * @tags Backup Servers
     * @name ForceCollectBackupServer
     * @summary Force Data Collection from Backup Server
     * @request POST:/infrastructure/backupServers/{backupServerUid}/collect
     * @secure
     */
    forceCollectBackupServer: (backupServerUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/infrastructure/backupServers/${backupServerUid}/collect`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all backup repositories.
     *
     * @tags Backup Servers
     * @name GetBackupRepositories
     * @summary Get All Backup Repositories
     * @request GET:/infrastructure/backupServers/repositories
     * @secure
     */
    getBackupRepositories: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupRepository[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupServers/repositories`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all backup repositories connected to a Veeam Backup & Replication server with the specified UID.
     *
     * @tags Backup Servers
     * @name GetBackupRepositoriesByServer
     * @summary Get All Backup Repositories Connected to Backup Server
     * @request GET:/infrastructure/backupServers/{backupServerUid}/repositories
     * @secure
     */
    getBackupRepositoriesByServer: (
      backupServerUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupRepository[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupServers/${backupServerUid}/repositories`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a backup repository with the specified UID.
     *
     * @tags Backup Servers
     * @name GetBackupRepository
     * @summary Get Backup Repository
     * @request GET:/infrastructure/backupServers/{backupServerUid}/repositories/{repositoryUid}
     * @secure
     */
    getBackupRepository: (
      backupServerUid: string,
      repositoryUid: string,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupRepository; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupServers/${backupServerUid}/repositories/${repositoryUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all backup proxies.
     *
     * @tags Backup Servers
     * @name GetBackupProxies
     * @summary Get All Backup Proxies
     * @request GET:/infrastructure/backupServers/proxies
     * @secure
     */
    getBackupProxies: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupProxy[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupServers/proxies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all backup proxies connected to a Veeam Backup & Replication server with the specified UID.
     *
     * @tags Backup Servers
     * @name GetBackupProxiesByServer
     * @summary Get All Backup Proxies Connected to Backup Server
     * @request GET:/infrastructure/backupServers/{backupServerUid}/proxies
     * @secure
     */
    getBackupProxiesByServer: (
      backupServerUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupProxy[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupServers/${backupServerUid}/proxies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a backup proxy with the specified UID.
     *
     * @tags Backup Servers
     * @name GetBackupProxy
     * @summary Get Backup Proxy
     * @request GET:/infrastructure/backupServers/{backupServerUid}/proxies/{proxyUid}
     * @secure
     */
    getBackupProxy: (
      backupServerUid: string,
      proxyUid: string,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupProxy; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupServers/${backupServerUid}/proxies/${proxyUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all WAN accelerators.
     *
     * @tags Backup Servers
     * @name GetBackupWanAccelerators
     * @summary Get All WAN Accelerators
     * @request GET:/infrastructure/backupServers/wanaccelerators
     * @secure
     */
    getBackupWanAccelerators: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupWanAccelerator[]; errors?: ResponseError[] }, ErrorResponse>(
        {
          path: `/infrastructure/backupServers/wanaccelerators`,
          method: "GET",
          query: query,
          secure: true,
          format: "json",
          ...params,
        },
      ),

    /**
     * @description Returns a collection resource representation of all WAN accelerators connected to a Veeam Backup & Replication server with the specified UID.
     *
     * @tags Backup Servers
     * @name GetBackupWanAcceleratorsByServer
     * @summary Get All WAN Accelerators Connected to Backup Server
     * @request GET:/infrastructure/backupServers/{backupServerUid}/wanaccelerators
     * @secure
     */
    getBackupWanAcceleratorsByServer: (
      backupServerUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupWanAccelerator[]; errors?: ResponseError[] }, ErrorResponse>(
        {
          path: `/infrastructure/backupServers/${backupServerUid}/wanaccelerators`,
          method: "GET",
          query: query,
          secure: true,
          format: "json",
          ...params,
        },
      ),

    /**
     * @description Returns a resource representation of a WAN accelerator with the specified UID.
     *
     * @tags Backup Servers
     * @name GetBackupWanAccelerator
     * @summary Get WAN Accelerator
     * @request GET:/infrastructure/backupServers/{backupServerUid}/wanaccelerators/{wanAcceleratorUid}
     * @secure
     */
    getBackupWanAccelerator: (
      backupServerUid: string,
      wanAcceleratorUid: string,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupWanAccelerator; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupServers/${backupServerUid}/wanaccelerators/${wanAcceleratorUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all servers connected to a Veeam Backup & Replication server with the specified UID.
     *
     * @tags Backup Servers
     * @name GetBackupServerHostsByServer
     * @summary Get All Hosts Connected to Backup Server
     * @request GET:/infrastructure/backupServers/{backupServerUid}/servers
     * @secure
     */
    getBackupServerHostsByServer: (
      backupServerUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupServerHost[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupServers/${backupServerUid}/servers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all servers connected to all Veeam Backup & Replication servers.
     *
     * @tags Backup Servers
     * @name GetBackupServerHosts
     * @summary Get All Hosts Connected to Backup Servers
     * @request GET:/infrastructure/backupServers/servers
     * @secure
     */
    getBackupServerHosts: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupServerHost[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupServers/servers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a server with the specified UID connected to a Veeam Backup & Replication server.
     *
     * @tags Backup Servers
     * @name GetBackupServerHost
     * @summary Get Host Connected to Backup Server
     * @request GET:/infrastructure/backupServers/{backupServerUid}/servers/{serverUid}
     * @secure
     */
    getBackupServerHost: (
      backupServerUid: string,
      serverUid: string,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupServerHost; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupServers/${backupServerUid}/servers/${serverUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all jobs on all Veeam Backup & Replication servers.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerJobs
     * @summary Get All Jobs
     * @request GET:/infrastructure/backupServers/jobs
     * @secure
     */
    getBackupServerJobs: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupServerJob[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupServers/jobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all jobs configured on a Veeam Backup & Replication server with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerJobByServer
     * @summary Get All Jobs Configured on Backup Server
     * @request GET:/infrastructure/backupServers/{backupServerUid}/jobs
     * @secure
     */
    getBackupServerJobByServer: (
      backupServerUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupServerJob[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupServers/${backupServerUid}/jobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a job with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerJob
     * @summary Get Job
     * @request GET:/infrastructure/backupServers/jobs/{jobUid}
     * @secure
     */
    getBackupServerJob: (jobUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupServerJob; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupServers/jobs/${jobUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a job with the specified UID. Returns a positive response when the task is added to the internal queue and not when the task is executed.
     *
     * @tags Backup Server Jobs
     * @name PatchBackupServerJob
     * @summary Modify Job
     * @request PATCH:/infrastructure/backupServers/jobs/{jobUid}
     * @secure
     */
    patchBackupServerJob: (
      jobUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupServerJob; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupServers/jobs/${jobUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Starts a job with the specified UID. Returns a positive response when the task is added to the internal queue and not when the task is executed.
     *
     * @tags Backup Server Jobs
     * @name StartBackupServerJob
     * @summary Start Job
     * @request POST:/infrastructure/backupServers/jobs/{jobUid}/start
     * @secure
     */
    startBackupServerJob: (jobUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/infrastructure/backupServers/jobs/${jobUid}/start`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Stops a job with the specified UID. Returns a positive response when the task is added to the internal queue and not when the task is executed.
     *
     * @tags Backup Server Jobs
     * @name StopBackupServerJob
     * @summary Stop Job
     * @request POST:/infrastructure/backupServers/jobs/{jobUid}/stop
     * @secure
     */
    stopBackupServerJob: (jobUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/infrastructure/backupServers/jobs/${jobUid}/stop`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retries a job with the specified UID. Returns a positive response when the retry task is added to the internal queue and not when the task is executed.
     *
     * @tags Backup Server Jobs
     * @name RetryBackupServerJob
     * @summary Retry Job
     * @request POST:/infrastructure/backupServers/jobs/{jobUid}/retry
     * @secure
     */
    retryBackupServerJob: (jobUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/infrastructure/backupServers/jobs/${jobUid}/retry`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all backup jobs that protect VMs.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerBackupVmJobs
     * @summary Get All VM Backup Jobs
     * @request GET:/infrastructure/backupServers/jobs/backupVmJobs
     * @secure
     */
    getBackupServerBackupVmJobs: (
      query?: {
        expand?: BackupServerBackupVmJobExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerBackupVmJob[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/backupVmJobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a backup job with the specified UID that protects VMs.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerBackupVmJob
     * @summary Get VM Backup Job
     * @request GET:/infrastructure/backupServers/jobs/backupVmJobs/{jobUid}
     * @secure
     */
    getBackupServerBackupVmJob: (jobUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerBackupVmJob; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/backupVmJobs/${jobUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all VM backup jobs configured on a Veeam Backup & Replication server with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerBackupVmJobsByServer
     * @summary Get All VM Backup Jobs Configured on Backup Server
     * @request GET:/infrastructure/backupServers/{backupServerUid}/jobs/backupVmJobs
     * @secure
     */
    getBackupServerBackupVmJobsByServer: (
      backupServerUid: string,
      query?: {
        expand?: BackupServerBackupVmJobExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerBackupVmJob[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/${backupServerUid}/jobs/backupVmJobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all objects of VM backup jobs configured on a Veeam Backup & Replication server with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerBackupVmJobsObjectsByServer
     * @summary Get All Objects of VM Backup Jobs Configured on Backup Server
     * @request GET:/infrastructure/backupServers/{backupServerUid}/jobs/backupVmJobs/objects
     * @secure
     */
    getBackupServerBackupVmJobsObjectsByServer: (
      backupServerUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerVmJobObject[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/${backupServerUid}/jobs/backupVmJobs/objects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all VM backup job objects.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerBackupVmJobsObjects
     * @summary Get All Objects of VM Backup Jobs
     * @request GET:/infrastructure/backupServers/jobs/backupVmJobs/objects
     * @secure
     */
    getBackupServerBackupVmJobsObjects: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerVmJobObject[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/backupVmJobs/objects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all objects of a VM backup job with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerBackupVmJobObjects
     * @summary Get All Objects of VM Backup Job
     * @request GET:/infrastructure/backupServers/jobs/backupVmJobs/{jobUid}/objects
     * @secure
     */
    getBackupServerBackupVmJobObjects: (
      jobUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerVmJobObject[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/backupVmJobs/${jobUid}/objects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of all replication jobs that protects VMs.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerReplicationVmJobs
     * @summary Get All VM Replication Jobs
     * @request GET:/infrastructure/backupServers/jobs/replicationVmJobs
     * @secure
     */
    getBackupServerReplicationVmJobs: (
      query?: {
        expand?: BackupServerReplicationVmJobExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerReplicationVmJob[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/replicationVmJobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a replication job with the specified UID that protects VMs.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerReplicationVmJob
     * @summary Get VM Replication Job
     * @request GET:/infrastructure/backupServers/jobs/replicationVmJobs/{jobUid}
     * @secure
     */
    getBackupServerReplicationVmJob: (jobUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerReplicationVmJob; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/replicationVmJobs/${jobUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all VM replication jobs configured on a Veeam Backup & Replication server with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerReplicationVmJobsByServer
     * @summary Get All VM Replication Jobs Configured on Backup Server
     * @request GET:/infrastructure/backupServers/{backupServerUid}/jobs/replicationVmJobs
     * @secure
     */
    getBackupServerReplicationVmJobsByServer: (
      backupServerUid: string,
      query?: {
        expand?: BackupServerReplicationVmJobExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerReplicationVmJob[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/${backupServerUid}/jobs/replicationVmJobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all objects of VM replication jobs configured on a Veeam Backup & Replication server with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerReplicationVmJobsObjectsByServer
     * @summary Get All Objects of VM Replication Jobs Configured on Backup Server
     * @request GET:/infrastructure/backupServers/{backupServerUid}/jobs/replicationVmJobs/objects
     * @secure
     */
    getBackupServerReplicationVmJobsObjectsByServer: (
      backupServerUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerVmJobObject[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/${backupServerUid}/jobs/replicationVmJobs/objects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all VM replication job objects.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerReplicationVmJobsObjects
     * @summary Get All Objects of VM Replication Jobs
     * @request GET:/infrastructure/backupServers/jobs/replicationVmJobs/objects
     * @secure
     */
    getBackupServerReplicationVmJobsObjects: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerVmJobObject[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/replicationVmJobs/objects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all objects of a VM replication job with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerReplicationVmJobObjects
     * @summary Get All Objects of VM Replication Job
     * @request GET:/infrastructure/backupServers/jobs/replicationVmJobs/{jobUid}/objects
     * @secure
     */
    getBackupServerReplicationVmJobObjects: (
      jobUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerVmJobObject[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/replicationVmJobs/${jobUid}/objects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all backup copy jobs.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerBackupCopyJobs
     * @summary Get All Backup Copy Jobs
     * @request GET:/infrastructure/backupServers/jobs/backupCopyJobs
     * @secure
     */
    getBackupServerBackupCopyJobs: (
      query?: {
        expand?: BackupServerBackupCopyJobExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerBackupCopyJob[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/backupCopyJobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a backup copy job with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerBackupCopyJob
     * @summary Get Backup Copy Job
     * @request GET:/infrastructure/backupServers/jobs/backupCopyJobs/{jobUid}
     * @secure
     */
    getBackupServerBackupCopyJob: (jobUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerBackupCopyJob; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/backupCopyJobs/${jobUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all backup copy jobs configured on a Veeam Backup & Replication server with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerBackupCopyJobsByServer
     * @summary Get All Backup Copy Jobs Configured on Backup Server
     * @request GET:/infrastructure/backupServers/{backupServerUid}/jobs/backupCopyJobs
     * @secure
     */
    getBackupServerBackupCopyJobsByServer: (
      backupServerUid: string,
      query?: {
        expand?: BackupServerBackupCopyJobExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerBackupCopyJob[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/${backupServerUid}/jobs/backupCopyJobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all backup copy job objects.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerBackupCopyJobsLinkedJobObjects
     * @summary Get All Objects of Backup Copy Jobs
     * @request GET:/infrastructure/backupServers/jobs/backupCopyJobs/jobObjects
     * @secure
     */
    getBackupServerBackupCopyJobsLinkedJobObjects: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerJobLinkedJobObject[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/backupCopyJobs/jobObjects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all objects of a backup copy job with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerBackupCopyJobLinkedJobObjects
     * @summary Get All Objects of Backup Copy Job
     * @request GET:/infrastructure/backupServers/jobs/backupCopyJobs/{jobUid}/jobObjects
     * @secure
     */
    getBackupServerBackupCopyJobLinkedJobObjects: (
      jobUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerJobLinkedJobObject[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/backupCopyJobs/${jobUid}/jobObjects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all objects of backup copy jobs configured on a Veeam Backup & Replication server with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerBackupCopyJobsLinkedJobObjectsByServer
     * @summary Get All Objects of Backup Copy Jobs Configured on Backup Server
     * @request GET:/infrastructure/backupServers/{backupServerUid}/jobs/backupCopyJobs/jobObjects
     * @secure
     */
    getBackupServerBackupCopyJobsLinkedJobObjectsByServer: (
      backupServerUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerJobLinkedJobObject[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/${backupServerUid}/jobs/backupCopyJobs/jobObjects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all file share jobs.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerFileShareJobs
     * @summary Get All File Share Jobs
     * @request GET:/infrastructure/backupServers/jobs/fileShareJobs
     * @secure
     */
    getBackupServerFileShareJobs: (
      query?: {
        expand?: BackupServerFileShareJobExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerFileShareJob[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/fileShareJobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a file share job with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerFileShareJob
     * @summary Get File Share Job
     * @request GET:/infrastructure/backupServers/jobs/fileShareJobs/{jobUid}
     * @secure
     */
    getBackupServerFileShareJob: (jobUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerFileShareJob; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/fileShareJobs/${jobUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all file share jobs configured on a Veeam Backup & Replication server with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerFileShareJobsByServer
     * @summary Get All File Share Jobs Configured on Backup Server
     * @request GET:/infrastructure/backupServers/{backupServerUid}/jobs/fileShareJobs
     * @secure
     */
    getBackupServerFileShareJobsByServer: (
      backupServerUid: string,
      query?: {
        expand?: BackupServerFileShareJobExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerFileShareJob[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/${backupServerUid}/jobs/fileShareJobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all file share job objects.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerFileShareJobsObjects
     * @summary Get All Objects of File Share Jobs
     * @request GET:/infrastructure/backupServers/jobs/fileShareJobs/objects
     * @secure
     */
    getBackupServerFileShareJobsObjects: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerFileShareJobObject[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/fileShareJobs/objects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all objects of file share jobs configured on a Veeam Backup & Replication server with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerFileShareJobsObjectsByServer
     * @summary Get All Objects of File Share Jobs Configured on Backup Server
     * @request GET:/infrastructure/backupServers/{backupServerUid}/jobs/fileShareJobs/objects
     * @secure
     */
    getBackupServerFileShareJobsObjectsByServer: (
      backupServerUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerFileShareJobObject[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/${backupServerUid}/jobs/fileShareJobs/objects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all objects of a file share job with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerFileShareJobObjects
     * @summary Get All Objects of File Share Job
     * @request GET:/infrastructure/backupServers/jobs/fileShareJobs/{jobUid}/objects
     * @secure
     */
    getBackupServerFileShareJobObjects: (
      jobUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerFileShareJobObject[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/fileShareJobs/${jobUid}/objects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all backup copy jobs for file shares.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerFileShareCopyJobs
     * @summary Get All File Share Copy Jobs
     * @request GET:/infrastructure/backupServers/jobs/fileShareCopyJobs
     * @secure
     */
    getBackupServerFileShareCopyJobs: (
      query?: {
        expand?: BackupServerFileShareCopyJobExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerFileShareCopyJob[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/fileShareCopyJobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a file share backup copy job with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerFileShareCopyJob
     * @summary Get File Share Copy Job
     * @request GET:/infrastructure/backupServers/jobs/fileShareCopyJobs/{jobUid}
     * @secure
     */
    getBackupServerFileShareCopyJob: (jobUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerFileShareCopyJob; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/fileShareCopyJobs/${jobUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all file share backup copy jobs configured on a Veeam Backup & Replication server with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerFileShareCopyJobsByServer
     * @summary Get All File Share Copy Jobs Configured on Backup Server
     * @request GET:/infrastructure/backupServers/{backupServerUid}/jobs/fileShareCopyJobs
     * @secure
     */
    getBackupServerFileShareCopyJobsByServer: (
      backupServerUid: string,
      query?: {
        expand?: BackupServerFileShareCopyJobExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerFileShareCopyJob[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/${backupServerUid}/jobs/fileShareCopyJobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all file share backup copy job objects.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerFileShareCopyJobsObjects
     * @summary Get All Objects of File Share Copy Jobs
     * @request GET:/infrastructure/backupServers/jobs/fileShareCopyJobs/objects
     * @secure
     */
    getBackupServerFileShareCopyJobsObjects: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerFileShareCopyJobObject[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/fileShareCopyJobs/objects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all objects of file share backup copy jobs configured on a Veeam Backup & Replication server with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerFileShareCopyJobsObjectsByServer
     * @summary Get All Objects of File Share Copy Jobs Configured on Backup Server
     * @request GET:/infrastructure/backupServers/{backupServerUid}/jobs/fileShareCopyJobs/objects
     * @secure
     */
    getBackupServerFileShareCopyJobsObjectsByServer: (
      backupServerUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerFileShareCopyJobObject[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/${backupServerUid}/jobs/fileShareCopyJobs/objects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all objects of a file share backup copy job with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerFileShareCopyJobObjects
     * @summary Get All Objects of File Share Copy Job
     * @request GET:/infrastructure/backupServers/jobs/fileShareCopyJobs/{jobUid}/objects
     * @secure
     */
    getBackupServerFileShareCopyJobObjects: (
      jobUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerFileShareCopyJobObject[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/fileShareCopyJobs/${jobUid}/objects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all immediate backup copy jobs.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerImmediateBackupCopyJobs
     * @summary Get All Immediate Backup Copy Jobs
     * @request GET:/infrastructure/backupServers/jobs/immediatelyBackupCopyJobs
     * @secure
     */
    getBackupServerImmediateBackupCopyJobs: (
      query?: {
        expand?: BackupServerImmediateBackupCopyJobExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerImmediateBackupCopyJob[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/immediatelyBackupCopyJobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of an immediate backup copy job with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerImmediateBackupCopyJob
     * @summary Get Immediate Backup Copy Job
     * @request GET:/infrastructure/backupServers/jobs/immediatelyBackupCopyJobs/{jobUid}
     * @secure
     */
    getBackupServerImmediateBackupCopyJob: (jobUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerImmediateBackupCopyJob; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/immediatelyBackupCopyJobs/${jobUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all immediate backup copy jobs configured on a Veeam Backup & Replication server with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerImmediateBackupCopyJobsByServer
     * @summary Get All Immediate Backup Copy Jobs Configured on Backup Server
     * @request GET:/infrastructure/backupServers/{backupServerUid}/jobs/immediatelyBackupCopyJobs
     * @secure
     */
    getBackupServerImmediateBackupCopyJobsByServer: (
      backupServerUid: string,
      query?: {
        expand?: BackupServerImmediateBackupCopyJobExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerImmediateBackupCopyJob[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/${backupServerUid}/jobs/immediatelyBackupCopyJobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all immediate backup copy job objects.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerImmediateBackupCopyJobsLinkedJobObjects
     * @summary Get All Objects of Immediate Backup Copy Jobs
     * @request GET:/infrastructure/backupServers/jobs/immediatelyBackupCopyJobs/objects
     * @secure
     */
    getBackupServerImmediateBackupCopyJobsLinkedJobObjects: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerJobLinkedJobObject[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/immediatelyBackupCopyJobs/objects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all objects of an immediate backup copy job with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerImmediateBackupCopyJobLinkedJobObjects
     * @summary Get All Objects of Immediate Backup Copy Job
     * @request GET:/infrastructure/backupServers/jobs/immediatelyBackupCopyJobs/{jobUid}/objects
     * @secure
     */
    getBackupServerImmediateBackupCopyJobLinkedJobObjects: (
      jobUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerJobLinkedJobObject[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/immediatelyBackupCopyJobs/${jobUid}/objects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all objects of immediate backup copy jobs configured on a Veeam Backup & Replication server with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerImmediateBackupCopyJobsLinkedJobObjectsByServer
     * @summary Get All Objects of Immediate Backup Copy Jobs Configured on Backup Server
     * @request GET:/infrastructure/backupServers{backupServerUid}/jobs/immediatelyBackupCopyJobs/objects
     * @secure
     */
    getBackupServerImmediateBackupCopyJobsLinkedJobObjectsByServer: (
      backupServerUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerJobLinkedJobObject[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers${backupServerUid}/jobs/immediatelyBackupCopyJobs/objects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all VM copy jobs.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerVmCopyJobs
     * @summary Get All VM Copy Jobs
     * @request GET:/infrastructure/backupServers/jobs/vmCopyJobs
     * @secure
     */
    getBackupServerVmCopyJobs: (
      query?: {
        expand?: BackupServerVmCopyJobExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerVmCopyJob[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/vmCopyJobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a VM copy job with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerVmCopyJob
     * @summary Get VM Copy Job
     * @request GET:/infrastructure/backupServers/jobs/vmCopyJobs/{jobUid}
     * @secure
     */
    getBackupServerVmCopyJob: (jobUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupServerVmCopyJob; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupServers/jobs/vmCopyJobs/${jobUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all VM copy jobs configured on a Veeam Backup & Replication server with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerVmCopyJobsByServer
     * @summary Get All VM Copy Jobs Configured on Backup Server
     * @request GET:/infrastructure/backupServers/{backupServerUid}/jobs/vmCopyJobs
     * @secure
     */
    getBackupServerVmCopyJobsByServer: (
      backupServerUid: string,
      query?: {
        expand?: BackupServerVmCopyJobExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerVmCopyJob[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/${backupServerUid}/jobs/vmCopyJobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all file copy jobs.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerFileCopyJobs
     * @summary Get All File Copy Jobs
     * @request GET:/infrastructure/backupServers/jobs/fileCopyJobs
     * @secure
     */
    getBackupServerFileCopyJobs: (
      query?: {
        expand?: BackupServerFileCopyJobExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerFileCopyJob[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/fileCopyJobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a file copy job with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerFileCopyJob
     * @summary Get File Copy Job
     * @request GET:/infrastructure/backupServers/jobs/fileCopyJobs/{jobUid}
     * @secure
     */
    getBackupServerFileCopyJob: (jobUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerFileCopyJob; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/fileCopyJobs/${jobUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all file copy jobs configured on a Veeam Backup & Replication server with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerFileCopyJobsByServer
     * @summary Get All File Copy Jobs Configured on Backup Server
     * @request GET:/infrastructure/backupServers/{backupServerUid}/jobs/fileCopyJobs
     * @secure
     */
    getBackupServerFileCopyJobsByServer: (
      backupServerUid: string,
      query?: {
        expand?: BackupServerFileCopyJobExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerFileCopyJob[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/${backupServerUid}/jobs/fileCopyJobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all file to tape jobs.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerFileTapeJobs
     * @summary Get All File to Tape Jobs
     * @request GET:/infrastructure/backupServers/jobs/fileTapeJobs
     * @secure
     */
    getBackupServerFileTapeJobs: (
      query?: {
        expand?: BackupServerFileTapeJobExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerFileTapeJob[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/fileTapeJobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a file to tape job with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerFileTapeJob
     * @summary Get File to Tape Job
     * @request GET:/infrastructure/backupServers/jobs/fileTapeJobs/{jobUid}
     * @secure
     */
    getBackupServerFileTapeJob: (jobUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerFileTapeJob; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/fileTapeJobs/${jobUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all file to tape jobs configured on a Veeam Backup & Replication server with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerFileTapeJobsByServer
     * @summary Get All File to Tape Jobs Configured on Backup Server
     * @request GET:/infrastructure/backupServers/{backupServerUid}/jobs/fileTapeJobs
     * @secure
     */
    getBackupServerFileTapeJobsByServer: (
      backupServerUid: string,
      query?: {
        expand?: BackupServerFileTapeJobExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerFileTapeJob[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/${backupServerUid}/jobs/fileTapeJobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all file to tape job objects.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerFileTapeJobsObjects
     * @summary Get All Objects of File to Tape Jobs
     * @request GET:/infrastructure/backupServers/jobs/fileTapeJobs/objects
     * @secure
     */
    getBackupServerFileTapeJobsObjects: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerFileTapeJobObject[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/fileTapeJobs/objects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all objects of file to tape jobs configured on a Veeam Backup & Replication server with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerFileTapeJobsObjectsByServer
     * @summary Get All Objects of File to Tape Jobs Configured on Backup Server
     * @request GET:/infrastructure/backupServers/{backupServerUid}/jobs/fileTapeJobs/objects
     * @secure
     */
    getBackupServerFileTapeJobsObjectsByServer: (
      backupServerUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerFileTapeJobObject[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/${backupServerUid}/jobs/fileTapeJobs/objects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all objects of a file to tape job with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerFileTapeJobObjects
     * @summary Get All Objects of File to Tape Job
     * @request GET:/infrastructure/backupServers/jobs/fileTapeJobs/{jobUid}/objects
     * @secure
     */
    getBackupServerFileTapeJobObjects: (
      jobUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerFileTapeJobObject[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/fileTapeJobs/${jobUid}/objects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all backup to tape jobs.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerBackupTapeJobs
     * @summary Get All Backup to Tape Jobs
     * @request GET:/infrastructure/backupServers/jobs/backupTapeJobs
     * @secure
     */
    getBackupServerBackupTapeJobs: (
      query?: {
        expand?: BackupServerBackupTapeJobExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerBackupTapeJob[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/backupTapeJobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a backup to tape job with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerBackupTapeJob
     * @summary Get Backup to Tape Job
     * @request GET:/infrastructure/backupServers/jobs/backupTapeJobs/{jobUid}
     * @secure
     */
    getBackupServerBackupTapeJob: (jobUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerBackupTapeJob; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/backupTapeJobs/${jobUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all backup to tape jobs configured on a Veeam Backup & Replication server with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerBackupTapeJobsByServer
     * @summary Get All Backup to Tape Jobs Configured on Backup Server
     * @request GET:/infrastructure/backupServers/{backupServerUid}/jobs/backupTapeJobs
     * @secure
     */
    getBackupServerBackupTapeJobsByServer: (
      backupServerUid: string,
      query?: {
        expand?: BackupServerBackupTapeJobExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerBackupTapeJob[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/${backupServerUid}/jobs/backupTapeJobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all jobs processed by backup to tape jobs.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerBackupTapeJobsLinkedJobObjects
     * @summary Get All Job Objects of Backup to Tape Jobs
     * @request GET:/infrastructure/backupServers/jobs/backupTapeJobs/jobObjects
     * @secure
     */
    getBackupServerBackupTapeJobsLinkedJobObjects: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerJobLinkedJobObject[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/backupTapeJobs/jobObjects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all jobs that are processed by backup to tape jobs configured on a Veeam Backup & Replication server with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerBackupTapeJobsLinkedJobObjectsByServer
     * @summary Get All Job Objects of Backup to Tape Jobs Configured on Backup Server
     * @request GET:/infrastructure/backupServers/{backupServerUid}/jobs/backupTapeJobs/jobObjects
     * @secure
     */
    getBackupServerBackupTapeJobsLinkedJobObjectsByServer: (
      backupServerUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerJobLinkedJobObject[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/${backupServerUid}/jobs/backupTapeJobs/jobObjects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all jobs processed by a backup to tape job with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerBackupTapeJobLinkedJobObjects
     * @summary Get All Job Objects of Backup to Tape Job
     * @request GET:/infrastructure/backupServers/jobs/backupTapeJobs/{jobUid}/jobObjects
     * @secure
     */
    getBackupServerBackupTapeJobLinkedJobObjects: (
      jobUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerJobLinkedJobObject[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/backupTapeJobs/${jobUid}/jobObjects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all repositories processed by backup to tape jobs.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerBackupTapeJobsLinkedRepositoryObjects
     * @summary Get All Repository Objects of Backup to Tape Jobs
     * @request GET:/infrastructure/backupServers/jobs/backupTapeJobs/repositoryObjects
     * @secure
     */
    getBackupServerBackupTapeJobsLinkedRepositoryObjects: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerJobLinkedRepositoryObject[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/backupTapeJobs/repositoryObjects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all repositories that are processed by backup to tape jobs configured on a Veeam Backup & Replication server with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerBackupTapeJobsLinkedRepositoryObjectsByServer
     * @summary Get All Repository Objects of Backup to Tape Jobs Configured on Backup Server
     * @request GET:/infrastructure/backupServers/{backupServerUid}/jobs/backupTapeJobs/repositoryObjects
     * @secure
     */
    getBackupServerBackupTapeJobsLinkedRepositoryObjectsByServer: (
      backupServerUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerJobLinkedRepositoryObject[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/${backupServerUid}/jobs/backupTapeJobs/repositoryObjects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all repositories processed by a backup to tape job with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerBackupTapeJobLinkedRepositoryObjects
     * @summary Get All Repository Objects of Backup to Tape Job
     * @request GET:/infrastructure/backupServers/jobs/backupTapeJobs/{jobUid}/repositoryObjects
     * @secure
     */
    getBackupServerBackupTapeJobLinkedRepositoryObjects: (
      jobUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerJobLinkedRepositoryObject[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/backupTapeJobs/${jobUid}/repositoryObjects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all backup agent jobs.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerAgentJobs
     * @summary Get All Backup Agent Jobs
     * @request GET:/infrastructure/backupServers/jobs/agentJobs
     * @secure
     */
    getBackupServerAgentJobs: (
      query?: {
        expand?: BackupServerAgentJobExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupServerAgentJob[]; errors?: ResponseError[] }, ErrorResponse>(
        {
          path: `/infrastructure/backupServers/jobs/agentJobs`,
          method: "GET",
          query: query,
          secure: true,
          format: "json",
          ...params,
        },
      ),

    /**
     * @description Returns a collection resource representation of all backup agent jobs configured on a Veeam Backup & Replication server with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerAgentJobsByServer
     * @summary Get All Backup Agent Jobs Configured on Backup Server
     * @request GET:/infrastructure/backupServers/{backupServerUid}/jobs/agentJobs
     * @secure
     */
    getBackupServerAgentJobsByServer: (
      backupServerUid: string,
      query?: {
        expand?: BackupServerAgentJobExpand[];
        filter?: string;
        sort?: string;
        limit?: number;
        offset?: number;
        select?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupServerAgentJob[]; errors?: ResponseError[] }, ErrorResponse>(
        {
          path: `/infrastructure/backupServers/${backupServerUid}/jobs/agentJobs`,
          method: "GET",
          query: query,
          secure: true,
          format: "json",
          ...params,
        },
      ),

    /**
     * @description Returns a resource representation of a backup agent job with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerAgentJob
     * @summary Get Backup Agent Job
     * @request GET:/infrastructure/backupServers/jobs/agentJobs/{jobUid}
     * @secure
     */
    getBackupServerAgentJob: (jobUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupServerAgentJob; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupServers/jobs/agentJobs/${jobUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all objects of a backup agent job with the specified UID.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerAgentJobObjects
     * @summary Get All Objects of Backup Agent Job
     * @request GET:/infrastructure/backupServers/jobs/agentJobs/{jobUid}/objects
     * @secure
     */
    getBackupServerAgentJobObjects: (
      jobUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerAgentJobObject[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/agentJobs/${jobUid}/objects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all backup agent job objects.
     *
     * @tags Backup Server Jobs
     * @name GetBackupServerAgentJobsObjects
     * @summary Get All Objects of Backup Agent Jobs
     * @request GET:/infrastructure/backupServers/jobs/agentJobs/objects
     * @secure
     */
    getBackupServerAgentJobsObjects: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerAgentJobObject[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/jobs/agentJobs/objects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all protection groups configured on managed Veeam Backup & Replication servers.
     *
     * @tags Backup Servers
     * @name GetBackupServerAgentProtectionGroups
     * @summary Get All Protection Groups
     * @request GET:/infrastructure/backupServers/protectionGroups
     * @secure
     */
    getBackupServerAgentProtectionGroups: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerAgentProtectionGroup[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/protectionGroups`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all protection groups configured on a managed Veeam Backup & Replication server with the specified UID.
     *
     * @tags Backup Servers
     * @name GetBackupServerAgentProtectionGroupsByServer
     * @summary Get All Protection Groups Configured on Backup Server
     * @request GET:/infrastructure/backupServers/{backupServerUid}/protectionGroups
     * @secure
     */
    getBackupServerAgentProtectionGroupsByServer: (
      backupServerUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupServerAgentProtectionGroup[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/${backupServerUid}/protectionGroups`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all failover plans.
     *
     * @tags Backup Server Failover Plans
     * @name GetBackupFailoverPlans
     * @summary Get All Failover Plans
     * @request GET:/infrastructure/backupServers/failoverplans
     * @secure
     */
    getBackupFailoverPlans: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupFailoverPlan[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupServers/failoverplans`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all failover plans configured on a Veeam Backup & Replication server with the specified UID.
     *
     * @tags Backup Server Failover Plans
     * @name GetBackupFailoverPlansByServer
     * @summary Get All Failover Plans Configured on Backup Server
     * @request GET:/infrastructure/backupServers/{backupServerUid}/failoverplans
     * @secure
     */
    getBackupFailoverPlansByServer: (
      backupServerUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupFailoverPlan[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupServers/${backupServerUid}/failoverplans`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a failover plan with the specified UID.
     *
     * @tags Backup Server Failover Plans
     * @name GetBackupFailoverPlan
     * @summary Get Failover Plan
     * @request GET:/infrastructure/backupServers/failoverplans/{planUid}
     * @secure
     */
    getBackupFailoverPlan: (planUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupFailoverPlan; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupServers/failoverplans/${planUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a failover plan with the specified UID. > Operation is performed asynchronously and cannot be tracked.
     *
     * @tags Backup Server Failover Plans
     * @name PatchBackupFailoverPlan
     * @summary Modify Failover Plan
     * @request PATCH:/infrastructure/backupServers/failoverplans/{planUid}
     * @secure
     */
    patchBackupFailoverPlan: (
      planUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupFailoverPlan; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupServers/failoverplans/${planUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Starts a failover plan with the specified UID. Returns a positive response when the task is added to the internal queue and not when the task is executed.
     *
     * @tags Backup Server Failover Plans
     * @name StartBackupFailoverPlan
     * @summary Start Failover Plan
     * @request POST:/infrastructure/backupServers/failoverplans/{planUid}/start
     * @secure
     */
    startBackupFailoverPlan: (planUid: string, query?: { "date-time"?: string }, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/infrastructure/backupServers/failoverplans/${planUid}/start`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Undoes a failover plan with the specified UID. Returns a positive response when the undo task is added to the internal queue and not when the task is executed.
     *
     * @tags Backup Server Failover Plans
     * @name UndoBackupFailoverPlan
     * @summary Undo Failover Plan
     * @request POST:/infrastructure/backupServers/failoverplans/{planUid}/undo
     * @secure
     */
    undoBackupFailoverPlan: (planUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/infrastructure/backupServers/failoverplans/${planUid}/undo`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of VMs included in all failover plans.
     *
     * @tags Backup Server Failover Plans
     * @name GetBackupFailoverPlansObjects
     * @summary Get All Objects of Failover Plans
     * @request GET:/infrastructure/backupServers/failoverplans/objects
     * @secure
     */
    getBackupFailoverPlansObjects: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupFailoverPlanObject[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/failoverplans/objects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of VMs included in all failover plans configured on a Veeam Backup & Replication server with the specified UID.
     *
     * @tags Backup Server Failover Plans
     * @name GetBackupFailoverPlansObjectsByServer
     * @summary Get All Objects of Failover Plans Configured on Backup Server
     * @request GET:/infrastructure/backupServers/{backupServerUid}/failoverplans/objects
     * @secure
     */
    getBackupFailoverPlansObjectsByServer: (
      backupServerUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupFailoverPlanObject[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/${backupServerUid}/failoverplans/objects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all VMs included in a failover plan with the specified UID.
     *
     * @tags Backup Server Failover Plans
     * @name GetBackupFailoverPlanObjects
     * @summary Get All Objects of Failover Plan
     * @request GET:/infrastructure/backupServers/failoverplans/{planUid}/objects
     * @secure
     */
    getBackupFailoverPlanObjects: (
      planUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupFailoverPlanObject[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupServers/failoverplans/${planUid}/objects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all Veeam backup agents.
     *
     * @tags Backup Agents
     * @name GetBackupAgents
     * @summary Get All Backup Agents
     * @request GET:/infrastructure/backupAgents
     * @secure
     */
    getBackupAgents: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupAgent[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupAgents`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a Veeam backup agent with the specified UID.
     *
     * @tags Backup Agents
     * @name GetBackupAgent
     * @summary Get Backup Agent
     * @request GET:/infrastructure/backupAgents/{backupAgentUid}
     * @secure
     */
    getBackupAgent: (backupAgentUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupAgent; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupAgents/${backupAgentUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies Veeam backup agent with the specified UID.
     *
     * @tags Backup Agents
     * @name PatchBackupAgent
     * @summary Modify Backup Agent
     * @request PATCH:/infrastructure/backupAgents/{backupAgentUid}
     * @secure
     */
    patchBackupAgent: (
      backupAgentUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupAgent; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupAgents/${backupAgentUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes Veeam backup agent with the specified UID.
     *
     * @tags Backup Agents
     * @name DeleteBackupAgent
     * @summary Delete Backup Agent
     * @request DELETE:/infrastructure/backupAgents/{backupAgentUid}
     * @secure
     */
    deleteBackupAgent: (backupAgentUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/infrastructure/backupAgents/${backupAgentUid}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Changes management mode of a Veeam backup agent with the specified UID to ManagedByConsole.
     *
     * @tags Backup Agents
     * @name ActivateBackupAgent
     * @summary Activate Backup Agent
     * @request POST:/infrastructure/backupAgents/{backupAgentUid}/activate
     * @secure
     */
    activateBackupAgent: (backupAgentUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/infrastructure/backupAgents/${backupAgentUid}/activate`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Changes management mode of Veeam backup agent with the specified UID to UnManaged and deletes management agent from the agent computer.
     *
     * @tags Backup Agents
     * @name DeactivateBackupAgent
     * @summary Deactivate Backup Agent
     * @request POST:/infrastructure/backupAgents/{backupAgentUid}/deactivate
     * @secure
     */
    deactivateBackupAgent: (backupAgentUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/infrastructure/backupAgents/${backupAgentUid}/deactivate`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Restarts Veeam backup agent with the specified UID. Returns a positive response if the restart task is added to the internal queue and not when the task is executed.
     *
     * @tags Backup Agents
     * @name RestartBackupAgentService
     * @summary Restart Backup Agent
     * @request POST:/infrastructure/backupAgents/{backupAgentUid}/restart
     * @secure
     */
    restartBackupAgentService: (backupAgentUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/infrastructure/backupAgents/${backupAgentUid}/restart`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Forces data collection from a Veeam backup agent with the specified UID. Returns a positive response when the management agent receives the data collection task and not when the task is executed.
     *
     * @tags Backup Agents
     * @name ForceCollectBackupAgent
     * @summary Force Data Collection from Backup Agent
     * @request POST:/infrastructure/backupAgents/{backupAgentUid}/collect
     * @secure
     */
    forceCollectBackupAgent: (backupAgentUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/infrastructure/backupAgents/${backupAgentUid}/collect`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all Veeam backup agents installed on Windows computers.
     *
     * @tags Backup Agents
     * @name GetWindowsBackupAgents
     * @summary Get All Veeam Agents for Microsoft Windows
     * @request GET:/infrastructure/backupAgents/windows
     * @secure
     */
    getWindowsBackupAgents: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: WindowsBackupAgent[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupAgents/windows`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a Veeam Agent for Microsoft Windows with the specified UID.
     *
     * @tags Backup Agents
     * @name GetWindowsBackupAgent
     * @summary Get Veeam Agent for Microsoft Windows
     * @request GET:/infrastructure/backupAgents/windows/{backupAgentUid}
     * @secure
     */
    getWindowsBackupAgent: (backupAgentUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: WindowsBackupAgent; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupAgents/windows/${backupAgentUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates Veeam Agent for Microsoft Windows with the specified UID. Returns a positive response when the management agent receives the update task and not when the task is executed.
     *
     * @tags Backup Agents
     * @name UpdateWindowsBackupAgent
     * @summary Update Veeam Agent for Microsoft Windows
     * @request POST:/infrastructure/backupAgents/windows/{backupAgentUid}/update
     * @secure
     */
    updateWindowsBackupAgent: (backupAgentUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: DeploymentInformation; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupAgents/windows/${backupAgentUid}/update`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Installs the Veeam CBT driver on a Windows computer that runs Veeam Agent with the specified UID.
     *
     * @tags Backup Agents
     * @name InstallCbtDriver
     * @summary Install CBT Driver
     * @request POST:/infrastructure/backupAgents/windows/{backupAgentUid}/installCbtDriver
     * @secure
     */
    installCbtDriver: (backupAgentUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/infrastructure/backupAgents/windows/${backupAgentUid}/installCbtDriver`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Uninstalls the Veeam CBT driver from a Windows computer that runs Veeam Agent with the specified UID.
     *
     * @tags Backup Agents
     * @name UninstallCbtDriver
     * @summary Uninstall CBT Driver
     * @request POST:/infrastructure/backupAgents/windows/{backupAgentUid}/uninstallCbtDriver
     * @secure
     */
    uninstallCbtDriver: (backupAgentUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/infrastructure/backupAgents/windows/${backupAgentUid}/uninstallCbtDriver`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of settings configured for all Veeam backup agents installed on Windows computers.
     *
     * @tags Backup Agents
     * @name GetBackupAgentsSettings
     * @summary Get All Veeam Agents for Microsoft Windows Settings
     * @request GET:/infrastructure/backupAgents/windows/settings
     * @secure
     */
    getBackupAgentsSettings: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupAgentSettings[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupAgents/windows/settings`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of settings configured for Veeam Agent for Microsoft Windows with the specified UID.
     *
     * @tags Backup Agents
     * @name GetBackupAgentSettings
     * @summary Get Veeam Agent for Microsoft Windows Settings
     * @request GET:/infrastructure/backupAgents/windows/{backupAgentUid}/settings
     * @secure
     */
    getBackupAgentSettings: (backupAgentUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupAgentSettings; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupAgents/windows/${backupAgentUid}/settings`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Replaces settings configured for Veeam Agent for Microsoft Windows with the specified UID.
     *
     * @tags Backup Agents
     * @name SetBackupAgentSettings
     * @summary Replace Veeam Agent for Microsoft Windows Settings
     * @request PUT:/infrastructure/backupAgents/windows/{backupAgentUid}/settings
     * @secure
     */
    setBackupAgentSettings: (
      backupAgentUid: string,
      body: BackupAgentSettings,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupAgentSettings; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupAgents/windows/${backupAgentUid}/settings`,
        method: "PUT",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies settings configured for Veeam Agent for Microsoft Windows with the specified UID.
     *
     * @tags Backup Agents
     * @name PatchBackupAgentSettings
     * @summary Modify Veeam Agent for Microsoft Windows Settings
     * @request PATCH:/infrastructure/backupAgents/windows/{backupAgentUid}/settings
     * @secure
     */
    patchBackupAgentSettings: (
      backupAgentUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupAgentSettings; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupAgents/windows/${backupAgentUid}/settings`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all backup policies assigned to Veeam Agents for Microsoft Windows.
     *
     * @tags Backup Agents
     * @name GetAllBackupAgentAssignedPolicies
     * @summary Get Policies Assigned to All Veeam Agents for Microsoft Windows
     * @request GET:/infrastructure/backupAgents/windows/assignedPolicies
     * @secure
     */
    getAllBackupAgentAssignedPolicies: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupAgentAssignedBackupPolicy[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupAgents/windows/assignedPolicies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all backup policies assigned to Veeam Agent for Microsoft Windows with the specified UID.
     *
     * @tags Backup Agents
     * @name GetBackupAgentAssignedPolicies
     * @summary Get All Policies Assigned to Veeam Agent for Microsoft Windows
     * @request GET:/infrastructure/backupAgents/windows/{backupAgentUid}/assignedPolicies
     * @secure
     */
    getBackupAgentAssignedPolicies: (
      backupAgentUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupAgentAssignedBackupPolicy[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupAgents/windows/${backupAgentUid}/assignedPolicies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Assigns a backup policy to a Veeam Agent for Microsoft Windows with the specified UID. Returns a positive response when the management agent receives the task and not when the task is executed.
     *
     * @tags Backup Agents
     * @name AssignPolicyOnBackupAgent
     * @summary Assign Policy to Veeam Agent for Microsoft Windows
     * @request POST:/infrastructure/backupAgents/windows/{backupAgentUid}/assignedPolicies
     * @secure
     */
    assignPolicyOnBackupAgent: (backupAgentUid: string, query: { policyUid: string }, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/infrastructure/backupAgents/windows/${backupAgentUid}/assignedPolicies`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all Veeam backup agent jobs protecting Windows computers.
     *
     * @tags Backup Agent Jobs
     * @name GetBackupAgentJobs
     * @summary Get All Veeam Backup Agent Jobs
     * @request GET:/infrastructure/backupAgents/jobs
     * @secure
     */
    getBackupAgentJobs: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupAgentJob[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupAgents/jobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Starts a Veeam backup agent job with the specified UID. Returns a positive response when the management agent receives the task and not when the task is executed.
     *
     * @tags Backup Agent Jobs
     * @name StartBackupAgentJob
     * @summary Start Veeam Backup Agent Job
     * @request POST:/infrastructure/backupAgents/{backupAgentUid}/jobs/{backupAgentJobUid}/start
     * @secure
     */
    startBackupAgentJob: (backupAgentUid: string, backupAgentJobUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/infrastructure/backupAgents/${backupAgentUid}/jobs/${backupAgentJobUid}/start`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Stops a Veeam backup agent job with the specified UID. Returns a positive response when the management agent receives the task and not when the task is executed.
     *
     * @tags Backup Agent Jobs
     * @name StopBackupAgentJob
     * @summary Stop Veeam Backup Agent Job
     * @request POST:/infrastructure/backupAgents/{backupAgentUid}/jobs/{backupAgentJobUid}/stop
     * @secure
     */
    stopBackupAgentJob: (backupAgentUid: string, backupAgentJobUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/infrastructure/backupAgents/${backupAgentUid}/jobs/${backupAgentJobUid}/stop`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all Veeam backup agent jobs protecting Windows computers.
     *
     * @tags Backup Agent Jobs
     * @name GetWindowsBackupAgentJobs
     * @summary Get Jobs for All Veeam Agents for Microsoft Windows
     * @request GET:/infrastructure/backupAgents/windows/jobs
     * @secure
     */
    getWindowsBackupAgentJobs: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: WindowsBackupAgentJob[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupAgents/windows/jobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all jobs configured for Veeam backup agent for Microsoft Windows with the specified UID.
     *
     * @tags Backup Agent Jobs
     * @name GetWindowsBackupAgentJobsByAgent
     * @summary Get All Jobs for Veeam Agent for Microsoft Windows
     * @request GET:/infrastructure/backupAgents/windows/{backupAgentUid}/jobs
     * @secure
     */
    getWindowsBackupAgentJobsByAgent: (
      backupAgentUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: WindowsBackupAgentJob[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupAgents/windows/${backupAgentUid}/jobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a Veeam Agent for Microsoft Windows job with the specified UID.
     *
     * @tags Backup Agent Jobs
     * @name GetWindowsBackupAgentJob
     * @summary Get Job for Veeam Agent for Microsoft Windows
     * @request GET:/infrastructure/backupAgents/windows/{backupAgentUid}/jobs/{backupAgentJobUid}
     * @secure
     */
    getWindowsBackupAgentJob: (
      backupAgentUid: string,
      backupAgentJobUid: string,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: WindowsBackupAgentJob; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupAgents/windows/${backupAgentUid}/jobs/${backupAgentJobUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a Veeam Agent for Microsoft Windows job with the specified UID. Returns a positive response when the management agent receives the task and not when the task is executed.
     *
     * @tags Backup Agent Jobs
     * @name DeleteWindowsBackupAgentJob
     * @summary Delete Job for Veeam Agent for Microsoft Windows
     * @request DELETE:/infrastructure/backupAgents/windows/{backupAgentUid}/jobs/{backupAgentJobUid}
     * @secure
     */
    deleteWindowsBackupAgentJob: (
      backupAgentUid: string,
      backupAgentJobUid: string,
      query: { removeRestorePoints: boolean },
      params: RequestParams = {},
    ) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/infrastructure/backupAgents/windows/${backupAgentUid}/jobs/${backupAgentJobUid}`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a Veeam Agent for Microsoft Windows job with the specified UID.
     *
     * @tags Backup Agent Jobs
     * @name PatchWindowsBackupAgentJob
     * @summary Modify Job for Veeam Agent for Microsoft Windows
     * @request PATCH:/infrastructure/backupAgents/windows/{backupAgentUid}/jobs/{backupAgentJobUid}
     * @secure
     */
    patchWindowsBackupAgentJob: (
      backupAgentUid: string,
      backupAgentJobUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: WindowsBackupAgentJob; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupAgents/windows/${backupAgentUid}/jobs/${backupAgentJobUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Starts a Veeam Agent for Microsoft Windows job with the specified UID. Returns a positive response when the management agent receives the reboot task and not when the task is executed.
     *
     * @tags Backup Agent Jobs
     * @name StartWindowsBackupAgentJob
     * @summary Start Job for Veeam Agent for Microsoft Windows
     * @request POST:/infrastructure/backupAgents/windows/{backupAgentUid}/jobs/{backupAgentJobUid}/start
     * @secure
     */
    startWindowsBackupAgentJob: (backupAgentUid: string, backupAgentJobUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/infrastructure/backupAgents/windows/${backupAgentUid}/jobs/${backupAgentJobUid}/start`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Stops a Veeam Agent for Microsoft Windows job with the specified UID. Returns a positive response when the management agent receives the task and not when the task is executed.
     *
     * @tags Backup Agent Jobs
     * @name StopWindowsBackupAgentJob
     * @summary Stop Job for Veeam Agent for Microsoft Windows
     * @request POST:/infrastructure/backupAgents/windows/{backupAgentUid}/jobs/{backupAgentJobUid}/stop
     * @secure
     */
    stopWindowsBackupAgentJob: (backupAgentUid: string, backupAgentJobUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/infrastructure/backupAgents/windows/${backupAgentUid}/jobs/${backupAgentJobUid}/stop`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a configuration of the Veeam Agent for Microsoft Windows job with the specified UID.
     *
     * @tags Backup Agent Jobs
     * @name GetWindowsBackupAgentJobConfiguration
     * @summary Get Configuration of Job for Veeam Agent for Microsoft Windows
     * @request GET:/infrastructure/backupAgents/windows/{backupAgentUid}/jobs/{backupAgentJobUid}/configuration
     * @secure
     */
    getWindowsBackupAgentJobConfiguration: (
      backupAgentUid: string,
      backupAgentJobUid: string,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: WindowsCustomJobConfiguration; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupAgents/windows/${backupAgentUid}/jobs/${backupAgentJobUid}/configuration`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a configuration of the Veeam Agent for Microsoft Windows job with the specified UID.
     *
     * @tags Backup Agent Jobs
     * @name PatchWindowsBackupAgentJobConfiguration
     * @summary Modify Configuration of Job for Veeam Agent for Microsoft Windows
     * @request PATCH:/infrastructure/backupAgents/windows/{backupAgentUid}/jobs/{backupAgentJobUid}/configuration
     * @secure
     */
    patchWindowsBackupAgentJobConfiguration: (
      backupAgentUid: string,
      backupAgentJobUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: WindowsCustomJobConfiguration; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupAgents/windows/${backupAgentUid}/jobs/${backupAgentJobUid}/configuration`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a configuration of a Veeam backup agent job protecting a Windows computer with the specified UID.
     *
     * @tags Backup Agent Jobs
     * @name CreateWindowsBackupAgentJobConfiguration
     * @summary Create Configuration of Job for Veeam Agent for Microsoft Windows
     * @request POST:/infrastructure/backupAgents/windows/{backupAgentUid}/jobs/configuration
     * @secure
     */
    createWindowsBackupAgentJobConfiguration: (
      backupAgentUid: string,
      body: WindowsCustomJobConfiguration,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: WindowsCustomJobConfiguration; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupAgents/windows/${backupAgentUid}/jobs/configuration`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all Veeam Agents for Linux.
     *
     * @tags Backup Agents
     * @name GetLinuxBackupAgents
     * @summary Get All Veeam Agents for Linux
     * @request GET:/infrastructure/backupAgents/linux
     * @secure
     */
    getLinuxBackupAgents: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: LinuxBackupAgent[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupAgents/linux`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a Veeam Agent for Linux with the specified UID.
     *
     * @tags Backup Agents
     * @name GetLinuxBackupAgent
     * @summary Get Veeam Agent for Linux
     * @request GET:/infrastructure/backupAgents/linux/{backupAgentUid}
     * @secure
     */
    getLinuxBackupAgent: (backupAgentUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: LinuxBackupAgent; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupAgents/linux/${backupAgentUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a Veeam Agent for Linux with the specified UID.
     *
     * @tags Backup Agents
     * @name UpdateLinuxBackupAgent
     * @summary Update Veeam Agent for Linux
     * @request POST:/infrastructure/backupAgents/linux/{backupAgentUid}/update
     * @secure
     */
    updateLinuxBackupAgent: (backupAgentUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: DeploymentInformation; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupAgents/linux/${backupAgentUid}/update`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all backup policies assigned to Veeam Agents for Linux.
     *
     * @tags Backup Agents
     * @name GetAllLinuxBackupAgentAssignedPolicies
     * @summary Get Policies Assigned to All Veeam Agents for Linux
     * @request GET:/infrastructure/backupAgents/linux/assignedPolicies
     * @secure
     */
    getAllLinuxBackupAgentAssignedPolicies: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupAgentAssignedBackupPolicy[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupAgents/linux/assignedPolicies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all backup policies assigned to a Veeam Agent for Linux with the specified UID.
     *
     * @tags Backup Agents
     * @name GetLinuxBackupAgentAssignedPolicies
     * @summary Get All Policies Assigned to Veeam Agent for Linux
     * @request GET:/infrastructure/backupAgents/linux/{backupAgentUid}/assignedPolicies
     * @secure
     */
    getLinuxBackupAgentAssignedPolicies: (
      backupAgentUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupAgentAssignedBackupPolicy[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupAgents/linux/${backupAgentUid}/assignedPolicies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Assigns a backup policy to a Veeam Agent for Linux with the specified UID. Returns a positive response when the management agent receives the task and not when the task is executed.
     *
     * @tags Backup Agents
     * @name AssignLinuxPolicyOnBackupAgent
     * @summary Assign Policy to Veeam Agent for Linux
     * @request POST:/infrastructure/backupAgents/linux/{backupAgentUid}/assignedPolicies
     * @secure
     */
    assignLinuxPolicyOnBackupAgent: (
      backupAgentUid: string,
      query: { policyUid: string },
      params: RequestParams = {},
    ) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/infrastructure/backupAgents/linux/${backupAgentUid}/assignedPolicies`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all Veeam Agent jobs protecting Linux computers.
     *
     * @tags Backup Agent Jobs
     * @name GetLinuxBackupAgentJobs
     * @summary Get Jobs for All Veeam Agents for Linux
     * @request GET:/infrastructure/backupAgents/linux/jobs
     * @secure
     */
    getLinuxBackupAgentJobs: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: LinuxBackupAgentJob[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupAgents/linux/jobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all jobs configured for a Veeam Agent for Linux with the specified UID.
     *
     * @tags Backup Agent Jobs
     * @name GetLinuxBackupAgentJobsByAgent
     * @summary Get All Jobs for Veeam Agent for Linux
     * @request GET:/infrastructure/backupAgents/linux/{backupAgentUid}/jobs
     * @secure
     */
    getLinuxBackupAgentJobsByAgent: (
      backupAgentUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: LinuxBackupAgentJob[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupAgents/linux/${backupAgentUid}/jobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a Veeam Agent for Linux job with the specified UID.
     *
     * @tags Backup Agent Jobs
     * @name GetLinuxBackupAgentJob
     * @summary Get Job for Veeam Agent for Linux
     * @request GET:/infrastructure/backupAgents/linux/{backupAgentUid}/jobs/{backupAgentJobUid}
     * @secure
     */
    getLinuxBackupAgentJob: (
      backupAgentUid: string,
      backupAgentJobUid: string,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: LinuxBackupAgentJob; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupAgents/linux/${backupAgentUid}/jobs/${backupAgentJobUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a Veeam Agent for Linux job with the specified UID. Returns a positive response if the restart task is added to the internal queue and not when the task is executed.
     *
     * @tags Backup Agent Jobs
     * @name DeleteLinuxBackupAgentJob
     * @summary Delete Job for Veeam Agent for Linux
     * @request DELETE:/infrastructure/backupAgents/linux/{backupAgentUid}/jobs/{backupAgentJobUid}
     * @secure
     */
    deleteLinuxBackupAgentJob: (
      backupAgentUid: string,
      backupAgentJobUid: string,
      query: { removeRestorePoints: boolean },
      params: RequestParams = {},
    ) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/infrastructure/backupAgents/linux/${backupAgentUid}/jobs/${backupAgentJobUid}`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Starts a Veeam Agent for Linux job with the specified UID. Returns a positive response if the task is added to the internal queue and not when the task is executed.
     *
     * @tags Backup Agent Jobs
     * @name StartLinuxBackupAgentJob
     * @summary Start Job for Veeam Agent for Linux
     * @request POST:/infrastructure/backupAgents/linux/{backupAgentUid}/jobs/{backupAgentJobUid}/start
     * @secure
     */
    startLinuxBackupAgentJob: (backupAgentUid: string, backupAgentJobUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/infrastructure/backupAgents/linux/${backupAgentUid}/jobs/${backupAgentJobUid}/start`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Stops a Veeam Agent for Linux job with the specified UID. Returns a positive response if the task is added to the internal queue and not when the task is executed.
     *
     * @tags Backup Agent Jobs
     * @name StopLinuxBackupAgentJob
     * @summary Stop Job for Veeam Agent for Linux
     * @request POST:/infrastructure/backupAgents/linux/{backupAgentUid}/jobs/{backupAgentJobUid}/stop
     * @secure
     */
    stopLinuxBackupAgentJob: (backupAgentUid: string, backupAgentJobUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/infrastructure/backupAgents/linux/${backupAgentUid}/jobs/${backupAgentJobUid}/stop`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of Veeam Agent for Linux job configuration with the specified UID.
     *
     * @tags Backup Agent Jobs
     * @name GetLinuxBackupAgentJobConfiguration
     * @summary Get Configuration of Job for Veeam Agent for Linux
     * @request GET:/infrastructure/backupAgents/linux/{backupAgentUid}/jobs/{backupAgentJobUid}/configuration
     * @secure
     */
    getLinuxBackupAgentJobConfiguration: (
      backupAgentUid: string,
      backupAgentJobUid: string,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: LinuxCustomJobConfiguration; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupAgents/linux/${backupAgentUid}/jobs/${backupAgentJobUid}/configuration`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies Veeam Agent for Linux job configuration with the specified UID.
     *
     * @tags Backup Agent Jobs
     * @name PatchLinuxBackupAgentJobConfiguration
     * @summary Modify Configuration of Job for Veeam Agent for Linux
     * @request PATCH:/infrastructure/backupAgents/linux/{backupAgentUid}/jobs/{backupAgentJobUid}/configuration
     * @secure
     */
    patchLinuxBackupAgentJobConfiguration: (
      backupAgentUid: string,
      backupAgentJobUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: LinuxCustomJobConfiguration; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupAgents/linux/${backupAgentUid}/jobs/${backupAgentJobUid}/configuration`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates configuration of a Veeam backup agent job protecting Linux computer with the specified UID.
     *
     * @tags Backup Agent Jobs
     * @name CreateLinuxBackupAgentJobConfiguration
     * @summary Create Configuration of Job for Veeam Agent for Linux
     * @request POST:/infrastructure/backupAgents/linux/{backupAgentUid}/jobs/configuration
     * @secure
     */
    createLinuxBackupAgentJobConfiguration: (
      backupAgentUid: string,
      body: LinuxCustomJobConfiguration,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: LinuxCustomJobConfiguration; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupAgents/linux/${backupAgentUid}/jobs/configuration`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all Veeam Agents for Mac.
     *
     * @tags Backup Agents
     * @name GetMacBackupAgents
     * @summary Get All Veeam Agents for Mac
     * @request GET:/infrastructure/backupAgents/mac
     * @secure
     */
    getMacBackupAgents: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: MacBackupAgent[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupAgents/mac`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a Veeam Agent for Mac with the specified UID.
     *
     * @tags Backup Agents
     * @name GetMacBackupAgent
     * @summary Get Veeam Agent for Mac
     * @request GET:/infrastructure/backupAgents/mac/{backupAgentUid}
     * @secure
     */
    getMacBackupAgent: (backupAgentUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: MacBackupAgent; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupAgents/mac/${backupAgentUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a Veeam Agent for Mac with the specified UID.
     *
     * @tags Backup Agents
     * @name UpdateMacBackupAgent
     * @summary Update Veeam Agent for Mac
     * @request POST:/infrastructure/backupAgents/mac/{backupAgentUid}/update
     * @secure
     */
    updateMacBackupAgent: (backupAgentUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: DeploymentInformation; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupAgents/mac/${backupAgentUid}/update`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all backup policies assigned to Veeam Agents for Mac.
     *
     * @tags Backup Agents
     * @name GetAllMacBackupAgentAssignedPolicies
     * @summary Get Policies Assigned to All Veeam Agents for Mac
     * @request GET:/infrastructure/backupAgents/mac/assignedPolicies
     * @secure
     */
    getAllMacBackupAgentAssignedPolicies: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupAgentAssignedBackupPolicy[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupAgents/mac/assignedPolicies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all backup policies assigned to a Veeam Agent for Mac with the specified UID.
     *
     * @tags Backup Agents
     * @name GetMacBackupAgentAssignedPolicies
     * @summary Get All Policies Assigned to Veeam Agent for Mac
     * @request GET:/infrastructure/backupAgents/mac/{backupAgentUid}/assignedPolicies
     * @secure
     */
    getMacBackupAgentAssignedPolicies: (
      backupAgentUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupAgentAssignedBackupPolicy[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/backupAgents/mac/${backupAgentUid}/assignedPolicies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Assigns a backup policy to a Veeam Agent for Mac with the specified UID. Returns a positive response when the management agent receives the task and not when the task is executed.
     *
     * @tags Backup Agents
     * @name AssignMacPolicyOnBackupAgent
     * @summary Assign Policy to Veeam Agent for Mac
     * @request POST:/infrastructure/backupAgents/mac/{backupAgentUid}/assignedPolicies
     * @secure
     */
    assignMacPolicyOnBackupAgent: (backupAgentUid: string, query: { policyUid: string }, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/infrastructure/backupAgents/mac/${backupAgentUid}/assignedPolicies`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all Veeam Agent for Mac jobs.
     *
     * @tags Backup Agent Jobs
     * @name GetMacBackupAgentJobs
     * @summary Get Jobs for All Veeam Agents for Mac
     * @request GET:/infrastructure/backupAgents/mac/jobs
     * @secure
     */
    getMacBackupAgentJobs: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: MacBackupAgentJob[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupAgents/mac/jobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all jobs configured for Veeam Agent for Mac with the specified UID.
     *
     * @tags Backup Agent Jobs
     * @name GetMacBackupAgentJobsByAgent
     * @summary Get All Jobs for Veeam Agent for Mac
     * @request GET:/infrastructure/backupAgents/mac/{backupAgentUid}/jobs
     * @secure
     */
    getMacBackupAgentJobsByAgent: (
      backupAgentUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: MacBackupAgentJob[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupAgents/mac/${backupAgentUid}/jobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a Veeam Agent for Mac job with the specified UID.
     *
     * @tags Backup Agent Jobs
     * @name GetMacBackupAgentJob
     * @summary Get Job for Veeam Agent for Mac
     * @request GET:/infrastructure/backupAgents/mac/{backupAgentUid}/jobs/{backupAgentJobUid}
     * @secure
     */
    getMacBackupAgentJob: (
      backupAgentUid: string,
      backupAgentJobUid: string,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: MacBackupAgentJob; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/backupAgents/mac/${backupAgentUid}/jobs/${backupAgentJobUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a Veeam Agent for Mac job with the specified UID. Returns a positive response if the task is added to the internal queue and not when the task is executed.
     *
     * @tags Backup Agent Jobs
     * @name DeleteMacBackupAgentJob
     * @summary Delete Job for Veeam Agent for Mac
     * @request DELETE:/infrastructure/backupAgents/mac/{backupAgentUid}/jobs/{backupAgentJobUid}
     * @secure
     */
    deleteMacBackupAgentJob: (
      backupAgentUid: string,
      backupAgentJobUid: string,
      query: { removeRestorePoints: boolean },
      params: RequestParams = {},
    ) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/infrastructure/backupAgents/mac/${backupAgentUid}/jobs/${backupAgentJobUid}`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Starts a Veeam Agent for Mac job with the specified UID. Returns a positive response if the task is added to the internal queue and not when the task is executed.
     *
     * @tags Backup Agent Jobs
     * @name StartMacBackupAgentJob
     * @summary Start Job for Veeam Agent for Mac
     * @request POST:/infrastructure/backupAgents/mac/{backupAgentUid}/jobs/{backupAgentJobUid}/start
     * @secure
     */
    startMacBackupAgentJob: (backupAgentUid: string, backupAgentJobUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/infrastructure/backupAgents/mac/${backupAgentUid}/jobs/${backupAgentJobUid}/start`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Stops a Veeam Agent for Mac job with the specified UID. Returns a positive response if the task is added to the internal queue and not when the task is executed.
     *
     * @tags Backup Agent Jobs
     * @name StopMacBackupAgentJob
     * @summary Stop Job for Veeam Agent for Mac
     * @request POST:/infrastructure/backupAgents/mac/{backupAgentUid}/jobs/{backupAgentJobUid}/stop
     * @secure
     */
    stopMacBackupAgentJob: (backupAgentUid: string, backupAgentJobUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/infrastructure/backupAgents/mac/${backupAgentUid}/jobs/${backupAgentJobUid}/stop`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all cloud agents installed on sites.
     *
     * @tags Cloud Connect
     * @name GetSites
     * @summary Get All Sites
     * @request GET:/infrastructure/sites
     * @secure
     */
    getSites: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: CloudAgent[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/sites`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a cloud agent installed on a site with the specified UID.
     *
     * @tags Cloud Connect
     * @name GetSite
     * @summary Get Site
     * @request GET:/infrastructure/sites/{siteUid}
     * @secure
     */
    getSite: (siteUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: CloudAgent; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/sites/${siteUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all hardware plans.
     *
     * @tags Cloud Connect
     * @name GetBackupHardwarePlans
     * @summary Get All Hardware Plans
     * @request GET:/infrastructure/sites/hardwarePlans
     * @secure
     */
    getBackupHardwarePlans: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupHardwarePlan[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/sites/hardwarePlans`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all hardware plans configured on a site with the specified UID.
     *
     * @tags Cloud Connect
     * @name GetBackupHardwarePlansBySite
     * @summary Get All Hardware Plans Configured on Site
     * @request GET:/infrastructure/sites/{siteUid}/hardwarePlans
     * @secure
     */
    getBackupHardwarePlansBySite: (
      siteUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupHardwarePlan[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/sites/${siteUid}/hardwarePlans`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a hardware plan with the specified UID.
     *
     * @tags Cloud Connect
     * @name GetBackupHardwarePlan
     * @summary Get Hardware Plan
     * @request GET:/infrastructure/sites/hardwarePlans/{instanceUid}
     * @secure
     */
    getBackupHardwarePlan: (instanceUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: BackupHardwarePlan; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/sites/hardwarePlans/${instanceUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all storage entities in all hardware plans.
     *
     * @tags Cloud Connect
     * @name GetBackupHardwarePlansStorages
     * @summary Get All Hardware Plan Storage Entities
     * @request GET:/infrastructure/sites/hardwarePlans/storages
     * @secure
     */
    getBackupHardwarePlansStorages: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupHardwarePlanStorage[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/sites/hardwarePlans/storages`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all storage entities in a hardware plan with the specified UID.
     *
     * @tags Cloud Connect
     * @name GetBackupHardwarePlanStorages
     * @summary Get All Hardware Plan Storage Entities
     * @request GET:/infrastructure/sites/hardwarePlans/{instanceUid}/storages
     * @secure
     */
    getBackupHardwarePlanStorages: (
      instanceUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: BackupHardwarePlanStorage[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/sites/hardwarePlans/${instanceUid}/storages`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all cloud gateway pools.
     *
     * @tags Cloud Connect
     * @name GetCloudGatewayPools
     * @summary Get All Cloud Gateway Pools
     * @request GET:/infrastructure/sites/cloudgatewaypools
     * @secure
     */
    getCloudGatewayPools: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: CloudGatewayPool[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/sites/cloudgatewaypools`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all cloud gateway pools configured for a site with the specified UID.
     *
     * @tags Cloud Connect
     * @name GetCloudGatewayPoolsBySite
     * @summary Get All Cloud Gateway Pools Configured for Site
     * @request GET:/infrastructure/sites/{siteUid}/cloudgatewaypools
     * @secure
     */
    getCloudGatewayPoolsBySite: (
      siteUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: CloudGatewayPool[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/sites/${siteUid}/cloudgatewaypools`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a cloud gateway pool with the specified UID.
     *
     * @tags Cloud Connect
     * @name GetCloudGatewayPool
     * @summary Get Cloud Gateway Pool
     * @request GET:/infrastructure/sites/cloudgatewaypools/{instanceUid}
     * @secure
     */
    getCloudGatewayPool: (instanceUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: CloudGatewayPool; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/sites/cloudgatewaypools/${instanceUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all cloud gateways included in a pool with the specified UID.
     *
     * @tags Cloud Connect
     * @name GetCloudGatewaysByPool
     * @summary Get All Cloud Gateways in Pool
     * @request GET:/infrastructure/sites/cloudgatewaypools/{instanceUid}/cloudgateways
     * @secure
     */
    getCloudGatewaysByPool: (
      instanceUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: CloudGateway[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/sites/cloudgatewaypools/${instanceUid}/cloudgateways`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all cloud gateways.
     *
     * @tags Cloud Connect
     * @name GetCloudGateways
     * @summary Get All Cloud Gateways
     * @request GET:/infrastructure/sites/cloudgateways
     * @secure
     */
    getCloudGateways: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: CloudGateway[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/sites/cloudgateways`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all cloud gateways configured for a site with the specified UID.
     *
     * @tags Cloud Connect
     * @name GetCloudGatewaysBySite
     * @summary Get All Cloud Gateways Configured for Site
     * @request GET:/infrastructure/sites/{siteUid}/cloudgateways
     * @secure
     */
    getCloudGatewaysBySite: (
      siteUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: CloudGateway[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/sites/${siteUid}/cloudgateways`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a cloud gateway with the specified UID.
     *
     * @tags Cloud Connect
     * @name GetCloudGateway
     * @summary Get Cloud Gateway
     * @request GET:/infrastructure/sites/cloudgateways/{gatewayUid}
     * @secure
     */
    getCloudGateway: (gatewayUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: CloudGateway; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/sites/cloudgateways/${gatewayUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all WAN accelerators.
     *
     * @tags Cloud Connect
     * @name GetSiteWanAcceleratorResources
     * @summary Get All Wan Accelerators
     * @request GET:/infrastructure/sites/wanAccelerators
     * @secure
     */
    getSiteWanAcceleratorResources: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: SiteWanAcceleratorResource[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/sites/wanAccelerators`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all WAN accelerators configured for a site with the specified UID.
     *
     * @tags Cloud Connect
     * @name GetSiteWanAcceleratorResourcesBySite
     * @summary Get All Wan Accelerators Configured for Site
     * @request GET:/infrastructure/sites/{siteUid}/wanAccelerators
     * @secure
     */
    getSiteWanAcceleratorResourcesBySite: (
      siteUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: SiteWanAcceleratorResource[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/sites/${siteUid}/wanAccelerators`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a WAN accelerator with the specified UID.
     *
     * @tags Cloud Connect
     * @name GetSiteWanAcceleratorResource
     * @summary Get Wan Accelerator
     * @request GET:/infrastructure/sites/wanAccelerators/{wanAcceleratorUid}
     * @secure
     */
    getSiteWanAcceleratorResource: (
      wanAcceleratorUid: string,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: SiteWanAcceleratorResource; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/sites/wanAccelerators/${wanAcceleratorUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all tenants.
     *
     * @tags Cloud Connect
     * @name GetTenants
     * @summary Get All Tenants
     * @request GET:/infrastructure/sites/tenants
     * @secure
     */
    getTenants: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: CloudTenant[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/sites/tenants`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of tenants registered on a site with the specified UID.
     *
     * @tags Cloud Connect
     * @name GetTenantsBySite
     * @summary Get All Tenants Registered on Site
     * @request GET:/infrastructure/sites/{siteUid}/tenants
     * @secure
     */
    getTenantsBySite: (
      siteUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: CloudTenant[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/sites/${siteUid}/tenants`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a tenant with the specified UID.
     *
     * @tags Cloud Connect
     * @name GetTenant
     * @summary Get Tenant
     * @request GET:/infrastructure/sites/tenants/{tenantUid}
     * @secure
     */
    getTenant: (tenantUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: CloudTenant; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/sites/tenants/${tenantUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all subtenants.
     *
     * @tags Cloud Connect
     * @name GetSubTenants
     * @summary Get All Subtenants
     * @request GET:/infrastructure/sites/tenants/subtenants
     * @secure
     */
    getSubTenants: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: CloudSubTenant[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/sites/tenants/subtenants`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all subtenants provided with resources of a site with the specified UID.
     *
     * @tags Cloud Connect
     * @name GetSubTenantsBySite
     * @summary Get All Subtenants Registered on Site
     * @request GET:/infrastructure/sites/{siteUid}/tenants/subtenants
     * @secure
     */
    getSubTenantsBySite: (
      siteUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: CloudSubTenant[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/sites/${siteUid}/tenants/subtenants`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all subtenants registered by a tenant with the specified UID.
     *
     * @tags Cloud Connect
     * @name GetSubTenantsByTenant
     * @summary Get All Subtenants Registered by Tenant
     * @request GET:/infrastructure/sites/tenants/{tenantUid}/subtenants
     * @secure
     */
    getSubTenantsByTenant: (
      tenantUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: CloudSubTenant[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/sites/tenants/${tenantUid}/subtenants`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a subtenant with the specified UID.
     *
     * @tags Cloud Connect
     * @name GetSubTenant
     * @summary Get Subtenant
     * @request GET:/infrastructure/sites/tenants/subtenants/{subtenantUid}
     * @secure
     */
    getSubTenant: (subtenantUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: CloudSubTenant; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/sites/tenants/subtenants/${subtenantUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all cloud gateway pools assigned to a tenant with the specified UID.
     *
     * @tags Cloud Connect
     * @name GetCloudGatewayPoolsByTenant
     * @summary Get All Cloud Gateway Pools Assigned to Tenant
     * @request GET:/infrastructure/sites/tenants/{tenantUid}/cloudGatewayPools
     * @secure
     */
    getCloudGatewayPoolsByTenant: (
      tenantUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: CloudGatewayPool[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/sites/tenants/${tenantUid}/cloudGatewayPools`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of Veeam products installed in all tenant infrastructures.
     *
     * @tags Cloud Connect
     * @name GetCloudTenantsProducts
     * @summary Get Tenant Veeam Products
     * @request GET:/infrastructure/sites/tenants/products
     * @secure
     */
    getCloudTenantsProducts: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CloudTenantProductVersionInfo[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/sites/tenants/products`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of Veeam products installed in the infrastructures of all tenants managed by a Veeam Cloud Connect server with the specified UID.
     *
     * @tags Cloud Connect
     * @name GetCloudTenantsProductsBySite
     * @summary Get Tenant Veeam Products on Site
     * @request GET:/infrastructure/sites/{siteUid}/tenants/products
     * @secure
     */
    getCloudTenantsProductsBySite: (
      siteUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: CloudTenantProductVersionInfo[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/sites/${siteUid}/tenants/products`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all VMware Cloud Director servers.
     *
     * @tags Cloud Connect
     * @name GetVcdServers
     * @summary Get All VMware Cloud Director Servers
     * @request GET:/infrastructure/sites/vcdServers
     * @secure
     */
    getVcdServers: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: VcdServer[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/sites/vcdServers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all VMware Cloud Director servers managed by a site with the specified UID.
     *
     * @tags Cloud Connect
     * @name GetVcdServersBySite
     * @summary Get All VMware Cloud Director Servers Managed by Site
     * @request GET:/infrastructure/sites/{siteUid}/vcdServers
     * @secure
     */
    getVcdServersBySite: (
      siteUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: VcdServer[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/sites/${siteUid}/vcdServers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a VMware Cloud Director server with the specified UID.
     *
     * @tags Cloud Connect
     * @name GetVcdServer
     * @summary Get VMware Cloud Director Server
     * @request GET:/infrastructure/sites/{siteUid}/vcdServers/{vcdServerUid}
     * @secure
     */
    getVcdServer: (vcdServerUid: string, siteUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: VcdServer; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/sites/${siteUid}/vcdServers/${vcdServerUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all VMware Cloud Director organizations.
     *
     * @tags Cloud Connect
     * @name GetVcdOrganizations
     * @summary Get All VMware Cloud Director Organizations
     * @request GET:/infrastructure/sites/vcdServers/vcdOrganizations
     * @secure
     */
    getVcdOrganizations: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: VcdOrganization[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/sites/vcdServers/vcdOrganizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all VMware Cloud Director organizations on a site with the specified UID.
     *
     * @tags Cloud Connect
     * @name GetVcdOrganizationsBySite
     * @summary Get All VMware Cloud Director Organizations on Site
     * @request GET:/infrastructure/sites/{siteUid}/vcdServers/vcdOrganizations
     * @secure
     */
    getVcdOrganizationsBySite: (
      siteUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: VcdOrganization[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/sites/${siteUid}/vcdServers/vcdOrganizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all VMware Cloud Director organizations configured on a VMware Cloud Director server with the specified UID.
     *
     * @tags Cloud Connect
     * @name GetVcdOrganizationsByVcd
     * @summary Get All VMware Cloud Director Organizations Configured on VMware Cloud Director Server
     * @request GET:/infrastructure/sites/{siteUid}/vcdServers/{vcdServerUid}/vcdOrganizations
     * @secure
     */
    getVcdOrganizationsByVcd: (
      vcdServerUid: string,
      siteUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: VcdOrganization[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/sites/${siteUid}/vcdServers/${vcdServerUid}/vcdOrganizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a VMware Cloud Director organization with the specified UID.
     *
     * @tags Cloud Connect
     * @name GetVcdOrganization
     * @summary Get VMware Cloud Director Organization
     * @request GET:/infrastructure/sites/{siteUid}/vcdServers/vcdOrganizations/{vcdOrganizationUid}
     * @secure
     */
    getVcdOrganization: (
      vcdOrganizationUid: string,
      siteUid: string,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: VcdOrganization; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/sites/${siteUid}/vcdServers/vcdOrganizations/${vcdOrganizationUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all organization VDCs.
     *
     * @tags Cloud Connect
     * @name GetVcdOrganizationVdCs
     * @summary Get All Organization VDCs
     * @request GET:/infrastructure/sites/vcdServers/vcdOrganizations/vDCs
     * @secure
     */
    getVcdOrganizationVdCs: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: VcdOrganizationDataCenter[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/sites/vcdServers/vcdOrganizations/vDCs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all organization VDCs on a site with the specified UID.
     *
     * @tags Cloud Connect
     * @name GetVcdOrganizationVdCsBySite
     * @summary Get All Organization VDCs on Site
     * @request GET:/infrastructure/sites/{siteUid}/vcdServers/vcdOrganizations/vDCs
     * @secure
     */
    getVcdOrganizationVdCsBySite: (
      siteUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: VcdOrganizationDataCenter[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/sites/${siteUid}/vcdServers/vcdOrganizations/vDCs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all VDCs that provide resources to a VMware Cloud Director organization with the specified UID.
     *
     * @tags Cloud Connect
     * @name GetVcdOrganizationVdCsByOrganization
     * @summary Get All VDCs Providing Resources to VMware Cloud Director Organization
     * @request GET:/infrastructure/sites/{siteUid}/vcdServers/vcdOrganizations/{vcdOrganizationUid}/vDCs
     * @secure
     */
    getVcdOrganizationVdCsByOrganization: (
      vcdOrganizationUid: string,
      siteUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: VcdOrganizationDataCenter[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/sites/${siteUid}/vcdServers/vcdOrganizations/${vcdOrganizationUid}/vDCs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of an organization VDC with the specified UID.
     *
     * @tags Cloud Connect
     * @name GetVcdOrganizationVdc
     * @summary Get Organization VDC
     * @request GET:/infrastructure/sites/{siteUid}/vcdServers/vcdOrganizations/vDCs/{vdcUid}
     * @secure
     */
    getVcdOrganizationVdc: (vdcUid: string, siteUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<
        { meta?: ResponseMetadata; data?: VcdOrganizationDataCenter; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/sites/${siteUid}/vcdServers/vcdOrganizations/vDCs/${vdcUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all VMware Cloud Director organization users.
     *
     * @tags Cloud Connect
     * @name GetVcdOrganizationUsers
     * @summary Get All Users of VMware Cloud Director Organization
     * @request GET:/infrastructure/sites/vcdServers/vcdOrganizations/users
     * @secure
     */
    getVcdOrganizationUsers: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: VcdOrganizationUser[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/sites/vcdServers/vcdOrganizations/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all VMware Cloud Director organization users on a site with the specified UID.
     *
     * @tags Cloud Connect
     * @name GetVcdOrganizationUsersBySite
     * @summary Get All Users of VMware Cloud Director Organization on Site
     * @request GET:/infrastructure/sites/{siteUid}/vcdServers/vcdOrganizations/users
     * @secure
     */
    getVcdOrganizationUsersBySite: (
      siteUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: VcdOrganizationUser[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/sites/${siteUid}/vcdServers/vcdOrganizations/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all users of a VMware Cloud Director organization with the specified UID.
     *
     * @tags Cloud Connect
     * @name GetVcdOrganizationUsersByOrganization
     * @summary Get Users of VMware Cloud Director Organization
     * @request GET:/infrastructure/sites/{siteUid}/vcdServers/vcdOrganizations/{vcdOrganizationUid}/users
     * @secure
     */
    getVcdOrganizationUsersByOrganization: (
      vcdOrganizationUid: string,
      siteUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: VcdOrganizationUser[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/sites/${siteUid}/vcdServers/vcdOrganizations/${vcdOrganizationUid}/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all Veeam Backup Enterprise Manager servers.
     *
     * @tags Enterprise Manager
     * @name GetEnterpriseManagers
     * @summary Get All Veeam Backup Enterprise Manager servers
     * @request GET:/infrastructure/enterpriseManagers
     * @secure
     */
    getEnterpriseManagers: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: EnterpriseManager[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/enterpriseManagers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a Veeam Backup Enterprise Manager server with the specified UID.
     *
     * @tags Enterprise Manager
     * @name GetEnterpriseManager
     * @summary Get Veeam Backup Enterprise Manager Server
     * @request GET:/infrastructure/enterpriseManagers/{enterpriseManagerUid}
     * @secure
     */
    getEnterpriseManager: (enterpriseManagerUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: EnterpriseManager; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/enterpriseManagers/${enterpriseManagerUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all Veeam Backup & Replication servers that are managed by a Veeam Backup Enterprise Manager server with specified UID.
     *
     * @tags Enterprise Manager
     * @name GetBackupServersByEnterpriseManager
     * @summary Get Backup Servers Managed by Veeam Backup Enterprise Manager Server
     * @request GET:/infrastructure/enterpriseManagers/{enterpriseManagerUid}/backupServers
     * @secure
     */
    getBackupServersByEnterpriseManager: (
      enterpriseManagerUid: string,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: EnterpriseManagerBackupServer[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/infrastructure/enterpriseManagers/${enterpriseManagerUid}/backupServers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all Veeam ONE servers connected to Veeam Service Provider Console.
     *
     * @tags Veeam ONE Server
     * @name GetVOneServers
     * @summary Get All Connected Veeam ONE Servers
     * @request GET:/infrastructure/voneServers
     * @secure
     */
    getVOneServers: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: VOneServer[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/voneServers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a connected Veeam ONE server with the specified UID.
     *
     * @tags Veeam ONE Server
     * @name GetVOneServer
     * @summary Get Connected Veeam ONE Server
     * @request GET:/infrastructure/voneServers/{vOneServerUid}
     * @secure
     */
    getVOneServer: (vOneServerUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: VOneServer; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/voneServers/${vOneServerUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Enforces data collection from a connected Veeam ONE server with the specified UID. >Returns a positive response when the collection task is added to the internal queue and not when the task is executed.
     *
     * @tags Veeam ONE Server
     * @name ForceCollectVOneServer
     * @summary Enforce Data Collection from Connected Veeam ONE Server
     * @request POST:/infrastructure/voneServers/{vOneServerUid}/collect
     * @secure
     */
    forceCollectVOneServer: (vOneServerUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/infrastructure/voneServers/${vOneServerUid}/collect`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all connected Veeam Backup for Microsoft 365 servers.
     *
     * @tags Veeam Backup for Microsoft 365 Server
     * @name GetVbm365Servers
     * @summary Get All Connected Veeam Backup fot Microsoft 365 Servers.
     * @request GET:/infrastructure/vbm365Servers
     * @secure
     */
    getVbm365Servers: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: Vbm365Server[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/vbm365Servers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a connected Veeam Backup for Microsoft 365 server with the specified UID.
     *
     * @tags Veeam Backup for Microsoft 365 Server
     * @name GetVbm365Server
     * @summary Get Connected Veeam Backup for Microsoft 365 Server
     * @request GET:/infrastructure/vbm365Servers/{vbm365ServerUid}
     * @secure
     */
    getVbm365Server: (vbm365ServerUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: Vbm365Server; errors?: ResponseError[] }, ErrorResponse>({
        path: `/infrastructure/vbm365Servers/{vbm365ServerUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Enforces data collection from a Veeam Backup for Microsoft 365 server with the specified UID. >Returns a positive response when the collection task is added to the internal queue and not when the task is executed.'
     *
     * @tags Veeam Backup for Microsoft 365 Server
     * @name ForceCollectVbm365Server
     * @summary Enforce Data Collection from Veeam Backup for Microsoft 365 Server
     * @request POST:/infrastructure/vbm365Servers/{vbm365ServerUid}/collect
     * @secure
     */
    forceCollectVbm365Server: (vbm365ServerUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/infrastructure/vbm365Servers/{vbm365ServerUid}/collect`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  deployment = {
    /**
     * @description Returns a resource representation of deployment task status.
     *
     * @tags Deployment
     * @name GetDeploymentLog
     * @summary Get Deployment Task Status
     * @request GET:/deployment/deploy/{deploymentTaskUid}/log/{managementAgentUid}
     * @secure
     */
    getDeploymentLog: (
      deploymentTaskUid: string,
      managementAgentUid: string,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: DeploymentLog; errors?: ResponseError[] }, ErrorResponse>({
        path: `/deployment/deploy/${deploymentTaskUid}/log/${managementAgentUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  protectedWorkloads = {
    /**
     * @description Returns a collection resource representation of all protected cloud VMs.
     *
     * @tags Protected Workloads
     * @name GetProtectedCloudVirtualMachines
     * @summary Get All Protected Cloud VMs
     * @request GET:/protectedWorkloads/cloudVirtualMachines
     * @secure
     */
    getProtectedCloudVirtualMachines: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ProtectedCloudVirtualMachine[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/protectedWorkloads/cloudVirtualMachines`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all backups of protected cloud VMs.
     *
     * @tags Protected Workloads
     * @name GetProtectedCloudVirtualMachinesBackups
     * @summary Get Backups of All Protected Cloud VMs
     * @request GET:/protectedWorkloads/cloudVirtualMachines/backups
     * @secure
     */
    getProtectedCloudVirtualMachinesBackups: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ProtectedCloudVirtualMachineBackup[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/protectedWorkloads/cloudVirtualMachines/backups`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all backups of a protected cloud VM with the specified UID.
     *
     * @tags Protected Workloads
     * @name GetProtectedCloudVirtualMachineBackupsByVm
     * @summary Get All Backups of Protected Cloud VM
     * @request GET:/protectedWorkloads/cloudVirtualMachines/{cloudVirtualMachineUid}/backups
     * @secure
     */
    getProtectedCloudVirtualMachineBackupsByVm: (
      cloudVirtualMachineUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ProtectedCloudVirtualMachineBackup[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/protectedWorkloads/cloudVirtualMachines/${cloudVirtualMachineUid}/backups`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all protected VMs.
     *
     * @tags Protected Workloads
     * @name GetProtectedVirtualMachines
     * @summary Get All Protected VMs
     * @request GET:/protectedWorkloads/virtualMachines
     * @secure
     */
    getProtectedVirtualMachines: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ProtectedVirtualMachine[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/protectedWorkloads/virtualMachines`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all backups of protected VMs.
     *
     * @tags Protected Workloads
     * @name GetProtectedVirtualMachineBackups
     * @summary Get Backups of All Protected VMs
     * @request GET:/protectedWorkloads/virtualMachines/backups
     * @secure
     */
    getProtectedVirtualMachineBackups: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ProtectedVirtualMachineBackup[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/protectedWorkloads/virtualMachines/backups`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all backups of a protected VM with the specified UID.
     *
     * @tags Protected Workloads
     * @name GetProtectedVirtualMachineBackupsByVm
     * @summary Get All Backups of Protected VM
     * @request GET:/protectedWorkloads/virtualMachines/{virtualMachineUid}/backups
     * @secure
     */
    getProtectedVirtualMachineBackupsByVm: (
      virtualMachineUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ProtectedVirtualMachineBackup[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/protectedWorkloads/virtualMachines/${virtualMachineUid}/backups`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of latest restore points created for VMs.
     *
     * @tags Protected Workloads
     * @name GetProtectedVirtualMachinesLatestRestorePoints
     * @summary Get All Latest Restore Points of Protected VMs
     * @request GET:/protectedWorkloads/virtualMachines/backupRestorePoints/latest
     * @secure
     */
    getProtectedVirtualMachinesLatestRestorePoints: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ProtectedVirtualMachineBackupRestorePoint[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/protectedWorkloads/virtualMachines/backupRestorePoints/latest`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of backup restore points created for a protected VM with the specified UID.
     *
     * @tags Protected Workloads
     * @name GetProtectedVirtualMachineBackupRestorePoints
     * @summary Get All Backup Restore Points of Protected VM
     * @request GET:/protectedWorkloads/virtualMachines/{virtualMachineUid}/backupRestorePoints
     * @secure
     */
    getProtectedVirtualMachineBackupRestorePoints: (
      virtualMachineUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ProtectedVirtualMachineBackupRestorePoint[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/protectedWorkloads/virtualMachines/${virtualMachineUid}/backupRestorePoints`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of replication restore points created for a protected VM with the specified UID.
     *
     * @tags Protected Workloads
     * @name GetProtectedVirtualMachineReplicaRestorePoints
     * @summary Get All Replication Restore Points of Protected VM
     * @request GET:/protectedWorkloads/virtualMachines/{virtualMachineUid}/replicaRestorePoints
     * @secure
     */
    getProtectedVirtualMachineReplicaRestorePoints: (
      virtualMachineUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ProtectedVirtualMachineReplicaRestorePoint[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/protectedWorkloads/virtualMachines/${virtualMachineUid}/replicaRestorePoints`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all protected computers managed by Veeam Service Provider Console.
     *
     * @tags Protected Workloads
     * @name GetProtectedComputersManagedByConsole
     * @summary Get All Protected Computers Managed by Veeam Service Provider Console
     * @request GET:/protectedWorkloads/computersManagedByConsole
     * @secure
     */
    getProtectedComputersManagedByConsole: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ProtectedComputerManagedByConsole[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/protectedWorkloads/computersManagedByConsole`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all jobs that protect computers managed by Veeam Service Provider Console.
     *
     * @tags Protected Workloads
     * @name GetProtectedComputersManagedByConsoleJobs
     * @summary Get Jobs Protecting All Computers Managed by Veeam Service Provider Console
     * @request GET:/protectedWorkloads/computersManagedByConsole/jobs
     * @secure
     */
    getProtectedComputersManagedByConsoleJobs: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ProtectedComputerManagedByConsoleJob[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/protectedWorkloads/computersManagedByConsole/jobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of jobs that protect a computer managed by Veeam Service Provider Console with the specified UID of Veeam backup agent installed on the computer.
     *
     * @tags Protected Workloads
     * @name GetProtectedComputersManagedByConsoleJobsByBackupAgent
     * @summary Get All Jobs Protecting Computer Managed by Veeam Service Provider Console
     * @request GET:/protectedWorkloads/computersManagedByConsole/{backupAgentUid}/jobs
     * @secure
     */
    getProtectedComputersManagedByConsoleJobsByBackupAgent: (
      backupAgentUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ProtectedComputerManagedByConsoleJob[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/protectedWorkloads/computersManagedByConsole/${backupAgentUid}/jobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all restore points of computers managed by Veeam Service Provider Console.
     *
     * @tags Protected Workloads
     * @name GetProtectedComputersManagedByConsoleRestorePoints
     * @summary Get All Restore Points of Protected Computers Managed by Veeam Service Provider Console
     * @request GET:/protectedWorkloads/computersManagedByConsole/restorePoints
     * @secure
     */
    getProtectedComputersManagedByConsoleRestorePoints: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ProtectedComputerManagedByConsoleRestorePoint[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/protectedWorkloads/computersManagedByConsole/restorePoints`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of latest restore points of computers managed by Veeam Service Provider Console.
     *
     * @tags Protected Workloads
     * @name GetProtectedComputersManagedByConsoleLatestRestorePoints
     * @summary Get Latest Restore Points of All Protected Computers Managed by Veeam Service Provider Console
     * @request GET:/protectedWorkloads/computersManagedByConsole/restorePoints/latest
     * @secure
     */
    getProtectedComputersManagedByConsoleLatestRestorePoints: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ProtectedComputerManagedByConsoleRestorePoint[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/protectedWorkloads/computersManagedByConsole/restorePoints/latest`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of restore points created for a protected computer managed by Veeam Service Provider Console with the specified UID of Veeam backup agent installed on the computer.
     *
     * @tags Protected Workloads
     * @name GetProtectedComputerManagedByConsoleRestorePoints
     * @summary Get All Restore Points of Protected Computer Managed by Veeam Service Provider Console
     * @request GET:/protectedWorkloads/computersManagedByConsole/{backupAgentUid}/restorePoints
     * @secure
     */
    getProtectedComputerManagedByConsoleRestorePoints: (
      backupAgentUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ProtectedComputerManagedByConsoleRestorePoint[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/protectedWorkloads/computersManagedByConsole/${backupAgentUid}/restorePoints`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all protected computers managed by Veeam Backup & Replication.
     *
     * @tags Protected Workloads
     * @name GetProtectedComputersManagedByBackupServer
     * @summary Get All Protected Computers Managed By Backup Server
     * @request GET:/protectedWorkloads/computersManagedByBackupServer
     * @secure
     */
    getProtectedComputersManagedByBackupServer: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ProtectedComputerManagedByBackupServer[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/protectedWorkloads/computersManagedByBackupServer`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all restore points created for computers managed by Veeam Backup & Replication.
     *
     * @tags Protected Workloads
     * @name GetProtectedComputersManagedByBackupServerRestorePoints
     * @summary Get All Restore Points of Protected Computers Managed by Backup Server
     * @request GET:/protectedWorkloads/computersManagedByBackupServer/restorePoints
     * @secure
     */
    getProtectedComputersManagedByBackupServerRestorePoints: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          meta?: ResponseMetadata;
          data?: ProtectedComputerManagedByBackupServerRestorePoint[];
          errors?: ResponseError[];
        },
        ErrorResponse
      >({
        path: `/protectedWorkloads/computersManagedByBackupServer/restorePoints`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all backups of computers managed by Veeam Backup & Replication.
     *
     * @tags Protected Workloads
     * @name GetProtectedComputersManagedByBackupServerBackups
     * @summary Get Backups of All Protected Computers Managed by Backup Server
     * @request GET:/protectedWorkloads/computersManagedByBackupServer/backups
     * @secure
     */
    getProtectedComputersManagedByBackupServerBackups: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ProtectedComputerManagedByBackupServerBackup[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/protectedWorkloads/computersManagedByBackupServer/backups`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all backups of a computer managed by Veeam Backup & Replication with the specified UID of Veeam backup agent installed on the computer.
     *
     * @tags Protected Workloads
     * @name GetProtectedComputersManagedByBackupServerBackupsByBackupAgent
     * @summary Get All Backups of Protected Computer Managed by Backup Server
     * @request GET:/protectedWorkloads/computersManagedByBackupServer/{backupAgentUid}/backups
     * @secure
     */
    getProtectedComputersManagedByBackupServerBackupsByBackupAgent: (
      backupAgentUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { meta?: ResponseMetadata; data?: ProtectedComputerManagedByBackupServerBackup[]; errors?: ResponseError[] },
        ErrorResponse
      >({
        path: `/protectedWorkloads/computersManagedByBackupServer/${backupAgentUid}/backups`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of the latest restore points of computers managed by Veeam Backup & Replication.
     *
     * @tags Protected Workloads
     * @name GetProtectedComputersManagedByBackupServerLatestRestorePoints
     * @summary Get Latest Restore Points of All Protected Computers Managed by Backup Server
     * @request GET:/protectedWorkloads/computersManagedByBackupServer/restorePoints/latest
     * @secure
     */
    getProtectedComputersManagedByBackupServerLatestRestorePoints: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          meta?: ResponseMetadata;
          data?: ProtectedComputerManagedByBackupServerRestorePoint[];
          errors?: ResponseError[];
        },
        ErrorResponse
      >({
        path: `/protectedWorkloads/computersManagedByBackupServer/restorePoints/latest`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all restore points created for a protected computer managed by Veeam Backup & Replication with the specified UID of Veeam backup agent installed on the computer.
     *
     * @tags Protected Workloads
     * @name GetProtectedComputerManagedByBackupServerRestorePoints
     * @summary Get Latest Restore Points of Protected Computer Managed by Backup Server
     * @request GET:/protectedWorkloads/computersManagedByBackupServer/{backupAgentUid}/restorePoints
     * @secure
     */
    getProtectedComputerManagedByBackupServerRestorePoints: (
      backupAgentUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          meta?: ResponseMetadata;
          data?: ProtectedComputerManagedByBackupServerRestorePoint[];
          errors?: ResponseError[];
        },
        ErrorResponse
      >({
        path: `/protectedWorkloads/computersManagedByBackupServer/${backupAgentUid}/restorePoints`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all protected file servers.
     *
     * @tags Protected Workloads
     * @name GetProtectedFileServers
     * @summary Get All Protected File Servers
     * @request GET:/protectedWorkloads/fileServers
     * @secure
     */
    getProtectedFileServers: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: ProtectedFileServer[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/protectedWorkloads/fileServers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  alarms = {
    /**
     * @description Returns a collection resource representation of all Veeam Service Provider Console alarm templates.
     *
     * @tags Alarms
     * @name GetAlarms
     * @summary Get All Alarm Templates
     * @request GET:/alarms/templates
     * @secure
     */
    getAlarms: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: Alarm[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/alarms/templates`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of an alarm template with the specified UID.
     *
     * @tags Alarms
     * @name GetAlarm
     * @summary Get Alarm Template
     * @request GET:/alarms/templates/{alarmUid}
     * @secure
     */
    getAlarm: (alarmUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: Alarm; errors?: ResponseError[] }, ErrorResponse>({
        path: `/alarms/templates/${alarmUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes an alarm template with the specified UID.
     *
     * @tags Alarms
     * @name DeleteAlarm
     * @summary Delete Alarm Template
     * @request DELETE:/alarms/templates/{alarmUid}
     * @secure
     */
    deleteAlarm: (alarmUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/alarms/templates/${alarmUid}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a clone of an alarm template with the specified UID.
     *
     * @tags Alarms
     * @name CloneAlarm
     * @summary Clone Alarm Template
     * @request POST:/alarms/templates/{alarmUid}/clone
     * @secure
     */
    cloneAlarm: (alarmUid: string, query?: { cloneName?: string; select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: Alarm; errors?: ResponseError[] }, ErrorResponse>({
        path: `/alarms/templates/${alarmUid}/clone`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all status changes of a triggered alarm with the specified template UID.
     *
     * @tags Alarms
     * @name GetActiveAlarmsByAlarm
     * @summary Get Alarm Status Changes
     * @request GET:/alarms/templates/{alarmUid}/events
     * @secure
     */
    getActiveAlarmsByAlarm: (
      alarmUid: string,
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: ActiveAlarm[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/alarms/templates/${alarmUid}/events`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns collection resource representation of all Veeam Service Provider Console triggered alarms.
     *
     * @tags Alarms
     * @name GetActiveAlarms
     * @summary Get All Triggered Alarms
     * @request GET:/alarms/active
     * @secure
     */
    getActiveAlarms: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: ActiveAlarm[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/alarms/active`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a triggered alarm with the specified UID.
     *
     * @tags Alarms
     * @name GetActiveAlarm
     * @summary Get Triggered Alarm
     * @request GET:/alarms/active/{activeAlarmUid}
     * @secure
     */
    getActiveAlarm: (activeAlarmUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: ActiveAlarm; errors?: ResponseError[] }, ErrorResponse>({
        path: `/alarms/active/${activeAlarmUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a triggered alarm with the specified UID.
     *
     * @tags Alarms
     * @name DeleteActiveAlarm
     * @summary Delete Triggered Alarm
     * @request DELETE:/alarms/active/{activeAlarmUid}
     * @secure
     */
    deleteActiveAlarm: (activeAlarmUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/alarms/active/${activeAlarmUid}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Resolves a triggered alarm with the specified UID.
     *
     * @tags Alarms
     * @name ResolveActiveAlarm
     * @summary Resolve Triggered Alarm
     * @request POST:/alarms/active/{activeAlarmUid}/resolve
     * @secure
     */
    resolveActiveAlarm: (
      activeAlarmUid: string,
      query: { comment: string; resolveOnClients: boolean },
      params: RequestParams = {},
    ) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/alarms/active/${activeAlarmUid}/resolve`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Assigns the Acknowledged status to a triggered alarm with the specified UID.
     *
     * @tags Alarms
     * @name AcknowledgeActiveAlarm
     * @summary Acknowledge Triggered Alarm
     * @request POST:/alarms/active/{activeAlarmUid}/acknowledge
     * @secure
     */
    acknowledgeActiveAlarm: (
      activeAlarmUid: string,
      query: { comment: string; resolveOnClients: boolean },
      params: RequestParams = {},
    ) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/alarms/active/${activeAlarmUid}/acknowledge`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  misc = {
    /**
     * @description Returns a collection resource representation of all currencies.
     *
     * @tags Misc
     * @name GetCurrencies
     * @summary Get All Currencies
     * @request GET:/misc/currencies
     * @secure
     */
    getCurrencies: (query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: Currency[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/misc/currencies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all countries.
     *
     * @tags Misc
     * @name GetCountries
     * @summary Get All Countries
     * @request GET:/misc/countries
     * @secure
     */
    getCountries: (query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: Country[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/misc/countries`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all USA states.
     *
     * @tags Misc
     * @name GetUsaStates
     * @summary Get All USA States
     * @request GET:/misc/usaStates
     * @secure
     */
    getUsaStates: (query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: UsaState[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/misc/usaStates`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  pulse = {
    /**
     * @description Returns a resource representation of VCSP Pulse plugin configuration.
     *
     * @tags Pulse
     * @name GetPulseConfiguration
     * @summary Get VCSP Pulse Configuration
     * @request GET:/pulse
     * @secure
     */
    getPulseConfiguration: (query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: PulseConfiguration; errors?: ResponseError[] }, ErrorResponse>({
        path: `/pulse`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies VCSP Pulse plugin configuration.
     *
     * @tags Pulse
     * @name PatchPulseConfiguration
     * @summary Modify VCSP Pulse Configuration
     * @request PATCH:/pulse
     * @secure
     */
    patchPulseConfiguration: (body: JsonPatches, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: PulseConfiguration; errors?: ResponseError[] }, ErrorResponse>({
        path: `/pulse`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Initiates synchronization with the VCSP Pulse portal.
     *
     * @tags Pulse
     * @name SyncPulseData
     * @summary Synchronize with VCSP Pulse Portal
     * @request POST:/pulse/sync
     * @secure
     */
    syncPulseData: (params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/pulse/sync`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all rental agreement contracts.
     *
     * @tags Pulse
     * @name GetPulseLicenseContracts
     * @summary Get All Rental Agreement Contracts
     * @request GET:/pulse/contracts
     * @secure
     */
    getPulseLicenseContracts: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: PulseLicenseContract[]; errors?: ResponseError[] }, ErrorResponse>(
        {
          path: `/pulse/contracts`,
          method: "GET",
          query: query,
          secure: true,
          format: "json",
          ...params,
        },
      ),

    /**
     * @description Returns a collection resource representation of all Veeam products managed in VCSP Pulse.
     *
     * @tags Pulse
     * @name GetPulseLicenseProducts
     * @summary Get Veeam Products Available in VCSP Pulse
     * @request GET:/pulse/products
     * @secure
     */
    getPulseLicenseProducts: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: PulseLicenseProduct[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/pulse/products`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Rerurns a collection resource representation of all licenses managed in VCSP Pulse.
     *
     * @tags Pulse
     * @name GetPulseLicenses
     * @summary Get All Licenses Managed in VCSP Pulse
     * @request GET:/pulse/licenses
     * @secure
     */
    getPulseLicenses: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: PulseLicense[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/pulse/licenses`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Adds a new license configuration with the specified parameters to VCSP Pulse.
     *
     * @tags Pulse
     * @name CreatePulseLicense
     * @summary Add License to VCSP Pulse
     * @request POST:/pulse/licenses
     * @secure
     */
    createPulseLicense: (body: PulseLicenseInput, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: PulseLicense; errors?: ResponseError[] }, ErrorResponse>({
        path: `/pulse/licenses`,
        method: "POST",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Rerurns a resource representation of a license managed in VCSP Pulse with the specified UID.
     *
     * @tags Pulse
     * @name GetPulseLicense
     * @summary Get License Managed in VCSP Pulse
     * @request GET:/pulse/licenses/{licenseUid}
     * @secure
     */
    getPulseLicense: (licenseUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: PulseLicense; errors?: ResponseError[] }, ErrorResponse>({
        path: `/pulse/licenses/${licenseUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a license managed in VCSP Pulse with the specified UID.
     *
     * @tags Pulse
     * @name PatchPulseLicense
     * @summary Modify License Managed in VCSP Pulse
     * @request PATCH:/pulse/licenses/{licenseUid}
     * @secure
     */
    patchPulseLicense: (
      licenseUid: string,
      body: JsonPatches,
      query?: { select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: PulseLicense; errors?: ResponseError[] }, ErrorResponse>({
        path: `/pulse/licenses/${licenseUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a license managed in VCSP Pulse with the specified UID.
     *
     * @tags Pulse
     * @name DeletePulseLicense
     * @summary Delete License Managed in VCSP Pulse.
     * @request DELETE:/pulse/licenses/{licenseUid}
     * @secure
     */
    deletePulseLicense: (licenseUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/pulse/licenses/${licenseUid}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a copy of a license managed in VCSP Pulse with the specified UID.
     *
     * @tags Pulse
     * @name CopyPulseLicense
     * @summary Copy License Managed in VCSP Pulse
     * @request POST:/pulse/licenses/{licenseUid}/copy
     * @secure
     */
    copyPulseLicense: (licenseUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: PulseLicense; errors?: ResponseError[] }, ErrorResponse>({
        path: `/pulse/licenses/${licenseUid}/copy`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Revokes a license managed in VCSP Pulse with the specified UID.
     *
     * @tags Pulse
     * @name RevokePulseLicense
     * @summary Revoke License Managed in VCSP Pulse
     * @request POST:/pulse/licenses/{licenseUid}/revoke
     * @secure
     */
    revokePulseLicense: (licenseUid: string, params: RequestParams = {}) =>
      this.request<EmptyResponse, ErrorResponse>({
        path: `/pulse/licenses/${licenseUid}/revoke`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Downloads a license managed in VCSP Pulse with the specified UID.
     *
     * @tags Pulse
     * @name DownloadPulseLicense
     * @summary Download License Managed in VCSP Pulse
     * @request POST:/pulse/licenses/{licenseUid}/download
     * @secure
     */
    downloadPulseLicense: (licenseUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: string; errors?: ResponseError[] }, ErrorResponse>({
        path: `/pulse/licenses/${licenseUid}/download`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a collection resource representation of all VCSP Pulse tenants.
     *
     * @tags Pulse
     * @name GetPulseTenants
     * @summary Get All VCSP Pulse Tenants
     * @request GET:/pulse/tenants
     * @secure
     */
    getPulseTenants: (
      query?: { filter?: string; sort?: string; limit?: number; offset?: number; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: PulseTenant[]; errors?: ResponseError[] }, ErrorResponse>({
        path: `/pulse/tenants`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a VCSP Pulse tenant based on a specific company.
     *
     * @tags Pulse
     * @name CreatePulseTenantByCompany
     * @summary Create VCSP Pulse Tenant
     * @request POST:/pulse/tenants
     * @secure
     */
    createPulseTenantByCompany: (
      query: { companyUid: string; rewriteExisting?: boolean; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: PulseTenant; errors?: ResponseError[] }, ErrorResponse>({
        path: `/pulse/tenants`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a resource representation of a VCSP Pulse tenant with the specified UID.
     *
     * @tags Pulse
     * @name GetPulseTenant
     * @summary Get VCSP Pulse Tenant
     * @request GET:/pulse/tenants/{tenantUid}
     * @secure
     */
    getPulseTenant: (tenantUid: string, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: PulseTenant; errors?: ResponseError[] }, ErrorResponse>({
        path: `/pulse/tenants/${tenantUid}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies a VCSP Pulse tenant with the specified UID.
     *
     * @tags Pulse
     * @name PatchPulseTenant
     * @summary Modify VCSP Pulse Tenant
     * @request PATCH:/pulse/tenants/{tenantUid}
     * @secure
     */
    patchPulseTenant: (tenantUid: string, body: JsonPatches, query?: { select?: string }, params: RequestParams = {}) =>
      this.request<{ meta?: ResponseMetadata; data?: PulseTenant; errors?: ResponseError[] }, ErrorResponse>({
        path: `/pulse/tenants/${tenantUid}`,
        method: "PATCH",
        query: query,
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a company based on VCSP Pulse tenant with the specified UID.
     *
     * @tags Pulse
     * @name CreateCompanyByPulseTenant
     * @summary Create Company from VCSP Tenant
     * @request POST:/pulse/tenants/{tenantUid}/createCompany
     * @secure
     */
    createCompanyByPulseTenant: (
      tenantUid: string,
      query: { siteUid: string; gatewayPoolUid?: string; select?: string },
      params: RequestParams = {},
    ) =>
      this.request<{ meta?: ResponseMetadata; data?: Organization; errors?: ResponseError[] }, ErrorResponse>({
        path: `/pulse/tenants/${tenantUid}/createCompany`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
