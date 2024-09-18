const path = require('path')
const { fileUploadError } = require('../const/err.type')
class GoodsController {
    async upload(ctx, next) {
        const { file } = ctx.request.files
        if (file) {
            ctx.body = {
                code: 0,
                msg: '上传图片成功',
                data: path.basename(file.filepath)
            }
            return

        } else {
            return ctx.app.emit("error", fileUploadError, ctx)
        }
    }
}
module.exports = new GoodsController()