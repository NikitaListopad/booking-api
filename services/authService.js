const userRepo = require('../repositories/userRepository');
const tokenRepo = require('../repositories/tokenRepository');
const tokenService = require('../services/tokenService');
const UserDto = require('../helpers/dtos/user-dto');
const ApiError = require('../exceptions/api-error');
const bcrypt = require('bcrypt');

const registration = async (data) => {

    const {username, email, password} = data;

    const [existedUser] = await userRepo.findExistedUser({username, email});

    if (!!existedUser) {
        const invalidParam = existedUser.username === username ? username : email;

        throw ApiError.BadRequest(`User with ${invalidParam === username ? 'username' : 'email'} ${invalidParam} is already exist`)
    }

    const hashPassword = await bcrypt.hash(password, 3)

    const newUser = await userRepo.createUser({...data, password: hashPassword});

    const userData = new UserDto(newUser);

    const {accessToken, refreshToken} = await tokenService.generateToken({...userData});

    await tokenRepo.saveToken(userData.id, refreshToken);

    return {
        accessToken, refreshToken, user: userData
    };
}

const login = async ({email, password}) => {

    const [user] = await userRepo.findExistedUser({email});

    if (!user) {
        throw ApiError.BadRequest(`User with email ${email} is not registrated`);
    }

    const isPassEquals = await bcrypt.compare(password, user.password)

    if (!isPassEquals) {
        throw ApiError.BadRequest('Wrong password');
    }

    const userDto = new UserDto(user);

    const {accessToken, refreshToken} = tokenService.generateToken({...userDto});

    await tokenRepo.saveToken(userDto.id, refreshToken);


    return {
        accessToken, refreshToken, user: userDto
    };
}

const logout = async refreshToken => {
    return await tokenRepo.removeToken(refreshToken)
}

const refresh = async token => {
    if (!token) {
        throw ApiError.UnauthorizedError()
    }
    const userData = tokenService.validateAccessToken(token);
    const existedToken = await tokenRepo.findToken(token);

    if (!userData || !existedToken) {
        throw ApiError.UnauthorizedError();
    }

    const user = await userRepo.getUser(userData.id);

    const userDto = new UserDto(user);

    const {accessToken, refreshToken} = tokenService.generateToken({...userDto});

    await tokenRepo.saveToken(userDto.id, refreshToken);

    return {
        accessToken, refreshToken, user: userDto
    };
}

module.exports = {
    registration,
    login,
    logout,
    refresh
}