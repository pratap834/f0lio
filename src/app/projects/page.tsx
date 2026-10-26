'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { Project } from '@/types';
import ScrollIndicator from '@/components/ui/ScrollIndicator';

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>('all');
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>(['all']);

  // Load projects
  useEffect(() => {
    async function loadProjects() {
      try {
        const response = await fetch('/api/projects');
        if (response.ok) {
          const data = await response.json();
          setProjects(data.projects);
          
          // Extract unique categories from projects
          const uniqueCategories = ['all', ...Array.from(new Set(
            data.projects.map((p: Project) => p.category).filter(Boolean)
          ))] as string[];
          setCategories(uniqueCategories);
        }
      } catch (error) {
        console.error('Error loading projects:', error);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter((p: Project) => p.category === filter);

  if (loading) {
    return (
      <div className="min-h-screen pt-28 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center py-32">
            <div className="inline-block w-6 h-6 border-2 border-text-primary border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-text-muted text-sm font-mono">Loading projects from GitHub...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-2">Portfolio</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-text-primary mb-3">
            Projects
          </h1>
          <p className="text-text-secondary text-base max-w-2xl">
            A collection of my work in Machine Learning, AI systems, and cloud automation.
          </p>
          <p className="text-xs font-mono text-text-muted mt-2">
            Auto-synced with GitHub · Cached hourly
          </p>
        </motion.div>

        {/* Filter Buttons & Count */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pt-4 border-t border-border">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-wrap gap-1.5"
          >
            {categories.map((category) => {
              const isActive = filter === category;
              return (
                <button
                  key={category}
                  onClick={() => setFilter(category as string)}
                  className={`px-3 py-1.5 rounded-md font-medium text-xs transition-colors duration-200 ${
                    isActive
                      ? 'bg-text-primary text-background'
                      : 'bg-surface border border-border text-text-secondary hover:text-text-primary hover:border-[#404040]'
                  }`}
                >
                  {(category as string).charAt(0).toUpperCase() + (category as string).slice(1)}
                </button>
              );
            })}
          </motion.div>

          <p className="text-xs text-text-muted font-mono">
            Showing <span className="text-text-primary font-semibold">{filteredProjects.length}</span> projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project: Project, index: number) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 border border-border rounded-lg bg-surface mt-6"
          >
            <p className="text-text-secondary text-sm">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
      <ScrollIndicator />
    </div>
  );
}
