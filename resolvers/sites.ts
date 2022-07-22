import { Arg, Ctx, Field, FieldResolver, ID, ObjectType, Query, Resolver, ResolverInterface, Root } from "type-graphql";
import SiteEntity from "../database/entity/Site";
import OrganizationEntity from "../database/entity/Organization";
import { SiteOrganization } from "./SiteOrganizations";
import { Organization } from "./organizations";
import SiteOrganizationEntity from "../database/entity/SiteOrganization";
import { Page } from "./pagination/page";
import { Paginate } from "./pagination/paginator";
import { PageRequest } from "./pagination/request";
import TokenEntity from "../database/entity/token";
import { ForbiddenError } from "apollo-server";

@ObjectType()
export class SiteVeeamOrganizationLocation {
  @Field({
    description: 'UID assigned to a location in Veeam Service Provider Console',
    nullable: true,
  })
  instanceUid?: string;

  @Field({
    description: 'UID assigned to an organization',
    nullable: true,
  })
  organizationUid?: string;

  @Field({
    description: 'Name of a location'
  })
  name: string;

  @Field({
    description: 'Amount of storage space allocated to a location, in gigabytes'
  })
  quotaGb: number;

  @Field({
    description: 'Indicates whether a location is default',
    nullable: true,
  })
  isDefault?: boolean;
}

@ObjectType()
export class SiteVeeamBackupRepository {
  @Field({
    description: 'UID assigned to a backup repository',
    nullable: true,
  })
  instanceUid?: string;

  @Field({
    description: 'Name of a backup repository',
    nullable: true,
  })
  name?: string;

  @Field({
    description: 'UID assigned to a Veeam Backup & Replication server',
    nullable: true,
  })
  backupServerUid?: string;

  @Field({
    description: ' UID assigned to a scale-out backup repository which includes the backup repository as an extent',
    nullable: true,
  })
  parentRepositoryUid?: string;

  @Field({
    description: 'Indicates whether the per-VM backup job option is enabled in the backup repository settings. VM backup files option in the repository settings is enabled. Displays if the per-VM backup job option is enabled or not in the backup repository settings',
    nullable: true,
  })
  perVMBackupFiles?: boolean;

  @Field({
    description: 'Total disk space of backup repository, in bytes',
    nullable: true,
  })
  capacity?: number;

  @Field({
    description: 'Indicates whether information about total disk space is available',
    nullable: true,
  })
  isCapacityAvailable?: boolean;

  @Field({
    description: 'Free disk space of backup repository, in bytes',
    nullable: true,
  })
  freeSpace?: number;

  @Field({
    description: 'Indicates whether a backup repository has free space',
    nullable: true,
  })
  isFreeSpaceAvailable?: boolean;

  @Field({
    description: 'Amount of used space on a backup repository, in bytes',
    nullable: true,
  })
  usedSpace?: number;

  @Field({
    description: 'Indicates whether information about used space is available',
    nullable: true,
  })
  isUsedSpaceAvailable?: boolean;

  @Field({
    description: `Type of a backup repository
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
    `,
    nullable: true,
  })
  type?: string;

  @Field({
    description: `UID assigned to a backup repository if it is used as a cloud repository`,
    nullable: true,
  })
  cloudRepositoryUid?: string;

  @Field({
    description: 'Path to the folder where backup files are stored',
    nullable: true,
  })
  path?: string;

  @Field({
    description: 'Name of a computer that performs a role of a backup repository',
    nullable: true,
  })
  hostName?: string;

  @Field({
    description: 'UID assigned to a computer that performs a role of a backup repository',
    nullable: true,
  })
  hostUid?: string;

  @Field({
    description: 'Indicates whether a backup repository service is outdated',
    nullable: true,
  })
  isOutOfDate?: boolean;

  @Field({
    description: 'Status of a backup repository "Unknown" | "Healthy" | "Warning" | "Error"',
    nullable: true,
  })
  status?: string;

  @Field({
    description: 'Indicates whether a backup repository is used as a cloud repository',
    nullable: true,
  })
  isCloud?: boolean;
}

@ObjectType()
export class SiteVeeamMeta {
  @Field({ nullable: true })
  organizationLocation?: SiteVeeamOrganizationLocation;

  @Field({ nullable: true })
  backupRepository?: SiteVeeamBackupRepository;
}

@ObjectType()
export class SiteZertoMeta {
  @Field({
    description: 'The ID of this Zerto site',
    nullable: true,
  })
  identifier?: string;

  @Field({
    nullable: true
  })
  name?: string;

  @Field({
    description: 'The type of site',
    nullable: true,
  })
  type?: string;

  @Field({
    description: 'The local IP of the ZVM',
    nullable: true,
  })
  zvmpIp?: string;

  @Field({
    description: 'The connection status of the site to the Zerto Analytics service',
    nullable: true,
  })
  connectionStatus?: string;

  @Field({
    description: 'whether the ZVM is enabled to send data to Zerto Analytics service',
    nullable: true,
  })
  isTransmissionEnabled?: boolean;

  @Field({
    nullable: true,
  })
  isConnected?: boolean;
}

@ObjectType()
export class Site {
  @Field(type => ID)
  siteId: string;

  @Field()
  title: string;

  @Field()
  createdAt: Date;

  @Field(() => [SiteOrganization])
  organizations: SiteOrganization[];

  @Field({
    nullable: true
  })
  veeamMeta?: SiteVeeamMeta;

  @Field({
    nullable: true
  })
  zertoMeta?: SiteZertoMeta;

  @Field()
  protectionsCount: number;

  @Field()
  assetsCount: number;
}


@ObjectType()
export class SitesPage extends Page<Site> {
  @Field(() => [Site])
  items: Site[];
}

@Resolver(Site)
class SitesResolver implements ResolverInterface<Site> {
  @FieldResolver()
  async organizations(@Root() site: SiteEntity) {
    return await SiteOrganizationEntity.createQueryBuilder('so').where({
      siteId: site.siteId
    }).getMany();
  }

  @Query(returns => SitesPage)
  async getSites(
    @Ctx("token") token: TokenEntity | null,
    @Arg("page", type => PageRequest, { nullable: true }) pageRequest?: PageRequest,
  ): Promise<SitesPage> {
    if (!token) {
      throw new ForbiddenError("access denied")
    }
    const page = await Paginate(pageRequest, () => {
      return SiteEntity.createQueryBuilder("site").leftJoinAndSelect('site.organizations', 'orgs')
    }, () => new SitesPage())
    return page;
  }

  @Query(returns => Site, { nullable: true })
  async getSite(
    @Ctx("token") token: TokenEntity | null,
    @Arg("siteId") siteId: string,
  ): Promise<Site | null> {
    if (!token) {
      throw new ForbiddenError("access denied")
    }
    return (await SiteEntity.createQueryBuilder("st").where({
      siteId,
    }).getOne()) || null;
  }
}

export default SitesResolver;
