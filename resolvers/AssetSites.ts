import { Field, FieldResolver, ObjectType, Resolver, Root } from "type-graphql";
import AssetSiteEntity from "../database/entity/AssetSite";
import SiteEntity from "../database/entity/Site";
import { Site } from "./sites";

@ObjectType()
export class AssetSite {
  @Field(() => Site)
  site: Site;

  @Field()
  createdAt: Date;
}

@Resolver(AssetSite)
class AssetSitesResolver {
  @FieldResolver()
  async site(@Root() assetSite: AssetSiteEntity) {
    console.log("site to resolve", assetSite)
    const site = await SiteEntity.findOne(assetSite.siteId)
    return site;
  }
}

export default AssetSitesResolver;
