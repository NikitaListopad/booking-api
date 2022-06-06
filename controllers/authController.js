const tokenService = require('../services/tokenService');
const authService = require('../services/authService');

const registration = async (req, res, next) => {
    const {email, username, password} = req.body;
    try {
        const user = await authService.registration({ email , username, password });

        res.cookie('refreshToken', user.refreshToken, {maxAge: 30* 24 * 60 * 60 * 1000, httpOnly: true})

        return res.status(200).send(user)
    } catch (e) {
        next(e);
    }
};

const login = async (req, res, next) => {
    try {

    } catch (e) {
        next(e);

    }
};

const logout = async (req, res, next) => {
    try {

    } catch (e) {
        next(e);

    }
};

const refreshTokens = async (req, res) => {

};

module.exports = {
    refreshTokens,
    login,
    logout,
    registration
}
