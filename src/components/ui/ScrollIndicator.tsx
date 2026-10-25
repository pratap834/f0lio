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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-40 hidden sm:block"
        >
          <button
            onClick={handleClick}
            className="p-2.5 rounded-md bg-surface/90 border border-border text-text-muted hover:text-text-primary hover:border-[#383838] hover:bg-surface-hover transition-colors shadow-sm"
            aria-label={isAtBottom ? "Scroll to top" : "Scroll down"}
            title={isAtBottom ? "Scroll to top" : "Scroll down"}
          >
            <motion.div
              animate={{ 
                rotate: isAtBottom ? 180 : 0
              }}
              transition={{ duration: 0.2 }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
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
