const authService = require('../services/authService');
const {validationResult} = require('express-validator');
const ApiError = require('../exceptions/api-error')

const registration = async (req, res, next) => {
    const {email, username, password} = req.body;
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return next(ApiError.BadRequest('Validation error', errors.array()))
        }

        const user = await authService.registration({ email , username, password });

        res.cookie('refreshToken', user.refreshToken, {maxAge: 30* 24 * 60 * 60 * 1000, httpOnly: true})

        return res.status(200).send(user)
    } catch (e) {
        next(e);
    }
};

const login = async (req, res, next) => {
    const {email, password} = req.body;
    try {
        const userData = await authService.login({email, password});

        res.cookie('refreshToken', userData.refreshToken, {maxAge: 30* 24 * 60 * 60 * 1000, httpOnly: true})

        return res.status(200).send(userData)
    } catch (e) {
        next(e);

    }
};

const logout = async (req, res, next) => {
    try {
        const {refreshToken} = req.cookies;

        await authService.logout(refreshToken);
        res.clearCookie('refreshToken');

        return res.status(200).send({message: 'Success'})
    } catch (e) {
        next(e);

    }
};

const refreshTokens = async (req, res, next) => {
    try {
        const {refreshToken} = req.cookies;
        const userData = await authService.refresh(refreshToken);
        res.cookie('refreshToken', userData.refreshToken, {maxAge: 30* 24 * 60 * 60 * 1000, httpOnly: true})

        return res.status(200).send(userData)
    } catch (e) {
        next(e);
    }
};

module.exports = {
    refreshTokens,
    login,
    logout,
    registration,
}
