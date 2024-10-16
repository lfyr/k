const Redis = require("ioredis");
const url = require("url");
const {
  REDIS_HOST,
  REDIS_POST,
  REDIS_USER,
  REDIS_PWD,
  REDIS_DB,
} = require("../config/config.default");

function createRedis(ops) {
  return new Redis({
    port: REDIS_POST,
    host: REDIS_HOST,
    password: REDIS_PWD,
    db: REDIS_DB,
    ...ops,
  });
}

let redisStore = createRedis({
  // 其他自定义配置，参见ioredis
  // prefix:'dev',
  retryStrategy(times) {
    const delay = Math.min(times * 50, 5000);
    return delay;
  },
});

//用于广播
let sub = createRedis({
  // 其他自定义配置，参见ioredis
  // prefix:'dev',
  autoResubscribe: true, // 当重连时，自动重新订阅广播
  retryStrategy(times) {
    //自定义重试规则
    const delay = Math.min(times * 50, 5000);
    return delay;
  },
});

// 测试
// async function test() {
//   let key = "tt_v";
//   k = await redisStore.set(key, 100);

//   k = await redisStore.get(key);

//   k = await redisStore.del(key);
//   console.log(k);
// }
// test();
module.exports = { redisStore, sub };
