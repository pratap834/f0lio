'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Manage body scroll and scroll indicator event when modal is open
  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
      window.dispatchEvent(new CustomEvent('modal-opened'));
    } else {
      document.body.style.overflow = 'unset';
      window.dispatchEvent(new CustomEvent('modal-closed'));
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isExpanded]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: index * 0.05 }}
        whileHover={{ y: -2 }}
        className="group cursor-pointer h-full"
        onClick={() => setIsExpanded(true)}
      >
        <div className="relative h-full flex flex-col justify-between p-5 sm:p-6 rounded-lg bg-surface border border-border hover:border-[#404040] hover:bg-surface-hover transition-colors">
          {/* Card Top */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-8 h-8 rounded border border-border bg-background flex items-center justify-center text-text-muted group-hover:text-text-primary transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
              </div>

              <div className="flex items-center gap-2">
                {project.category && (
                  <span className="text-[11px] font-mono text-text-muted uppercase">
                    {project.category}
                  </span>
                )}
                {project.featured && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono border border-border text-text-secondary bg-background">
                    Featured
                  </span>
                )}
              </div>
            </div>

            {/* Title & Description */}
            <h3 className="text-base sm:text-lg font-semibold text-text-primary group-hover:text-white transition-colors mb-2 line-clamp-1">
              {project.title}
            </h3>
            <p className="text-text-secondary text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
              {project.description}
            </p>

            {project.accessNote && (
              <div className="flex items-center gap-1.5 text-xs text-text-muted bg-background border border-border px-2.5 py-1.5 rounded mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 flex-shrink-0" />
                <span className="truncate text-[11px] font-mono">Private Access Required</span>
              </div>
            )}
          </div>

          {/* Card Bottom: Tech Stack & Action Links */}
          <div className="pt-2">
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs rounded border border-border bg-background text-text-muted font-mono"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 4 && (
                <span className="px-1.5 py-0.5 text-xs rounded text-text-muted font-mono">
                  +{project.tech.length - 4}
                </span>
              )}
            </div>

            {/* Action Links */}
            <div className="flex items-center gap-2 pt-3 border-t border-border/60">
              {(project.demo || project.link) && (
                <a
                  href={project.demo || project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-1.5 rounded bg-[#F2F2F2] text-[#090909] text-xs font-medium text-center hover:bg-[#E5E5E5] transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  Live Demo ↗
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-1.5 rounded border border-border bg-surface text-text-secondary text-xs font-medium text-center hover:text-text-primary hover:border-[#383838] transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub ↗
                </a>
              )}
              {project.accessNote && !project.demo && (
                <a
                  href="mailto:pratapsubramani@gmail.com?subject=Access%20Request%20for%20Project"
                  className="flex-1 py-1.5 rounded border border-border bg-surface text-text-secondary text-xs font-medium text-center hover:text-text-primary hover:border-[#383838] transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  Request Access
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Expanded Modal View */}
      <AnimatePresence>
        {isExpanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 bg-black/85 backdrop-blur-sm"
              onClick={() => setIsExpanded(false)}
            />

            {/* Expanded Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="relative w-full max-w-2xl max-h-[88vh] z-10 flex flex-col rounded-lg bg-surface border border-border shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`modal-title-${project.id}`}
            >
              {/* Modal Header */}
              <div className="p-5 sm:p-6 border-b border-border flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    {project.category && (
                      <span className="text-[11px] font-mono text-text-muted uppercase">
                        {project.category}
                      </span>
                    )}
                    {project.featured && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono border border-border text-text-secondary bg-background">
                        Featured
                      </span>
                    )}
                  </div>
                  <h2
                    id={`modal-title-${project.id}`}
                    className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary"
                  >
                    {project.title}
                  </h2>
                </div>

                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-1.5 rounded text-text-muted hover:text-text-primary hover:bg-surface-hover transition-colors"
                  aria-label="Close modal (Esc)"
                  title="Close (Esc)"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.75}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm text-text-secondary">
                {/* Description */}
                <div>
                  <p className="text-sm sm:text-base leading-relaxed text-text-primary">
                    {project.description}
                  </p>
                </div>

                {/* Long Description */}
                {project.longDescription && (
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-2">
                      About Project
                    </h3>
                    <p className="leading-relaxed whitespace-pre-line text-sm text-text-secondary">
                      {project.longDescription}
                    </p>
                  </div>
                )}

                {/* Key Features */}
                {project.keyFeatures && project.keyFeatures.length > 0 && (
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-2.5">
                      Key Capabilities & Highlights
                    </h3>
                    <ul className="space-y-2">
                      {project.keyFeatures.map((feature, i) => (
                        <li key={i} className="flex gap-2.5 text-text-secondary text-sm">
                          <span className="text-text-muted mt-0.5 select-none">—</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-2">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded border border-border bg-background text-text-secondary font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Access Instructions Callout */}
                {project.accessNote && (
                  <div className="p-4 rounded border border-border bg-background">
                    <p className="text-xs font-medium text-text-primary mb-1">
                      Private Access Notice
                    </p>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {project.accessNote}
                    </p>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 border-t border-border flex flex-wrap items-center justify-between gap-3 bg-surface">
                <span className="text-xs text-text-muted font-mono">
                  Press Esc to close
                </span>

                <div className="flex items-center gap-2.5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-md border border-border text-text-primary text-xs font-medium hover:bg-surface-hover hover:border-[#383838] transition-colors"
                    >
                      View on GitHub ↗
                    </a>
                  )}
                  {(project.demo || project.link) && (
                    <a
                      href={project.demo || project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-md bg-[#F2F2F2] text-[#090909] text-xs font-medium hover:bg-[#E5E5E5] transition-colors"
                    >
                      View Live Demo ↗
                    </a>
                  )}
                  {project.accessNote && !project.demo && (
                    <a
                      href="mailto:pratapsubramani@gmail.com?subject=Access%20Request%20for%20Deployment"
                      className="px-4 py-2 rounded-md bg-[#F2F2F2] text-[#090909] text-xs font-medium hover:bg-[#E5E5E5] transition-colors"
                    >
                      Request Access
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
