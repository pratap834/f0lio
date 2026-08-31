'use client';

import React from 'react';
import experienceData from '@/data/experience.json';
import { Experience } from '@/types';
import { formatDate } from '@/lib/helpers';
import ScrollIndicator from '@/components/ui/ScrollIndicator';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-28 pb-20 relative bg-primary">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-3">
          <p className="text-xs font-mono text-accent uppercase tracking-widest">
            Career Timeline
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100">
            Work Experience
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Applied ML research, production data pipelines, backend systems architecture, and engineering leadership.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-6">
          {experienceData.map((exp: Experience) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200 space-y-4"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 border-b border-zinc-800/60 pb-4">
                <div className="space-y-1">
                  <h2 className="text-xl font-semibold text-zinc-100">
                    {exp.role}
                  </h2>
                  <div className="flex items-center gap-2 text-sm text-zinc-400">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-200 hover:text-accent font-medium transition-colors inline-flex items-center gap-1"
                      >
                        {exp.company}
                        <span className="text-xs text-zinc-500">↗</span>
                      </a>
                    ) : (
                      <span className="text-zinc-200 font-medium">{exp.company}</span>
                    )}
                    {exp.location && (
                      <>
                        <span className="text-zinc-600">•</span>
                        <span>{exp.location}</span>
                      </>
                    )}
                  </div>
                </div>

                <span className="text-xs font-mono text-zinc-400 bg-zinc-950/80 border border-zinc-800 px-3 py-1 rounded self-start">
                  {formatDate(exp.startDate)} — {exp.current ? 'Present' : formatDate(exp.endDate)}
                </span>
              </div>

              {/* Descriptions */}
              <ul className="space-y-2.5 text-sm text-zinc-300 leading-relaxed">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-2.5 items-start">
                    <span className="text-accent mt-1 text-xs">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              {exp.technologies && (
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono text-zinc-400 bg-zinc-950 border border-zinc-800 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <ScrollIndicator />
    </div>
  );
}
