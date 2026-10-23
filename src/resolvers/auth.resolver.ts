import { Arg, Mutation, Resolver } from "type-graphql";
import { RegisterInput } from "../dtos/input/auth.input";
import { RegisterOutPut } from "../dtos/output/auth.output";

@Resolver()
export class AuthResolver {
  @Mutation(() => RegisterOutPut)
  async register(
    @Arg("data", () => RegisterInput) data: RegisterInput,
  ): Promise<RegisterOutput> {}
}
