# Master Resume

## Purpose

This document is the **canonical representation of my professional experience**. It is **not** a resume—it is an internal engineering profile optimized for completeness, accuracy, and maintainability.

Every future resume should be **derived from this file**. Different job applications should select different sections depending on the target role:

- Frontend Engineer
- Senior Software Engineer
- Full Stack Engineer
- AI Software Engineer
- Platform Engineer

This file intentionally contains **significantly more information** than any single-page resume. Do not optimize this document for brevity or ATS. Tailored resumes (`frontend.md`, `fullstack.md`, `ai-engineer.md`) are views—not replacements—for this source.

**Accuracy rules:** Never fabricate metrics, dates, or achievements. Where exact numbers or calendar dates are unknown, that is stated explicitly. Prefer concrete stories from [`../stories/`](../stories/) over generic claims.

---

## Professional Summary

Senior Software Engineer with approximately **ten years** of professional experience building and maintaining web applications across frontend and backend environments.

**Strongest expertise:** React and modern frontend architecture at scale—TypeScript, state management, micro frontend platforms (~40 MFEs at KW), CI/CD ownership, and cross-team API integration.

**Broader experience:** Node.js, GraphQL, Java, Spring Boot, Hibernate, REST APIs, AWS (Lambda, EC2, S3, API Gateway, IAM), relational databases, serverless patterns, WordPress integration, and production deployment pipelines.

I am a **software engineer who spent the last several years primarily focused on frontend systems**—not a frontend-only specialist. Professional backend work at Advision and First Factory, plus ongoing full-stack personal projects, supports full-stack and platform-oriented roles.

**Recurring career theme:** reducing unnecessary complexity—simpler architectures, clear abstractions, incremental refactoring, repository consolidation, compatibility layers, and systems that remain understandable by engineers and AI-assisted tooling.

**Trust pattern:** consistently entrusted to own large features, simplify complex codebases, lead technical initiatives, mentor teammates, collaborate with Product and Design, and improve maintainability without blocking delivery.

**Target roles:** Senior Software Engineer, Senior Full Stack Engineer, AI Software Engineer.

