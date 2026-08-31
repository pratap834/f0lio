'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClose = useCallback(() => {
    setIsExpanded(false);
  }, []);

  // Handle ESC key and scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (isExpanded) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      window.dispatchEvent(new CustomEvent('modal-opened'));
    } else {
      document.body.style.overflow = 'unset';
      window.dispatchEvent(new CustomEvent('modal-closed'));
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isExpanded, handleClose]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        className="group cursor-pointer h-full"
        onClick={() => setIsExpanded(true)}
      >
        <div className="h-full flex flex-col justify-between rounded-xl bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200 p-5 sm:p-6 space-y-5">
          {/* Top meta */}
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-mono text-zinc-400 bg-zinc-950/60 border border-zinc-800 px-2 py-0.5 rounded">
                {project.category || 'AI / ML'}
              </span>
              {project.featured && (
                <span className="text-[11px] font-mono text-accent bg-accent-subtle border border-accent/20 px-2 py-0.5 rounded">
                  Featured
                </span>
              )}
            </div>

            <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-accent transition-colors leading-snug">
              {project.title}
            </h3>

            <p className="text-sm text-zinc-400 line-clamp-3 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Bottom stack & actions */}
          <div className="space-y-4 pt-2 border-t border-zinc-800/60">
            <div className="flex flex-wrap gap-1.5">
              {project.tech.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-mono text-zinc-400 bg-zinc-950/80 border border-zinc-800 px-2 py-0.5 rounded"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 4 && (
                <span className="text-[11px] font-mono text-zinc-500 px-1.5 py-0.5">
                  +{project.tech.length - 4}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between text-xs font-medium text-zinc-400 pt-1">
              <span className="group-hover:text-zinc-200 transition-colors">
                View details →
              </span>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-zinc-500 hover:text-accent transition-colors"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Expanded Modal Dialog */}
      <AnimatePresence>
        {isExpanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              onClick={handleClose}
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="relative w-full max-w-2xl max-h-[85vh] bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl overflow-y-auto p-6 sm:p-8 space-y-6 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 border-b border-zinc-800 pb-5">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-zinc-400 bg-zinc-950 border border-zinc-800 px-2.5 py-0.5 rounded">
                      {project.category || 'AI Project'}
                    </span>
                    {project.status && (
                      <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded">
                        {project.status}
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-zinc-100">
                    {project.title}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={handleClose}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Overview
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed whitespace-pre-line">
                  {project.longDescription || project.description}
                </p>
              </div>

              {/* Key Features */}
              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <div className="space-y-2.5">
                  <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    Key Features
                  </h3>
                  <ul className="space-y-2 text-sm text-zinc-300">
                    {project.keyFeatures.map((feature, i) => (
                      <li key={i} className="flex gap-2.5 items-start">
                        <span className="text-accent mt-1 text-xs">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div className="space-y-2.5">
                <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-zinc-950 border border-zinc-800 text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-800 gap-3">
                <div className="flex gap-2">
                  {(project.demo || project.link) && (
                    <a
                      href={project.demo || project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs sm:text-sm transition-colors"
                    >
                      Live Demo ↗
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium text-xs sm:text-sm transition-colors"
                    >
                      View Code ↗
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 rounded-lg text-zinc-400 hover:text-zinc-200 text-xs sm:text-sm transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
