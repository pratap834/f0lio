'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '@/lib/constants';
import Icon from './ui/Icon';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [aboutClickCount, setAboutClickCount] = useState(0);
  const [projectsClickCount, setProjectsClickCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(0);
  const [lastProjectsClickTime, setLastProjectsClickTime] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAboutClick = () => {
    const now = Date.now();
    if (now - lastClickTime > 2000) {
      setAboutClickCount(1);
    } else {
      const newCount = aboutClickCount + 1;
      setAboutClickCount(newCount);
      
      if (newCount === 5) {
        window.dispatchEvent(new Event('bang-animation'));
        setAboutClickCount(0);
      }
    }
    setLastClickTime(now);
  };

  const handleProjectsClick = () => {
    const now = Date.now();
    if (now - lastProjectsClickTime > 2000) {
      setProjectsClickCount(1);
    } else {
      const newCount = projectsClickCount + 1;
      setProjectsClickCount(newCount);
      
      if (newCount === 5) {
        window.dispatchEvent(new Event('secret-unlocked'));
        localStorage.setItem('secretProjectsUnlocked', 'true');
        setProjectsClickCount(0);
      }
    }
    setLastProjectsClickTime(now);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
          isScrolled
            ? 'bg-[#090909]/95 backdrop-blur-sm border-b border-border py-3.5'
            : 'bg-[#090909]/80 backdrop-blur-sm border-b border-border/50 py-4'
        }`}
      >
        <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group inline-flex items-center">
            <span className="text-lg font-semibold tracking-tight text-text-primary group-hover:text-white transition-colors">
              Prat<span className="text-text-muted">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={
                    link.label === 'About' 
                      ? handleAboutClick 
                      : link.label === 'Projects' 
                      ? handleProjectsClick 
                      : undefined
                  }
                  className={`text-sm transition-colors relative py-1 ${
                    isActive
                      ? 'text-text-primary font-medium'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#E5E5E5]" />
                  )}
                </Link>
              );
            })}
            
            <Link 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm px-3.5 py-1.5 rounded border border-border text-text-secondary hover:text-text-primary hover:border-[#383838] transition-colors"
            >
              Resume ↗
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1.5 text-text-secondary hover:text-text-primary transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#090909] md:hidden pt-24 px-6 flex flex-col justify-between pb-10"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
          >
            <nav className="flex flex-col space-y-5" aria-label="Mobile Navigation">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      if (link.label === 'About') handleAboutClick();
                      if (link.label === 'Projects') handleProjectsClick();
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-2xl font-medium transition-colors ${
                      isActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-medium text-text-secondary hover:text-text-primary transition-colors pt-2"
              >
                Resume ↗
              </Link>
            </nav>

            <div className="border-t border-border pt-6">
              <p className="text-xs text-text-muted">
                Pratap Subramani • Machine Learning Engineer
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
