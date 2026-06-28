# Full Stack Resume — Generation Specification

## Purpose

This document is **not** a resume. It is a **specification** describing how future AI assistants should generate a one-page Full Stack resume from the career knowledge base.

**Primary objective:** A recruiter concludes—*"This engineer has stronger frontend experience, but also has legitimate backend experience and could contribute as a Full Stack Software Engineer immediately."*

**Sources of truth (read in order):**

1. [`master-resume.md`](master-resume.md) — complete profile
2. [`bullet-bank.md`](bullet-bank.md) — selectable bullets with sources
3. [`../experience/`](../experience/) — employer context
4. [`../stories/`](../stories/) — accomplishment depth
5. [`../projects/`](../projects/) — current full-stack evidence
6. [`../philosophy/engineering.md`](../philosophy/engineering.md) — tone and values

**Output:** A one-page resume document (PDF or markdown)—not an update to this spec file.

---

## Positioning

### Title on resume

Use: **Senior Software Engineer**

Acceptable variants: **Senior Full Stack Engineer**, **Software Engineer**

Avoid as primary title: **Senior Frontend Engineer**, **UI Engineer**, **Frontend Developer**

### Narrative frame

> I've spent the last several years specializing in frontend systems while continuing to work across backend services, cloud infrastructure, APIs, databases, CI/CD, and personal full-stack projects.

| Do | Don't |
|----|-------|
| Present frontend as a **strength** | Make frontend my **identity** |
| Show **professional backend** (Advision, First Factory) | Imply backend is hobby-only |
| Include **API/integration architecture** at Keller Williams as backend-adjacent proof | Describe KW as frontend-only |
| Lead with **Software Engineer** | Lead with "Frontend expert/specialist" |

---

## Professional Summary

**Length:** 3–4 lines maximum. No objective statement.

### Must emphasize

- Software engineering (not frontend-only identity)
- Frontend architecture at scale (React, TypeScript)
- Backend development (Java, Spring Boot, Node.js, REST, GraphQL)
- AWS and cloud integration (Lambda, API Gateway, CI/CD)
- Production systems and ownership
- Maintainability and architecture judgment
- Modern AI-assisted development (brief—one clause)

### Preferred phrasing

- "Software Engineer with deep frontend expertise and practical backend experience"
- "Full-stack background with recent focus on large-scale frontend systems"
- "Professional experience across Java/Spring Boot, Node.js, REST APIs, and React"

### Avoid

- "Frontend expert" / "Frontend specialist" / "UI Engineer"
- Invented years-on-technology counts
- Keyword dumps without substance

### Summary template (adapt; do not copy verbatim every time)

> Senior Software Engineer with ~9 years of experience building production web applications. Deep expertise in React and TypeScript at scale, with professional backend experience in Java, Spring Boot, Node.js, REST APIs, GraphQL, and AWS. Led API migrations, compatibility layers, and cloud integrations while owning CI/CD and architectural simplification. Currently building full-stack production applications with Supabase and AI-assisted workflows. Known for ownership, maintainability, and reducing unnecessary complexity.

→ Ground facts in [`master-resume.md`](master-resume.md), [`../context.md`](../context.md)

---

## Experience Section — Priorities

Use **approximate durations** from master resume. **Do not invent calendar dates** if not provided by the author.

**Bullets per role:** 4–5 on a one-page resume. **Total mix target:** ~45% backend/cloud, ~35% frontend, ~20% leadership/architecture (across all roles).

---

### Keller Williams — Senior Software Engineer (~5 years)

**Source:** [`../experience/keller-williams.md`](../experience/keller-williams.md)

**Emphasize:**

- API migrations and compatibility layers
- Micro frontend migration
- Repository consolidation
- CI/CD ownership (GitHub Actions, Harness, Spinnaker)
- Architecture discussions and cross-team collaboration
- Large-scale React application (one bullet—frontend anchor)
- Cloud deployments and production pipeline literacy

**Why this matters for Full Stack:** Migration and integration work demonstrates backend understanding even when backend services were not authored on this team.

