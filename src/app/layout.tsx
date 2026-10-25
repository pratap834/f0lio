import './globals.css';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pratap — Machine Learning Engineer',
  description: 'Portfolio of Pratap — Machine Learning Engineer specializing in AI/ML, Deep Learning, and Intelligent Systems',
  keywords: ['Machine Learning Engineer', 'ML Engineer', 'AI', 'Machine Learning', 'Deep Learning', 'PyTorch', 'Python', 'MLOps'],
  authors: [{ name: 'Pratap' }],
  icons: {
    icon: '/favicon.svg',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Pratap — Machine Learning Engineer',
    description: 'Portfolio of Pratap — Machine Learning Engineer specializing in AI/ML, Deep Learning, and Intelligent Systems',
    siteName: 'Pratap Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pratap — Machine Learning Engineer',
    description: 'Portfolio of Pratap — Machine Learning Engineer specializing in AI/ML, Deep Learning, and Intelligent Systems',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className="dark">
      <body className="bg-background text-text-primary antialiased selection:bg-[#262626] selection:text-[#F2F2F2]">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
