// 认证是否登录
module.exports = options => {
  const assert = require('http-assert');
  return async(req, res, next) => {
    const token = (req.headers.authorization || '').split(' ').pop();
    assert(token, 401, "请先登录")
    const {id} = require('jsonwebtoken').verify(token, 'asdasgas');
    assert(id, 401, "请先登录")
    req.user = await require('../models/AdminUser').findById(id);
    assert(req.user, 401, "请先登录")
    await next()
  }
}