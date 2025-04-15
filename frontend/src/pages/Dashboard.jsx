import React, { useEffect, useState, useRef } from 'react';
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
    
    /* 지도 */
    const mapContainerRef = useRef(null); // 지도를 렌더링할 DOM 참조

    useEffect(() => {
        if (window.kakao && window.kakao.maps) {
            const mapContainer = mapContainerRef.current;
    
            const mapOption = {
                center: new window.kakao.maps.LatLng(37.51583923789284, 126.72252151056179), // 웨스턴팰리스 위치 (위도, 경도)
                level: 3, // 지도 확대 레벨
            };
    
            const map = new window.kakao.maps.Map(mapContainer, mapOption);
    
            const markerPosition = new window.kakao.maps.LatLng(37.51583923789284, 126.72252151056179);
            const marker = new window.kakao.maps.Marker({
                position: markerPosition,
            });
            marker.setMap(map);
    
            const infowindow = new window.kakao.maps.InfoWindow({
                content: '<div style="padding:5px;font-size:14px;">웨스턴팰리스웨딩하우스</div>',
            });
            infowindow.open(map, marker);
        }
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
                    <p className="hero-date">2025년 9월 13일 토요일 오전 11시 30분</p>

                </div>
            </div>

            {/* 소개 섹션 */}
            <div className="intro-section">
                <p>저희 두 사람이 사랑으로 함께 새로운 시작을 하려 합니다</p>
                <p>소중한 걸음으로 축복해 주세요</p>
                <p>삶의 새로운 페이지를 여는 이 자리에</p>
                <p>소중한 분들을 초대하고 싶습니다</p>
                <p>부부가 될 저희의 첫걸음을 축복해주세요</p>
                
                {/* 부모님 소개 추가 */}
                <div className="parents-info">
                    <p>김아빠 · 김엄마 아들 <strong>정지훈</strong></p>
                    <p>서아빠 · 서엄마 딸 <strong>서예진</strong></p>
                </div>
            </div>

            {/* 일정 섹션 */}
            <div className="schedule-section">
                <h2>WEDDING DAY</h2>
                <p className="schedule-datetime">2025년 9월 13일 토요일 | 오후 12시 10분</p>
                <p className="schedule-subtext">Saturday, September 13, 2025 | PM 12:10</p>
                <div className="calendar">
                    <div className="calendar-header">
                        <span>일</span><span>월</span><span>화</span><span>수</span><span>목</span><span>금</span><span>토</span>
                    </div>
                    <div className="calendar-days">
                        {[
                            '', 1, 2, 3, 4, 5, 6,
                            7, 8, 9, 10, 11, 12,
                            <div className="highlight-day">13</div>, 14, 15, 16, 17, 18, 19,
                            20, 21, 22, 23, 24, 25, 26,
                            27, 28, 29, 30
                        ].map((day, i) => (
                            <div key={i} className="calendar-cell">{day}</div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 갤러리 섹션 */}
            <div className="gallery-section">
                <h2>갤러리</h2>
                <div className="gallery">
                    <img src="/images/main_img.png" alt="갤러리1" />
                    <img src="/images/main_img.png" alt="갤러리2" />
                </div>
            </div>
            {/* 지도 섹션 */}
            <div className="map-section">
                <h2>오시는 길</h2>
                <p><strong>주소:</strong> 인천 부평구 부평대로 283 웨스턴팰리스웨딩하우스</p>
                <div
                    id="map"
                    ref={mapContainerRef}
                    style={{ width: '100%', height: '400px', borderRadius: '12px', marginTop: '10px' }}
                ></div>
                <p>
                    지도를 자세히 보려면{" "}
                    <a
                        href="https://map.kakao.com/?q=웨스턴팰리스웨딩하우스"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        여기를 눌러주세요
                    </a>
                </p>
                <div style={{ marginTop: '16px', display: 'flex', gap: '10px' }}>
                    <a
                        href={`https://map.kakao.com/link/to/웨스턴팰리스웨딩하우스,37.51583923789284, 126.72252151056179`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            backgroundColor: '#fee500',
                            padding: '8px 12px',
                            borderRadius: '8px',
                            color: '#000',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                        }}
                    >
                        🟡 카카오내비
                    </a>

                    <a
                        href={`tmap://route?goalname=웨스턴팰리스웨딩하우스&goalx=126.72252151056179&goaly=37.51583923789284&reqCoordType=WGS84GEO&resCoordType=WGS84GEO`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            backgroundColor: '#03c75a',
                            padding: '8px 12px',
                            borderRadius: '8px',
                            color: '#fff',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                        }}
                    >
                        💚 티맵
                    </a>

                    <a
                        href={`nmap://route/car?dlat37.51583923789284&dlng=126.72252151056179&dname=웨스턴팰리스웨딩하우스&appname=com.example.myapp`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            backgroundColor: '#00c73c',
                            padding: '8px 12px',
                            borderRadius: '8px',
                            color: '#fff',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                        }}
                    >
                        📗 네이버지도
                    </a>
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