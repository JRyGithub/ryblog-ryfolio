type bulletPoints = string[];

type Job = {
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  imageHref: string;
  furtherDescription?: bulletPoints;
  links?: string[];
};

export const jobHistory: Job[] = [
  {
    company: 'Discngine',
    title: 'Science and IT Project Manager',
    location: 'Paris, France',
    startDate: '11/2022',
    endDate: 'Present',
    imageHref: '/discngine.png',
    description:
      'Full stack development and project management of a web applications for scientific projects. Utilizing React, typescipt, node.js with nest.js and many more.',
    furtherDescription: [
      'Created full stack TypeScript applications for prominent Pharma and Health Science companies such as Bayer, Merck, and Astra Zeneca.',
      'With a focus on optimized network graphs with over 400,000 edges and complex molecular relationship dashbaords with d3.',
      'Utilized GraphQL as a first for the company, to create a library enumeration modeler for running chemical reactions for scientists in both application form and software form.',
      'Managed frontend-side of projects (2-3 team members) collaborating with global clients and creating bespoke scalable applications that could then be sold as plug and play (Design of Architecture and Design Patterns Crucial)',
    ],
  },
  {
    company: 'Cubyn',
    title: 'Software Engineer',
    location: 'Paris, France',
    startDate: '04/2022',
    endDate: '11/2022',
    imageHref: '/cubyn.ico',
    description:
      'Full stack engineer on the web team. Utilizing React, Typescript, node.js with nest.js and many more.',
    furtherDescription: [
      `Microservices based architecture, created numerous new microservices for serving front ends, user-based information with one 
being publicly available so that time to order could be calculated.`,
      `Created and designed a new concept for the company called a \‘Fast tag\’ allowing customers to embed scripts on their 
websites to show expected delivery time.`,
      `Using Datadog monitored over 90 microservices as a fast response team to fix bugs in production code as quickly as 
possible in a high-pressure environment to allow delivery service to continue.`,
    ],
  },
  {
    company: 'World Bank',
    title: 'Developer & IT Consultant',
    location: 'Europe & Central Asia',
    startDate: '12/2021',
    endDate: '01/2023',
    imageHref: '/wbg.png',
    description:
      'Headed the IT component of a web project to allow users across Central Asia to review roads and border crossings.',
    furtherDescription: [
      `Designed and lead the IT component of a mapping web application,using MapBox, allowing users across Central Asia to review roads and border crossing checkpoints.`,
      `Managed and decided the necessary technologies to use with a focus on cost and keeping performance high for poor 
internet connections, while simultaneously being usable across 6 different languages and easily usable for Mobile and 
Browser`,
    ],
  },
  {
    company: 'Wakeflow',
    title: 'Javascript Developer',
    location: 'London, England',
    startDate: '05/2021',
    endDate: '05/2022',
    imageHref: '/wakeflow.ico',
    description:
      '1st hire of a startup. Focused on creating in-house web-application solutions for a range of global clients.',
    furtherDescription: [
      `First hire for a new start-up focused on creating in-house web applications for a wide range of clients. Acting as sole techlead to advise clients and then create a web-based solution for their problem.`,
      `Created a tracking system for a global glass delivery company so that large scale customers could see where orders were 
live and cancel and edit them, as necessary.`,
      `Designed and created an invoice and time management track system for a number of Asset Management firms, to 
automate invoicing to clients and tracking of employee’s time`,
    ],
  },
  {
    company: 'Tower Insurance',
    title: 'Developer',
    location: 'Auckland, New Zealand',
    startDate: '11/2018',
    endDate: '06/2021',
    imageHref: '/towerInsurance.png',
    description:
      'Using .NetCore to create Microsoft based microservices I created numerous automation solutions. Including a storm warning system for the Pacific Islands.',
    furtherDescription: [
      `Designed and implemented a storm warning system for the pacific islands, to automate the sending of text-messages to 
the islands and to assure them that they were insured and to get to safety. Winning a Internal Innovation Award.`,
      `Released a Covid-19 initiative to automate a money-back scheme. Effectively emailing all of Tower Insurance\’s clients, then taking them through a step-by-step process, which was zero touch, to allow for money returns.`,
      `Lead the Ushur training squad for training and designing Ushur based applications for Tower.`,
    ],
  },
  {
    company: 'Maynard Marks',
    title: 'Environmental Surveyor',
    location: 'Auckland, New Zealand',
    startDate: '01/2015',
    endDate: '11/2018',
    imageHref: '/maynardmarks.ico',
    description:
      'Worked within teams to achieve success on several building projects, including commercial and residential structures',
  },
];
