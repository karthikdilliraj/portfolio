export const personal = {
  name: 'Karthik Dilliraj',
  title: 'Web Developer - Full Stack',
  email: 'karthikshaik@gmail.com',
  phone: '+1 819 328 1227',
  location: 'Nepean, ON, Canada',
  linkedin: 'https://linkedin.com/in/karthik-dilliraj-06a2479a',
  github: 'https://github.com/karthikdilliraj',
  summary:
    'Experienced Full Stack Developer with 5+ years of expertise designing, building, and coding responsive web applications. Delivering scalable, high-performance solutions with strong emphasis on usability, efficiency, and modern web standards.',
};

export const skills = {
  frontend: ['React', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  backend: ['Node.js', 'Express.js', 'Java', 'Spring Boot', 'Python', 'FastAPI'],
  database: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  devops: ['Docker', 'Kubernetes', 'CI/CD', 'Git', 'GitHub', 'GitLab'],
  other: ['GraphQL', 'REST APIs', 'Jest', 'Agile/Scrum', 'JWT', 'Framer Motion'],
};

export const experience = [
  {
    company: 'Elastalink',
    role: 'Web Developer',
    location: 'Ottawa, ON',
    period: 'May 2020 – Present',
    highlights: [
      'Built server-side functionality with Node.js and Express.js',
      'Developed UIs using Vue.js and React.js frameworks',
      'Managed SQL & NoSQL databases with GraphQL integration',
      'Built dynamic dashboards and data visualizations with Apexcharts',
      'Containerized deployments with Docker and Kubernetes',
    ],
  },
  {
    company: 'Infosys',
    role: 'Senior System Engineer',
    location: 'Chennai, India',
    period: 'June 2016 – December 2018',
    highlights: [
      'Specialized in Identity and Access Management (IAM) solutions',
      'Expertise in OIM, OAM, ODSEE, OBIP, OUD, Active Directory',
      'Designed, developed, and deployed IAM integrations',
      'Proficient in Java, UNIX, Oracle, and JavaScript',
    ],
  },
];

export const education = [
  {
    institution: 'Carleton University',
    degree: 'Master of Engineering',
    field: 'Electrical & Computer Engineering',
    period: 'Jan 2019 – April 2020',
    gpa: '11.6 / 12',
    highlights: [
      'Predicted Air Quality Index (AQI) using ML models in Python',
      'Sensor data collection and analysis app in C/C++',
    ],
  },
];

export const projects = [
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    description:
      'Full-stack personal finance app for tracking expenses, managing budgets, and splitting costs with groups. Features JWT auth, multi-currency support, and analytics dashboards.',
    tech: [
      'Java',
      'Spring Boot',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Tailwind CSS',
    ],
    highlights: [
      'Multi-currency with snapshot exchange rates',
      'Budget alerts & analytics dashboards',
      'Group expense splitting with role-based access',
      'Recurring expenses with auto-generation',
      'JWT + rotating refresh tokens',
    ],
    category: 'Full Stack',
    featured: true,
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    description:
      'Real-time weather forecasting app built in both React and Vue 3. React version uses Radix UI and Framer Motion; Vue version uses Reka UI and VueUse composables. Both backed by a Node.js/Express API.',
    tech: ['React', 'Vue 3', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Node.js', 'Express'],
    highlights: [
      'Built in React (Radix UI, Framer Motion) and Vue 3 (Reka UI, VueUse)',
      'Real-time weather data integration',
      'Custom animations and headless components',
      'Shared Node.js/Express backend',
    ],
    category: 'Frontend',
    featured: true,
  },
  {
    id: 'quiz-app',
    title: 'Quiz App',
    description:
      'Interactive quiz application implemented in both React and Vue 3. Features smooth animations, TypeScript type safety, and single-file component architecture.',
    tech: ['React', 'Vue 3', 'TypeScript', 'Framer Motion', 'Vite'],
    highlights: [
      'Built in React (Framer Motion) and Vue 3 (Composition API)',
      'Smooth page transitions and animations',
      'TypeScript throughout',
      'Lucide icon integration',
    ],
    category: 'Frontend',
    featured: false,
  },
  {
    id: 'todo-app',
    title: 'Todo App',
    description:
      'Task management app built in Vue 3 with Ant Design Vue and Tailwind CSS. Also implemented in React with Ant Design for comparison.',
    tech: ['Vue 3', 'React', 'TypeScript', 'Ant Design Vue', 'Tailwind CSS'],
    highlights: [
      'Vue 3 Composition API with auto component registration',
      'React version with Ant Design hooks',
      'Ant Design UI components',
      'Lodash ES utilities',
    ],
    category: 'Frontend',
    featured: false,
  },
  {
    id: 'recipe-finder',
    title: 'Recipe Finder',
    description:
      'Recipe discovery app with client-server architecture, built in both Vue 3 and React. Features a shared Node.js/Express backend for recipe search.',
    tech: ['Vue 3', 'React', 'Node.js', 'Express', 'Vite'],
    highlights: [
      'Vue 3 and React implementations',
      'Shared Express backend',
      'Recipe search & discovery',
      'Concurrent dev environment',
    ],
    category: 'Full Stack',
    featured: false,
  },
];
