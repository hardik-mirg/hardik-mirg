import React, { useEffect, useRef } from 'react';

const GlobalClickSounds = () => {
  const leftAudioRef = useRef(null);
  const rightAudioRef = useRef(null);

  useEffect(() => {
    let rightAudio = Math.round(Math.random()) === 0 ? '/sounds/eoe1.mp3' : '/sounds/eoe2.mp3';
    leftAudioRef.current = new Audio('/sounds/ep.mp3');
    rightAudioRef.current = new Audio(rightAudio);

    const handleLeftClick = () => {
      if (leftAudioRef.current) {
        leftAudioRef.current.currentTime = 0;
        leftAudioRef.current.play().catch(err => console.log("Audio play blocked:", err));
      }
    };

    const handleRightClick = (event) => {
      // Prevents the browser's right-click context menu from opening
      event.preventDefault(); 
      
      if (rightAudioRef.current) {
        rightAudioRef.current.currentTime = 0;
        rightAudioRef.current.play().catch(err => console.log("Audio play blocked:", err));
      }
    };

    // Attach listeners to the global window
    window.addEventListener('click', handleLeftClick);
    window.addEventListener('contextmenu', handleRightClick);

    // Clean up listeners when component unmounts
    return () => {
      window.removeEventListener('click', handleLeftClick);
      window.removeEventListener('contextmenu', handleRightClick);
    };
  }, []);

  return null; // This component handles logic only, no UI needed
};

export default GlobalClickSounds;
