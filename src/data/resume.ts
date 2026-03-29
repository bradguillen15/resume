export const resume = {
  name: "Brad Guillen",
  title: "Senior Web Developer",
  summary:
    "Senior Web Developer with 8+ years of experience specializing in React. Experienced building and maintaining large-scale applications, driving technical migrations, optimizing performance, and consolidating multiple codebases.",
  location: "Costa Rica",
  email: "bradguillen15@gmail.com",
  phone: "+506 6201-1840",
  linkedin: "linkedin.com/in/brad-guillen-89794ba8",
  github: "github.com/bradguillen15",

  experience: [
    {
      id: "kw",
      role: "Senior Web Developer",
      company: "Keller Williams Inc.",
      period: "Nov 2020 – Present",
      duration: "5 years",
      highlights: [
        "Owned and maintained 3 interconnected frontend applications for a real estate technology platform.",
        "Participated in migrating to Micro Frontend (MFE) architecture, improving deployment independence across multiple squads.",
        "Led data layer migration removing Redux, reducing boilerplate by ~40%.",
        "Reduced dashboard load time by 35%+ via lazy loading and resolving excessive re-render issues.",
        "Unified 3 repositories into a single codebase, eliminating duplication and maintenance overhead.",
      ],
      tags: ["React", "MFE", "Module Federation", "TypeScript", "Performance"],
    },
    {
      id: "advision",
      role: "Team Lead / Full Stack Developer",
      company: "Advision Development",
      period: "Nov 2017 – Nov 2020",
      duration: "3 years",
      highlights: [
        "Led frontend team of 4, mentoring junior developers through code reviews and requirement analysis.",
        "Served as Scrum Master, facilitating sprint ceremonies and stakeholder communication.",
        "Led migration from legacy React CMS to WordPress connected via REST APIs to microservices.",
        "Developed reusable components and shared logic across 3+ web applications.",
      ],
      tags: ["React", "Node.js", "WordPress", "REST APIs", "Team Lead"],
    },
    {
      id: "ff",
      role: "Software Developer",
      company: "First Factory",
      period: "May 2016 – Nov 2017",
      duration: "1.5 years",
      highlights: [
        "Built a Yeoman generator scaffolding full CRUD APIs for Java/Node.js based on user options.",
        "Developed a Google Spreadsheets add-on for auto-generating reports with JavaScript ES6.",
        "Architected a Java REST API from scratch with Hibernate, Jersey, JUnit, and Mockito.",
      ],
      tags: ["Java", "Spring Boot", "Node.js", "JavaScript ES6"],
    },
  ],

  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 80 },
        { name: "Next.js", level: 60 },
        { name: "GraphQL", level: 65 },
        { name: "MFE / Module Federation", level: 75 },
        { name: "Webpack", level: 75 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 75 },
        { name: "REST APIs", level: 90 },
        { name: "Spring Boot", level: 55 },
        { name: "Java", level: 60 },
      ],
    },
    {
      category: "Testing",
      items: [
        { name: "Jest", level: 85 },
        { name: "React Testing Library", level: 80 },
        { name: "JUnit", level: 55 },
        { name: "Mockito", level: 50 },
      ],
    },
    {
      category: "DevOps",
      items: [
        { name: "AWS", level: 60 },
        { name: "Docker", level: 65 },
        { name: "Jenkins", level: 60 },
        { name: "Harness", level: 55 },
        { name: "CI/CD", level: 75 },
        { name: "Git", level: 90 },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "PostgreSQL", level: 70 },
        { name: "MongoDB", level: 65 },
        { name: "MySQL", level: 65 },
      ],
    },
    {
      category: "Practices",
      items: [
        { name: "Agile/Scrum", level: 90 },
        { name: "SOLID", level: 85 },
        { name: "Functional Programming", level: 80 },
        { name: "Performance Optimization", level: 85 },
        { name: "AI-Assisted Dev", level: 75 },
      ],
    },
  ],

  projects: [
    {
      id: "monotienda",
      title: "MonoTienda",
      description:
        "Open-source monorepo template for modern Costa Rican e-commerce stores. Built with Turborepo, React 19, TanStack Query, and Firebase.",
      tags: ["React", "TypeScript", "Turborepo", "Firebase", "TanStack Query"],
      status: "In Progress",
      github: "#",
      live: null,
    },
    {
      id: "resume-site",
      title: "Portfolio / Resume",
      description:
        "This site! A personal portfolio and resume built from scratch with a dark blue theme, animated skill bars, and a reviews section.",
      tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
      status: "Active",
      github: "https://github.com/bradguillen15/resume",
      live: null,
    },
    {
      id: "plan-estrategico-drea",
      title: "Plan Estratégico DREA",
      description:
        "Sistema de gestión del Plan Estratégico Regional para la DREA (MEP): objetivos, planes operativos, supervisiones, roles, auditoría y exportación Excel/CSV/PDF. React 19, Firebase (Auth, Firestore, Functions).",
      tags: ["React", "TypeScript", "Firebase", "Firestore", "Tailwind CSS"],
      status: "Completed",
      github: "https://github.com/bradguillen15/plan-estrategico-drea",
      live: null,
    },
  ],

  education: [
    {
      degree: "Computer Engineering",
      school: "ULACIT",
      year: "2015",
      note: "90% completed",
    },
    {
      degree: "Middle Technician in Software Development",
      school: "Colegio Técnico Carlos Luis Fallas",
      year: "2012–2014",
      note: "",
    },
  ],

  languages: [
    { lang: "Spanish", level: "Native" },
    { lang: "English", level: "C1" },
  ],
}
