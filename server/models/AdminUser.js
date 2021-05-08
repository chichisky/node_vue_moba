const mongoose = require('mongoose');

// 定义分类数据模型
const Schema = new mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String,
    select: false,
    set(val) {
      return require('bcrypt').hashSync(val, 10);
    }
  },
})

module.exports = mongoose.model('AdminUser', Schema);