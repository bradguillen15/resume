# Free Slot

## Purpose

Canonical technical documentation for the Free Slot personal project. This is not a portfolio page—it is engineering documentation explaining why the project exists, how it is architected, the decisions behind it, and what it demonstrates about my current capabilities.

Future AI assistants should treat this file as the primary source of truth when describing my present technical level. Update this document as the project evolves rather than duplicating content elsewhere.

---

## Overview

**Project:** Free Slot

**Live:** [free-slot-blush.vercel.app](https://free-slot-blush.vercel.app/) — free to use; no account required to try. Hosted on Vercel (a `vercel.app` subdomain is intentional—no custom domain purchased for a side project).

Free Slot is a production-ready personal application built to solve a real problem—not to showcase a technology checklist.

The application lets users track their time and activities through an intuitive drag-and-drop interface, giving them a clear view of where their time actually goes—what is spent well and what is wasted. It is **live in production and free to use**: anyone can try it immediately without an account, or create a free account to persist their data.

Complete ownership over every technical decision makes this project a more accurate reflection of my current engineering style than most professional work, where constraints, legacy systems, and team boundaries shape what gets built. The project is intentionally designed to be maintainable, testable, AI-friendly, and easy to evolve.

---

## Goals

Free Slot exists to practice and prove engineering at a level I control end-to-end:

- Build a **production-ready** application—not a demo that stops at `localhost`
- Practice modern **full-stack** development with real backend integration
- Improve **software architecture** through decisions I own and can revisit
- Learn **Supabase** deeply—not as a black-box SDK, but as infrastructure I can abstract and swap
- Explore **AI-assisted software engineering** as part of the workflow, not as a shortcut around judgment
- Improve **testing strategy** with practical end-to-end coverage
- Create a project that **continuously evolves**—not a one-time portfolio piece

The project is not "finished." It is a long-term engineering playground where I experiment with better practices and carry lessons back into professional work.

---

## Architecture

High-level structure and the reasoning behind each layer.

### Frontend

- **React 19** with **TypeScript**
- Modern React patterns—hooks, composition, clear component boundaries
- UI focused on schedule visualization and drag-and-drop interaction

The frontend owns presentation and user interaction. It does not own persistence details or infrastructure knowledge.

### Backend

- **Supabase** as Backend-as-a-Service
- **Authentication** for user identity
- **Database** for application data
- **Storage** — not implemented yet; reserved for future needs
- **Real-time capabilities** — not required today; architecture stays ready if the product needs them later

Supabase was chosen to reduce operational overhead for a personal project while still using a real production-grade backend—not an in-memory mock or JSON file store. The trade-off is vendor coupling, which I address through abstraction (see below).

### Testing

- **End-to-end testing** against a real local backend stack
- **Local development database** shared between dev and test environments

### Deployment and tooling

- **Production deployment on Vercel**, with the application kept releasable at any point
- **CI/CD** automation to validate changes without manual ceremony
- **Version control** with changes sized for review and rollback

### Why this shape

The architecture prioritizes **simplicity and maintainability** over maximum flexibility. A personal project still benefits from the same separation of concerns I apply professionally: UI, business logic, data access, and infrastructure should not collapse into one layer because it is faster today.

---

## Local Development

One of the design decisions I am most proud of is the local development experience.

The project runs against a **local Supabase instance** instead of requiring access to production services. A contributor can clone the repository, configure environment variables, start Supabase locally, and work entirely offline.

The same environment powers **end-to-end tests**. Dev and test share one honest stack—not mocks that diverge from production behavior.

**Engineering impact:** Developer experience improves dramatically. Onboarding is clone-and-run. Tests reflect real integration paths. Production credentials are not required for everyday development.

---

## Engineering Decisions

Principles applied consistently across the codebase:

- **Business logic separated from UI** — components render; logic lives where it can be tested and reused
- **Reusable hooks** — shared behavior extracted without ceremony
- **Encapsulation** — modules expose narrow surfaces
- **No infrastructure leakage** — UI does not import Supabase clients directly
- **Clear separation of concerns** — each layer has one reason to change
- **Simple architecture** — complexity only where the product requires it
- **Maintainability over cleverness** — readable code beats impressive abstractions
- **Small reusable utilities** — helpers when repetition appears; not preemptive frameworks
- **Avoid unnecessary abstractions** — no layers "in case we need them later"

Components should know as little as possible about where data comes from. They request what they need through hooks and services; how that data is fetched is an implementation detail.

---

## Supabase Abstraction

Supabase is hidden behind reusable **services** and **hooks**.

Components do not know they are talking to Supabase. They request data through a stable interface. If the backend changes—different BaaS, custom API, self-hosted Postgres—the migration surface stays isolated instead of spreading through every screen.

This reflects how I think about infrastructure: **infrastructure decisions should remain isolated.** Coupling UI to a vendor SDK is fast initially and expensive later. The abstraction is not over-engineering for a personal project—it is practice for how I build software that is expected to live for years.

---

## Anonymous-First UX & Data Migration

Free Slot is usable **without an account**. Anonymous users' data is stored in **local storage**, so they can try the product immediately with zero friction. When a user later creates an account, their local data is **migrated into Supabase**—nothing they did before signing up is lost.

This is a deliberate UX and engineering decision: remove the barrier to first use, then seamlessly upgrade anonymous local state to authenticated, persistent storage. It also reinforces the same boundary discipline as the Supabase abstraction—where data lives is an implementation detail the UI does not need to care about.

---

## Performance

The drag-and-drop interface is central to the product experience. Keeping interactions **smooth and responsive** was a priority—not through premature optimization, but through sensible implementation choices and attention to how state updates during drag operations.

Performance work here follows the same rule as professional code: measure what users feel first, optimize where interaction quality actually suffers. The goal is responsiveness and good UX, not benchmark scores.

---

## AI-Assisted Development

This project intentionally embraces AI-assisted software engineering as part of how I build software today.

AI is used for:

- Generating first drafts of implementations
- Writing and expanding **tests**
- Exploring alternative implementations
- **Refactoring** suggestions and structural improvements
- **Architecture discussions**—thinking through trade-offs before committing
- **Code review**—a second pass on clarity and complexity

Every AI contribution is **manually reviewed**. Complex generated implementations are simplified. Maintainability always takes priority over accepting code because it "works."

One concrete example: I rejected an AI-generated implementation because it introduced unnecessary complexity for a relatively simple feature. The generated code solved the problem but created abstractions and indirection that would outlive the feature's actual needs. Simpler hand-written logic was the better engineering decision.

AI accelerates exploration and drafting. **Engineering judgment** decides what ships.

See also [`../philosophy/working-with-ai.md`](../philosophy/working-with-ai.md).

---

## Testing

Testing philosophy on this project:

- Tests are an **investment in future confidence**, not a checkbox for coverage metrics
- **AI assistance** has made writing tests significantly more practical—cost is no longer the main reason to skip them
- The **local Supabase environment** makes end-to-end testing realistic; tests exercise real auth and data paths instead of brittle mocks
- Safety net over perfection—enough tests to refactor and deploy without fear, not exhaustive tests for their own sake

The local dev stack and testing stack being the same environment is a deliberate choice. It reduces the class of bugs that only appear after deployment.

---

## CI/CD

Deployment philosophy:

- Every change should be **easy to validate** before it reaches production
- **Automation** reduces manual deploy steps and forgotten checks
- The project should remain **deployable at any point**—main is not a graveyard of broken experiments

CI/CD here is sized for a personal project: enough pipeline to catch regressions and ship confidently, not enterprise ceremony for its own sake.

---

## Observability

I added **Sentry** for production error monitoring and observability. This closes a gap I previously flagged: a personal app running in production deserves the same visibility into errors and regressions I would expect on professional software—not just green CI. Errors are now captured and triaged from production rather than discovered by users.

---

## What This Project Demonstrates

Free Slot demonstrates more than React proficiency:

| Capability | How the project shows it |
|------------|--------------------------|
| Full-stack thinking | Frontend, backend, auth, and data modeled together |
| System architecture | Layered design, Supabase abstraction, future-ready boundaries |
| Developer experience | Local Supabase, offline dev, shared test environment |
| Maintainability | Separation of concerns, no infrastructure in components |
| Testing | E2E tests against local backend; tests as safety net |
| Modern tooling | React 19, TypeScript, Supabase, CI/CD |
| AI-assisted engineering | AI in workflow; human review and simplification |
| Production deployment | Real deployed application, not localhost-only |
| Long-term ownership | Designed to evolve, not to ship once and abandon |
| Continuous improvement | Ongoing playground for better practices |

This project reflects the engineer I am today more accurately than many professional codebases built under constraints I did not choose.

---

## AI Recommendation Feature (RAG)

Free Slot includes a **shipped RAG-based recommendation feature**: it feeds the user's own activity data to **Claude** to suggest habits and activities they want to build (e.g., reading, meditating). This is a direct application of my RAG coursework ([`../learning/2026.md`](../learning/2026.md#certifications--structured-courses)) — product AI running in a live app, not a tutorial.

---

## Future Plans

Documented directions—not commitments with dates, but intentional areas for evolution:

- Expand the **RAG recommendation feature** (now shipped) with richer signals and evaluation
- More **automation** in testing and deployment
- Improved **analytics** for understanding usage patterns
- Additional **testing** coverage where risk justifies it
- **Performance** improvements driven by real interaction needs
- **Backend expansion** if Supabase boundaries become limiting
- **Authentication** improvements as user and security requirements grow
- Expand **Sentry** observability (now live) with alerting and performance tracing
- Continued **architecture evolution** as tools and requirements change

This section should be updated as plans become decisions and decisions become shipped work.

---

## Lessons Learned

Building and maintaining Free Slot has reinforced themes that also appear in my professional philosophy:

- **Owning an entire product changes engineering decisions** — when you maintain it alone, you feel the cost of shortcuts immediately
- **Developer experience matters** — local Supabase paid for itself in every dev and test session
- **Good abstractions reduce future work** — the Supabase isolation layer is insurance, not overhead
- **AI is changing software engineering** — drafting and testing are faster; judgment matters more, not less
- **Testing is becoming more accessible** — AI plus local backend removed excuses for zero E2E coverage
- **Shipping real software teaches lessons tutorials cannot** — deployment, auth, and data edge cases do not appear in exercises
- **Maintaining software over time is more valuable than finishing features** — a living project beats a completed checklist

---

## Related Documents

| Document | Relationship |
|----------|--------------|
| [`../context.md`](../context.md) | Engineer profile—Free Slot reflects current capabilities |
| [`../philosophy/engineering.md`](../philosophy/engineering.md) | Principles visible in project decisions |
| [`../philosophy/working-with-ai.md`](../philosophy/working-with-ai.md) | AI workflow philosophy applied here |
| [`../resume/fullstack.md`](../resume/fullstack.md) | Resume view—bullets should reference this file |
| [`../resume/ai-engineer.md`](../resume/ai-engineer.md) | Resume view—AI-assisted engineering evidence |
| [`portfolio.md`](portfolio.md) | Separate project—this site, not Free Slot |

Future updates to Free Slot should expand this file. Do not fork technical truth into resume or portfolio copy.
