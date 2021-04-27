const mongoose = require('mongoose');

// 定义分类数据模型
const Schema = new mongoose.Schema({
  name: {type: String},
  icon: {type: String}

})

module.exports = mongoose.model('Item', Schema);