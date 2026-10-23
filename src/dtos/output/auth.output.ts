import { Field, ObjectType } from "type-graphql"
import { UserModel } from "../../models/user.model"

@ObjectType()
export class RegisterOutPut {
    @Field(()=> String)
    token!: string
    
    @Field(()=> String)
    user!: UserModel
} 