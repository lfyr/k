const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/config.default')
const { tokenExpiredError, invalidTokenError, tokenFormateError } = require('../const/err.type')

const tokenValidator = async (ctx, next) => {
    const { id, password, cpassword } = ctx.request.body
    if (!id || !password || !cpassword) {
        console.error('参数错误', ctx.request.body)
        ctx.app.emit('error', tokenFormateError, ctx)
        return
    }
    await next()
}

const auth = async (ctx, next) => {
    const { authorization } = ctx.request.header
    if (!authorization) {
        return ctx.app.emit('error', invalidTokenError, ctx)
    }
    const token = authorization.replace('Bearer ', '')
    try {
        const user = jwt.verify(token, JWT_SECRET)
        ctx.state.user = user
    } catch (err) {
        switch (err.name) {
            case 'TokenExpiredError':
                console.error('token 已过期', err)
                return ctx.app.emit('error', tokenExpiredError, ctx)
            case 'JsonWebTokenError':
                console.error('token 无效', err)
                return ctx.app.emit('error', invalidTokenError, ctx)
        }
    }
    await next()
}
module.exports = {
    auth,
    tokenValidator,
}
