const userService = require('../services/userService');

const fetchAllUsers = async (req, res, next) => {
    try {
        const usersCollection = await userService.getAllUsers();

        res.status(200).json(usersCollection);
    } catch (e) {
        next(e);
    }
}

const fetchTargetUser = async (req, res, next) => {
    try {
        const { id } = req.params;

        const user = await userService.getUser(id);

        res.status(200).send(user);
    } catch (e) {
        next(e);
    }
}

const createNewUser = async (req, res, next) => {
    try {
        const { name, surname, email } = req.body;

        const result = await userService.createUser({ name, surname, email});

        res.status(200).send(result);
    } catch (e) {
        next(e);
    }
}

module.exports = {
    fetchAllUsers,
    fetchTargetUser,
    createNewUser
}