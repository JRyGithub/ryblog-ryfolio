export type Experience = {
  period: string;
  title: string;
  company: string;
  url: string;
  description: string;
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    period: '2023 — Present',
    title: 'Lead Developer and Head of Frontend Development',
    company: 'Bytes Software Services',
    url: 'https://www.bytes.co.uk/',
    description:
      'Lead a team of 12 engineers building and maintaining a large-scale ECommerce platform. Architected the full stack infrastructure and implemented robust coding standards documentation. While delivering new features such as a in-house CMS.',
    technologies: [
      'TypeScript',
      'React',
      'Next.js',
      'Docker',
      'Azure',
      'C#',
      'Microservices',
      'Kubernetes',
    ],
  },
  {
    period: '2022 — 2023',
    title: 'Lead Software Engineer',
    company: 'Discngine',
    url: 'https://www.discngine.com/',
    description:
      'Delivered full-stack TypeScript applications for major pharmaceutical clients including Bayer, Merck, and AstraZeneca. Engineered high-performance web apps for molecular data visualization, handling 400K+ edges and 2K nodes. Leading small 2-3 man frontend teams in delivering scalable, plug-and-play solutions.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'GraphQL', 'Nest.js'],
  },
  {
    period: '2021 - 2023 (Contract)',
    title: 'Lead Software Engineer',
    company: 'The World Bank',
    url: 'https://www.worldbank.org/ext/en/home',
    description:
      'Architected a full-stack React/Node.js web app for road review assessments across Central Asia, featuring real-time collaboration with live comments and multi-language support (6 languages). Optimized performance for low-bandwidth regions, ensuring cost-efficient scalability.',
    technologies: ['Typescript', 'Next.js', 'Firebase', 'Docker'],
  },
  {
    period: '2022 - 2022',
    title: 'Lead Software Engineer',
    company: 'Cubyn',
    url: 'https://www.linkedin.com/company/cubyn/about/',
    description:
      'Built microservices for a global packing company, including a public order-time calculation API. Launched the "Fast Tag" feature enabling customers to embed dynamic delivery-time estimates on their websites. Led a production response team monitoring 90+ microservices with Datadog.',
    technologies: [
      'Typescript',
      'Node.js',
      'Vue.js',
      'Docker',
      'Microservices',
      'Kubernetes',
    ],
  },
  {
    period: '2021 - 2022',
    title: 'Software Engineer',
    company: 'Wakeflow',
    url: 'https://www.wakeflow.io/',
    description:
      'Sole tech lead for a startup, delivering custom web applications for various clients. Built a global glass delivery tracking system with real-time order modifications and designed automated invoice & time management systems for asset management firms.',
    technologies: ['Javascript', 'React', 'Node.js', 'Firebase'],
  },
  {
    period: '2018 - 2021',
    title: 'Developer',
    company: 'Tower Insurance',
    url: 'https://www.tower.co.nz/',
    description:
      'Built a storm warning system automating emergency alerts for Pacific Islands and developed COVID-19 refund automation to streamline customer reimbursements. Led Ushur training, designing workflow automation applications for internal teams.',
    technologies: ['C#', 'JavaScript', 'MySQL', 'HTML', 'CSS'],
  },
];
