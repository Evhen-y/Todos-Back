import {TodosModel} from "../models/Todos.model";

export const fetchAllTodos = async () => {
    return TodosModel.query()
    .select(["id", "text", "completed"])
    .where({is_active: true})
}

export const fetchTodoById = async (id:number) => {
    return TodosModel.query()
    .findById(id)
}

export const creatTodoBy = async (todo:any) => {
    return TodosModel.query()
    .insertAndFetch(todo)
}

export const updateTodoByID = async (id:number, todo:any) => {
    return TodosModel.query().update(todo).where({id})

}

export const removeTodoByID = async (id:number) => {
    // soft delite
    return TodosModel.query().update({is_active: false}).where({id})
    // hard delite
     return TodosModel.query().deleteById(id)
}