| Theme | Full Stack signal |
|-------|-------------------|
| API V1 → V2 + compatibility layer | Integration architecture, stable internal models |
| Repository consolidation | Reduced operational overhead |
| Micro frontend migration | System architecture at scale |
| CI/CD ownership | Production engineering |
| Cross-team collaboration | API contracts, migration coordination |

**Recommended bullets from bullet bank (pick 4–5):**

1. Led migration from legacy API contract to V2 by introducing a compatibility layer isolating backend changes from frontend — **Architecture / Migration**
2. Collaborated with external backend team to deliver cross-team API migration with minimal disruption — **Collaboration / Migration**
3. Consolidated architecture by deprecating a repository (three → two), reducing deployment and maintenance complexity — **Architecture / Cloud**
4. Maintained CI/CD pipelines using GitHub Actions, Harness, and Spinnaker — **Cloud & DevOps**
5. Participated in micro frontend migration for team independence and maintainability — **Architecture / Frontend**
6. *(Optional frontend anchor)* Built and maintained large-scale React/TypeScript applications in production — **Frontend** (include exactly one)

**Stories for interview depth:** [`api-migration-v1-v2.md`](../stories/api-migration-v1-v2.md), [`repository-deprecation.md`](../stories/repository-deprecation.md)

**Avoid:** Presenting this role as frontend-only. Do not claim backend service authorship at KW—integration and transformation layers are accurate.

---

### Advision Development — Software Engineer, Full Stack (~3 years)

**Source:** [`../experience/advision.md`](../experience/advision.md)

**This is the strongest backend section.** Give it the most backend-heavy bullet mix.

**Emphasize (strongest backend section on the resume):**

- Node.js, REST APIs, GraphQL
- AWS Lambda, backend integrations, cloud infrastructure
- Java, Spring Boot, Hibernate (professional backend)
- WordPress integration
- React and CMS migration (full-stack delivery)
- AWS services in production
- Architecture and technical implementation leadership
- JavaScript backend services where Node.js fit the problem

Dashboard performance: at most **one** bullet if space allows.

**Recommended bullets from bullet bank (pick 4–5):**

1. Built backend services using Java, Spring Boot, Hibernate, and relational databases — **Backend**
2. Led implementation of AWS Lambda integration transforming internal data for WordPress consumption — **Backend / Cloud**
3. Implemented cloud infrastructure using Lambda, API Gateway, EC2, IAM, and S3 — **Cloud**
4. Created Node.js services and GraphQL endpoints for production requirements — **Backend**
5. Contributed to React CMS → WordPress migration, simplifying long-term maintenance — **Migration / Full Stack**
6. Delivered features spanning React, backend services, API integrations, and cloud infrastructure — **Full Stack**
7. *(Optional)* Diagnosed and resolved frontend rendering bottlenecks improving dashboard responsiveness — **Performance** (at most one)

**Stories:** [`lambda-wordpress-integration.md`](../stories/lambda-wordpress-integration.md), [`react-cms-to-wordpress.md`](../stories/react-cms-to-wordpress.md)

**Honest scope:** CTO often set architecture; candidate owned implementation. State accurately—"Led implementation" not "Architected entire platform" unless sourced.

---

### First Factory — Software Engineer (~1 year)

**Source:** [`../experience/first-factory.md`](../experience/first-factory.md)

**Purpose on Full Stack resume:** Establish **professional backend foundation**—not the headline role.

**Emphasize:**

- Java, Spring Boot, Hibernate
- REST APIs, database design, SQL
- Backend architecture in enterprise context
- Maven, relational databases
- CommonBond backend work (student loan refinancing/lending)
- Junior scope—assigned backend features, not system ownership

**Purpose:** Clearly establish **professional backend experience**—the floor the Full Stack narrative builds on.

**Recommended bullets (pick 2–3):**

1. Built backend services using Java, Spring Boot, Hibernate, and relational databases — **Backend**
2. Designed and implemented REST APIs supporting frontend consumers on CommonBond lending platform — **Backend**
3. *(Optional)* Implemented business logic and persistence layers in an enterprise Java codebase — **Backend**

**Do not:** Inflate into senior backend leadership. No invented endpoint or schema details.

---

## Personal Projects

**Always include: Free Slot**

