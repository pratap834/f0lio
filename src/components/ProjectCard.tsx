'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
        whileHover={{ y: -6 }}
        className="group cursor-pointer h-full"
        onClick={() => setIsExpanded(true)}
      >
        <div className="relative h-full flex flex-col rounded-2xl bg-[#121722]/40 backdrop-blur-md border border-white/[0.08] overflow-hidden transition-all duration-300 group-hover:border-accent/40 group-hover:bg-[#18202e]/60 group-hover:shadow-[0_12px_36px_rgba(0,173,181,0.18)]">
          {/* Thumbnail Header */}
          <div className="relative h-48 bg-gradient-to-br from-[#1b2434]/60 via-[#111622]/80 to-[#0b0e16]/90 backdrop-blur-md overflow-hidden border-b border-white/[0.06]">
            {/* Ambient Lighting & Hover Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent opacity-40 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Glowing Graphic Container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/30 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(0,173,181,0.15)] group-hover:scale-105 group-hover:border-accent/60 group-hover:shadow-[0_0_30px_rgba(0,173,181,0.3)] transition-all duration-300">
                <span className="text-2xl font-bold text-accent tracking-wider font-mono">
                  {project.title.charAt(0)}
                </span>
              </div>
            </div>

            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent/15 backdrop-blur-md border border-accent/30 text-accent text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Featured
              </div>
            )}
          </div>

          {/* Content Body */}
          <div className="p-6 flex flex-col flex-grow justify-between">
            <div>
              <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300 mb-2 line-clamp-1">
                {project.title}
              </h3>
              <p className="text-text-secondary/80 text-sm line-clamp-2 leading-relaxed mb-4">
                {project.description}
              </p>
            </div>

            <div>
              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-lg bg-accent/10 border border-accent/20 text-accent/90 font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="px-2.5 py-1 text-xs rounded-lg bg-white/[0.05] border border-white/10 text-text-secondary font-medium">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>

              {/* Links */}
              <div className="flex gap-2.5 pt-3 border-t border-white/[0.06]">
                {(project.demo || project.link) && (
                  <a
                    href={project.demo || project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-gradient-to-r from-accent to-[#008B92] text-black text-xs font-bold text-center hover:brightness-110 transition-all duration-300 shadow-[0_2px_10px_rgba(0,173,181,0.25)] hover:shadow-[0_4px_16px_rgba(0,173,181,0.4)]"
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
                    className="flex-1 px-4 py-2.5 rounded-xl border border-white/15 bg-white/[0.03] text-text-primary text-xs font-semibold text-center hover:bg-white/[0.08] hover:border-accent/40 hover:text-accent transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub
                  </a>
                )}
              </div>
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
              className="fixed inset-0 bg-black/75 backdrop-blur-md z-50"
              onClick={() => setIsExpanded(false)}
            />

            {/* Expanded Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-4 md:inset-10 lg:inset-20 z-50 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-full rounded-2xl bg-[#0f131a]/95 backdrop-blur-2xl border border-white/15 shadow-[0_20px_80px_rgba(0,173,181,0.25)] overflow-y-auto">
                {/* Header Section */}
                <div className="relative h-48 md:h-64 bg-gradient-to-br from-[#1b2434]/80 via-[#111622]/90 to-[#0b0e16] backdrop-blur-md overflow-hidden border-b border-white/[0.1]">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/25 via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-accent/15 border border-accent/40 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(0,173,181,0.25)]">
                      <span className="text-5xl md:text-6xl font-bold text-accent font-mono">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-accent/20 backdrop-blur-md border border-accent/40 text-accent text-xs font-semibold flex items-center gap-2 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
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
                    <div className="inline-block px-4 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-sm font-semibold mb-6">
                      {project.category}
                    </div>
                  )}
                  {/* Status Badge */}
                  {project.status && (
                    <div className="inline-block px-4 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-sm font-semibold mb-6 ml-3">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-400"></span>
                        {project.status}
                      </span>
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

                  {/* Key Features */}
                  {project.keyFeatures && project.keyFeatures.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-accent mb-4">Key Features</h3>
                      <ul className="space-y-2">
                        {project.keyFeatures.map((feature, i) => (
                          <li key={i} className="flex gap-3 text-text-secondary">
                            <span className="text-accent mt-0.5 flex-shrink-0">▹</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-accent mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 text-sm rounded-full bg-accent/10 backdrop-blur-sm border border-accent/25 text-accent font-medium hover:border-accent/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-accent mb-4">Tags</h3>
                      <div className="flex flex-wrap gap-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-2 text-sm rounded-full bg-white/[0.04] border border-white/10 text-text-secondary font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    {(project.demo || project.link) && (
                      <a
                        href={project.demo || project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent to-[#008B92] text-black text-base font-bold hover:brightness-110 transition-all duration-300 shadow-[0_4px_16px_rgba(0,173,181,0.3)] hover:shadow-[0_6px_24px_rgba(0,173,181,0.5)] flex items-center gap-2"
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
                        className="px-8 py-3.5 rounded-xl border border-white/20 bg-white/[0.04] text-text-primary text-base font-semibold hover:bg-white/[0.09] hover:border-accent/40 hover:text-accent transition-all duration-300 flex items-center gap-2"
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
