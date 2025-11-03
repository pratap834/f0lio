'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
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

          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-accent/10 rounded-3xl blur-2xl"></div>
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-accent/30 shadow-[0_20px_60px_rgba(0,173,181,0.3)] group">
                <Image
                  src="/profile.jpg"
                  alt="Pratap - Machine Learning Engineer"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
