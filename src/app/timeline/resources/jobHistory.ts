type Job = {
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  bonus?: string;
  links?: string[];
}

export const jobHistory: Job[] = [
  {
    company: 'Discngine',
    title: 'Science and IT Project Manager',
    location: 'Paris, France',
    startDate: '11/2022',
    endDate: 'Present',
    description: 'Full stack development and project management of a web applications for scientific projects. Utilizing React, typescipt, node.js with nest.js and many more.',
  },
  {
    company: 'Cubyn',
    title: 'Software Engineer',
    location: 'Paris, France',
    startDate: '04/2022',
    endDate: '11/2022',
    description: 'Full stack engineer on the web team. Utilizing React, Typescipt, node.js with nest.js and many more.',
  },
  {
    company: 'World Bank',
    title: 'Developer & IT Consultant',
    location: 'Europe & Central Asia',
    startDate: '12/2021',
    endDate: '01/2023',
    description: 'Headed the IT component of a web project to allow users across Central Asia to review roads and border crossings.',
  },
  {
    company: 'Wakeflow',
    title: 'Javascript Developer',
    location: 'London, England',
    startDate: '05/2021',
    endDate: '05/2022',
    description: '1st hire of a startup. Focused on creating in-house web-application solutions for a range of global clients.',
  },
  {
    company: 'Tower Insurance',
    title: 'Developer',
    location: 'Auckland, New Zealand',
    startDate: '11/2018',
    endDate: '06/2021',
    description: 'Using .NetCore to create Microsoft based microservices I created numerous automation solutions. Including a storm warning system for the Pacific Islands.',
  },
  {
    company: 'Maynard Marks',
    title: 'Environmental Surveyor',
    location: 'Auckland, New Zealand',
    startDate: '01/2015',
    endDate: '11/2018',
    description: 'Worked within teams to achieve success on several building projects, including commercial and residential structures',
  }
]