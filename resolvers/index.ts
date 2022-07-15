import { NonEmptyArray } from "type-graphql";
import AssetProtectionsResolver from "./AssetProtections";
import AssetsResolver from "./Assets";
import AssetSitesResolver from "./AssetSites";
import OrganizationMembersResolver from "./OrganizationMembers";
import OrganizationsResolver from "./organizations";
import ProtectionsResolver from "./Protections";
import ProtectionSitesResolver from "./ProtectionSites";
import SiteOrganizationsResolver from "./SiteOrganizations";
import SitesResolver from "./sites";
import TokensResolver from "./tokens";
import UsersResolver from "./users";

export const resolvers: NonEmptyArray<Function> | NonEmptyArray<string> = [
    TokensResolver,
    UsersResolver,
    SitesResolver,
    ProtectionsResolver,
    OrganizationsResolver,
    OrganizationMembersResolver,
    AssetsResolver,
    AssetSitesResolver,
    SiteOrganizationsResolver,
    ProtectionSitesResolver,
    AssetProtectionsResolver
]
