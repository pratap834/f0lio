'use client';

import React from 'react';
import Link from 'next/link';
import Icon from './ui/Icon';
import { SITE_CONFIG } from '@/lib/constants';
import MovieFacts from './MovieFacts';

export default function Footer() {
  const socialLinks = [
    { platform: 'github', url: SITE_CONFIG.github, icon: 'github', label: 'GitHub' },
    { platform: 'linkedin', url: SITE_CONFIG.linkedin, icon: 'linkedin', label: 'LinkedIn' },
    { platform: 'instagram', url: SITE_CONFIG.instagram, icon: 'instagram', label: 'Instagram' },
    { platform: 'email', url: `mailto:${SITE_CONFIG.email}`, icon: 'mail', label: 'Email' },
  ];

  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950/60 mt-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-10 space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="space-y-1 text-center sm:text-left">
            <Link href="/" className="inline-flex items-center gap-1">
              <span className="font-semibold text-zinc-100 tracking-tight text-sm">
                Pratap
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            </Link>
            <p className="text-xs text-zinc-500">
              AI Engineer &amp; Machine Learning Specialist
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-100 transition-colors p-1.5 rounded-md hover:bg-zinc-900"
                aria-label={link.label}
              >
                <Icon name={link.icon} size={18} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center sm:text-right text-xs text-zinc-500">
            <p>© {new Date().getFullYear()} Pratap. All rights reserved.</p>
          </div>
        </div>

        {/* Fact Ticker */}
        <div className="border-t border-zinc-800/60 pt-6">
          <MovieFacts />
        </div>
      </div>
    </footer>
  );
}
