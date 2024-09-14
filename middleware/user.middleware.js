const { getUserInfo } = require('../service/user.service')
const { userFormateError, userAlreadyExited } = require('../const/err.type')
const bcrypt = require('bcryptjs')
const userValidator = async (ctx, next) => {
    const { user_name, password } = ctx.request.body
    if (!user_name || !password) {
        console.error('用户名或密码为空', ctx.request.body)
        ctx.app.emit('error', userFormateError, ctx)
        return
    }
    await next()
}

const verifyUser = async (ctx, next) => {
    const { user_name } = ctx.request.body
    if (await getUserInfo({ user_name })) {
        ctx.app.emit('error', userAlreadyExited, ctx)
        return
    }
    await next()
}

const crpytPassword = async (ctx, next) => {
    const { password } = ctx.request.body
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    ctx.request.body.password = hash
    await next()
}
module.exports = {
    userValidator,
    verifyUser,
    crpytPassword
}