'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import { Project } from '@/types';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        const response = await fetch('/api/projects');
        if (response.ok) {
          const data = await response.json();
          setProjects(data.projects || []);
        }
      } catch (error) {
        console.error('Error loading projects:', error);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  const featuredProjects = projects.filter((p: Project) => p.featured).slice(0, 3);

  if (loading) {
    return (
      <section id="projects" className="py-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-mono text-accent uppercase tracking-widest">
              Selected Work
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
              Featured Projects
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-80 rounded-xl bg-zinc-900/40 border border-zinc-800 animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-8">
      <div className="space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs font-mono text-accent uppercase tracking-widest">
              Selected Work
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
              Featured AI Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-sm font-medium text-zinc-400 hover:text-accent transition-colors inline-flex items-center gap-1 self-start sm:self-auto"
          >
            <span>View all projects</span>
            <span>→</span>
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project: Project, index: number) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
