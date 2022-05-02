
import { createConnection } from "typeorm";
import AssetEntity from "./entity/Asset";
import AssetSiteEntity from "./entity/AssetSite";
import OrganizationEntity from "./entity/Organization";
import OrganizationMemberEntity from "./entity/OrganizationMember";
import ProtectionEntity from "./entity/Protection";
import SiteEntity from "./entity/Site";
import SiteOrganizationEntity from "./entity/SiteOrganization";
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

export const initDatabase = () => createConnection({
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
    ]
});