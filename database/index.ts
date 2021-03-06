
import { DataSource } from "typeorm";
import AssetEntity from "./entity/Asset";
import AssetProtectionEntity from "./entity/AssetProtection";
import AssetSiteEntity from "./entity/AssetSite";
import OrganizationEntity from "./entity/Organization";
import OrganizationMemberEntity from "./entity/OrganizationMember";
import ProtectionEntity from "./entity/Protection";
import ProtectionSiteEntity from "./entity/ProtectionSite";
import SiteEntity from "./entity/Site";
import SiteOrganizationEntity from "./entity/SiteOrganization";
import SummaryEntity from "./entity/Summary";
import TokenEntity from "./entity/token";
import UserEntity from "./entity/user";
import { CreateUser1630703672513 } from "./migration/1630703672513-CreateUser";
import { CreateToken1630707703870 } from "./migration/1630707703870-CreateToken";
import { AddCreatedAtToUsers1630761146172 } from "./migration/1630761146172-AddCreatedAtToUsers";
import { AddPasswordToUsers1630761427800 } from "./migration/1630761427800-AddPasswordToUsers";
import { CreateSitesTable1630780727527 } from "./migration/1630780727527-CreateSitesTable";
import { CreateOrganizationTable1648161090926 } from "./migration/1648161090926-CreateOrganizationTable";
import { CreateOrganizationMemberTable1648164146086 } from "./migration/1648164146086-CreateOrganizationMemberTable";
import { ChangeUserIdType1648167963441 } from "./migration/1648167963441-ChangeUserIdType";
import { RebuildUserIdConstraints1648168443088 } from "./migration/1648168443088-RebuildUserIdConstraints";
import { OrgMemberUnique1648170087959 } from "./migration/1648170087959-OrgMemberUnique";
import { ChangeSiteOrganization1648181269738 } from "./migration/1648181269738-ChangeSiteOrganization";
import { AddMetasToSites1648181663953 } from "./migration/1648181663953-AddMetasToSites";
import { CreateAssetsTable1648185874871 } from "./migration/1648185874871-CreateAssetsTable";
import { CreateAssetSiteTable1650165891862 } from "./migration/1650165891862-CreateAssetSiteTable";
import { DropAssetSiteColumn1650166677138 } from "./migration/1650166677138-DropAssetSiteColumn";
import { CreateSiteOrganizationTable1650209011918 } from "./migration/1650209011918-CreateSiteOrganizationTable";
import { DropSiteOrganizationColumn1650209640070 } from "./migration/1650209640070-DropSiteOrganizationColumn";
import { DropAssetSiteOrganization1650209905453 } from "./migration/1650209905453-DropAssetSiteOrganization";
import { CreateProtectionsTable1651489422541 } from "./migration/1651489422541-CreateProtectionsTable";
import { CreateProtectionSitesTable1651692586049 } from "./migration/1651692586049-CreateProtectionSitesTable";
import { AddPurposeToProtectionSites1651694445319 } from "./migration/1651694445319-AddPurposeToProtectionSites";
import { CreateAssetProtections1651709371323 } from "./migration/1651709371323-CreateAssetProtections";
import { AddHealthToProtections1656019688926 } from "./migration/1656019688926-AddHealthToProtections";
import { AddVendorToProtections1656024089277 } from "./migration/1656024089277-AddVendorToProtections";
import { CreateSummariesTable1656623207505 } from "./migration/1656623207505-CreateSummariesTable";
import { AddSummaryToUsers1656623437573 } from "./migration/1656623437573-AddSummaryToUsers";
import { AddOrganizationToProtectionSites1656957599510 } from "./migration/1656957599510-AddOrganizationToProtectionSites";
import { AddVendorToAssets1657558034750 } from "./migration/1657558034750-AddVendorToAssets";
import { AddCountersToSites1658454682615 } from "./migration/1658454682615-AddCountersToSites";

export const AppDataSource = new DataSource({
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "synchronize": false,
    // "logging": true,
    "migrationsRun": true,
    "entities": [
        UserEntity,
        TokenEntity,
        SiteEntity,
        OrganizationEntity,
        OrganizationMemberEntity,
        AssetEntity,
        AssetSiteEntity,
        SiteOrganizationEntity,
        ProtectionEntity,
        ProtectionSiteEntity,
        AssetProtectionEntity,
        SummaryEntity,
    ],
    "migrations": [
        CreateUser1630703672513,
        CreateToken1630707703870,
        AddCreatedAtToUsers1630761146172,
        AddPasswordToUsers1630761427800,
        CreateSitesTable1630780727527,
        CreateOrganizationTable1648161090926,
        CreateOrganizationMemberTable1648164146086,
        ChangeUserIdType1648167963441,
        RebuildUserIdConstraints1648168443088,
        OrgMemberUnique1648170087959,
        ChangeSiteOrganization1648181269738,
        AddMetasToSites1648181663953,
        CreateAssetsTable1648185874871,
        CreateAssetSiteTable1650165891862,
        DropAssetSiteColumn1650166677138,
        CreateSiteOrganizationTable1650209011918,
        DropSiteOrganizationColumn1650209640070,
        DropAssetSiteOrganization1650209905453,
        CreateProtectionsTable1651489422541,
        CreateProtectionSitesTable1651692586049,
        AddPurposeToProtectionSites1651694445319,
        CreateAssetProtections1651709371323,
        AddHealthToProtections1656019688926,
        AddVendorToProtections1656024089277,
        CreateSummariesTable1656623207505,
        AddSummaryToUsers1656623437573,
        AddOrganizationToProtectionSites1656957599510,
        AddVendorToAssets1657558034750,
        AddCountersToSites1658454682615,
    ]
});

export async function initDatabase() {
    await AppDataSource.initialize();
    await AppDataSource.runMigrations();
}
