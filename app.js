//Nodejs api 서버
//node app.js로 구동
const express = require('express');
const cors = require('cors'); // 도메인 관련 미들웨어
const app = express();
const PORT = 8080;
const { posts } = require('./data.js');

app.use(cors());
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
