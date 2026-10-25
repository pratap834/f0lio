'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-10 md:p-14 rounded-lg bg-surface border border-border text-center max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary mb-3">
            Let&apos;s Work Together
          </h2>
          <p className="text-text-secondary text-sm md:text-base mb-8 max-w-xl mx-auto">
            Have a project in mind? I&apos;m always interested in hearing about new opportunities
            and collaborations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-md bg-text-primary text-background font-medium hover:bg-white transition-colors text-sm"
            >
              Get In Touch
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-md border border-border bg-surface text-text-primary text-sm font-medium hover:bg-surface-hover hover:border-[#404040] transition-colors"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
