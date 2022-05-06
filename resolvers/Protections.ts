import { ForbiddenError } from "apollo-server";
import { Arg, Ctx, Field, FieldResolver, ID, ObjectType, Query, Resolver, Root } from "type-graphql";
import AssetProtectionEntity from "../database/entity/AssetProtection";
import ProtectionEntity from "../database/entity/Protection";
import ProtectionSiteEntity from "../database/entity/ProtectionSite";
import TokenEntity from "../database/entity/token";
import VacStore from "../externalServices/vacStore";
import { AssetProtection } from "./AssetProtections";
import { Asset } from "./Assets";
import { ProtectionSite } from "./ProtectionSites";

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
}

@Resolver(Protection)
class ProtectionsResolver {
  @Query(returns => [Protection])
  async getProtections(
    @Ctx("token") token?: TokenEntity,
    // @Ctx("vacStore") vac?: VacStore,
  ): Promise<Protection[]> {
    if (!token) {
      throw new ForbiddenError("access denied")
    }
    return await ProtectionEntity.createQueryBuilder("prot").leftJoinAndSelect('prot.sites', 'sites').getMany()
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

  @Query(returns => Protection)
  async getProtection(
    @Arg("protectionId") protectionId: string,
  ): Promise<Protection> {
    return await ProtectionEntity.createQueryBuilder("prot").leftJoinAndSelect('prot.sites', 'sites').where({
      protectionId,
    }).getOne()
  }
}

export default ProtectionsResolver;
