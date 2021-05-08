const mongoose = require('mongoose');

// 定义分类数据模型
const Schema = new mongoose.Schema({
  title: {type: String},
  categories: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}],
  body: {type: String},

})

module.exports = mongoose.model('Article', Schema);