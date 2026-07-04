import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

const TiltWrapper = ({ children, options = {}, className = '' }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current && window.innerWidth > 768) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        scale: 1.02,
        ...options,
      });
    }

    // Cleanup function
    return () => {
      if (tiltRef.current && tiltRef.current.vanillaTilt) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, [options]);

  return (
    <div ref={tiltRef} className={`tilt-wrapper ${className}`} style={{ height: '100%', width: '100%' }}>
      {children}
    </div>
  );
};

export default TiltWrapper;
