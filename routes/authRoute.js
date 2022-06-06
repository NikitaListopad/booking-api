const apiRouter = require('express').Router();
const authController = require('../controllers/authController')

apiRouter.post('/sign-up', authController.registration);

apiRouter.post('/sign-in', authController.login);

apiRouter.post('/logout', authController.logout);

apiRouter.get('/refresh', authController.refreshTokens);

module.exports = apiRouter;