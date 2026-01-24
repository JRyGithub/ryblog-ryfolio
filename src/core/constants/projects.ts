import { Project } from '../types/project';

export const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'Developer Tools CLI',
    description:
      'An open-source command-line tool that automates common development workflows and boilerplate generation.',
    technologies: ['Node.js', 'TypeScript', 'Commander.js'],
    github: 'https://github.com',
    featured: true,
  },
  {
    title: 'Real-time Collaboration',
    description:
      'A collaborative workspace application with live cursors, document editing, and video conferencing.',
    technologies: ['React', 'WebSocket', 'WebRTC', 'Redis'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'Design System',
    description:
      'A comprehensive design system with 50+ components, documentation, and Figma integration.',
    technologies: ['React', 'Storybook', 'Tailwind'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Analytics Dashboard',
    description:
      'A real-time analytics platform with customizable widgets and data visualization.',
    technologies: ['Vue.js', 'D3.js', 'Node.js'],
    github: 'https://github.com',
  },
  {
    title: 'API Gateway',
    description:
      'A high-performance API gateway with rate limiting, caching, and monitoring capabilities.',
    technologies: ['Go', 'Redis', 'Docker'],
    github: 'https://github.com',
  },
];
