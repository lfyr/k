const Rouoter = require('koa-router')
const userRouter = require('./user.js')
const homeRouter = require('./home.js')
const router = new Rouoter()

// 添加路由前缀
router.prefix("/api");
// 注册user路由组件
router.use('/user', userRouter.routes(), userRouter.allowedMethods())

router.use('/home', homeRouter.routes(), homeRouter.allowedMethods())
router.redirect('/', '/home')

module.exports = router