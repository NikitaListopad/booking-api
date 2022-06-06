exports.up = function(knex) {
  return knex.schema.hasTable('users').then((exist) => {
      if (!exist) {
          return knex.schema.createTable('users', (t) => {
              t.uuid('id').primary().notNullable();
              t.text('username').notNullable().unique();
              t.string('password').notNullable();
              t.text('email').unique().notNullable();
              t.timestamps(true, true)
          })
      }
  })
};


exports.down = function(knex) {
  return knex.schema.hasTable('users').then((exist) => {
      if (exist) {
          return knex.schema.dropTable('users');
      }
  })
};
