'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { Project } from '@/types';
import ScrollIndicator from '@/components/ui/ScrollIndicator';
import SecretUnlockedAnimation from '@/components/ui/SecretUnlockedAnimation';

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>('all');
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>(['all']);
  const [secretUnlocked, setSecretUnlocked] = useState(false);

  // Check localStorage on mount (client-side only)
  useEffect(() => {
    // Check if secret projects are unlocked
    const isUnlocked = localStorage.getItem('secretProjectsUnlocked') === 'true';
    setSecretUnlocked(isUnlocked);

    // Listen for unlock event
    const handleUnlock = () => {
      setSecretUnlocked(true);
    };
    window.addEventListener('secret-unlocked', handleUnlock);

    return () => window.removeEventListener('secret-unlocked', handleUnlock);
  }, []);

  // Load projects whenever secretUnlocked changes
  useEffect(() => {
    async function loadProjects() {
      try {
        const response = await fetch('/api/projects');
        if (response.ok) {
          const data = await response.json();
          
          // Always filter out secret projects if not unlocked
          const filteredProjects = data.projects.filter((p: Project) => {
            if (p.id === 'vitap-marketplace') {
              return secretUnlocked;
            }
            return true;
          });
          
          setProjects(filteredProjects);
          
          // Extract unique categories from filtered projects
          const uniqueCategories = ['all', ...Array.from(new Set(
            filteredProjects.map((p: Project) => p.category).filter(Boolean)
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
  }, [secretUnlocked]);
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter((p: Project) => p.category === filter);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-16 relative">
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-primary via-[#111111] to-primary">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full filter blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
        <div className="container mx-auto px-6">
          <div className="text-center py-20">
            <div className="inline-block w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-text-secondary text-lg">Loading projects from GitHub...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 relative">
      {/* Animated Background - Same as Hero */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-primary via-[#111111] to-primary">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full filter blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full filter blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(#00ADB5 1px, transparent 1px), linear-gradient(90deg, #00ADB5 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            My <span className="text-accent">Projects</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A collection of my work showcasing various technologies and solutions
            <br />
            <span className="text-sm text-accent">Auto-synced with GitHub • Updates hourly</span>
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category as string)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-accent text-black'
                  : 'bg-secondary/50 backdrop-blur-sm text-text-secondary hover:text-accent border border-accent/20 hover:border-accent/50'
              }`}
            >
              {(category as string).charAt(0).toUpperCase() + (category as string).slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Project Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-8"
        >
          <p className="text-text-secondary">
            Showing <span className="text-accent font-semibold">{filteredProjects.length}</span> projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project, index: number) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-text-secondary text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
      <ScrollIndicator />
      <SecretUnlockedAnimation />
    </div>
  );
}
