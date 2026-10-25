'use client';

import React from 'react';
import { motion } from 'framer-motion';
import experienceData from '@/data/experience.json';
import { Experience } from '@/types';
import { formatDate } from '@/lib/helpers';
import ScrollIndicator from '@/components/ui/ScrollIndicator';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-2">Career</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-text-primary mb-3">
            Work Experience
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl">
            My professional journey and the engineering teams I&apos;ve worked with.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-border ml-3 md:ml-4 pl-6 md:pl-10 space-y-12">
          {experienceData.map((exp: Experience, index: number) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative group"
            >
              {/* Timeline marker */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-2.5 h-2.5 rounded-full bg-border group-hover:bg-text-primary transition-colors" />

              <div className="bg-surface border border-border rounded-lg p-6 md:p-8 hover:border-[#404040] hover:bg-surface-hover transition-colors">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
                  <div>
                    <h2 className="text-lg md:text-xl font-semibold text-text-primary">
                      {exp.role}
                    </h2>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-secondary hover:text-text-primary text-sm font-medium inline-flex items-center gap-1 transition-colors"
                        >
                          {exp.company}
                          <svg className="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <span className="text-text-secondary text-sm font-medium">{exp.company}</span>
                      )}
                      {exp.location && (
                        <span className="text-text-muted text-xs">· {exp.location}</span>
                      )}
                    </div>
                  </div>

                  <div className="text-xs font-mono text-text-muted whitespace-nowrap">
                    {formatDate(exp.startDate)} — {exp.current ? 'Present' : formatDate(exp.endDate)}
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-5 text-sm text-text-secondary leading-relaxed">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-2.5">
                      <span className="text-text-muted flex-shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                {exp.technologies && (
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs rounded bg-[#181818] border border-border text-text-muted font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <ScrollIndicator />
    </div>
  );
}
