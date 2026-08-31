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

  const getCategoryIcon = (category?: string) => {
    switch (category) {
      case 'Computer Vision & AI':
        return '👁️';
      case 'Deep Learning & Vision':
        return '🧠';
      case 'Generative AI & LLMs':
        return '⚡';
      case 'NLP & Machine Learning':
        return '💬';
      case 'Full Stack & Systems':
        return '🌐';
      default:
        return '🤖';
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        whileHover={{ y: -6 }}
        className="group cursor-pointer h-full"
        onClick={() => setIsExpanded(true)}
      >
        <div className="relative h-full flex flex-col justify-between rounded-2xl bg-secondary/50 backdrop-blur-sm border border-accent/10 overflow-hidden transition-all duration-300 hover:border-accent/40 hover:shadow-[0_12px_40px_rgba(0,173,181,0.2)]">
          {/* Card Header & Visual Graphic */}
          <div className="relative h-44 bg-gradient-to-br from-primary via-secondary to-[#152528] overflow-hidden border-b border-accent/10">
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Ambient orb */}
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-500" />

            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/80 border border-accent/30 shadow-[0_0_20px_rgba(0,173,181,0.15)] flex items-center justify-center mb-2 group-hover:scale-110 group-hover:border-accent transition-all duration-300">
                <span className="text-3xl">{getCategoryIcon(project.category)}</span>
              </div>
              <span className="text-xs font-semibold text-accent/80 tracking-wide uppercase">
                {project.category || 'AI Project'}
              </span>
            </div>

            {project.id === 'vitap-marketplace' && (
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-accent text-black text-xs font-semibold flex items-center gap-1 shadow-lg animate-pulse">
                <span>🔒</span>
                <span>Secret Project</span>
              </div>
            )}
            {project.featured && project.id !== 'vitap-marketplace' && (
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-accent text-black text-xs font-bold shadow-md">
                Featured
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <div className="mb-3">
                <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors mb-2 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 text-xs rounded-full bg-primary/90 border border-accent/20 text-accent font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-primary/90 border border-accent/20 text-text-secondary font-medium">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>
            </div>

            {/* Quick Actions / Links */}
            <div className="flex gap-2 pt-2 border-t border-accent/10">
              <button
                type="button"
                className="flex-1 px-3 py-2 rounded-lg bg-accent/15 border border-accent/30 text-accent text-xs font-semibold text-center hover:bg-accent hover:text-black transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(true);
                }}
              >
                View Details
              </button>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg border border-accent/20 text-text-secondary hover:text-accent hover:border-accent/40 text-xs font-semibold text-center transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Expanded Modal View */}
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
              onClick={handleClose}
            />

            {/* Expanded Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-3 sm:inset-6 md:inset-10 lg:inset-16 z-50 overflow-hidden flex items-center justify-center p-2 sm:p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl bg-[#141414] border border-accent/30 shadow-[0_20px_80px_rgba(0,173,181,0.3)] overflow-y-auto flex flex-col">
                {/* Header Banner */}
                <div className="relative h-44 sm:h-52 bg-gradient-to-r from-[#0d1f23] via-secondary to-[#0d1f23] p-6 flex flex-col justify-between border-b border-accent/20 flex-shrink-0">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      {project.category && (
                        <span className="px-3.5 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-semibold">
                          {project.category}
                        </span>
                      )}
                      {project.status && (
                        <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                          {project.status}
                        </span>
                      )}
                    </div>

                    {/* Close Button (X) */}
                    <button
                      type="button"
                      onClick={handleClose}
                      className="w-10 h-10 rounded-full bg-primary/80 border border-accent/30 text-accent hover:bg-accent hover:text-black flex items-center justify-center transition-all duration-200 shadow-lg"
                      aria-label="Close modal"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-accent/20 border border-accent/40 flex items-center justify-center text-3xl">
                      {getCategoryIcon(project.category)}
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
                        {project.title}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
                  {/* Short Description */}
                  <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                    {project.description}
                  </p>

                  {/* Long Detailed Description */}
                  {project.longDescription && (
                    <div className="space-y-3">
                      <h3 className="text-lg font-bold text-accent">About This Project</h3>
                      <p className="text-text-secondary leading-relaxed whitespace-pre-line text-sm sm:text-base">
                        {project.longDescription}
                      </p>
                    </div>
                  )}

                  {/* Key Features */}
                  {project.keyFeatures && project.keyFeatures.length > 0 && (
                    <div className="space-y-3">
                      <h3 className="text-lg font-bold text-accent">Key Engineering Features</h3>
                      <ul className="space-y-2">
                        {project.keyFeatures.map((feature, i) => (
                          <li key={i} className="flex gap-3 text-text-secondary text-sm sm:text-base">
                            <span className="text-accent mt-0.5 flex-shrink-0">▹</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-accent">Technologies &amp; Frameworks</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs sm:text-sm rounded-lg bg-secondary border border-accent/20 text-accent font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="space-y-3">
                      <h3 className="text-lg font-bold text-accent">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs rounded-full bg-primary/60 border border-accent/15 text-text-secondary"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-accent/10">
                    {(project.demo || project.link) && (
                      <a
                        href={project.demo || project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl bg-accent text-black text-sm font-semibold hover:bg-accent/90 transition-all flex items-center gap-2 shadow-[0_4px_12px_rgba(0,173,181,0.3)]"
                      >
                        <span>🚀</span>
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl border border-accent/30 text-accent text-sm font-semibold hover:bg-accent/10 transition-all flex items-center gap-2"
                      >
                        <span>💻</span>
                        <span>View on GitHub</span>
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={handleClose}
                      className="px-6 py-3 rounded-xl border border-accent/20 text-text-secondary hover:text-text-primary text-sm font-medium transition-colors ml-auto"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
