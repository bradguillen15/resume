# Micro Frontend Migration (Executing an Organization-Wide Decision)

## Purpose

Engineering story documenting my part in Keller Williams' migration to a micro frontend architecture. Use it for architecture-at-scale, "learning something new under delivery pressure," and "executing a decision you didn't make" questions.

Facts live here; resume bullets and interview answers reference this file, they do not duplicate it.

**Employer:** Keller Williams. See [`../experience/keller-williams.md`](../experience/keller-williams.md) for role context.

---

## Context

The platform's frontend was composed of many separate applications that all depended on a **shared shell library**. That shell was a dependency of roughly **40 frontend repositories**.

Every time the shell needed an update, **every dependent repository had to bump the package and re-release**. One library change fanned out into coordinated updates across dozens of repos: classic dependency hell, where the cost of changing shared code grew with the number of consumers rather than with the size of the change.

---

## Decision

Moving to a **micro frontend architecture** was a **staff-level, organization-wide decision**, made to break this coupling: each application would be exposed and composed into the platform at runtime instead of compiling the shared shell into 40 separate builds.

**Honest scope: I did not make this decision.** My role was execution. I migrated the **three repositories my team owned** (user, admin, and shared applications) onto the micro frontend architecture.

---

## Execution

- Migrated my team's three applications to the micro frontend model, including how each application was **exposed** for composition into the platform shell.
- Learned the architecture as I executed: at the start I knew little about micro frontends; by the end I understood how applications were exposed, composed, and deployed independently.
- Kept the migration from destabilizing production applications that real users depended on daily.

The composition mechanism was **Module Federation** (documented in the master resume skills list).

---

## Impact

- My team's applications could **ship independently** without being blocked by, or blocking, shell releases across the platform.
- Shell updates stopped implying a coordinated package bump across every consuming repository.
- Personally, this was one of the most enriching pieces of work of my tenure: I went from not knowing the pattern to being able to reason about when micro frontends are and are not worth their complexity.

**No quantified migration metrics are documented. Do not invent them.**

---

## Lessons Learned

- **Shared libraries have a scaling ceiling.** When one dependency update forces 40 releases, the architecture is telling you the boundaries are in the wrong place.
- **Executing someone else's decision well is a skill.** You can disagree-or-not later; first understand the reasoning, then deliver your slice reliably.
- **Migrations are learning accelerators.** I learned more about frontend architecture from executing this migration than I would have from reading about the pattern.
- **Micro frontends trade coupling for operational complexity.** Having lived both sides, I would not reach for them by default; they earned their cost here because of the 40-repo fan-out.

---

## Interview Usage

Good for:

- Architecture at scale / micro frontends
- Tell me about learning a new technology under real constraints
- Tell me about executing a decision you didn't make
- Dependency management and shared-code strategy

**Suggested framing:** Lead with the dependency-hell problem (it justifies the pattern), be explicit that the decision was organizational and my contribution was executing my team's three repositories, and land on the balanced take about when the pattern is worth it.

---

## Related Documents

- Experience: [`../experience/keller-williams.md`](../experience/keller-williams.md) (Engineering Context, Frontend Modernization)
- Related story: [`repository-deprecation.md`](repository-deprecation.md) (consolidating the same three owned repositories into two)
- Resume: [`../resume/bullet-bank.md`](../resume/bullet-bank.md)

