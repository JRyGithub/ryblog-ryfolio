import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/header/header';
import { Analytics } from '@vercel/analytics/react';
// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ryblog-Ryfolio',
  description: `Joshua Ryland's blog and portfilio website for all things tech and life.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-bl from-base-100 from-1% via-base-200 via-15% to-base-300 to-90%">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
