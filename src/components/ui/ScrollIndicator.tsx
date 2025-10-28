'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Check if near the bottom (within 100px)
      const nearBottom = scrollTop + windowHeight >= documentHeight - 100;
      
      setIsAtBottom(nearBottom);
      
      // Always keep visible
      setIsVisible(true);
    };

    // Check on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (isAtBottom) {
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Scroll down one viewport
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
    >
      <button
        onClick={handleClick}
        className="inline-block text-text-secondary hover:text-accent transition-colors cursor-pointer"
        aria-label={isAtBottom ? "Scroll to top" : "Scroll down"}
      >
        <motion.div
          animate={{ 
            y: [0, 8, 0],
            rotate: isAtBottom ? 180 : 0
          }}
          transition={{ 
            y: { duration: 1.5, repeat: Infinity },
            rotate: { duration: 0.3 }
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="drop-shadow-lg"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </button>
    </motion.div>
  );
}
