const tokenService = require('../services/tokenService');
const authService = require('../services/authService');

const registration = async (req, res) => {
    const {email, username, password} = req.body;

    const user = await authService.registration({ email , username, password });

    console.log('Test user', user);

    res.cookie('refreshToken', user.refreshToken, {maxAge: 30* 24 * 60 * 60 * 1000, httpOnly: true})

    return res.status(200).send(user)
};

const login = async (req, res) => {

};

const logout = async (req, res) => {

};

const refreshTokens = async (req, res) => {

};

module.exports = {
    refreshTokens,
    login,
    logout,
    registration
}
