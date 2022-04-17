import { AuthenticationError } from "apollo-server";
import { Arg, Ctx, Field, FieldResolver, ID, InputType, Mutation, ObjectType, Query, Resolver, Root } from "type-graphql";
import TokenEntity from "../database/entity/token";
import { User } from "./users";
import SiteEntity from "../database/entity/site";
import { Organization } from "./organizations";
import OrganizationEntity from "../database/entity/organization";

@ObjectType()
export class Site {
  @Field(type => ID)
  siteId: string;

  @Field()
  title: string;

  @Field()
  createdAt: Date;

  @Field(() => Organization)
  organization: Organization;
}

@Resolver(Site)
class SitesResolver {
  @FieldResolver()
  async organization(@Root() site: SiteEntity) {
    return await OrganizationEntity.findOne(site.organizationId);
  }
}

export default SitesResolver;
