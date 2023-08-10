import { Resolver, Query, Mutation, Arg, ObjectType, Field, Ctx, UseMiddleware } from "type-graphql";
import { hash, compare } from "bcryptjs";
import { User } from "./entities/User";
import { NodeContext } from "./Context";
import { createAccessToken } from "./Auth";
import { AuthMiddleware } from "./AuthMiddleware";
import isEmail from "validator/lib/isEmail";

@ObjectType()
class SignInResponse {
  @Field(() => Boolean)
  success: boolean;

  @Field(() => String, { nullable: true })
  message?: string;

  @Field()
  accessToken: string;
}

@ObjectType()
class SignUpResponse {
  @Field(() => Boolean)
  success: boolean;

  @Field(() => String, { nullable: true })
  message?: string;
}

@Resolver()
export class UserResolver {
    @Query(() => String)
    hello() {
      return "hi!";
    }
   
    @Query(() => String)
    @UseMiddleware(AuthMiddleware)
    checkIDWithJWT(@Ctx() { payload }: NodeContext) {
    console.log(payload);
    return `your user id is: ${payload!.userId}`;
  }

  @Query(() => [User])
  users() {
    return User.find();
  }

  @Mutation(() => SignInResponse)
  async signIn(
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<SignInResponse> {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error("User Not Found!");
    }

    const valid = await compare(password, user.password);

    if (!valid) {
      throw new Error("Wrong Password!");
    }

    const accessToken = createAccessToken(user);

    return {
      success: true,
      message: "Sign-in successful!",
      accessToken
    };
  }

  @Mutation(() => SignUpResponse)
  async signUp(
    @Arg("username") username: string,
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<SignUpResponse> {
    if (!isEmail(email)) {
      throw new Error("Invalid email format");
    }
  
    const hashPassword = await hash(password, 12);
  
    try {
      await User.insert({
        username,
        email,
        password: hashPassword,
      });
  
      return { success: true, message: "Sign-up successful!" };
    } catch (error) {
      console.log(error);
      throw new Error("Failed to sign up");
    }
  }
  
}
