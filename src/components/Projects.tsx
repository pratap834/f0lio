'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import { Project } from '@/types';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  // Load projects
  useEffect(() => {
    async function loadProjects() {
      try {
        const response = await fetch('/api/projects');
        if (response.ok) {
          const data = await response.json();
          setProjects(data.projects);
        }
      } catch (error) {
        console.error('Error loading projects:', error);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  const featuredProjects = projects
    .filter((p: Project) => p.featured)
    .slice(0, 6);

  if (loading) {
    return (
      <section id="projects" className="py-20 border-t border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center py-16">
            <div className="inline-block w-6 h-6 border-2 border-text-primary border-t-transparent rounded-full animate-spin" />
            <p className="text-text-muted text-sm mt-4">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary mb-2">
            Featured Projects
          </h2>
          <p className="text-text-secondary text-sm md:text-base max-w-2xl">
            Check out some of my recent work in ML, AI systems, and cloud infrastructure
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project: Project, index: number) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-text-primary text-background font-medium hover:bg-white transition-colors duration-200 text-sm"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
