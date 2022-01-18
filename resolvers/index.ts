import { NonEmptyArray } from "type-graphql";
import SitesResolver from "./sites";
import TokensResolver from "./tokens";
import UsersResolver from "./users";

export const resolvers: NonEmptyArray<Function> | NonEmptyArray<string> = [
    TokensResolver,
    UsersResolver,
    SitesResolver,
]
