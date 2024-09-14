const Koa = require('koa')
const { koaBody } = require('koa-body');
const userRouter = require('../routers/user.route')
const errHandler = require('./appHandler')

const app = new Koa()

// 使用参数解析中间件
app.use(koaBody())

// 注册应用级组件
app.use(userRouter.routes()).use(userRouter.allowedMethods())

// 监听全局错误
app.on("error", errHandler)
module.exports = app