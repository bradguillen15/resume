# Production Debugging and Rollback Discipline

## Purpose

Engineering story documenting how I handled production bugs at Keller Williams. This is a **recurring workflow**, not a single named incident: use it for "how do you handle production issues" and "walk me through debugging a bug you didn't cause" questions. If an interviewer pushes for one specific incident, pick a real one from memory rather than inventing details here.

Facts live here; resume bullets and interview answers reference this file, they do not duplicate it.

**Employer:** Keller Williams. See [`../experience/keller-williams.md`](../experience/keller-williams.md) for role context (~60,000 users, Datadog observability).

---

## Context

Production bugs typically reached the team as **Zendesk tickets** filed from user reports. Tickets usually arrived with an attached **Datadog session**, which gave a starting point for diagnosis instead of a blank "it doesn't work." I used Datadog heavily myself: navigating errors, inspecting sessions, and reproducing bugs that only occurred in production. The observability setup itself (monitors, alerts, watching for anomalies) was owned by the engineering manager.

As the owner of several critical features, investigating these tickets for my areas was part of my responsibility, not a separate support team's job.

---

## Workflow

1. **Start from the session.** Review the attached session data and narrow down where the error occurred. Sometimes the error message was directly visible there.
2. **Reproduce locally when needed.** When the session alone was not conclusive, follow the user's exact steps locally to reproduce the failure before attempting a fix.
3. **Assess severity.** Decide whether this was a critical failure affecting users now or a defect that could ride the normal release train.
4. **Roll back first when critical.** For critical bugs, the team's practice was to **roll back the offending changes immediately** to restore users, rather than debugging live under pressure.
5. **Fix and redeploy fast.** Critical fixes were prioritized and shipped as soon as they were ready, rather than waiting for a scheduled release.

---

## Impact

- Users were restored quickly on critical failures because rollback came before root-cause analysis.
- Session captures shortened diagnosis significantly compared to reproducing from a text description alone.
- Owning production support for my features closed the loop on ownership: I saw how my code actually failed in the field, which fed back into how I built and reviewed.

**No incident counts, MTTR figures, or specific outage narratives are documented. Do not invent them.**

---

## Lessons Learned

- **Restore first, diagnose second.** When users are affected, rolling back is almost always faster and safer than fixing forward under pressure.
- **Session data is worth its setup cost.** The difference between a ticket with a session capture and one without is often hours of guesswork.
- **Reproduction is the checkpoint.** A fix for a bug you cannot reproduce is a hypothesis, not a fix.
- **Production support is part of feature ownership**, not an interruption to it.

---

## Interview Usage

Good for:

- How do you handle bugs in production?
- Tell me about debugging an issue you didn't cause
- What is your relationship with support/QA?
- How do you balance speed and safety when something is broken?

**Suggested framing:** Emphasize the discipline (session, reproduce, severity, rollback, fast fix) rather than heroics. Honest scope: rollback-first was a team practice I executed and agreed with, not a process I invented.

---

## Related Documents

- Experience: [`../experience/keller-williams.md`](../experience/keller-williams.md)
- Resume: [`../resume/bullet-bank.md`](../resume/bullet-bank.md)

## TODO

- [ ] Optionally document one concrete incident (what broke, rollback, fix) to strengthen "tell me about a specific production bug"
