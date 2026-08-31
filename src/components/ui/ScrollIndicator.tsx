'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleModalOpened = () => {
      setIsModalOpen(true);
    };

    const handleModalClosed = () => {
      setIsModalOpen(false);
    };

    window.addEventListener('modal-opened', handleModalOpened);
    window.addEventListener('modal-closed', handleModalClosed);

    return () => {
      window.removeEventListener('modal-opened', handleModalOpened);
      window.removeEventListener('modal-closed', handleModalClosed);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Check if near the bottom (within 100px)
      const nearBottom = scrollTop + windowHeight >= documentHeight - 100;
      
      setIsAtBottom(nearBottom);
      
      // Show arrow when user scrolls
      setIsVisible(true);
      
      // Reset the timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // Hide after 3 seconds of inactivity
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    };

    const handleMouseMove = () => {
      // Show arrow when user moves cursor
      setIsVisible(true);
      
      // Reset the timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // Hide after 3 seconds of inactivity
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    };

    // Check on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initial timeout
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
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

  return (
    <AnimatePresence>
      {isVisible && !isModalOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
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
      )}
    </AnimatePresence>
  );
}
