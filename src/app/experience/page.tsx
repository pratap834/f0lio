'use client';

import React from 'react';
import { motion } from 'framer-motion';
import experienceData from '@/data/experience.json';
import { Experience } from '@/types';
import { formatDate } from '@/lib/helpers';

export default function ExperiencePage() {
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
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Work <span className="text-accent">Experience</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            My professional journey and the amazing teams I&apos;ve worked with
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp: Experience, index: number) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index !== experienceData.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-accent/20 hidden md:block" />
              )}

              {/* Content Card */}
              <div className="flex gap-8 items-start">
                {/* Timeline Dot */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-accent" />
                  </div>
                </div>

                {/* Experience Card */}
                <div className="flex-1 p-8 rounded-2xl bg-secondary/50 backdrop-blur-sm border border-accent/10 hover:border-accent/30 transition-all duration-300 group hover:shadow-[0_12px_40px_rgba(0,173,181,0.1)]">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent transition-colors">
                        {exp.role}
                      </h3>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline inline-flex items-center gap-2"
                      >
                        {exp.company}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
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

                  {/* Description */}
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-text-secondary">
                        <span className="text-accent mt-1.5 flex-shrink-0">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-primary border border-accent/20 text-accent"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
