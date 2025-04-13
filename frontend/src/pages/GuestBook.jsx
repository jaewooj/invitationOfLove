import React, { useState, useEffect } from 'react';
import './GuestBook.css';

const GuestBook = () => {
    const [entries, setEntries] = useState([]);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    // 방명록 글을 처음 렌더링할 때 가져오는 함수
    const fetchEntries = async () => {
        try {
            const response = await fetch('https://invitationoflove.up.railway.app/api/guestbook');
            const data = await response.json();
            setEntries(data); // 최신 방명록 목록으로 상태 업데이트
        } catch (error) {
            console.error('데이터 가져오기 실패:', error);
            alert('방명록을 가져오는 데 실패했습니다.');
        }
    };

    // 페이지가 처음 로드될 때 방명록을 가져오는 useEffect
    useEffect(() => {
        fetchEntries();
    }, []); // 빈 배열을 넣어 컴포넌트가 마운트될 때 한 번만 실행

    // 방명록 글 제출 처리
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name.trim() && message.trim()) {
            const newEntry = { name, message };

            try {
                const response = await fetch('https://invitationoflove.up.railway.app/api/guestbook', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newEntry),
                });

                if (response.ok) {
                    // 새 글이 성공적으로 추가되면 최신 방명록을 다시 가져오기
                    fetchEntries();
                    setName('');
                    setMessage('');
                } else {
                    const errorData = await response.json();
                    alert(`에러: ${errorData.error}`);
                }
            } catch (error) {
                console.error('서버 요청 실패:', error);
                alert('서버와의 통신에 실패했습니다.');
            }
        }
    };

    return (
        <div className="guestbook-container">
            <h2 className="guestbook-title">📖 방명록</h2>
            <form onSubmit={handleSubmit} className="guestbook-form">
                <input
                    type="text"
                    placeholder="이름"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="guestbook-input"
                    required
                />
                <textarea
                    placeholder="메시지를 남겨주세요"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="guestbook-textarea"
                    required
                />
                <button type="submit" className="guestbook-button">남기기</button>
            </form>
            <ul className="guestbook-list">
                {entries.map((entry, index) => (
                    <li key={index} className="guestbook-entry">
                        <strong>{entry.name}</strong>: {entry.message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GuestBook;