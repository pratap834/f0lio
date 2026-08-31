import './globals.css';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pratap — AI Engineer & Machine Learning Specialist | Portfolio',
  description: 'Portfolio of Pratap — AI Engineer & Machine Learning Specialist with hands-on expertise in Deep Learning, Computer Vision, Generative AI, Multimodal Systems, and Scalable Data Pipelines.',
  keywords: [
    'AI Engineer',
    'Machine Learning Engineer',
    'ML Engineer',
    'Associate AI Engineer',
    'AI Intern',
    'ML Intern',
    'Deep Learning',
    'Computer Vision',
    'Vision Transformers',
    'NLP',
    'Generative AI',
    'PyTorch',
    'TensorFlow',
    'FastAPI',
    'Python',
    'FAISS'
  ],
  authors: [{ name: 'Pratap' }],
  icons: {
    icon: '/favicon.svg',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Pratap — AI Engineer & Machine Learning Specialist',
    description: 'Portfolio of Pratap — AI Engineer & Machine Learning Specialist specializing in Deep Learning, Multimodal Systems, Generative AI, and Scalable Backend Engineering.',
    siteName: 'Pratap Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pratap — AI Engineer & Machine Learning Specialist',
    description: 'Portfolio of Pratap — AI Engineer & Machine Learning Specialist specializing in Deep Learning, Multimodal Systems, Generative AI, and Scalable Backend Engineering.',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body className="text-text-primary antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
