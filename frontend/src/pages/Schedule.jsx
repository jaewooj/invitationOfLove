import React, { useState } from 'react';
import './Schedule.css';

const Schedule = () => {



    return (
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
            
    );
};

export default Schedule;