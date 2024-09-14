const Mysql2 = require('mysql2')
const config = getDBConfig()
const promisePool = Mysql2.createPool(config).promise();

function getDBConfig() {
    return {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        database: 'test',
        password: 'root',

        //以下选项均为默认值（如果不需要变动可省略）
        maxIdle: 10, //空闲连接数
        idleTimeout: 10000, //获取连接的毫秒
        waitForConnections: true, // 为true时，连接排队等待可用连接。为false将立即抛出错误
        connectionLimit: 10, //单次可创建最大连接数
        queueLimit: 0 //连接池的最大请求数，从getConnection方法前依次排队。设置为0将没有限制
    }
}

module.exports = promisePool
