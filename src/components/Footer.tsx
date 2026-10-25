'use client';

import React from 'react';
import Link from 'next/link';
import Icon from './ui/Icon';
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants';
import MovieFacts from './MovieFacts';

export default function Footer() {
  const socialLinks = [
    { platform: 'github', url: SITE_CONFIG.github, icon: 'github', label: 'GitHub' },
    { platform: 'linkedin', url: SITE_CONFIG.linkedin, icon: 'linkedin', label: 'LinkedIn' },
    { platform: 'instagram', url: SITE_CONFIG.instagram, icon: 'instagram', label: 'Instagram' },
    { platform: 'email', url: `mailto:${SITE_CONFIG.email}`, icon: 'mail', label: 'Email' },
  ];

  return (
    <footer className="border-t border-border bg-[#090909] text-text-secondary">
      <div className="container mx-auto px-6 max-w-6xl py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand & Summary */}
          <div>
            <Link href="/" className="inline-block mb-1.5">
              <span className="text-base font-semibold tracking-tight text-text-primary">
                Pratap Subramani<span className="text-text-muted">.</span>
              </span>
            </Link>
            <p className="text-xs text-text-muted">
              Machine Learning Engineer • AI Systems & Research
            </p>
          </div>

          {/* Secondary Navigation */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs" aria-label="Footer Navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              Resume ↗
            </Link>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-text-primary transition-colors p-1"
                aria-label={link.label}
                title={link.label}
              >
                <Icon name={link.icon} size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Trivia Feature & Copyright */}
        <div className="border-t border-border/60 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-auto">
            <MovieFacts />
          </div>
          <p className="text-xs text-text-muted flex-shrink-0">
            © {new Date().getFullYear()} Pratap
          </p>
        </div>
      </div>
    </footer>
  );
}
