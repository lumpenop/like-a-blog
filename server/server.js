const express = require('express');
const fs = require('fs');
const https = require('https');
const cors = require('cors');

const dotenv = require('dotenv');

dotenv.config();
const app = express();

const PORT = process.env.SERVER_PORT || 4001;

app.use(express.urlencoded({ extended : false }));
app.use(express.json());

const corsOptions = {
    origin: `https://localhost:3000`,
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
  }
  app.use(cors(corsOptions));



app.use('/board', '');



let server;

// 인증서 파일들이 존재하는 경우에만 https 프로토콜을 사용하는 서버를 실행합니다.
// 만약 인증서 파일이 존재하지 않는경우, http 프로토콜을 사용하는 서버를 실행합니다.
// 파일 존재여부를 확인하는 폴더는 서버 폴더의 package.json이 위치한 곳입니다.
if (fs.existsSync("./key.pem") && fs.existsSync("./cert.pem")) {
  server = https
    .createServer(
      {
        key: fs.readFileSync(__dirname + `/` + 'key.pem', 'utf-8'),
        cert: fs.readFileSync(__dirname + `/` + 'cert.pem', 'utf-8'),
      },
      app
    )
    .listen(PORT);
} else {
  server = app.listen(PORT)
}