'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function About() {
  const highlights = [
    { label: 'Primary Focus', value: 'ML Systems & Deep Learning' },
    { label: 'Research Areas', value: 'Vision Transformers & CNNs' },
    { label: 'Engineering', value: 'MLOps, Data Pipelines & SQL' },
    { label: 'Industry Impact', value: 'Enterprise optimization at Titan Co.' },
  ];

  const coreSkills = ['Python', 'PyTorch', 'TensorFlow', 'FastAPI', 'Docker', 'SQL', 'MLOps'];

  return (
    <section id="about" className="py-20 border-t border-border/50">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-2">
            Overview
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
            About Me
          </h2>
          <p className="text-text-secondary text-base mt-2 max-w-xl">
            Machine Learning Engineer building intelligent systems from research to production.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Bio / Narrative Column */}
          <div className="lg:col-span-7 flex flex-col justify-between p-7 sm:p-8 rounded-lg bg-surface border border-border">
            <div className="space-y-5">
              <span className="text-xs font-mono uppercase tracking-wider text-text-muted block">
                Engineering & Research
              </span>

              <h3 className="text-xl sm:text-2xl font-semibold text-text-primary leading-snug">
                Designing scalable intelligence from data to deployment
              </h3>

              <div className="space-y-4 text-text-secondary leading-relaxed text-sm sm:text-base">
                <p>
                  I&apos;m <span className="text-text-primary font-medium">Pratap</span>, a Machine Learning Engineer and AI Researcher specializing in deep learning, NLP, and computer vision.
                </p>
                <p>
                  I build production-ready ML models and scalable MLOps pipelines that deliver exceptional accuracy, high throughput, and reliable performance in real-world systems.
                </p>
                <p>
                  From fine-tuning transformer architectures to automating large-scale enterprise workflows, I focus on turning complex machine learning research into robust, scalable applications.
                </p>
              </div>
            </div>

            <div className="pt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/about"
                className="px-4 py-2 rounded-md border border-border bg-surface-hover text-text-primary hover:border-[#404040] text-sm font-medium transition-colors"
              >
                Learn More About Me →
              </Link>
              <Link
                href="/projects"
                className="px-4 py-2 rounded-md border border-border text-text-secondary hover:text-text-primary hover:border-[#383838] text-sm font-medium transition-colors"
              >
                Explore Projects
              </Link>
            </div>
          </div>

          {/* Technical Snapshot & Highlights Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-7 sm:p-8 rounded-lg bg-surface border border-border">
            <div>
              {/* Clean header without colored dots */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-border/80">
                <span className="text-xs font-mono text-text-muted">system.profile</span>
                <span className="text-xs font-mono text-text-muted">ready</span>
              </div>

              <div className="mb-5">
                <h4 className="text-base font-semibold text-text-primary mb-1">
                  Technical Snapshot
                </h4>
                <p className="text-xs text-text-muted">Core focus areas & competencies</p>
              </div>

              {/* Highlights List */}
              <div className="space-y-2.5 mb-6">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="p-3 rounded border border-border/80 bg-background/60"
                  >
                    <p className="text-[11px] uppercase font-mono tracking-wider text-text-muted mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-text-primary">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Stack Tags */}
            <div className="pt-4 border-t border-border/60">
              <p className="text-xs font-mono uppercase tracking-wider text-text-muted mb-2.5">
                Core Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {coreSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs rounded border border-border bg-background text-text-secondary font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
