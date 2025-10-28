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
    <section id="experience" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-accent">Experience</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            My professional journey
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8 mb-12">
          {recentExperience.map((exp: ExperienceType, index: number) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-8 rounded-2xl bg-secondary/50 backdrop-blur-sm border border-accent/10 hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-accent text-lg">{exp.company}</p>
                  {exp.location && (
                    <p className="text-text-secondary text-sm mt-1">{exp.location}</p>
                  )}
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="px-4 py-2 rounded-full bg-primary border border-accent/20 text-accent text-sm font-semibold whitespace-nowrap">
                    {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                  </span>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.description.slice(0, 2).map((item, i) => (
                  <li key={i} className="flex gap-3 text-text-secondary">
                    <span className="text-accent mt-1 flex-shrink-0">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {exp.technologies && (
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-primary border border-accent/20 text-accent"
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/experience"
            className="inline-block px-8 py-4 rounded-full border border-accent text-accent hover:bg-accent hover:text-black transition-all duration-300 font-semibold"
          >
            View Full Experience →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
