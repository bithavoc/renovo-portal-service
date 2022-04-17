import { Field, FieldResolver, ID, ObjectType, Resolver, ResolverInterface, Root } from "type-graphql";
import SiteEntity from "../database/entity/Site";
import OrganizationEntity from "../database/entity/Organization";
import { SiteOrganization } from "./SiteOrganizations";
import { Organization } from "./organizations";
import SiteOrganizationEntity from "../database/entity/SiteOrganization";

@ObjectType()
export class Site {
  @Field(type => ID)
  siteId: string;

  @Field()
  title: string;

  @Field()
  createdAt: Date;

  @Field(() => [SiteOrganization])
  organizations: SiteOrganization[];
}

@Resolver(Site)
class SitesResolver implements ResolverInterface<Site> {
  @FieldResolver()
  async organizations(@Root() site: SiteEntity) {
    return await SiteOrganizationEntity.createQueryBuilder('so').where({
      siteId: site.siteId
    }).getMany();
  }
}

export default SitesResolver;
