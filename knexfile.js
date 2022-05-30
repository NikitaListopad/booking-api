require('dotenv').config();

module.exports = {

  development: {
    client: process.env.DB_CONNECTION,

    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    },
    debug: true,

    pool: {
      min: 2,
      max: 10,
    },

    migrations: {
      tableName: 'knex_migrations'
    },

    seeds: {
      directory: './seeds'
    }
  },

};
