const express = require('express');
const path = require('path');
const app = express();

// res.header("Access-Control-Allow-Origin", "*");
app.use(express.json())
app.use(require('cors')())
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

require('./routes/admin')(app)
require('./plugins/db')(app)


app.listen(3000, () => {
  console.log('server is runing ~');
})