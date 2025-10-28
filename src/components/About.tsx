'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import skillsData from '@/data/skills.json';

export default function About() {
  const topSkills = skillsData.slice(0, 8);

  return (
    <section id="about" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Machine Learning Engineer building intelligent AI solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I&apos;m <span className="text-accent font-semibold">Pratap</span>, a <span className="text-accent font-semibold">Machine Learning Engineer</span> and{' '}
                <span className="text-accent font-semibold">AI Researcher</span> specializing in deep learning, NLP, and computer vision.
              </p>
              <p>
                I build production-ready ML models and scalable MLOps pipelines that deliver exceptional accuracy and performance in real-world applications.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m exploring new technologies, contributing to
                open-source, or sharing knowledge with the developer community.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-block px-6 py-3 rounded-full border border-accent text-accent hover:bg-accent hover:text-black transition-all duration-300 font-semibold"
            >
              Learn More About Me →
            </Link>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {topSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="p-4 rounded-xl bg-secondary border border-[rgba(255,255,255,0.05)] hover:border-accent/30 transition-all group"
                whileHover={{ y: -4 }}
              >
                <div className="text-center">
                  <p className="font-semibold text-text-primary group-hover:text-accent transition-colors mb-2">
                    {skill.name}
                  </p>
                  <div className="w-full h-1.5 bg-primary/50 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1 * index + 0.5 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
