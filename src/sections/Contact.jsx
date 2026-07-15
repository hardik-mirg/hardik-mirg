import React from 'react';
import './styles/pages.css';

const Contact = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Contact</h1>
      <div className="glass-panel" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <p style={{ fontSize: '0.75rem', lineHeight: '1.6', color: '#ccc' }}>
          Feel free to reach out for collaborations, project discussions, or just to chat about technology!
        </p>
        <div className="contact-links" style={{ justifyContent: 'center' }}>
          <a href="mailto:contact@hardik.dpdns.org" className="contact-btn">Email</a>
          <a href="https://github.com/hardik-mirg" target="_blank" rel="noopener noreferrer" className="contact-btn">GitHub</a>
          <a href="https://www.linkedin.com/in/hardikmirg/" target="_blank" rel="noopener noreferrer" className="contact-btn">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
