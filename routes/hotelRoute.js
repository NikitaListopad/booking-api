const apiRouter = require('express').Router();
const hotelController = require('../controllers/hotelController');
const authMiddleware = require('../middlewares/auth-middleware');


apiRouter.get('/collection', hotelController.fetchHotels);

module.exports = apiRouter;