**Source:** [`../projects/free-slot.md`](../projects/free-slot.md)

**Demonstrates:** React 19, TypeScript, Supabase (auth, database), production deployment, local dev environment, E2E testing, Supabase abstraction, AI-assisted development, full lifecycle ownership.

**Recommended bullets (pick 2):**

1. Designed and deployed production React application with Supabase authentication, database integration, and CI/CD — **Personal Projects**
2. Built local Supabase dev environment for offline development and E2E testing — **Personal Projects / DevOps**

**If space permits: Portfolio** ([`../projects/portfolio.md`](../projects/portfolio.md))

- Firebase Hosting, Firestore, Cloud Functions, GitHub Actions
- AI-native career knowledge base (meta—use one line max)

**Projects must communicate:** Continued backend learning outside employment, production deployment, full lifecycle ownership—not a technology checklist.

---

## Skills Section — Ordering

Order skill groups **exactly as below** on Full Stack resumes. List only skills supported by [`master-resume.md`](master-resume.md) or [`bullet-bank.md`](bullet-bank.md)—do not invent proficiency.

### Programming Languages

TypeScript · JavaScript · Java · Python

### Backend

Node.js · Express · Spring Boot · REST APIs · GraphQL

### Databases

PostgreSQL · SQL · Supabase

### Frontend

React · Next.js · Redux · React Query · Tailwind

### Cloud

AWS · Lambda · EC2 · S3 · IAM · API Gateway · CloudFront

### DevOps

GitHub Actions · Harness · Spinnaker

### Testing

Playwright · Vitest · Unit Testing · E2E Testing

### AI Engineering

Cursor · Claude · ChatGPT · GitHub Copilot · CodeRabbit · Prompt Engineering · Context Engineering

**Format:** Compact grouped lists. No proficiency bars. No "expert" labels. Skills support accomplishments—they do not replace them.

**Verification notes (do not claim unsupported depth in bullets):**

- **Python** — active study ([`../learning/2026.md`](../learning/2026.md)); list in skills, substantiate in bullets only if documented
- **Express, Next.js, CloudFront** — list for ATS alignment; emphasize in bullets only where [`master-resume.md`](master-resume.md) documents use
- **Firebase** — add under Cloud when Portfolio project is included

---

## Bullet Selection Rules

### Priority order (select from [`bullet-bank.md`](bullet-bank.md))

1. Backend Engineering  
2. Full Stack  
3. Architecture  
4. Cloud and DevOps  
5. Technical Leadership  
6. Ownership  
7. CI/CD  
8. Migration Experience  
9. AI Engineering  
10. Frontend Engineering  
11. Performance  
12. Testing  

### Mix target (one-page resume, all roles combined)

| Category | ~Share |
|----------|--------|
| Backend / Cloud / DevOps | 45% |
| Frontend | 35% |
| Leadership / Architecture | 20% |

### Selection constraints

- Every bullet must come from bullet bank or be traceable to master resume
- **Never fabricate metrics**
- **No duplicate competencies**—two API migration bullets from different angles is fine; two "built React apps" is not
- Prefer **achievement bullets** over technology lists
- Each bullet: strong verb + scope + impact (without invented numbers)

### Filter tags (bullet bank)

Prefer bullets tagged: `full-stack`, `backend`, `aws`, `migration`, `architecture`, `advision`, `ownership`, `cicd`

Use `frontend`, `react`, `performance` sparingly for balance—not elimination.

---

## Tone

- **Confident** — ownership and delivery without arrogance  
- **Technical** — concrete systems (Lambda, Spring Boot, compatibility layers)  
- **Senior** — judgment, trade-offs, maintainability  
- **No buzzwords** — "synergy," "rockstar," " ninja," "passionate"  
- **No exaggerated claims** — "Led implementation" vs. "Built entire platform"  
- **No fabricated metrics** — ever  

Align with [`../philosophy/engineering.md`](../philosophy/engineering.md): simplicity, ownership, product thinking.

---

## ATS Keywords

Include naturally in summary, skills, and bullets—**not as a keyword block**.

