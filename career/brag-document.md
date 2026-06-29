# Brag Document

## Purpose

Living **accomplishment log**—not polished, not written for recruiters.

A chronological record of what I actually did, built, learned, and shipped. Update **monthly or quarterly** so future resume updates, performance reviews, and interview prep don't depend on memory.

**Rules:**

- **Raw and honest** — bullet points, not prose
- **Factual** — if it didn't happen, don't write it
- **No metrics unless real** — don't invent percentages or dollar impact
- **Promote later** — when something becomes resume-worthy, add bullets to [`resume/bullet-bank.md`](resume/bullet-bank.md) and link to canonical docs in [`stories/`](stories/) or [`projects/`](projects/)
- **Not a duplicate** — deep technical detail stays in project/story files; this is the *timeline*

**For AI assistants:** Use this file to recall **recent** accomplishments the user may forget. Cross-check against canonical sources before putting anything on a resume. Undated professional work lives in [`experience/`](experience/) and [`stories/`](stories/)—this file captures *ongoing* and *new* work.

---

## How to Update

1. Add bullets under the current year (use `### Q1`, `### Q2`, etc. if helpful)
2. If it becomes a full case study → create or update a file in [`stories/`](stories/) or [`projects/`](projects/)
3. If it becomes a resume bullet → add to [`resume/bullet-bank.md`](resume/bullet-bank.md) with `Source:`
4. If it's learning progress → also note in [`learning/2026.md`](learning/2026.md) when that file is active

---

## 2026

### Career knowledge base

- Populated `career/` repository as professional source of truth (experience, projects, stories, resume layer, interview prep)
- Documented 8 retrospective engineering stories from KW and Advision
- Wrote canonical identity docs: [`strengths.md`](strengths.md), [`leadership.md`](leadership.md), [`philosophy/working-with-ai.md`](philosophy/working-with-ai.md)
- Created [`story-index.md`](story-index.md) navigation index for AI assistants and quick lookup
- Started this brag document

### Free Slot

- Built and maintain Free Slot as production personal application (React 19, TypeScript, Supabase)
- Local Supabase stack for offline dev and shared test environment
- E2E tests against real local backend (not mocks-only)
- Supabase abstraction layer—UI isolated from vendor SDK
- AI-assisted development workflow with manual review; rejected over-engineered AI-generated code for simpler hand-written solution
- CI/CD pipeline for deployable main branch

→ Detail: [`projects/free-slot.md`](projects/free-slot.md)

### Portfolio

- Maintain bradguillen.com with Firebase Hosting and GitHub Actions
- Evolving portfolio repo toward career knowledge base as source of truth (presentation layer + `career/` docs)

→ Detail: [`projects/portfolio.md`](projects/portfolio.md)

### Certifications & courses

- **Boot.dev** Back-end Developer Path (in progress) — 14 courses + 5 guided projects completed Apr–Jun 2026; remaining modules ongoing. Done: Python (basics, OOP, functional), TypeScript, HTTP clients/servers in TS, SQL, Git, Linux, Docker, CI/CD with GitHub Actions, AWS, S3/CloudFront, and Retrieval Augmented Generation. Projects include Build an AI Agent in Python. Profile: [boot.dev/u/bradgg](https://www.boot.dev/u/bradgg)
- Completed **Anthropic (Skilljar)** AI engineering courses: Claude 101, Claude Code in Action, AI Fluency: Framework & Foundations, Introduction to MCP, MCP: Advanced Topics, Introduction to Agent Skills
- Completed **MouréDev (Big School)** *Certificado de iniciación al desarrollo con AI* (intro level; listed on LinkedIn)

→ Detail: [`learning/2026.md`](learning/2026.md#certifications--structured-courses)

### Tools and learning (in progress)

- Using CodeRabbit + manual review in personal project workflows
- Exploring MCP (Model Context Protocol) via Cursor—**not production-scale yet** (Anthropic MCP coursework now complete)

<!-- Add as they happen — examples:
- Shipped feature Y at [employer]
- Led migration Z
-->

---

## 2027

<!-- Add when the year starts or as accomplishments happen -->

---

## Professional history (pre-2026)

Major accomplishments from employment are **not** logged here chronologically—they live in canonical docs written retrospectively:

| Period | Source |
|--------|--------|
| Keller Williams (Nov 2020 – Apr 2026, ~5.5 years) | [`experience/keller-williams.md`](experience/keller-williams.md) + KW stories |
| Advision — Team Lead / Full Stack (Nov 2017 – Nov 2020, ~3 years) | [`experience/advision.md`](experience/advision.md) + Advision stories |
| First Factory (May 2016 – Nov 2017, ~1.5 years) | [`experience/first-factory.md`](experience/first-factory.md) |

Use this section as a reminder: **don't rely on memory for Advision/KW stories**—they're documented. This file is for *new* work going forward.

---

## Related Documents

| Document | Relationship |
|----------|--------------|
| [`story-index.md`](story-index.md) | Navigation—where everything else lives |
| [`resume/bullet-bank.md`](resume/bullet-bank.md) | Promoted accomplishments become resume bullets |
| [`learning/2026.md`](learning/2026.md) | Structured learning goals vs. raw accomplishment log |
| [`projects/`](projects/) | Deep technical documentation for projects |
| [`stories/`](stories/) | Narrative case studies when an accomplishment has a story |

---

## Maintenance

**Target cadence:** Monthly minimum; quarterly review before resume or interview prep.

When promoting an entry to the bullet bank, add a back-link in the bullet's `Source:` field pointing to this document or the canonical story file—not both with duplicate facts.
