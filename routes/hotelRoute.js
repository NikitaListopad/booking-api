const apiRouter = require('express').Router();
const hotelController = require('../controllers/hotelController');
const authMiddleware = require('../middlewares/auth-middleware');


apiRouter.get('/target/:id', hotelController.fetchHotel);
apiRouter.get('/collection', hotelController.fetchHotelsCollection);

module.exports = apiRouter;