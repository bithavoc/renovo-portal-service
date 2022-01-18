import { AuthenticationError } from "apollo-server";
import { Arg, Ctx, Field, FieldResolver, ID, InputType, Mutation, ObjectType, Query, Resolver, Root } from "type-graphql";
import UserEntity from "../database/entity/user";
import { uuid } from 'uuidv4';
import { hash } from 'bcrypt';
import { Site } from "./sites";

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

  @Field(() => [Site])
  sites: Site[];
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

  @FieldResolver()
  async sites(@Root() user: User) {
    const u = await UserEntity.findOne({
      where: {
        userId: user.userId
      },
      relations: ["sites"]
    });
    return u.sites;
  }
}

export default UsersResolver;
