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

const validateAccessToken = token => {
    try {
        return  jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    } catch (e) {
        return null;
    }
}

const validateRefreshToken = token => {
    try {
        return  jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    } catch (e) {
        return null;
    }
}

module.exports = {
    generateToken,
    validateAccessToken,
    validateRefreshToken
}