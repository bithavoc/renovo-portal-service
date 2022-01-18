import { AuthenticationError } from "apollo-server";
import { Arg, Ctx, Field, FieldResolver, ID, InputType, Mutation, ObjectType, Query, Resolver, Root } from "type-graphql";
import TokenEntity from "../database/entity/token";
import { User } from "./users";
import SiteEntity from "../database/entity/site";

@ObjectType()
export class Site {
  @Field(type => ID)
  siteId: string;

  @Field()
  title: string;

  @Field()
  userId: string;

  @Field()
  user: User;

  @Field()
  createdAt: Date;

  // @Field(() => [Patient])
  // patients: Patient[];
}

@InputType()
class NewSite {
  @Field()
  siteId: string;

  @Field()
  title: string;
}

@Resolver(Site)
class SitesResolver {
  @Query(returns => Site)
  async getSite(
    @Arg("siteId") siteId: string,
  ): Promise<Site> {
    return await SiteEntity.findOne({
      where: {
        siteId,
      }
    });
  }

  @Mutation(returns => Site)
  async createSite(
    @Arg("info") { siteId, title }: NewSite,
    @Ctx("token") token?: TokenEntity,
  ): Promise<Site> {
    console.log("token in create site", token)
    if (!token) {
      throw new AuthenticationError("user login required");
    }
    const site = SiteEntity.create({
      siteId,
      title,
      userId: token.userId,
      createdAt: new Date(),
    });
    await site.save();
    return site;
  }

  // @FieldResolver()
  // async patients(@Root() site: Site) {
  //   const patients = await PatientEntity.find({
  //     where: {
  //       siteId: site.siteId
  //     },
  //   });
  //   return patients;
  // }
}

export default SitesResolver;
