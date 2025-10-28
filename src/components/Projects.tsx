'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import projectsData from '@/data/projects.json';
import ProjectCard from './ProjectCard';
import { Project } from '@/types';

export default function Projects() {
  const featuredProjects = projectsData.filter((p: Project) => p.featured).slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Check out some of my recent work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project: Project, index: number) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/projects"
            className="inline-block px-8 py-4 rounded-full bg-accent text-black font-semibold hover:bg-accent/90 transition-all duration-300 shadow-[0_4px_12px_var(--border-glow)]"
          >
            View All Projects →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
