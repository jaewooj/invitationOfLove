import React from 'react';
import './DirectionDt.css'

const DirectionDt = () => {
    return (
        <div className="direction-details" style={{ marginTop: '30px' }}>
            <div style={{ marginBottom: '20px' }}>
                <h3 style={{ fontSize: '18px', color: '#888' }}>🚇 지하철</h3>
                <p>인천 1호선 갈산역 2번 출구 (부평역 환승)</p>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <h3 style={{ fontSize: '18px', color: '#888' }}>🚌 버스</h3>
                <p><strong>일반:</strong> 90 / 간선 : 12, 30, 34, 67-1</p>
                <p><strong>지선:</strong> 555, 584-1, 526</p>
                <p><strong>시외:</strong> 1400, 3000, 5000, 9500, 3030</p>
            </div>
            <div>
                <h3 style={{ fontSize: '18px', color: '#888' }}>🚗 주차</h3>
                <p>하객 주차장 ▶ 부평 유림라이온스밸리 주차장 (인천시 부평구 부평대로 283)</p>
                <p>주차 후 웨스턴팰리스로 이동 (도보 5분 이내)</p>
            </div>
        </div>
    );
};

export default DirectionDt;