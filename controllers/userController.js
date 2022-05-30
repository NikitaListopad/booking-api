const userService = require('../services/userService');

const getTargetUser = async (req, res) => {
    return  {id: 1, name: 'Mykyta'};
}

const createNewUser = async (req, res) => {

    const { name, surname, email } = req.body;

    const result = await userService.createUserService({ name, surname, email});

    console.log('Controller', result)

    res.status(200).send(result);
}

module.exports = {
    getTargetUser,
    createNewUser
}