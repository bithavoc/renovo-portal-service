import { Field, FieldResolver, ObjectType, Resolver, Root } from "type-graphql";
import AssetSiteEntity from "../database/entity/AssetSite";
import { Purpose } from "../database/entity/ProtectionSite";
import SiteEntity from "../database/entity/Site";
import { Site } from "./sites";

@ObjectType()
export class ProtectionSite {
  @Field(() => Site)
  site: Site;

  @Field()
  createdAt: Date;

  @Field()
  purpose: Purpose;
}

@Resolver(ProtectionSite)
class ProtectionSitesResolver {
  @FieldResolver()
  async site(@Root() assetSite: AssetSiteEntity) {
    console.log("site to resolve", assetSite)
    const site = await SiteEntity.findOneBy({
      siteId: assetSite.siteId
    })
    return site;
  }
}

export default ProtectionSitesResolver;
