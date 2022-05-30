exports.up = function(knex) {
  return knex.schema.hasTable('users').then((exist) => {
      if (!exist) {
          return knex.schema.createTable('users', (t) => {
              t.uuid('id').primary().notNullable();
              t.text('name').notNullable();
              t.text('surname').notNullable();
              t.text('email').notNullable();
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
