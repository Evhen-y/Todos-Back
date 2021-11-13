import {Model} from "objection";
import knex from "../knex";
import {Users} from "./Users.model"

export class UserToken extends Model{
    static get tableName(){
        return "user_token"
    }
    id!: number;
    user_id: number;
    user?: Users;

    token: string;

    static relationMappings = {
        user:{
            relation: Model.HasOneRelation,
            modelClass: Users,
            join: {
                from:"user_token.user_id",
                to: "users_id"
            }
        }
    }
} 

export const UserTokensModel = UserToken.bindKnex(knex)