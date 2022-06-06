const { v4: uuid } = require('uuid')
const { User: UserModel } = require('../models/userModel')

const getUsers = async () => {
    return await UserModel.fetchAll();
}

const getUser = async (id) => {
    return await UserModel.where({id}).fetch();
}

const createUser = async (data) => {
    return await UserModel.forge().save({
        id: uuid(),
        ...data
    })
}

const findExistedUser = async (username, email) => {
    return await UserModel.query((qb) => {
        qb.where('username', username).orWhere('email', email);
    }).fetchAll();
}

module.exports = {
    getUsers,
    createUser,
    getUser,
    findExistedUser
}