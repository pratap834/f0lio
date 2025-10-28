'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function HeroOverlay() {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I&apos;m{' '}
          <span className="text-accent glow-text">Pratap</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Machine Learning Engineer • AI Researcher • Deep Learning Specialist
          <br />
          Building intelligent systems and deploying production-ready ML solutions
        </motion.p>
      </motion.div>
    </div>
  );
}
