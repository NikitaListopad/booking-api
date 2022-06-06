const userRepo = require('../repositories/userRepository');
const tokenRepo = require('../repositories/tokenRepository');
const tokenService = require('../services/tokenService');
const UserDto = require('../helpers/dtos/user-dto');
const ApiError = require('../exceptions/api-error');

const registration = async (data) => {

    const {username, email} = data;

    const existedUser = await userRepo.findExistedUser(username,email).then(res => res.toJSON());

    if (!!existedUser.length) {
        const invalidParam = existedUser[0].username === username ? username : email;

        throw ApiError.BadRequest(`User with ${invalidParam === username ? 'username' : 'email'} ${invalidParam} is already exist`)
    }

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