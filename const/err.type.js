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
    userLoginError: {
        code: '10006',
        msg: '用户登录错误',
        data: ''
    }
}