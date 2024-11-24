import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Gupter } from "next/font/google";

const guppy = Gupter({  weight: ['400', '700'], subsets: ['latin'],  variable: '--font-gupter', })

export const metadata = {
  title: "Joshua Ryland | Lead Software Developer",
  description: "Experienced Lead Software Developer with 5+ years building scalable applications. Expertise in system architecture, team leadership, and full-stack development. Specialized in React, Node.js, .Net and Azure.",
  keywords: [
    "lead software developer",
    "technical architect",
    "full-stack developer",
    "software engineering leader",
    "team leadership",
    "system architecture",
    "cloud computing",
    "agile development",
    "technical strategy",
    "software solutions",
    "React",
    "Node.js",
    ".Net",
    "Azure",
    "typescript",
    "javascript",
    "c#",
    "sql"
  ],
  authors: [{ name: "Joshua Ryland" }],
  openGraph: {
    title: "Joshua Ryland | Lead Software Developer",
    description: "Senior software engineer specializing in scalable applications and technical leadership. Building high-performance teams and robust software solutions.",
    type: "profile",
    locale: "en-GB",
    images: [
      {
        url: "/josh.jpeg",
        width: 1200,
        height: 630,
        alt: "Joshua Ryland - Lead Software Developer"
      }
    ],
  },
  verification: {
    other: {
      "linkedin:profile": "https://www.linkedin.com/in/joshua-ryland/"
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://www.joshryland.com"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${guppy.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
