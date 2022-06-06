exports.up = function(knex) {
    return knex.schema.hasTable('auth_tokens').then((exist) => {
        if (!exist) {
            return knex.schema.createTable('auth_tokens', (t) => {
                t.uuid('id').primary().notNullable();
                t.text('refresh_token').notNullable();
                t.timestamps(true, true)
                t.uuid('user_id');
                t.foreign('user_id').references('id').inTable('users').onDelete('cascade');
            })
        }
    })
};


exports.down = function(knex) {
    return knex.schema.hasTable('auth_tokens').then((exist) => {
        if (exist) {
            return knex.schema.dropTable('auth_tokens');
        }
    })
};
