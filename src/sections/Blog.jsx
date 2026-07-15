import React, { useState, useEffect } from 'react';
import './styles/pages.css';

const defaultBlogPosts = [
  {
    title: 'Compiling Native C++ Modules for Node.js',
    description: 'A deep dive into writing custom FFI extensions and building Native Abstractions for Node.js (NAN).',
    date: 'Jul 10, 2026',
    url: 'https://github.com'
  },
  {
    title: 'Designing The Perfect Retro Physics Engine',
    description: 'How to handle AABB collision detection, velocity integration, and sub-pixel alignment for retro platformers.',
    date: 'Jun 28, 2026',
    url: 'https://github.com'
  },
  {
    title: 'Orchestrating Complex ThreeJS Shader Passes',
    description: 'A step-by-step guide on creating custom render passes, post-processing filters, and custom GLSL vertex modifiers.',
    date: 'May 15, 2026',
    url: 'https://github.com'
  }
];

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [fetchStatus, setFetchStatus] = useState('Fetching...');
  const [isFallback, setIsFallback] = useState(false);

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => {
        if (!res.ok) throw new Error(`Server returned ${res.status}`);
        return res.json();
      })
      .then(data => {
        setBlogs(data || defaultBlogPosts);
        setFetchStatus('Online');
      })
      .catch(err => {
        console.warn('Blogs API fail:', err.message);
        setBlogs([]);
        setFetchStatus('Failed to fetch');
        setIsFallback(true);
      });
  }, []);

  return (
    <div className="page-container" style={{ justifyContent: 'flex-start' }}>
      <h1 className="page-title" style={{ marginTop: '2rem' }}>Developer Logs</h1>

      <div style={{ fontSize: '0.55rem', color: isFallback ? '#ff5f56' : '#00ffcc', marginBottom: '1.5rem', textAlign: 'center' }}>
        System Status: {fetchStatus}
      </div>
      
      {isFallback ? (
        <div style={{ textAlign: 'center', margin: '4rem auto', fontSize: '0.75rem', color: '#ff5f56', lineHeight: '1.8' }}>
          NO RECORD FOUND.<br />
          FAILED TO FETCH DEVELOPER LOGS.
        </div>
      ) : (
        <div className="blog-grid">
          {blogs.map((post, idx) => (
            <div key={idx} className="blog-card">
              <div className="blog-meta">
                <span className="blog-category">LOG</span>
                <span>{post.date}</span>
              </div>
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-summary">{post.description}</p>
              {post.url && (
                <a 
                  href={post.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="blog-read-more"
                  style={{ textDecoration: 'none' }}
                >
                  Read Log
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
