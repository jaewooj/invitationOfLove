require('dotenv').config();

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

console.log('DB 환경 변수:', {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

const app = express();
const PORT = process.env.PORT || 3001; // 환경변수 PORT 사용, 없으면 3001

// CORS 설정
const allowedOrigins = [
  'https://invitationoflove.netlify.app',
  'https://invitationoflove.netlify.app/', // 경로 끝에 / 추가한 것과 빼는 것을 동일하게 처리
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS 정책에 의해 차단된 요청입니다.'));
    }
  },
  methods: ['GET', 'POST'],
}));

app.use(express.json());

// MySQL 연결 풀 설정
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// DB 연결 및 데이터베이스, 테이블 자동 생성
pool.getConnection((err, connection) => {
  if (err) {
    console.error('MySQL 연결 실패:', err);
    return;
  }
  console.log('MySQL 연결 성공!');

  // 데이터베이스가 존재하지 않으면 생성
  const createDatabaseQuery = `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME || 'invitationoflove'}`;
  connection.query(createDatabaseQuery, (err, result) => {
    if (err) {
      console.error('데이터베이스 생성 실패:', err);
    } else {
      console.log('✅ 데이터베이스 확인 완료!');
    }

    // 데이터베이스 선택
    connection.changeUser({ database: process.env.DB_NAME || 'invitationoflove' }, (err) => {
      if (err) {
        console.error('데이터베이스 변경 실패:', err);
        return;
      }

      // 테이블이 없으면 자동 생성
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS guestbook (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          message TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `;
      connection.query(createTableQuery, (err, result) => {
        if (err) {
          console.error('테이블 생성 실패:', err);
        } else {
          console.log('✅ guestbook 테이블 확인 완료!');
        }
      });
    });
  });
  connection.release();
});

// 방명록 글 저장 API (POST)
app.post('/api/guestbook', (req, res) => {
  const { name, message } = req.body;

  // 이름과 메시지가 없으면 오류 응답
  if (!name || !message) {
    return res.status(400).json({ error: '이름과 메시지를 모두 입력해야 합니다.' });
  }

  // 방명록 글을 데이터베이스에 저장
  const query = 'INSERT INTO guestbook (name, message) VALUES (?, ?)';
  pool.query(query, [name, message], (err, result) => {
    if (err) {
      console.error('방명록 저장 실패:', err);
      return res.status(500).json({ error: '데이터베이스 오류' });
    }
    console.log('방명록 저장 성공:', result);
    res.status(200).json({ message: '방명록이 저장되었습니다.' });
  });
});

// 방명록 목록 조회 API (GET)
app.get('/api/guestbook', (req, res) => {
  const query = 'SELECT * FROM guestbook ORDER BY created_at DESC';
  pool.query(query, (err, result) => {
    if (err) {
      console.error('방명록 조회 실패:', err);
      return res.status(500).json({ error: '데이터베이스 오류' });
    }
    console.log('방명록 조회 성공:', result);
    res.status(200).json(result);  // 방명록 데이터를 반환
  });
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`서버가 ${PORT} 포트에서 실행 중입니다.`);
});