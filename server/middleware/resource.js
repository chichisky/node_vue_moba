module.exports = options => {
  // 转换名词单复数
  return (req, res, next) => {
    const modelName = require('inflection').classify(req.params.resource);
    req.Model = require(`../models/${modelName}`);
    next()
  }
}