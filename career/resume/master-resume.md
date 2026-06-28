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

Senior Software Engineer with approximately **nine years** of professional experience building and maintaining web applications across frontend and backend environments.

**Strongest expertise:** React and modern frontend architecture at scale—TypeScript, state management, micro frontend evolution, CI/CD ownership, and cross-team API integration.

**Broader experience:** Node.js, GraphQL, Java, Spring Boot, Hibernate, REST APIs, AWS (Lambda, EC2, S3, API Gateway, IAM), relational databases, serverless patterns, WordPress integration, and production deployment pipelines.

I am a **software engineer who spent the last several years primarily focused on frontend systems**—not a frontend-only specialist. Professional backend work at Advision and First Factory, plus ongoing full-stack personal projects, supports full-stack and platform-oriented roles.

**Recurring career theme:** reducing unnecessary complexity—simpler architectures, clear abstractions, incremental refactoring, repository consolidation, compatibility layers, and systems that remain understandable by engineers and AI-assisted tooling.

**Trust pattern:** consistently entrusted to own large features, simplify complex codebases, lead technical initiatives, mentor teammates, collaborate with Product and Design, and improve maintainability without blocking delivery.

**Target roles:** Senior Software Engineer, Senior Full Stack Engineer, AI Software Engineer.

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

Exact **start and end dates** for each employer are **not recorded** in this repository. Durations below are **approximate** and sum to ~nine years total professional experience. Do not invent calendar dates when generating resumes—use durations or request dates from the author.

| Order | Company | Role | Approximate duration |
|-------|---------|------|----------------------|
| Most recent | Keller Williams | Senior Software Engineer | ~5 years |
| | Advision Development | Software Engineer (Full Stack) | ~3 years |
| Earliest | First Factory | Software Engineer | ~1 year |

---

## Professional Experience

### Keller Williams

**Role:** Senior Software Engineer  
**Duration:** Approximately five years  
**Source:** [`../experience/keller-williams.md`](../experience/keller-williams.md)

#### Context

Grew from frontend engineer into senior software engineer with significant ownership over critical parts of a **large production React application**. Title was frontend-focused; work regularly extended to architecture, backend API integration, CI/CD, cross-team migrations, product planning, and production support.

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

**Role:** Software Engineer (Full Stack)  
**Duration:** Approximately three years  
**Source:** [`../experience/advision.md`](../experience/advision.md)

#### Context

Foundation of engineering career. **Small team—end-to-end feature ownership** across frontend, backend, infrastructure, and product. Strongest evidence that **backend experience is professional, not theoretical**.

#### Technologies

Java, Spring Boot, Hibernate, REST APIs, Node.js, GraphQL, React, JavaScript, AWS (Lambda, EC2, S3, API Gateway, IAM), WordPress, Git, CI/CD

#### Responsibilities

- Built backend services (Java/Spring Boot, Hibernate)
- Designed and implemented REST APIs
- Built React frontends
- Node.js services and GraphQL endpoints
- Deployed to AWS; configured cloud resources
- Collaborated with CTO on architecture
- Owned features from idea through production
- Mentored junior developers

#### Major accomplishments

| Accomplishment | Summary | Story |
|----------------|---------|-------|
| **Lambda ↔ WordPress integration** | Led Lambda implementation: fetch internal API → transform → cache → WordPress-friendly API; CTO defined architecture, I owned execution | [`../stories/lambda-wordpress-integration.md`](../stories/lambda-wordpress-integration.md) |
| **React CMS → WordPress migration** | Frontend integration for migrating custom React CMS to WordPress; build-vs-buy pragmatism | [`../stories/react-cms-to-wordpress.md`](../stories/react-cms-to-wordpress.md) |
| **Dashboard performance** | Diagnosed frontend rendering bottleneck (not backend); simplified unnecessary render work; noticeably improved responsiveness | [`../stories/dashboard-performance.md`](../stories/dashboard-performance.md) |
| **Contractor rescue** | Inherited incomplete React page; evaluated partial work; clean rebuild; delivered before deadline | [`../stories/contractor-rescue.md`](../stories/contractor-rescue.md) |
| **Backend development** | Production Java/Spring Boot, Hibernate, REST, Node.js, GraphQL—earlier career; architectural direction often from CTO | (overview in experience doc) |

