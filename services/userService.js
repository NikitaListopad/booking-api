const userRepo = require('../repositories/userRepository');

const createUserService = async (data) => {
    const newUser = await userRepo.createUser(data);

    return newUser.toJSON();
}

module.exports = {
    createUserService
}