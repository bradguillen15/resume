# Modal vs. Dedicated Page

## Purpose

Engineering case study documenting an architectural disagreement at Keller Williams. This is **not** a story about being right—it is about engineering reasoning, collaboration, and adapting architecture as product requirements evolved.

Facts live here; resume bullets and interview answers reference this file—they do not duplicate it.

**Employer:** Keller Williams — see [`../experience/keller-williams.md`](../experience/keller-williams.md) for role context.

---

## Context

While working at Keller Williams, our team was building a new feature that allowed users to **search across all organizations** within the platform.

The existing application was **organization-centric**. Users selected one organization at a time, and nearly every page operated within that selected organization context.

The new feature was different: instead of operating within a single organization, it searched **across every organization simultaneously**.

Because the feature felt "outside" the normal navigation flow, **Product initially proposed implementing the experience as a modal**. The reasoning was understandable—the feature broke the usual org-scoped pattern, and a modal suggested a temporary or exceptional context without restructuring primary navigation.

---

## Initial Observation

From the beginning I believed this functionality should be implemented as a **dedicated page** rather than a modal. My reasoning was **architectural**, not visual.

The feature represented a **different navigation context**. It deserved:

- Its own URL
- Its own navigation history
- Its own page lifecycle

A modal felt like an artificial limitation—fitting a cross-org search into a container designed for transient, org-scoped interactions.

At that stage, however, **the team decided to continue with the modal implementation**. That was a reasonable choice given early uncertainty and the desire to ship. I raised my concerns; we moved forward together rather than blocking on architecture upfront.

---

## Constraints

When development started, several constraints applied:

- The feature **had already begun development** as a modal
- **Product preferred** the modal experience initially
- **Design work had already started** around that pattern
- The team wanted to **avoid unnecessary delays** from reversing direction prematurely

Because of those constraints, we continued implementing the modal while **remaining open to adjustments** if new information emerged. This was collaboration, not surrender—architecture discussions continued as requirements clarified.

---

## What Changed

As implementation progressed, **additional UX requirements appeared**. The modal needed:

- **Breadcrumbs**
- **Navigation history**
- **Deep linking**
- **Return navigation**
- Behavior that closely resembled **normal page navigation**

At that point the distinction between a modal and a page started **disappearing**. The implementation grew increasingly complex because we were **forcing page-like behavior into a component that fundamentally was not a page**—recreating browser and router capabilities inside a overlay.

That complexity was a signal, not a failure of execution.

---

## Decision

After discussing the new requirements with **Design and Product**, it became clear that a **dedicated page** produced a much simpler architecture.

Using a normal page automatically provided:

- Browser history
- URLs for sharing and bookmarking
- Back navigation
- Breadcrumbs
- Navigation consistency with the rest of the application

Rather than continuing to recreate browser behavior inside a modal, **the team moved toward the page-based solution**. The change was collective—requirements had evolved, and the architecture evolved with them. It was not a unilateral override of an earlier decision.

---

## Engineering Reasoning

The important lesson was never **"I was right."**

The lesson: **architecture should follow the actual responsibilities of the feature.**

Initially there was reasonable uncertainty about whether modal or page fit best. As more requirements emerged, the answer became clearer. Changing direction was the correct engineering decision—not because the first choice was stupid, but because **new information changed the problem shape**.

Good architecture is not about defending previous decisions. It is about **responding to new information** and choosing the simplest structure that matches what the feature actually needs to do.

---

## Trade-offs

| Modal (initial) | Dedicated page (final) |
|-----------------|------------------------|
| Appeared simpler at first glance | Slightly larger structural change to navigation |
| Each new nav requirement added custom code | Browser and router provide nav behavior for free |
| Fought against platform conventions | Aligned with how users interact with web apps |
| Growing accidental complexity | Simpler state and navigation model |

The modal initially looked like the faster path. Every additional navigation requirement **increased implementation complexity** disproportionately. The page traded a modest structural shift for **dramatically simpler** navigation, state management, and user expectations.

---

## Engineering Principles Demonstrated

This story demonstrates:

