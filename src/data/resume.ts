interface ExperienceRole {
  role: string;
  period: string;
  duration: string;
  location: string | null;
  highlights: string[];
}

interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  companyUrl: string | null;
  employmentType: string | null;
  workMode: string | null;
  place: string | null;
  period: string;
  duration: string;
  highlights: string[];
  roles: ExperienceRole[] | null;
  tags: string[];
}

export const resume = {
  name: 'Brad Guillen',
  title: 'Senior Software Engineer',
  aboutSummary:
    'Senior Software Engineer with ~10 years designing and delivering production web applications across frontend and backend. Deep expertise building and maintaining large React/TypeScript applications, with real backend experience in Java, Spring Boot, Node.js, and AWS. Track record leading cross-team API migrations, repository consolidation, and performance work — plus mentoring and team leadership — while keeping systems simple and maintainable.',
  aboutContext:
    'Based in Costa Rica. Most recently a Senior Software Engineer at Keller Williams (through Apr 2026), where I was one of two frontend engineers on an enterprise real-estate platform of ~40 micro frontends serving ~60,000 users — owning three production apps, leading an API V1→V2 migration behind a compatibility layer, and cutting dashboard load time ~35%. I am a software engineer with deep frontend roots and practical backend experience, not a frontend-only specialist, and I am open to remote roles.',
  hobbies: [
    "I spend a lot of my spare time learning to build with AI wiring up the Claude API, experimenting with agent-style workflows, and working through Anthropic's certification programs. What interests me is the product side: how to connect LLMs to real applications in ways that are genuinely useful, not just demos or gimmicks.",
    'Outside of work I follow the crypto and blockchain space closely. I am especially curious about decentralized systems how they could change ownership, coordination, and trust online and I enjoy staying on top of where the technology and the market are heading.',
    'I am also finishing my Computer Engineering degree at ULACIT (~90% completed). Fluent in Spanish (native) and English (C1).',
  ],
  location: 'Costa Rica',
  email: 'bradguillen15@gmail.com',
  phone: '+506 6201-1840',
  linkedin: 'linkedin.com/in/brad-guillen-89794ba8',
  github: 'github.com/bradguillen15',
  resumeUrl: '/Brad%20Guillen%20-%20Senior%20Software%20Engineer.pdf',

  experience: [
    {
      id: 'kw',
      role: 'Senior Software Engineer',
      company: 'Keller Williams Inc.',
      companyUrl: 'https://www.kw.com',
      employmentType: 'Full-time',
      workMode: 'Remote',
      place: 'US',
      roles: null,
      period: 'Nov 2020 – Apr 2026',
      duration: '5.5 years',
      highlights: [
        'One of two frontend engineers on an enterprise real-estate platform (~40 micro frontends serving ~60,000 users); owned 3 production apps (user, admin, shared).',
        'Single-handedly migrated my app from another team’s API V1 to V2 (a full response redesign), building a transformation layer that normalized V2 into the shape consumers expected — no risky big-bang rewrite.',
        'Migrated server state from Redux to React Query, cutting state-management boilerplate ~40% and simplifying onboarding for new work.',
        'Diagnosed rendering bottlenecks in production and introduced lazy loading, cutting dashboard load time ~35%+.',
        'Consolidated three repositories into two, reducing deployment steps, pipeline maintenance, and onboarding cost.',
        'Designed a configuration-driven banner system so Product could manage banners without engineering cycles.',
        'Built reusable, accessible React components to WCAG/ARIA standards in the shared component library.',
        'Used Datadog for production observability — dashboards, monitors, and alerts — to catch regressions and triage incidents; maintained CI/CD across GitHub Actions, Harness, and Spinnaker.',
      ],
      tags: ['React', 'TypeScript', 'MFE', 'React Query', 'Accessibility', 'Datadog', 'Performance'],
    },
    {
      id: 'advision',
      role: 'Lead Web Developer',
      company: 'Advision Development',
      companyUrl: null,
      employmentType: 'Full-time',
      workMode: 'Hybrid',
      place: 'Costa Rica',
      period: 'Nov 2017 – Nov 2020',
      duration: '3 yrs 1 mo',
      highlights: [],
      roles: [
        {
          role: 'Lead Web Developer',
          period: 'Jan 2020 – Nov 2020',
          duration: '11 mos',
          location: null,
          highlights: [
            'Led a frontend team of 4 and served as Scrum Master — delegating, reviewing code, mentoring, setting coding standards, reviewing designs, and interviewing/helping hire.',
            'Led the migration from a legacy React CMS to WordPress connected via REST APIs to microservices.',
            'Managed deployments and code versioning; coordinated with stakeholders to translate requirements into deliverables.',
          ],
        },
        {
          role: 'Senior Web Developer',
          period: 'Nov 2017 – Dec 2019',
          duration: '2 yrs 2 mos',
          location: null,
          highlights: [
            'Built and consumed REST APIs with Node.js and Express, coordinating with backend teams on contract definitions.',
            'Used GraphQL to query and mutate backend data, improving frontend data-fetching efficiency.',
            'Implemented real-time features with WebSockets for low-latency live updates.',
            'Led an AWS Lambda integration that transformed and cached internal API data into a WordPress-friendly API.',
            'Delivered full-stack features across React and Node.js for 3+ web applications.',
          ],
        },
      ],
      tags: ['React', 'Node.js', 'GraphQL', 'AWS Lambda', 'WordPress', 'Team Lead'],
    },
    {
      id: 'ff',
      role: 'Software Engineer',
      company: 'First Factory',
      companyUrl: null,
      employmentType: 'Full-time',
      workMode: 'Hybrid',
      place: 'Costa Rica',
      roles: null,
      period: 'May 2016 – Nov 2017',
      duration: '1.5 years',
      highlights: [
        'Architected a Java REST API from scratch (Hibernate, Jersey; JUnit/Mockito tests; Selenium QA automation) for a US client, with on-site collaboration and direct stakeholder reporting.',
        'Created a Yeoman generator scaffolding full CRUD APIs for Java (Spring Boot) or Node.js, plus a Google Sheets reporting add-on in JavaScript ES6.',
        'Built a C# clinic-management application for internal workflows and contributed to a Python/Flask project.',
      ],
      tags: ['Java', 'Spring Boot', 'Node.js', 'C#', 'Python'],
    },
    {
      id: 'fpt',
      role: 'Software Developer Intern',
      company: 'FPT Latin America',
      companyUrl: null,
      employmentType: 'Internship',
      workMode: 'On-site',
      place: 'Costa Rica',
      period: 'Oct 2014 – Dec 2014',
      duration: '3 mos',
      highlights: [
        'Built a SharePoint application from scratch (JavaScript, C#, SQL) to manage internal operational workflows.',
        'Delivered all project phases on schedule against upper-management requirements, presenting daily progress to the Operations Manager.',
        'Ran end-user training sessions and provided post-launch support to drive adoption.',
      ],
      roles: null,
      tags: ['JavaScript', 'C#', 'SQL', 'SharePoint'],
    },
  ] as ExperienceEntry[],

  skills: [
    {
      category: 'Languages',
      items: [
        { name: 'JavaScript', years: 8, level: 4 },
        { name: 'TypeScript', years: 3, level: 3 },
        { name: 'Java', years: 2, level: 2 },
        { name: 'Python', years: 1, level: 2 },
        { name: 'SQL', years: 4, level: 3 },
        { name: 'PHP', years: 1, level: 1 },
        { name: 'C#', years: 1, level: 1 },
      ],
    },
    {
      category: 'Frameworks & Libraries',
      items: [
        { name: 'React', years: 6, level: 4 },
        { name: 'Node.js', years: 4, level: 3 },
        { name: 'React Query', years: 3, level: 3 },
        { name: 'Webpack', years: 5, level: 3 },
        { name: 'Next.js', years: 3, level: 3 },
        { name: 'Tailwind', years: 2, level: 3 },
        { name: 'Express', years: 2, level: 3 },
        { name: 'GraphQL', years: 2, level: 2 },
        { name: 'WebSockets', years: 2, level: 2 },
        { name: 'Accessibility (WCAG/ARIA)', years: 3, level: 3 },
        { name: 'Gulp', years: 2, level: 2 },
        { name: 'Spring Boot', years: 1, level: 2 },
        { name: 'Flask', years: 1, level: 1 },
        { name: 'FastAPI', years: 1, level: 2 },
        { name: 'Vite', years: 1, level: 2 },
      ],
    },
    {
      category: 'Testing',
      items: [
        { name: 'Jest', years: 3, level: 3 },
        { name: 'React Testing Library', years: 3, level: 3 },
        { name: 'Playwright', years: 1, level: 3 },
        { name: 'Vitest', years: 1, level: 3 },
        { name: 'JUnit / Mockito', years: 2, level: 2 },
      ],
    },
    {
      category: 'Databases',
      items: [
        { name: 'PostgreSQL', years: 3, level: 3 },
        { name: 'MySQL', years: 3, level: 3 },
        { name: 'MongoDB', years: 3, level: 3 },
        { name: 'Supabase', years: 1, level: 3 },
      ],
    },
    {
      category: 'DevOps & CI/CD',
      items: [
        { name: 'Git', years: 8, level: 4 },
        { name: 'MFE / Module Federation', years: 3, level: 2 },
        { name: 'Docker', years: 3, level: 3 },
        { name: 'AWS', years: 2, level: 2 },
        { name: 'CI/CD (GitHub Actions)', years: 4, level: 3 },
        { name: 'Datadog', years: 2, level: 2 },
        { name: 'Sentry', years: 1, level: 3 },
        { name: 'Jenkins', years: 2, level: 2 },
        { name: 'Harness', years: 1, level: 2 },
        { name: 'Spinnaker', years: 1, level: 2 },
        { name: 'Vercel', years: 1, level: 3 },
        { name: 'Firebase', years: 1, level: 2 },
      ],
    },
    {
      category: 'AI & Tools',
      items: [
        { name: 'Cursor', years: 2, level: 4 },
        { name: 'Claude Code', years: 1, level: 3 },
        { name: 'GitHub Copilot', years: 2, level: 2 },
        { name: 'CodeRabbit', years: 1, level: 2 },
        { name: 'Gemini', years: 1, level: 2 },
        { name: 'RAG', years: 1, level: 2 },
        { name: 'MCP (Model Context Protocol)', years: 1, level: 2 },
      ],
    },
  ],

  projects: [
    {
      id: 'free-slot',
      title: 'Free Slot',
      description:
        'Production full-stack activity tracker built end-to-end on Supabase. Anonymous-first flow persists activity to localStorage and migrates to the account on signup with no data loss; Supabase is abstracted behind services and hooks so the backend stays swappable. React Query for server state, Playwright E2E against real auth/data paths, Sentry observability, and a RAG feature that feeds activity to an LLM to suggest habits.',
      tags: [
        'React',
        'TypeScript',
        'Supabase',
        'React Query',
        'Playwright',
        'RAG',
        'Vercel',
      ],
      status: 'Active',
      github: 'https://github.com/bradguillen15/free-slot',
      live: 'https://free-slot-blush.vercel.app/',
      image: '/free-slot.webp',
      gallery: ['/free-slot.webp', '/free-slot-week.webp'],
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
      id: 'futures-crypto',
      title: 'Sentiment',
      description:
        'Crypto futures sentiment assistant powered by Claude AI. Combines live BTC/USDT market data, Fear & Greed index, and futures positioning into a real-time chat interface. Under active development — more features and code coming soon.',
      tags: [
        'React',
        'Next.js',
        'TypeScript',
        'Node.js',
        'Claude API',
        'RAG',
        'Vercel',
      ],
      status: 'In Progress',
      github: 'https://github.com/bradguillen15/futures-crypto',
      live: 'https://futures-crypto.vercel.app/',
      image: '/sentiment.webp',
      visible: true,
    },
  ],

  certifications: [
    {
      group: 'Anthropic',
      items: [
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
        {
          name: 'Model Context Protocol: Advanced Topics',
          issuer: 'Anthropic',
          date: 'April 2026',
          url: 'https://verify.skilljar.com/c/u7fefn923tpw',
        },
        {
          name: 'Introduction to agent skills',
          issuer: 'Anthropic',
          date: 'May 2026',
          url: 'https://verify.skilljar.com/c/stoca4h3r7ra',
        },
      ],
    },
    {
      group: 'Boot.dev',
      items: [
        {
          name: 'Learn AWS',
          issuer: 'Boot.dev',
          date: 'May 2026',
          url: 'https://www.boot.dev/certificates/002b9b18-902f-40cb-a301-7cf93c47bf98',
        },
        {
          name: 'Learn Docker',
          issuer: 'Boot.dev',
          date: 'May 2026',
          url: 'https://www.boot.dev/certificates/4dd82515-a420-4e3c-9147-f85b8283a002',
        },
        {
          name: 'Learn CI/CD with GitHub Actions',
          issuer: 'Boot.dev',
          date: 'June 2026',
          url: 'https://www.boot.dev/certificates/b743ffb5-2b5d-486e-88e0-f65eef7f1a13',
        },
        {
          name: 'Learn Retrieval Augmented Generation',
          issuer: 'Boot.dev',
          date: 'July 2026',
          url: 'https://www.boot.dev/certificates/806de848-ab22-457a-bd95-773ca067b602',
        },
      ],
    },
    {
      group: 'In Progress',
      items: [
        {
          name: 'Back-end Developer Path (Python & TypeScript)',
          issuer: 'Boot.dev',
          date: null,
          url: 'https://www.boot.dev/u/bradgg',
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
