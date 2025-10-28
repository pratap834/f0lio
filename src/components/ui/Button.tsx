'use client';

import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: ReactNode;
  href?: string;
  className?: string;
}

export default function Button({
  variant = 'primary',
  children,
  href,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-accent text-black shadow-[0_4px_12px_var(--border-glow)] hover:translate-y-[-2px] hover:shadow-[0_6px_20px_var(--border-glow)]',
    secondary: 'bg-secondary text-text-primary border border-[rgba(255,255,255,0.1)] hover:border-accent hover:bg-[rgba(0,173,181,0.05)]',
    ghost: 'border border-[rgba(0,173,181,0.3)] text-accent hover:bg-[rgba(0,173,181,0.1)]',
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...(props as any)}
    >
      {children}
    </Component>
  );
}
