const knex = require('../knex');

module.exports = {
   getAll: () => {
    return knex("user");
  },
  getOne: (id) => {
    return knex("user").where('id', id).first();
  },
  getResourcesByUser: (id) => {
    return knex("user").join("trail", 'user.id', '=', 'trail.user_id').where('user.id', id);
  },
  create: (trail) => {
    return knex("trail").insert(trail);
  },
  updateUser: (trail_id, trail) => {
    return knex('user').where('id', trail_id).update(trail, '*');
  },
  deleteUser: (trail_id) => {
    return knex('user').where('id', trail_id).del();
  },
  updateTrail: (trail_id, trail) => {
    return knex('trail').where('id', trail_id).update(trail, '*');
  },
  deleteTrail: (trail_id) => {
    return knex('trail').where('id', trail_id).del();
  }
}
