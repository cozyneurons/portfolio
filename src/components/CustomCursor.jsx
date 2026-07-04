import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Dot follows instantly
  const dotX = useSpring(mouseX, { damping: 50, stiffness: 900, mass: 0.1 });
  const dotY = useSpring(mouseY, { damping: 50, stiffness: 900, mass: 0.1 });

  // Glow orb lags behind
  const orbX = useSpring(mouseX, { damping: 30, stiffness: 120, mass: 0.8 });
  const orbY = useSpring(mouseY, { damping: 30, stiffness: 120, mass: 0.8 });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setIsVisible(true);

    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const over = (e) => {
      const el = e.target;
      if (
        el.tagName.toLowerCase() === 'a' ||
        el.tagName.toLowerCase() === 'button' ||
        el.closest('a') ||
        el.closest('button') ||
        el.closest('.magnetic')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Glowing orb — lags behind */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: orbX,
          y: orbY,
          translateX: '-50%',
          translateY: '-50%',
          pointerEvents: 'none',
          zIndex: 9997,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)',
          mixBlendMode: 'difference',
        }}
        animate={{
          width: isHovering ? 90 : 55,
          height: isHovering ? 90 : 55,
          opacity: isHovering ? 0.6 : 0.45,
        }}
        transition={{ duration: 0.25 }}
      />

      {/* Sharp center dot */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          pointerEvents: 'none',
          zIndex: 9999,
          borderRadius: '50%',
          backgroundColor: 'white',
          mixBlendMode: 'difference',
        }}
        animate={{
          width: isHovering ? 8 : 5,
          height: isHovering ? 8 : 5,
          opacity: isHovering ? 1 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Thin outline ring */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          pointerEvents: 'none',
          zIndex: 9998,
          borderRadius: '50%',
          border: '1.5px solid white',
          mixBlendMode: 'difference',
        }}
        animate={{
          width: isHovering ? 45 : 28,
          height: isHovering ? 45 : 28,
          opacity: isHovering ? 0.8 : 0.5,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
};

export default CustomCursor;
