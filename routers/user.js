const Rouoter = require('koa-router')
const moment = require('moment')
const promisePool = require('../config/mysql')
const redis = require('../config/redis')
const router = new Rouoter()
const now = moment().format('YYYY-MM-DD HH:MM:ss');
console.log(now); // 打印当前时间的字符串表示，默认为ISO 8601格式

// 列表
router.get("/list", async (ctx, next) => {
    let user = await promisePool.query('select * from user')
    ctx.body = {
        code: 200,
        message: 'success',
        data: user[0]
    }
})

router.get("/index/:id", async (ctx, next) => {
    let id = ctx.params.id
    redis.get("name", async (err, data) => {

        if (!err) {
            console.log(data)
            ctx.body = {
                code: 200,
                message: 'success',
                data: data
            }
            return
        } else {
            let user = await promisePool.query('select * from user where id = ?', [id])
            ctx.body = {
                code: 200,
                message: 'success',
                data: user[0]
            }
        }
    })
})


// 创建
router.post("/create", async (ctx, next) => {
    let user_name = ctx.request.body.user_name
    let mobile = ctx.request.body.mobile
    let user = await promisePool.query('INSERT INTO `test`.`user` (`user_name`, `mobile`, `created_at`, `updated_at`) VALUES (?,?,?,?)', [user_name, mobile, now, now])
    ctx.body = {
        code: 200,
        message: 'success',
        data: user[0]
    }
})


// 修改
router.post("/update", async (ctx, next) => {
    let id = ctx.request.body.id
    let user_name = ctx.request.body.user_name
    let mobile = ctx.request.body.mobile
    let user = await promisePool.query('UPDATE `test`.`user` SET `user_name` = ?, `mobile` = ?, `updated_at`= ?  WHERE `id` = ?', [user_name, mobile, now, id])
    ctx.body = {
        code: 200,
        message: 'success',
        data: user
    }
})



// 删除
router.get("/del/:id", async (ctx, next) => {
    let id = ctx.params.id
    let user = await promisePool.query('DELETE FROM `test`.`user`  WHERE `id` = ?', [id])
    ctx.body = {
        code: 200,
        message: 'success',
        data: user[0]
    }
})

module.exports = router

