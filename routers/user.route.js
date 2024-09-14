const Router = require('koa-router')
const { register, login } = require('../controller/user.controller')
const route = new Router({ prefix: '/user' })
const { userValidator, verifyUser, crpytPassword, verifyLogin } = require('../middleware/user.middleware')
// 注册接口
route.post('/register', userValidator, verifyUser, crpytPassword, register)

// 登录接口
route.post('/login', userValidator, verifyLogin, login)

module.exports = route