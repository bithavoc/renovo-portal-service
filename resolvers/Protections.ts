import { ForbiddenError } from "apollo-server";
import { Ctx, Field, FieldResolver, ID, ObjectType, Query, Resolver, Root } from "type-graphql";
import ProtectionEntity from "../database/entity/Protection";
import ProtectionSiteEntity from "../database/entity/ProtectionSite";
import TokenEntity from "../database/entity/token";
import VacStore from "../externalServices/vacStore";
import { ProtectionSite } from "./ProtectionSites";

@ObjectType()
export class Protection {
  @Field(type => ID)
  protectionId: string;

  @Field()
  title: string;

  @Field(() => [ProtectionSite])
  sites: ProtectionSite[];
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
}

export default ProtectionsResolver;
