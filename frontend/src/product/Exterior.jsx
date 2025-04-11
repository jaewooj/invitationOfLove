import React from 'react';
import './Exterior.css'
import './ExteriorM.css'

const Exterior = () => {
    return (
        <div className="exterior">
            <div className="title">
                <p>시각적 효과 극대화를 통한 고객 편이성 향상</p>
                <h4>채널형 간판</h4>
            </div>
            <div className="signImg">
                <img src="/images/chImg.jpg" alt="" />
            </div>
        </div>
    );
};

export default Exterior;