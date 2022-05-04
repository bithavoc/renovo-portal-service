import { ForbiddenError } from "apollo-server";
import { Ctx, Field, ID, ObjectType, Query, Resolver } from "type-graphql";
import ProtectionEntity from "../database/entity/Protection";
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
}

export default ProtectionsResolver;
