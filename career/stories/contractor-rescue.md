# Taking Ownership of an Abandoned Feature

## Purpose

Engineering case study documenting a project I inherited after an external contractor failed to deliver it. This is **not** intended to criticize another engineer—it documents how I evaluated an incomplete implementation, decided to start over, and successfully delivered the feature under time pressure.

Facts live here; resume bullets and interview answers reference this file—they do not duplicate it.

**Employer:** Advision Development — see [`../experience/advision.md`](../experience/advision.md) for role context.

---

## Context

While working at Advision Development, the company hired an **external contractor** to implement a new **React** page.

The expectation was that the contractor would complete the work independently within **several weeks**. As the deadline approached, it became clear that **very little progress** had actually been made. The page was incomplete and not ready for production.

With the delivery date approaching, **I was asked to take ownership** of the project. At that time I was still relatively early in my career. This was one of my first experiences being trusted to recover a delivery at risk—not polish someone else's nearly-done work, but salvage a deadline.

---

## Problem

The existing implementation contained only a **partial foundation**.

Some initial API requests had been started, but the page itself was **not functional**. It did not display the required information. The implementation was **not production-ready**.

The remaining time before delivery was **extremely limited**.

The central challenge was deciding whether to **continue building on top of the existing work** or **start over**—with a fixed deadline and no room for a prolonged evaluation phase.

---

## Constraints

- The **deadline could not move**
- **Designs had already been approved**—the UI target was fixed
- The feature still needed to satisfy the **original business requirements**
- There was **not enough time** for lengthy architectural discussions or extended pair-debugging of incomplete contractor code
- The solution needed to be **reliable and maintainable**—a rushed patch that shipped would still be owned by the team afterward

These constraints favored a decision made quickly and executed cleanly.

---

## Evaluation

Before writing code, I **reviewed the contractor's implementation** to understand its current state.

After that review, I concluded that **continuing from the existing branch would likely take longer** than rebuilding the page myself. The partial implementation did not provide enough value to justify preserving it—unfinished structure, unclear decisions, and gaps that would require archaeology before productive forward progress.

| Continue from partial work | Clean rebuild |
|----------------------------|---------------|
| Preserve sunk cost | Accept short-term rewrite cost |
| Unclear quality and direction | **Predictable implementation path** |
| Time spent understanding incomplete decisions | Time spent on approved designs and requirements |
| Higher delivery risk under deadline | **Lower delivery risk** with known scope |

Instead of trying to repair incomplete work, I chose to **begin with a clean implementation** while reusing useful context already available—approved designs, known API endpoints, business requirements. The decision **simplified development** rather than increasing it.

This was **delivery risk management**, not preference for rewriting or judgment of the contractor as a person.

---

## Implementation

I created a **new implementation** of the page.

Using the **approved designs** as guidance, I rebuilt the feature from scratch. The work included:

- Building the **React** page structure and components
- **Connecting the required data** from existing APIs
- **Implementing the UI** to match approved designs
- **Validating behavior** against business requirements
- **Preparing the feature for production** release

Rather than spending limited time understanding every incomplete decision left in the contractor branch, I focused on **delivering a clean implementation** the team could maintain.

Specific page purpose, route names, and API contract details are **not documented here** where they are not essential to the story pattern—avoiding fabrication of product specifics not provided in source material.

---

## Results

The page was **successfully completed before the delivery deadline**.

The business received the functionality it expected. The project moved forward **without requiring additional contractor involvement**.

The experience also built **personal confidence**: I could quickly understand unfamiliar requirements, make a pragmatic build-vs-rebuild call, and deliver under pressure—skills that mattered more as ownership grew in later roles.

No timeline compression metrics (e.g., "saved X weeks") are recorded and none should be invented.

---

## Trade-offs

**Rewriting software is usually expensive.** Continuing an incomplete implementation can sometimes cost even more—especially under a fixed deadline when the partial work's quality and direction are uncertain.

In this situation, rebuilding produced a **simpler and more predictable development process** than attempting to recover partially finished work. The trade-off was accepting short-term duplication of effort (some API exploration had existed) in exchange for **clear ownership, readable code, and on-time delivery**.

