# Migrating an Internal React CMS to WordPress

## Purpose

Engineering case study documenting the migration from an internally developed React-based CMS to WordPress at Advision Development. This is **not** a story about building WordPress—it is about recognizing when maintaining custom software no longer provides enough value.

Facts live here; resume bullets and interview answers reference this file—they do not duplicate it. Implementation details that are no longer remembered are stated explicitly rather than guessed.

**Employer:** Advision Development — see [`../experience/advision.md`](../experience/advision.md) for role context.

---

## Context

During my time at Advision Development, part of our platform relied on a **custom-built CMS implemented with React**.

The CMS had been developed internally **years earlier**, when React itself was still relatively new and the ecosystem was much smaller. Over time the application became **increasingly difficult to maintain**. Adding new functionality required significantly more engineering effort than the business expected.

The team eventually decided to **migrate away from the custom CMS and adopt WordPress**. I participated in that migration from the **frontend side**—not owning the overall migration strategy, but contributing to making the transition work for the user-facing application.

This migration connected to related integration work documented in [`lambda-wordpress-integration.md`](lambda-wordpress-integration.md), where internal data needed to reach the WordPress-powered marketing layer through a controlled boundary.

---

## Problem

The existing CMS had gradually **accumulated technical complexity**.

Because it had been built entirely in-house, **every CMS feature became an engineering responsibility**. Simple content management tasks often required developer involvement—copy updates, layout changes, and editorial workflows that mature CMS platforms handle out of the box.

The maintenance cost continued increasing while providing **little competitive advantage**. The business was not differentiated by owning a bespoke CMS; it was slowed down by maintaining one.

The business needed a solution that allowed **content management without requiring engineers** to continuously extend custom software.

---

## Constraints

- The existing website **already depended on the CMS**—migration had to be incremental where possible
- **Content editors** still needed a workable editing experience during and after transition
- The migration **could not interrupt normal business operations**
- **Existing frontend functionality** needed to continue working during the transition
- The implementation had to **minimize disruption** for both developers and content editors

These constraints favored a pragmatic migration path over a stop-the-world rewrite of every consumer at once.

---

## My Responsibilities

My work focused primarily on **frontend integration**.

I helped implement the changes necessary for the application to **correctly consume content from WordPress** instead of the internal React CMS. Part of that work involved **adapting the frontend** so the migration could occur with minimal impact on the user-facing application—users should not experience broken pages or inconsistent content during the transition.

I was **not responsible for defining the overall migration strategy**—that direction came from technical leadership and product considerations. I contributed to making the transition **successful from the frontend perspective**: wiring new content sources, preserving existing behavior where required, and validating that the application behaved correctly after the switch.

Specific integration mechanisms (REST endpoints, headless WordPress patterns, build-time vs. runtime fetching, etc.) are **no longer remembered in detail** and are not reconstructed here.

---

## Engineering Reasoning

The most important lesson from this project: **not every problem should be solved with custom software.**

A CMS is **infrastructure**. Unless the CMS itself creates business value—unique workflows, proprietary differentiation, constraints no platform can meet—maintaining a custom implementation often becomes **unnecessary engineering cost**.

WordPress already solved many problems our internal CMS still required engineers to maintain: editor UX, content modeling basics, plugin ecosystem, and long-term platform support.

Rather than rebuilding those capabilities ourselves, **adopting a mature platform** allowed the engineering team to focus on features that actually differentiated the business.

This was a **build-versus-buy** decision made correctly in hindsight: buy (adopt) for commodity infrastructure; build for what matters to the product.

---

## Trade-offs

Migrating to WordPress was not free:

| Cost | Benefit |
|------|---------|
| Adapting existing **frontend integrations** | Editors gain mature tooling without custom dev cycles |
| Accepting **conventions imposed by an external platform** | **Reduced maintenance burden** on engineering |
| Migration effort during transition | **Decreased engineering effort** for routine content changes long-term |
| Less control over every CMS detail | **Improved editor experience** on a supported platform |

Those trade-offs were **outweighed** by reduced maintenance cost, better content workflows, and engineering time returned to product work—not CMS plumbing.

---

## Engineering Principles Demonstrated

