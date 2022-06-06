const { bookshelf } = require('../config')

const Token = bookshelf.model('Token', {
    tableName: 'auth_tokens',
    idAttribute: 'id',
})

module.exports = {
    Token
}