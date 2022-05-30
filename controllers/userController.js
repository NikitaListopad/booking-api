const userService = require('../services/userService');

const fetchAllUsers = async (req, res) => {
    const usersCollection = await userService.getAllUsersService();

    res.status(200).send(usersCollection);
}

const fetchTargetUser = async (req, res) => {
    const { id } = req.params;

    const user = await userService.getUserService(id);

    res.status(200).send(user);
}

const createNewUser = async (req, res) => {
    const { name, surname, email } = req.body;

    const result = await userService.createUserService({ name, surname, email});

    res.status(200).send(result);
}

module.exports = {
    fetchAllUsers,
    fetchTargetUser,
    createNewUser
}