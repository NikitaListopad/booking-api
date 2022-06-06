const { v4: uuid } = require('uuid')
const { User: UserModel } = require('../models/userModel')

const getUsers = async () => {
    return await UserModel.fetchAll();
}

const getUser = async (id) => {
    return await UserModel.where({id}).fetch();
}

const createUser = async (data) => {
    const user = await UserModel.forge().save({
        id: uuid(),
        ...data
    })

    return user.toJSON();
}

const findExistedUser = async ({username = null, email}) => {
    const user = await UserModel.query((qb) => {

        if(email) {
            qb.where('email', email)
        }

        if(username) {
            qb.orWhere('username', username);
        }
    }).fetchAll();

    return user.toJSON();
}


module.exports = {
    getUsers,
    createUser,
    getUser,
    findExistedUser
}