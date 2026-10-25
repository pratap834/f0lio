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
  const baseStyles = 'px-5 py-2.5 rounded-md text-sm font-medium transition-colors inline-flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-[#F2F2F2] text-[#090909] hover:bg-[#E5E5E5] active:bg-[#CCCCCC]',
    secondary: 'bg-surface text-text-primary border border-border hover:bg-surface-hover hover:border-[#383838]',
    ghost: 'bg-transparent text-text-secondary border border-border hover:text-text-primary hover:border-[#383838] hover:bg-surface',
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ y: -1 }}
      whileTap={{ y: 0 }}
      {...(props as any)}
    >
      {children}
    </Component>
  );
}
