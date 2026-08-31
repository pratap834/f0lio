'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import experienceData from '@/data/experience.json';
import { Experience as ExperienceType } from '@/types';
import { formatDate } from '@/lib/helpers';

export default function Experience() {
  const recentExperience = experienceData.slice(0, 2);

  return (
    <section id="experience" className="py-8">
      <div className="space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs font-mono text-accent uppercase tracking-widest">
              Career Journey
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
              Work Experience
            </h2>
          </div>
          <Link
            href="/experience"
            className="text-sm font-medium text-zinc-400 hover:text-accent transition-colors inline-flex items-center gap-1 self-start sm:self-auto"
          >
            <span>View complete timeline</span>
            <span>→</span>
          </Link>
        </div>

        <div className="space-y-4">
          {recentExperience.map((exp: ExperienceType, index: number) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="p-6 sm:p-7 rounded-xl bg-zinc-900/40 hover:bg-zinc-900/70 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-zinc-100">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-zinc-400">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-200 hover:text-accent transition-colors font-medium"
                      >
                        {exp.company}
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

              <ul className="space-y-2 text-sm text-zinc-400 leading-relaxed">
                {exp.description.slice(0, 2).map((item, i) => (
                  <li key={i} className="flex gap-2.5 items-start">
                    <span className="text-accent mt-1 text-xs">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {exp.technologies && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono text-zinc-400 bg-zinc-950 border border-zinc-800/80 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
