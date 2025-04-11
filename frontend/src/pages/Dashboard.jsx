import React, { useEffect, useRef, useState } from 'react';
import './Dashboard.css';
import './DashboardM.css';

const Dashboard = () => {
    
    const [input, setInput] = useState("");
    
    const [currentImage, setCurrentImage] = useState(0);
    const imageList = ['/images/shose01.jpg', '/images/shose02.jpg', '/images/shose03.jpg']; // 이미지 경로
    const intervalRef = useRef(null);

    // 이미지를 자동으로 변경하는 함수
    const startInterval = () => {
        intervalRef.current = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % imageList.length);
        }, 3000); // 3초마다 이미지 변경
    };

    // 컴포넌트가 마운트될 때 interval 시작
    useEffect(() => {
        startInterval();

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    // 이미지 버튼 클릭 시 interval을 리셋하고 해당 이미지로 이동
    const handleDotClick = (index) => {
        clearInterval(intervalRef.current); // 기존 interval 중지
        setCurrentImage(index); // 클릭한 이미지로 변경
        startInterval(); // interval 재시작
    };

    return (
        <div className="dashboard">
            <div className="imgContainer">
                <img src="/images/mainBg01.jpg" className="mainImg"/>
                {/* <div className="gradientOverlay"></div> */}
            </div>
            <div className="inner">
                <img src={imageList[currentImage]} className="mainImg" alt="Current Slide" />
                <div className="dots">
                    {imageList.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${currentImage === index ? 'active' : ''}`}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                    <div>
                        <input type="text" value={input} 
                        onChange={(e) => setInput(e.target.value)} placeholder="여기에 텍스트 입력..."/>
                    </div>
                    <div className="mt-4 text-gray-800">
                        <span className="font-semibold">{input}</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;