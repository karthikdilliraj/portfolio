export const personal = {
  name: 'Karthik Dilliraj',
  title: 'Full Stack Developer',
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
    period: 'May 2019 – Present',
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
    tech: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'Tailwind CSS'],
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
    id: 'react-weather-app',
    title: 'React Weather App',
    description:
      'Weather forecasting app with real-time data, custom Radix UI components, and Framer Motion animations. Built with React 19 and a Node.js/Express backend.',
    tech: ['React', 'TypeScript', 'Framer Motion', 'Radix UI', 'Tailwind CSS', 'Node.js', 'Express'],
    highlights: [
      'Real-time weather data integration',
      'Framer Motion animations',
      'Radix UI headless components',
      'Custom animation library',
    ],
    category: 'Frontend',
    featured: true,
  },
  {
    id: 'vue-weather-app',
    title: 'Vue Weather App',
    description:
      'Vue 3 weather forecasting app with Reka UI headless components, VueUse composables, and custom animations. Parallel Node.js/Express backend.',
    tech: ['Vue 3', 'TypeScript', 'Reka UI', 'VueUse', 'Tailwind CSS', 'Node.js'],
    highlights: [
      'VueUse composable-based state',
      'Reka UI headless components',
      'Custom tw-animate-css animations',
      'Rolldown-Vite bundler',
    ],
    category: 'Frontend',
    featured: true,
  },
  {
    id: 'react-quiz-app',
    title: 'React Quiz App',
    description:
      'Interactive quiz application with smooth Framer Motion animations, built with React 19 and TypeScript.',
    tech: ['React', 'TypeScript', 'Framer Motion', 'Lucide React', 'Vite'],
    highlights: ['Framer Motion page transitions', 'TypeScript type safety', 'Lucide icons'],
    category: 'Frontend',
    featured: false,
  },
  {
    id: 'vue-quiz-app',
    title: 'Vue Quiz App',
    description:
      'Interactive quiz app built with Vue 3 Composition API and TypeScript, featuring single-file components.',
    tech: ['Vue 3', 'TypeScript', 'Vite', 'Lucide Vue'],
    highlights: ['Vue 3 Composition API', '<script setup> SFCs', 'TypeScript integration'],
    category: 'Frontend',
    featured: false,
  },
  {
    id: 'react-recipe-finder',
    title: 'React Recipe Finder',
    description: 'Recipe discovery app with client-server architecture, built with React 18 and Node.js/Express.',
    tech: ['React', 'Vite', 'Node.js', 'Express'],
    highlights: ['Client-server architecture', 'Recipe search & discovery', 'Concurrent dev environment'],
    category: 'Full Stack',
    featured: false,
  },
  {
    id: 'vue-recipe-finder',
    title: 'Vue Recipe Finder',
    description: 'Vue 3 recipe discovery app with Composition API and a parallel Express backend.',
    tech: ['Vue 3', 'Vite', 'Node.js', 'Express'],
    highlights: ['Vue 3 Composition API', 'Express backend', 'Concurrent dev setup'],
    category: 'Full Stack',
    featured: false,
  },
  {
    id: 'react-todo-app',
    title: 'React Todo App',
    description: 'Task management app with Ant Design UI components, Tailwind CSS, and modern React hooks.',
    tech: ['React', 'TypeScript', 'Ant Design', 'Tailwind CSS', 'Vite'],
    highlights: ['Ant Design component library', 'Tailwind CSS styling', 'React hooks state management'],
    category: 'Frontend',
    featured: false,
  },
  {
    id: 'vue-todo-app',
    title: 'Vue Todo App',
    description: 'Vue 3 task management app with Ant Design Vue, Tailwind CSS, and auto component registration.',
    tech: ['Vue 3', 'TypeScript', 'Ant Design Vue', 'Tailwind CSS', 'Lodash'],
    highlights: ['Ant Design Vue UI', 'Auto component registration', 'Lodash ES utilities'],
    category: 'Frontend',
    featured: false,
  },
];
