const todoService = require('../services/todoService');


const fetchTodos = async (req, res) => {
    const { id } = req.params;

    const todos = await todoService.fetchTodos(id);

    res.status(200).send(todos)
}

const createTodo = async (req, res) => {
    const { content } = req.body;

    const todoItem = await todoService.createTodo(content);

    res.status(200).send(todoItem);
}

module.exports = {
    createTodo,
    fetchTodos
}