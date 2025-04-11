import React, { useState } from 'react';
import './Qna.css'

const Qna = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('https://testback01-production.up.railway.app/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
          });

        if (response.ok) {
            alert('문의가 성공적으로 전송되었습니다!');
        } else {
            alert('문의 전송에 실패했습니다.');
        }
    };

    return (
        <div className="qna">
            <form onSubmit={handleSubmit} className="contact-form">
                <div>
                    <p>이름:</p>
                    <label>이름:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <p>이메일:</p>
                    <label>이메일:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <p>문의사항:</p>
                    <label>메시지:</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
                </div>
                <button type="submit">문의하기</button>
            </form>
        </div>
    );
};

export default Qna;