# Keller Williams

## Purpose

Canonical record of employment at Keller Williams. Resume bullets and interview answers should reference this file—not duplicate it. Detailed narratives live in [`../stories/`](../stories/).

---

## Overview

**Role:** Senior Software Engineer

**Duration:** Approximately five years

Keller Williams is where I grew from a frontend engineer into a senior software engineer with significant ownership over critical parts of a large production application.

Although my title was frontend-focused, my work regularly extended beyond UI implementation: architectural discussions, backend API integration, CI/CD pipeline ownership, cross-team API migrations, product planning, and production support. The application was a long-lived React codebase serving real users at scale—not a greenfield prototype.

---

## Primary Responsibilities

- Built and maintained large React applications in TypeScript
- Owned critical product features end-to-end—from design collaboration through production support
- Collaborated daily with Product Managers, Designers, and Backend Engineers
- Participated in architectural decisions for the applications my team owned, including micro frontend evolution
- Maintained production quality for features under my ownership
- Supported and improved CI/CD pipelines (GitHub Actions, Harness, Spinnaker)
- Reviewed code with a focus on maintainability and clarity
- Mentored teammates on features and systems I owned deeply
- Improved codebase maintainability through refactoring, consolidation, and removing repetitive patterns

---

## Engineering Context

The team operated on a mature frontend stack centered on **React** and **TypeScript**, with **Redux** and **React Query** handling state and server data. Applications were evolving toward a **micro frontend** architecture so teams could ship and maintain independently.

Backend integration was primarily through **REST APIs** on **AWS**. Deployments ran through **CI/CD** tooling—**GitHub Actions** for automation, **Harness** and **Spinnaker** for release orchestration. **Testing** was part of the delivery process, though the emphasis varied by area of the codebase.

Understanding how code reached production was not optional. Owning a feature meant understanding its deployment path, not just its component tree.

---

## Major Engineering Contributions

High-level summaries below. Each links to a detailed story where one exists.

### Repository Consolidation

I led the deprecation of an entire repository by consolidating what had been three repositories into two.

The third repository had become a maintenance burden: duplicated concerns, extra deployment steps, and coordination overhead across teams. Rather than continuing to patch around the split, I drove consolidation so related code lived together and deployments simplified.

**Engineering impact:** Reduced maintenance cost, deployment complexity, and engineering overhead. Fewer places to change code for the same product behavior, fewer pipelines to maintain, and less cognitive load for developers onboarding into the system.

This is one of the accomplishments I am most proud of—it reflects how I think about engineering: simplifying systems instead of adding more moving parts.

→ Detailed story: [`../stories/repository-deprecation.md`](../stories/repository-deprecation.md)

### API Migration

I led the frontend side of migrating from an external team's API V1 to V2. The V2 response structure changed completely—not a field rename, a structural redesign.

Refactoring every consumer across the application would have been high-risk and slow. Instead, I introduced a transformation layer immediately after receiving the API response. The mapper normalized V2 responses into the shape the rest of the application already expected, preserving the existing interface for downstream code.

**Engineering impact:** Migration risk dropped because consumers did not need to change simultaneously. Future backend changes became easier to isolate—if the API shape shifted again, the adjustment point was one layer rather than dozens of call sites.

→ Detailed story: [`../stories/api-migration-v1-v2.md`](../stories/api-migration-v1-v2.md)

### Configurable Banner System

When I joined the project, developers regularly spent entire sprints building simple informational banners—copy changes, date ranges, audience targeting, all requiring engineering cycles for what was essentially content configuration.

I proposed a configurable banner system. Product could create and manage banners without engineering involvement. The system was reused across the application for years before eventually being deprecated when the product no longer needed it.

**Engineering impact:** Eliminated a class of repetitive sprint work. Engineering time shifted from building one-off banners to maintaining a single, well-understood system—and eventually to removing it cleanly when it was no longer needed.

→ Detailed story: [`../stories/configurable-banner-system.md`](../stories/configurable-banner-system.md)

### Modal vs Page

A new feature was initially designed as a modal. I argued it should be a dedicated page because of navigation complexity and anticipated future requirements—breadcrumbs, deep linking, back-button behavior, and room for the feature to grow.

The team proceeded with the modal initially. As development progressed, navigation requirements—including breadcrumbs—validated the concerns I had raised early. The feature was eventually implemented as a page.

