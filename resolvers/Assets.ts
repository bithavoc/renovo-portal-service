import { AuthenticationError, ForbiddenError } from "apollo-server";
import { Arg, Ctx, Field, FieldResolver, ID, InputType, Mutation, ObjectType, Query, Resolver, Root } from "type-graphql";
import { uuid } from "uuidv4";
import AssetEntity from "../database/entity/Asset";
import TokenEntity from "../database/entity/token";
import UserEntity from "../database/entity/user";
import { Organization } from "./organizations";
import { Site } from "./sites";

@ObjectType()
export class ZertoAssetMeta {
  @Field()
  provisionedStorageMb?: number;

  @Field()
  usedStorageMb?: number;
}

@ObjectType()
export class Asset {
  @Field(type => ID)
  assetId: string;

  @Field()
  title: string;

  @Field(() => Asset)
  organization: Organization;

  @Field(() => Asset)
  site: Site;

  @Field()
  createdAt: Date;

  @Field()
  zertoMeta?: ZertoAssetMeta
}

@Resolver(Asset)
class AssetsResolver {
  @Query(returns => [Asset])
  async getAssets(
    // @Arg("siteId") siteId: string,
  ): Promise<Asset[]> {
    return await AssetEntity.createQueryBuilder("asset").getMany()
  }
}

export default AssetsResolver;
