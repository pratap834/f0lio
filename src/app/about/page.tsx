'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import skillsData from '@/data/skills.json';

export default function AboutPage() {
  const skillsByCategory = {
    frontend: skillsData.filter(s => s.category === 'frontend'),
    backend: skillsData.filter(s => s.category === 'backend'),
    tools: skillsData.filter(s => s.category === 'tools'),
    other: skillsData.filter(s => s.category === 'other'),
  };

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
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="text-accent">Me</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Passionate about building innovative solutions and creating impactful digital experiences
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 mb-20 items-center"
        >
          <div className="relative">
            <div className="w-full aspect-square rounded-2xl bg-secondary border border-[rgba(255,255,255,0.05)] overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center border-2 border-accent/30">
                  <span className="text-6xl font-bold text-accent">P</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Hi, I&apos;m Pratap</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I&apos;m a <span className="text-accent font-semibold">Machine Learning Engineer</span> and <span className="text-accent font-semibold">AI Researcher</span> with a passion for building intelligent systems that solve real-world problems.
              </p>
              <p>
                My journey in tech is driven by deep learning, natural language processing, and computer vision. I specialize in deploying production-ready ML models and building scalable MLOps pipelines. From research to deployment, I transform complex problems into efficient AI solutions.
              </p>
              <p>
                With proficiency in TensorFlow, PyTorch, and modern deployment tools, I&apos;ve delivered models achieving 95%+ accuracy in production. I&apos;m passionate about staying at the forefront of AI innovation and contributing to open-source ML projects.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-4 py-2 rounded-lg bg-secondary border border-accent/20">
                <p className="text-sm text-text-secondary">Location</p>
                <p className="text-accent font-semibold">India</p>
              </div>
              <div className="px-4 py-2 rounded-lg bg-secondary border border-accent/20">
                <p className="text-sm text-text-secondary">Experience</p>
                <p className="text-accent font-semibold">3+ Years</p>
              </div>
              <div className="px-4 py-2 rounded-lg bg-secondary border border-accent/20">
                <p className="text-sm text-text-secondary">Projects</p>
                <p className="text-accent font-semibold">20+ Completed</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Skills & <span className="text-accent">Technologies</span>
          </h2>

          <div className="space-y-8">
            {Object.entries(skillsByCategory).map(([category, skills]) => (
              skills.length > 0 && (
                <div key={category}>
                  <h3 className="text-xl font-semibold mb-4 capitalize text-text-secondary">
                    {category}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="p-4 rounded-xl bg-secondary border border-[rgba(255,255,255,0.05)] hover:border-accent/30 transition-all duration-300 group"
                        whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(0,173,181,0.15)' }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-text-primary group-hover:text-accent transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-primary/50 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-accent"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.proficiency}%` }}
                            transition={{ duration: 1, delay: index * 0.05 + 0.5 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