This story demonstrates:

- **Engineering pragmatism** — mature platform over pride in custom code
- **Technology evaluation** — questioning whether custom software still earns its cost
- **Frontend integration** — adapting consumers during platform migration
- **Business-oriented decision making** — CMS as cost center, not differentiator
- **Reducing maintenance burden** — remove software the team must forever carry
- **Understanding build-versus-buy** — infrastructure vs. product features
- **Supporting large application migrations** — minimize disruption while changing content source

See also [`../philosophy/engineering.md`](../philosophy/engineering.md).

---

## Business Impact

Exact metrics are unavailable and should not be invented.

Migrating to WordPress **significantly simplified content management** compared to maintaining an internally developed CMS. The migration **reduced engineering work required for routine content changes** while providing editors with a **mature and well-supported platform**.

Engineering capacity previously spent extending the React CMS could shift toward features that affected users and revenue—not internal tooling that every company rebuilds poorly at least once.

---

## Lessons Learned

**Engineers should continually question whether custom software still provides value.** Systems that made sense when built—early React, small team, fast iteration—can become liabilities as requirements and ecosystems mature.

**Sometimes the best engineering decision is not building something new.** Sometimes it is **removing software** that no longer justifies its maintenance cost.

**Engineering quality is measured not only by what we build, but by what we no longer have to maintain.** That mindset influenced later work: repository deprecation, configurable systems instead of one-offs, adopting BaaS with clean abstractions instead of bespoke backends where appropriate.

---

## Connection to Engineering Philosophy

This project reflects a recurring theme: **reduce unnecessary complexity.**

| Related work | Shared idea |
|--------------|-------------|
| [`repository-deprecation.md`](repository-deprecation.md) | Remove wrong-sized structure |
| [`configurable-banner-system.md`](configurable-banner-system.md) | Stop repeating engineering for commodity UI |
| [`lambda-wordpress-integration.md`](lambda-wordpress-integration.md) | Clean boundary between internal systems and WordPress |
| [`../projects/free-slot.md`](../projects/free-slot.md) | Encapsulate infrastructure; don't leak vendor into UI |

The goal is always the same: **software that remains understandable, maintainable, and easy to evolve**—sometimes by subtraction, not addition.

---

## Interview Applications

This story is useful for questions such as:

- Tell me about a migration
- Tell me about reducing technical debt
- Tell me about replacing legacy software
- Tell me about a build-versus-buy decision
- Tell me about improving maintainability
- Tell me about working on a large migration
- Tell me about modernizing an application

**Suggested framing:** Emphasize judgment and frontend role—not "I chose WordPress alone." Acknowledge leadership on strategy; your contribution was making the frontend transition work. Avoid overselling WordPress expertise; this is about knowing when not to build.

---

## Resume Bullet Extraction

Possible bullets—add to [`../resume/bullet-bank.md`](../resume/bullet-bank.md) with `Source:` link to this file:

- Contributed to migrating an internally developed React CMS to WordPress, simplifying long-term maintenance and improving content management workflows.
- Adapted frontend integrations to support a CMS migration with minimal disruption to existing user-facing functionality.
- Helped modernize legacy frontend infrastructure by integrating a mature CMS platform in place of a custom-built solution.

Do not add invented migration timelines, team sizes, or percentage effort reductions.

---

## Related Documents

| Document | Relationship |
|----------|--------------|
| [`../experience/advision.md`](../experience/advision.md) | Employer overview—high-level summary links here |
| [`../philosophy/engineering.md`](../philosophy/engineering.md) | Pragmatism, deletion, maintainability |
| [`lambda-wordpress-integration.md`](lambda-wordpress-integration.md) | Related WordPress integration at Advision |
| [`contractor-rescue.md`](contractor-rescue.md) | Related Advision delivery story |
| [`../resume/bullet-bank.md`](../resume/bullet-bank.md) | Curated bullets should reference this story |
| [`../interviews/technical.md`](../interviews/technical.md) | Migration, legacy, build-vs-buy themes |
| [`../interviews/behavioral.md`](../interviews/behavioral.md) | Pragmatism, team contribution themes |
| [`../context.md`](../context.md) | Product thinking and simplification |
