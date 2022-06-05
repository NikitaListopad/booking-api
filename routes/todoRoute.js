const apiRouter = require('express').Router();
const todoController = require('../controllers/todoController')

// apiRouter.get('/user/:id/collection', todoController.fetchTodos);
apiRouter.get('/collection', todoController.fetchTodos);

apiRouter.post('/add', todoController.createTodo);

module.exports = apiRouter;