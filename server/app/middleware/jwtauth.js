module.exports = options => {
  return async function jwtauth(ctx, next) {
    const token = ctx.request.header.authorization;

    if (token) {
      try {
        const decode = ctx.app.jwt.verify(token, options.secret);
        if (decode.exp > parseInt(new Date().getTime() / 1000)) {
          return await next();
        }
      } catch (error) {
        ctx.status = 401;
        ctx.body = {
          msg: error.message,
        };
      }
    } else {
      ctx.status = 401;
      ctx.body = {
        msg: '没有token',
      };
    }
  };
};
