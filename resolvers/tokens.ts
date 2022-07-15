import { AuthenticationError } from "apollo-server";
import { Arg, Ctx, Field, ID, InputType, Mutation, ObjectType, Query, Resolver } from "type-graphql";
import UserEntity from "../database/entity/user";
import TokenEntity from "../database/entity/token";
import { sign } from 'jsonwebtoken';
import { User } from "./users";
import { compare } from "bcrypt";

@ObjectType()
class Token {
  @Field(type => ID)
  token: string;

  @Field()
  userId: string;

  @Field()
  user: User;

  @Field()
  createdAt: Date;
}

@InputType()
class Credentials {
  @Field()
  email: string;

  @Field()
  password: string;
}

@Resolver(Token)
class TokensResolver {
  @Query(returns => Token)
  async getCurrentToken(
    @Ctx("token") token?: TokenEntity
  ): Promise<Token> {
    if (!token) {
      throw new AuthenticationError("access denied")
    }
    return token
  }
  @Mutation(returns => Token)
  async signIn(
    @Arg("credentials") { email, password }: Credentials,
  ): Promise<Token> {
    const user = await UserEntity.findOne({ where: { email } });
    if (!user) {
      throw new AuthenticationError("invalid credential")
    }
    if (!await compare(password, user.password)) {
      throw new AuthenticationError("invalid credential")
    }
    let jwtToken = sign({
      userId: user.userId
    }, "longer-secret-is-better", {
      expiresIn: "1h"
    });
    const token = TokenEntity.create({
      user: user,
      createdAt: new Date(),
      token: jwtToken
    });
    await token.save();
    return token;
  }
}

export default TokensResolver;
