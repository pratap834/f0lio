'use client';

import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import Icon from '@/components/ui/Icon';
import { SITE_CONFIG } from '@/lib/constants';
import { validateEmail } from '@/lib/helpers';
import ScrollIndicator from '@/components/ui/ScrollIndicator';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields');
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setStatus('sending');

    // TODO: Integrate with EmailJS or your backend API
    // For now, simulate a submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);

    // Example EmailJS integration (uncomment when you have credentials):
    /*
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
    }
    */
  };

  const socialLinks = [
    { platform: 'GitHub', icon: 'github', url: SITE_CONFIG.github },
    { platform: 'LinkedIn', icon: 'linkedin', url: SITE_CONFIG.linkedin },
    { platform: 'Instagram', icon: 'instagram', url: SITE_CONFIG.instagram },
    { platform: 'Email', icon: 'mail', url: `mailto:${SITE_CONFIG.email}` },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-2">Connect</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-text-primary mb-3">
            Get In Touch
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl">
            Have a project in mind, an engineering challenge, or just want to connect? Reach out anytime.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Details, Availability & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Info Card */}
            <div className="p-6 md:p-8 rounded-lg bg-surface border border-border space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-text-primary mb-2">Let&apos;s Connect</h2>
                <p className="text-sm text-text-secondary leading-relaxed">
                  I&apos;m always interested in hearing about new ML projects, enterprise engineering opportunities, and technical collaborations.
                </p>
              </div>

              {/* Availability Notice */}
              <div className="p-3.5 rounded-md bg-[#161616] border border-border">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <p className="text-xs font-semibold text-text-primary uppercase tracking-wider">Availability</p>
                </div>
                <p className="text-xs text-text-secondary">
                  Open for full-time Machine Learning roles, AI research collaborations, and select consulting projects.
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-border">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#181818] border border-border flex items-center justify-center flex-shrink-0 mt-0.5 text-text-secondary">
                    <Icon name="mail" size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Email</p>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-sm text-text-primary hover:underline font-mono"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#181818] border border-border flex items-center justify-center flex-shrink-0 mt-0.5 text-text-secondary">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Location</p>
                    <p className="text-sm text-text-primary">India <span className="text-xs text-text-muted">(Remote Friendly)</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 md:p-8 rounded-lg bg-surface border border-border">
              <h3 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-4">Online Profiles</h3>
              <div className="grid grid-cols-2 gap-2.5">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-md bg-[#161616] border border-border hover:border-[#404040] hover:bg-surface-hover transition-colors group"
                  >
                    <Icon name={link.icon} className="text-text-muted group-hover:text-text-primary transition-colors" size={18} />
                    <span className="text-xs font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                      {link.platform}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="p-6 md:p-8 rounded-lg bg-surface border border-border">
              <h2 className="text-lg font-semibold text-text-primary mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-text-secondary mb-1.5">
                    Name <span className="text-text-muted">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-md bg-[#121212] border border-border text-text-primary placeholder:text-text-muted focus:border-text-primary focus:outline-none focus:ring-1 focus:ring-text-primary transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-text-secondary mb-1.5">
                    Email <span className="text-text-muted">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-md bg-[#121212] border border-border text-text-primary placeholder:text-text-muted focus:border-text-primary focus:outline-none focus:ring-1 focus:ring-text-primary transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-text-secondary mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-md bg-[#121212] border border-border text-text-primary placeholder:text-text-muted focus:border-text-primary focus:outline-none focus:ring-1 focus:ring-text-primary transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-text-secondary mb-1.5">
                    Message <span className="text-text-muted">*</span>
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-3.5 py-2.5 text-sm rounded-md bg-[#121212] border border-border text-text-primary placeholder:text-text-muted focus:border-text-primary focus:outline-none focus:ring-1 focus:ring-text-primary transition-colors resize-none"
                    placeholder="Your message..."
                    required
                  />
                </div>

                {status === 'error' && (
                  <div className="p-3 rounded-md bg-red-950/20 border border-red-900/50 text-red-300 text-xs">
                    {errorMessage}
                  </div>
                )}

                {status === 'success' && (
                  <div className="p-3 rounded-md bg-zinc-900 border border-border text-text-primary text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Message sent successfully. I&apos;ll get back to you soon.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full px-6 py-3 rounded-md bg-text-primary text-background font-medium hover:bg-white transition-colors duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                  {status === 'sending' ? 'Sending message...' : 'Send Message'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      <ScrollIndicator />
    </div>
  );
}
