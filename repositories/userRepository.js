const { v4: uuid } = require('uuid')
const { User: UserModel } = require('../models/userModel')

const createUser = async (data) => {
    return await UserModel.forge().save({
        id: uuid(),
        ...data
    })
}

module.exports = {
    createUser
}