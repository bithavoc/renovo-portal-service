import { AuthenticationError } from "apollo-server";
import { Arg, Field, ID, InputType, Mutation, ObjectType, Query, Resolver } from "type-graphql";
import UserEntity from "../database/entity/user";
import { uuid } from 'uuidv4';
import { hash } from 'bcrypt';

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
  @Query(returns => User)
  async getToken(
    userId: string,
  ): Promise<User> {
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
    const existingUser = await UserEntity.findOne({ where: { email } });
    if (existingUser) {
      throw new AuthenticationError("user already exists")
    }
    const user = UserEntity.create({
      email, // TODO: normalize email
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
}

export default UsersResolver;
