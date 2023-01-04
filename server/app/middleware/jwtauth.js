module.exports = options => {
  // TODO 注册时不校验，需要过滤
  return async function jwtauth(ctx, next) {
    const token = ctx.request.header.authorization;
    if (token) {
      const decode = ctx.app.jwt.verify(token, options.secret);
      if (decode.exp > parseInt(new Date().getTime() / 1000)) {
        return await next();
      }
    }

    ctx.status = 401;
    ctx.body = {
      status: 401,
      msg: '登录校验失败',
    };
  };
};
