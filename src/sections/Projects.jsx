import React, { useState, useEffect } from 'react';
import { ExternalLink, FolderGit } from 'lucide-react';
import './styles/pages.css';

const defaultProjects = [
  {
    name: 'Autonav Rover',
    description: 'Autonomous obstacle avoidance rover control system using Dart and ROS.',
    github: 'https://github.com/hardikmirg/autonav-rover',
    demo: 'https://rover.hardik.tech',
    tags: ['Dart', 'C++', 'ROS', 'Flutter']
  },
  {
    name: 'Orbital Sim 3D',
    description: 'Interplanetary gravity simulator utilizing WebGL, React Three Fiber, and custom shaders.',
    github: 'https://github.com/hardikmirg/orbital-sim',
    demo: 'https://orbit.hardik.tech',
    tags: ['React', 'Three.js', 'WebGL', 'GSAP']
  },
  {
    name: 'Synth-Sequencer',
    description: 'Audio synthesizer and tracker sequencer matching classic retro gaming synthesizers.',
    github: 'https://github.com/hardikmirg/synth-sequencer',
    demo: 'https://synth.hardik.tech',
    tags: ['JS', 'Web Audio API', 'CSS Grid']
  }
];

const defaultStats = {
  commits: '340+',
  repositories: '18',
  stars: '95',
  views: '1,250'
};

const defaultCommits = [
  { sha: 'a87fd9', repo: 'orbital-sim', branch: 'main', message: 'feat: add orbital particle systems and postprocessing', time: '2 hours ago' },
  { sha: '7e2c0d', repo: 'portfolio', branch: 'dev', message: 'fix: optimize canvas bounds and resize handlers', time: '1 day ago' },
  { sha: '356673', repo: 'autonav-rover', branch: 'main', message: 'refactor: extract galaxy rendering loop to separate hook', time: '3 days ago' },
  { sha: '88b2de', repo: 'synth-sequencer', branch: 'main', message: 'docs: update setup instructions and asset requirements', time: '5 days ago' }
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [stats, setStats] = useState(null);
  const [commits, setCommits] = useState([]);
  const [fetchStatus, setFetchStatus] = useState('Fetching...');
  const [isFallback, setIsFallback] = useState(false);

  useEffect(() => {
    fetch('/api/projects')
      .then(res => {
        if (!res.ok) throw new Error(`Server returned ${res.status}`);
        return res.json();
      })
      .then(data => {
        setProjects(data.projects || defaultProjects);
        setStats(data.stats || defaultStats);
        setCommits(data.commits || defaultCommits);
        setFetchStatus('Online');
      })
      .catch(err => {
        console.warn('Projects API fail:', err.message);
        setProjects([]);
        setStats(null);
        setCommits([]);
        setFetchStatus('Failed to fetch');
        setIsFallback(true);
      });
  }, []);

  return (
    <div className="page-container" style={{ justifyContent: 'flex-start' }}>
      <h1 className="page-title" style={{ marginTop: '2rem' }}>Projects</h1>

      <div style={{ fontSize: '0.55rem', color: isFallback ? '#ff5f56' : '#00ffcc', marginBottom: '1.5rem', textAlign: 'center' }}>
        System Status: {fetchStatus}
      </div>

      {isFallback ? (
        <div style={{ textAlign: 'center', margin: '4rem auto', fontSize: '0.75rem', color: '#ff5f56', lineHeight: '1.8' }}>
          NO RECORD FOUND.<br />
          FAILED TO FETCH PROJECTS AND GITHUB DATA.
        </div>
      ) : (
        <div className="projects-container">
          {/* Custom Project Cards */}
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <div key={idx} className="project-card">
                <div className="project-header">
                  <FolderGit size={20} className="project-link-icon" style={{ color: '#00ffcc' }} />
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="project-link-icon">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={18} className="project-link-icon" />
                      </a>
                    )}
                  </div>
                </div>
                <h2 className="project-title">{project.name}</h2>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech-list">
                  {project.tags && project.tags.map((t, i) => (
                    <span key={i} className="project-tech">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* GitHub Stats Card */}
          {stats && (
            <div>
              <h2 className="page-title" style={{ fontSize: '0.9rem', textAlign: 'left', marginBottom: '1rem' }}>GitHub Stats</h2>
              <div className="stats-grid">
                <div className="stat-box">
                  <div className="stat-val">{stats.commits}</div>
                  <div className="stat-label">Commits</div>
                </div>
                <div className="stat-box">
                  <div className="stat-val">{stats.repositories}</div>
                  <div className="stat-label">Repositories</div>
                </div>
                <div className="stat-box">
                  <div className="stat-val">{stats.stars}</div>
                  <div className="stat-label">Stars Received</div>
                </div>
                <div className="stat-box">
                  <div className="stat-val">{stats.views || '0'}</div>
                  <div className="stat-label">Profile Views</div>
                </div>
              </div>
            </div>
          )}

          {/* Latest Commits Terminal Box */}
          <div>
            <h2 className="page-title" style={{ fontSize: '0.9rem', textAlign: 'left', marginBottom: '1rem' }}>Latest Commits</h2>
            <div className="terminal-box">
              <div className="terminal-header">
                <div className="terminal-dot-red" />
                <div className="terminal-dot-yellow" />
                <div className="terminal-dot-green" />
                <span style={{ marginLeft: '1rem', fontFamily: 'monospace' }}>bash - git log --oneline -n 4</span>
              </div>
              <div className="terminal-body">
                {commits.map((commit, idx) => (
                  <div key={idx} className="commit-log">
                    <span className="commit-sha">[{commit.sha}]</span>
                    <span className="commit-msg">
                      <span style={{ color: '#ffbd2e' }}>({commit.repo}/{commit.branch})</span> {commit.message}
                    </span>
                    <span className="commit-time">({commit.time})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
