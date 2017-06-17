
exports.up = function(knex, Promise) {
  return knex.schema.createTable('trail', (table)=>{
    table.increments('id').primary();
    table.text('name').notNullable();
    table.integer('rating').notNullable();
    table.float('length').notNullable();
    table.integer('user_id').references('user.id').unsigned().onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('trail');
};
