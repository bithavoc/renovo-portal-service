import { Field, FieldResolver, ObjectType, Resolver, Root } from "type-graphql";
import AssetEntity from "../database/entity/Asset";
import AssetProtectionEntity from "../database/entity/AssetProtection";
import ProtectionEntity from "../database/entity/Protection";
import { Asset } from "./Assets";
import { Protection } from "./Protections";

@ObjectType()
export class AssetProtection {
  @Field(() => Protection)
  protection: Protection;

  @Field(() => Asset)
  asset: Asset;

  @Field()
  createdAt: Date;
}

@Resolver(AssetProtection)
class AssetProtectionsResolver {
  @FieldResolver()
  async protection(@Root() assetProtection: AssetProtectionEntity) {
    const protection = await ProtectionEntity.findOneBy({
      protectionId: assetProtection.protectionId
    })
    return protection;
  }

  @FieldResolver()
  async asset(@Root() assetProtection: AssetProtectionEntity) {
    const asset = await AssetEntity.findOneBy({
      assetId: assetProtection.assetId
    })
    return asset;
  }
}

export default AssetProtectionsResolver;
