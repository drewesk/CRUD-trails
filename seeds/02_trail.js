
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE trail RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('trail').insert([
        {name: 'apache', rating: 4, length: 2.1, user_id:1},
        {name: 'Yukon', rating: 5, length: 3.1, user_id:2},
        {name: 'Mineral', rating: 1, length: 6.1, user_id:3},
        {name: 'Platte', rating: 4, length: 5.1, user_id:4}
      ]);
    });
};
