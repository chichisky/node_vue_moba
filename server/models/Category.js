const mongoose = require('mongoose');

// 定义分类数据模型
const Schema = new mongoose.Schema({
  name: {type: String},
  parent: {type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}
})
Schema.virtual('children',{
  localField: '_id',
  foreignField: 'parent',
  justOne: false,
  ref: "Category"

})
Schema.virtual('newsList',{
  localField: '_id',
  foreignField: 'categories',
  justOne: false,
  ref: "Article"
})
module.exports = mongoose.model('Category', Schema);