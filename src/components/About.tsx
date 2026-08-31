'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-8">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <p className="text-xs font-mono text-accent uppercase tracking-widest">
            Profile
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-5 flex justify-center md:justify-start"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/80 shadow-md">
              <Image
                src="/profile.jpg"
                alt="Pratap - AI & Machine Learning Engineer"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                priority
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="md:col-span-7 space-y-6"
          >
            <div className="space-y-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
              <p>
                I&apos;m <span className="text-zinc-100 font-medium">Pratap</span>, an <span className="text-zinc-100 font-medium">AI Engineer &amp; Machine Learning Specialist</span> with hands-on experience building applied deep learning architectures, multimodal computer vision systems, and automated data pipelines.
              </p>
              <p>
                During my internship at <span className="text-zinc-200 font-medium">Titan Company Ltd</span>, I contributed to research on <span className="text-zinc-200">Vision Transformers (ViT) and CNNs</span> for visual search, engineered automated Python ETL workflows, and optimized SQL performance across enterprise databases.
              </p>
              <p>
                My focus is building scalable, end-to-end AI applications—from custom vector indexing with FAISS and transformer fine-tuning to high-throughput async microservices with FastAPI and Docker.
              </p>
            </div>

            {/* Quick Skills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                'PyTorch',
                'Vision Transformers',
                'DINOv2 & FAISS',
                'LLMs & Prompt Engineering',
                'FastAPI & Docker',
                'PostgreSQL',
              ].map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 text-xs rounded-md bg-zinc-900/80 border border-zinc-800 text-zinc-300 font-mono"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                <span>Read more about my background &amp; skills</span>
                <span>→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
