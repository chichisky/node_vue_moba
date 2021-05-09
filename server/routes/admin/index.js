module.exports = app => {
  const express = require('express');
  const router = express.Router();
  const moogoose = require('mongoose');
  const path = require('path')
  const assert = require('http-assert');
  
  // 新建单条数据接口
  router.post('/', async(req, res) => {
    const model = await req.Model.create(req.body);
    res.send(model)
  });

  // 获得数据接口
  router.get('/', async(req, res) => {
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    } else if (req.Model.modelName === 'Artcle') {
      queryOptions.populate = 'categories'
    }
    const items = await req.Model.find().setOptions(queryOptions) .limit(10);
    res.send(items)
  });

  // 通过ID查找单条数据接口
  router.get('/:id', async(req, res) => {
    const model = await req.Model.findById(req.params.id);
    res.send(model)
  });

  // 修改单条数据接口
  router.put('/:id', async(req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body);
    res.send(model)
  });

  // 删除数据接口
  router.delete('/:id', async(req, res) => {
    const model = await req.Model.findByIdAndDelete(req.params.id);
    res.send(model)
  });
  // 转换名词单复数，及权限认证
  app.use('/admin/api/rest/:resource', 
          require('../../middleware/auth')(), 
          require('../../middleware/resource')(), 
          router);

  // 上传图片接口
  const upload = require('multer')({dest: path.join(__dirname, '/../../uploads')})
  app.post('/admin/api/upload',require('../../middleware/auth')(), upload.single('file'), async(req, res) => {
    const file = req.file;
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })
  // 登录接口
  app.post('/admin/api/login', async (req, res) => {
    const {username, password} = req.body;
    const user = await require('../../models/AdminUser').findOne({username}).select('+password');
    assert(user, 422, '用户不存在');
    const isValid = await require('bcryptjs').compareSync(password, user.password);
    assert(isValid, 422, '密码错误')

    // 返回token
    const token = await require('jsonwebtoken').sign({id: user._id}, 'asdasgas');
    res.send({token});
  })

  // 统一错误处理
  app.use(async(err, req, res, next) => {
    // console.log(err);
    res.status(err.statusCode || 500).send({
      message: err.message || '服务器异常'
    })
  })
}