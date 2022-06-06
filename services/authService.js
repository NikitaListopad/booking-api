const userRepo = require('../repositories/userRepository');
const tokenRepo = require('../repositories/tokenRepository');
const tokenService = require('../services/tokenService');
const UserDto = require('../helpers/dtos/user-dto');


const registration = async (data) => {

    const {username, email} = data;

    const existedUser = await userRepo.findExistedUser(email, username);

    const newUser = await userRepo.createUser(data);

    const userData = new UserDto(newUser.toJSON());

    const {accessToken, refreshToken} = await tokenService.generateToken({...userData});

    const token = await tokenRepo.saveToken(userData.id, refreshToken);

    return {
        accessToken, refreshToken, ...userData
    };
}

module.exports = {
    registration,
}