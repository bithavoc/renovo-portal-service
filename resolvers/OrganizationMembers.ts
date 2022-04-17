import { AuthenticationError, ForbiddenError } from "apollo-server";
import { Arg, Ctx, Field, FieldResolver, ID, InputType, Mutation, ObjectType, Query, Resolver, Root } from "type-graphql";
import { uuid } from "uuidv4";
import OrganizationEntity from "../database/entity/Organization";
import OrganizationMemberEntity from "../database/entity/OrganizationMember";
import TokenEntity from "../database/entity/token";
import UserEntity from "../database/entity/user";
import { Organization } from "./organizations";
import { User } from "./users";

@ObjectType()
export class OrganizationMember {
  @Field(type => ID)
  id: string;

  @Field(() => Organization)
  organization: Organization;

  @Field(() => User)
  user: User;

  @Field()
  createdAt: Date;
}

@InputType()
class NewOrganizationMember {
  @Field()
  organizationId: string;

  @Field()
  userIdOrEmail: string;
}

@Resolver(OrganizationMember)
class OrganizationMembersResolver {
  // @Query(returns => OrganizationMember)
  // async getOrganizationMember(
  //   @Arg("siteId") siteId: string,
  // ): Promise<OrganizationMember> {
  //   return await OrganizationMemberEntity.findOne({
  //     where: {
  //       siteId,
  //     }
  //   });
  // }

  @Mutation(returns => OrganizationMember)
  async createOrganizationMember(
    @Arg("info") { organizationId, userIdOrEmail }: NewOrganizationMember,
    @Ctx("token") token?: TokenEntity,
  ): Promise<OrganizationMember> {
    console.log("token in create site", token)
    if (!token) {
      throw new ForbiddenError("user required");
    }

    const organization = await OrganizationEntity.findOneOrFail(organizationId)
    const user = await UserEntity.findByIdOrEmailOrFail(userIdOrEmail)

    const existing = await OrganizationMemberEntity.createQueryBuilder('member').where('member.organization_id = :organizationId AND member.user_id = :userId', {
      organizationId,
      userId: user.userId,
    }).getOne()
    if (existing) {
      throw new Error("member already exists")
    }
    console.log("existing", existing);

    const rec = OrganizationMemberEntity.create({
      id: uuid(),
      user,
      organization,
      createdAt: new Date(),
    });
    return await rec.save();
  }

  // @FieldResolver()
  // async patients(@Root() site: OrganizationMember) {
  //   const patients = await PatientEntity.find({
  //     where: {
  //       siteId: site.siteId
  //     },
  //   });
  //   return patients;
  // }
}

export default OrganizationMembersResolver;
