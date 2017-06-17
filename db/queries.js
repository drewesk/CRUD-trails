const knex = require('../knex');

module.exports = {
   getAll: () => {
    return knex("user");
  },
  getOne: (id) => {
    return knex("user").where('id', id).first();
  },
  getResourcesByUser: (id) => {
    return knex("trail").join("user", 'trail.user_id', '=', 'user.id').where('user.id', id);
  },
  create: (trail) => {
    return knex("trail").insert(trail);
  }
}
