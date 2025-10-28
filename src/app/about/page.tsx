'use client';

import React from 'react';
import { motion } from 'framer-motion';
import skillsData from '@/data/skills.json';

export default function AboutPage() {
  const coreSkills = ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Deep Learning', 'NLP', 'Computer Vision', 'MLOps'];
  const techStack = ['Next.js', 'FastAPI', 'Docker', 'Kubernetes', 'AWS', 'SQL', 'Git', 'Pandas', 'NumPy'];
  
  const expertise = [
    {
      icon: '🧠',
      title: 'Machine Learning',
      description: 'Building end-to-end ML pipelines, from data preprocessing to model deployment, with focus on scalable and production-ready solutions.'
    },
    {
      icon: '📊',
      title: 'Data Engineering',
      description: 'Designing efficient data pipelines and automating workflows for large-scale data processing and analytics.'
    },
    {
      icon: '🔍',
      title: 'ML Research',
      description: 'Exploring Vision Transformers, CNNs, and modern architectures to optimize inference strategies for real-world applications.'
    },
    {
      icon: '⚡',
      title: 'Full Stack Development',
      description: 'Creating scalable web applications with modern frameworks, authentication systems, and data-centric platforms.'
    }
  ];

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
      
      <div className="container mx-auto px-6 max-w-6xl">
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
            Machine Learning Engineer building intelligent AI solutions
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-secondary/50 backdrop-blur-sm border border-accent/10 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center border-2 border-accent/30">
                  <span className="text-5xl font-bold text-accent">P</span>
                </div>
              </div>
              
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl font-bold">Hi, I&apos;m Pratap</h2>
                <p className="text-text-secondary text-lg leading-relaxed">
                  I&apos;m a <span className="text-accent font-semibold">Machine Learning Engineer</span> with hands-on experience in building data-driven solutions and intelligent systems. My work spans from optimizing SQL queries for enterprise data systems to contributing to ML research on Vision Transformers and CNNs.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Currently, I&apos;m developing scalable full-stack platforms with modern tech stacks while maintaining a strong focus on ML/AI integration. I specialize in creating efficient data pipelines, automated workflows, and production-ready ML solutions that solve real-world problems.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="px-4 py-2 rounded-lg bg-primary/50 border border-accent/20">
                    <p className="text-sm text-text-secondary">Location</p>
                    <p className="text-accent font-semibold">India</p>
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-primary/50 border border-accent/20">
                    <p className="text-sm text-text-secondary">Focus</p>
                    <p className="text-accent font-semibold">ML Engineering</p>
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-primary/50 border border-accent/20">
                    <p className="text-sm text-text-secondary">Available</p>
                    <p className="text-accent font-semibold">For Opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Expertise Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Expertise <span className="text-accent">Areas</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {expertise.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-secondary/30 backdrop-blur-sm border border-accent/10 rounded-xl p-6 hover:border-accent/30 transition-all duration-300 group"
                whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(0,173,181,0.15)' }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {area.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-12"
        >
          {/* Core ML Skills */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Core <span className="text-accent">ML Skills</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {coreSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-6 py-3 bg-secondary/50 backdrop-blur-sm border border-accent/20 rounded-full text-text-primary font-semibold hover:border-accent hover:bg-accent/10 transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Tech <span className="text-accent">Stack</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-6 py-3 bg-primary/50 border border-accent/10 rounded-full text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
