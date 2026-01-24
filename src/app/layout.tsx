import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Joshua Ryland | Portfolio',
    template: '%s | Joshua Ryland',
  },
  description:
    'Welcome to my portfolio. I am a developer passionate about building great software.',
  keywords: ['developer', 'portfolio', 'software engineer', 'web development'],
  authors: [{ name: 'Joshua Ryland' }],
  openGraph: {
    title: 'Joshua Ryland | Portfolio',
    description:
      'Welcome to my portfolio. I am a developer passionate about building great software.',
    type: 'website',
    locale: 'en-US',
    url: 'https://joshryland.com',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
