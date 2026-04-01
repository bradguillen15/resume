export const resume = {
  name: 'Brad Guillen',
  title: 'Senior Frontend Engineer',
  heroBio:
    'I build fast, scalable web applications. 8+ years shipping production-grade code at enterprise scale, with a growing focus on full stack and building with AI APIs.',
  location: 'Costa Rica',
  email: 'bradguillen15@gmail.com',
  phone: '+506 6201-1840',
  linkedin: 'linkedin.com/in/brad-guillen-89794ba8',
  github: 'github.com/bradguillen15',
  resumeUrl: '/resume.pdf',

  experience: [
    {
      id: 'kw',
      role: 'Senior Frontend Developer',
      company: 'Keller Williams Inc.',
      companyUrl: 'https://www.kw.com',
      period: 'Nov 2020 – Present',
      duration: '5 years',
      highlights: [
        'Owned and maintained 3 interconnected frontend applications for a real estate technology platform.',
        'Participated in migrating to Micro Frontend (MFE) architecture, improving deployment independence across multiple squads.',
        'Led data layer migration removing Redux, reducing boilerplate by ~40%.',
        'Reduced dashboard load time by 35%+ via lazy loading and resolving excessive re-render issues.',
        'Unified 3 repositories into a single codebase, eliminating duplication and maintenance overhead.',
      ],
      tags: ['React', 'MFE', 'Module Federation', 'TypeScript', 'Performance'],
    },
    {
      id: 'advision',
      role: 'Team Lead / Full Stack Developer',
      company: 'Advision Development',
      companyUrl: null,
      period: 'Nov 2017 – Nov 2020',
      duration: '3 years',
      highlights: [
        'Led frontend team of 4, mentoring junior developers through code reviews and requirement analysis.',
        'Served as Scrum Master, facilitating sprint ceremonies and stakeholder communication.',
        'Led migration from legacy React CMS to WordPress connected via REST APIs to microservices.',
        'Developed reusable components and shared logic across 3+ web applications.',
      ],
      tags: ['React', 'Node.js', 'WordPress', 'REST APIs', 'Team Lead'],
    },
    {
      id: 'ff',
      role: 'Software Developer',
      company: 'First Factory',
      companyUrl: null,
      period: 'May 2016 – Nov 2017',
      duration: '1.5 years',
      highlights: [
        'Built a Yeoman generator scaffolding full CRUD APIs for Java/Node.js based on user options.',
        'Developed a Google Spreadsheets add-on for auto-generating reports with JavaScript ES6.',
        'Architected a Java REST API from scratch with Hibernate, Jersey, JUnit, and Mockito.',
      ],
      tags: ['Java', 'Spring Boot', 'Node.js', 'JavaScript ES6'],
    },
  ],

  skills: [
    {
      category: 'Languages',
      items: [
        {
          name: 'JavaScript',
          icon: 'devicon-javascript-plain',
          years: 8,
          level: 4,
        },
        {
          name: 'TypeScript',
          icon: 'devicon-typescript-plain',
          years: 3,
          level: 3,
        },
        { name: 'Java', icon: 'devicon-java-plain', years: 2, level: 2 },
        { name: 'Python', icon: 'devicon-python-plain', years: 1, level: 1 },
        { name: 'PHP', icon: 'devicon-php-plain', years: 1, level: 1 },
        { name: 'C#', icon: 'devicon-csharp-plain', years: 1, level: 1 },
      ],
    },
    {
      category: 'Frameworks & Libraries',
      items: [
        { name: 'React', icon: 'devicon-react-original', years: 6, level: 4 },
        { name: 'Node.js', icon: 'devicon-nodejs-plain', years: 4, level: 3 },
        { name: 'Webpack', icon: 'devicon-webpack-plain', years: 5, level: 3 },
        { name: 'Next.js', icon: 'devicon-nextjs-plain', years: 3, level: 2 },
        {
          name: 'Express',
          icon: 'devicon-express-original',
          years: 2,
          level: 2,
        },
        { name: 'GraphQL', icon: 'devicon-graphql-plain', years: 2, level: 2 },
        { name: 'Gulp', icon: 'devicon-gulp-plain', years: 2, level: 2 },
        { name: 'Jest', icon: 'devicon-jest-plain', years: 3, level: 2 },
        {
          name: 'Spring Boot',
          icon: 'devicon-spring-plain',
          years: 1,
          level: 1,
        },
        { name: 'Flask', icon: 'devicon-flask-original', years: 1, level: 1 },
        { name: 'Vite', icon: 'devicon-vitejs-plain', years: 1, level: 1 },
      ],
    },
    {
      category: 'Databases',
      items: [
        { name: 'MySQL', icon: 'devicon-mysql-plain', years: 3, level: 2 },
        {
          name: 'PostgreSQL',
          icon: 'devicon-postgresql-plain',
          years: 3,
          level: 2,
        },
        { name: 'MongoDB', icon: 'devicon-mongodb-plain', years: 3, level: 2 },
        { name: 'NoSQL', icon: null, years: 3, level: 2 },
      ],
    },
    {
      category: 'DevOps & CI/CD',
      items: [
        { name: 'Git', icon: 'devicon-git-plain', years: 8, level: 3 },
        { name: 'MFE / Module Federation', icon: null, years: 3, level: 1 },
        { name: 'Docker', icon: 'devicon-docker-plain', years: 3, level: 1 },
        {
          name: 'AWS',
          icon: 'devicon-amazonwebservices-plain-wordmark',
          years: 2,
          level: 1,
        },
        { name: 'Jenkins', icon: 'devicon-jenkins-plain', years: 2, level: 1 },
        { name: 'Harness', icon: null, years: 1, level: 1 },
        { name: 'Spinnaker', icon: null, years: 1, level: 1 },
        {
          name: 'Firebase',
          icon: 'devicon-firebase-plain',
          years: 1,
          level: 1,
        },
      ],
    },
    {
      category: 'AI & Tools',
      items: [
        {
          name: 'GitHub Copilot',
          icon: 'devicon-github-original',
          years: 2,
          level: 2,
        },
        { name: 'Cursor', icon: 'devicon-cursor-plain', years: 2, level: 2 },
        { name: 'Claude Code', icon: null, years: 1, level: 2 },
      ],
    },
  ],

  projects: [
    {
      id: 'monotienda',
      title: 'MonoTienda',
      description:
        'Open-source monorepo template for modern Costa Rican e-commerce stores. Built with Turborepo, React 19, TanStack Query, and Firebase.',
      tags: ['React', 'TypeScript', 'Turborepo', 'Firebase', 'TanStack Query'],
      status: 'In Progress',
      github: null,
      live: null,
      image: null,
      visible: false,
    },
    {
      id: 'resume-site',
      title: 'Portfolio / Resume',
      description:
        'This site — a personal portfolio built from scratch with a split-panel layout, custom cursor, typewriter effect, and Firebase backend.',
      tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      status: 'Active',
      github: 'https://github.com/bradguillen15/resume',
      live: 'https://resume-e74cb.web.app',
      image: '/resume.webp',
      visible: true,
    },
    {
      id: 'plan-estrategico-drea',
      title: 'Plan Estratégico DREA',
      description:
        'Digital management system for the DREA regional strategic plan (MEP), digitalizing objective tracking, operational plans, supervision, roles, audit trail, and Excel/CSV/PDF export.',
      tags: ['React', 'TypeScript', 'Firebase', 'Firestore', 'Tailwind CSS'],
      status: 'Completed',
      github: 'https://github.com/bradguillen15/plan-estrategico-drea',
      live: null,
      image: '/plan-estrategico-drea.webp',
      visible: true,
    },
  ],

  certifications: [
    {
      group: 'Completed',
      items: [
        {
          name: 'Claude 101',
          issuer: 'Anthropic',
          date: 'March 2026',
          url: 'https://verify.skilljar.com/c/hv3kfb632qj7',
        },
        {
          name: 'Claude Code in Action',
          issuer: 'Anthropic',
          date: 'March 2026',
          url: 'https://verify.skilljar.com/c/8wtazspmwpsq',
        },
        {
          name: 'AI Fluency: Framework & Foundations',
          issuer: 'Anthropic',
          date: 'March 2026',
          url: 'https://verify.skilljar.com/c/tohwz74w32wv',
        },
        {
          name: 'Building with the Claude API',
          issuer: 'Anthropic',
          date: 'March 2026',
          url: 'https://verify.skilljar.com/c/nxzk5uv8xtza',
        },
        {
          name: 'Introduction to Model Context Protocol',
          issuer: 'Anthropic',
          date: 'March 2026',
          url: 'https://verify.skilljar.com/c/trk4n49o9kxf',
        },
      ],
    },
    {
      group: 'In Progress',
      items: [
        {
          name: 'Model Context Protocol: Advanced Topics',
          issuer: 'Anthropic',
          date: null,
          url: '',
        },
      ],
    },
    {
      group: 'Planned',
      items: [
        { name: 'GitHub Actions', issuer: 'GitHub', date: null, url: '' },
        {
          name: 'AWS Cloud Practitioner',
          issuer: 'Amazon',
          date: null,
          url: '',
        },
      ],
    },
  ],

  education: [
    {
      degree: 'Computer Engineering',
      school: 'ULACIT',
      year: '2015',
      note: 'Planning to graduate 2026',
    },
    {
      degree: 'Middle Technician in Software Development',
      school: 'Colegio Técnico Carlos Luis Fallas',
      year: '2012–2014',
      note: '',
    },
  ],

  languages: [
    { lang: 'Spanish', level: 'Native' },
    { lang: 'English', level: 'C1' },
  ],
};
