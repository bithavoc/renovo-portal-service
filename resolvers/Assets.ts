import { ForbiddenError } from "apollo-server";
import { Arg, Ctx, Field, FieldResolver, ID, ObjectType, Query, Resolver, Root } from "type-graphql";
import AssetEntity from "../database/entity/Asset";
import AssetProtectionEntity from "../database/entity/AssetProtection";
import AssetSiteEntity from "../database/entity/AssetSite";
import TokenEntity from "../database/entity/token";
import { AssetProtection } from "./AssetProtections";
import { AssetSite } from "./AssetSites";
import { Page } from "./pagination/page";
import { Paginate } from "./pagination/paginator";
import { PageRequest } from "./pagination/request";

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
@ObjectType()
export class AssetsPage extends Page<Asset> {
  @Field(() => [Asset])
  items: Asset[];
}


@Resolver(Asset)
class AssetsResolver {
  @Query(returns => AssetsPage)
  async getAssets(
    @Ctx("token") token?: TokenEntity | null,
    @Arg("sitesIdentifiers", type => [String], { nullable: true }) siteIdentifiers?: string[],
    @Arg("page", type => PageRequest, { nullable: true }) pageRequest?: PageRequest,
    @Arg("titleContains", { nullable: true }) titleContains?: string,
  ): Promise<AssetsPage> {
    if (!token) {
      throw new ForbiddenError("access denied")
    }
    const page = await Paginate(pageRequest, () => {
      const query = AssetEntity.createQueryBuilder("asset")
      if (siteIdentifiers) {
        console.log('querying by sites', siteIdentifiers);
        query.leftJoin('asset.sites', 'sites');
        query.andWhere('sites.siteId IN (:...siteIdentifiers)', {
          siteIdentifiers
        })
      }
      if (titleContains) {
        query.andWhere('asset.title ILIKE :titleTerm', {
          titleTerm: `%${titleContains}%`
        })
      }
      return query;
    }, () => new AssetsPage())
    return page;
  }

  @Query(returns => Asset, { nullable: true })
  async getAsset(
    @Ctx("token") token: TokenEntity | null,
    @Arg("assetId") assetId: string,
  ): Promise<Asset | null> {
    if (!token) {
      throw new ForbiddenError("access denied")
    }
    return await AssetEntity.createQueryBuilder("asset").leftJoinAndSelect('asset.sites', 'sites').leftJoinAndSelect('asset.protections', 'protections').where({
      assetId,
    }).getOne()
  }

  @FieldResolver()
  async sites(@Root() asset: AssetEntity): Promise<AssetSiteEntity[]> {
    const sites = await AssetSiteEntity.createQueryBuilder('protsite').where({
      assetId: asset.assetId
    }).getMany();
    return sites;
  }

  @FieldResolver()
  async protections(@Root() asset: AssetEntity): Promise<AssetProtection[]> {
    const list = await AssetProtectionEntity.createQueryBuilder('protsite').where({
      assetId: asset.assetId
    }).getMany();
    return list;
  }
}

export default AssetsResolver;
