import React from 'react';
import './styles/pages.css';

const Music = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Music Room</h1>
      
      <div className="music-panel">
        <p style={{ fontSize: '0.65rem', lineHeight: '1.5', color: '#aaa' }}>
          Tune in to my favorite curation of coding beats and space soundtracks.
        </p>
        
        <div className="spotify-container">
          <iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0SM134ZqNqq?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify playlist"
          />
        </div>
      </div>
    </div>
  );
};

export default Music;
