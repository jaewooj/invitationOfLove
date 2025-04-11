import React, { useState } from 'react';
import "./Admin.css"

const Admin = (/* { setAuth } */) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 로직을 추가하세요 (예: API 요청)
    // 성공적으로 로그인하면 setAuth(true) 호출
    if(username==="admin"&&password==="admin"){
        // 토큰을 생성합니다 (실제로는 서버로부터 받아와야 함)
        const token = "your-generated-token1"; // 예: 서버로부터 받은 토큰
        console.log(token)
        // localStorage에 토큰을 저장합니다
        localStorage.setItem('authToken', token);
        
        // 인증 상태를 true로 설정합니다
        // setAuth(true);
    } else {
        alert("아이디 혹은 비밀번호가 맞지 않습니다.")
    }
  };

  return (
    <div className="login-container">
        <img src="images/logo_img.png"/>
      <form onSubmit={handleSubmit}>
        <div className='userID'>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='userPw'>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default Admin;