Software Engineer · Senior Software Engineer · Full Stack Engineer · Backend Engineer · Frontend Engineer · React · Node.js · Express · Java · Spring Boot · REST API · GraphQL · AWS · Lambda · SQL · PostgreSQL · Supabase · CI/CD · GitHub Actions · Harness · Spinnaker · Architecture · Cloud · Microfrontends · Testing · Playwright · TypeScript · JavaScript · AI-assisted development

Weave into summary, skills, and bullets—never a detached keyword block. Do not claim production depth in bullets for skills listed only for ATS coverage without source documentation.

---

## Resume Constraints

| Rule | Detail |
|------|--------|
| **Length** | One page |
| **Bullets** | Every bullet communicates value; 4–5 per recent role, 2–3 for First Factory |
| **Summary** | Max 3–4 lines |
| **Paragraphs** | None longer than 3 lines |
| **Objective statement** | Omit |
| **Adjectives** | Minimal—let accomplishments speak |
| **Skills vs. bullets** | Skills support accomplishments; never skills-only resume |
| **Dates** | Use only if author provides; otherwise durations ("~5 years") |
| **Duplication** | No repeated skills or identical bullet themes |

---

## Suggested One-Page Layout

```
[Name] · [Contact] · [Links]

Senior Software Engineer

PROFESSIONAL SUMMARY
(3–4 lines)

TECHNICAL SKILLS
(Grouped compact lists — see Skills Ordering)

EXPERIENCE

Keller Williams · Senior Software Engineer · ~5 years
• (4–5 bullets — backend/cloud/architecture weighted)

Advision Development · Software Engineer (Full Stack) · ~3 years
• (4–5 bullets — strongest backend section)

First Factory · Software Engineer · ~1 year
• (2–3 bullets — Java/Spring Boot foundation)

PROJECTS

Free Slot · (2 bullets)
Portfolio · (0–1 bullet, optional)
```

---

## Success Criteria Checklist

Before finalizing a generated Full Stack resume, verify:

- [ ] Title is **Senior Software Engineer** (or Full Stack variant)—not Frontend-only
- [ ] Summary uses **"Software Engineer with deep frontend expertise and practical backend experience"** or equivalent
- [ ] **Advision** has the most backend-heavy bullets
- [ ] **Keller Williams** includes API migration and/or CI/CD—not only React
- [ ] **First Factory** establishes Java/Spring Boot professionally
- [ ] **Free Slot** is included with Supabase/full-stack signal
- [ ] Bullet mix approximates **45/35/20** backend-frontend-leadership
- [ ] No invented metrics, dates, or technologies
- [ ] Frontend strength is **visible but not dominant**
- [ ] Recruiter could reasonably classify candidate as **Full Stack**, not Frontend-only

---

## Anti-Patterns

| Anti-pattern | Why |
|--------------|-----|
| 6+ React bullets, 0 backend bullets | Fails primary objective |
| "Frontend specialist" in summary | Wrong positioning |
| Claiming Express/Next.js/CloudFront in bullets without source docs | Skills list ≠ bullet claims |
| Claiming KW backend service development | Inaccurate—integration layer only |
| Omitting Advision or First Factory | Hides professional backend |
| Omitting Free Slot | Hides current full-stack practice |
| Keyword stuffing block at bottom | Low quality; ATS without substance |

---

## Supporting Documents

Generate Full Stack resumes **only** from these sources:

| Document | Path |
|----------|------|
| Master resume | [`master-resume.md`](master-resume.md) |
| Bullet bank | [`bullet-bank.md`](bullet-bank.md) |
| Experience | [`../experience/`](../experience/) |
| Projects | [`../projects/`](../projects/) |
| Stories | [`../stories/`](../stories/) |
| Philosophy | [`../philosophy/`](../philosophy/) |
| Engineer context | [`../context.md`](../context.md) |

**Generated output storage:** [`fullstack.md`](fullstack.md) — optional destination for the final one-page resume after generation.

---

## Maintenance

When career docs change:

1. Update source files and bullet bank first  
2. Review this spec if positioning or mix targets change  
3. Regenerate Full Stack resume from updated bullets—do not edit generated PDFs in isolation  

This specification defines **how** to generate; [`master-resume.md`](master-resume.md) defines **what** is true.
