import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer id="footer">
            <div className="inner">
                <div className="copCon">
                    <div className="first">
                        <p>대표: </p>
                        <p>주소: 인천광역시 </p>
                    </div>
                    <div className="sec">
                        <p>Tel: 032-876-9152</p>
                        <p>Fax: 032-876-9153</p>
                    </div>
                    <div className="third">
                        <p>Copyright (주)언니에게. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;