import React from 'react';
import './IntroSection.css';

const IntroSection = () => {
    return (
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
    );
};

export default IntroSection;