const HOTELS = 'hotels';
const ID = 'id';
const TITLE = 'title';
const PRICE = 'price';
const PHOTO = 'photo';

exports.up = function(knex) {
    return knex.schema.hasTable(HOTELS).then((exist) => {
        if (!exist) {
            return knex.schema.createTable(HOTELS, (t) => {
                t.uuid(ID).primary().notNullable();
                t.string(TITLE).notNullable();
                t.string(PRICE).notNullable();
                t.string(PHOTO).notNullable();
                t.timestamps(true, true)
            })
        }
    })
};


exports.down = function(knex) {
    return knex.schema.hasTable(HOTELS).then((exist) => {
        if (exist) {
            return knex.schema.dropTable(HOTELS);
        }
    })
};
