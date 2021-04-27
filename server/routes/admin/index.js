module.exports = app => {
  const express = require('express');
  const router = express.Router();
  const moogoose = require('mongoose');
  const path = require('path')
  
  // 新建分类接口
  router.post('/', async(req, res) => {
    const model = await req.Model.create(req.body);
    res.send(model)
  });

  // 获得分类数据接口
  router.get('/', async(req, res) => {
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }
    const items = await req.Model.find().setOptions(queryOptions) .limit(10);
    res.send(items)
  });

  // 通过ID查找分类单条数据接口
  router.get('/:id', async(req, res) => {
    const model = await req.Model.findById(req.params.id);
    res.send(model)
  });

  // 修改分类单条数据接口
  router.put('/:id', async(req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body);
    res.send(model)
  });

  // 删除分类数据接口
  router.delete('/:id', async(req, res) => {
    const model = await req.Model.findByIdAndDelete(req.params.id);
    res.send(model)
  });
  app.use('/admin/api/rest/:resource',(req, res, next) => {
    const modelName = require('inflection').classify(req.params.resource);
    req.Model = require(`../../models/${modelName}`);
    next()
  }, router);

  // 上传图片接口
  const upload = require('multer')({dest: path.join(__dirname, '/../../uploads')})
  app.post('/admin/api/upload',upload.single('file'), async(req, res) => {
    const file = req.file;
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })
}