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
    <section id="experience" className="py-20 border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary mb-2">
            Work Experience
          </h2>
          <p className="text-text-secondary text-sm md:text-base max-w-2xl">
            My professional journey
          </p>
        </motion.div>

        <div className="border-t border-border divide-y divide-border mb-12">
          {recentExperience.map((exp: ExperienceType, index: number) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="py-8 group"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-text-primary">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-text-secondary font-medium">
                    {exp.company} {exp.location && <span className="text-text-muted">· {exp.location}</span>}
                  </p>
                </div>
                <div className="text-xs text-text-muted font-mono">
                  {formatDate(exp.startDate)} — {exp.current ? 'Present' : formatDate(exp.endDate)}
                </div>
              </div>

              <ul className="space-y-2 mb-4 text-sm text-text-secondary leading-relaxed">
                {exp.description.slice(0, 2).map((item, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className="text-text-muted flex-shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {exp.technologies && (
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs rounded bg-surface border border-border text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border bg-surface text-text-primary text-sm font-medium hover:bg-surface-hover hover:border-[#404040] transition-colors"
          >
            View Full Experience
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
