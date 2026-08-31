'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroOverlay() {
  const techPills = [
    'PyTorch',
    'Vision Transformers',
    'Multimodal AI',
    'FAISS Vector Search',
    'LLMs & GenAI',
    'FastAPI',
  ];

  return (
    <div className="w-full text-center flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="space-y-6 max-w-3xl mx-auto"
      >
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Available for AI / ML Engineer &amp; Intern Roles</span>
        </div>

        {/* Headline */}
        <div className="space-y-3">
          <h2 className="text-sm font-mono text-accent uppercase tracking-widest">
            Pratap Subramani
          </h2>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 leading-[1.15]">
            AI Engineer &amp; Machine Learning Specialist
          </h1>
        </div>

        {/* Description */}
        <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Building intelligent multimodal vision systems, fine-tuning deep learning architectures (ViTs, CNNs, LLMs), and deploying scalable backend inference pipelines.
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          {techPills.map((pill) => (
            <span
              key={pill}
              className="px-2.5 py-1 text-xs font-mono rounded-md bg-zinc-900/60 border border-zinc-800 text-zinc-400"
            >
              {pill}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <Link
            href="/projects"
            className="px-5 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-sm transition-colors shadow-sm"
          >
            Explore Projects
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800/90 border border-zinc-800 text-zinc-300 hover:text-white font-medium text-sm transition-colors"
          >
            Get In Touch
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg hover:bg-zinc-900 text-zinc-400 hover:text-zinc-200 font-medium text-sm transition-colors"
          >
            Resume ↗
          </a>
        </div>
      </motion.div>
    </div>
  );
}
