

exports.up = function(knex) {
  return knex.schema
  .createTable("user_tokens", (table) => {
      table.increments();
      table.integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .index();

      table.string("token").notNullable();
  })
};


exports.down = function (knex) {
    return knex.schema
      .dropTable("user_tokens")
  };