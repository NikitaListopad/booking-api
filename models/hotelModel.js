const { bookshelf } = require('../config')

const Hotel = bookshelf.model('Hotel', {
    tableName: 'hotels',
    idAttribute: 'id',
})

module.exports = {
    Hotel
}