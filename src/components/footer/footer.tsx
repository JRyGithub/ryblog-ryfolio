'use client';

import { SocialLinks } from '@/core/constants/social-links';

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-6">
            {SocialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Designed & Built with care
          </p>
          <p className="font-mono text-sm text-muted-foreground">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
