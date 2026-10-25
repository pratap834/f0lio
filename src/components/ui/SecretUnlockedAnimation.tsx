'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SecretUnlockedAnimation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleSecretUnlocked = () => {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 3000);
    };

    window.addEventListener('secret-unlocked', handleSecretUnlocked);
    return () => window.removeEventListener('secret-unlocked', handleSecretUnlocked);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center">
          {/* Explosion Particles */}
          {[...Array(16)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-3 h-3 rounded-full bg-[#F2F2F2]"
              initial={{ 
                x: 0, 
                y: 0, 
                scale: 0,
                opacity: 1 
              }}
              animate={{
                x: Math.cos((i * 2 * Math.PI) / 16) * 300,
                y: Math.sin((i * 2 * Math.PI) / 16) * 300,
                scale: [0, 1.5, 0],
                opacity: [1, 1, 0]
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut"
              }}
            />
          ))}

          {/* Shockwave Rings */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`ring-${i}`}
              className="absolute border border-[#52525B] rounded-full"
              initial={{ 
                width: 0, 
                height: 0, 
                opacity: 0.8 
              }}
              animate={{
                width: 600,
                height: 600,
                opacity: 0
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                ease: "easeOut"
              }}
            />
          ))}

          {/* Rotating Stars */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute text-white text-xl opacity-75"
              initial={{ 
                scale: 0,
                rotate: 0,
                x: 0,
                y: 0
              }}
              animate={{
                scale: [0, 1.5, 0],
                rotate: 360,
                x: Math.cos((i * 2 * Math.PI) / 12) * 250,
                y: Math.sin((i * 2 * Math.PI) / 12) * 250,
              }}
              transition={{
                duration: 1.8,
                delay: i * 0.05,
                ease: "easeOut"
              }}
            >
              ✨
            </motion.div>
          ))}

          {/* Flash Effect */}
          <motion.div
            className="absolute inset-0 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.08, 0] }}
            transition={{ duration: 0.5 }}
          />

          {/* Main Text */}
          <motion.div
            className="relative z-10 text-center"
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ 
              scale: [0, 1.3, 1], 
              rotate: 0, 
              opacity: 1 
            }}
            exit={{ 
              scale: 0, 
              rotate: 180, 
              opacity: 0 
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              duration: 0.8
            }}
          >
            <div className="relative">
              <h1 className="relative text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider text-[#F2F2F2]">
                <motion.span className="inline-block text-[#F2F2F2]">
                  Secret Projects
                </motion.span>
                <br />
                <motion.span className="inline-block text-[#A1A1AA]">
                  Unlocked
                </motion.span>
              </h1>

              {/* Lock Icon Animation */}
              <motion.div
                className="text-6xl mt-4"
                initial={{ scale: 1, rotate: 0 }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, -10, 10, -10, 0]
                }}
                transition={{
                  duration: 0.6,
                  repeat: 3,
                  ease: "easeInOut"
                }}
              >
                🔓
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
