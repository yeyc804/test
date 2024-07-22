const express = require('express');
const app = express();
const port = 18082; //后台服务端口
 
app.get('/api/data', (req, res) => {
  res.send({ data: '这是后台服务返回的数据' });
});
 
app.listen(port, () => {
  console.log(`后台服务运行在 http://localhost:${port}`);
});