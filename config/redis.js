const redis = require('ioredis');

function connectToRedis(host, port, password, db, maxRetries = 5, retryDelay = 2000) {
    return new Promise((resolve, reject) => {
        let retries = 0;

        function attemptConnect() {
            const client = new redis({
                host: host,
                port: port,
                password: password,
                db: db,
                retryStrategy: () => retryDelay // 可选的，但这通常用于自动重连策略，而不是手动重试  
            });

            client.on('error', (err) => {
                console.error('Redis connection error:', err);
                if (retries < maxRetries) {
                    retries++;
                    console.log(`Retrying connection to Redis... (${retries}/${maxRetries})`);
                    setTimeout(attemptConnect, retryDelay);
                } else {
                    reject(new Error('Failed to connect to Redis after multiple attempts.'));
                }
            });

            client.on('connect', () => {
                console.log('Successfully connected to Redis!');
                resolve(client); // 连接成功后解析 Promise  
            });

            // 注意：我们移除了 retryStrategy 配置，因为我们在代码中手动处理了重试逻辑。  
            // 如果需要自动重连（比如在网络短暂中断后），可以保留它并根据需要调整。  
        }

        attemptConnect();
    });
}


module.exports = connectToRedis;