'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function BangAnimation() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Listen for the custom event from navbar
    const handleBangTrigger = () => {
      setShow(true);
      // Hide after animation completes
      setTimeout(() => {
        setShow(false);
      }, 2000);
    };

    window.addEventListener('bang-animation', handleBangTrigger);
    return () => window.removeEventListener('bang-animation', handleBangTrigger);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Main BANG text */}
          <motion.div
            className="relative"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              duration: 0.6 
            }}
          >
            <div className="text-[20rem] font-black text-accent drop-shadow-[0_0_50px_rgba(0,173,181,0.8)]">
              BANG!
            </div>
          </motion.div>

          {/* Explosion particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-accent rounded-full"
              initial={{ 
                x: 0, 
                y: 0, 
                scale: 1,
                opacity: 1 
              }}
              animate={{ 
                x: Math.cos(i * 30 * Math.PI / 180) * 300,
                y: Math.sin(i * 30 * Math.PI / 180) * 300,
                scale: 0,
                opacity: 0
              }}
              transition={{ 
                duration: 1,
                ease: "easeOut"
              }}
            />
          ))}

          {/* Shockwave rings */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`ring-${i}`}
              className="absolute border-4 border-accent rounded-full"
              initial={{ 
                width: 0, 
                height: 0, 
                opacity: 1 
              }}
              animate={{ 
                width: 600 + (i * 200), 
                height: 600 + (i * 200), 
                opacity: 0 
              }}
              transition={{ 
                duration: 1.5,
                delay: i * 0.1,
                ease: "easeOut"
              }}
            />
          ))}

          {/* Stars */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute text-6xl"
              initial={{ 
                x: 0, 
                y: 0, 
                scale: 0,
                rotate: 0,
                opacity: 1 
              }}
              animate={{ 
                x: Math.cos((i * 45 + 22.5) * Math.PI / 180) * 400,
                y: Math.sin((i * 45 + 22.5) * Math.PI / 180) * 400,
                scale: 1.5,
                rotate: 360,
                opacity: 0
              }}
              transition={{ 
                duration: 1.2,
                ease: "easeOut"
              }}
            >
              ⭐
            </motion.div>
          ))}

          {/* Flash effect */}
          <motion.div
            className="absolute inset-0 bg-accent"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
