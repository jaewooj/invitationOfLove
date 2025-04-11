import React, { useEffect } from 'react';
import './Map.css';

const Map = () => {
    useEffect(()=>{
        const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        const options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(37.47919156511174, 126.65907618444382), //지도의 중심좌표.
            level: 2, //지도의 레벨(확대, 축소 정도)
        };
        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        
        //마커가 표시 될 위치
        const markerPosition = new kakao.maps.LatLng(
            37.47919156511174, 126.65907618444382
        );

        // 지도에 확대 축소 컨트롤을 생성
        const zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

        // 마커를 생성
        const marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커를 지도 위에 표시
        marker.setMap(map);
                // 새로고침 버튼 클릭 시 지도 초기화
                const resetMap = () => {
                    map.setCenter(new kakao.maps.LatLng(37.47919156511174, 126.65907618444382));
                    map.setLevel(2);
                };
        
                // 새로고침 버튼에 이벤트 리스너 추가
                const refreshButton = document.getElementById('refreshButton');
                refreshButton.addEventListener('click', resetMap);

    },[])

    return (
        <div className="companyMap">
            <div className="pic">
                <div className="map" id="map"></div>
                <div className="mapBox">
                    <p>주소</p>
                    <p>인천광역시 미추홀구 염전로 143, 3층
                        <br />
                        (도화동 831-4)
                    </p>
                    <ul>
                        <li>T. 032-876-9152</li>
                        <li>F. 032-876-9153</li>
                    </ul>

                </div>
            </div>

            <button id="refreshButton" className="refresh-button">지도 초기화</button>
        </div>
    );
};

export default Map;