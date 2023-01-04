'use strict';

const crypto = require('crypto');
const { Service } = require('egg');

class UserService extends Service {
  async register(username, password) {
    const { ctx } = this;
    const user = new ctx.model.User();
    // 使用MD5加密算法生成了一个Hash对象，并以hex形式返回
    const pwd = crypto.createHash('md5').update(password).digest('hex');
    user.username = username;
    user.password = pwd;
    return user.save();
  }

  async login(username, password) {
    const { ctx } = this;
    const pwd = crypto.createHash('md5').update(password).digest('hex');
    const user = await ctx.model.User.findOne({ username, password: pwd });
    return user;
  }
}

module.exports = UserService;
