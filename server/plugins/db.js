module.exports = app => {
  const mongoose = require('mongoose')

  mongoose.connect('mongodb://localhost:27017/node-vue-moba', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
  })
}