const apiRouter = require('express').Router();
const hotelController = require('../controllers/hotelController');
const authMiddleware = require('../middlewares/auth-middleware');

// apiRouter.get('/user/:id/collection', todoController.fetchTodos);
// apiRouter.get('/collection', authMiddleware, hotelController.fetchHotels);
apiRouter.get('/collection', hotelController.fetchHotels);

apiRouter.post('/add', authMiddleware, hotelController.createTodo);

module.exports = apiRouter;