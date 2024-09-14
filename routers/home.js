const Rouoter = require('koa-router')
const router = new Rouoter()

// 测试 get
router.get("/", (ctx, next) => {
    ctx.body = `
    <html>
        <h1>home页面</h1>
    </html>
    `
})

module.exports = router