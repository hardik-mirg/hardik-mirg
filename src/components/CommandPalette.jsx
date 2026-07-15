import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import './styles/commandPalette.css';

const paletteItems = [
  { name: 'Home', path: '/' },
  { name: 'Timeline', path: '/timeline' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Library', path: '/library' },
  { name: 'Music', path: '/music' },
  { name: 'Photography', path: '/photography' },
  { name: 'Contact', path: '/contact' },
  { name: 'Email Contact', path: 'mailto:contact@hardik.dpdns.org', isExternal: true },
  { name: 'GitHub Profile', path: 'https://github.com/hardik-mirg', isExternal: true },
  { name: 'LinkedIn Profile', path: 'https://www.linkedin.com/in/hardikmirg/', isExternal: true }
];

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const portalAudioRef = useRef(null);
  const epAudioRef = useRef(null);

  useEffect(() => {
    portalAudioRef.current = new Audio('/sounds/end_portal.mp3');
    epAudioRef.current = new Audio('/sounds/ep.mp3');
  }, []);

  const playPortalSound = () => {
    if (portalAudioRef.current) {
      portalAudioRef.current.currentTime = 0;
      portalAudioRef.current.play().catch(err => console.log("Audio play blocked:", err));
    }
  };

  const playEpSound = () => {
    if (epAudioRef.current) {
      epAudioRef.current.currentTime = 0;
      epAudioRef.current.play().catch(err => console.log("Audio play blocked:", err));
    }
  };

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Toggle on Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => {
          if (!prev) playPortalSound();
          return !prev;
        });
      }
      // Toggle on '/' when not in input/textarea
      if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        setIsOpen((prev) => {
          if (!prev) playPortalSound();
          return true;
        });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Auto focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      setSearch('');
      setSelectedIndex(0);
      document.body.classList.add('command-palette-open');
    } else {
      document.body.classList.remove('command-palette-open');
    }
    return () => {
      document.body.classList.remove('command-palette-open');
    };
  }, [isOpen]);

  // Filter items
  const filteredItems = paletteItems.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // Keyboard navigation inside open palette
  const handlePanelKeyDown = (e) => {
    if (!isOpen) return;

    if (e.key === 'Escape') {
      setIsOpen(false);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => 
        filteredItems.length === 0 ? 0 : (prev + 1) % filteredItems.length
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => 
        filteredItems.length === 0 ? 0 : (prev - 1 + filteredItems.length) % filteredItems.length
      );
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        handleSelect(filteredItems[selectedIndex]);
      }
    }
  };

  const handleSelect = (item) => {
    playEpSound();
    if (item.isExternal) {
      window.open(item.path, '_blank');
    } else {
      navigate(item.path);
    }
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="palette-overlay" onClick={() => setIsOpen(false)}>
      <div 
        className="palette-modal" 
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handlePanelKeyDown}
      >
        <div className="palette-search-container">
          <Search size={16} className="palette-search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="palette-input"
            placeholder="Type a command or route..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedIndex(0);
            }}
          />
          <span className="palette-esc-badge">ESC</span>
        </div>

        <div className="palette-results" ref={listRef}>
          {filteredItems.length === 0 ? (
            <div className="palette-no-results">No results found</div>
          ) : (
            filteredItems.map((item, idx) => (
              <div
                key={item.path}
                className={`palette-item ${idx === selectedIndex ? 'selected' : ''}`}
                onClick={() => handleSelect(item)}
                onMouseEnter={() => setSelectedIndex(idx)}
              >
                <span className="palette-item-name">{item.name}</span>
                <span className="palette-item-shortcut">
                  {item.isExternal ? 'Open Link' : `Go to ${item.path}`}
                </span>
              </div>
            ))
          )}
        </div>
        
        <div className="palette-footer">
          <span>↑↓ to navigate</span>
          <span>↵ to select</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
