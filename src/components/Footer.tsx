'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Icon from './ui/Icon';
import { SITE_CONFIG } from '@/lib/constants';

export default function Footer() {
  const socialLinks = [
    { platform: 'github', url: SITE_CONFIG.github, icon: 'github' },
    { platform: 'linkedin', url: SITE_CONFIG.linkedin, icon: 'linkedin' },
    { platform: 'instagram', url: SITE_CONFIG.instagram, icon: 'instagram' },
    { platform: 'email', url: `mailto:${SITE_CONFIG.email}`, icon: 'mail' },
  ];

  return (
    <footer className="relative border-t border-secondary bg-primary">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />
      
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/">
              <motion.div
                className="text-2xl font-bold mb-2"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-text-primary">Prat</span>
                <span className="text-accent">.</span>
              </motion.div>
            </Link>
            <p className="text-text-secondary text-sm">
              Building innovative digital experiences
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.platform}
              >
                <Icon name={link.icon} size={24} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-text-secondary text-sm">
              © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <p className="text-text-secondary text-xs mt-1">
              Built with Next.js & Three.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
