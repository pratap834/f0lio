'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function N8nShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-14"
    >
      <div className="relative rounded-3xl bg-secondary/40 backdrop-blur-md border border-accent/25 p-6 sm:p-8 md:p-10 overflow-hidden shadow-[0_12px_40px_rgba(0,173,181,0.08)] hover:border-accent/45 transition-all duration-300 group">
        {/* Subtle radial glow inside card */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full filter blur-[100px] pointer-events-none -mr-20 -mt-20 group-hover:bg-accent/15 transition-all duration-500" />
        
        <div className="relative z-10">
          {/* Top Row: Live Badges & Link */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-semibold flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                Self-Hosted Infrastructure
              </span>
              <span className="px-3 py-1 rounded-full bg-primary/60 border border-accent/15 text-text-secondary text-xs font-medium">
                Live Deployment
              </span>
            </div>

            <a
              href="https://n8n.prataps.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/80 border border-accent/20 text-accent hover:border-accent/50 hover:bg-accent/10 transition-all font-mono text-xs md:text-sm group/link"
            >
              <span>n8n.prataps.dev</span>
              <svg className="w-3.5 h-3.5 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Heading & Core Description */}
          <div className="max-w-3xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-3">
              Self-Deployed <span className="text-accent glow-text">n8n</span> Automation & AI Workflow Engine
            </h3>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6">
              Production-grade self-deployment of n8n hosted on custom cloud infrastructure. Orchestrated to power autonomous AI agents, machine learning pipeline triggers, custom webhook integrations, and automated data processing with persistent storage.
            </p>
          </div>

          {/* Architecture & Capabilities Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            <div className="p-3.5 rounded-xl bg-primary/40 border border-accent/15 flex items-start gap-2.5">
              <span className="text-accent text-base mt-0.5">⚡</span>
              <div>
                <p className="text-xs font-semibold text-text-primary">Cloud Deployment</p>
                <p className="text-[11px] text-text-secondary">SSL & custom domain routing</p>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-primary/40 border border-accent/15 flex items-start gap-2.5">
              <span className="text-accent text-base mt-0.5">🤖</span>
              <div>
                <p className="text-xs font-semibold text-text-primary">AI Agent Workflows</p>
                <p className="text-[11px] text-text-secondary">Multi-LLM agent orchestration</p>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-primary/40 border border-accent/15 flex items-start gap-2.5">
              <span className="text-accent text-base mt-0.5">🔗</span>
              <div>
                <p className="text-xs font-semibold text-text-primary">ML Webhooks</p>
                <p className="text-[11px] text-text-secondary">Real-time model inference triggers</p>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-primary/40 border border-accent/15 flex items-start gap-2.5">
              <span className="text-accent text-base mt-0.5">🔒</span>
              <div>
                <p className="text-xs font-semibold text-text-primary">Docker & Postgres</p>
                <p className="text-[11px] text-text-secondary">Persistent, secure environment</p>
              </div>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {['n8n', 'Docker', 'PostgreSQL', 'Cloud Infrastructure', 'SSL/TLS', 'AI Agents', 'ML Webhooks', 'REST APIs'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-primary/50 border border-accent/15 text-text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Access Instructions Callout */}
          <div className="p-5 rounded-2xl bg-primary/60 border border-accent/25 flex flex-col md:flex-row md:items-center justify-between gap-5 shadow-inner">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-text-primary flex items-center gap-2">
                  Want to Access or Explore This Instance?
                </h4>
                <p className="text-text-secondary text-xs sm:text-sm mt-1 leading-relaxed">
                  Access is privately managed. If you want to access it, share an email to{' '}
                  <a
                    href="mailto:pratapsubramani@gmail.com?subject=Access%20Request%20for%20Self-Hosted%20n8n"
                    className="text-accent font-semibold hover:underline"
                  >
                    pratapsubramani@gmail.com
                  </a>{' '}
                  or DM me.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 flex-shrink-0">
              <a
                href="https://n8n.prataps.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-accent text-black font-semibold text-xs sm:text-sm hover:bg-accent/90 transition-all shadow-[0_4px_12px_var(--border-glow)] flex items-center gap-1.5"
              >
                <span>Open n8n.prataps.dev</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href="mailto:pratapsubramani@gmail.com?subject=Access%20Request%20for%20Self-Hosted%20n8n"
                className="px-4 py-2.5 rounded-xl border border-accent/30 text-accent font-semibold text-xs sm:text-sm hover:bg-accent/10 transition-colors flex items-center gap-1.5"
              >
                <span>Request Access via Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
