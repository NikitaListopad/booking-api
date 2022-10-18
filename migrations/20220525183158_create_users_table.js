const ID = 'id';
const USERNAME = 'username';
const PASSWORD = 'password';
const USERS = 'users';
const EMAIL = 'email';

exports.up = function(knex) {
  return knex.schema.hasTable(USERS).then((exist) => {
      if (!exist) {
          return knex.schema.createTable(USERS, (t) => {
              t.uuid(ID).primary().notNullable();
              t.string(USERNAME).notNullable().unique();
              t.string(PASSWORD).notNullable();
              t.text(EMAIL).unique().notNullable();
              t.timestamps(true, true)
          })
      }
  })
};


exports.down = function(knex) {
  return knex.schema.hasTable(USERS).then((exist) => {
      if (exist) {
          return knex.schema.dropTable(USERS);
      }
  })
};
