# Configurable Banner System

## Purpose

Engineering case study documenting a configurable banner system designed and implemented at Keller Williams. This story demonstrates product thinking, engineering efficiency, and designing reusable systems instead of repeatedly implementing one-off solutions.

Facts live here; resume bullets and interview answers reference this file—they do not duplicate it.

**Employer:** Keller Williams — see [`../experience/keller-williams.md`](../experience/keller-williams.md) for role context.

---

## Context

While working at Keller Williams, I noticed that **informational banners** were being implemented repeatedly throughout the application. Every new banner required engineering work.

The banners were visually simple—non-interactive messages displaying information to users—but they still consumed valuable sprint capacity. I remember one sprint where another engineer spent nearly the entire sprint implementing banners that did not involve complex interaction logic.

That observation made me question whether we were solving the right problem.

The problem was not how to build banners. **The problem was that engineers had become part of the content management process.**

---

## Problem

The existing workflow required engineering involvement every time the business wanted to display a new banner.

Even small changes required:

- Engineering time to implement and review
- QA validation
- Deployment
- Release coordination

The implementation itself was not difficult. **The repeated process was.** Each banner was treated as a miniature feature project when the underlying need was content configuration.

---

## Constraints

The solution needed to:

- Support **multiple pages** across the application
- Allow **different banner configurations** (content, placement, behavior)
- Remain **simple to maintain**—no enterprise CMS inside the frontend
- **Avoid unnecessary complexity**—the domain was informational banners, not a design system rewrite
- **Fit naturally** into the existing application architecture
- Allow **future banner additions without new feature development**

Overengineering would have traded one maintenance burden for another.

---

## Observation

Instead of continuing to build individual banners, I proposed creating a **configurable banner system**.

Rather than treating every banner as a unique implementation, banners should become **data**. The application would understand:

- Where the banner appears
- What message it displays
- How it behaves (visibility rules, dismissal, etc.)

—without requiring developers to build a new component every time Product wanted to communicate something to users.

This was not assigned work. It came from noticing a pattern and proposing a better shape for the problem.

---

## Decision

I designed **reusable banner infrastructure**.

Instead of implementing individual banners, the application would render banners from **configuration**. Banner creation shifted away from engineering work and toward configuration—Product or internal tools could define what appeared without a sprint dedicated to copy on a blue bar.

The goal was not simply code reuse. **The goal was eliminating repetitive engineering work.**

I intentionally kept the design lightweight. Banners were a simple domain; the system should match that simplicity while still covering the configuration surface the business actually needed.

---

## Implementation

The system introduced a **configurable banner component** capable of rendering different informational banners across the application.

Configuration determined:

- **Location** — which pages or sections displayed the banner
- **Content** — message text and presentation
- **Visibility** — when the banner appeared or expired
- **Behavior** — how the banner interacted with the page (e.g., dismissible or persistent)

Rather than maintaining multiple independent implementations, future banner requests became configuration changes rather than new development cycles.

The implementation stayed intentionally lightweight because the problem itself was simple. Flexibility where needed; no abstraction layers "just in case."

Specific configuration format, storage mechanism, and component API details are omitted here—the pattern (data-driven rendering of a recurring UI need) is what future readers and interview answers should emphasize.

---

## Results

The configurable system remained in use for **approximately three years**.

Whenever new informational banners were needed, implementation became significantly faster than the previous one-off workflow—configuration instead of a feature branch, review, and deploy for each message.

Eventually the business **stopped relying heavily on banners**, and the system was **deprecated** because it had fulfilled its purpose. The fact that it could be removed cleanly—without leaving orphaned one-off components scattered through the codebase—was itself a positive architectural outcome.

Systems that can be retired when no longer needed are easier to trust than systems that accumulate forever.

---

## Engineering Principles Demonstrated

This story demonstrates:

