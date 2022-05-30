const { bookshelf } = require('../config')

const User = bookshelf.model('User', {
    tableName: 'users',
    idAttribute: 'id',
})

module.exports = {
    User
}