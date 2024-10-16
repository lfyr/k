const { Sequelize } = require("sequelize");
const {
  MYSQL_HOST,
  MYSQL_POST,
  MYSQL_USER,
  MYSQL_PWD,
  MYSQL_DB,
} = require("./config.default");
const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
  host: MYSQL_HOST,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
    acquire: 30000,
  },
});

seq
  .authenticate()
  .then(() => {
    console.log("数据库连接成功");
  })
  .catch((err) => {
    console.log("数据库连接失败");
  });

module.exports = seq;
