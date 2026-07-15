import React, { useState, useEffect } from 'react';
import './styles/pages.css';

const defaultPhotos = [
  { title: 'Neon Rain (Tokyo)', path: '/images/street.png' },
  { title: 'Morning Rays (Alpine)', path: '/images/mountain.png' }
];

const Photography = () => {
  const [photos, setPhotos] = useState([]);
  const [fetchStatus, setFetchStatus] = useState('Fetching...');
  const [isFallback, setIsFallback] = useState(false);

  useEffect(() => {
    fetch('/api/photography')
      .then(res => {
        if (!res.ok) throw new Error(`Server returned ${res.status}`);
        return res.json();
      })
      .then(data => {
        setPhotos(data || defaultPhotos);
        setFetchStatus('Online');
      })
      .catch(err => {
        console.warn('Photography API fail:', err.message);
        setPhotos([]);
        setFetchStatus('Failed to fetch');
        setIsFallback(true);
      });
  }, []);

  return (
    <div className="page-container" style={{ justifyContent: 'flex-start' }}>
      <h1 className="page-title" style={{ marginTop: '2rem' }}>Photography</h1>

      <div style={{ fontSize: '0.55rem', color: isFallback ? '#ff5f56' : '#00ffcc', marginBottom: '1.5rem', textAlign: 'center' }}>
        System Status: {fetchStatus}
      </div>
      
      {isFallback ? (
        <div style={{ textAlign: 'center', margin: '4rem auto', fontSize: '0.75rem', color: '#ff5f56', lineHeight: '1.8' }}>
          NO RECORD FOUND.<br />
          FAILED TO FETCH PHOTOGRAPHY IMAGES.
        </div>
      ) : (
        <div className="photo-grid">
          {photos.map((photo, idx) => (
            <div key={idx} className="photo-card">
              <img src={photo.path} alt={photo.title} className="photo-img" />
              <div className="photo-title-text">{photo.title}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Photography;
