const todoService = require('../services/todoService');
const mocks = require('../mock/hotelsMock');

const fetchHotels = async (req, res) => {
    const { id } = req.params;

    console.log('Here ok')

    const hotels = mocks.generateHotelsArray(15);

    res.status(200).send(hotels)
}

const createTodo = async (req, res) => {
    const { content } = req.body;

    const todoItem = await todoService.createTodo(content);

    res.status(200).send(todoItem);
}

module.exports = {
    createTodo,
    fetchHotels
}