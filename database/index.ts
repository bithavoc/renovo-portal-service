
import { createConnection } from "typeorm";
import OrganizationEntity from "./entity/organization";
import SiteEntity from "./entity/site";
import TokenEntity from "./entity/token";
import UserEntity from "./entity/user";
import { CreateUser1630703672513 } from "./migration/1630703672513-CreateUser";
import { CreateToken1630707703870 } from "./migration/1630707703870-CreateToken";
import { AddCreatedAtToUsers1630761146172 } from "./migration/1630761146172-AddCreatedAtToUsers";
import { AddPasswordToUsers1630761427800 } from "./migration/1630761427800-AddPasswordToUsers";
import { CreateSitesTable1630780727527 } from "./migration/1630780727527-CreateSitesTable";
import { CreateOrganizationTable1648161090926 } from "./migration/1648161090926-CreateOrganizationTable";

export const initDatabase = () => createConnection({
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "synchronize": false,
    "logging": true,
    "migrationsRun": true,
    "entities": [
        UserEntity,
        TokenEntity,
        SiteEntity,
        OrganizationEntity,
    ],
    "migrations": [
        CreateUser1630703672513,
        CreateToken1630707703870,
        AddCreatedAtToUsers1630761146172,
        AddPasswordToUsers1630761427800,
        CreateSitesTable1630780727527,
        CreateOrganizationTable1648161090926,
    ]
});