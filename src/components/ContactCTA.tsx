'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="py-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-8 sm:p-12 text-center space-y-6 max-w-3xl mx-auto"
      >
        <div className="space-y-2">
          <p className="text-xs font-mono text-accent uppercase tracking-widest">
            Get In Touch
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
            Let&apos;s Build Intelligent Systems
          </h2>
        </div>

        <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Open to full-time AI Engineer, Machine Learning Engineer, and internship opportunities. Have a role or project to discuss?
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-sm transition-colors"
          >
            Send a Message
          </Link>
          <a
            href="mailto:pratapsubramani@gmail.com"
            className="px-6 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white font-medium text-sm transition-colors"
          >
            Email Directly
          </a>
        </div>
      </motion.div>
    </section>
  );
}
