const { createUser } = require('../service/user.service')
const { userRegisterError } = require('../const/err.type')
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
        const { user_name, password } = ctx.request.body
        ctx.body = {
            code: 0,
            msg: '用户登录成功',
            data: ''
        }
    }
}

module.exports = new UserController()