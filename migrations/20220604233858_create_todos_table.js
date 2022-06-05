exports.up = function(knex) {
    return knex.schema.hasTable('todos').then((exist) => {
        if (!exist) {
            return knex.schema.createTable('todos', (t) => {
                t.uuid('id').primary().notNullable();
                t.text('content').notNullable();
                t.timestamps(true, true)
                t.uuid('user_id');
                t.foreign('user_id').references('id').inTable('users').onDelete('cascade');
            })
        }
    })
};


exports.down = function(knex) {
    return knex.schema.hasTable('todos').then((exist) => {
        if (exist) {
            return knex.schema.dropTable('todos');
        }
    })
};
