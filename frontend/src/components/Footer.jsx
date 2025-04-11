import React from 'react';
import './Footer.css'
import './FooterM.css'

const Footer = () => {
    return (
        <footer id="footer">
            <div className="inner">
                <div className="logoDiv">
                    {/* <p>병원간판 전문업체</p> */}
                    <img src="/images/logo_img.png" alt="" />
                </div>
                <div className="copCon">
                    <div className="first">
                        <p>주식회사 언니에게 </p>
                        <p>대표: 손효철</p>
                        <p>주소: 인천광역시 계양구 봉오대로 520번길 7-2</p>
                    </div>
                    <div className="sec">
                        <p>Tel: 032-876-9152</p>
                        <p>Fax: 032-876-9153</p>
                        <p>E-Mail: thsycjf123@naver.com</p>
                    </div>
                    <div className="third">
                        <p>사업자등록번호:204-82-01431</p>
                        <p>Copyright (주)언니에게. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;