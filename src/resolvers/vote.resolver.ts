import { Arg, Mutation, Resolver } from "type-graphql";
import { VoteModel } from "../models/vote.model";
import { GqlUser } from "../graphql/decorators/user.decorator";
import { VoteService } from "../services/vote.service";
import { User } from "@prisma/client";

@Resolver(()=> VoteModel)
export class VoteResolver {
    private voteService = new VoteService()

    @Mutation(() => Boolean)
    async toggleVote (
        @Arg('ideaId', () => String) ideaId: string,
        @GqlUser() user: User
    ): Promise<boolean> {
        return this.voteService.toggleVote(user.id, ideaId)
    }
}