**Engineering impact:** Avoided locking the product into a UI pattern that would have fought against its own requirements. The story is less about being right and more about raising product-structure concerns before implementation hardens the wrong shape.

→ Detailed story: [`../stories/modal-vs-page-decision.md`](../stories/modal-vs-page-decision.md)

### Frontend Modernization

I participated in migrating toward a **micro frontend** architecture. The goal was not novelty—it was maintainability. Large monolithic frontends become difficult to evolve when multiple teams need to ship independently without stepping on each other.

Micro frontends allowed teams to own their applications with clearer boundaries, independent deployment where appropriate, and reduced blast radius when something broke. My involvement included architectural discussions, implementation patterns, and ensuring the migration path did not destabilize production.

**Engineering impact:** Improved the team's ability to evolve applications independently without a single shared codebase becoming a bottleneck.

### CI/CD Ownership

I participated in maintaining deployment pipelines across **GitHub Actions**, **Harness**, and **Spinnaker**. This included troubleshooting failed deployments, understanding release promotion flows, and ensuring frontend changes moved through the pipeline correctly.

Understanding deployment pipelines became part of owning production software. A feature is not done when the PR merges—it is done when it is reliably releasable and observable in production.

**Engineering impact:** Reduced time lost to opaque deployment failures and improved confidence that owned features could be shipped without last-minute pipeline surprises.

---

## Working Style

I rarely limited myself to implementing assigned tickets.

While working on features I frequently:

- Discussed UX improvements with Product and Design when I saw opportunities to improve the final experience
- Proposed architectural improvements when the current approach would create maintenance cost
- Identified refactoring opportunities aligned with product priorities
- Simplified implementations that had grown more complex than the problem required
- Became the de facto owner of features I developed—answering questions, handling bugs, and planning enhancements

This matched how I prefer to work: own an area, understand it deeply, and leave it in better shape over time.

---

## Collaboration

Day-to-day work required close collaboration across disciplines:

- **Backend Engineers** — especially during API migrations, contract discussions, and debugging integration issues
- **Product Managers** — feature scoping, prioritization, and pushing back when requirements needed more product thinking
- **Designers** — UX feasibility, implementation trade-offs, and suggesting improvements during build
- **QA** — reproduction steps, edge cases, and production-quality validation
- **Cross-functional teams** — API migrations often involved teams outside my immediate group; clear communication about interface contracts and migration timelines was essential

API migrations in particular demanded coordination: agreeing on timelines, understanding breaking changes, and ensuring neither side blocked the other unnecessarily.

---

## Leadership

I was not a formal engineering manager, but ownership created informal leadership.

When I owned important features, teammates naturally came to me with questions, bug reports, and ideas for future enhancements. I had the deepest context on how those systems worked, why certain decisions were made, and where the risks lived.

That ownership extended to mentoring—helping others navigate code I had written or systems I had designed, and reviewing PRs with an eye toward long-term maintainability rather than just correctness.

---

## Lessons Learned

Keller Williams shaped how I think about software engineering at scale:

- **Large-scale engineering** — mature codebases accumulate decisions; understanding history matters before changing things
- **Balancing delivery with maintainability** — shipping matters, but so does what you leave behind
- **Cross-team communication** — especially when APIs and ownership boundaries span teams
- **Feature ownership** — the best way to earn trust is to own something completely and care about its long-term health
- **Long-term architectural thinking** — micro frontends, repository consolidation, and API abstraction layers all paid off over years, not sprints
- **Production engineering** — CI/CD literacy is part of the job, not a separate specialty
- **Product before code** — understanding why a feature exists leads to better technical decisions and sometimes better product outcomes

---

## Related Documents

| Document | Description |
|----------|-------------|
| [`../stories/api-migration-v1-v2.md`](../stories/api-migration-v1-v2.md) | V1 → V2 API migration and transformation layer |
| [`../stories/repository-deprecation.md`](../stories/repository-deprecation.md) | Repository consolidation (three → two) |
| [`../stories/configurable-banner-system.md`](../stories/configurable-banner-system.md) | Configurable banner system |
| [`../stories/modal-vs-page-decision.md`](../stories/modal-vs-page-decision.md) | Modal vs page architectural disagreement |
| [`../context.md`](../context.md) | Engineer profile and working principles |
| [`../philosophy/engineering.md`](../philosophy/engineering.md) | How these patterns reflect broader philosophy |
| [`../resume/`](../resume/) | Curated bullets derived from this file |
