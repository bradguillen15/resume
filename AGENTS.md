---
description: Development rules and guidelines for this project, applicable to all AI agents (Claude, Cursor, Codex, Gemini, etc.).
alwaysApply: true
---

## 1. Core Principles

- **Small tasks, one at a time**: Work in focused, incremental changes rather than large, sweeping edits.
- **Type Safety**: All TypeScript code must be fully typed; avoid `any`.
- **Clear Naming**: Use clear, descriptive names for all variables and functions.
- **Minimal Comments**: Do not write comments by default. Add one only when it explains something the code cannot (non-obvious rationale, an edge case, a gotcha). Never restate what the code does.
- **No em dashes in resume output**: Never use em dashes (—) in resume content (generated PDFs/DOCX, `scripts/resume_data.py`, site copy) or other outward-facing text. Use commas, colons, or parentheses instead. En dashes are fine in date ranges. Internal docs under `career/` are exempt; do not sweep them.

## 2. Project Structure

This repo has two content sources that must stay in sync:

- `career/` — canonical source of truth for resume/portfolio content (stories, philosophy, resume markdown). Edit here first.
- `scripts/resume_data.py` — Python data structures consumed by `scripts/generate_resume.py` (PDF) and `scripts/generate_resume_docx.py` (DOCX). Mirror changes from `career/` into this file, then regenerate:
  - `python3 scripts/generate_resume.py` → `public/Brad Guillen - Senior Software Engineer.pdf`
  - `python3 scripts/generate_resume_docx.py` → `exports/*.docx`
  - `python3 scripts/export_for_drive.py` → `exports/*.docx` + `exports/*.pdf` + `public/*.pdf`
- `src/` — React + Vite + TypeScript portfolio site, deployed to Firebase Hosting.

## 3. Honesty in Resume Content

Never invent metrics, numbers, or achievements. Leave a fact blank/unconfirmed rather than guessing, and flag anything that looks unverified before publishing.

## 4. Verification

Before committing, run `pnpm verify:fast` (lint + typecheck + test). Before pushing, `pnpm verify` (adds a production build) runs automatically via the pre-push hook. Bypass either with `--no-verify` only for exceptional cases.
