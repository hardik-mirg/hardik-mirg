import React from 'react';
import './styles/pages.css';

const Profile = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Profile</h1>
      <div className="glass-panel profile-content">
        <p>I am Hardik Mirg, a developer passionate about creating visually stunning, interactive web experiences.</p>
        <p>Experienced in React, WebGL, Three.js, and premium front-end animations.</p>
        <div className="profile-tech">
          <span className="tech-tag">React</span>
          <span className="tech-tag">Three.js</span>
          <span className="tech-tag">GSAP</span>
          <span className="tech-tag">CSS Grid</span>
          <span className="tech-tag">WebGL</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
