'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Hide scroll indicator when modal is open
  React.useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
      // Dispatch event to hide scroll indicator
      window.dispatchEvent(new CustomEvent('modal-opened'));
    } else {
      document.body.style.overflow = 'unset';
      // Dispatch event to show scroll indicator
      window.dispatchEvent(new CustomEvent('modal-closed'));
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isExpanded]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -8 }}
        className="group cursor-pointer"
        onClick={() => setIsExpanded(true)}
      >
      <div className="relative h-full rounded-2xl bg-secondary/50 backdrop-blur-sm border border-accent/10 overflow-hidden transition-all duration-300 hover:border-accent/30 hover:shadow-[0_12px_40px_rgba(0,173,181,0.15)]">
        {/* Thumbnail */}
        <div className="relative h-48 bg-secondary/50 backdrop-blur-sm overflow-hidden">
          <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-lg bg-accent/20 border-2 border-accent/40 flex items-center justify-center">
              <span className="text-3xl font-bold text-accent">P</span>
            </div>
          </div>
          {project.id === 'vitap-marketplace' && (
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-black text-xs font-semibold flex items-center gap-1 shadow-lg animate-pulse">
              <span>🔒</span>
              <span>Secret Project</span>
            </div>
          )}
          {project.featured && project.id !== 'vitap-marketplace' && (
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent text-black text-xs font-semibold">
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-3">
            <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors mb-2">
              {project.title}
            </h3>
            <p className="text-text-secondary text-sm line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-primary border border-accent/20 text-accent"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-3 py-1 text-xs rounded-full bg-primary border border-accent/20 text-text-secondary">
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            {(project.demo || project.link) && (
              <a
                href={project.demo || project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 rounded-lg bg-accent text-black text-sm font-semibold text-center hover:bg-accent/90 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 rounded-lg border border-accent/30 text-accent text-sm font-semibold text-center hover:bg-accent/10 transition-colors"
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={() => setIsExpanded(false)}
          />

          {/* Expanded Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 z-50 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-full rounded-2xl bg-secondary/90 backdrop-blur-xl border border-accent/30 shadow-[0_20px_80px_rgba(0,173,181,0.3)] overflow-y-auto">
              {/* Header Section */}
              <div className="relative h-48 md:h-64 bg-secondary/50 backdrop-blur-sm overflow-hidden border-b border-accent/20">
                <div className="absolute inset-0 bg-accent/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-accent/20 border-2 border-accent/40 flex items-center justify-center">
                    <span className="text-5xl md:text-6xl font-bold text-accent">P</span>
                  </div>
                </div>
                {project.id === 'vitap-marketplace' && (
                  <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-accent text-black text-sm font-semibold flex items-center gap-2 shadow-lg">
                    <span>🔒</span>
                    <span>Secret Project</span>
                  </div>
                )}
                {project.featured && project.id !== 'vitap-marketplace' && (
                  <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-accent text-black text-sm font-semibold shadow-lg">
                    Featured
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 lg:p-10">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                  {project.title}
                </h2>

                {/* Category Badge */}
                {project.category && (
                  <div className="inline-block px-4 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-semibold mb-6">
                    {project.category}
                  </div>
                )}

                {/* Short Description */}
                <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Long Description */}
                {project.longDescription && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-accent mb-4">About This Project</h3>
                    <p className="text-text-secondary leading-relaxed whitespace-pre-line">
                      {project.longDescription}
                    </p>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-accent mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-sm rounded-full bg-secondary/50 backdrop-blur-sm border border-accent/20 text-accent font-medium hover:border-accent/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  {(project.demo || project.link) && (
                    <a
                      href={project.demo || project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 rounded-lg bg-accent text-black text-base font-semibold hover:bg-accent/90 transition-all duration-300 shadow-[0_4px_12px_rgba(0,173,181,0.3)] hover:shadow-[0_6px_16px_rgba(0,173,181,0.5)] flex items-center gap-2"
                    >
                      <span>🚀</span>
                      <span>View Live Demo</span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 rounded-lg border-2 border-accent/30 text-accent text-base font-semibold hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 flex items-center gap-2"
                    >
                      <span>💻</span>
                      <span>View on GitHub</span>
                    </a>
                  )}
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
