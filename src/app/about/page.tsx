'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ScrollIndicator from '@/components/ui/ScrollIndicator';
import BangAnimation from '@/components/ui/BangAnimation';

export default function AboutPage() {

  const expertise = [
    {
      icon: '',
      title: 'Machine Learning',
      description: 'Building end-to-end ML pipelines, from data preprocessing to model deployment, with focus on scalable and production-ready solutions.'
    },
    {
      icon: '',
      title: 'Data Engineering',
      description: 'Designing efficient data pipelines and automating workflows for large-scale data processing and analytics.'
    },
    {
      icon: '',
      title: 'ML Research',
      description: 'Exploring Vision Transformers, CNNs, and modern architectures to optimize inference strategies for real-world applications.'
    },
    {
      icon: '',
      title: 'ML Engineering & Systems',
      description: 'Architecting scalable ML pipelines, automated workflows, and production-ready deployments for intelligent applications.'
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-2">Profile</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-text-primary mb-3">
            About Me
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl">
            Machine Learning Engineer building intelligent AI solutions from research to production.
          </p>
        </motion.div>

        {/* Profile & Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <div className="bg-surface border border-border rounded-lg p-8 md:p-10">
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              {/* Bio Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616] border border-border text-text-muted text-xs font-medium tracking-wide mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Available for ML Roles & Collaborations
                  </div>

                  <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-1">
                    Hi, I&apos;m Pratap
                  </h2>
                  <p className="text-sm md:text-base text-text-muted font-mono mb-6">
                    Machine Learning Engineer · AI Researcher
                  </p>

                  <div className="space-y-4 text-text-secondary text-sm md:text-base leading-relaxed">
                    <p>
                      I&apos;m a <strong className="font-semibold text-text-primary">Machine Learning Engineer</strong> with hands-on experience in building data-driven solutions and intelligent systems. My work spans from optimizing SQL queries for enterprise data systems to contributing to ML research on Vision Transformers and CNNs.
                    </p>
                    <p>
                      Currently, I&apos;m developing scalable ML systems and intelligent workflows while architecting robust data pipelines. I specialize in model training, fine-tuning, automated workflows, and delivering production-ready ML solutions that solve real-world problems.
                    </p>
                    <p>
                      I combine rigorous mathematical principles with practical software engineering, ensuring that machine learning systems not only achieve benchmark accuracy, but also run efficiently and reliably under production workloads.
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-text-primary text-background font-medium hover:bg-white transition-colors text-sm"
                  >
                    View Resume ↗
                  </a>
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border bg-surface text-text-primary hover:bg-surface-hover hover:border-[#404040] transition-colors font-medium text-sm"
                  >
                    Explore Projects →
                  </Link>
                </div>
              </div>

              {/* Quick Facts & Technical Profile Card */}
              <div className="lg:col-span-5 p-6 rounded-lg bg-[#0E0E0E] border border-border flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-1">
                    Profile Highlights
                  </h3>
                  <p className="text-xs text-text-muted mb-4">Key details & specializations</p>

                  {/* 2x2 Quick Info Grid */}
                  <div className="grid grid-cols-2 gap-2.5 mb-6">
                    <div className="p-3 rounded bg-surface border border-border">
                      <p className="text-xs text-text-muted mb-0.5">Location</p>
                      <p className="text-text-primary font-medium text-sm">India</p>
                      <p className="text-[11px] text-text-muted">Remote Friendly</p>
                    </div>
                    <div className="p-3 rounded bg-surface border border-border">
                      <p className="text-xs text-text-muted mb-0.5">Focus</p>
                      <p className="text-text-primary font-medium text-sm">ML Systems</p>
                      <p className="text-[11px] text-text-muted">Deep Learning</p>
                    </div>
                    <div className="p-3 rounded bg-surface border border-border">
                      <p className="text-xs text-text-muted mb-0.5">Status</p>
                      <p className="text-text-primary font-medium text-sm">Available</p>
                      <p className="text-[11px] text-text-muted">Full-time / Roles</p>
                    </div>
                    <div className="p-3 rounded bg-surface border border-border">
                      <p className="text-xs text-text-muted mb-0.5">Experience</p>
                      <p className="text-text-primary font-medium text-sm">Enterprise</p>
                      <p className="text-[11px] text-text-muted">Titan Co., Playlit</p>
                    </div>
                  </div>

                  {/* Tech Toolbox */}
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-text-muted mb-2.5">
                      Toolbox & Frameworks
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {['Python', 'PyTorch', 'TensorFlow', 'FastAPI', 'Docker', 'SQL', 'Vision Transformers', 'MLOps', 'OpenCV', 'Pandas'].map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs rounded bg-surface border border-border text-text-secondary font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Callout quote */}
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-text-muted italic leading-relaxed">
                    &ldquo;Dedicated to bridging the gap between cutting-edge ML research and reliable, production-grade engineering.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Expertise Areas */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="mb-8">
            <h2 className="text-2xl font-semibold tracking-tight text-text-primary mb-2">
              Expertise Areas
            </h2>
            <p className="text-text-secondary text-sm">Core domains and technical focus</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {expertise.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                className="bg-surface border border-border rounded-lg p-6 hover:border-[#404040] hover:bg-surface-hover transition-colors"
              >
                <h3 className="text-base font-semibold text-text-primary mb-2">
                  {area.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
      <ScrollIndicator />
      <BangAnimation />
    </div>
  );
}
