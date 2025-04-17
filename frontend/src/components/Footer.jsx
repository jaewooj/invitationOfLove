import React, { useEffect } from 'react';
import './Footer.css';
import { FaComment, FaLink } from 'react-icons/fa';

const Footer = () => {
    const WEDDING_URL = 'https://invitationoflove.netlify.app'; // 여기에 실제 청첩장 URL 입력

    useEffect(() => {
        const loadKakaoSdk = () => {
            if (!window.Kakao) {
                const script = document.createElement('script');
                script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
                script.async = true;
                script.onload = () => {
                    if (window.Kakao && !window.Kakao.isInitialized()) {
                        window.Kakao.init('32cc479b4f2d09792eebb78d6ad84755');
                        console.log('✅ Kakao SDK 초기화 완료');
                    }
                };
                document.head.appendChild(script);
            } else {
                if (!window.Kakao.isInitialized()) {
                    window.Kakao.init('32cc479b4f2d09792eebb78d6ad84755');
                    console.log('✅ Kakao SDK 초기화 재실행');
                }
            }
        };
    
        loadKakaoSdk();
    }, []);

    // 카카오톡 공유하기
    const handleKakaoShare = () => {
        if (!window.Kakao || !window.Kakao.isInitialized()) {
            alert('카카오 SDK가 아직 초기화되지 않았습니다. 잠시 후 다시 시도해주세요.');
            return;
        }
    
        if (!window.Kakao.Link) {
            alert('카카오 링크 기능이 로드되지 않았습니다. 새로고침 후 다시 시도해주세요.');
            return;
        }
    
        window.Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: '정아들 ❤️ 서딸램 우리 결혼합니다',
                imageUrl: 'https://invitationoflove.netlify.app/images/main_img.png',
                link: {
                    mobileWebUrl: WEDDING_URL,
                    webUrl: WEDDING_URL,
                },
            },
            buttons: [
                {
                    title: '청첩장 보기',
                    link: {
                        mobileWebUrl: WEDDING_URL,
                        webUrl: WEDDING_URL,
                    },
                },
            ],
        });
    };
    

    // 주소 복사하기
    const handleCopyAddress = async () => {
        try {
            await navigator.clipboard.writeText(WEDDING_URL);
            alert('주소가 복사되었습니다!');
        } catch (err) {
            alert('복사에 실패했습니다. 브라우저 설정을 확인해주세요.');
        }
    };

    return (
        <footer id="footer">
            <div className="share-container">
                <div className="share-item" onClick={handleKakaoShare}>
                    <FaComment className="icon" />
                    <span>카카오톡으로 공유하기</span>
                </div>
                <div className="share-item" onClick={handleCopyAddress}>
                    <FaLink className="icon" />
                    <span>청첩장 주소 복사하기</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;