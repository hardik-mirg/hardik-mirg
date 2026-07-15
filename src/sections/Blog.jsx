import React from 'react';
import './styles/pages.css';

const blogPosts = [
  {
    title: 'Compiling Native C++ Modules for Node.js',
    summary: 'A deep dive into writing custom FFI extensions and building Native Abstractions for Node.js (NAN).',
    date: 'Jul 10, 2026',
    category: 'Backend'
  },
  {
    title: 'Designing The Perfect Retro Physics Engine',
    summary: 'How to handle AABB collision detection, velocity integration, and sub-pixel alignment for retro platformers.',
    date: 'Jun 28, 2026',
    category: 'Physics'
  },
  {
    title: 'Orchestrating Complex ThreeJS Shader Passes',
    summary: 'A step-by-step guide on creating custom render passes, post-processing filters, and custom GLSL vertex modifiers.',
    date: 'May 15, 2026',
    category: 'WebGL'
  }
];

const Blog = () => {
  return (
    <div className="page-container" style={{ justifyContent: 'flex-start' }}>
      <h1 className="page-title" style={{ marginTop: '2rem' }}>Developer Logs</h1>
      
      <div className="blog-grid">
        {blogPosts.map((post, idx) => (
          <div key={idx} className="blog-card">
            <div className="blog-meta">
              <span className="blog-category">{post.category}</span>
              <span>{post.date}</span>
            </div>
            <h2 className="blog-title">{post.title}</h2>
            <p className="blog-summary">{post.summary}</p>
            <div className="blog-read-more">Read Log</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
