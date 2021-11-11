// Update with your config settings.

module.exports = {
    client: 'pg',
    connection: {
      host: "localhost",
    database: "todosDB",
    user: "postgres",
    password: "1",
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};