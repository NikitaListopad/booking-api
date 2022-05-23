const apiRouter = require('express').Router();
const userController = require('../controllers/userController')

apiRouter.get('/:id', async (req,res) => {
    const user = await userController.getTargetUser();
    console.log(user)

    res.status(200).send(user);
});

module.exports = apiRouter;