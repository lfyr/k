const User = require('../model/user.model')

class UserService {

    async createUser(user_name, password) {
        // todo 写入db
        const res = await User.create({
            user_name: user_name,
            password: password,
        })
        return res.dataValues
    }

    async getUserInfo({ id, user_name, password }) {
        const whereOpt = {}
        id && Object.assign(whereOpt, { id })
        user_name && Object.assign(whereOpt, { user_name })
        password && Object.assign(whereOpt, { password })
        const res = await User.findOne({
            attributes: ['id', 'user_name', 'password'],
            where: whereOpt
        })
        return res ? res.dataValues : null
    }
}
module.exports = new UserService()