import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Galaxy from './Galaxy';
import GlobalClickSounds from './GlobalClickSounds';
import Dock from './Dock';
import { Home, History, FolderGit, Newspaper, BookOpen, Music, Camera, Mail } from "lucide-react";

export default function Layout() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const items = [
    { icon: <Home size={isMobile ? 14 : 18} />, label: 'Home', onClick: () => navigate("/") },
    { icon: <History size={isMobile ? 14 : 18} />, label: 'Timeline', onClick: () => navigate("/timeline") },
    { icon: <FolderGit size={isMobile ? 14 : 18} />, label: 'Projects', onClick: () => navigate("/projects") },
    { icon: <Newspaper size={isMobile ? 14 : 18} />, label: 'Blog', onClick: () => navigate("/blog") },
    { icon: <BookOpen size={isMobile ? 14 : 18} />, label: 'Library', onClick: () => navigate("/library") },
    { icon: <Music size={isMobile ? 14 : 18} />, label: 'Music', onClick: () => navigate("/music") },
    { icon: <Camera size={isMobile ? 14 : 18} />, label: 'Photography', onClick: () => navigate("/photography") },
    { icon: <Mail size={isMobile ? 14 : 18} />, label: 'Contact', onClick: () => navigate("/contact") },
  ];

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -10 }}>
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={2}
          glowIntensity={0.5}
          saturation={1}
          hueShift={130}
          twinkleIntensity={1.5}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.9}
          speed={1}
          transparent={false}
        />
      </div>
      
      <GlobalClickSounds />

      {/* Main page content area */}
      <div style={{ width: '100%', height: '100%', overflow: 'auto' }}>
        <Outlet />
      </div>

      <Dock
        className="dock"
        items={items}
        panelHeight={isMobile ? 52 : 68}
        baseItemSize={isMobile ? 36 : 50}
        magnification={isMobile ? 36 : 70}
      />
    </div>
  );
}