**Metrics:** Not documented—do not invent latency improvements or migration timelines.

#### Architecture contributions

- Service boundaries between internal APIs, Lambda, and WordPress
- Data transformation layers for consumer-specific payloads
- Build-vs-buy: WordPress over custom CMS

#### Backend work

- **Java**, **Spring Boot**, **Hibernate**, **REST APIs**
- **Node.js**, **GraphQL** where appropriate
- Database persistence through Hibernate on relational databases
- Not the most senior backend engineer on team—**production backend work**, not tutorial level

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
**Duration:** Approximately one year  
**Source:** [`../experience/first-factory.md`](../experience/first-factory.md)

#### Context

**First professional role.** Backend-focused team; assigned work within larger enterprise systems—not full product ownership. Established foundations: layered architecture, API design, Git workflow, code review, maintainable code in existing codebases.

#### Technologies

Java, Spring Boot, Hibernate, REST APIs, Maven, Git, relational databases

#### Responsibilities

- Backend services and REST API endpoints
- Business logic and Hibernate persistence
- Supporting frontend API consumers
- Backend architecture discussions (learning-weighted early on)

#### Major project — CommonBond

Backend systems for **CommonBond** (student loan refinancing/lending). Endpoint design, business logic, Hibernate, relational databases, API support for frontends.

**Note:** Specific endpoints, schemas, and implementation details **no longer remembered**—scope and technology documented honestly, not reconstructed.

#### Backend and growth

- Introduction to **enterprise applications** and professional **Git**, **code review**, **estimates**, **team workflow**
- Junior scope—did not lead architecture or manage engineers
- **Foundation** for later full-stack work at Advision

#### Stories

No dedicated story files—documented at experience overview depth only.

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
| Java | Professional (First Factory, Advision) |
| Spring Boot | Professional (First Factory, Advision) |
| Hibernate | Professional (First Factory, Advision) |
| Maven | Professional (First Factory) |

### Databases

| Skill | Context |
|-------|---------|
| SQL | Professional (relational databases) |
| PostgreSQL | Supabase (Free Slot personal project) |
| Supabase | Production personal project (Free Slot) |
| Relational databases / Hibernate ORM | Professional (First Factory, Advision) |

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

Git, GitHub, Vite, Docker (basic), Linux

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

### Modal vs. page architecture (Keller Williams)

Cross-org search feature evolved from modal to page as navigation requirements clarified; collaboration with Product/Design.

→ [`../stories/modal-vs-page-decision.md`](../stories/modal-vs-page-decision.md)

### Lambda integration (Advision)

AWS Lambda transformed internal API data for WordPress; scheduled sync; reduced coupling.

→ [`../stories/lambda-wordpress-integration.md`](../stories/lambda-wordpress-integration.md)

### CMS migration (Advision)

Custom React CMS → WordPress; frontend adaptation; build-vs-buy judgment.

→ [`../stories/react-cms-to-wordpress.md`](../stories/react-cms-to-wordpress.md)

### Dashboard performance (Advision)

Frontend rendering diagnosis and fix; investigation over premature optimization.

→ [`../stories/dashboard-performance.md`](../stories/dashboard-performance.md)

### Contractor rescue (Advision)

Rebuild vs. continue decision; delivered under deadline.

→ [`../stories/contractor-rescue.md`](../stories/contractor-rescue.md)

### Backend architecture (First Factory, Advision)

Java/Spring Boot/Hibernate/REST in production; Node.js/GraphQL at Advision; CommonBond backend work.

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

- First Factory: junior assigned backend work on CommonBond
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
