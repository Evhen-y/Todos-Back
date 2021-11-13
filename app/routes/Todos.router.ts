import * as Router from "koa-joi-router";
import {fetchAllTodosCtr, fetchTodoByIdCtr, createTodoByIdCtr, updateTodoByIdCtr, removeTodoByIdCtr } from "../controllers/Todos.Controller";
import {todosResponse, errorValidators } from "../shared/validator"

const todosRouter = Router();
todosRouter.prefix("/todos")

todosRouter.route({
    method: "get",
    path: "/",
    handler: fetchAllTodosCtr
})

todosRouter.route({
    method: "get",
    path: "/:id",
    validate:{
        output:{
            200: {
                body: todosResponse
            },
            500: {
                body: errorValidators
            },
            400: {
                body: errorValidators
            }
        }
    },
    handler: fetchTodoByIdCtr
})

todosRouter.route({
    method: "post",
    path: "/",
    handler: createTodoByIdCtr
})

todosRouter.route({
    method: "put",
    path:  "/:id",
    handler: updateTodoByIdCtr
})

todosRouter.route({
    method: "delete",
    path:  "/:id",
    handler: removeTodoByIdCtr
})

export default () => todosRouter