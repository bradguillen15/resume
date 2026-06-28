# Personal Portfolio

## Purpose

Canonical documentation for the personal portfolio repository—not the marketing copy visitors see on the site. This project is a long-term software product: a presentation layer plus an evolving career knowledge base.

Future AI assistants should understand that the portfolio is much more than a website. It is becoming the central platform for professional identity, engineering experiments, AI workflows, and career documentation. Update this file as the repository grows; it is expected to become one of the central documents in the knowledge base.

**Live site:** [bradguillen.com](https://bradguillen.com/)

---

## Overview

**Project:** Personal Portfolio

Originally this repository existed simply to present a resume online. Over time it evolved into something larger—a product I maintain, deploy, and extend rather than a static page I update once a year.

The long-term vision is to make this repository the **canonical source of truth** for my professional career. Instead of manually updating resumes, LinkedIn, portfolio pages, and interview notes independently, everything should originate from structured documentation inside the repository.

The **website becomes the presentation layer.** The **`career/` documentation becomes the source of truth.**

That convergence is in progress. Today, the React application still carries resume content in `src/data/` while the `career/` tree is being populated as the knowledge layer. The engineering goal is to consume documentation rather than duplicate it—not to pretend the migration is complete before it is.

---

## Vision

The project is evolving toward an **engineering knowledge base**.

Rather than treating career information as static documents scattered across formats, I want to manage it like software: versioned, linked, single-responsibility files that evolve independently.

Every accomplishment, project, interview story, recommendation, and engineering principle should exist as maintainable documentation. Future AI assistants should read this repository and generate:

- Resumes
- Cover letters
- Portfolio updates
- LinkedIn summaries
- Interview answers
- Performance reviews

—without requiring me to repeatedly re-explain my career in every new conversation.

The portfolio site is one **view** of that knowledge—not the place where facts live.

---

## Repository Philosophy

This repository should follow the same principles as a production software project:

- **Single source of truth** — facts live in one place; derived artifacts link back
- **Separation of concerns** — presentation, knowledge, backend, and deployment are distinct layers
- **Minimal duplication** — the same bullet should not exist in five files
- **Maintainability** — small files, clear ownership, templates for growth
- **Documentation first** — career material written for accuracy and engineering impact, not ATS
- **Incremental improvements** — migrate and automate gradually; no big-bang rewrite
- **Version control** — career history changes are tracked like code changes
- **Long-term evolution** — new jobs and stories append; existing docs stay stable

These mirror how I think about professional codebases. The portfolio is practice for that mindset applied to career data.

---

## Career Knowledge Base

The [`career/`](../) folder is the **knowledge layer** of the project.

It contains structured documentation—not recruiter copy:

| Area | Location | Responsibility |
|------|----------|----------------|
| Navigation index | [`story-index.md`](../story-index.md) | **Read first**—map to all career documents |
| Engineer profile | [`context.md`](../context.md) | Who I am; identity and AI rules |
| Philosophy | [`philosophy/`](../philosophy/) | How I make engineering decisions |
| Experience | [`experience/`](../experience/) | One file per employer |
| Projects | [`projects/`](../projects/) | Standalone work (this file, Free Slot, etc.) |
| Stories | [`stories/`](../stories/) | Narrative engineering accomplishments |
| Resume views | [`resume/`](../resume/) | Curated bullets and role-specific selections |
| Interviews | [`interviews/`](../interviews/) | Behavioral, technical, leadership prep |
| Learning | [`learning/`](../learning/) | Yearly goals and progress |
| Recommendations | [`recommendations/`](../recommendations/) | Platform-specific pointers (e.g. LinkedIn) |
| Templates | [`templates/`](../templates/) | Schemas for adding entries without restructuring |

The React application **should consume this information** rather than duplicate it whenever possible. Until that pipeline exists, both layers coexist honestly—documentation leads, the site catches up.

See [`../README.md`](../README.md) for navigation and principles governing the knowledge layer.

---

## AI Integration

One goal of the repository is making it **AI-native**.

Future AI assistants should understand my engineering career by reading structured documentation instead of requiring repeated prompts with partial context. The repository should provide enough material for AI to:

- Generate and tailor resumes for specific positions
- Answer interview questions with concrete stories and accurate scope
- Write biographies and summaries without inventing metrics
- Suggest portfolio improvements based on gaps in documentation
- Identify missing experience or under-documented work
- Track long-term career growth across learning and role files
- Maintain **consistency** across all public-facing documents

AI is not the source of truth—documentation is. AI generates **views** from that truth, subject to the accuracy rules in [`context.md`](../context.md).

---

## Architecture

High-level layers today and where they are heading.

### Presentation layer (current)

- **React 19** application with **TypeScript** and **Vite**
- **Tailwind CSS**, **shadcn/ui**, **Framer Motion** for UI
- Sections: Hero, Experience, Projects, Skills, Contact, Reviews, and related layout
- Resume content currently in `src/data/`—migration target is `career/`

### Backend and data (current)

- **Firebase Hosting** for static deployment
- **Firestore** for visitor reviews (pending/approved workflow)
- **Cloud Functions** for contact form email, review submission, IP rate limiting
- **CI/CD** via GitHub Actions for build and deploy validation

This is a real production stack—not a static HTML export. Contact, reviews, and spam mitigation are engineering problems the project actually solves.

### Knowledge layer (evolving)

- **`career/`** — markdown documentation tree (this document lives here)
- Designed for human readability and AI consumption
- Linked files, single responsibility, no duplicated narratives

### Future possibilities (not implemented)

Documented intentionally as direction, not as shipped features:

- Generated resume pages from `career/resume/`
- Automatic project pages sourced from `career/projects/`
- Timeline generation from `career/experience/`
- Interview preparation tools over `career/interviews/` and `career/stories/`
- AI-powered search across the knowledge base
- Career analytics and gap analysis over structured docs

The architecture should stay simple until a concrete need justifies each addition.

---

## Engineering Goals

This project exists to experiment with ideas that are difficult to explore in professional environments:

- **AI-assisted development** — building and maintaining the repo with AI in the loop, under human review
- **Documentation-driven engineering** — career data as structured docs, not ad hoc copy
- **Static site generation / build-time consumption** — eventual pipeline from markdown to UI (explored when ready)
- **Developer experience** — clone, configure, deploy, and extend without friction
- **Resume automation** — one update propagates to many outputs
- **Career knowledge management** — long-lived personal infrastructure
- **Modern React architecture** — current patterns in a codebase I fully own
- **Automation and continuous deployment** — every change validated and releasable

Professional work rarely allows this kind of meta-engineering. The portfolio is where I can invest in it directly.

---

## Why This Matters

One of the biggest frustrations with traditional career maintenance is **duplication**.

The same information gets rewritten across:

- Resume
- LinkedIn
- Portfolio
- Cover letters
- Interview preparation
- Performance reviews

Each rewrite drifts. Metrics get invented. Stories get compressed until they lose nuance. Updates in one place do not reach the others.

This project attempts to solve that by creating a **single maintainable knowledge base** with generated views on top. The engineering problem is familiar: multiple consumers, one source of truth, clear boundaries. The domain happens to be a career instead of a product catalog.

---

## Future Ideas

Intentionally documented even when not implemented. The project should remain a place for experimentation.

- Automatic resume generation from `career/resume/` and `career/experience/`
- Job description analysis against documented experience
- Gap analysis—what is documented vs. what a role requires
- Interactive career timeline from experience files
- Technical blog or engineering decision journal
- Architecture diagrams linked from stories and projects
- AI-powered interview preparation over STAR stories
- Automatic STAR story drafts from `career/stories/` (human-reviewed)
- Automatic portfolio section updates when project docs change
- LinkedIn summary drafts from `career/recommendations/`
- Resume scoring or consistency checks against source docs
- ATS-oriented **views** (optional output format—not optimization of the source docs)

Not all of these will ship. Documenting them keeps the product direction honest and gives future work a backlog grounded in real intent.

---

## Lessons Learned

Building this portfolio has shifted what "portfolio" means to me:

- A portfolio is **no longer about showing technologies**—it is about demonstrating engineering thinking
- The **architecture behind the portfolio** is becoming more valuable than any single UI section
- **Documentation-first career data** scales better than rewriting copy for every audience
- **AI-native structure** pays off only if the underlying docs are accurate and linked—garbage in propagates faster
- Maintaining a live site (contact, reviews, deploy pipeline) teaches production lessons a static resume never would

This project reflects how I think software should evolve: maintainable, well documented, AI-friendly, incrementally improved, and built for long-term ownership.

---

## Related Documents

| Document | Relationship |
|----------|--------------|
| [`../context.md`](../context.md) | Canonical engineer profile |
| [`../philosophy/engineering.md`](../philosophy/engineering.md) | Principles applied to this repository |
| [`../philosophy/working-with-ai.md`](../philosophy/working-with-ai.md) | AI-native documentation and context philosophy |
| [`free-slot.md`](free-slot.md) | Separate product—personal app, not this site |
| [`../resume/`](../resume/) | Generated resume views; bullets reference source docs |
| [`../interviews/`](../interviews/) | Interview prep derived from stories and experience |
| [`../README.md`](../README.md) | Knowledge layer navigation and rules |
| [Repository README](../../README.md) | Stack, deploy, and current app structure |

This document should evolve continuously as the repository grows. When the presentation layer consumes `career/` data, update the Architecture section to reflect what actually shipped—not what was planned.
