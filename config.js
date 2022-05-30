const dotenv = require('dotenv');
const knex = require('./knex')

dotenv.config();

const bookshelf = require('bookshelf') (knex)


module.exports = {
    port: process.env.PORT,
    bookshelf
}