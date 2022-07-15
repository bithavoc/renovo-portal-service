import { AuthenticationError } from "apollo-server";
import { Arg, Field, FieldResolver, ID, InputType, Mutation, ObjectType, Query, Resolver, Root } from "type-graphql";
import UserEntity from "../database/entity/user";
import { uuid } from 'uuidv4';
import { hash } from 'bcrypt';
import { Stats, Summary } from "./Stats";
import SummaryEntity from "../database/entity/Summary";

@ObjectType()
export class User {
  @Field(type => ID)
  userId: string;

  @Field()
  email: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field({ nullable: true })
  summary?: Summary;
}

@InputType()
class NewUser {
  @Field()
  email: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  password: string;
}

@Resolver(User)
class UsersResolver {
  @Query(returns => User, { nullable: true })
  async getToken(
    userId: string,
  ): Promise<User | null> {
    return await UserEntity.findOne({
      where: {
        userId,
      }
    })
  }

  @Mutation(returns => User)
  async signUp(
    @Arg("info") { email, password, firstName, lastName }: NewUser,
  ): Promise<User> {
    const allowList = [
      'sharmon@renovodata.com',
      'rroberts@renovodata.com',
      'jdelaney@renovodata.com',
      'rkelleher@renovodata.com',
      'cbrowne@renovodata.com',
      'mvayle@renovodata.com'
    ];
    email = email.trim().toLowerCase();
    const isAllowListed = allowList.indexOf(email) !== -1;
    if (!isAllowListed) {
      throw new AuthenticationError("oops, sorry, we're in private beta")
    }
    const existingUser = await UserEntity.findOne({ where: { email } });
    if (existingUser) {
      throw new AuthenticationError("user already exists")
    }
    const user = UserEntity.create({
      email,
      userId: uuid(),
      createdAt: new Date(),
      password: await hash(password, 10),
      firstName,
      lastName,
    });
    await user.save()
    return user;
  }

  // @FieldResolver()
  // async assets(@Root() user: User): Promise<Asset[]> {
  //   // TODO: org membership filter, blocked by admin flag
  //   return await AssetEntity.createQueryBuilder("asset").getMany()
  //   // const u = await UserEntity.findOne({
  //   //   where: {
  //   //     userId: user.userId
  //   //   },
  //   //   relations: ["sites"]
  //   // });
  //   // return u.sites;
  // }

  @FieldResolver({ nullable: true })
  async summary(@Root() user: UserEntity): Promise<Summary | null> {
    const { summaryId } = user;
    if (!summaryId) {
      return null
    }
    const summary = await SummaryEntity.findOneBy({
      summaryId,
    })
    return summary;
  }
}

export default UsersResolver;
