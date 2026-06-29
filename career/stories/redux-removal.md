# Data Layer Migration — Removing Redux

## Purpose

Engineering case study on leading a state-management (data layer) migration at Keller Williams—removing Redux in favor of a more maintainable, less boilerplate-heavy approach. Demonstrates architecture judgment, simplification, and reducing long-term maintenance cost on a large production codebase.

Facts live here; resume bullets and interview answers reference this file—they do not duplicate it.

**Employer:** Keller Williams — see [`../experience/keller-williams.md`](../experience/keller-williams.md) for role context.

---

## Context

The application relied on **Redux** for state management. As the codebase and team grew, the Redux layer carried significant **boilerplate**—actions, reducers, types, and wiring—for behavior that increasingly didn't justify that ceremony. Server state and simpler local state were being forced through a heavyweight global store.

---

## Problem

Redux added friction disproportionate to its value in much of the app:

- Every small piece of state required substantial boilerplate to add and maintain
- The indirection made features harder to read and onboard into
- Server-state concerns were tangled into global store logic instead of being handled by a tool built for them

The cost wasn't a bug—it was **ongoing maintenance drag** and reduced clarity across the data layer.

---

## Solution

I **led a migration of the data layer off Redux** toward a more maintainable and performant approach—leaning on lighter state patterns and React Query for server state (already part of the stack) instead of a global Redux store for everything.

The migration was **incremental**, aligned with ongoing delivery rather than a stop-the-world rewrite—consistent with how I approach large changes on production systems (see [`api-migration-v1-v2.md`](api-migration-v1-v2.md) and [`repository-deprecation.md`](repository-deprecation.md)).

---

## Results

- **~40% reduction in boilerplate** (figure recorded on a prior resume) for the affected state management code
- More **maintainable and performant** data layer—less indirection, clearer feature code, easier onboarding
- Server state handled by purpose-built tooling rather than hand-rolled global store logic

Use the documented **~40%** figure; do not invent additional metrics.

---

## Engineering Principles Demonstrated

- **Simplification over ceremony** — remove boilerplate that doesn't earn its keep
- **Right tool for the job** — server state belongs in a server-state library, not a global store
- **Incremental migration** — reduce risk on a large production codebase
- **Maintainability and DX** — optimize for the next engineer reading the code

→ [`../philosophy/engineering.md`](../philosophy/engineering.md)

---

## Interview Applications

- Tell me about a significant refactor or migration
- Tell me about reducing technical debt
- Tell me about an architecture decision you led
- Tell me about simplifying a complex system

**Suggested framing:** Led a data-layer migration off Redux, cut ~40% of boilerplate, and improved maintainability—incrementally, without halting delivery. Pair with the simplification theme that recurs across repository consolidation and the API compatibility layer.

---

## Resume Bullet Extraction

- Led a data layer migration that removed Redux in favor of a more maintainable, performant state-management approach, reducing boilerplate by ~40%.
- Reduced state-management complexity and improved developer experience by replacing a heavyweight global store with lighter patterns and React Query for server state.

---

## Related Documents

| Document | Relationship |
|----------|--------------|
| [`../experience/keller-williams.md`](../experience/keller-williams.md) | Employer context—large-scale React ownership |
| [`api-migration-v1-v2.md`](api-migration-v1-v2.md) | Related incremental-migration / isolation pattern |
| [`repository-deprecation.md`](repository-deprecation.md) | Related simplification / removing complexity story |
| [`../philosophy/engineering.md`](../philosophy/engineering.md) | Simplicity, maintainability, removing work |
| [`../resume/bullet-bank.md`](../resume/bullet-bank.md) | Curated bullets reference this story |
