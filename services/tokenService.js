const jwt = require('jsonwebtoken');



const generateToken = data => {
    const accessToken = jwt.sign(data, process.env.JWT_ACCESS_SECRET, {
        expiresIn: '60m'
    });

    const refreshToken = jwt.sign(data, process.env.JWT_REFRESH_SECRET, {
        expiresIn: '30d'
    });

    return {
        accessToken,
        refreshToken
    }
}

module.exports = {
    generateToken,
}