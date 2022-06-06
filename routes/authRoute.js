const apiRouter = require('express').Router();
const authController = require('../controllers/authController')
const {body} = require('express-validator')

const validationEmail = body('email').isEmail();
const validationPassword = body('password').isLength({min: 5, max: 32})

apiRouter.post('/sign-up', validationPassword, validationEmail,authController.registration);

apiRouter.post('/sign-in', validationPassword, validationEmail,authController.login);

apiRouter.post('/logout', authController.logout);

apiRouter.get('/refresh', authController.refreshTokens);

module.exports = apiRouter;