import { Field, FieldResolver, ObjectType, Resolver, Root } from "type-graphql";
import AssetProtectionEntity from "../database/entity/AssetProtection";
import ProtectionEntity from "../database/entity/Protection";
import { Protection } from "./Protections";

@ObjectType()
export class AssetProtection {
  @Field(() => Protection)
  protection: Protection;

  @Field()
  createdAt: Date;
}

@Resolver(AssetProtection)
class AssetProtectionsResolver {
  @FieldResolver()
  async protection(@Root() assetProtection: AssetProtectionEntity) {
    const protection = await ProtectionEntity.findOne(assetProtection.protectionId)
    return protection;
  }
}

export default AssetProtectionsResolver;
