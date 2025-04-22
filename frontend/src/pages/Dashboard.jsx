import React, { useEffect, useState, useRef } from 'react';
import './Dashboard.css';
import GuestBook from './GuestBook';
import Gallery from './Gallery';
import HeartGiftSection from './HeartGiftSection';
import Schedule from './Schedule';
import WeddingMap from './WeddingMap';
import DirectionDt from './DirectionDt';
import IntroSection from './IntroSection';
import CountDown from './CountDown';

const Dashboard = () => {
    const [entries, setEntries] = useState([]);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = React.useRef(null);
    let interval;

    
   const heroRef = useRef(null);
   const [showMainImage, setShowMainImage] = useState(true);
   const [showMainImage01, setShowMainImage01] = useState(true);
 
   useEffect(() => {
     const handleScroll = () => {
       const y = window.scrollY;
       console.log(y);
   
       if (y > 0 && showMainImage) {
         setShowMainImage(false);
         document.body.style.overflow = 'hidden';
         window.scrollTo({ top: 0 });
 
        setTimeout(() => {
            setShowMainImage01(false);
            window.scrollTo({ top: 0 });
            document.body.style.overflow = '';
        }, 800);
       } 
     };
   
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, [showMainImage]);

  useEffect(() => {
  let startY = 0;
  let isTouching = false;

  // 📱 모바일 터치 이벤트
  const handleTouchStart = (e) => {
    startY = e.touches[0].clientY;
    isTouching = true;
  };

  const handleTouchMove = (e) => {
    if (!isTouching) return;

    const currentY = e.touches[0].clientY;
    const deltaY = currentY - startY;

    // 맨 위에서 아래로 끌었을 때
    if (window.scrollY === 0 && deltaY > 30) {
        // console.log(window.scrollY);
      setShowMainImage(true);
      setShowMainImage01(true);
    }
  };

  const handleTouchEnd = () => {
    isTouching = false;
  };

  // 🖱️ PC 휠 이벤트
  const handleWheel = (e) => {
    // scrollY가 0이고, 휠을 위로 올리는 경우(deltaY < 0)
    if (window.scrollY === 0 && e.deltaY < -30) {
      setShowMainImage(true);
      setShowMainImage01(true);
    }
  };

  window.addEventListener("touchstart", handleTouchStart);
  window.addEventListener("touchmove", handleTouchMove);
  window.addEventListener("touchend", handleTouchEnd);
  window.addEventListener("wheel", handleWheel);

  return () => {
    window.removeEventListener("touchstart", handleTouchStart);
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("touchend", handleTouchEnd);
    window.removeEventListener("wheel", handleWheel);
  };
}, []);


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
            
            {/* 1. 첫 화면 전용 full 이미지 섹션 */}
            <div className={`wedding-card ${!showMainImage ? "hidden" : ""}`}>
                <div className="intro-image-fullscreen">
                    <img
                    src="/images/main_img2.jpg"
                    alt="풀스크린 이미지"
                    className={`intro-full-img `}
                    />
                    <div className="overlay-text">
                        <p className="small-names slide-in">LEE JIMIN & KIM SUHO</p>
                        <h1 className="main-title slide-in" style={{ animationDelay: '0.2s' }}>
                            Together <span>and</span> Forever
                        </h1>
                        <p className="wedding-date slide-in" style={{ animationDelay: '0.4s' }}>
                            MAY 24, 25
                        </p>
                        <p className="quote fade-in-up" style={{ animationDelay: '1.2s' }}>
                            In the garden of life, your love is the <br />
                            most beautiful bloom, vibrant and everlastingly fragrant.
                        </p>
                    </div>
                    <div className="scroll-down-text">▼ 아래로 스크롤</div>
                </div>
            </div>
            {/* 아래는 hero-section 등 나머지 내용 */}
            <div className={`hero-section ${showMainImage01 ? "fixed" : ""}`} ref={heroRef}>
                <div className="music-control">
                    <audio ref={audioRef} src="/music/music1.mp3" autoPlay loop />
                    <button onClick={toggleMusic}>
                        {isPlaying ? 'Pause Music' : 'Play Music'}
                    </button>
                </div>
                <div className="mainImg">
                    <img src="/images/main_img2.jpg" alt="결혼사진" className="hero-image" />
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
            <IntroSection/>
            {/* 일정 섹션 */}
            <Schedule/>
            {/* 카운트다운 섹션 */}
            <CountDown/>
            {/* 갤러리 섹션 */}
            <Gallery/>

            {/* 지도 섹션 */}
            <WeddingMap/>
            {/* 오시는 길 상세 정보 */}
            <DirectionDt/>
            {/* 마음 전하기 */}
            <HeartGiftSection/>

        </div>
    );
};

export default Dashboard;