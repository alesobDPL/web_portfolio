import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  chakra,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  space,
  CaseMaker,
  coverhunt,
  dcc,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Database',
    icon: postgresql,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  }
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: chakra,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Práctica profesional I',
    company_name: 'Universidad del Bio Bio',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Mar 2022 - Oct 2022',
  },
  {
    title: 'Práctica profesional II',
    company_name: 'Bapets SPA',
    icon: microverse,
    iconBg: '#333333',
    date: 'Ene 2023 - Mar 2023',
  },
  {
    title: 'Proyecto de título',
    company_name: 'Bapets SPA',
    icon: dcc,
    iconBg: '#333333',
    date: 'Oct 2023 - Dic 2023',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Freelance developer',
    icon: dcc,
    iconBg: '#333333',
    date: 'Ene 2024 - Presente',

    
  },
  {
    title: 'Operations coordinator',
    company_name: 'Bapets SPA',
    icon: dcc,
    iconBg: '#333333',
    date: 'Ene 2024 - Presente',

    
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'InventoryManager_1',
    description: 'Inventory Manager** is a modern and minimalist inventory management system designed to optimize the control of products, suppliers, and orders.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: dashboard_empresarial,
    repo: 'https://github.com/InventoryManager',
    demo: 'https://github.com/InventoryManager',
  },
  {
    id: 'project-2',
    name: 'Case maker',
    description:
      'A case maker app, to create custom phone cases. Also implements a payment gateway in it. ',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: CaseMaker,
    repo: 'https://github.com/alesobDPL/PhoneCaseMaker',
    demo: 'https://phone-case-maker.vercel.app/',
  },
  {
    id: 'project-3',
    name: 'Soon',
    description: 'Put in here the description.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: space,
    repo: 'https://github.com/alesobDPL',
    demo: 'https://github.com/alesobDPL',
  },
  {
    id: 'project-4',
    name: 'Soon',
    description: 'Put in here the description.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: space,
    repo: 'https://github.com/alesobDPL',
    demo: 'https://github.com/alesobDPL',
  },
  {
    id: 'project-5',
    name: 'Soon',
    description: 'Put in here the description.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
     image: space,
    repo: 'https://github.com/alesobDPL',
    demo: 'https://github.com/alesobDPL',
  },
];

export { services, technologies, experiences, projects };
