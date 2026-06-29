# GitHub Profile Strategy

## Purpose

This document is **not** the live GitHub profile. It is the **canonical guide** for how my GitHub profile metadata, profile README, pinned repositories, and presentation should be written, maintained, and updated.

Future AI assistants should use this file whenever helping improve my GitHub bio, profile README (`bradguillen15/bradguillen15`), pinned repos, or repository descriptions.

**GitHub serves different goals than LinkedIn or a résumé:**

| Résumé / LinkedIn | GitHub |
|-------------------|--------|
| Narrative and searchability | **Code as proof** — repos, commits, README quality |
| Employer-focused sections | Developer-to-developer tone; scannable projects |
| Private until shared | Public by default; browsed before interviews |
| One-page compression | README can be longer; still keep it scannable |

**The profile should:**

- Prove I am a **real senior engineer** with shipped work—not a tutorial account or empty profile
- Tell the **same engineering story** as the Career Knowledge Base ([`../context.md`](../context.md))
- Lead with **ownership, simplification, and production systems**—not framework hoarding
- Support **Senior Software Engineer**, **Full Stack**, and **AI Software Engineer** discovery without narrowing to "React developer only"
- Complement [bradguillen.com](https://bradguillen.com/) and [LinkedIn strategy](linkedin.md)—not contradict them

**Ready-to-paste profile README:** [`github-profile-readme.md`](github-profile-readme.md) — copy into the special repo `bradguillen15/bradguillen15` (Settings → Profile → or create repo named exactly like the username).

**Style:** Prefer the **short assignment format** in `github-profile-readme.md` — a paragraph or two plus bullet lists (languages, projects, courses, links). A long résumé-style README is optional later; Boot.dev and similar courses expect brevity first.

**Source of truth for facts:** [`../story-index.md`](../story-index.md) → [`../context.md`](../context.md) → leaf documents. Never invent metrics, dates, or scope.

**Known URLs** (verify before linking):

- GitHub: `github.com/bradguillen15`
- Profile README repo: `github.com/bradguillen15/bradguillen15`
- Portfolio: [bradguillen.com](https://bradguillen.com/)
- LinkedIn: `linkedin.com/in/brad-guillen-89794ba8`
- Boot.dev: [boot.dev/u/bradgg](https://www.boot.dev/u/bradgg)

---

## Target Audience

### Primary

- **Engineering Managers** — evaluating code quality, project maturity, and ownership before interviews
- **Senior Recruiters** — confirming the résumé matches public work
- **Technical Leads** — skimming architecture choices in READMEs and repo structure

### Secondary

- **Open-source collaborators** — side projects and future contributions
- **Peers** — referrals, networking
- **Future self** — portfolio of learning and shipping

**Write for engineers first.** Badges and stats are fine as visual anchors; substance lives in project descriptions and repo READMEs.

---

## Profile Metadata (Settings)

GitHub profile metadata is checked **before** anyone scrolls the README. Fill every field—empty profiles look like bots or inactive accounts.

### Checklist

| Field | Requirement | Recommended value |
|-------|-------------|-------------------|
| **Profile picture** | Real photo preferred | Face shot, approachable expression—not default avatar, not NFT |
| **Name** | Match résumé | **Brad Guillen** |
| **Bio** | Short, technical, unique | See [Bio patterns](#bio-patterns) — max **160 characters** |
| **Location** | Accurate | **Costa Rica** |
| **Website** | Live portfolio | `https://bradguillen.com` |
| **Social** | Optional | LinkedIn URL if using GitHub social links |

### Bio patterns (pick one; adapt)

**Balanced (default):**

> Senior Software Engineer · React & TypeScript · simplifying complex systems · AI-assisted engineering

**Full Stack emphasis:**

> Senior Software Engineer · React · Node.js · AWS · architecture & ownership · Costa Rica

**AI Software Engineer emphasis:**

> Senior Software Engineer · production systems · Claude API & MCP · React · full stack

### Bio should imply

Excellent engineer who **improves systems**—not someone defined by a single framework.

→ [`../strengths.md`](../strengths.md#summary)

### What metadata should be accurate (June 2026)

- **Not** "Currently at Keller Williams" — employment ended **April 2026** ([`../context.md`](../context.md#career-direction))
- **~10 years** professional experience—not "8+" unless intentionally rounding down
- Title framing: **Senior Software Engineer** first—not "Senior Web Developer" as primary identity ([`../strengths.md`](../strengths.md#engineering-identity))

---

## Profile README

### Repository setup

1. Create (or use) repo named **`bradguillen15`** — same as username
2. Set visibility **Public**
3. Add **`README.md`** at repo root — GitHub renders it on the profile
4. Maintain content in [`github-profile-readme.md`](github-profile-readme.md); paste updates into the live repo when strategy changes

### Structure (recommended order)

1. **Header** — name/title, one-line identity, location, contact badges
2. **Optional stats** — `github-readme-stats` top languages (keep compact; dark theme matches portfolio)
3. **Tech stack** — skill icons grouped by category (languages, frameworks, styling, data, DevOps)
4. **Experience** — 3 roles, achievement bullets, tech tags—not job descriptions
5. **Projects** — 3–4 strongest repos with links, status badges, engineering-focused blurbs
6. **Certifications** — verifiable links only ([`../learning/2026.md`](../learning/2026.md))
7. **Currently** — learning, building, availability
8. **Footer** — languages spoken

### Tone and content rules

- **Achievement-oriented** bullets—same themes as LinkedIn ([`linkedin.md`](linkedin.md#experience)) but shorter
- **Honest scope** — KW: senior **IC**, owned 3 of ~40 MFE apps; Advision leadership = **Lead Web Developer** (~11 months), not 3 years as team lead
- **Live URLs** — portfolio is [bradguillen.com](https://bradguillen.com/); Free Slot is [free-slot-blush.vercel.app](https://free-slot-blush.vercel.app/)
- **No fabricated metrics** — dashboard ~35%+, Redux ~40% boilerplate are documented ([`../stories/dashboard-performance.md`](../stories/dashboard-performance.md), [`../stories/redux-removal.md`](../stories/redux-removal.md))
- **AI positioning** — application-layer engineering (Claude API, MCP coursework, RAG in projects)—not ML research ([`../philosophy/working-with-ai.md`](../philosophy/working-with-ai.md))
- **Availability** — open to full-time remote, contracts, consulting; **available immediately** when job searching per [`../context.md`](../context.md)

### What the README should not be

- A duplicate of the full résumé
- "Currently at Keller Williams" when between roles
- Primary identity as "React Developer" or "Prompt Engineer"
- Certificate wall with no project links
- Broken badge URLs or dead live links

---

## Pinned Repositories

Pin **up to 6** repositories that best demonstrate engineering maturity. Order matters—first pins get the most attention.

**GitHub has no API for pinning** — update pins manually: [github.com/bradguillen15](https://github.com/bradguillen15) → **Customize your pins** → drag to reorder → Save.

### Recommended pins (June 2026)

| Order | Repo | Why pin |
|-------|------|---------|
| 1 | [`resume`](https://github.com/bradguillen15/resume) | Live portfolio · Firebase · CI/CD · long-term ownership |
| 2 | [`free-slot`](https://github.com/bradguillen15/free-slot) | Full-stack production app · testing · Supabase · AI workflow |
| 3 | [`rag-search-engine`](https://github.com/bradguillen15/rag-search-engine) | Boot.dev RAG guided project · hybrid search · Gemini RAG pipeline |
| 4 | [`plan-estrategico-drea`](https://github.com/bradguillen15/plan-estrategico-drea) | Shipped product for real users · Firebase · domain complexity |

**Optional 5th pin (when Sentiment ships more):** [`futures-crypto`](https://github.com/bradguillen15/futures-crypto)

**Do not pin:** Empty repos, Boot.dev starter forks without meaningful work, private employer code, tutorial clones you aren't proud of. **4 strong pins beats 6 mediocre ones.**

**Each pinned repo should have:**

- A clear **`README.md`** — what it is, stack, how to run, live link if deployed
- Sensible **description** (GitHub repo About field, ~350 chars)
- **Topics/tags** where relevant (`react`, `typescript`, `supabase`, etc.)

---

## Repository Descriptions & READMEs

Profile README points to projects; **project READMEs close the loop** when a hiring manager clicks through.

| Repo | Description should answer |
|------|---------------------------|
| **resume** | What engineering problems? CI/CD? Firebase architecture? → [`../projects/portfolio.md`](../projects/portfolio.md) |
| **free-slot** | Architecture boundaries, testing strategy, Supabase abstraction → [`../projects/free-slot.md`](../projects/free-slot.md) |
| **plan-estrategico-drea** | Domain, roles, audit trail, export—real product constraints |
| **futures-crypto** | Honest WIP status; Claude API integration; what works today |

---

## Experience Section (GitHub README)

Condensed from canonical experience—align with [`linkedin.md`](linkedin.md#experience).

### Keller Williams (~5.5 years · Senior Software Engineer) `Nov 2020 – Apr 2026`

**Emphasize:** MFE / Module Federation · repo consolidation · API migration · configurable systems · dashboard performance · Redux removal · CI/CD literacy

→ [`../experience/keller-williams.md`](../experience/keller-williams.md)

### Advision Development (~3 years) `Nov 2017 – Nov 2020`

**Two periods:** Senior Web Developer → **Lead Web Developer** (Jan–Nov 2020)

**Emphasize:** Full-stack (React + Node.js) · WordPress/CMS migration · Lambda · team lead of 4 + Scrum Master **in lead role only**

→ [`../experience/advision.md`](../experience/advision.md)

### First Factory (~1.5 years · Software Engineer) `May 2016 – Nov 2017`

**Keep brief** — Java/Spring Boot REST API, Yeoman generator, early multi-stack breadth.

→ [`../experience/first-factory.md`](../experience/first-factory.md)

---

## Projects Section (GitHub README)

| Project | Live URL | Status | Source |
|---------|----------|--------|--------|
| Portfolio | [bradguillen.com](https://bradguillen.com/) | Live | [`../projects/portfolio.md`](../projects/portfolio.md) |
| Free Slot | [free-slot-blush.vercel.app](https://free-slot-blush.vercel.app/) | Nearly complete | [`../projects/free-slot.md`](../projects/free-slot.md) |
| Plan Estratégico DREA | — | Shipped | repo README |
| Sentiment (futures-crypto) | — | In development | repo README |

**Project blurbs should answer:** What problem? What architectural decisions matter? What does this show about how I work?

---

## Certifications

List only **verifiable** credentials with links. Primary source: [`../learning/2026.md`](../learning/2026.md).

**Anthropic (Skilljar):** Claude API · MCP intro · MCP advanced · Agent skills

**Boot.dev:** AWS · Docker · CI/CD · (path in progress—link profile, don't overclaim "backend expert")

Certificates support the narrative; **projects are primary proof**.

---

## Visual / Badge Guidelines

- **Dark theme** for stats widgets — matches portfolio aesthetic (`bg_color=0d1117`, accent `64ffda`)
- **skillicons.dev** — grouped rows; don't list every technology ever touched
- **for-the-badge** — contact links (LinkedIn, portfolio, email)
- Avoid clutter: 3–4 stat widgets max; profile README is not a dashboard

---

## What To Avoid

| Avoid | Why |
|-------|-----|
| Default avatar | Signals inactive or bot account |
| Empty bio / no location | Recruiters filter on location; empty fields look unfinished |
| "Currently at" wrong employer | Factual error—undermines trust |
| Inflated titles or team scope | Documented in [`../leadership.md`](../leadership.md) |
| ML / research claims | Not documented—AI = workflow + application layer |
| Pinning tutorial forks | No ownership signal |
| Stale live links | Use bradguillen.com, not deprecated Firebase URL as primary |
| Contradicting Career Knowledge Base | One source of truth |

→ Accuracy rules: [`../context.md`](../context.md#instructions-for-ai-assistants)

---

## Maintenance Checklist

Review every **3–4 months**, or when starting an active job search or shipping a major project.

### Profile metadata

- [ ] Photo, name, bio, location, website still accurate
- [ ] Bio reflects current status (employed vs open to work)
- [ ] Website points to [bradguillen.com](https://bradguillen.com/)

### Profile README

- [ ] [`github-profile-readme.md`](github-profile-readme.md) synced to live `bradguillen15/bradguillen15` repo
- [ ] Experience dates and employer status match [`../context.md`](../context.md)
- [ ] Project links and status badges valid
- [ ] Certifications match [`../learning/2026.md`](../learning/2026.md)

### Repositories

- [ ] Pinned repos reflect strongest current work
- [ ] Each pinned repo has a substantive README
- [ ] Repo descriptions filled in

### Career alignment

- [ ] Same narrative as [LinkedIn strategy](linkedin.md) and tailored resumes
- [ ] New wins in [`../brag-document.md`](../brag-document.md) promoted to README when significant

### When something changes

1. Update **canonical career document** first
2. Update [`github-profile-readme.md`](github-profile-readme.md)
3. Paste into live GitHub profile repo
4. Adjust bio / pins if needed

---

## How AI Assistants Should Use This File

| Task | Approach |
|------|----------|
| Draft profile README | [`github-profile-readme.md`](github-profile-readme.md) + [Experience](#experience-section-github-readme) + [Projects](#projects-section-github-readme) |
| Draft bio | [Bio patterns](#bio-patterns) + [`../context.md`](../context.md) |
| Suggest pinned repos | [Pinned Repositories](#pinned-repositories) |
| Profile audit | [Maintenance Checklist](#maintenance-checklist) |
| Fix user draft | Compare against [What metadata must be accurate](#what-metadata-must-be-accurate-june-2026) |

**Do not:** Output this entire strategy file as GitHub copy. **Do:** Generate or update [`github-profile-readme.md`](github-profile-readme.md) obeying [What To Avoid](#what-to-avoid).

---

## Related Documents

| Document | Purpose |
|----------|---------|
| [`github-profile-readme.md`](github-profile-readme.md) | Paste-ready profile README |
| [`linkedin.md`](linkedin.md) | Parallel professional presence strategy |
| [`../story-index.md`](../story-index.md) | Navigation |
| [`../context.md`](../context.md) | Identity, status, accuracy rules |
| [`../strengths.md`](../strengths.md) | Value themes |
| [`../projects/portfolio.md`](../projects/portfolio.md) | Portfolio project facts |
| [`../projects/free-slot.md`](../projects/free-slot.md) | Free Slot facts |
| [`../learning/2026.md`](../learning/2026.md) | Certifications |

---

## Maintenance

When GitHub strategy evolves:

1. Update this file—not scattered notes in chat history
2. Keep [`github-profile-readme.md`](github-profile-readme.md) as the **presentation copy**; keep strategy and pointers here
3. If live URLs change, update [Purpose](#purpose) and the README draft

This document functions as a **long-term strategy guide**; the README draft is the **deployable artifact**.
