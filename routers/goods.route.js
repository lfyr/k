const Router = require('koa-router')
const router = new Router({ prefix: '/goods' })
const { upload } = require('../controller/goods.controller')
const { auth } = require('../middleware/auth.middleware')

router.post('/upload', auth, upload)

module.exports = router