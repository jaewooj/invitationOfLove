const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// 미들웨어 설정
app.use(cors());
app.use(bodyParser.json());
app.use(cors({
    origin: 'https://shoosetosister.netlify.app/'
  }));

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.naver.com',
        port: 465,
        secure: true,
        auth: {
          user: 'jjw1914@naver.com',
          pass: 'L97LPQG1516B',
        },
      });

    const mailOptions = {
        from: 'jjw1914@naver.com',      // 발신자: 본인 이메일 고정
        to: 'wodn1914@daum.net', // 이메일을 받을 다음 주소
        replyTo: email,                 // 사용자가 입력한 이메일
        subject: `고객 문의: ${name}`,
        text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('문의 전송에 실패했습니다.');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('문의가 성공적으로 전송되었습니다!');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});