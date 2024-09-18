const { createUser, getUserInfo, updateUserById } = require('../service/user.service')
const { userRegisterError } = require('../const/err.type')
const { JWT_SECRET } = require('../config/config.default')
const jwt = require('jsonwebtoken')

class UserController {

    async register(ctx, next) {
        const { user_name, password } = ctx.request.body
        try {
            const res = await createUser(user_name, password)
            ctx.body = {
                code: 0,
                msg: '用户注册成功',
                data: res
            }
        } catch (err) {
            console.error(err)
            ctx.app.emit('error', userRegisterError, ctx)
        }
    }

    async login(ctx, next) {
        const { user_name } = ctx.request.body
        try {
            const { password, ...res } = await getUserInfo({ user_name })
            ctx.body = {
                code: 0,
                msg: '用户登录成功',
                data: {
                    token: 'Bearer ' + jwt.sign(res, JWT_SECRET, { expiresIn: '1d' })
                }
            }
        } catch (err) {
            console.error('用户登录失败', err)
        }
    }

    async forgetpassword(ctx, next) {
        const { id, password } = ctx.request.body
        try {
            await updateUserById({ id, password })
            ctx.body = {
                code: 0,
                msg: '修改密码成功',
                data: ''
            }
        } catch (err) {
            console.log('修改失败', err)
            ctx.body = {
                code: 0,
                msg: '修改失败',
                data: ''
            }
        }
    }
}

module.exports = new UserController()