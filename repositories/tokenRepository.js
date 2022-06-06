const {Token : TokenModel} = require('../models/tokenModel');
const { v4: uuid } = require('uuid')

const findToken = async (userId) => {
    return await TokenModel.where({
        user_id: userId
    }).fetchAll();
}

const updateToken = async (userId, token) => {

    const oldToken =  await TokenModel.where({
        user_id: userId
    }).fetch();

    return await TokenModel.where({user_id: userId}).save({
        ...oldToken.toJSON(), refresh_token: token
    }, { method: 'UPDATE' })
}

const saveToken = async (userId, refreshToken) => {

    const existToken = await findToken(userId);

    if (!!existToken.toJSON().length) {
        return await updateToken(userId,refreshToken)
    }

    return await TokenModel.forge().save({
        id: uuid(),
        refresh_token: refreshToken,
        user_id: userId
    });
}

const removeToken = async (token) => {
    return await TokenModel.where({refresh_token: token}).destroy();
}

module.exports = {
    saveToken,
    updateToken,
    findToken,
    removeToken
}
