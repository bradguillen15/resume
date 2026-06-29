# Resume content — single source of truth for the generated PDF and DOCX.
#
# EDIT HERE to change resume wording, then render with:
#     python3 scripts/generate_resume.py                 # -> public/Brad Guillen - Senior Software Engineer.pdf
#     python3 scripts/export_for_drive.py              # -> exports/*.docx + exports/*.pdf + public/*.pdf
#     python3 scripts/generate_resume_docx.py          # -> exports/Brad Guillen - Senior Software Engineer.docx
#
# Markup notes (reportlab): use <b>, <i>, <a href="...">, and the entities
# &amp; (literal &), &mdash; (—), &ndash; (–), &bull; (•), &nbsp; (no-break space).
# Keep ATS-safe: no "→" arrows; em/en dashes and • are fine.
#
# HONESTY: never invent metrics. KW_USER_SCALE stays "" until a real, defensible
# Keller Williams user/agent number is confirmed; it then slots into the KW context.

CONTACT = {
    "name": "Brad Guillén García",
    "title": "Senior Software Engineer",
    "location": "Costa Rica",
    "phone_display": "+506 6201-1840",
    "phone_tel": "+50662011840",
    "email": "bradguillen15@gmail.com",
    "linkedin": "https://linkedin.com/in/brad-guillen-89794ba8",
    "github": "https://github.com/bradguillen15",
    "website": "https://bradguillen.com",
    "website_display": "bradguillen.com",
}

KW_USER_SCALE = ""  # e.g. " serving 180,000+ agents" — leave "" until confirmed
FREE_SLOT_URL = "https://free-slot-blush.vercel.app/"

SUMMARY = (
    "Senior Software Engineer with ~10 years designing and delivering production web applications across frontend "
    "and backend. Deep expertise building and maintaining large production React/TypeScript applications, with "
    "professional backend experience in Java, Spring Boot, Node.js, AWS, and modern cloud architectures. Track "
    "record leading cross-team API migrations, repository consolidation, and performance work on an enterprise "
    "real estate platform (~40 micro frontends in production). Former Team Lead for a four-person frontend squad, "
    "hands-on from design through deployment."
)

PHILOSOPHY = (
    "I specialize in <b>simplifying complex systems</b> by reducing boilerplate, isolating change behind clear "
    "abstractions, and optimizing for long-term maintainability. I favor incremental evolution over risky rewrites "
    "and use AI to accelerate development without compromising quality."
)

SKILLS = [
    ("Frontend", "React, Redux, React Query, Next.js, Micro Frontends (Module Federation), Webpack, Tailwind CSS"),
    ("Backend", "Node.js, Express, REST APIs, GraphQL, WebSockets, ASP.NET (MVC), Spring Boot, Hibernate, AWS Lambda (serverless)"),
    ("Cloud &amp; DevOps", "AWS (Lambda, API Gateway, EC2, S3, IAM, CloudFront), Firebase, Vercel, GitHub Actions, Jenkins, Harness, Spinnaker, Docker"),
    ("Testing", "Playwright, Jest, React Testing Library, Vitest, JUnit, Mockito"),
    ("Databases", "PostgreSQL, MySQL, MongoDB, Supabase"),
    ("Languages", "TypeScript, JavaScript, Java, C#, Python, SQL"),
    ("AI Engineering", "LLM integration, RAG applications, prompt &amp; context engineering, AI-assisted development (Cursor, Claude Code, Copilot, CodeRabbit)"),
]

PROJECT = {
    "name": "Free Slot",
    "url": FREE_SLOT_URL,
    "subtitle": "production full-stack time &amp; activity tracker",
    "url_display": "free-slot-blush.vercel.app",
    "tech": "React · TypeScript · Supabase · React Query · Playwright · Sentry · CI/CD on Vercel",
    "bullets": [
        "Designed and built a production app end-to-end on Supabase (managed auth and Postgres).",
        "Abstracted Supabase behind services and hooks so the UI stays vendor-agnostic and the backend remains swappable.",
        "Introduced an anonymous-first flow: activity persists in localStorage and migrates to Supabase on signup without data loss.",
        "Used React Query for declarative server state and cache consistency across the app.",
        "Shared a local-first dev environment with Playwright E2E tests for coverage against real auth and data paths.",
        "Added production observability with Sentry and CI/CD on Vercel.",
        "Created a RAG recommendation feature that feeds activity data to an LLM to suggest habits the user wants to build.",
    ],
}

