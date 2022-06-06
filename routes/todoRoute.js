const apiRouter = require('express').Router();
const todoController = require('../controllers/todoController');
const authMiddleware = require('../middlewares/auth-middleware');

// apiRouter.get('/user/:id/collection', todoController.fetchTodos);
apiRouter.get('/collection', authMiddleware, todoController.fetchTodos);

apiRouter.post('/add', authMiddleware, todoController.createTodo);

module.exports = apiRouter;