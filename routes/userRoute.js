const apiRouter = require('express').Router();
const userController = require('../controllers/userController')
const authMiddleware = require('../middlewares/auth-middleware');

apiRouter.get('/target/:id', authMiddleware, userController.fetchTargetUser);

apiRouter.get('/collection', authMiddleware, userController.fetchAllUsers);


module.exports = apiRouter;