const TodoRepo = require('../repositories/todoRepository');

const fetchTodos = async id => {
    const todos = await TodoRepo.getTodosCollection(id);

    console.log(todos)

    return todos.toJSON();
}

const createTodo = async content => {
    console.log(content)
    const newTodo = await TodoRepo.addTodo(content);

    return newTodo.toJSON();
}

module.exports = {
    fetchTodos,
    createTodo
}