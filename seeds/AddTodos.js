const path = require("path");

exports.seed = async(knex) => {
    const fileName = path.basename(__filename)

    const existSeed = await knex("knex_seeds_lock").where({file_name: fileName}).first()

    if(!existSeed) {
        const todos = [
            { title: "Test 001 "},
            { title: "Test 002 "},
            { title: "Test 003 "}
        ]
        
    await Promise.all(todos.map( todo => {
        return knex("todos").insert({created_by: "zheka", ...todo })
    }))
    await knex("knex_seeds_lock").insert({file_name: fileName})
    }

}