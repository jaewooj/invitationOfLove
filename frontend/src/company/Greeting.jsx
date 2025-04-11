import React from 'react';
import './Greeting.css';

const Greeting = () => {
    return (
        <div className="greeting">
            <img src="/images/ceoImg02.png" className="greetingImg" />
            <div className="ceoTt">
                <p>Eyed One은 병원 간판 디자인과 시공의 전문성으로 최상의 결과를 제공합니다.</p>
            </div>
            <div className="ceoCt">
                <p>Eyed One은 병원 간판 디자인과 시공에 대한 확고한 전문성을 바탕으로 설립되었습니다. 우리는 간판 하나만을 바라보며, 최상의 결과를 창출하기 위해 전념하고 있습니다.</p> 
                <p>병원 간판 디자인부터 제작, 시공에 이르기까지 모든 과정을 병원 환경에 최적화된 전문 서비스로 제공합니다. 
                Eyed One은 병원의 이미지와 신뢰를 높이는 간판 솔루션을 통해 의료 기관의 성공적인 브랜딩을 지원합니다.</p> 
                <p>
                    우리는 오직 병원 간판에 집중함으로써, 고객에게 보다 높은 품질과 세밀한 맞춤형 서비스를 제공할 수 있는 역량을 갖추고 있습니다. 
                    Eyed One은 병원 간판 디자인의 기준을 새롭게 정의하며, 병원 전문 간판 솔루션의 선두 주자로 자리매김하고 있습니다.</p>

            </div>
        </div>
    );
};

export default Greeting;