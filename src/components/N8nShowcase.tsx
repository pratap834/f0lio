'use client';

import React from 'react';

export default function N8nShowcase() {
  return (
    <div className="mb-12">
      <div className="rounded-lg bg-surface border border-border p-6 sm:p-8 hover:border-[#383838] transition-colors">
        {/* Top Row: Status & External Link */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono bg-background border border-border text-text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Live Deployment
            </span>
            <span className="px-2.5 py-1 rounded text-xs font-mono bg-background border border-border text-text-muted">
              Self-Hosted
            </span>
          </div>

          <a
            href="https://n8n.prataps.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-text-muted hover:text-text-primary transition-colors"
          >
            <span>n8n.prataps.dev</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Heading & Core Description */}
        <div className="max-w-3xl mb-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-2.5 tracking-tight">
            Self-Deployed n8n Automation & AI Workflow Engine
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            Production-grade self-deployment of n8n hosted on custom cloud infrastructure. Orchestrated to power autonomous AI agents, machine learning pipeline triggers, custom webhook integrations, and automated data processing with persistent storage.
          </p>
        </div>

        {/* Architecture & Capabilities Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          <div className="p-3 rounded border border-border/80 bg-background/60">
            <p className="text-xs font-medium text-text-primary mb-0.5">Cloud Deployment</p>
            <p className="text-[11px] text-text-muted">SSL & custom domain routing</p>
          </div>
          <div className="p-3 rounded border border-border/80 bg-background/60">
            <p className="text-xs font-medium text-text-primary mb-0.5">AI Agent Workflows</p>
            <p className="text-[11px] text-text-muted">Multi-LLM agent orchestration</p>
          </div>
          <div className="p-3 rounded border border-border/80 bg-background/60">
            <p className="text-xs font-medium text-text-primary mb-0.5">ML Webhooks</p>
            <p className="text-[11px] text-text-muted">Real-time model inference triggers</p>
          </div>
          <div className="p-3 rounded border border-border/80 bg-background/60">
            <p className="text-xs font-medium text-text-primary mb-0.5">Docker & Postgres</p>
            <p className="text-[11px] text-text-muted">Persistent, secure environment</p>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap items-center gap-1.5 mb-7">
          {['n8n', 'Docker', 'PostgreSQL', 'Cloud Infrastructure', 'SSL/TLS', 'AI Agents', 'ML Webhooks', 'REST APIs'].map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs rounded border border-border bg-background text-text-muted font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Access Instructions Callout */}
        <div className="p-4 sm:p-5 rounded border border-border bg-background/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-text-primary mb-1">
              Access & Instance Exploration
            </h4>
            <p className="text-text-muted text-xs leading-relaxed">
              Access is privately managed. To explore workflows, contact{' '}
              <a
                href="mailto:pratapsubramani@gmail.com?subject=Access%20Request%20for%20Self-Hosted%20n8n"
                className="text-text-primary underline hover:text-white transition-colors"
              >
                pratapsubramani@gmail.com
              </a>.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 flex-shrink-0">
            <a
              href="https://n8n.prataps.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-md bg-[#F2F2F2] text-[#090909] font-medium text-xs hover:bg-[#E5E5E5] transition-colors inline-flex items-center gap-1"
            >
              <span>Open Instance</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href="mailto:pratapsubramani@gmail.com?subject=Access%20Request%20for%20Self-Hosted%20n8n"
              className="px-3.5 py-1.5 rounded-md border border-border bg-surface text-text-secondary font-medium text-xs hover:text-text-primary hover:border-[#383838] transition-colors"
            >
              Request Access
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
