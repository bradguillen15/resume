# Senior Frontend Interview Knowledge Base

## Purpose

This document is **not** a React cheat sheet or trivia list. It describes **how I approach frontend engineering** so future AI assistants can help prepare for **Senior Frontend** interviews.

**Optimize for:** engineering judgment, trade-offs, architecture, maintainability, seniority signals.

**Do not optimize for:** API memorization, trick questions, framework trivia without context.

**Objectives:**

- Simulate senior frontend interviews
- Generate challenging questions with trade-off focus
- Challenge my architectural decisions constructively
- Prepare system design discussions (UI scale, micro frontends, data flow)
- Explain trade-offs using documented experience
- Identify weak areas for honest study

**Rules:** Ground answers in [`../stories/`](../stories/), [`../experience/keller-williams.md`](../experience/keller-williams.md), [`../projects/free-slot.md`](../projects/free-slot.md). Never fabricate projects, metrics, or production details.

**Related:** Behavioral stories → [`behavioral.md`](behavioral.md) · General technical → [`technical.md`](technical.md)

---

## How AI Assistants Should Use This Document

1. Read [`../context.md`](../context.md)—I am a **Software Engineer** with deep frontend expertise, not a trivia candidate.
2. Use this doc for **how I think**; use story files for **what I did**.
3. When simulating interviews, ask **follow-up trade-offs** ("Why not Redux?" "When would you change this?").
4. When I undervalue impact, push back ([`../context.md`](../context.md)).
5. For topics in [Weak areas](#weak-areas), frame as **learning in progress**—do not claim expert depth.
6. Connect answers to **long-term maintainability**, not clever one-liners.

---

## My Frontend Philosophy

I don't optimize for writing React. I optimize for **maintaining React applications** that survive years of product change.

**Priorities:**

| Priority | Meaning in practice |
|----------|---------------------|
| **Maintainability** | Next developer (or AI) understands and changes code confidently |
| **Readability** | Simple beats clever; JSX describes *what* |
| **Ownership** | Long-term health of features, not ticket closure |
| **Product alignment** | Understand why before how |
| **Simple architecture** | Complexity only where the product requires it |
| **Reusable abstractions** | Only when they remove duplication or isolate change |
| **Reducing technical debt** | Incrementally, aligned with delivery |
| **Developer experience** | For the team and future self |

→ Shared principles: [`../philosophy/engineering.md`](../philosophy/engineering.md)

**Success criterion:** A senior frontend interviewer concludes—I understand how to build software that **survives years of development**, not just React components.

---

## What I Value vs. What I Avoid

### I prefer

- Small, focused components
- Reusable hooks for behavior; services for data
- **Simplest adequate** state management
- Clear responsibilities and predictable data flow
- Composition over inheritance patterns
- Business logic **outside** UI
- Feature-oriented organization where it aids navigation
- Encapsulation of libraries (Supabase, API clients)

### I avoid

- Huge components mixing fetch, transform, and render
- Duplicated logic across screens
- Premature abstractions "in case we reuse"
- Deep nested conditional rendering in JSX
- Massive prop drilling when composition or context fits
- Complex `useEffect` chains coordinating unrelated concerns
- Over-engineering for demo-quality architecture

---

## React Philosophy

**Components should primarily render UI.** Business logic belongs elsewhere.

| Concern | Where it lives |
|---------|----------------|
| UI structure and events | Components |
| Reusable behavior and state | Custom hooks |
| Fetching, API shape, persistence | Services / data layer |
| Pure transforms | Utilities |
| What to show | Component (declarative) |
| How data is loaded | Hook or service (hidden from JSX) |

The component should describe **"what"**, not **"how."**

**Documented example:** Free Slot hides Supabase behind hooks and services—components don't import the client. → [`../projects/free-slot.md`](../projects/free-slot.md)

---

## State Management

**Principle:** Choose the **simplest solution that solves the problem.**

**Typical decision order:**

1. **Local state** — default; colocate with the feature
2. **Context** — shared state with narrow, stable scope; avoid god contexts
3. **React Query** (or similar) — server state, caching, sync with backend
4. **Redux** — only when justified: complex client state, many consumers, devtools/debug needs across large surfaces

**Avoid:** Global state when local state suffices; putting server state in Redux when React Query fits.

**Production experience:** Redux and React Query at Keller Williams on large applications. → [`../experience/keller-williams.md`](../experience/keller-williams.md)

**Interview framing:** Always explain **why this feature** needs the tool—not default stack loyalty.

---

## Custom Hooks

**Create a hook when:**

- Business logic grows inside a component
- Logic needs reuse across screens
- State + effects become hard to test or read
- You want to test behavior without mounting full UI

**Hooks encapsulate behavior; components stay presentation-focused.**

**Documented pattern:** Free Slot reusable hooks; API/data access isolated from components.

**Anti-pattern:** Hooks that fetch, transform, navigate, and toast—split responsibilities.

---

## Performance

**I don't optimize everything. I optimize measured bottlenecks.**

**Workflow (documented on dashboard performance story):**

1. **Reproduce** the issue—user-visible slowness, not hypothetical
2. **Separate layers** — network vs. render vs. layout (dashboard: render was the problem)
3. **Understand render tree** — trace what re-renders and why
4. **Identify unnecessary work** — root cause, not symptoms
5. **Fix simply** — remove work before adding `memo` everywhere
6. **Validate** — team-noticeable improvement; no invented ms metrics

→ [`../stories/dashboard-performance.md`](../stories/dashboard-performance.md)

**Free Slot:** Drag-and-drop responsiveness through sensible state updates—not premature optimization. → [`../projects/free-slot.md`](../projects/free-slot.md)

**Avoid in interviews:** Listing APIs without process; optimizing before measuring; `React.memo` as default.

---

## Architecture

### I prefer

- Feature-oriented organization (when team scale warrants it)
- Reusable utilities and shared hooks
- **Service layer** for API and infrastructure
- **Encapsulation** — third-party SDKs don't leak into JSX
- **Clear boundaries** — stable internal models vs. external contracts

### I dislike

- Everything depends on everything
- Libraries imported directly in every component
- Business logic embedded in JSX
- Micro frontend complexity without team-scale justification

**Documented examples:**

| Pattern | Story / project |
|---------|-----------------|
| API compatibility layer | [`../stories/api-migration-v1-v2.md`](../stories/api-migration-v1-v2.md) |
| Configurable system vs. one-offs | [`../stories/configurable-banner-system.md`](../stories/configurable-banner-system.md) |
| Modal vs. page (UI architecture) | [`../stories/modal-vs-page-decision.md`](../stories/modal-vs-page-decision.md) |
| Micro frontend migration | [`../experience/keller-williams.md`](../experience/keller-williams.md) |
| Supabase encapsulation | [`../projects/free-slot.md`](../projects/free-slot.md) |
| Repository consolidation | [`../stories/repository-deprecation.md`](../stories/repository-deprecation.md) |

---

## API Integrations (Frontend Perspective)

**Principles:**

- **Typed** API contracts where possible
- **Transformation layers** at the boundary—not in every component
- **Compatibility adapters** when backend versions change
- **Stable frontend models** decoupled from vendor payload shapes

**Canonical example:** V1 → V2 migration—mapper immediately after fetch; consumers unchanged. → [`../stories/api-migration-v1-v2.md`](../stories/api-migration-v1-v2.md)

**Interview answer shape:** "The frontend owns an internal model. External services change; the boundary absorbs that change."

---

## Code Reviews

**Questions I ask when reviewing frontend code:**

- Is this **understandable** in one pass?
- Can this become **simpler**?
- Can we **reuse** something existing?
- Does this abstraction **actually help** or add indirection?
- Can another developer maintain this in six months?
- Could **AI-assisted tools** navigate this file structure cleanly?

**Tone:** Maintainability over cleverness—aligned with [`../philosophy/engineering.md`](../philosophy/engineering.md).

---

## AI-Generated Code (Frontend)

AI is **extremely useful** and **not trusted blindly**.

**Workflow:**

1. Generate (draft component, test, refactor suggestion)
2. **Review** — correctness, edge cases, accessibility gaps
3. **Simplify** — remove unnecessary layers AI loves to add
4. Refactor to match project patterns
5. Approve—or **reject** if complexity exceeds the feature

**Documented example:** Rejected over-engineered AI implementation for a simple Free Slot feature; shipped simpler hand-written logic. → [`../projects/free-slot.md`](../projects/free-slot.md)

**Senior signal:** "I spend more time reviewing and simplifying than typing."

---

## Refactoring

I enjoy **removing code**.

**Look for:**

- Duplication across features
- Dead code and obsolete abstractions
- Library calls scattered in components → encapsulate
- Simpler component APIs
- Architecture that fights the platform (modal simulating pages)

**Removing code is often more valuable than adding code.**

→ Repository deprecation, configurable banners, CMS migration stories

---

## Technical Debt (Frontend)

- Technical debt **can be acceptable** when intentional and business-justified
- **Understand trade-offs** when accepting it
- Pay down **gradually**, aligned with product touch points—not purity sprints
- Don't block delivery for perfection

**Example:** Continued with modal initially on cross-org search; adapted when requirements clarified—debt of wrong UI shape paid down through collaboration, not blame. → [`../stories/modal-vs-page-decision.md`](../stories/modal-vs-page-decision.md)

---

## Product Thinking (Frontend)

I don't simply complete tickets.

**Questions I ask:**

- Does this solve the **user's** problem?
- Can **UX** improve with small engineering input?
- Can **Product configure** this instead of engineering repeating work?
- Can developers **avoid repeating** the same implementation?

**Canonical story:** Configurable banner system—engineers were in the content workflow; fixed the process, not the next banner. → [`../stories/configurable-banner-system.md`](../stories/configurable-banner-system.md)

---

## Ownership (Frontend Features)

I naturally become the **owner** of features I build.

When bugs appear on owned features:

- I usually know **where to look** in the architecture
- I understand **why** decisions were made
- I can change code **confidently** without fear-driven patches

Ownership > ticket completion. Includes production behavior, CI/CD path, and future enhancements.

→ Keller Williams working style: [`../experience/keller-williams.md`](../experience/keller-williams.md)

---

## Debugging Process

**Typical workflow:**

1. Understand **expected behavior** (user, product, contract)
2. **Reproduce** reliably
3. Identify where **assumptions break** (data shape? render? routing?)
4. Read **surrounding code** and ownership boundaries
5. **Trace execution**—network, state updates, render cascade
6. Review **history** if regression (git, recent PRs)
7. Fix **root cause**—avoid superficial symptom patches

**Documented example:** Dashboard slowness—investigation before optimization. → [`../stories/dashboard-performance.md`](../stories/dashboard-performance.md)

---

## Production Experience (Frontend)

**Ground interview answers here—do not invent stack details.**

| Area | Experience |
|------|------------|
| **Scale** | ~5 years large React/TypeScript production app (Keller Williams) |
| **State** | Redux, React Query |
| **Architecture** | Micro frontend evolution; repository consolidation |
| **Integration** | Cross-team REST API migrations, compatibility layers |
| **CI/CD** | GitHub Actions, Harness, Spinnaker (production ownership) |
| **Earlier** | React at Advision; dashboard performance work |
| **Current** | React 19, TypeScript, Supabase abstraction, E2E testing (Free Slot) |

→ [`../resume/master-resume.md`](../resume/master-resume.md)

---

## Preferred Technologies

**Strong production depth (documented):**

React · TypeScript · React Query · Redux · Tailwind · Vite · Playwright · Vitest · Supabase · GitHub Actions

**Also in career:** JavaScript (Advision), Framer Motion (portfolio), Firebase (portfolio)

**Study / expanding:** See [Weak areas](#weak-areas)—do not claim expert interview answers without preparation.

---

## Frontend Stories → Interview Topics

Map documented work to senior frontend themes:

| Story | Demonstrates |
|-------|----------------|
| API migration | Stable contracts, transformation layers, cross-team integration |
| Configurable banners | Product thinking, DRY, configurable UI systems |
| Modal vs. page | UI architecture, navigation, platform-aligned design |
| Dashboard performance | Render debugging, investigation-first, React performance |
| Repository consolidation | Frontend platform simplification, DX, deployments |
| Micro frontends (KW) | Scale, team boundaries, incremental migration |
| Free Slot | Hooks/services split, Supabase encapsulation, E2E, drag-and-drop UX |

---

## Practice Topics

Use these to **generate questions and challenge answers**—not as flashcards to memorize. For each topic, AI should ask: *"How would you decide in a large codebase? What trade-offs? What did you do in production?"*

### React fundamentals (judgment, not trivia)

- Reconciliation and when it matters for performance
- Rendering lifecycle vs. **mental model** for debugging re-renders
- Composition patterns for large apps
- When `useEffect` is appropriate vs. a code smell
- Error boundaries—where they belong in app architecture

### Modern React (study areas—see weak areas)

- Server Components—when they help vs. complexity cost
- Suspense and concurrent rendering—user-facing trade-offs
- React Compiler—what problems it targets; don't claim deep production use unless documented

### State and data

- Local vs. context vs. React Query vs. Redux—**decision framework**
- Server state vs. client state separation
- Caching and invalidation strategies
- Optimistic updates—when worth the rollback complexity

### Performance

- Investigation workflow (see [Performance](#performance))
- Unnecessary renders—finding root cause
- Infinite scrolling and virtualization—when needed vs. overkill
- Bundle size and code splitting—measure first
- **Avoid:** memorizing `useMemo` rules without context

### Architecture at scale

- Feature folders vs. layer folders
- Micro frontends—team boundaries, deployment, shared design systems
- Design systems and component libraries
- Encapsulating third-party SDKs

### Testing

- Unit vs. integration vs. E2E—pyramid for frontend
- Testing hooks and services vs. snapshotting components
- Playwright against real backend (Free Slot local Supabase pattern)
- What **not** to test—implementation details, brittle snapshots

### Accessibility

- Semantic HTML and keyboard flows as baseline
- **Weak area**—be honest about depth; show willingness to learn and partner with Design/QA

### System design (frontend-heavy)

- Design a configurable notification/banner system → use banner story
- Migrate API without rewriting every screen → use API migration story
- Split a monolith frontend for multiple teams → micro frontend experience
- Build a schedule/activity UI with drag-and-drop → Free Slot patterns

---

## Mock Interview Modes

AI assistants can run:

| Mode | Focus |
|------|--------|
| **Architecture deep-dive** | One system (banners, API layer, modal vs. page)—trade-offs, alternatives |
| **Code review** | Present pseudo-code; candidate reviews for simplicity and boundaries |
| **Debugging** | Slow dashboard scenario—walk through investigation |
| **Product + engineering** | Given repeated UI work—when to build configurable system? |
| **Senior judgment** | "Why not rewrite?" "Why not Redux everywhere?" "When is micro frontend wrong?" |

Always tie feedback to principles in this document and documented stories.

---

## Weak Areas

**Continue improving—frame honestly in interviews:**

| Area | Status |
|------|--------|
| Advanced accessibility (WCAG depth, complex ARIA) | Learning; rely on semantics + collaboration |
| SSR internals | Conceptual; not primary production focus |
| React Server Components / streaming | Study; Free Slot/portfolio are client-first |
| React Compiler | Awareness; not production dependency yet |
| Performance profiling (React DevTools Profiler, browser pipeline) | Strong on investigation; deepen formal profiling |
| Browser rendering pipeline (paint, layout) | Conceptual improvement area |

**Do not bluff expert answers.** Prefer: "Here's how I'd approach learning / deciding / partnering."

Track progress: [`../learning/2026.md`](../learning/2026.md)

---

## Anti-Patterns in Interview Answers

| Avoid | Prefer |
|-------|--------|
| "I always use X" | "I choose based on scope, team, and maintainability" |
| Listing hooks APIs | Explaining debugging process |
| Claiming every React feature in production | Ground in KW, Advision, Free Slot |
| Frontend silo—ignoring API/backend | Integration stories, stable contracts |
| No trade-offs mentioned | Options considered, why chosen |
| Invented metrics | Qualitative impact + engineering reasoning |

---

## Success Criteria

After preparation using this document, a senior frontend interviewer should conclude:

> This engineer understands how to build frontend software that **survives years of development**—maintainability, boundaries, product thinking, and performance investigation—not just React component syntax.

Secondary signals:

- Owns features end-to-end including production and CI/CD literacy
- Simplifies systems and removes repetition
- Collaborates with Product/Design with evidence
- Uses AI as accelerator with review discipline
- Honest about gaps without underselling documented impact

---

## Related Documents

| Document | Purpose |
|----------|---------|
| [`../philosophy/engineering.md`](../philosophy/engineering.md) | Core engineering principles |
| [`../philosophy/architecture.md`](../philosophy/architecture.md) | Architecture philosophy (scaffold) |
| [`../stories/`](../stories/) | Concrete frontend-relevant narratives |
| [`../experience/keller-williams.md`](../experience/keller-williams.md) | Primary frontend production context |
| [`../projects/free-slot.md`](../projects/free-slot.md) | Current frontend architecture evidence |
| [`../resume/master-resume.md`](../resume/master-resume.md) | Complete career facts |
| [`behavioral.md`](behavioral.md) | STAR stories and collaboration |
| [`technical.md`](technical.md) | Broader technical interview prep |
| [`../resume/frontend.md`](../resume/frontend.md) | Frontend resume view (separate from this doc) |

---

## Maintenance

When frontend stories or projects change:

1. Update [`../stories/`](../stories/) or project docs first
2. Add mapping under [Frontend Stories → Interview Topics](#frontend-stories--interview-topics)
3. Add new practice topics if new patterns emerge (e.g., RSC in production)

When simulating interviews: **challenge trade-offs**, not recall.
