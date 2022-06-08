import { Arg, Field, FieldResolver, ID, ObjectType, Query, Resolver, ResolverInterface, Root } from "type-graphql";
import SiteEntity from "../database/entity/Site";
import OrganizationEntity from "../database/entity/Organization";
import { SiteOrganization } from "./SiteOrganizations";
import { Organization } from "./organizations";
import SiteOrganizationEntity from "../database/entity/SiteOrganization";

@ObjectType()
export class SiteVeeamMeta {
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
}

@Resolver(Site)
class SitesResolver implements ResolverInterface<Site> {
  @FieldResolver()
  async organizations(@Root() site: SiteEntity) {
    return await SiteOrganizationEntity.createQueryBuilder('so').where({
      siteId: site.siteId
    }).getMany();
  }

  @Query(returns => [Site])
  async getSites(): Promise<Site[]> {
    return await SiteEntity.createQueryBuilder("site").leftJoinAndSelect('site.organizations', 'orgs').getMany()
  }

  @Query(returns => Site, { nullable: true })
  async getSite(
    @Arg("siteId") siteId: string,
  ): Promise<Site | null> {
    return await SiteEntity.createQueryBuilder("st").where({
      siteId,
    }).getOne()
  }
}

export default SitesResolver;
