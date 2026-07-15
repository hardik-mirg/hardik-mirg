import React from 'react';
import './styles/pages.css';

const Archive = () => {
  const projects = [
    { title: 'Project Alpha', desc: 'A retro-style WebGL space simulator built with Three.js.' },
    { title: 'Project Beta', desc: 'Pixel-perfect canvas physics engine for web-based platformers.' },
    { title: 'Project Gamma', desc: 'Custom GSAP animation orchestration utility library.' }
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Project Archive</h1>
      <div className="archive-grid">
        {projects.map((p, idx) => (
          <div key={idx} className="archive-card">
            <h2 className="card-title">{p.title}</h2>
            <p className="card-desc">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Archive;
