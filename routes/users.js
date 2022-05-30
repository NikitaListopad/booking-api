const apiRouter = require('express').Router();
const userController = require('../controllers/userController')

apiRouter.get('/:id', userController.getTargetUser);

apiRouter.post('/create', userController.createNewUser);

module.exports = apiRouter;