
exports.up = function(knex) {
    return knex.schema.table("user_tokens", table => {
        table.boolean("is_active")
          .notNullable()
          .defaultTo(true);
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.table("user_tokens", table => {
          table.dropColumn("is_active");
      })
  };
  