import React from 'react';
import './styles/pages.css';

const libraryData = [
  {
    category: 'Favorite Videos',
    items: [
      { title: 'The Art of Code - Dylan Beattie', desc: 'A beautiful exploration of code as art and expression.', link: 'https://youtube.com' },
      { title: 'Three.js Journey Demo', desc: 'Stunning creative development showcase with WebGL.', link: 'https://youtube.com' }
    ]
  },
  {
    category: 'YouTube Channels',
    items: [
      { title: '3Blue1Brown', desc: 'Visual explanation of complex mathematical concepts.', link: 'https://youtube.com/@3blue1brown' },
      { title: 'Veritasium', desc: 'An element of truth - science and engineering stories.', link: 'https://youtube.com/@veritasium' }
    ]
  },
  {
    category: 'Articles',
    items: [
      { title: 'The Website Obesity Crisis', desc: 'Crucial article on modern web performance and bloated sizes.', link: 'https://idlewords.com' },
      { title: 'A Pixel is Not a Pixel', desc: 'Understanding screen resolution, viewport coordinates, and density.', link: 'https://quirksmode.org' }
    ]
  },
  {
    category: 'Research Papers',
    items: [
      { title: 'Attention Is All You Need', desc: 'The landmark Transformer architecture paper that revolutionized AI.', link: 'https://arxiv.org' },
      { title: 'Responsive Real-Time Obstacle Avoidance', desc: 'Paper on reactive path planning for terrestrial autonomous rovers.', link: 'https://ieee.org' }
    ]
  }
];

const Library = () => {
  return (
    <div className="page-container" style={{ justifyContent: 'flex-start' }}>
      <h1 className="page-title" style={{ marginTop: '2rem' }}>Library</h1>

      <div className="library-grid">
        {libraryData.map((sec, idx) => (
          <div key={idx} className="library-section-card">
            <h2 className="library-section-title">{sec.category}</h2>
            <div className="library-item-list">
              {sec.items.map((item, i) => (
                <div key={i}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="library-item-link">
                    {item.title}
                  </a>
                  <span className="library-item-desc">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
