const userRepo = require('../repositories/userRepository');
const ApiError = require('../exceptions/api-error');

const getAllUsers = async () => {
    return await userRepo.getUsers();
}

const getUser = async id => {
    if (!id) {
        throw ApiError.BadRequest(`Can not find user without ID param`);
    }

    const fetchedUser = await userRepo.getUser(id);

    if (!fetchedUser) {
        throw ApiError.BadRequest('User with current ID is not existed');
    }

    return fetchedUser.toJSON();
}

const createUser = async data => {
    const newUser = await userRepo.createUser(data);

    return newUser.toJSON();
}

module.exports = {
    getAllUsers,
    createUser,
    getUser
}