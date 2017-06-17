
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE "user" RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex("user").insert([
        {email:'j@JJJJJJJ.com', password:'secret', is_active:true},
        {email:'kjdafn@skjdf.com', password:'secre2t', is_active:true},
        {email:'dragon44@Jfdisme.com', password:'sec1ret', is_active:true},
        {email:'j@JJJJJfdgsdfs.com', password:'secr3et', is_active:true}
      ]);
    });
};
