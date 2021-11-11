import {Model} from "objection";
import knex from "../knex";


export class Users extends Model{
    static get tableName(){
        return "users"
    }
    
    id!: number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    is_active: boolean;
    avatar: string;

    created_at: Date; 
    created_by: string;

    updated_at: Date;
    updated_by: string;

}

export const TodosModel = Users.bindKnex(knex) 