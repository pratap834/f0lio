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
        <div className="relative h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-secondary/20 backdrop-blur-sm border border-accent/15 overflow-hidden transition-all duration-300 group-hover:border-accent/40 group-hover:bg-secondary/30 group-hover:shadow-[0_8px_30px_rgba(0,173,181,0.12)]">
          {/* Card Top: Folder/Code Icon & Badges */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.75}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
              </div>

              {project.featured && (
                <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Featured
                </span>
              )}
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors duration-200 mb-2.5 line-clamp-1">
              {project.title}
            </h3>
            <p className="text-text-secondary text-sm line-clamp-3 leading-relaxed mb-6">
              {project.description}
            </p>
          </div>

          {/* Card Bottom: Tech Stack & Action Links */}
          <div>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-primary/40 border border-accent/15 text-text-secondary group-hover:border-accent/30 group-hover:text-accent/90 transition-colors"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 4 && (
                <span className="px-3 py-1 text-xs rounded-full bg-primary/40 border border-accent/15 text-text-secondary">
                  +{project.tech.length - 4}
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4 border-t border-accent/10">
              {(project.demo || project.link) && (
                <a
                  href={project.demo || project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2.5 rounded-xl bg-accent text-black text-xs font-semibold text-center hover:bg-accent/90 transition-colors"
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
                  className="flex-1 px-4 py-2.5 rounded-xl border border-accent/30 text-accent text-xs font-semibold text-center hover:bg-accent/10 transition-colors"
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
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              onClick={() => setIsExpanded(false)}
            />

            {/* Expanded Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 28, stiffness: 350 }}
              className="fixed inset-4 md:inset-10 lg:inset-20 z-50 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-full rounded-2xl bg-secondary/85 backdrop-blur-xl border border-accent/25 shadow-[0_20px_60px_rgba(0,173,181,0.2)] overflow-y-auto">
                {/* Modal Top Header */}
                <div className="p-6 md:p-8 border-b border-accent/15 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.75}
                          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      {project.category && (
                        <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                          {project.category}
                        </span>
                      )}
                      {project.status && (
                        <span className="ml-3 inline-flex items-center gap-1.5 text-xs text-text-secondary">
                          <span className="w-2 h-2 rounded-full bg-green-400"></span>
                          {project.status}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {project.featured && (
                      <span className="px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-semibold">
                        Featured
                      </span>
                    )}
                    <button
                      onClick={() => setIsExpanded(false)}
                      className="w-9 h-9 rounded-full bg-primary/50 border border-accent/20 flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-accent/50 transition-colors"
                      aria-label="Close modal"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 lg:p-10">
                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                    {project.title}
                  </h2>

                  {/* Short Description */}
                  <p className="text-text-secondary text-base md:text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Long Description */}
                  {project.longDescription && (
                    <div className="mb-8">
                      <h3 className="text-lg font-bold text-accent mb-3">About This Project</h3>
                      <p className="text-text-secondary leading-relaxed whitespace-pre-line text-sm md:text-base">
                        {project.longDescription}
                      </p>
                    </div>
                  )}

                  {/* Key Features */}
                  {project.keyFeatures && project.keyFeatures.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-lg font-bold text-accent mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {project.keyFeatures.map((feature, i) => (
                          <li key={i} className="flex gap-3 text-text-secondary text-sm md:text-base">
                            <span className="text-accent mt-0.5 flex-shrink-0">▹</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-accent mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3.5 py-1.5 text-xs md:text-sm rounded-full bg-primary/50 border border-accent/20 text-accent font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-lg font-bold text-accent mb-3">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3.5 py-1.5 text-xs md:text-sm rounded-full bg-primary/30 border border-accent/10 text-text-secondary font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-accent/15">
                    {(project.demo || project.link) && (
                      <a
                        href={project.demo || project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl bg-accent text-black text-sm font-semibold hover:bg-accent/90 transition-colors flex items-center gap-2"
                      >
                        <span>View Live Demo →</span>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl border border-accent/30 text-accent text-sm font-semibold hover:bg-accent/10 transition-colors flex items-center gap-2"
                      >
                        <span>View on GitHub →</span>
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
