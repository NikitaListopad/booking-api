const AUTH_TOKENS = 'auth_tokens';
const ID = 'id';
const REFRESH_TOKEN = 'refresh_token';
const USER_ID = 'user_id';
const USERS = 'users';
const CASCADE = 'cascade';

exports.up = function(knex) {
    return knex.schema.hasTable(AUTH_TOKENS).then((exist) => {
        if (!exist) {
            return knex.schema.createTable(AUTH_TOKENS, (t) => {
                t.uuid(ID).primary().notNullable();
                t.text(REFRESH_TOKEN).notNullable();
                t.timestamps(true, true)
                t.uuid(USER_ID);
                t.foreign(USER_ID).references(ID).inTable(USERS).onDelete(CASCADE);
            })
        }
    })
};


exports.down = function(knex) {
    return knex.schema.hasTable(AUTH_TOKENS).then((exist) => {
        if (exist) {
            return knex.schema.dropTable(AUTH_TOKENS);
        }
    })
};
