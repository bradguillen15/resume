# Career Repository

## Purpose

This directory is the canonical source of truth for my software engineering career. It is documentation—not a resume, not recruiter-facing copy. Generated artifacts (resumes, cover letters, LinkedIn summaries, interview answers) are views derived from the material stored here.

## How to use this repository

- **Humans:** Read [`story-index.md`](story-index.md) for navigation, then [`context.md`](context.md) for identity. Drill into `experience/`, `projects/`, and `stories/` as needed.
- **AI assistants:** Read [`story-index.md`](story-index.md) **first**, then [`context.md`](context.md). Treat this tree as structured context. Prefer referencing source files over duplicating content.

## Structure

| File / directory | Responsibility |
|------------------|----------------|
| `story-index.md` | **Navigation index—read first** (AI assistants and quick lookup) |
| `context.md` | Engineer profile—identity and career direction |
| `strengths.md` | Canonical strengths—value beyond technologies |
| `leadership.md` | Senior SWE leadership style—influence without management title |
| `brag-document.md` | Living accomplishment log—raw timeline, update monthly/quarterly |
| `experience/` | One file per employer; role history and ownership |
| `projects/` | Standalone or cross-employer work with clear scope |
| `stories/` | Narrative engineering stories (decisions, trade-offs, impact) |
| `philosophy/` | How I think about engineering, architecture, and AI (`working-with-ai.md` is canonical for AI) |
| `resume/` | Curated bullet banks and role-specific resume views |
| `interviews/` | Interview prep organized by category |
| `learning/` | Yearly learning goals and progress |
| `job-board.md` | Job boards and search strategy for the active search |
| `target-companies.md` | Specific companies to apply to directly |
| `recommendations/` | Platform-specific content (LinkedIn, GitHub, Drive resume) |
| `templates/` | Schemas for adding new entries without restructuring |

## Principles

- Single responsibility per file.
- No duplicated information—link across files instead.
- Optimize for accuracy, engineering impact, and maintainability—not ATS.
- Documents should evolve independently; new jobs and stories should not require rewriting existing files.

## TODO

- [x] Populate `context.md`
- [x] Fill experience, project, and story documents
- [x] Establish cross-references between related files
- [x] Define a workflow for generating resume views (`resume/fullstack-version.md` spec + `scripts/resume_data.py` exports)
- [ ] Populate `interviews/technical.md` (currently a scaffold)
- [ ] Expand `philosophy/architecture.md` (in progress)
