import { Field, FieldResolver, ObjectType, Resolver, Root } from "type-graphql";
import AssetSiteEntity from "../database/entity/AssetSite";
import OrganizationEntity from "../database/entity/Organization";
import SiteEntity from "../database/entity/Site";
import SiteOrganizationEntity from "../database/entity/SiteOrganization";
import { Organization } from "./organizations";
import { Site } from "./sites";

@ObjectType()
export class SiteOrganization {
  @Field()
  siteOrganizationId: string;

  @Field()
  siteId: string;

  @Field()
  organizationId: string;

  @Field()
  createdAt: Date;

  @Field(() => Organization)
  organization: Organization;

  @Field(() => Site)
  site: Site;
}

@Resolver(SiteOrganization)
class SiteOrganizationsResolver {
  @FieldResolver()
  async site(@Root() entity: SiteOrganizationEntity) {
    const site = await SiteEntity.findOne(entity.siteId)
    return site;
  }

  @FieldResolver()
  async organization(@Root() entity: SiteOrganizationEntity) {
    const org = await OrganizationEntity.findOne(entity.organizationId)
    return org;
  }
}

export default SiteOrganizationsResolver;