The decision was based on **reducing delivery risk**, not on personal preference for greenfield work.

---

## Engineering Principles Demonstrated

This story demonstrates:

- **Technical ownership** — stepping in when delivery was at risk
- **Engineering judgment** — evaluate before committing to a path
- **Delivery under deadlines** — scope discipline and execution focus
- **Evaluating existing implementations** — inherited code assessed objectively
- **Knowing when rewriting is cheaper than refactoring** — context-dependent, not ideological
- **Pragmatic decision making** — deadline and maintainability over sunk cost
- **Maintaining quality under time constraints** — clean implementation, not a hack to hit a date

See also [`../philosophy/engineering.md`](../philosophy/engineering.md).

---

## Business Impact

Exact metrics are unavailable and should not be invented.

The company **successfully delivered a feature** that otherwise risked missing its deadline. The clean implementation also **reduced future maintenance** compared to extending incomplete work of uncertain quality— the team inherited code they understood because they inherited code built to approved designs under normal team standards.

---

## Lessons Learned

**Inherited code should always be evaluated objectively.** Sometimes preserving existing work is the right decision—mature partial implementations, clear direction, salvageable architecture. Other times, **starting over is the lower-risk option**—especially with a fixed deadline and minimal valuable progress.

**The important skill is not rewriting software.** It is **recognizing which approach minimizes long-term cost while meeting business deadlines.**

**Ownership means accepting the outcome**, not blaming the handoff. The business needed the feature; the team needed maintainable code; the calendar did not move.

---

## Connection to Engineering Philosophy

This story reflects a recurring pattern in my career: **decisions based on long-term maintainability and honest evaluation**, not emotional attachment to existing code.

The same objective appears elsewhere:

- [`repository-deprecation.md`](repository-deprecation.md) — remove wrong-sized structure rather than maintain it
- [`api-migration-v1-v2.md`](api-migration-v1-v2.md) — isolate change at the right boundary
- [`dashboard-performance.md`](dashboard-performance.md) — remove unnecessary work instead of layering fixes
- Reviewing AI-generated code — simplify or reject when complexity exceeds need

**Reduce unnecessary complexity while delivering reliable software**—whether the complexity came from three repositories, an API contract change, or an incomplete handoff.

---

## Interview Applications

This story is useful for questions such as:

- Tell me about taking ownership
- Tell me about inheriting someone else's code
- Tell me about delivering under pressure
- Tell me about making a difficult technical decision
- Tell me about evaluating whether to rewrite or refactor
- Tell me about recovering a struggling project

**Suggested framing:** No criticism of the contractor—focus on evaluation criteria, deadline constraints, and delivery risk. Emphasize that rebuild was the pragmatic lower-risk path, not a heroic save. Acknowledge early-career context without underselling the judgment involved.

---

## Resume Bullet Extraction

Possible bullets—add to [`../resume/bullet-bank.md`](../resume/bullet-bank.md) with `Source:` link to this file:

- Took ownership of an incomplete React feature after an external contractor failed to deliver, rebuilding the implementation and successfully meeting the project deadline.
- Evaluated an unfinished implementation and determined that a clean rebuild would reduce delivery risk and improve maintainability compared to continuing partial work.
- Delivered production-ready functionality under tight deadlines by rapidly understanding requirements and implementing a complete solution from approved designs.

Do not add invented timeline or cost-savings metrics.

---

## Related Documents

| Document | Relationship |
|----------|--------------|
| [`../experience/advision.md`](../experience/advision.md) | Employer overview—high-level summary links here |
| [`../philosophy/engineering.md`](../philosophy/engineering.md) | Pragmatism, maintainability, objective evaluation |
| [`dashboard-performance.md`](dashboard-performance.md) | Related Advision story—early-career React work |
| [`../resume/bullet-bank.md`](../resume/bullet-bank.md) | Curated bullets should reference this story |
| [`../interviews/behavioral.md`](../interviews/behavioral.md) | Ownership, pressure, delivery themes |
| [`../leadership.md`](../leadership.md) | Ownership and responsibility themes |
| [`../interviews/leadership.md`](../interviews/leadership.md) | Leadership interview prep |
| [`../context.md`](../context.md) | Strong ownership as core engineer identity |
