import {fetchAllTodos, fetchTodoById, creatTodoBy, updateTodoByID, removeTodoByID } from "../services/Todos.Services";
import {ParameterizedContext} from "koa";


export const fetchAllTodosCtr = async(ctx: ParameterizedContext) => {
        console.log('request')
        const todos = await fetchAllTodos()
        ctx.ok(todos)

    

}

export const fetchTodoByIdCtr = async(ctx: ParameterizedContext)=>{
  const {params: { id } }=ctx
    try{
        const todo = await fetchTodoById(id)
        ctx.ok(todo)

    }catch (err){
        ctx.throw(err);
        
    }
}

export const createTodoByIdCtr = async(ctx: ParameterizedContext) => {
    const { body }: any=ctx.request
    try{
        const createTodo = await creatTodoBy(body)
        ctx.ok(createTodo)

    }catch (err){
        ctx.throw(err);
        
    }
}

export const updateTodoByIdCtr = async(ctx: ParameterizedContext)=>{
    const { body }: any = ctx.request
    const { params : {id}} = ctx
    try{
        const updateTodo = await updateTodoByID(id, body)
        ctx.ok(updateTodo)

    }catch (err){
        ctx.throw(err);
        
    }
}


export const removeTodoByIdCtr = async(ctx: ParameterizedContext)=>{
    const { params : {id}} = ctx
    try{
        const deletTodo = await removeTodoByID(id)
       
    // hard remove {ok:1} or {ok:0}
    //  soft delete dodo entity
       
        ctx.ok(deletTodo )

    }catch (err){
        ctx.throw(err);
        
    }

}

