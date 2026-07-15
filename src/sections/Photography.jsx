import React from 'react';
import './styles/pages.css';

const photos = [
  { title: 'Neon Rain (Tokyo)', path: '/images/street.png' },
  { title: 'Morning Rays (Alpine)', path: '/images/mountain.png' }
];

const Photography = () => {
  return (
    <div className="page-container" style={{ justifyContent: 'flex-start' }}>
      <h1 className="page-title" style={{ marginTop: '2rem' }}>Photography</h1>
      
      <div className="photo-grid">
        {photos.map((photo, idx) => (
          <div key={idx} className="photo-card">
            <img src={photo.path} alt={photo.title} className="photo-img" />
            <div className="photo-title-text">{photo.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photography;