**Contact:** Costa Rica · +506 6201-1840 · bradguillen15@gmail.com · [linkedin.com/in/brad-guillen-89794ba8](https://linkedin.com/in/brad-guillen-89794ba8) · [github.com/bradguillen15](https://github.com/bradguillen15) · [bradguillen.com](https://bradguillen.com)

**Languages:** Spanish (native) · English (C1)

→ Canonical identity: [`../context.md`](../context.md)

---

## Core Engineering Philosophy

Summarized from [`../philosophy/engineering.md`](../philosophy/engineering.md). Full principles live there; this is the resume-relevant distillation.

### Simplicity and maintainability

- Prefer **simplicity over cleverness**; maintainability over unnecessary abstractions
- **Less code is better code**—deletion and consolidation often beat new layers
- Optimize for software that remains **understandable, maintainable, and easy to evolve** months and years later

### Ownership and product thinking

- **Product before code**—understand why a feature exists before implementing
- **Ownership** includes maintainability, developer experience, usability, production quality, and future improvements—not just shipping tickets
- Suggest UX and architectural improvements when they improve the final product

### Technical debt and legacy

- Technical debt is acceptable when **intentional** and business-justified
- **Legacy systems:** understand why they evolved; improve incrementally; not every system needs a rewrite

### Abstractions and boundaries

- Abstractions only when they **remove complexity**—reduce duplication, isolate infrastructure, ease migrations
- Hide implementation details (API shapes, Supabase, third-party SDKs) behind stable internal interfaces

### Collaboration and continuous improvement

- Code reviews focus on **understandability, coupling, duplication, and long-term cost**
- Propose refactors when aligned with product priorities—not isolated cleanup projects
- Leave codebases **better than found**

### AI-assisted development

- AI **accelerates** drafting, testing, exploration, and review—it does **not** replace engineering judgment
- Every AI contribution is **reviewed, simplified, and rejected** when it adds unnecessary complexity

→ Deeper AI treatment: [`../philosophy/working-with-ai.md`](../philosophy/working-with-ai.md)

---

## Career Timeline Note

Employment dates (author-provided). Total professional experience is **approximately ten years** (May 2016–present), with an earlier short internship in 2014. Resumes may show either dates or durations—do not invent dates beyond those below.

| Order | Company | Role | Dates | Duration |
|-------|---------|------|-------|----------|
| Most recent | Keller Williams | Senior Software Engineer | Nov 2020 – Apr 2026 | ~5.5 years |
| | Advision Development | Senior Web Developer → Lead Web Developer (Team Lead) | Nov 2017 – Nov 2020 | ~3 years |
| | First Factory | Software Engineer | May 2016 – Nov 2017 | ~1.5 years |
| Earliest | FPT Latin America (formerly Intertec) | Intern | Oct 2014 – Dec 2014 | ~3 months |

---

## Professional Experience

### Keller Williams

**Role:** Senior Software Engineer  
**Dates:** Nov 2020 – Apr 2026 (~5.5 years)  
**Source:** [`../experience/keller-williams.md`](../experience/keller-williams.md)

#### Context

Grew from frontend engineer into senior software engineer with significant ownership over critical parts of a **large production React application**. Title was frontend-focused; work regularly extended to architecture, backend API integration, CI/CD, cross-team migrations, product planning, and production support. Worked on a small cross-functional squad (~6–8: 2–3 frontend incl. me, 2 backend, 2–3 QA, PO, designer, EM); as **one of only two frontend engineers** for most of my tenure, I owned large portions of the frontend. The product was a **micro frontend platform of ~40 micro frontends**; I owned and maintained **3 of them (user, admin, shared)** (later consolidated from 3 repos to 2) and collaborated cross-team on multiple projects. Senior **individual-contributor** role with strong influence (unprompted initiatives, cross-team migrations, mentoring on owned systems)—**not** a formal lead (formal team leadership was earlier, as Lead Web Developer at Advision). **User/traffic scale not documented**—do not invent (a real number may be added later if obtained).

#### Technologies

React, TypeScript, Redux, React Query, REST APIs, AWS, micro frontends, GitHub Actions, Harness, Spinnaker, testing (emphasis varied by area)

#### Responsibilities

- Built and maintained large React/TypeScript applications
- Owned critical product features end-to-end (design collaboration through production support)
- Collaborated daily with Product Managers, Designers, Backend Engineers, QA
- Participated in architectural decisions including micro frontend evolution
- Maintained production quality for owned features
- Supported and improved CI/CD pipelines
- Code review with maintainability focus
- Mentored teammates on owned systems
- Improved codebase maintainability—refactoring, consolidation, removing repetitive patterns

#### Major accomplishments

| Accomplishment | Summary | Story |
|----------------|---------|-------|
| **Repository consolidation** | Led deprecation of entire repository; consolidated three repos → two; reduced deployment and maintenance overhead | [`../stories/repository-deprecation.md`](../stories/repository-deprecation.md) |
| **API V1 → V2 migration** | Led frontend migration; introduced transformation/compatibility layer isolating V2 response changes from application consumers | [`../stories/api-migration-v1-v2.md`](../stories/api-migration-v1-v2.md) |
| **Configurable banner system** | Proposed and built configuration-driven banners; eliminated repetitive sprint work; used ~3 years then deprecated cleanly | [`../stories/configurable-banner-system.md`](../stories/configurable-banner-system.md) |
| **Modal vs. page decision** | Raised architectural concerns for cross-org search; team evolved to page-based solution as nav requirements emerged | [`../stories/modal-vs-page-decision.md`](../stories/modal-vs-page-decision.md) |
| **Micro frontend modernization** | Participated in migration toward micro frontend architecture for team independence and maintainability | (overview in experience doc) |
| **CI/CD ownership** | Maintained deployment pipelines across GitHub Actions, Harness, Spinnaker | (overview in experience doc) |
| **Dashboard performance** | Diagnosed frontend rendering bottleneck (not backend) early in tenure; lazy loading to resolve excessive re-renders; **~35%+ load-time reduction** | [`../stories/dashboard-performance.md`](../stories/dashboard-performance.md) |
| **Data layer migration (Redux removal)** | Led migration off Redux to a more maintainable, performant approach; **~40% boilerplate reduction** | [`../stories/redux-removal.md`](../stories/redux-removal.md) |

**Metrics:** Not documented for any Keller Williams accomplishment—do not invent percentages, time saved, or deployment counts.

#### Architecture contributions

- Repository consolidation aligned with product URL migration—technical improvement piggybacked on delivery
- API compatibility layer—stable internal model despite external contract redesign
- Micro frontend patterns—clearer team boundaries, reduced monolith bottleneck
- Configurable systems over one-off implementations

#### Backend and integration work

- Cross-team **REST API** migrations and contract discussions
- Transformation layers at API boundaries—not backend service ownership at Keller Williams

#### Cloud and CI/CD

- **AWS** as deployment/integration context for frontend applications
- **GitHub Actions**, **Harness**, **Spinnaker**—pipeline troubleshooting, release promotion, production readiness

#### Leadership examples

- Informal leadership through **feature ownership**—teammates came with questions, bugs, enhancements
- **Mentoring** on systems I designed or owned deeply
- **Cross-team collaboration** during API migrations
- Not a formal engineering manager

#### Working style highlights

- Beyond tickets: UX suggestions, architectural proposals, refactoring aligned with product work
- De facto owner of features built—long-term quality responsibility

---

### Advision Development

**Role:** Senior Web Developer (Nov 2017 – Dec 2019), promoted to **Lead Web Developer** / Team Lead (Jan – Nov 2020)  
**Dates:** Nov 2017 – Nov 2020 (~3 years)  
**Source:** [`../experience/advision.md`](../experience/advision.md)

#### Context

Foundation of engineering career. Joined as **Senior Web Developer** (full-stack: React, Node.js/Express, REST/GraphQL, WebSockets); promoted to **Lead Web Developer** in 2020, where I led a **frontend team of 4** with **Scrum Master** duties. Remained hands-on across frontend, backend, infrastructure, and product on a small team with **end-to-end feature ownership**. **Honest scope:** the Team Lead/Scrum Master responsibilities belong to the final ~11 months (Lead Web Developer), not the full three years.

#### Technologies

Node.js, REST APIs, GraphQL, React, JavaScript, AWS (Lambda, EC2, S3, API Gateway, IAM), WordPress, Git, CI/CD

#### Responsibilities

- Built backend services in Node.js
- Designed and implemented REST APIs and GraphQL endpoints
- Built React frontends
- Deployed to AWS; configured cloud resources
- Collaborated with CTO on architecture
- Owned features from idea through production
- Mentored junior developers

#### Major accomplishments

| Accomplishment | Summary | Story |
|----------------|---------|-------|
| **Lambda ↔ WordPress integration** | Led Lambda implementation: fetch internal API → transform → cache → WordPress-friendly API; CTO defined architecture, I owned execution | [`../stories/lambda-wordpress-integration.md`](../stories/lambda-wordpress-integration.md) |
| **React CMS → WordPress migration** | Frontend integration for migrating custom React CMS to WordPress; build-vs-buy pragmatism | [`../stories/react-cms-to-wordpress.md`](../stories/react-cms-to-wordpress.md) |
| **Contractor rescue** | Inherited incomplete React page; evaluated partial work; clean rebuild; delivered before deadline | [`../stories/contractor-rescue.md`](../stories/contractor-rescue.md) |
| **Backend development** | Production Node.js, REST, GraphQL—earlier career; architectural direction often from CTO | (overview in experience doc) |

**Metrics:** Not documented—do not invent latency improvements or migration timelines.

#### Architecture contributions

- Service boundaries between internal APIs, Lambda, and WordPress
- Data transformation layers for consumer-specific payloads
- Build-vs-buy: WordPress over custom CMS

#### Backend work

- **Node.js** services, **REST APIs**, **GraphQL**
- Data persistence and business logic on the Node.js backend
- Not the most senior backend engineer on team—**production backend work**, not tutorial level
- (Java/Spring Boot/Hibernate experience is from **First Factory**, not Advision)

#### Cloud work

- **AWS Lambda**, **API Gateway**, **IAM**, **EC2**, **S3**
- Scheduled sync (not real-time) for WordPress integration—pragmatic cost/complexity trade-off
- Fine-grained AWS config details **no longer remembered**—pattern documented in story files

#### Leadership and mentoring

- Mentored junior developers—architecture, pairing, code review with explanation
- Led Lambda **implementation** under CTO direction
- Full-stack context switching weekly—frontend, backend, infra, production support

---

### First Factory

**Role:** Software Engineer  
**Dates:** May 2016 – Nov 2017 (~1.5 years)  
**Source:** [`../experience/first-factory.md`](../experience/first-factory.md)

#### Context

**First professional role.** Backend-focused team within larger enterprise systems; owned concrete deliverables end-to-end (a REST API, a code generator, a reporting tool). Established foundations: layered architecture, API design, Git workflow, code review, maintainable code in existing codebases.

#### Technologies

Java (incl. Java 8), Spring Boot, Hibernate, Jersey, REST APIs, JUnit, Mockito, Selenium, Node.js, JavaScript (ES6), Webpack, Yeoman, Google Apps Script, JSP, jQuery, Maven, Git, relational databases

#### Key projects

- **Java REST API** architected from scratch (Hibernate, Jersey; JUnit/Mockito tests; Selenium QA automation)
- **Yeoman generator** scaffolding full CRUD APIs for Java (Spring Boot) or Node.js from user-selected options
- **Google Sheets add-on** auto-generating reports (JavaScript ES6, Webpack, Google Apps Script)
- **Enterprise application support** (Java 8, JSP, Spring, jQuery)

#### Backend and growth

- Introduction to **enterprise applications** and professional **Git**, **code review**, **estimates**, **team workflow**
- Owned the design/implementation of the deliverables above; architectural direction for larger systems came from senior engineers
- **Foundation** for later full-stack work at Advision

#### Stories

No dedicated story files—documented at experience overview depth only.

---

### FPT Latin America (formerly Intertec)

**Role:** Software Developer Internship  
**Dates:** Oct 2014 – Dec 2014 (~3 months) · Aurora, Costa Rica  
**Source:** [`../experience/fpt-latin-america.md`](../experience/fpt-latin-america.md)

Earliest professional exposure—a short pre-career internship. Built a SharePoint application from scratch using JavaScript, C#, and SQL; delivered on schedule, presented progress to the Operations Manager, and ran end-user training.

**Resume guidance:** Typically **omit** from senior one-page resumes. Include only when an application specifically values early experience or a complete timeline. Adds C# and SharePoint to the early technology history—not current focus.

---

## Technical Skills

Organized by category. **Proficiency depth varies**—recent professional depth is strongest in frontend/React; backend and cloud depth is strongest from Advision and personal projects. Do not imply expert-level in every listed technology unless role tailoring warrants it.

### Frontend

| Skill | Context |
|-------|---------|
| React | Professional (KW, Advision); personal projects (React 19) |
| TypeScript | Professional (KW); personal projects |
| JavaScript | Professional (Advision, early career) |
| HTML, CSS | Professional throughout |
| Tailwind CSS | Portfolio project; professional exposure |
| Next.js | Listed for resume generation—confirm depth before emphasizing |
| Redux | Professional (Keller Williams) |
| React Query | Professional (Keller Williams) |
| GraphQL (consumer) | Professional (Advision) |
| Micro frontends | Professional participation (Keller Williams) |
| Framer Motion | Portfolio project |

### Backend

| Skill | Context |
|-------|---------|
| Node.js | Professional (Advision); active learning |
| Express | Personal/learning—confirm before claiming production depth |
| REST APIs | Professional (all roles) |
| GraphQL | Professional (Advision) |
| Java | Professional (First Factory) |
| Spring Boot | Professional (First Factory) |
| Hibernate | Professional (First Factory) |
| Maven | Professional (First Factory) |

### Databases

| Skill | Context |
|-------|---------|
| SQL | Professional (relational databases) |
| PostgreSQL | Supabase (Free Slot personal project) |
| Supabase | Production personal project (Free Slot) |
| Relational databases / Hibernate ORM | Professional (First Factory) |

### Cloud

| Skill | Context |
|-------|---------|
| AWS Lambda | Professional (Advision) |
| EC2, IAM, S3, API Gateway | Professional (Advision) |
| CloudFront | Listed—confirm production usage before emphasizing |
| Serverless concepts | Professional (Lambda integration) |
| Firebase (Hosting, Firestore, Cloud Functions) | Portfolio project |

### DevOps / CI/CD

| Skill | Context |
|-------|---------|
| GitHub Actions | Professional (KW); portfolio project |
| Spinnaker | Professional (Keller Williams) |
| Harness | Professional (Keller Williams) |
| CI/CD | Professional (all roles); personal projects |
| Git | Professional throughout |

### Testing

| Skill | Context |
|-------|---------|
| Vitest | Portfolio repository |
| Playwright | Free Slot E2E (per project documentation) |
| Unit, integration, E2E testing | Philosophy and projects—professional emphasis varied by team |

### AI / AI-assisted engineering

| Skill | Context |
|-------|---------|
| Cursor | Current workflow |
| Claude Code, ChatGPT, GitHub Copilot | Current workflow |
| CodeRabbit | Current workflow |
| Prompt engineering | Active practice |
| AI-assisted development | Professional philosophy + personal projects |
| MCPs (Model Context Protocol) | Active exploration |
| Context engineering | Active practice—structured docs for AI consumption (career repo) |

### Development tools

Git, GitHub, Vite, Webpack, Yeoman, Docker, Linux, Jenkins, Google Apps Script

### Additional / earlier-career technologies

Module Federation, Jest, React Testing Library, JUnit, Mockito, Selenium, Jersey, MongoDB, MySQL, JSP, jQuery, C#, ASP.NET (MVC), SharePoint (legacy/early-career, ~2014–2017), WebSockets, Scrum / Scrum Master, SEO. List per role relevance—do not imply current depth in legacy items.

---

## Education

| Credential | Institution | Notes |
|------------|-------------|-------|
| **Computer Engineering** | ULACIT | 2015 · ~90% completed |
| **Middle Technician in Software Development** | Colegio Técnico Carlos Luis Fallas | 2012–2014 |

Computer Engineering is **not** marked complete—state "90% completed" or omit completion status; do not claim a conferred degree.

---

## Languages

- **Spanish** — Native
- **English** — C1 (advanced professional working proficiency)

---

## Major Engineering Achievements

Cross-employer summary. Each links to canonical story or project documentation.

### Repository consolidation (Keller Williams)

Deprecated entire repository; three → two; aligned with URL migration; reduced deployment and maintenance complexity. **Strongest simplification story.**

→ [`../stories/repository-deprecation.md`](../stories/repository-deprecation.md)

### Micro frontend migration (Keller Williams)

Participated in evolution toward micro frontend architecture for team independence and maintainability—not a solo initiative.

→ [`../experience/keller-williams.md`](../experience/keller-williams.md)

### API compatibility layer (Keller Williams)

V1 → V2 cross-team migration; transformation layer isolated backend contract changes from frontend consumers.

→ [`../stories/api-migration-v1-v2.md`](../stories/api-migration-v1-v2.md)

### Configurable banner system (Keller Williams)

Configuration-driven banners replaced one-off sprint work; ~3 years in use; deprecated cleanly.

→ [`../stories/configurable-banner-system.md`](../stories/configurable-banner-system.md)

### Data layer migration — Redux removal (Keller Williams)

Led migration of the data layer off Redux to a more maintainable, performant approach; **~40% boilerplate reduction**.

→ [`../stories/redux-removal.md`](../stories/redux-removal.md)

### Modal vs. page architecture (Keller Williams)

Cross-org search feature evolved from modal to page as navigation requirements clarified; collaboration with Product/Design.

→ [`../stories/modal-vs-page-decision.md`](../stories/modal-vs-page-decision.md)

### Lambda integration (Advision)

AWS Lambda transformed internal API data for WordPress; scheduled sync; reduced coupling.

→ [`../stories/lambda-wordpress-integration.md`](../stories/lambda-wordpress-integration.md)

### CMS migration (Advision)

Custom React CMS → WordPress; frontend adaptation; build-vs-buy judgment.

→ [`../stories/react-cms-to-wordpress.md`](../stories/react-cms-to-wordpress.md)

### Dashboard performance (Keller Williams)

Frontend rendering diagnosis and fix; investigation over premature optimization.

→ [`../stories/dashboard-performance.md`](../stories/dashboard-performance.md)

### Contractor rescue (Advision)

Rebuild vs. continue decision; delivered under deadline.

→ [`../stories/contractor-rescue.md`](../stories/contractor-rescue.md)

### Backend architecture (First Factory, Advision)

Java/Spring Boot/Hibernate/REST in production; architected a Java REST API from scratch and built a CRUD-API generator at First Factory; Node.js/GraphQL at Advision.

→ [`../experience/first-factory.md`](../experience/first-factory.md), [`../experience/advision.md`](../experience/advision.md)

### Free Slot — Supabase production project (Personal)

Full-stack React 19 + Supabase; local dev environment; E2E testing; Supabase abstraction; AI-assisted workflow; production deployment.

→ [`../projects/free-slot.md`](../projects/free-slot.md)

### Portfolio — career knowledge base (Personal)

React 19 portfolio + Firebase backend + evolving `career/` documentation layer; AI-native career repository vision.

→ [`../projects/portfolio.md`](../projects/portfolio.md)

---

## Leadership

Summarized across roles—not formal people management.

| Theme | Examples |
|-------|----------|
| **Team leadership** | Advision (as **Lead Web Developer**, 2020): **Team Lead of a frontend team of 4** + **Scrum Master** (sprint ceremonies, stakeholder communication) |
| **Feature ownership** | KW: de facto owner of critical features; Advision: end-to-end delivery |
| **Mentoring** | KW: teammates on owned systems; Advision: junior developers—pairing, architecture, code review |
| **Cross-team collaboration** | KW: external backend team API migrations; Advision: CTO collaboration |
| **Product partnership** | UX suggestions, scope pushback, modal→page evolution, banner system proposal |
| **Design partnership** | Implementation trade-offs, navigation requirements, approved-design delivery (contractor rescue) |
| **Technical implementation leadership** | Lambda implementation (Advision); repository consolidation, API migration (KW) |
| **Architecture discussions** | Micro frontends, API boundaries, repository structure, modal vs. page |
| **Code reviews** | Maintainability, simplicity, coupling, duplication—over cleverness |

---

## Backend Experience

**Purpose:** Support Full Stack and platform-oriented resume generation. Recent **professional title emphasis** was frontend; **professional backend work** at Advision and First Factory is documented and real.

### Professional backend (documented)

- **Java**, **Spring Boot**, **Hibernate**, **REST APIs**, **Maven**
- **Node.js**, **GraphQL**
- **AWS Lambda**—implementation leadership
- **Data transformation** at service boundaries (Lambda, API migration pattern)
- **API integrations**—internal services, WordPress, cross-team REST
- **Database access** via Hibernate on relational databases
- **Serverless** scheduled sync patterns
- **Cloud services**—Lambda, API Gateway, IAM, EC2, S3

### Honest scope notes

- First Factory: early-career; owned a REST API, a CRUD-API generator, and a reporting tool—architectural direction for larger systems from senior engineers
- Advision: full-stack; CTO often set architecture; production backend nonetheless
- Keller Williams: integration and transformation layers—not primary backend service author

### Continued backend relevance

- Personal projects: **Supabase**, full-stack **Free Slot**
- Active study: Node.js, Python, cloud architecture, testing ([`../context.md`](../context.md), [`../learning/2026.md`](../learning/2026.md))

**Frame for resumes:** Software Engineer with **deep frontend expertise** and **practical professional backend experience**—not backend-only, not frontend-only.

---

## AI Engineering

**Purpose:** Support AI Software Engineer resume generation. **Actively pursuing** this direction through production projects and continuous learning.

### Current practice

- **AI-assisted software development**—drafting, refactoring, test generation, architecture exploration, code review assistance
- **Reviewing and simplifying AI-generated code**—reject over-complexity; maintainability over speed
- **Prompt engineering** and **context engineering**—structured repositories (this `career/` tree) as AI-readable source of truth
- **Tools:** Cursor, Claude Code, ChatGPT, GitHub Copilot, CodeRabbit
- **MCPs**—Model Context Protocol servers for documentation and tooling integration
- **Testing acceleration**—AI makes E2E and unit test authoring more practical (Free Slot, portfolio)
- **Unfamiliar codebase onboarding**—AI as exploration accelerator under human verification
- **Architecture discussions** with AI as sparring partner—not decision maker

### Philosophy

AI **accelerates**; engineering **judgment** decides what ships. Expect more time reviewing architecture and generated code than typing every line manually.

→ [`../context.md`](../context.md), [`../philosophy/engineering.md`](../philosophy/engineering.md), [`../philosophy/working-with-ai.md`](../philosophy/working-with-ai.md)

### Evidence projects

- **Free Slot**—AI in workflow with manual review; rejected over-complex AI implementation example documented
- **Portfolio / career repository**—AI-native documentation; resume generation from structured markdown

### Career intent

**Pursuing AI Software Engineer positions** while expanding capability through production projects—not claiming ML model training or data science depth unless separately documented.

---

## Personal Projects

### Free Slot

**Source:** [`../projects/free-slot.md`](../projects/free-slot.md)

| Aspect | Detail |
|--------|--------|
| **Purpose** | Production personal app—activity logging via drag-and-drop schedule visualization; real problem, not demo |
| **Architecture** | React 19 + TypeScript frontend; Supabase (auth, database); services/hooks hide Supabase from UI |
| **Testing** | E2E against local Supabase; dev and test share same stack |
| **Deployment** | Production deployment; CI/CD; always releasable |
| **DX highlight** | Local Supabase—offline dev without production credentials |
| **AI** | AI-assisted development with critical review and simplification |
| **Demonstrates** | Full-stack ownership, architecture, DX, testing, AI workflow, current engineering level |

**Not implemented yet (documented as future-ready):** Supabase Storage, real-time features.

### Personal Portfolio (bradguillen.com)

**Source:** [`../projects/portfolio.md`](../projects/portfolio.md)

| Aspect | Detail |
|--------|--------|
| **Purpose** | Evolving from resume site to **career knowledge base** + presentation layer |
| **Presentation** | React 19, TypeScript, Vite, Tailwind, shadcn/ui, Framer Motion |
| **Backend** | Firebase Hosting, Firestore (reviews), Cloud Functions (contact, rate limiting) |
| **CI/CD** | GitHub Actions |
| **Knowledge layer** | `career/` markdown tree—this master resume lives there |
| **Vision** | Single source of truth → generated resumes, LinkedIn, interviews; migration from `src/data/` in progress |
| **Demonstrates** | Documentation-driven engineering, AI-native structure, production site ownership |

---

## Career Themes

Recurring patterns across employers and projects—use for summary paragraphs and interview narrative consistency.

1. **Removing unnecessary complexity** — repository deprecation, deletion over addition, CMS build-vs-buy
2. **Improving maintainability** — compatibility layers, configurable systems, Supabase abstraction
3. **Building abstractions that remove work** — banners as data, API mappers, hooks/services boundaries
4. **Strong ownership** — features, pipelines, recoveries, personal products end-to-end
5. **Cross-functional collaboration** — Product, Design, Backend, QA, external teams
6. **Pragmatic engineering** — scheduled sync vs. real-time, rewrite vs. repair, WordPress vs. custom CMS
7. **Incremental modernization** — micro frontends, repo consolidation with product migration, CMS migration
8. **Balancing business value with technical quality** — intentional debt, aligned refactors, delivery under deadlines
9. **AI-assisted development with judgment** — accelerate without abdicating review and simplification
10. **Product thinking** — product before code; modal vs. page; banner workflow observation
11. **Engineering judgment over framework identity** — strongest asset is decision-making, not React specifically

---

## Resume Generation Notes

Instructions for AI assistants and future resume generators using this file.

### Always

- Derive tailored resumes by **selecting and compressing** sections—never invent content not present here or in linked story files
- **Never fabricate metrics** (percentages, dollar impact, team sizes, latency ms, user counts)
- Prefer **concrete engineering stories** with honest scope over keyword stuffing
- Frame as **Software Engineer** with deep frontend expertise—not "Frontend Engineer only"
- State **unknown dates/metrics** explicitly rather than estimating
- Link mentally to story files for STAR interview depth when bullets need expansion

### Role-specific emphasis

| Target role | Emphasize |
|-------------|-----------|
| **Frontend Engineer** | React/TS scale at KW, performance, banners, modal/page, micro frontends, Free Slot UI/drag-and-drop |
| **Senior Software Engineer** | Ownership, architecture, simplification stories, cross-team work, mentoring, CI/CD |
| **Full Stack Engineer** | Advision full-stack, First Factory backend, Lambda, Supabase/Free Slot, API layers, backend section |
| **AI Software Engineer** | AI workflow, context engineering, career repo, Free Slot AI practices, CodeRabbit/MCPs, judgment theme |
| **Platform Engineer** | CI/CD (GH Actions, Harness, Spinnaker), AWS Lambda/integration, repo consolidation, DX (local Supabase) |

### Avoid

- Describing as **frontend-only** despite recent specialization
- Inflating **micro frontend** or **Lambda** into solo initiatives when participation/implementation under CTO direction is accurate
- Inventing **Exact employment dates**
- ATS optimization at the expense of **accuracy** in source documents

### Output files

Tailored views (populate from this master file):

- [`frontend.md`](frontend.md)
- [`fullstack.md`](fullstack.md)
- [`ai-engineer.md`](ai-engineer.md)
- [`bullet-bank.md`](bullet-bank.md)

---

## Supporting Documents

Complete index of the `career/` repository. **Leaf documents are authoritative** for their domain; this master resume synthesizes them.

### Root

| Document | Purpose |
|----------|---------|
| [`../README.md`](../README.md) | Career repository navigation and principles |
| [`../context.md`](../context.md) | Canonical engineer profile—read first |

### Experience

| Document | Purpose |
|----------|---------|
| [`../experience/keller-williams.md`](../experience/keller-williams.md) | Keller Williams employment |
| [`../experience/advision.md`](../experience/advision.md) | Advision employment |
| [`../experience/first-factory.md`](../experience/first-factory.md) | First Factory employment |
| [`../experience/fpt-latin-america.md`](../experience/fpt-latin-america.md) | FPT Latin America internship (2014)—usually omitted from resumes |

### Projects

| Document | Purpose |
|----------|---------|
| [`../projects/free-slot.md`](../projects/free-slot.md) | Free Slot technical documentation |
| [`../projects/portfolio.md`](../projects/portfolio.md) | Portfolio / career knowledge base |

### Stories

| Document | Purpose |
|----------|---------|
| [`../stories/repository-deprecation.md`](../stories/repository-deprecation.md) | Repository consolidation |
| [`../stories/api-migration-v1-v2.md`](../stories/api-migration-v1-v2.md) | API V1 → V2 compatibility layer |
| [`../stories/configurable-banner-system.md`](../stories/configurable-banner-system.md) | Configurable banner system |
| [`../stories/modal-vs-page-decision.md`](../stories/modal-vs-page-decision.md) | Modal vs. dedicated page |
| [`../stories/lambda-wordpress-integration.md`](../stories/lambda-wordpress-integration.md) | Lambda ↔ WordPress integration |
| [`../stories/react-cms-to-wordpress.md`](../stories/react-cms-to-wordpress.md) | React CMS → WordPress migration |
| [`../stories/dashboard-performance.md`](../stories/dashboard-performance.md) | Dashboard rendering optimization |
| [`../stories/contractor-rescue.md`](../stories/contractor-rescue.md) | Contractor handoff and rebuild |

### Story redirects (legacy filenames)

| Document | Points to |
|----------|-----------|
| [`../stories/api-migration.md`](../stories/api-migration.md) | `api-migration-v1-v2.md` |
| [`../stories/configurable-banners.md`](../stories/configurable-banners.md) | `configurable-banner-system.md` |
| [`../stories/modal-vs-page.md`](../stories/modal-vs-page.md) | `modal-vs-page-decision.md` |
| [`../stories/lambda-wordpress.md`](../stories/lambda-wordpress.md) | `lambda-wordpress-integration.md` |
| [`../stories/cms-migration.md`](../stories/cms-migration.md) | `react-cms-to-wordpress.md` |

### Philosophy

| Document | Purpose |
|----------|---------|
| [`../philosophy/engineering.md`](../philosophy/engineering.md) | Engineering decision philosophy |
| [`../philosophy/architecture.md`](../philosophy/architecture.md) | Architecture philosophy (scaffold) |
| [`../philosophy/working-with-ai.md`](../philosophy/working-with-ai.md) | AI-assisted engineering philosophy |

### Resume views

| Document | Purpose |
|----------|---------|
| [`master-resume.md`](master-resume.md) | **This file**—canonical complete profile |
| [`bullet-bank.md`](bullet-bank.md) | Curated bullets with source links |
| [`frontend.md`](frontend.md) | Frontend-tailored resume view |
| [`fullstack.md`](fullstack.md) | Full-stack-tailored resume view |
| [`ai-engineer.md`](ai-engineer.md) | AI engineer-tailored resume view |

### Interviews

| Document | Purpose |
|----------|---------|
| [`../interviews/behavioral.md`](../interviews/behavioral.md) | Behavioral interview prep |
| [`../interviews/technical.md`](../interviews/technical.md) | Technical interview prep |
| [`../interviews/leadership.md`](../interviews/leadership.md) | Leadership interview prep (derived) |
| [`../leadership.md`](../leadership.md) | Canonical leadership style and evidence |

### Learning, recommendations, templates

| Document | Purpose |
|----------|---------|
| [`../learning/2026.md`](../learning/2026.md) | 2026 learning goals |
| [`../recommendations/linkedin.md`](../recommendations/linkedin.md) | LinkedIn content pointers |
| [`../templates/experience-template.md`](../templates/experience-template.md) | New employer template |
| [`../templates/project-template.md`](../templates/project-template.md) | New project template |
| [`../templates/story-template.md`](../templates/story-template.md) | New story template |

---

## Maintenance

When employment, projects, or stories change:

1. Update the **leaf document** first (`experience/`, `projects/`, `stories/`)
2. Update **this master resume** to reflect the synthesis
3. Regenerate **tailored resume views** from updated sections
4. Do not fork facts into multiple places without updating the canonical source

This file is expected to grow. Completeness here prevents duplication and drift across every generated resume.
