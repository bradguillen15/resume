# Architecting a Java REST API as a Junior (and Losing the Client)

## Purpose

Engineering story documenting the Java REST API I architected at First Factory, including the honest outcome: the engagement ended badly. This is both my earliest architecture-ownership story and an early-career **failure story** about unsupervised design decisions.

This document is honest by design. The value is the lesson, not the outcome.

Facts live here; resume bullets and interview answers reference this file, they do not duplicate it.

**Employer:** First Factory. See [`../experience/first-factory.md`](../experience/first-factory.md) for role context. **Client:** CommonBond, a US **student loans** company. This story is deliberately excluded from the public AI chat context (see `scripts/build-chat-context.mjs`); keep the client name out of public-facing material. This is the ONLY file that names the client; keep it that way.

---

## Context

First Factory placed me on a project for a US client in the **student loans** business, to **start a new system for them from scratch**. I was responsible for **architecting the database and the REST API**: real greenfield design ownership, very early in my career.

A **senior colleague supervised** the work. In practice, he was largely hands-off: he taught me some things, but he mostly let me make my own decisions, including the wrong ones, without course-correcting.

The stack was **Java** with **Hibernate** and **Jersey**, tested with **JUnit** and **Mockito** (see the experience file for full stack context).

---

## What Happened

I designed and built the database and API. Some of my architectural decisions were wrong: the kind of mistakes a junior makes when designing systems for the first time without an experienced reviewer actively engaged.

Eventually **we were removed from the client engagement**. I believe the accumulated wrong decisions contributed to that outcome.

*(This was roughly 2016–2017. The specific wrong decisions are no longer remembered in detail and are deliberately not reconstructed here; do not fabricate specifics in interviews.)*

---

## What I Got Wrong (and What the Setup Got Wrong)

- **I did not escalate for real review.** I had a supervisor on paper, but when guidance was not offered I did not insist on it. As a junior I did not yet know what I did not know, which is exactly when review matters most.
- **Design mistakes compound silently.** Database and API shape decisions made in week one constrain everything after; by the time consequences surface, they are expensive.
- **Supervision that never intervenes is not mentorship.** Letting a junior fail on a real client engagement is a costly way to teach. I do not blame my colleague personally, but the structure failed.

---

## Lessons Learned

- **Ask for design review early and explicitly**, especially on foundational decisions (data model, API contracts). This experience is part of why I now treat design review as non-negotiable, and why as a senior I review others' designs actively instead of waiting to be asked.
- **Foundational decisions deserve disproportionate scrutiny.** I still slow down most at the layer boundaries: schema, contracts, service shape.
- **Failure early is formative.** The consequences were real (a lost engagement), but the lesson bought a decade of better judgment about when to seek input.

---

## Interview Usage

Good for:

- Tell me about a failure / a project that went badly
- What's the biggest mistake you've made and what did you learn?
- How did you learn to approach architecture and design review?
- Early-career backend and greenfield design evidence

**Suggested framing:** Own the mistakes plainly, note the structural factor (hands-off supervision) without blaming the individual, and land on the concrete change in behavior: early, explicit design review, both sought as a junior and given as a senior.

**Avoid:** Blaming the senior colleague or the client; reconstructing specific technical decisions that are not actually remembered.

---

## Related Documents

- Experience: [`../experience/first-factory.md`](../experience/first-factory.md)
- Contrast: [`lambda-wordpress-integration.md`](lambda-wordpress-integration.md) (later backend work under active CTO direction, the corrected pattern)
- Resume: [`../resume/bullet-bank.md`](../resume/bullet-bank.md)

## TODO

- [ ] Add any specific wrong decisions if they resurface from memory (do not invent)
