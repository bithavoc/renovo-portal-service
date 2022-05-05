import { Arg, Field, ID, ObjectType, Query, Resolver } from "type-graphql";
import AssetEntity from "../database/entity/Asset";
import { AssetProtection } from "./AssetProtections";
import { AssetSite } from "./AssetSites";

@ObjectType()
export class ZertoAssetMeta {
  @Field({ nullable: true })
  provisionedStorageMb?: number;

  @Field({ nullable: true })
  usedStorageMb?: number;
}

@ObjectType()
export class VeeamAssetVMMeta {
  @Field({ nullable: true, description: 'Total size of protected virtual machine disks, in bytes' })
  provisionedStorageMb?: number;

  @Field({ nullable: true, description: 'Used space on protected virtual machine disks, in bytes' })
  usedStorageMb?: number;

  @Field({ nullable: true, description: 'Total size of all restore points, in bytes' })
  totalRestorePointSize?: number;

  @Field({ nullable: true, description: 'Size of the latest restore point, in bytes' })
  latestRestorePointSize?: number;

  @Field({ nullable: true, description: 'Number of restore points' })
  restorePoints?: number;

  @Field({ nullable: true, description: 'Time and date of the latest restore point creation' })
  latestRestorePointDate?: string;
}

@ObjectType()
export class VeeamAssetMeta {
  @Field({ nullable: true })
  vm?: VeeamAssetVMMeta;
}

@ObjectType()
export class Asset {
  @Field(type => ID)
  assetId: string;

  @Field()
  title: string;

  @Field(() => [AssetSite])
  sites: AssetSite[];

  @Field(() => [AssetProtection])
  protections: AssetProtection[];

  @Field()
  createdAt: Date;

  @Field({ nullable: true })
  zertoMeta?: ZertoAssetMeta

  @Field({ nullable: true })
  veeamMeta?: VeeamAssetMeta
}

@Resolver(Asset)
class AssetsResolver {
  @Query(returns => [Asset])
  async getAssets(
    // @Arg("siteId") siteId: string,
  ): Promise<Asset[]> {
    return await AssetEntity.createQueryBuilder("asset").leftJoinAndSelect('asset.sites', 'sites').leftJoinAndSelect('asset.protections', 'protections').getMany()
  }

  @Query(returns => Asset)
  async getAsset(
    @Arg("assetId") assetId: string,
  ): Promise<Asset> {
    return await AssetEntity.createQueryBuilder("asset").leftJoinAndSelect('asset.sites', 'sites').leftJoinAndSelect('asset.protections', 'protections').where({
      assetId,
    }).getOne()
  }
}

export default AssetsResolver;
