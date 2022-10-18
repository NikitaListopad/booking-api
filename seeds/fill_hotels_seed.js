const mocks = require('../mock/hotelsMock')
const HOTELS = 'hotels';

const hotelsArray = mocks.generateHotelsArray(50);

exports.seed = function(knex) {
  return knex(HOTELS).del()
    .then(function () {
      return knex.batchInsert(HOTELS, hotelsArray, 50);
    });
};