- **Identifying recurring engineering work** before it becomes normalized overhead
- **Solving root causes** instead of symptoms (process problem, not UI problem)
- **Building reusable systems** sized to the actual domain
- **Reducing repetitive development** without gold-plating
- **Balancing flexibility with simplicity**
- **Avoiding overengineering** for a straightforward use case
- **Thinking beyond assigned tickets**
- **Improving developer experience** for the team shipping banners and everything else

See also [`../philosophy/engineering.md`](../philosophy/engineering.md).

---

## Business Impact

Exact metrics are unavailable and should not be invented.

The practical benefits were clear:

- **Less engineering effort** per banner request
- **Faster banner creation** from business need to visible message
- **Reduced development time** spent on non-differentiating UI
- **Consistent implementation**—one component, predictable behavior
- **Simpler maintenance**—one system to update instead of many copies
- **Reduced need for repeated feature work** on visually simple messaging

Instead of treating banners as software projects, they became **configuration**. Engineering capacity returned to product features that actually required custom logic.

---

## Lessons Learned

**Recurring work is usually a signal that a better abstraction exists.** Whenever I notice engineers repeatedly solving the same problem, I first ask whether the problem itself can be generalized—not whether the next instance can be copied faster.

**Sometimes the best feature is the one that prevents future feature requests.** The banner system did not add user-facing novelty; it removed a category of work that should never have been engineering-heavy.

**Build for retirement.** A system used for years and then deprecated cleanly is a success, not a failure—especially compared to dozens of one-off components nobody remembers how to remove.

---

## Connection to Engineering Philosophy

This story reflects how I approach engineering today:

- I enjoy **identifying patterns** that repeat across a codebase
- Rather than optimizing a single implementation, I prefer **simple abstractions that reduce future maintenance**
- The objective is not to build more code—it is to **make writing future code unnecessary** whenever possible

The same instinct appears in [`repository-deprecation.md`](repository-deprecation.md) (delete complexity), [`api-migration-v1-v2.md`](api-migration-v1-v2.md) (isolate change at a boundary), and personal project work like [`../projects/free-slot.md`](../projects/free-slot.md) (abstractions that hide infrastructure).

---

## Interview Applications

This story works well for questions such as:

- Tell me about improving developer productivity
- Tell me about identifying an opportunity nobody assigned to you
- Tell me about creating reusable software
- Tell me about reducing engineering effort
- Tell me about improving maintainability
- Tell me about a feature you're proud of
- Tell me about solving the root cause of a problem

**Suggested framing:** Start with the observation (engineer spent a sprint on simple banners), not the solution. Emphasize product thinking—engineers were in the content workflow—and lightweight design. Mention clean deprecation as proof of good boundaries.

---

## Resume Bullet Extraction

Possible bullets—add to [`../resume/bullet-bank.md`](../resume/bullet-bank.md) with `Source:` link to this file:

- Designed and implemented a configurable banner system that replaced repeated one-off implementations with a reusable, configuration-driven solution.
- Reduced recurring engineering work by transforming informational banners into configurable application behavior rather than sprint-sized feature requests.
- Identified an unprompted opportunity to eliminate repetitive feature development through lightweight, reusable frontend architecture.

Do not add invented metrics when using these bullets.

---

## Related Documents

| Document | Relationship |
|----------|--------------|
| [`../experience/keller-williams.md`](../experience/keller-williams.md) | Employer overview—high-level summary links here |
| [`../philosophy/engineering.md`](../philosophy/engineering.md) | Less code, abstractions, recurring work |
| [`repository-deprecation.md`](repository-deprecation.md) | Related Keller Williams simplification story |
| [`api-migration-v1-v2.md`](api-migration-v1-v2.md) | Related boundary/isolation pattern |
| [`../resume/bullet-bank.md`](../resume/bullet-bank.md) | Curated bullets should reference this story |
| [`../interviews/behavioral.md`](../interviews/behavioral.md) | Initiative and product thinking themes |
| [`../interviews/technical.md`](../interviews/technical.md) | Reusable architecture themes |
| [`../context.md`](../context.md) | Engineer profile—product thinking and simplification |
