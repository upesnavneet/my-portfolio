import React, { useEffect, useState, useRef } from 'react';

const CustomScrollbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(0);
  const isDragging = useRef(false);
  const startY = useRef(0);
  const startScrollTop = useRef(0);
  const frameId = useRef(null);

  const updateScroll = () => {
    if (!isDragging.current) {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;
      const progress = scrollY / (documentHeight - windowHeight);
      setScrollProgress(isNaN(progress) ? 0 : progress);
      setThumbHeight(Math.max(5, (windowHeight / documentHeight) * 100));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', updateScroll);
    updateScroll();
    
    // Also update on a small interval initially to catch dynamic loading height changes
    const interval = setInterval(updateScroll, 500);
    
    return () => {
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', updateScroll);
      clearInterval(interval);
    };
  }, []);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    startY.current = e.clientY;
    startScrollTop.current = window.scrollY;
    document.body.style.userSelect = 'none';
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    
    if (frameId.current) cancelAnimationFrame(frameId.current);
    
    frameId.current = requestAnimationFrame(() => {
      const deltaY = e.clientY - startY.current;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const thumbHeightPx = (thumbHeight / 100) * windowHeight;
      const movableArea = windowHeight - thumbHeightPx;
      
      if (movableArea <= 0) return;
      
      const scrollDelta = (deltaY / movableArea) * (documentHeight - windowHeight);
      window.scrollTo(0, startScrollTop.current + scrollDelta);
      
      // Update visual instantly while dragging
      const newScrollY = startScrollTop.current + scrollDelta;
      const clampedScroll = Math.max(0, Math.min(newScrollY, documentHeight - windowHeight));
      const progress = clampedScroll / (documentHeight - windowHeight);
      setScrollProgress(isNaN(progress) ? 0 : progress);
    });
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    document.body.style.userSelect = '';
    window.removeEventListener('pointermove', handlePointerMove);
    window.removeEventListener('pointerup', handlePointerUp);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      right: 0,
      width: '12px',
      height: '100vh',
      zIndex: 99999,
      display: 'flex',
      justifyContent: 'center',
      pointerEvents: 'none' // The container passes clicks through
    }}>
      <div 
        onPointerDown={handlePointerDown}
        style={{
          position: 'absolute',
          top: `${scrollProgress * (100 - thumbHeight)}%`,
          width: '8px',
          height: `${thumbHeight}%`,
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          cursor: 'grab',
          pointerEvents: 'auto', // The thumb itself catches clicks
          transition: isDragging.current ? 'none' : 'background-color 0.2s',
          marginTop: scrollProgress === 0 ? '2px' : '0',
          marginBottom: scrollProgress === 1 ? '2px' : '0',
        }} 
        onMouseEnter={(e) => e.target.style.backgroundColor = '#cccccc'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#ffffff'}
      />
    </div>
  );
};

export default CustomScrollbar;
