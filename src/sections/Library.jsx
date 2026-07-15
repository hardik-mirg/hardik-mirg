import React, { useState, useEffect } from 'react';
import './styles/pages.css';

const defaultLibraryData = {
  'Favorite Videos': [
    { title: 'The Art of Code - Dylan Beattie', description: 'A beautiful exploration of code as art and expression.', url: 'https://youtube.com' },
    { title: 'Three.js Journey Demo', description: 'Stunning creative development showcase with WebGL.', url: 'https://youtube.com' }
  ],
  'YouTube Channels': [
    { title: '3Blue1Brown', description: 'Visual explanation of complex mathematical concepts.', url: 'https://youtube.com/@3blue1brown' },
    { title: 'Veritasium', description: 'An element of truth - science and engineering stories.', url: 'https://youtube.com/@veritasium' }
  ],
  'Articles': [
    { title: 'The Website Obesity Crisis', description: 'Crucial article on modern web performance and bloated sizes.', url: 'https://idlewords.com' },
    { title: 'A Pixel is Not a Pixel', description: 'Understanding screen resolution, viewport coordinates, and density.', url: 'https://quirksmode.org' }
  ],
  'Research Papers': [
    { title: 'Attention Is All You Need', description: 'The landmark Transformer architecture paper that revolutionized AI.', url: 'https://arxiv.org' },
    { title: 'Responsive Real-Time Obstacle Avoidance', description: 'Paper on reactive path planning for terrestrial autonomous rovers.', url: 'https://ieee.org' }
  ]
};

const Library = () => {
  const [libraryData, setLibraryData] = useState({});
  const [fetchStatus, setFetchStatus] = useState('Fetching...');
  const [isFallback, setIsFallback] = useState(false);

  useEffect(() => {
    fetch('/api/library')
      .then(res => {
        if (!res.ok) throw new Error(`Server returned ${res.status}`);
        return res.json();
      })
      .then(data => {
        setLibraryData(data || defaultLibraryData);
        setFetchStatus('Online');
      })
      .catch(err => {
        console.warn('Library API fail:', err.message);
        setLibraryData({});
        setFetchStatus('Failed to fetch');
        setIsFallback(true);
      });
  }, []);

  return (
    <div className="page-container" style={{ justifyContent: 'flex-start' }}>
      <h1 className="page-title" style={{ marginTop: '2rem' }}>Library</h1>

      <div style={{ fontSize: '0.55rem', color: isFallback ? '#ff5f56' : '#00ffcc', marginBottom: '1.5rem', textAlign: 'center' }}>
        System Status: {fetchStatus}
      </div>

      {isFallback ? (
        <div style={{ textAlign: 'center', margin: '4rem auto', fontSize: '0.75rem', color: '#ff5f56', lineHeight: '1.8' }}>
          NO RECORD FOUND.<br />
          FAILED TO FETCH LIBRARY DATA.
        </div>
      ) : (
        <div className="library-grid">
          {Object.keys(libraryData).map((categoryName, idx) => (
            <div key={idx} className="library-section-card">
              <h2 className="library-section-title">{categoryName}</h2>
              <div className="library-item-list">
                {libraryData[categoryName].map((item, i) => (
                  <div key={i}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="library-item-link">
                      {item.title}
                    </a>
                    <span className="library-item-desc">{item.description}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Library;
