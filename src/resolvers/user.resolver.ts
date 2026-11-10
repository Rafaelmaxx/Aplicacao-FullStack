import { Arg, Mutation, Query, Resolver, UseMiddleware } from "type-graphql";
import { UserModel } from "../models/user.model";
import { UserService } from "../services/user.service";
import { IsAuth } from "../middlewares/auth.middlewares";
import { CreateUserInput } from "../dtos/input/user.input";

@Resolver(() => UserModel)
@UseMiddleware(IsAuth)
export class UserServiceResolver {
  private userService = new UserService();

  @Mutation(() => UserModel)

  async createUser(
    @Arg("data", () => CreateUserInput) data: CreateUserInput,
  ): Promise<UserModel> {
    return this.userService.createUSer(data);
  }


  @Query(() => UserModel)
  @UseMiddleware(IsAuth)
  async getUser(@Arg("id", () => String) id: string): Promise<UserModel> {
    return this.userService.findUser(id);
  }
}
