import React, { useEffect } from 'react';
import './Footer.css';
import { FaComment, FaLink } from 'react-icons/fa';

const Footer = () => {
    const WEDDING_URL = 'https://invitationoflove.netlify.app'; // 여기에 실제 청첩장 URL 입력

    // 카카오 SDK 로딩
    useEffect(() => {
        if (!window.Kakao) {
            const script = document.createElement('script');
            script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
            script.onload = () => {
                if (window.Kakao && !window.Kakao.isInitialized()) {
                    window.Kakao.init('32cc479b4f2d09792eebb78d6ad84755'); // 여기에 발급받은 앱 키 입력
                }
            };
            document.head.appendChild(script);
        }
    }, []);

    // 카카오톡 공유하기
    const handleKakaoShare = () => {
        if (window.Kakao) {
            window.Kakao.Link.sendDefault({
                objectType: 'feed',
                content: {
                    title: '정아들 ❤️ 서딸램 우리 결혼합니다',
                    /* description: '소중한 날, 함께해 주세요', */
                    imageUrl: 'https://invitationoflove.netlify.app/images/main_img.png', // 썸네일 이미지
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
        }
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