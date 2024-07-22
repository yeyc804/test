const axios = require('axios');
const port = 18081; // 前台服务端口
 
// 创建一个简单的Express服务器
const express = require('express');
const app = express();
 
app.get('/', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:18082/api/data');
    res.send(response.data);
  } catch (error) {
    res.status(500).send('服务器错误');
  }
});
 
app.listen(port, () => {
  console.log(`前台服务运行在 http://localhost:${port}`);
});