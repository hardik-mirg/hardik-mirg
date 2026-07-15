import React, { useState, useEffect } from 'react';
import './styles/pages.css';

const defaultPlaylistUrl = "https://open.spotify.com/embed/playlist/37i9dQZF1DX0SM134ZqNqq?utm_source=generator";

const Music = () => {
  const [playlistUrl, setPlaylistUrl] = useState('');
  const [fetchStatus, setFetchStatus] = useState('Fetching...');
  const [isFallback, setIsFallback] = useState(false);

  useEffect(() => {
    fetch('https://api.hardik.dpdns.org/api/music')
      .then(res => {
        if (!res.ok) throw new Error(`Server returned ${res.status}`);
        return res.json();
      })
      .then(data => {
        setPlaylistUrl(data.url || defaultPlaylistUrl);
        setFetchStatus('Online');
      })
      .catch(err => {
        console.warn('Music API fail:', err.message);
        setPlaylistUrl('');
        setFetchStatus('Failed to fetch');
        setIsFallback(true);
      });
  }, []);

  return (
    <div className="page-container">
      <h1 className="page-title">Music Room</h1>

      <div style={{ fontSize: '0.55rem', color: isFallback ? '#ff5f56' : '#00ffcc', marginBottom: '1.5rem', textAlign: 'center' }}>
        System Status: {fetchStatus}
      </div>
      
      {isFallback ? (
        <div style={{ textAlign: 'center', margin: '4rem auto', fontSize: '0.75rem', color: '#ff5f56', lineHeight: '1.8' }}>
          NO RECORD FOUND.<br />
          FAILED TO FETCH SPOTIFY PLAYLIST.
        </div>
      ) : (
        <div className="music-panel">
          <p style={{ fontSize: '0.65rem', lineHeight: '1.5', color: '#aaa' }}>
            Tune in to my favorite curation of coding beats and space soundtracks.
          </p>
          
          <div className="spotify-container">
            {playlistUrl && (
              <iframe
                src={playlistUrl}
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify playlist"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Music;
