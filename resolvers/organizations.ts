import { AuthenticationError, ForbiddenError } from "apollo-server";
import { Arg, Ctx, Field, FieldResolver, ID, InputType, Mutation, ObjectType, Query, Resolver, Root } from "type-graphql";
import OrganizationEntity from "../database/entity/organization";
import TokenEntity from "../database/entity/token";
import { User } from "./users";

@ObjectType()
export class Organization {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  createdAt: Date;

  // @Field(() => [Patient])
  // patients: Patient[];
}

@InputType()
class NewOrganization {
  @Field()
  id: string;

  @Field()
  title: string;
}

@Resolver(Organization)
class OrganizationsResolver {
  // @Query(returns => Organization)
  // async getOrganization(
  //   @Arg("siteId") siteId: string,
  // ): Promise<Organization> {
  //   return await OrganizationEntity.findOne({
  //     where: {
  //       siteId,
  //     }
  //   });
  // }

  @Mutation(returns => Organization)
  async createOrganization(
    @Arg("info") { id, title }: NewOrganization,
    @Ctx("token") token?: TokenEntity,
  ): Promise<Organization> {
    console.log("token in create site", token)
    if (!token) {
      throw new ForbiddenError("user required");
    }
    const site = OrganizationEntity.create({
      id,
      title,
      createdAt: new Date(),
    });
    await site.save();
    return site;
  }

  // @FieldResolver()
  // async patients(@Root() site: Organization) {
  //   const patients = await PatientEntity.find({
  //     where: {
  //       siteId: site.siteId
  //     },
  //   });
  //   return patients;
  // }
}

export default OrganizationsResolver;
