const userRepo = require('../repositories/userRepository');

const getAllUsersService = async () => {
    const usersCollection = await userRepo.getUsers();

    return usersCollection.toJSON();
}

const getUserService = async id => {
    const fetchedUser = await userRepo.getUser(id);

    return fetchedUser.toJSON();
}

const createUserService = async data => {
    const newUser = await userRepo.createUser(data);

    return newUser.toJSON();
}

module.exports = {
    getAllUsersService,
    createUserService,
    getUserService
}