const apiRouter = require('express').Router();
const userController = require('../controllers/userController')

apiRouter.get('/:id', userController.fetchAllUsers);

apiRouter.get('/collection', userController.fetchTargetUser);

apiRouter.post('/create', userController.createNewUser);

module.exports = apiRouter;