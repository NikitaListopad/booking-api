const { bookshelf } = require('../config')

const User = bookshelf.model('User', {
    tableName: 'users',
    idAttribute: 'id',
    hidden: ['password']
})

module.exports = {
    User
}