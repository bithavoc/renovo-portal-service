import AssetSiteEntity from "../database/entity/AssetSite";
import ProtectionSiteEntity from "../database/entity/ProtectionSite";
import SiteEntity from "../database/entity/Site";

export async function updateCounts() {
  const sites = await SiteEntity.createQueryBuilder("sites").getMany();
  for (const site of sites) {
    site.protectionsCount = await ProtectionSiteEntity.createQueryBuilder("site").andWhere({
      siteId: site.siteId,
    }).getCount()
    site.assetsCount = await AssetSiteEntity.createQueryBuilder("site").andWhere({
      siteId: site.siteId,
    }).getCount()
    console.log("updated counters for site", site.title);
    await site.save()
  }
}