# Leadership Interview Prep

## Purpose

Interview-specific prep derived from [`../leadership.md`](../leadership.md). Use the canonical leadership document for themes, evidence, and framing rules; use this file for **question mapping** and **answer outlines**.

**Rules:** Never claim formal management. Never inflate Lambda into sole architect. Always link to story files for STAR detail.

---

## Leadership Themes

| Theme | Primary story | Backup |
|-------|---------------|--------|
| Influence without authority | [`../stories/repository-deprecation.md`](../stories/repository-deprecation.md) | [`../stories/configurable-banner-system.md`](../stories/configurable-banner-system.md) |
| Disagreement / collaborative adaptation | [`../stories/modal-vs-page-decision.md`](../stories/modal-vs-page-decision.md) | [`../stories/api-migration-v1-v2.md`](../stories/api-migration-v1-v2.md) |
| Implementation leadership (backend/cloud) | [`../stories/lambda-wordpress-integration.md`](../stories/lambda-wordpress-integration.md) | [`../stories/api-migration-v1-v2.md`](../stories/api-migration-v1-v2.md) |
| Ownership under pressure | [`../stories/contractor-rescue.md`](../stories/contractor-rescue.md) | [`../experience/keller-williams.md`](../experience/keller-williams.md) |
| Mentoring | [`../experience/advision.md`](../experience/advision.md) | [`../experience/keller-williams.md`](../experience/keller-williams.md) |
| Long-term architecture | [`../stories/api-migration-v1-v2.md`](../stories/api-migration-v1-v2.md) | [`../stories/repository-deprecation.md`](../stories/repository-deprecation.md) |
| Product collaboration | [`../stories/configurable-banner-system.md`](../stories/configurable-banner-system.md) | [`../stories/modal-vs-page-decision.md`](../stories/modal-vs-page-decision.md) |
| AI leadership | [`../projects/free-slot.md`](../projects/free-slot.md) | [`../projects/portfolio.md`](../projects/portfolio.md) |

→ Full mapping and framing: [`../leadership.md`](../leadership.md) · Behavioral overlap: [`behavioral.md`](behavioral.md)

---

## Prepared Answer Outlines

### Tell me about a time you led without authority

**Story:** Repository consolidation or configurable banners

**Outline:**

- **Situation:** Repeated pain (multiple repos / repeated banner sprints) affecting team velocity
- **Task:** Propose a simpler long-term approach—not assigned as tech lead
- **Action:** Identified root cause, proposed solution, built consensus, executed incrementally
- **Result:** Less complexity, clearer ownership, reduced future work (qualitative—no invented metrics)

**Avoid:** "I was tech lead"; stop-the-world rewrite framing

---

### Tell me about a disagreement with a teammate or stakeholder

**Story:** Modal vs. dedicated page

**Outline:**

- **Situation:** Cross-org search feature; Product proposed modal; I raised architectural concerns
- **Task:** Ship without blocking; keep architecture honest
- **Action:** Implemented modal first; watched requirements; presented evidence when UX needs emerged
- **Result:** Collective move to dedicated page—collaborative, not "I won"

**Avoid:** Conflict drama; "they were wrong"

→ Full detail: [`../stories/modal-vs-page-decision.md`](../stories/modal-vs-page-decision.md)

---

### Tell me about mentoring another engineer

**Story:** Advision junior developers

**Outline:**

- **Situation:** Small team; juniors needed architecture context
- **Task:** Help them grow without creating dependency
- **Action:** Questions-first mentoring, pairing, reviews with explanations
- **Result:** More independent engineers (qualitative)

**Backup:** KW teammates on owned features

→ [`../experience/advision.md`](../experience/advision.md)

---

### Tell me about technical leadership on a hard project

**Story:** Lambda integration (implementation) or API migration (frontend lead)

**Lambda outline:**

- **Situation:** WordPress content needed transformation at boundary; CTO defined architecture
- **Task:** Own implementation and delivery
- **Action:** Built Lambda service, worked closely with CTO, delivered integration
- **Result:** Clear service boundary; learned cloud implementation leadership

**Avoid:** "I designed the entire architecture alone"

→ [`../stories/lambda-wordpress-integration.md`](../stories/lambda-wordpress-integration.md)

---

### How do you approach code reviews as a senior engineer?

**Framework:** From [`../leadership.md`](../leadership.md#code-reviews)

- Simpler, clearer, reusable when justified
- Architecture fit and future engineer comprehension
- Teach through review—not gatekeep
- Same bar for AI-generated code

**Example:** KW maintainability-focused reviews; Free Slot AI + manual review

---

## Scope and Influence Examples

Documented influence **beyond immediate tickets**:

| Initiative | Influence type |
|------------|----------------|
| Repository consolidation | Org-level simplification initiative |
| Configurable banners | Product/engineering workflow improvement |
| API migration | Cross-team frontend lead |
| Feature ownership at KW | Informal expert for owned systems |
| Career repo | AI-native documentation architecture |

**Not documented:** Formal tech lead title, direct reports, org-wide engineering standards ownership.

---

## Related Documents

| Document | Purpose |
|----------|---------|
| [`../leadership.md`](../leadership.md) | **Canonical** leadership style and evidence |
| [`behavioral.md`](behavioral.md) | Full behavioral question mapping |
| [`../strengths.md`](../strengths.md) | Value themes overlapping leadership |
| [`../stories/`](../stories/) | STAR detail |
| [`../context.md`](../context.md) | Identity; not a people manager |

---

## Maintenance

When [`../leadership.md`](../leadership.md) is updated, sync theme tables and outlines here. Do not duplicate long narrative—link to story files.
