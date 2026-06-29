# Resume content — single source of truth for the generated PDF.
#
# EDIT HERE to change resume wording, then render with:
#     python3 scripts/generate_resume.py            # -> public/resume.pdf
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

KW_USER_SCALE = ""  # e.g. " (used by N+ real-estate agents)" — leave "" until confirmed
FREE_SLOT_URL = "https://free-slot-blush.vercel.app/"

SUMMARY = (
    "Senior Software Engineer with ~10 years designing and delivering production web applications across frontend "
    "and backend. Deep React and TypeScript expertise at scale, with professional backend experience in Java, "
    "Spring Boot, Node.js, AWS, and modern cloud architectures. Led cross-team migrations and performance "
    "initiatives, and served as Team Lead of a frontend team of 4."
)

# Brand statement — rendered on page 1, right after the summary.
PHILOSOPHY = (
    "I specialize in <b>simplifying complex systems</b> — reducing complexity, removing boilerplate, and isolating "
    "change behind clear abstractions and boundaries. I optimize for long-term maintainability over short-term "
    "shortcuts, treat ownership as lifecycle responsibility (design through production and evolution), and prefer "
    "incremental improvement over risky rewrites. I use AI to accelerate the work without sacrificing review, "
    "simplicity, or quality."
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
    "tech": "React 19 · TypeScript · Supabase · React Query · Playwright · Sentry · CI/CD on Vercel",
    "bullets": [
        "Solo-designed and built a production app end-to-end: chose Supabase for managed auth and Postgres, then abstracted it behind services and hooks so the UI stays vendor-agnostic and the backend remains swappable.",
        "Built an anonymous-first experience — anonymous activity persists in local storage and migrates into Supabase on signup — removing onboarding friction without data loss.",
        "Used React Query for server state to keep data fetching declarative and cache-consistent; a local-first dev environment is shared with Playwright E2E tests for honest coverage against real auth and data paths.",
        "Added production observability with Sentry and a CI/CD pipeline on Vercel that keeps main releasable.",
        "Built a RAG-based recommendation feature that uses the user's own activity data (through an LLM) to suggest habits they want to build, such as reading or meditating.",
    ],
}

EXPERIENCE = [
    {
        "title": "Keller Williams &mdash; Senior Software Engineer",
        "date": "Nov 2020 &ndash; Apr 2026 &nbsp;&bull;&nbsp; 5.5 yrs",
        # {scale} is replaced with KW_USER_SCALE (empty by default — no invented number)
        "ctx": ("One of two frontend engineers on a large ~40 micro-frontend platform{scale}; owned and maintained "
                "3 of those micro frontends (user, admin, shared) and collaborated cross-team across multiple projects."),
        "bullets": [
            "Led an API V1-to-V2 migration by designing a compatibility/transformation layer that let frontend teams migrate independently — reducing rollout risk and avoiding a coordinated multi-team release.",
            "Led a data-layer migration off Redux to React Query for server state, cutting state-management boilerplate ~40% and making feature code clearer and faster to onboard.",
            "Diagnosed frontend rendering bottlenecks through production debugging and redesigned the loading strategy with lazy loading, cutting dashboard load time ~35%+ for production users.",
            "Consolidated three repositories into two, reducing deployment steps, pipeline maintenance, and onboarding cost — part of a consistent pattern of removing complexity rather than managing it.",
            "Designed a configuration-driven banner system that let Product manage banners without engineering cycles, eliminating a recurring class of sprint work.",
            "Maintained CI/CD across GitHub Actions, Harness, and Spinnaker, and contributed to the platform's micro-frontend architecture for independent team delivery.",
        ],
    },
    {
        "title": "Advision Development &mdash; Lead Web Developer (promoted from Senior Web Developer)",
        "date": "Nov 2017 &ndash; Nov 2020 &nbsp;&bull;&nbsp; 3 yrs",
        "ctx": ("Promoted to Lead Web Developer (2020) after ~2 years as Senior Web Developer; led a frontend "
                "team of 4 as Scrum Master while delivering full-stack."),
        "bullets": [
            "As Lead Web Developer, led a frontend team of 4 and ran sprint ceremonies as Scrum Master — delegating, reviewing code, mentoring juniors, and owning delivery while staying hands-on across the stack.",
            "Set team coding standards and reusable patterns, reviewed designs and architecture, mentored developers, and interviewed and helped hire.",
            "Led implementation of an AWS Lambda integration (API Gateway, EC2, IAM, S3) that transformed and cached internal API data into a WordPress-friendly API — so the CMS served dynamic content without calling internal services directly or duplicating backend logic.",
            "Built and consumed RESTful APIs in Node.js and Express and used GraphQL to improve data-fetching efficiency, coordinating with backend teams on contract definitions.",
            "Implemented real-time features with WebSockets for low-latency live updates on the frontend.",
            "Drove a custom React CMS to WordPress migration (build-vs-buy), and rescued a contractor-abandoned critical page, rebuilding it cleanly and shipping before deadline.",
        ],
    },
    {
        "title": "First Factory &mdash; Software Engineer",
        "date": "May 2016 &ndash; Nov 2017 &nbsp;&bull;&nbsp; 1.5 yrs",
        "ctx": "",
        "bullets": [
            "Architected a Java REST API from scratch (Hibernate, Jersey; JUnit/Mockito tests; Selenium QA automation) for a US client, with on-site collaboration and direct stakeholder reporting.",
            "Built a Yeoman generator that scaffolds full-stack project templates for Java (Spring Boot) or Node.js — reducing setup time and boilerplate — plus a Google Sheets reporting add-on; supported enterprise apps (Java 8, JSP, Spring, jQuery).",
            "Built a C# clinic-management application for internal workflows and contributed to a Python/Flask project — early breadth across multiple stacks.",
        ],
    },
    {
        "title": "FPT Latin America &mdash; Software Developer Intern",
        "date": "Oct 2014 &ndash; Dec 2014 &nbsp;&bull;&nbsp; 3 mos",
        "ctx": "",
        "bullets": [
            "Built a SharePoint application from scratch (JavaScript, C#, Java, SQL) to manage internal operational workflows — delivered on schedule, presented progress to the Operations Manager, and ran end-user training.",
        ],
    },
]

EDUCATION = [
    '<b><a href="https://www.boot.dev/u/bradgg" color="#2E5C8A">Boot.dev</a></b> — Back-end Developer Path (in progress): Python, TypeScript, SQL, Docker, CI/CD, AWS, RAG',
    "<b>Computer Engineering</b> — ULACIT (2015, ~90% completed)",
    "<b>Middle Technician in Software Development</b> — Colegio Técnico Carlos Luis Fallas (2012–2014)",
    "<b>Languages:</b> Spanish (Native) &nbsp;&bull;&nbsp; English (C1)",
]
