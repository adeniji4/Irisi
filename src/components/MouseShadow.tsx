
import React, { useEffect, useState } from 'react';

const MouseShadow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if device is desktop (not mobile or tablet)
    const checkIsDesktop = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isLargeScreen = window.innerWidth >= 1024; // Only show on screens 1024px and above
      setIsDesktop(!isTouchDevice && isLargeScreen);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);

    const updateMousePosition = (e: MouseEvent) => {
      if (isDesktop) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    if (isDesktop) {
      window.addEventListener('mousemove', updateMousePosition);
    }

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('resize', checkIsDesktop);
    };
  }, [isDesktop]);

  // Don't render anything on mobile/tablet
  if (!isDesktop) return null;

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        transform: 'translate(-50%, -50%)',
        transition: 'all 0.1s ease-out',
      }}
    >
      {/* Enhanced main cursor glow */}
      <div 
        className="w-20 h-20 bg-black rounded-full opacity-20 blur-lg"
        style={{
          boxShadow: '0 0 60px 30px rgba(0, 0, 0, 0.4)',
        }}
      />
      {/* Secondary glow layer */}
      <div 
        className="absolute top-1/2 left-1/2 w-12 h-12 bg-black rounded-full opacity-30 blur-md transform -translate-x-1/2 -translate-y-1/2"
        style={{
          boxShadow: '0 0 30px 15px rgba(0, 0, 0, 0.3)',
        }}
      />
      {/* Inner cursor dot */}
      <div 
        className="absolute top-1/2 left-1/2 w-2 h-2 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default MouseShadow;
