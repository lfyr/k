const Router = require("koa-router");
const {
  register,
  login,
  forgetpassword,
} = require("../controller/user.controller");
const route = new Router({ prefix: "/user" });
const {
  userValidator,
  verifyUser,
  cryptPassword,
  verifyLogin,
} = require("../middleware/user.middleware");
const { auth, tokenValidator } = require("../middleware/auth.middleware");

// 注册接口
route.post("/register", userValidator, verifyUser, crpytPassword, register);

// 登录接口
route.post("/login", userValidator, verifyLogin, login);

route.post(
  "/forgetpassword",
  tokenValidator,
  auth,
  cryptPassword,
  forgetpassword
);

module.exports = route;
