'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroOverlay() {
  return (
    <div className="relative inset-0 z-10 flex flex-col items-center justify-center text-center px-6 h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 max-w-4xl mx-auto"
      >
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-accent/30 backdrop-blur-md shadow-[0_0_20px_rgba(0,173,181,0.2)]"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs md:text-sm font-medium text-text-primary">
            Open to <span className="text-accent font-semibold">AI Engineer</span> & <span className="text-accent font-semibold">ML Roles</span> (Full-time & Internships)
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I&apos;m{' '}
          <span className="text-accent glow-text">Pratap</span>
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl font-semibold text-text-primary max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          AI Engineer &amp; Machine Learning Specialist
        </motion.p>

        <motion.p
          className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Building multimodal AI systems, fine-tuning deep learning architectures (ViT, CNNs, LLMs), and deploying scalable real-time ML pipelines.
        </motion.p>

        {/* Skill Highlight Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 pt-2"
        >
          {['PyTorch', 'Vision Transformers', 'Multimodal AI', 'FAISS Vector Search', 'LLMs & GenAI', 'FastAPI & MLOps'].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-primary/80 border border-accent/20 text-accent backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <Link
            href="/projects"
            className="px-8 py-3.5 rounded-full bg-accent text-black font-semibold hover:bg-accent/90 transition-all duration-300 shadow-[0_4px_16px_rgba(0,173,181,0.3)] hover:shadow-[0_6px_24px_rgba(0,173,181,0.5)] hover:-translate-y-0.5"
          >
            Explore AI Projects →
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full border border-accent/40 text-text-primary hover:bg-accent/10 hover:border-accent transition-all duration-300 font-semibold backdrop-blur-sm"
          >
            Get In Touch
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
