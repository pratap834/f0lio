import './globals.css';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pratap — Full Stack Developer & AI Enthusiast',
  description: 'Portfolio of Pratap — Full Stack Developer specializing in AI/ML, Web Development, and Interactive Experiences',
  keywords: ['Full Stack Developer', 'AI', 'Machine Learning', 'Web Development', 'Next.js', 'React', 'TypeScript'],
  authors: [{ name: 'Pratap' }],
  icons: {
    icon: '/favicon.svg',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Pratap — Full Stack Developer & AI Enthusiast',
    description: 'Portfolio of Pratap — Full Stack Developer specializing in AI/ML, Web Development, and Interactive Experiences',
    siteName: 'Pratap Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pratap — Full Stack Developer & AI Enthusiast',
    description: 'Portfolio of Pratap — Full Stack Developer specializing in AI/ML, Web Development, and Interactive Experiences',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body className="bg-primary text-text-primary antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
