import React, { useEffect, useState, useRef } from 'react';
import './WeddingMap.css'

const WeddingMap = () => {
    const mapRef = useRef(null);
    useEffect(() => {
        if (window.kakao && window.kakao.maps) {
            window.kakao.maps.load(() => {
              const container = mapRef.current;
              const options = {
                center: new window.kakao.maps.LatLng(37.51583923789284, 126.72252151056179),
                level: 3,
              };
      
              const map = new window.kakao.maps.Map(container, options);
              // 지도 고정
              map.setDraggable(false); // 드래그 불가
              map.setZoomable(false); //확대 축수 비활성화

              
            // 확대/축소 버튼 추가
            const zoomControl = new window.kakao.maps.ZoomControl();
            map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
      
              const marker = new window.kakao.maps.Marker({
                position: options.center,
                map,
              });
      
              const infowindow = new window.kakao.maps.InfoWindow({
                content: '<div style="padding:5px;font-size:14px;">웨스턴팰리스웨딩하우스</div>',
              });
              infowindow.open(map, marker);
            });
          }
        }, []);
      

    return (
        <div className="map-section">
            <h2>오시는 길</h2>
            <p><strong>주소:</strong> 인천 부평구 부평대로 283 웨스턴팰리스웨딩하우스</p>
            <div
                id="map"
                // ref={mapContainerRef}
                ref={mapRef}
                style={{ width: '100%', height: '300px', borderRadius: '12px', marginTop: '10px' }}
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
            <div style={{ marginTop: '16px', display: 'flex', justifyContent:'center', gap: '10px' }}>
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
                    href={`nmap://route/car?dlat=37.51583923789284&dlng=126.72252151056179&dname=웨스턴팰리스웨딩하우스&appname=com.example.myapp`}
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
    );
};

export default WeddingMap;