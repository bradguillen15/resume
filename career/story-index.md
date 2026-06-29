# Story Index

## Purpose

**Navigation index for the entire Career Knowledge Base.** Future AI assistants should read this file **first** before generating resumes, preparing interviews, writing cover letters, creating portfolio content, or helping with career decisions.

This document does **not** duplicate information. It explains **where each type of information lives** so you can quickly retrieve the best supporting evidence for any career-related task.

**Rules:**

- Everything in this repository should remain **factual**
- Update the **canonical document** when facts change—never fork duplicates
- When generating output, **reference source files** rather than inventing new wording or metrics
- Facts live in leaf documents; this file is a **map**, not a second source of truth

**After this file:** Read [`context.md`](context.md) for engineer identity, AI assistant rules, and current career direction.

---

## Quick Start by Task

| Task | Read first | Then pull from |
|------|------------|----------------|
| Resume / promotion prep | [`brag-document.md`](brag-document.md) | Recent accomplishments user may forget · then bullet bank |
| Resume (any role) | [`context.md`](context.md) | [`resume/master-resume.md`](resume/master-resume.md) → [`resume/bullet-bank.md`](resume/bullet-bank.md) → relevant [`experience/`](experience/) + [`stories/`](stories/) |
| Full Stack resume | Above + [`resume/fullstack-version.md`](resume/fullstack-version.md) | [`resume/fullstack.md`](resume/fullstack.md) · Advision + KW backend stories |
| AI Software Engineer resume | [`philosophy/working-with-ai.md`](philosophy/working-with-ai.md) | [`resume/ai-engineer.md`](resume/ai-engineer.md) · [`projects/free-slot.md`](projects/free-slot.md) |
| Frontend resume | [`resume/frontend.md`](resume/frontend.md) | [`experience/keller-williams.md`](experience/keller-williams.md) · frontend stories |
| Cover letter / intro | [`strengths.md`](strengths.md) | [`context.md`](context.md) · 1–2 [`stories/`](stories/) |
| "Tell me about yourself" | [`context.md`](context.md) + [`strengths.md`](strengths.md) | Central narrative below |
| Behavioral interview | [`interviews/behavioral.md`](interviews/behavioral.md) | Story mapped in [Engineering Stories](#engineering-stories) |
| Leadership interview | [`leadership.md`](leadership.md) | [`interviews/leadership.md`](interviews/leadership.md) |
| Frontend interview | [`interviews/frontend.md`](interviews/frontend.md) | KW experience + architecture stories |
| Full Stack interview | [`interviews/fullstack.md`](interviews/fullstack.md) | Advision + API/Lambda stories |
| AI Software Engineer interview | [`interviews/ai-software-engineer.md`](interviews/ai-software-engineer.md) | [`philosophy/working-with-ai.md`](philosophy/working-with-ai.md) · Free Slot |
| Portfolio / personal site | [`projects/portfolio.md`](projects/portfolio.md) | [`projects/free-slot.md`](projects/free-slot.md) |
| Career advice / planning | [`context.md`](context.md) | [`learning/2026.md`](learning/2026.md) |
| LinkedIn content | [`recommendations/linkedin.md`](recommendations/linkedin.md) | [`strengths.md`](strengths.md) · bullet bank |
| Promotion / recommendation request | [`strengths.md`](strengths.md) + [`leadership.md`](leadership.md) | Specific stories with evidence links |

---

## Repository Structure

### Context

**[`context.md`](context.md)**

Contains:

- Professional summary and engineering identity
- Current career goals and target roles
- Motivations and working style
- AI assistant rules (accuracy, calibration, source of truth)
- Pointers to philosophy, strengths, and learning

**Use first** to understand current professional situation and how to represent work accurately.

---

### Engineering Philosophy

**[`philosophy/engineering.md`](philosophy/engineering.md)**

Contains:

- Engineering principles (simplicity, ownership, product thinking)
- Maintainability and technical debt philosophy
- Code review mindset
- AI-assisted development overview (links to dedicated AI doc)

**Use** whenever explaining *how I think* about engineering decisions.

**Also:** [`philosophy/architecture.md`](philosophy/architecture.md) — architecture principles (in progress)

---

### AI Philosophy

**[`philosophy/working-with-ai.md`](philosophy/working-with-ai.md)**

Contains:

- AI-assisted engineering philosophy
- Context over prompts · review discipline · simplicity
- Documentation as context · architecture for AI
- Testing and refactoring with AI
- Learning roadmap (concepts vs. tools)
- Personal principles and future vision

**Use** for AI Software Engineer positions, AI-related interviews, and technical writing about AI workflows.

**Redirect:** [`philosophy/ai.md`](philosophy/ai.md) → points here

---

### Strengths

**[`strengths.md`](strengths.md)**

Contains:

- Engineering identity (Software Engineer, not Frontend-only)
- Eight core strengths with story evidence tables
- Motivations and differentiators
- Leadership qualities (summary—detail in `leadership.md`)
- Engineering values · ideal projects · honest weaknesses

**Use** for summaries, introductions, cover letters, and "Tell me about yourself."

---

### Leadership

**[`leadership.md`](leadership.md)**

Contains:

- Leadership philosophy (without management title)
- Technical leadership · ownership · mentoring · pair programming
- Collaboration · decision making · handling disagreements
- Leading without authority · code review · AI leadership

**Use** for behavioral and leadership questions, promotion narratives, recommendation requests.

**Interview prep:** [`interviews/leadership.md`](interviews/leadership.md)

---

## Professional Experience

### Keller Williams

**[`experience/keller-williams.md`](experience/keller-williams.md)** · Nov 2020–Apr 2026 (~5.5 years) · Senior Software Engineer (frontend-heavy)

Contains:

- Feature ownership and informal leadership
- Micro frontend participation
- Repository consolidation · API migration · configurable banners
- Performance work · CI/CD · cross-team collaboration
- Architecture discussions with Product and Design

**Primary source** for Senior Frontend / Senior Software Engineer (frontend-heavy) experience.

**Related stories:** [Repository consolidation](#repository-consolidation) · [API migration](#api-migration) · [Configurable banners](#configurable-banner-system) · [Modal vs page](#modal-vs-page-decision) · [Dashboard performance](#dashboard-performance-optimization) · [Data layer migration (Redux removal)](stories/redux-removal.md)

---

### Advision

**[`experience/advision.md`](experience/advision.md)** · Nov 2017–Nov 2020 (~3 years) · Senior Web Developer → Lead Web Developer

Contains:

- **Lead Web Developer (2020): Team Lead of a frontend team of 4** · Scrum Master (final ~11 months)
- **Senior Web Developer (2017–2019):** Node.js/Express, REST/GraphQL, WebSockets, React
- Node.js · GraphQL · REST APIs
- AWS Lambda · WordPress integration
- React frontend · backend collaboration
- Mentoring junior developers · small-team end-to-end ownership

**Primary source** for Full Stack experience.

**Related stories:** [Lambda integration](#lambda-integration) · [CMS migration](#cms-migration) · [Contractor rescue](#contractor-rescue)

---

### First Factory

**[`experience/first-factory.md`](experience/first-factory.md)** · May 2016–Nov 2017 (~1.5 years) · Backend foundation

Contains:

- Java · Spring Boot · Hibernate · Jersey · JUnit/Mockito
- Architected a Java REST API from scratch · Yeoman CRUD-API generator · Google Sheets add-on
- Enterprise app support (Java 8, JSP, Spring, jQuery)

**Primary source** for professional backend foundation and early tooling work.

---

### FPT Latin America (formerly Intertec)

**[`experience/fpt-latin-america.md`](experience/fpt-latin-america.md)** · Oct–Dec 2014 (~3 months) · Software Developer Internship

Earliest professional exposure—short internship (SharePoint from scratch; JS, C#, Java, SQL). **Usually omitted from senior resumes**; documented for timeline completeness.

---

## Projects

### Free Slot

**[`projects/free-slot.md`](projects/free-slot.md)**

Contains:

- React 19 · TypeScript · Supabase
- Local development stack · E2E testing
- Drag-and-drop UX · architecture · CI/CD
- AI-assisted development workflow (with review discipline)
- Production deployment

**Use** for portfolio discussions, full-stack capability, and AI Software Engineer evidence.

---

### Portfolio

**[`projects/portfolio.md`](projects/portfolio.md)**

Contains:

- bradguillen.com · Firebase · GitHub Actions
- Career knowledge base vision (`career/` tree)
- AI-native documentation architecture
- Repository philosophy

**Use** when discussing personal branding, meta-engineering, and context engineering.

---

## Engineering Stories

Each story documents a **real engineering situation** with decisions, trade-offs, and lessons. Prefer these for behavioral interviews—they are factual.

Use [`interviews/behavioral.md`](interviews/behavioral.md) for question → story mapping and STAR rotation.

| Story | File | Best for |
|-------|------|----------|
| **Repository consolidation** | [`stories/repository-deprecation.md`](stories/repository-deprecation.md) | Influence without authority · simplifying complexity · DX |
| **API migration** | [`stories/api-migration-v1-v2.md`](stories/api-migration-v1-v2.md) | Architecture · cross-team collaboration · incremental migration |
| **Configurable banner system** | [`stories/configurable-banner-system.md`](stories/configurable-banner-system.md) | Product thinking · reducing repeated work · configurability |
| **Lambda integration** | [`stories/lambda-wordpress-integration.md`](stories/lambda-wordpress-integration.md) | Backend/cloud · implementation leadership · service boundaries |
| **Modal vs page decision** | [`stories/modal-vs-page-decision.md`](stories/modal-vs-page-decision.md) | Disagreement · collaboration · architecture evolution |
| **Dashboard performance** | [`stories/dashboard-performance.md`](stories/dashboard-performance.md) | Performance · ownership · root-cause investigation |
| **Data layer migration (Redux removal)** | [`stories/redux-removal.md`](stories/redux-removal.md) | Architecture · simplification · ~40% boilerplate reduction |
| **Contractor rescue** | [`stories/contractor-rescue.md`](stories/contractor-rescue.md) | Ownership under pressure · delivery · responsibility |
| **CMS migration** | [`stories/react-cms-to-wordpress.md`](stories/react-cms-to-wordpress.md) | Build vs buy · frontend transition · pragmatic modernization |

**Redirect stubs** (do not use—link to canonical files above):

| Old path | Canonical file |
|----------|----------------|
| `stories/api-migration.md` | `api-migration-v1-v2.md` |
| `stories/configurable-banners.md` | `configurable-banner-system.md` |
| `stories/lambda-wordpress.md` | `lambda-wordpress-integration.md` |
| `stories/modal-vs-page.md` | `modal-vs-page-decision.md` |
| `stories/cms-migration.md` | `react-cms-to-wordpress.md` |

---

## Resume Assets

| Document | Purpose |
|----------|---------|
| [`resume/master-resume.md`](resume/master-resume.md) | Complete professional history—all employers, projects, skills |
| [`resume/bullet-bank.md`](resume/bullet-bank.md) | Achievement bullets by competency with `Source:` and `Tags:` |
| [`resume/fullstack-version.md`](resume/fullstack-version.md) | **Spec** for generating Full Stack resumes (bullet mix, emphasis) |
| [`resume/fullstack.md`](resume/fullstack.md) | Full Stack resume view (populate from bullet bank) |
| [`resume/frontend.md`](resume/frontend.md) | Frontend resume view |
| [`resume/ai-engineer.md`](resume/ai-engineer.md) | AI Software Engineer resume view |

**Note:** `resume/ai-engineer-version.md` and prompt references to `fullstack-generation.md` / `ai-generation.md` **do not exist**. Use `fullstack-version.md` as the generation spec pattern; AI engineer view is `ai-engineer.md`.

---

## Interview Preparation

| Document | Purpose |
|----------|---------|
| [`interviews/behavioral.md`](interviews/behavioral.md) | STAR story library · question mapping · weakness framing |
| [`interviews/frontend.md`](interviews/frontend.md) | Senior frontend judgment · architecture · not React trivia |
| [`interviews/fullstack.md`](interviews/fullstack.md) | System thinking · backend rebalance |
| [`interviews/ai-software-engineer.md`](interviews/ai-software-engineer.md) | AI-assisted SWE · workflow · context engineering |
| [`interviews/leadership.md`](interviews/leadership.md) | Leadership interview prep (derived from `leadership.md`) |
| [`interviews/technical.md`](interviews/technical.md) | Technical interview prep (scaffold) |

---

## Other Resources

| Document | Purpose |
|----------|---------|
| [`learning/2026.md`](learning/2026.md) | Current-year learning goals and progress |
| [`recommendations/linkedin.md`](recommendations/linkedin.md) | LinkedIn content pointers |
| [`brag-document.md`](brag-document.md) | Living accomplishment log—update monthly/quarterly |
| [`templates/`](templates/) | Schemas for new experience, project, and story entries |
| [`README.md`](README.md) | Repository principles and maintenance rules |

---

## Preferred Resume Style

When generating resumes from this repository:

- Prioritize **impact** and engineering outcomes
- Avoid buzzwords and generic adjectives ("passionate," "synergy")
- Emphasize **ownership**, **architecture**, and **maintainability**
- Show **business impact** qualitatively when metrics are not documented
- Tailor technologies to the **target role** using the correct resume view/spec
- Pull bullets from [`bullet-bank.md`](resume/bullet-bank.md)—preserve `Source:` links mentally; do not invent achievements
- **Never fabricate** experience, metrics, dates, or responsibilities
- **Never exaggerate** scope (e.g., Lambda = implementation leadership, not sole architect)

→ AI assistant rules: [`context.md`](context.md#instructions-for-ai-assistants)

---

## Preferred Interview Style

When preparing interview answers:

- Prefer **real stories** from [`stories/`](stories/)—STAR format when needed
- Explain **trade-offs** and business reasoning
- Describe **architecture decisions** and collaboration
- Mention **lessons learned** without sounding rehearsed
- Rotate stories—see [`interviews/behavioral.md`](interviews/behavioral.md) rotation guide
- **Challenge undervaluing impact**—straightforward fixes can still have large team/user benefit
- For gaps marked "not documented" (e.g., production incident story)—ask the user; do not fabricate

---

## Preferred Engineering Narrative

The central theme of my career is **not** React. It is **not** TypeScript. It is **not** AI.

The central narrative is:

> **I improve software by making it easier to understand, maintain, and evolve.**

Everything else—React, full-stack work, AI-assisted workflows, architecture initiatives—**supports** that statement.

**Use for:** summaries, cover letter themes, "why hire Brad," recommendation talking points.

→ Expanded: [`strengths.md`](strengths.md#summary) · [`philosophy/engineering.md`](philosophy/engineering.md)

---

## Career Direction

→ **Canonical:** [`context.md`](context.md#career-direction)

**Current target roles** (documented in context):

- Senior Software Engineer
- Senior Full Stack Engineer
- AI Software Engineer

**Active study areas:** AI-assisted engineering, backend depth, testing, cloud, modern architecture — tracked in [`learning/2026.md`](learning/2026.md)

**Long-term direction:** Staff-level Software Engineer specializing in AI-assisted software engineering, architecture, developer productivity, and maintainable systems.

**Additional roles** sometimes targeted in applications (confirm with user if emphasizing): Senior Frontend Engineer, Software Engineer (Platform).

---

## Updating This Repository

When new experience, projects, or stories are added:

1. Update the **canonical document** (`experience/`, `projects/`, `stories/`)
2. Add bullets to [`resume/bullet-bank.md`](resume/bullet-bank.md) with `Source:` and `Tags:`
3. Update [`interviews/behavioral.md`](interviews/behavioral.md) story mapping if interview-relevant
4. Add a row to [Engineering Stories](#engineering-stories) in this file if it is a new story
5. Link from relevant sections in [`strengths.md`](strengths.md) or [`leadership.md`](leadership.md) if it demonstrates a core theme
6. **Avoid duplicates**—prefer modifying existing stories when the lesson is the same
7. Create new stories only when they demonstrate a **genuinely different** engineering lesson

This repository should remain **concise, factual, and maintainable**. It should evolve exactly like good software.

---

## Related Documents

| Document | Relationship |
|----------|--------------|
| [`README.md`](README.md) | Repository principles |
| [`context.md`](context.md) | Engineer identity—read immediately after this index |
| [`strengths.md`](strengths.md) | Value themes |
| [`leadership.md`](leadership.md) | Leadership style |
| [`philosophy/engineering.md`](philosophy/engineering.md) | Decision principles |
| [`philosophy/working-with-ai.md`](philosophy/working-with-ai.md) | AI philosophy |

**Maintenance:** When structure changes (new top-level files, renamed stories), update this index—not scattered references across the repo.