EXPERIENCE = [
    {
        "title": "Keller Williams &mdash; Senior Software Engineer",
        "date": "Nov 2020 &ndash; Apr 2026 &nbsp;&bull;&nbsp; 5.5 yrs",
        "ctx": (
            "One of two frontend engineers on Keller Williams' enterprise real estate platform "
            "(~40 micro frontends in production{scale}); owned 3 production apps (user, admin, shared) and "
            "collaborated cross-team across multiple projects."
        ),
        "bullets": [
            "Designed a compatibility/transformation layer for API V1-to-V2 migration so frontend teams could migrate independently, reducing rollout risk without a coordinated multi-team release.",
            "Migrated server state from Redux to React Query, cutting state-management boilerplate ~40% and simplifying onboarding for new feature work.",
            "Diagnosed rendering bottlenecks through production debugging and introduced lazy loading, cutting dashboard load time ~35%+.",
            "Consolidated three repositories into two, reducing deployment steps, pipeline maintenance, and onboarding cost.",
            "Designed a configuration-driven banner system that let Product manage banners without engineering cycles, eliminating a recurring class of sprint work.",
            "Contributed to micro-frontend architecture and maintained CI/CD across GitHub Actions, Harness, and Spinnaker.",
        ],
    },
    {
        "title": "Advision Development &mdash; Lead Web Developer (promoted from Senior Web Developer)",
        "date": "Nov 2017 &ndash; Nov 2020 &nbsp;&bull;&nbsp; 3 yrs",
        "ctx": (
            "Promoted to Lead Web Developer (2020) after ~2 years as Senior Web Developer; led a frontend "
            "team of 4 as Scrum Master while delivering full-stack."
        ),
        "bullets": [
            "As Lead Web Developer, led a frontend team of 4 and ran sprint ceremonies as Scrum Master while staying hands-on across the stack.",
            "Set team coding standards and reusable patterns, reviewed designs and architecture, mentored developers, and interviewed and helped hire.",
            "Led an AWS Lambda integration (API Gateway, EC2, IAM, S3) that transformed and cached internal API data into a WordPress-friendly API for the CMS.",
            "Built and consumed RESTful APIs in Node.js/Express and GraphQL, coordinating with backend teams on contract definitions.",
            "Implemented real-time features with WebSockets for low-latency live updates on the frontend.",
            "Drove a custom React CMS to WordPress migration and rebuilt a contractor-abandoned critical page before deadline.",
        ],
    },
    {
        "title": "First Factory &mdash; Software Engineer",
        "date": "May 2016 &ndash; Nov 2017 &nbsp;&bull;&nbsp; 1.5 yrs",
        "ctx": "",
        "bullets": [
            "Architected a Java REST API from scratch (Hibernate, Jersey; JUnit/Mockito tests; Selenium QA automation) for a US client, with on-site collaboration and direct stakeholder reporting.",
            "Created a Yeoman generator scaffolding full-stack templates for Java (Spring Boot) or Node.js, plus a Google Sheets reporting add-on.",
            "Built a C# clinic-management application for internal workflows and contributed to a Python/Flask project.",
        ],
    },
    {
        "title": "FPT Latin America &mdash; Software Developer Intern",
        "date": "Oct 2014 &ndash; Dec 2014 &nbsp;&bull;&nbsp; 3 mos",
        "ctx": "",
        "bullets": [
            "Built a SharePoint application from scratch (JavaScript, C#, Java, SQL) to manage internal operational workflows; delivered on schedule and ran end-user training.",
        ],
    },
]

EDUCATION = [
    '<b><a href="https://www.boot.dev/u/bradgg" color="#1E4976">Boot.dev</a></b> &mdash; Back-end Developer Path (in progress): Python, TypeScript, SQL, Docker, CI/CD, AWS, RAG',
    "<b>Computer Engineering</b> &mdash; ULACIT (2015, ~90% completed)",
    "<b>Middle Technician in Software Development</b> &mdash; Colegio Técnico Carlos Luis Fallas (2012&ndash;2014)",
    "<b>Languages:</b> Spanish (Native) &nbsp;&bull;&nbsp; English (C1)",
]