- **Thinking beyond implementation details**—modal vs. page is a product-structure question, not a component choice
- **Evaluating architecture through user experience**—breadcrumbs and deep linking revealed the true shape of the feature
- **Collaborating with Product and Design**—direction changed through discussion, not escalation
- **Changing direction when requirements evolve**—willingness to revisit earlier assumptions
- **Avoiding accidental complexity**—stop simulating the platform inside the wrong abstraction
- **Recognizing when abstractions no longer fit**—modal was the wrong container for page-like responsibilities

See also [`../philosophy/engineering.md`](../philosophy/engineering.md).

---

## Business Impact

Exact metrics are unavailable and should not be invented.

Choosing a dedicated page **reduced architectural complexity** while producing a user experience that behaved consistently with the rest of the application. The resulting implementation required **less custom navigation behavior** and was **easier to maintain**—fewer edge cases around history, linking, and back-button behavior trapped inside a modal layer.

Users got a search experience that felt like a first-class part of the app, not a workaround floating above it.

---

## Lessons Learned

**Architecture should emerge from product behavior**, not implementation convenience. A modal felt convenient early because the feature was "different"; page-like requirements made the true shape obvious later.

**Features evolve while they are built.** Engineers should remain willing to revisit earlier assumptions instead of protecting previous decisions to save face or sunk cost.

**The objective is the simplest architecture that satisfies actual requirements**—not the architecture that was chosen in the first planning meeting.

When a solution begins **recreating capabilities the browser or framework already provides**, that is a prompt to question the container, not to keep building simulation layers.

---

## Connection to Engineering Philosophy

This story reflects recurring principles in my work:

- **Simplicity over cleverness**—a page is boring; boring is good when it fits
- **Avoid abstractions that fight the platform**—modals are not pages
- **Reduce unnecessary complexity**—the same theme as repository consolidation, API compatibility layers, configurable banners, and Supabase encapsulation

| Related work | Shared theme |
|--------------|--------------|
| [`repository-deprecation.md`](repository-deprecation.md) | Remove wrong-sized structure |
| [`api-migration-v1-v2.md`](api-migration-v1-v2.md) | Isolate change at the right boundary |
| [`configurable-banner-system.md`](configurable-banner-system.md) | Match solution weight to problem |
| [`../projects/free-slot.md`](../projects/free-slot.md) | Hide infrastructure; keep UI simple |

---

## Interview Applications

This story works well for questions such as:

- Tell me about a disagreement with your team
- Tell me about influencing technical decisions
- Tell me about changing your mind (or the team changing direction)
- Tell me about collaborating with Product
- Tell me about balancing UX with engineering
- Tell me about an architectural discussion
- Tell me about handling evolving requirements

**Suggested framing:** Emphasize collaboration and evolving requirements—not "I told them so." The modal was a reasonable starting point; page-like requirements made the better shape clear. Show humility and adaptability.

---

## Resume Bullet Extraction

This story is **stronger in interviews than on a resume**, but possible bullets—add to [`../resume/bullet-bank.md`](../resume/bullet-bank.md) with `Source:` link to this file:

- Influenced architectural decisions by advocating for navigation patterns aligned with evolving product requirements, reducing unnecessary implementation complexity.
- Collaborated with Product and Design to evolve feature architecture as requirements expanded, resulting in a simpler and more maintainable page-based solution.

Do not frame as "won an argument" or add invented metrics.

---

## Related Documents

| Document | Relationship |
|----------|--------------|
| [`../experience/keller-williams.md`](../experience/keller-williams.md) | Employer overview—high-level summary links here |
| [`../philosophy/engineering.md`](../philosophy/engineering.md) | Simplicity, platform alignment, avoiding accidental complexity |
| [`repository-deprecation.md`](repository-deprecation.md) | Related simplification story |
| [`api-migration-v1-v2.md`](api-migration-v1-v2.md) | Related boundary and architecture story |
| [`configurable-banner-system.md`](configurable-banner-system.md) | Related product-thinking story |
| [`../resume/bullet-bank.md`](../resume/bullet-bank.md) | Curated bullets should reference this story |
| [`../interviews/behavioral.md`](../interviews/behavioral.md) | Disagreement, collaboration, influence themes |
| [`../interviews/technical.md`](../interviews/technical.md) | Architecture and system design themes |
| [`../context.md`](../context.md) | Product thinking and communication |
