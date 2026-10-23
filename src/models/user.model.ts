import { Field, GraphQLISODateTime, ID, ObjectType } from "type-graphql";

@ObjectType()

export class UserModel {
    @Field(()=> ID)
    id!: string
    
    @Field(()=> String)
    name!: string
    
    @Field(()=> String)
    email!: string
    
    @Field(()=> String)
    password!: string
    
    @Field(()=> GraphQLISODateTime)
    createAt!: Date
    
    @Field(()=> GraphQLISODateTime)
    updateAt!: Date
}