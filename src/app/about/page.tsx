'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ScrollIndicator from '@/components/ui/ScrollIndicator';
import skillsData from '@/data/skills.json';
import { Skill } from '@/types';

export default function AboutPage() {
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string>('all');

  const expertise = [
    {
      title: 'Deep Learning & Vision Transformers',
      description: 'Designing and training deep neural architectures including Vision Transformers (ViTs), CNNs, and custom hybrid models with PyTorch and TensorFlow for complex classification tasks.'
    },
    {
      title: 'Computer Vision & Multimodal Retrieval',
      description: 'Integrating foundation vision backbones (DINOv2, Florence) with FAISS high-speed vector indexing and OpenCV for sub-millisecond visual similarity search.'
    },
    {
      title: 'Generative AI & Autonomous Agent Systems',
      description: 'Developing multi-agent simulation workflows, structured prompt chaining, and domain-specific code generation using Gemini and OpenAI APIs.'
    },
    {
      title: 'MLOps, APIs & Scalable Data Pipelines',
      description: 'Architecting high-throughput async microservices with FastAPI and Docker, automating ETL pipelines in Python, and optimizing SQL queries for enterprise datasets.'
    }
  ];

  const skillCategories = [
    { id: 'all', label: 'All Skills' },
    { id: 'ai_ml', label: 'AI & Deep Learning' },
    { id: 'data_science', label: 'CV, NLP & Data' },
    { id: 'backend', label: 'Backend & Systems' },
    { id: 'cloud_mlops', label: 'Cloud & MLOps' },
  ];

  const filteredSkills = selectedSkillCategory === 'all'
    ? (skillsData as Skill[])
    : (skillsData as Skill[]).filter(s => s.category === selectedSkillCategory);

  return (
    <div className="min-h-screen pt-28 pb-20 relative bg-primary">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-20">
        
        {/* Page Header */}
        <div className="space-y-3 text-center sm:text-left">
          <p className="text-xs font-mono text-accent uppercase tracking-widest">
            About Me
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100">
            Background &amp; Engineering Focus
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            AI Engineer &amp; Machine Learning Specialist building production-grade deep learning systems and scalable software infrastructure.
          </p>
        </div>

        {/* Bio Section */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4 flex justify-center md:justify-start">
            <div className="relative w-60 h-60 sm:w-64 sm:h-64 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
              <Image
                src="/profile.jpg"
                alt="Pratap - AI Engineer"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                priority
              />
            </div>
          </div>

          <div className="md:col-span-8 space-y-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
            <p>
              I am an <span className="text-zinc-100 font-medium">AI Engineer and Machine Learning Specialist</span> focused on applied deep learning, computer vision, and generative AI. My work bridges research-grade model architectures with reliable, production-ready software systems.
            </p>
            <p>
              During my internship at <span className="text-zinc-200 font-medium">Titan Company Ltd</span>, I contributed to research on <span className="text-zinc-200">Vision Transformers (ViTs) and CNNs</span> for visual similarity search, built automated Python data extraction pipelines, and resolved critical SQL query bottlenecks across enterprise retail databases.
            </p>
            <p>
              My project experience includes architecting a <span className="text-zinc-200">Multimodal Customer Experience Platform</span> integrating DINOv2 embeddings with FAISS vector indexing, designing a <span className="text-zinc-200">Hybrid CNN-Transformer architecture</span> achieving 82% test accuracy on skin texture classification, and engineering LLM-powered multi-agent simulation engines using <span className="text-zinc-200">FastAPI, PyTorch, and Docker</span>.
            </p>
            <p>
              I am actively seeking <span className="text-accent font-medium">AI Engineer, Machine Learning Engineer, and AI/ML Internship</span> roles where I can contribute to high-impact machine learning systems.
            </p>
          </div>
        </div>

        {/* Core Expertise Areas */}
        <div className="space-y-6">
          <div className="space-y-1">
            <p className="text-xs font-mono text-accent uppercase tracking-widest">
              Core Capabilities
            </p>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100">
              Areas of Expertise
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {expertise.map((area) => (
              <div
                key={area.title}
                className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all space-y-2.5"
              >
                <h3 className="text-base font-semibold text-zinc-200">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills Grid */}
        <div className="space-y-6">
          <div className="space-y-1">
            <p className="text-xs font-mono text-accent uppercase tracking-widest">
              Technical Stack
            </p>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100">
              Skills &amp; Technologies
            </h2>
          </div>

          {/* Skill Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedSkillCategory(category.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  selectedSkillCategory === category.id
                    ? 'bg-zinc-100 text-zinc-950'
                    : 'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {filteredSkills.map((skill) => (
              <div
                key={skill.id}
                className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/80 flex items-center justify-between"
              >
                <span className="text-xs sm:text-sm font-medium text-zinc-300">
                  {skill.name}
                </span>
                {skill.proficiency && (
                  <span className="text-[11px] font-mono text-zinc-500">
                    {skill.proficiency}%
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-xl bg-zinc-900/40 border border-zinc-800 text-center space-y-4">
          <h3 className="text-lg font-semibold text-zinc-100">
            Interested in working together?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto">
            I am available for full-time AI/ML roles and internships. Let&apos;s talk about how I can contribute to your engineering team.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 text-xs sm:text-sm font-medium transition-colors"
            >
              Get In Touch
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 text-xs sm:text-sm font-medium transition-colors"
            >
              Download Resume ↗
            </a>
          </div>
        </div>

      </div>
      <ScrollIndicator />
    </div>
  );
}
