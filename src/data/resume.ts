export const resume = {
  name: 'Brad Guillen',
  title: 'Senior Frontend Engineer',
  heroBio:
    'I build fast, scalable web applications. 8+ years shipping production-grade code at enterprise scale, with a growing focus on full stack and building with AI APIs.',
  aboutSummary:
    'Senior Web Developer with 8+ years of experience in web development, specializing in React. Experienced building and maintaining large-scale applications, driving technical migrations, optimizing performance, and consolidating multiple codebases. Comfortable with mentoring, demoing, managing deployments, and delivering clean, maintainable code in agile environments.',
  aboutContext:
    'Based in Costa Rica. Most recently at Keller Williams, where I own three interconnected frontend applications, contributed to a micro-frontend migration, and reduced dashboard load times by over 35% through performance work. I have strong roots in frontend and am actively growing into full stack taking on more backend, APIs, and infrastructure alongside the UI.',
  hobbies: [
    "I spend a lot of my spare time learning to build with AI wiring up the Claude API, experimenting with agent-style workflows, and working through Anthropic's certification programs. What interests me is the product side: how to connect LLMs to real applications in ways that are genuinely useful, not just demos or gimmicks.",
    'Outside of work I follow the crypto and blockchain space closely. I am especially curious about decentralized systems how they could change ownership, coordination, and trust online and I enjoy staying on top of where the technology and the market are heading.',
    'I am also finishing my Computer Engineering degree at ULACIT and plan to graduate this year. Fluent in Spanish (native) and English (C1).',
  ],
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
        { name: 'JavaScript', years: 8, level: 4 },
        { name: 'TypeScript', years: 3, level: 3 },
        { name: 'Java', years: 2, level: 2 },
        { name: 'Python', years: 1, level: 2 },
        { name: 'PHP', years: 1, level: 1 },
        { name: 'C#', years: 1, level: 1 },
      ],
    },
    {
      category: 'Frameworks & Libraries',
      items: [
        { name: 'React', years: 6, level: 4 },
        { name: 'Node.js', years: 4, level: 3 },
        { name: 'Webpack', years: 5, level: 3 },
        { name: 'Next.js', years: 3, level: 3 },
        { name: 'Express', years: 2, level: 3 },
        { name: 'GraphQL', years: 2, level: 2 },
        { name: 'Gulp', years: 2, level: 2 },
        { name: 'Jest', years: 3, level: 3 },
        { name: 'Spring Boot', years: 1, level: 2 },
        { name: 'Flask', years: 1, level: 1 },
        { name: 'Vite', years: 1, level: 2 },
      ],
    },
    {
      category: 'Databases',
      items: [
        { name: 'MySQL', years: 3, level: 3 },
        { name: 'PostgreSQL', years: 3, level: 3 },
        { name: 'MongoDB', years: 3, level: 3 },
        { name: 'NoSQL', years: 3, level: 3 },
      ],
    },
    {
      category: 'DevOps & CI/CD',
      items: [
        { name: 'Git', years: 8, level: 4 },
        { name: 'MFE / Module Federation', years: 3, level: 2 },
        { name: 'Docker', years: 3, level: 3 },
        { name: 'AWS', years: 2, level: 2 },
        { name: 'Jenkins', years: 2, level: 2 },
        { name: 'Harness', years: 1, level: 2 },
        { name: 'Spinnaker', years: 1, level: 2 },
        { name: 'Firebase', years: 1, level: 2 },
      ],
    },
    {
      category: 'AI & Tools',
      items: [
        { name: 'GitHub Copilot', years: 2, level: 2 },
        { name: 'Cursor', years: 2, level: 4 },
        { name: 'Claude Code', years: 1, level: 3 },
      ],
    },
  ],

  projects: [
    {
      id: 'futures-crypto',
      title: 'Sentiment',
      description:
        'Crypto futures sentiment assistant powered by Claude AI. Combines live BTC/USDT market data, Fear & Greed index, and futures positioning to deliver real-time sentiment reads via a chat interface.',
      tags: [
        'React',
        'Next.js',
        'TypeScript',
        'Node.js',
        'Claude API',
        'RAG',
        'Vercel',
      ],
      status: 'Completed',
      github: 'https://github.com/bradguillen15/futures-crypto',
      live: 'https://futures-crypto.vercel.app/',
      image: '/sentiment.webp',
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
      image: null,
      gallery: [
        '/plan-drea-supervisiones.webp',
        '/plan-drea-historial.webp',
        '/plan-estrategico-drea.webp',
      ],
      visible: true,
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
