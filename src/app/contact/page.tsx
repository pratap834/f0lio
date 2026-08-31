'use client';

import React, { useState, FormEvent } from 'react';
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

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3500);
    }, 1000);
  };

  const socialLinks = [
    { platform: 'GitHub', icon: 'github', url: SITE_CONFIG.github },
    { platform: 'LinkedIn', icon: 'linkedin', url: SITE_CONFIG.linkedin },
    { platform: 'Instagram', icon: 'instagram', url: SITE_CONFIG.instagram },
    { platform: 'Email', icon: 'mail', url: `mailto:${SITE_CONFIG.email}` },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 relative bg-primary">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-3">
          <p className="text-xs font-mono text-accent uppercase tracking-widest">
            Contact
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100">
            Let&apos;s Connect
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Interested in discussing AI engineering, machine learning research, full-time opportunities, or internships? Feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label htmlFor="name" className="block text-xs font-medium text-zinc-300">
                  Your Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950/80 border border-zinc-800 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-600 transition-colors"
                  placeholder="e.g. Jane Doe"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-xs font-medium text-zinc-300">
                  Email Address <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950/80 border border-zinc-800 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-600 transition-colors"
                  placeholder="jane@example.com"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="block text-xs font-medium text-zinc-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950/80 border border-zinc-800 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-600 transition-colors"
                  placeholder="e.g. AI Engineer Opportunity / Collaboration"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-xs font-medium text-zinc-300">
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950/80 border border-zinc-800 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-600 transition-colors resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>

              {status === 'error' && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                  {errorMessage}
                </div>
              )}

              {status === 'success' && (
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
                  Message sent successfully! I will respond promptly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-5 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-sm transition-colors disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-4">
              <h2 className="text-base font-semibold text-zinc-100">
                Direct Contact
              </h2>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-xs text-zinc-500">Email</p>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-zinc-200 hover:text-accent font-medium transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs text-zinc-500">Location</p>
                  <p className="text-zinc-300">India (Open to Remote &amp; Relocation)</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-4">
              <h3 className="text-base font-semibold text-zinc-100">
                Profiles &amp; Socials
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-lg bg-zinc-950/60 hover:bg-zinc-800/60 border border-zinc-800 transition-colors text-xs font-medium text-zinc-300 hover:text-white"
                  >
                    <Icon name={link.icon} size={16} className="text-zinc-400" />
                    <span>{link.platform}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollIndicator />
    </div>
  );
}
