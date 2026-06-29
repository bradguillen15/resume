# Brad Guillen

**Senior Software Engineer**

Costa Rica · +506 6201-1840 · bradguillen15@gmail.com · [linkedin.com/in/brad-guillen-89794ba8](https://linkedin.com/in/brad-guillen-89794ba8) · [github.com/bradguillen15](https://github.com/bradguillen15) · [bradguillen.com](https://bradguillen.com)

> Canonical **Full Stack resume** for the Career Knowledge Base. This is the long-term source of truth for all Full Stack resume variations (one-page or two-page) targeting **Senior Software Engineer · Senior Full Stack Engineer · Full Stack Software Engineer · Software Engineer**. Synthesized from the knowledge base—not written from scratch. Facts live in source files; this view does not duplicate them. Generation spec: [`fullstack-version.md`](fullstack-version.md).

---

## Professional Summary

Senior Software Engineer with approximately ten years building and maintaining production web applications across the stack. Deep expertise in React and TypeScript at scale, with professional backend experience in Java, Spring Boot, Node.js, REST APIs, GraphQL, and AWS. Led API migrations, cloud integrations, and a data-layer migration that cut state boilerplate ~40%, while owning CI/CD and architectural simplification—and led a frontend team of 4 as Team Lead at Advision. Currently building full-stack production applications with Supabase and modern AI-assisted workflows. Known for ownership, maintainability, and reducing unnecessary complexity—improving software by making systems easier to understand, maintain, and evolve.

---

## Core Technologies

**Languages:** TypeScript · JavaScript · Java · Python · SQL

**Backend:** Node.js · Express · Spring Boot · Hibernate · Jersey · REST APIs · GraphQL · Serverless (AWS Lambda)

**Frontend:** React · Redux · React Query · Next.js · Micro frontends (Module Federation) · Webpack · Tailwind CSS · Component architecture

**Databases:** PostgreSQL · MySQL · MongoDB · SQL · Supabase

**Cloud:** AWS (Lambda · API Gateway · EC2 · S3 · IAM · CloudFront) · Firebase · Supabase

**DevOps & CI/CD:** GitHub Actions · Jenkins · Harness · Spinnaker · Docker · Git · Linux

**Testing:** Playwright (E2E) · Vitest · Jest · React Testing Library · JUnit · Mockito

**AI-Assisted Development:** Cursor · Claude / Claude Code · ChatGPT · GitHub Copilot · CodeRabbit · Prompt & context engineering · Model Context Protocol (MCP)

---

## Professional Experience

### Keller Williams — Senior Software Engineer · Nov 2020 – Apr 2026

Owned critical product areas of a large, long-lived production React application. Title was frontend-focused, but the work consistently extended into integration architecture, cross-team API migrations, CI/CD, and production support—system-level technical decisions, not UI implementation alone.

- Led the frontend side of an API V1 → V2 migration by introducing a transformation/compatibility layer that normalized a redesigned backend contract into the shape consumers already expected—isolating breaking changes to one layer instead of dozens of call sites and de-risking a cross-team rollout.
- Coordinated the migration directly with an external backend engineering team, aligning on contracts and timelines so neither side blocked the other.
- Led consolidation of three repositories into two, deprecating an entire repository and aligning the change with an in-flight product URL migration—reducing deployment steps, pipeline maintenance, and onboarding cost without a standalone refactor project.
- Maintained and troubleshot production CI/CD pipelines across GitHub Actions, Harness, and Spinnaker, treating release reliability and pipeline literacy as part of feature ownership.
- Led a data-layer migration off Redux to a lighter, more maintainable approach (React Query for server state), cutting state-management boilerplate by **~40%** and improving developer experience.
- Diagnosed a slow production dashboard as a frontend rendering issue (not backend) and applied lazy loading to cut load time by **~35%+**—investigation over premature optimization.
- Proposed and built a configuration-driven banner system that let Product manage informational banners without engineering cycles—eliminating a recurring class of sprint work; in use ~3 years before being deprecated cleanly.
- Participated in the migration toward a micro frontend architecture for clearer team boundaries and independent deployment, and partnered with Product, Design, and QA—raising the modal-vs-page navigation concern that the team later adopted as requirements grew.

### Advision Development — Lead Web Developer (promoted from Senior Web Developer) · Nov 2017 – Nov 2020

Strongest evidence of full-stack capability and team leadership. Joined as Senior Web Developer (2017–2019); promoted to Lead Web Developer in 2020, leading a frontend team of 4. Owned features end-to-end across frontend, backend, infrastructure, and production on a small team—context-switching weekly rather than handing off across role boundaries.

- As **Lead Web Developer** (2020), led a **frontend team of 4** and ran sprint ceremonies as **Scrum Master**—delegating work, reviewing code, analyzing requirements, and managing stakeholder communication while staying hands-on across the stack.
- Led implementation of an AWS Lambda integration (under CTO-defined architecture) that consumed an internal API, transformed and cached the response, and exposed a WordPress-friendly API—so the CMS displayed dynamic data without calling internal services directly or duplicating backend logic.
- Provisioned and configured the supporting AWS infrastructure: Lambda, API Gateway, EC2, IAM, and S3, with scheduled synchronization chosen as a pragmatic cost/complexity trade-off over real-time.
- Built and consumed RESTful APIs in Node.js and Express and used GraphQL, coordinating with backend teams on contract definitions; implemented real-time features with WebSockets for low-latency live updates.
- Drove a custom React CMS → WordPress migration (build-vs-buy), adapting frontend integrations so existing product behavior survived without a disruptive transition—shifting engineering time from maintaining a bespoke CMS to differentiating product work.
- Took ownership of a critical page after an external contractor failed to deliver; evaluated the partial work, rebuilt it cleanly, and shipped before the deadline. Mentored junior developers through pairing and code review with explanation.

### First Factory — Software Engineer · May 2016 – Nov 2017

First professional role; backend foundation that the full-stack narrative builds on.

- Architected a Java REST API from scratch with Hibernate and Jersey, covered by JUnit and Mockito tests, and collaborated with QA on Selenium-based automation.
- Built a Yeoman generator that scaffolds full CRUD APIs for Java (Spring Boot) or Node.js from user-selected options—reducing boilerplate for new services.
- Developed a Google Sheets add-on (JavaScript ES6, Webpack, Google Apps Script) and supported enterprise applications built with Java 8, JSP, Spring, and jQuery.

---

## Selected Projects

*Designed, built, and operated solo in production—current, hands-on evidence of senior full-stack engineering across frontend, backend, cloud, and CI/CD.*

### Free Slot — Production full-stack application

**React 19 · TypeScript · Supabase · Playwright · CI/CD** — solo-built and run in production · [live demo](https://free-slot-blush.vercel.app/).

- Designed, built, and operate the application end-to-end—authentication, database, and deployment—owning the full lifecycle alone and keeping `main` releasable through CI/CD.
- Encapsulated Supabase behind services and hooks so the UI stays vendor-agnostic and the backend remains swappable—infrastructure isolated from application logic by design, not as an afterthought.
- Built a local-first Supabase stack shared by development and end-to-end tests: clone-and-run onboarding and honest Playwright coverage against real auth and data paths instead of mocks.
- Implemented anonymous-first UX—anonymous activity is stored in local storage and seamlessly migrated to Supabase on signup, removing onboarding friction without data loss.
- Use AI for drafts, tests, and refactors with every contribution reviewed and simplified—rejecting over-engineered output in favor of maintainable logic.
- Built a RAG-based recommendation feature—feeding user activity data to an LLM to suggest habits the user wants to build (reading, meditating)—applying RAG coursework to a live product.

### Web Resume — Portfolio & Career Knowledge Base

**React 19 · TypeScript · Vite · Firebase · Cloud Functions · GitHub Actions** — live production site at [bradguillen.com](https://bradguillen.com).

- Operate a live production site with Firebase Hosting, Firestore (review moderation workflow), and Cloud Functions (contact delivery, IP rate limiting), continuously deployed via GitHub Actions.
- Engineered it into an AI-native, documentation-driven career knowledge base—a single source of truth that generates tailored resumes and interview prep, applying context engineering at repository scale.

---

## Continuous Learning & Certifications

Deliberate, dated skill development reinforcing the backend, cloud, and AI dimensions of the full-stack profile. *Structured coursework and guided projects—not production ownership.*

- **Boot.dev — Back-end Developer Path** (in progress; [boot.dev/u/bradgg](https://www.boot.dev/u/bradgg)): completed 14 courses + 5 guided projects in 2026 spanning Python (incl. OOP and functional), server-side TypeScript (HTTP clients/servers), SQL, Git, Linux, Docker, CI/CD with GitHub Actions, AWS, S3/CloudFront, and Retrieval Augmented Generation—reinforced by projects including an AI agent in Python.
- **Anthropic (Skilljar) — AI engineering courses:** Claude Code in Action, AI Fluency: Framework & Foundations, Introduction to and Advanced Model Context Protocol, and Introduction to Agent Skills.
- **MouréDev (Big School):** *Certificado de iniciación al desarrollo con AI* (introductory).

→ Detail: [`../learning/2026.md`](../learning/2026.md#certifications--structured-courses)

---

## Technical Highlights

Recurring engineering themes across roles and projects—the throughline behind the bullets above:

- **Simplifying complex systems** — repository consolidation, build-vs-buy, deletion over new abstraction.
- **Integration architecture** — compatibility layers, stable internal models, and service boundaries that isolate backend and infrastructure change from application logic.
- **Full-stack ownership** — features and products owned from idea through production and long-term maintenance, across frontend, backend, cloud, and CI/CD.
- **Incremental modernization** — micro frontends, CMS migration, and repo consolidation aligned with delivery rather than risky rewrites.
- **Product-oriented decisions** — questioning the original implementation to reduce future work (configurable systems, modal-vs-page navigation).
- **Cross-team collaboration** — API contracts and migrations coordinated with backend, Product, Design, QA, and external teams.
- **Modern AI-assisted engineering** — AI accelerates drafting, testing, and exploration; engineering judgment decides what ships, and over-complex generated code is rejected.

---

## Education

- **Computer Engineering** — ULACIT (2015, ~90% completed)
- **Middle Technician in Software Development** — Colegio Técnico Carlos Luis Fallas (2012–2014)

## Languages

Spanish (native) · English (C1)

---

## Resume Notes

### Purpose

This is the canonical Full Stack resume. Future resume customizations should begin from this file rather than starting from scratch.

### Rules

- Never fabricate experience.
- Never exaggerate backend ownership (e.g. KW was integration/transformation layers, not backend service authorship; Lambda was "led implementation" under CTO-defined architecture, not sole architect).
- Never invent metrics, calendar dates, or years-on-technology counts. Experience is **~10 years**; durations are approximate.
- Present continuous learning honestly as coursework/guided projects—not production ownership.
- Prefer truthful engineering narratives over keyword stuffing.
- Adapt bullet ordering to the target job description; trim to one page (4–5 bullets per recent role, 2–3 for First Factory) or expand to two pages as needed.
- Preserve the central narrative of ownership, maintainability, and architecture—Software Engineer first, frontend specialization second.

### Sources

Synthesized from [`master-resume.md`](master-resume.md), [`bullet-bank.md`](bullet-bank.md), [`fullstack-version.md`](fullstack-version.md), [`../experience/`](../experience/), [`../stories/`](../stories/), [`../projects/`](../projects/), [`../strengths.md`](../strengths.md), and [`../learning/2026.md`](../learning/2026.md). Do not drift from sourced facts.

### Tailoring targets

Bullet mix approximates **~45% backend/cloud · ~35% frontend · ~20% leadership/architecture**. A recruiter should conclude: *stronger frontend experience, but legitimate backend experience—could contribute as a Full Stack Engineer immediately.*
