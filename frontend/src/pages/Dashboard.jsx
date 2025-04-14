import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import GuestBook from './GuestBook';

const Dashboard = () => {
    const [entries, setEntries] = useState([]);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = React.useRef(null);

    // 방명록 데이터를 서버에서 가져오는 함수
    useEffect(() => {
        const fetchEntries = async () => {
            try {
                const response = await fetch('https://invitationoflove.up.railway.app/api/guestbook');
                if (response.ok) {
                    const data = await response.json();
                    setEntries(data); // 방명록 데이터를 state에 저장
                } else {
                    console.error('방명록 데이터를 가져오는 데 실패했습니다.');
                }
            } catch (error) {
                console.error('서버와의 통신에 실패했습니다.', error);
            }
        };

        fetchEntries();
    }, []); // 컴포넌트가 마운트될 때 한 번만 실행


    // 꽃 요소를 랜덤하게 생성하는 함수
    const createFlowers = () => {
        const flowerCount = 15; // 떨어뜨릴 꽃 개수
        const flowers = [];
        for (let i = 0; i < flowerCount; i++) {
            flowers.push(
                <img 
                    key={i} 
                    src="/images/flower.png"  // 꽃 이미지 경로
                    alt="꽃"
                    className="flower"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDuration: `${Math.random() * 5 + 4}s`,  // 애니메이션 속도 랜덤화
                        animationDelay: `${Math.random() * 5}s`  // 애니메이션 시작 시간 랜덤화
                    }}
                />
            );
        }
        return flowers;
    };

    const toggleMusic = () => {
        if (audioRef.current) {
            if (audioRef.current.paused) {
                audioRef.current.play();
                setIsPlaying(true);
            } else {
                audioRef.current.pause();
                setIsPlaying(false);
            }
        }
    };
    useEffect(() => {
        const audio = audioRef.current;
    
        const tryPlayAudio = () => {
            if (audio) {
                const playPromise = audio.play();
    
                if (playPromise !== undefined) {
                    playPromise
                        .then(() => {
                            setIsPlaying(true);
                        })
                        .catch((error) => {
                            console.warn('브라우저 정책으로 자동 재생 차단됨:', error);
                            setIsPlaying(false);
                        });
                }
            }
        };
    
        // iOS 등에서는 상호작용 전까지 차단될 수 있음
        tryPlayAudio();
    }, []);

    return (
        <div className="dashboard">
            <div className="hero-section">
                <div className="music-control">
                    <audio ref={audioRef} src="/music/music1.mp3" autoPlay loop />
                    <button onClick={toggleMusic}>
                        {isPlaying ? 'Pause Music' : 'Play Music'}
                    </button>
                </div>
                <div className="mainImg">
                    <img src="/images/main_img.png" alt="결혼사진" className="hero-image" />
                    {/* 꽃내리는 애니메이션 */}
                    {createFlowers()}

                </div>
                <div className="mainTitle01">
                    <h1 className="hero-title">초대합니다</h1>
                    <p className="hero-names">지훈 ❤️ 예진</p>
                    <p className="hero-date">2025년 4월 6일 일요일 오후 1시</p>

                </div>
            </div>

            {/* 소개 섹션 */}
            <div className="intro-section">
                <p>저희 두 사람이 사랑으로 함께 새로운 시작을 하려 합니다.</p>
                <p>소중한 걸음으로 축복해 주세요.</p>
            </div>

            {/* 일정 섹션 */}
            <div className="schedule-section">
                <h2>결혼식 안내</h2>
                <p><strong>일시:</strong> 2025년 4월 6일 일요일 오후 1시</p>
                <p><strong>장소:</strong> 예식장 이름</p>
                <a href="https://map.naver.com/" target="_blank" rel="noopener noreferrer">
                지도보기
                </a>
            </div>

            {/* 갤러리 섹션 */}
            <div className="gallery-section">
                <h2>갤러리</h2>
                <div className="gallery">
                    <img src="/images/main_img.png" alt="갤러리1" />
                    <img src="/images/main_img.png" alt="갤러리2" />
                </div>
            </div>

            {/* 마음 전하기 */}
            <div className="account-section">
                <h2>마음 전하실 곳</h2>
                <p><strong>신랑:</strong> 국민은행 123456-78-901234 (홍길동)</p>
                <p><strong>신부:</strong> 신한은행 123-45-67890 (김예진)</p>
            </div>

            {/* 연락처 또는 방명록 */}
            <div className="contact-section">
                <h2>연락처</h2>
                <p><strong>신랑:</strong> 010-1234-5678</p>
                <p><strong>신부:</strong> 010-8765-4321</p>
                {/* GuestBook 컴포넌트에 entries 데이터를 전달 */}
                <GuestBook entries={entries} />
            </div>

        </div>
    );
};

export default Dashboard;