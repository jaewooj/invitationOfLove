import React from 'react';
import { FiCopy } from 'react-icons/fi';
import { SiKakaotalk } from 'react-icons/si';
import { FaPhoneAlt, FaSms } from 'react-icons/fa';
import './HeartGiftSection.css';

const HeartGiftSection = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('계좌번호가 복사되었습니다!');
  };

  const AccountCard = ({ title, name, bank, account, phone, kakaoLink }) => (
    <div className="account-card">
      <div className="account-header">
        <span className="relation">{title}</span>
        <span className="name">{name}</span>
      </div>
      <div className="account-info">
        <span>{bank} {account}</span>
      </div>
      <div className="account-actions">
        <button className="copy-btn" onClick={() => copyToClipboard(`${bank} ${account}`)}>
          <FiCopy /> 복사
        </button>
        {kakaoLink && (
          <a className="kakao-btn" href={kakaoLink} target="_blank" rel="noopener noreferrer">
            <SiKakaotalk /> 송금
          </a>
        )}
        {phone && (
          <>
            <a className="call-btn" href={`tel:${phone}`}>
              <FaPhoneAlt /> 전화
            </a>
            <a className="sms-btn" href={`sms:${phone}`}>
              <FaSms /> 문자
            </a>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className="heart-gift-section">
      <h2 className="section-title">💌 마음 전하실 곳</h2>

      <div className="family-section">
        <details>
          <summary>신랑측</summary>
          <AccountCard
            title="신랑"
            name="김수호"
            bank="국민"
            account="123-456-78901234"
            phone="01012345678"
            kakaoLink="https://qr.kakaopay.com/EXAMPLE1"
          />
          <AccountCard
            title="혼주"
            name="김상철"
            bank="국민"
            account="234-567-89012345"
            phone="01023456789"
          />
        </details>

        <details>
          <summary>신부측</summary>
          <AccountCard
            title="신부"
            name="서예진"
            bank="신한"
            account="345-678-90123456"
            phone="01034567890"
            kakaoLink="https://qr.kakaopay.com/EXAMPLE2"
          />
          <AccountCard
            title="혼주"
            name="서정우"
            bank="신한"
            account="456-789-01234567"
            phone="01045678901"
          />
        </details>
      </div>
    </div>
  );
};

export default HeartGiftSection;