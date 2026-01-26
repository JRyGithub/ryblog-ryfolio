export type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  featured?: boolean;
  live?: string;
};

export const projects: Project[] = [
  {
    title: 'Simple Ticketing',
    description: 'A "StubHub" like web application utilising Microservices.',
    technologies: ['Typescript', 'Docker', 'Javascript', 'Microservices'],
    github: 'https://github.com/JRyGithub/ticketing',
    featured: true,
  },
  {
    title: 'Developer Tools CLI',
    description:
      'A test project demonstrating a modern Node.js API built with Fastify, TypeScript, and TypeBox schemas. This project serves as a learning example and template for building fast, type-safe REST APIs.',
    technologies: ['Node.js', 'TypeScript', 'Bun.js'],
    github: 'https://github.com/JRyGithub/fastify-api-example',
  },
  {
    title: 'Calculate Probabilities App',
    description:
      'A small project demonstrating full-stack development with React, C#, and Docker. With real time analytics using Grafana and Loki.',
    technologies: ['React', 'C#', 'Docker', 'Grafana', 'Loki'],
    github: 'https://github.com/JRyGithub/calculate-probabilities-app',
    featured: true,
  },
  {
    title: 'Shortcut Shenanigans',
    description:
      'A collection of my personal shell scripts and command-line tools. Useful for ZSH, Bash, and other shells. Features small shortcuts to make daily life easier.',
    technologies: ['Shell'],
    github: 'https://github.com/JRyGithub/shortcutShenanigans',
  },
  {
    title: 'Personal Site',
    description:
      'The code for this website! Utilizing Next.js, Typescript, and React. Demonstrating server-side rendering and static site generation.',
    technologies: ['Next.js', 'Typescript', 'React', 'Tailwind'],
    github: 'https://github.com/JRyGithub/ryblog-ryfolio',
  },
];
