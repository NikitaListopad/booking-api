const { bookshelf } = require('../config')

const Todo = bookshelf.model('Todo', {
    tableName: 'todos',
    idAttribute: 'id',
})

module.exports = {
    Todo
}