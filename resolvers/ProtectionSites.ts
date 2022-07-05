import { Field, FieldResolver, ObjectType, Resolver, Root, WrongNullableListOptionError } from "type-graphql";
import AssetSiteEntity from "../database/entity/AssetSite";
import OrganizationEntity from "../database/entity/Organization";
import ProtectionSiteEntity, { Purpose } from "../database/entity/ProtectionSite";
import SiteEntity from "../database/entity/Site";
import { Organization } from "./organizations";
import { Site } from "./sites";

@ObjectType()
export class ProtectionSite {
  @Field(() => Site)
  site: Site;

  @Field()
  createdAt: Date;

  @Field()
  purpose: Purpose;

  @Field({ nullable: true })
  organizationId?: string;

  @Field(() => Organization, { nullable: true })
  organization?: Organization;
}

@Resolver(ProtectionSite)
class ProtectionSitesResolver {
  @FieldResolver()
  async site(@Root() protectionSite: ProtectionSiteEntity) {
    console.log("site to resolve", protectionSite)
    const site = await SiteEntity.findOneBy({
      siteId: protectionSite.siteId
    })
    return site;
  }

  @FieldResolver()
  async organization(@Root() protectionSite: ProtectionSiteEntity) {
    console.log("organization to resolve", protectionSite)
    const { organizationId } = protectionSite;
    if (!organizationId) {
      return null;
    }
    const org = await OrganizationEntity.findOneBy({
      id: organizationId,
    })
    return org;
  }
}

export default ProtectionSitesResolver;
