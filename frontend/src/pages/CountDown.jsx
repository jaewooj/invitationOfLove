import React, { useState, useEffect } from 'react';
import './CountDown.css';

const CountDown = () => {
    const targetDate = new Date("2025-09-13T12:10:00");

    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = targetDate - now;

        if (difference <= 0) {
            return {
                days: '00',
                hours: '00',
                minutes: '00',
                seconds: '00',
                totalDays: 0
            };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        return {
            days: String(days).padStart(2, '0'),
            hours: String(hours).padStart(2, '0'),
            minutes: String(minutes).padStart(2, '0'),
            seconds: String(seconds).padStart(2, '0'),
            totalDays: days + 1
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="countdown-wrapper">
            <div className="countdown">
                <div className="countdown-box">
                    <div className="countdown-number">{timeLeft.days}</div>
                    <div className="countdown-label">DAYS</div>
                </div>
                <span>:</span>
                <div className="countdown-box">
                    <div className="countdown-number">{timeLeft.hours}</div>
                    <div className="countdown-label">HOUR</div>
                </div>
                <span>:</span>
                <div className="countdown-box">
                    <div className="countdown-number">{timeLeft.minutes}</div>
                    <div className="countdown-label">MIN</div>
                </div>
                <span>:</span>
                <div className="countdown-box">
                    <div className="countdown-number">{timeLeft.seconds}</div>
                    <div className="countdown-label">SEC</div>
                </div>
            </div>
            <p className="countdown-text">지훈 <span style={{ color: 'red' }}>❤️</span> 예진의 결혼식이 <span style={{ color: 'red' }}>{timeLeft.totalDays}일</span> 남았습니다.</p>
        </div>
    );
};

export default CountDown;