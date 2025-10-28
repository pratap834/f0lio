'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
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
          {project.featured && (
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
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 rounded-lg bg-accent text-black text-sm font-semibold text-center hover:bg-accent/90 transition-colors"
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
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
