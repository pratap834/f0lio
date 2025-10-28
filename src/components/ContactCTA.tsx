'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="p-12 rounded-3xl bg-secondary/50 backdrop-blur-sm border border-accent/10 relative overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-accent/5" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let&apos;s Work <span className="text-accent">Together</span>
              </h2>
              <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
                Have a project in mind? I&apos;m always interested in hearing about new opportunities
                and collaborations. Let&apos;s create something amazing together!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-accent text-black font-semibold hover:bg-accent/90 transition-all duration-300 shadow-[0_4px_12px_var(--border-glow)]"
                >
                  Get In Touch
                </Link>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full border border-accent text-accent hover:bg-accent hover:text-black transition-all duration-300 font-semibold"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
