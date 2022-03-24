import { NonEmptyArray } from "type-graphql";
import OrganizationsResolver from "./organizations";
import ProtectedComputersResolver from "./protected_computers";
import ProtectedVirtualMachinesResolver from "./protected_virtual_machines";
import ProtectionsResolver from "./protections";
import SitesResolver from "./sites";
import TokensResolver from "./tokens";
import UsersResolver from "./users";

export const resolvers: NonEmptyArray<Function> | NonEmptyArray<string> = [
    TokensResolver,
    UsersResolver,
    SitesResolver,
    ProtectionsResolver,
    ProtectedVirtualMachinesResolver,
    ProtectedComputersResolver,
    OrganizationsResolver,
]
