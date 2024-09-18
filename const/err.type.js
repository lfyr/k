const { invalid } = require("moment");

module.exports = {
    userFormateError: {
        code: '10001',
        msg: '用户或密码为空',
        data: ''
    },
    userAlreadyExited: {
        code: '10002',
        msg: '用户已经存在',
        data: ''
    },
    userRegisterError: {
        code: '10003',
        msg: '用户注册错误',
        data: ''
    },
    userDoesNotExist: {
        code: '10004',
        msg: '用户不存在',
        data: ''
    },
    invalidPassword: {
        code: '10005',
        msg: '密码不匹配',
        data: ''
    },
    tokenExpiredError: {
        code: '10101',
        msg: 'token已过期',
        data: ''
    },
    invalidTokenError: {
        code: '10102',
        msg: 'token无效',
        data: ''
    },
    tokenFormateError: {
        code: '10001',
        msg: '参数错误',
        data: ''
    },
    fileUploadError: {
        code: '10201',
        msg: '图片上传错误',
        data: ''
    }
}