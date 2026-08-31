'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ScrollIndicator from '@/components/ui/ScrollIndicator';
import BangAnimation from '@/components/ui/BangAnimation';
import skillsData from '@/data/skills.json';
import { Skill } from '@/types';

export default function AboutPage() {
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string>('all');

  const expertise = [
    {
      icon: '🧠',
      title: 'Deep Learning & Neural Architectures',
      description: 'Designing and training deep learning models including Vision Transformers (ViT), CNNs, and hybrid architectures using PyTorch and TensorFlow for complex classification and feature extraction.'
    },
    {
      icon: '👁️',
      title: 'Computer Vision & Multimodal AI',
      description: 'Building visual discovery and search systems integrating DINOv2 and Florence embeddings, FAISS vector indexing, and OpenCV image processing pipelines for real-time inference.'
    },
    {
      icon: '⚡',
      title: 'Generative AI & LLM Systems',
      description: 'Developing autonomous multi-agent simulation engines, prompt orchestration pipelines, and context-aware code generation using Gemini and OpenAI APIs.'
    },
    {
      icon: '⚙️',
      title: 'MLOps & Scalable API Engineering',
      description: 'Architecting high-throughput async microservices with FastAPI and Docker, automating data ingestion ETL pipelines, and optimizing SQL queries for enterprise workloads.'
    }
  ];

  const skillCategories = [
    { id: 'all', label: 'All Skills' },
    { id: 'ai_ml', label: 'AI & Deep Learning' },
    { id: 'data_science', label: 'CV, NLP & Data Science' },
    { id: 'backend', label: 'Backend & Systems' },
    { id: 'cloud_mlops', label: 'Cloud & MLOps' },
  ];

  const filteredSkills = selectedSkillCategory === 'all'
    ? (skillsData as Skill[])
    : (skillsData as Skill[]).filter(s => s.category === selectedSkillCategory);

  return (
    <div className="min-h-screen pt-24 pb-16 relative">
      {/* Animated Background */}
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/80 border border-accent/30 text-xs md:text-sm text-accent mb-4">
            <span>✨</span> Available for AI / ML Engineer &amp; Intern Roles
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="text-accent">Me</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            AI Engineer &amp; Machine Learning Specialist building production-ready intelligent systems
          </p>
        </motion.div>

        {/* Profile & Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-secondary/50 backdrop-blur-sm border border-accent/10 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
              {/* Profile Picture */}
              <motion.div 
                className="flex-shrink-0"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-accent/10 rounded-3xl blur-xl"></div>
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-accent/30 shadow-[0_20px_60px_rgba(0,173,181,0.3)] group">
                    <Image
                      src="/profile.jpg"
                      alt="Pratap - AI & Machine Learning Engineer"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </motion.div>
              
              {/* Bio Content */}
              <div className="flex-1 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-2">
                    Hi, I&apos;m <span className="text-accent">Pratap</span>
                  </h2>
                  <p className="text-xl text-accent font-semibold mb-6">AI Engineer &amp; Machine Learning Specialist</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="space-y-4 text-text-secondary text-base md:text-lg leading-relaxed"
                >
                  <p>
                    I am an <span className="text-accent font-semibold">AI Engineer &amp; Machine Learning Specialist</span> driven by building high-performance deep learning models and scalable real-time intelligent systems. My technical foundation bridges research-grade model architectures and robust production software engineering.
                  </p>
                  <p>
                    During my software engineering and research internship at <span className="text-accent font-semibold">Titan Company Ltd</span>, I contributed to ML research on <span className="text-text-primary font-medium">Vision Transformers (ViTs) and CNNs</span>, automated data extraction pipelines with Python, and solved enterprise query performance bottlenecks.
                  </p>
                  <p>
                    My project portfolio encompasses developing a <span className="text-text-primary font-medium">Multimodal Customer Experience platform</span> with DINOv2 and FAISS vector indexing, designing <span className="text-text-primary font-medium">Hybrid CNN-Transformer architectures</span> achieving 82% test accuracy on complex texture classification, and engineering LLM-powered multi-agent simulation engines using <span className="text-text-primary font-medium">FastAPI and PyTorch</span>.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4"
                >
                  <div className="p-4 rounded-xl bg-primary/50 border border-accent/20 hover:border-accent/40 transition-all duration-300">
                    <p className="text-xs text-text-secondary mb-1">Target Roles</p>
                    <p className="text-accent font-semibold text-sm sm:text-base">AI / ML Engineer</p>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/50 border border-accent/20 hover:border-accent/40 transition-all duration-300">
                    <p className="text-xs text-text-secondary mb-1">Core Tech</p>
                    <p className="text-accent font-semibold text-sm sm:text-base">PyTorch, ViT, FAISS</p>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/50 border border-accent/20 hover:border-accent/40 transition-all duration-300 col-span-2 sm:col-span-1">
                    <p className="text-xs text-text-secondary mb-1">Status</p>
                    <p className="text-emerald-400 font-semibold text-sm sm:text-base">Open for Opportunities</p>
                  </div>
                </motion.div>
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
            Core <span className="text-accent">Expertise</span>
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
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {area.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills Showcase Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">
              Technical <span className="text-accent">Skills</span>
            </h2>
            <p className="text-text-secondary text-base max-w-xl mx-auto">
              Technologies, deep learning frameworks, and engineering tools I leverage to build scalable AI systems
            </p>
          </div>

          {/* Skill Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedSkillCategory(category.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  selectedSkillCategory === category.id
                    ? 'bg-accent text-black shadow-[0_0_15px_rgba(0,173,181,0.4)]'
                    : 'bg-secondary/50 text-text-secondary hover:text-accent border border-accent/20 hover:border-accent/50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Skills Grid with Proficiency Bars */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="p-5 rounded-xl bg-secondary/40 backdrop-blur-sm border border-accent/10 hover:border-accent/30 transition-all duration-300 group hover:shadow-[0_4px_20px_rgba(0,173,181,0.1)]"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-text-primary group-hover:text-accent transition-colors">
                    {skill.name}
                  </span>
                  {skill.proficiency && (
                    <span className="text-xs font-mono text-accent">
                      {skill.proficiency}%
                    </span>
                  )}
                </div>
                {skill.proficiency && (
                  <div className="w-full h-1.5 bg-primary/80 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 0.8, delay: 0.1 + index * 0.04 }}
                      className="h-full bg-gradient-to-r from-accent/60 to-accent rounded-full"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="p-8 md:p-10 rounded-2xl bg-gradient-to-r from-secondary via-secondary/80 to-secondary border border-accent/20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Looking for an <span className="text-accent">AI / ML Engineer</span>?
          </h3>
          <p className="text-text-secondary max-w-xl mx-auto mb-6">
            I am actively seeking full-time and internship opportunities in AI Engineering, Machine Learning, and Computer Vision. Let&apos;s build something impactful together.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-accent text-black font-semibold hover:bg-accent/90 transition-all duration-300 shadow-[0_4px_16px_rgba(0,173,181,0.3)]"
            >
              Get In Touch →
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full border border-accent/30 text-accent hover:bg-accent/10 transition-all duration-300 font-semibold"
            >
              View Resume
            </a>
          </div>
        </motion.div>

      </div>
      <ScrollIndicator />
      <BangAnimation />
    </div>
  );
}
