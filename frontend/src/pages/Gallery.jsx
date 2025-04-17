import React, { useState } from 'react';
import './Gallery.css';

const images = [
  '/images/main_img.png',
  '/images/main_img1.png',
  '/images/main_img.png',
  '/images/main_img1.png',
  '/images/main_img.png',
  '/images/main_img1.png',
  '/images/main_img.png',
  '/images/main_img1.png',
  '/images/main_img.png',
  '/images/main_img1.png',
  '/images/main_img.png',
  '/images/main_img1.png',
  '/images/main_img.png',
  '/images/main_img1.png',
  '/images/main_img.png',
  // 더 많은 이미지 경로 추가 가능
];

const Gallery = () => {
  const [visibleCount, setVisibleCount] = useState(9);
  const [popupIndex, setPopupIndex] = useState(null);

  const handleMore = () => setVisibleCount((prev) => prev + 10);
  const openPopup = (index) => setPopupIndex(index);
  const closePopup = () => setPopupIndex(null);
  const prevImage = () => setPopupIndex((prev) => (prev > 0 ? prev - 1 : prev));
  const nextImage = () => setPopupIndex((prev) => (prev < images.length - 1 ? prev + 1 : prev));

  return (
    <div className="gallery-section">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.slice(0, visibleCount).map((src, idx) => (
          <div key={idx} className="gallery-thumb" onClick={() => openPopup(idx)}>
            <img src={src} alt={`갤러리${idx + 1}`} />
          </div>
        ))}
      </div>

      {visibleCount < images.length && (
        <button className="load-more" onClick={handleMore}>더보기</button>
      )}
    {popupIndex !== null && (
        <>
            <div className="popup-backdrop" onClick={closePopup}></div>
            <div className="popup-overlay" onClick={closePopup}>
            <div className="popup-inner" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={closePopup}>✖</button>
                <div className="popup-image-wrapper">
                    <button className="nav-btn left" onClick={prevImage}>
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                            <path d="M15 6L9 12L15 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                <img src={images[popupIndex]} alt={`팝업 이미지 ${popupIndex + 1}`} />
                    <button className="nav-btn right" onClick={nextImage}>
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                            <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
                <p className="image-index">{popupIndex + 1} / {images.length}</p>
            </div>
            </div>
        </>
      )}
    </div>
  );
};

export default Gallery;