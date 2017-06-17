

exports.up = function(knex, Promise) {
  return knex.schema.createTable("user", (table) =>{
    table.increments('id').unsigned().primary();
    table.text('email');
    table.text('password');
    table.timestamps('created_at');
    table.boolean('is_active').defaultTo(true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("user");
};
