const { Todo: TodoModel } = require('../models/todoModel');
const { v4: uuid } = require('uuid')

const addTodo = async content => {
    return await TodoModel.forge().save({
        id: uuid(),
        content,
        user_id: '0de43dba-77b0-44c2-b172-d08f728f9ac8'
    });
}

const getTodosCollection = async id => {
    return await TodoModel.fetchAll();
}

module.exports = {
    addTodo,
    getTodosCollection,
}