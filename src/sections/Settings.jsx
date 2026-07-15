import React, { useState } from 'react';
import './styles/pages.css';

const Settings = () => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [particlesDensity, setParticlesDensity] = useState('High');

  return (
    <div className="page-container">
      <h1 className="page-title">Settings</h1>
      <div className="glass-panel settings-group">
        <div className="setting-row">
          <span>SFX Audio:</span>
          <button 
            className="toggle-btn"
            onClick={() => setSoundEnabled(!soundEnabled)}
          >
            {soundEnabled ? 'ON' : 'OFF'}
          </button>
        </div>
        <div className="setting-row">
          <span>Particles:</span>
          <button 
            className="toggle-btn"
            onClick={() => setParticlesDensity(prev => prev === 'High' ? 'Low' : 'High')}
          >
            {particlesDensity}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
