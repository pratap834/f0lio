'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroOverlay() {
  return (
    <div className="container mx-auto px-6 max-w-6xl w-full">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="max-w-3xl"
      >
        {/* Understated professional descriptor */}
        <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-5">
          Machine Learning Engineer
        </p>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary mb-6 leading-[1.08]">
          Hi, I&apos;m Pratap.
        </h1>

        {/* Supporting Line */}
        <p className="text-xl sm:text-2xl text-text-primary font-normal leading-relaxed mb-4">
          Building intelligent AI systems from scratch to production.
        </p>

        {/* Supporting details reflecting portfolio content */}
        <p className="text-base text-text-secondary leading-relaxed mb-9 max-w-2xl">
          Specializing in deep learning, Vision Transformers, and scalable MLOps pipelines. Experienced in optimizing enterprise data workflows and architecting production-grade machine learning solutions.
        </p>

        {/* Clear Actions */}
        <div className="flex flex-wrap items-center gap-3.5">
          <Link
            href="#projects"
            className="px-5 py-2.5 rounded-md text-sm font-medium bg-[#F2F2F2] text-[#090909] hover:bg-[#E5E5E5] transition-colors inline-flex items-center gap-1.5"
          >
            Explore Projects
            <span aria-hidden="true">↓</span>
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-md text-sm font-medium bg-surface text-text-primary border border-border hover:bg-surface-hover hover:border-[#383838] transition-colors inline-flex items-center gap-1.5"
          >
            View Resume
            <span aria-hidden="true"></span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}