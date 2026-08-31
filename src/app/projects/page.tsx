'use client';

import React, { useState, useEffect } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { Project } from '@/types';
import ScrollIndicator from '@/components/ui/ScrollIndicator';

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>('all');
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>(['all']);

  useEffect(() => {
    async function loadProjects() {
      try {
        const response = await fetch('/api/projects');
        if (response.ok) {
          const data = await response.json();
          const allProjects: Project[] = data.projects || [];
          setProjects(allProjects);

          const uniqueCategories = [
            'all',
            ...Array.from(new Set(allProjects.map((p) => p.category).filter(Boolean))),
          ] as string[];
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

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen pt-28 pb-20 relative bg-primary">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-3">
          <p className="text-xs font-mono text-accent uppercase tracking-widest">
            Portfolio
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100">
            Projects &amp; Architectures
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Applied deep learning research, multimodal computer vision systems, generative AI engines, and scalable software platforms.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                filter === category
                  ? 'bg-zinc-100 text-zinc-950'
                  : 'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
              }`}
            >
              {category === 'all'
                ? 'All Projects'
                : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-72 rounded-xl bg-zinc-900/40 border border-zinc-800 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <>
            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project: Project, index: number) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-20 text-zinc-500 text-sm">
                No projects found in this category.
              </div>
            )}
          </>
        )}
      </div>
      <ScrollIndicator />
    </div>
  );
}
