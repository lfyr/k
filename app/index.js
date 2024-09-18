const path = require('path')
const Koa = require('koa')
const { koaBody } = require('koa-body');
const koaStatic = require('koa-static')
const router = require('../routers')
const errHandler = require('./appHandler')

const app = new Koa()

// 使用参数解析中间件
app.use(koaBody({
    multipart: true,
    formidable: {
        uploadDir: path.join(__dirname, '../upload'),
        keepExtensions: true
    }
}))

app.use(koaStatic(path.join(__dirname, '../upload')))

// 注册应用级组件
app.use(router.routes()).use(router.allowedMethods())

// 监听全局错误
app.on("error", errHandler)

module.exports = app