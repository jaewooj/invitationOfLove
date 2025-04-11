import React, { useState, useEffect } from 'react';
import './Interior.css';
import './InteriorM.css';

const images = [
    "/images/inImg1.jpg",
    "/images/inImg2.jpg",
    "/images/inImg3.jpg"
];

const Interior = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused) {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }
        }, 3000); // 3초마다 이미지 변경

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 제거
    }, [isPaused]);

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="interior">
            <div className="title">
                <p>병원 신뢰성 향상과 환자 편이성 증대를 위한</p>
                <h4>실내 디자인</h4>
                <p>입간판 / 아크릴 / 시트부착 </p>
            </div>
            <div 
                className="signImg" 
                onMouseEnter={() => setIsPaused(true)} 
                onMouseLeave={() => setIsPaused(false)}
            >
                <img src={images[currentImageIndex]} alt="Interior Slide" />
                <button className="prevButton" onClick={goToPrevImage}>이전</button>
                <button className="nextButton" onClick={goToNextImage}>다음</button>
            </div>
        </div>
    );
};

export default Interior;