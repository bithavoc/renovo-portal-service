import { Field, FieldResolver, ID, ObjectType, Query, Resolver, ResolverInterface, Root } from "type-graphql";
import SiteEntity from "../database/entity/Site";
import OrganizationEntity from "../database/entity/Organization";
import { SiteOrganization } from "./SiteOrganizations";
import { Organization } from "./organizations";
import SiteOrganizationEntity from "../database/entity/SiteOrganization";

@ObjectType()
export class SiteVeeamMeta {
  @Field({
    description: 'UID assigned to a location in Veeam Service Provider Console'
  })
  instanceUid?: string;

  @Field({
    description: 'UID assigned to an organization'
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
    description: 'Indicates whether a location is default'
  })
  isDefault?: boolean;
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
}

export default SitesResolver;
