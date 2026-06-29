# Leadership

## Purpose

Canonical description of how I lead engineering work as a **Senior Software Engineer**. Most of my leadership is through ownership and influence rather than title—though I did serve formally as **Team Lead** (frontend team of 4) and **Scrum Master** at Advision.

Future AI assistants should use this file when generating resumes, interview answers, promotion documents, recommendation requests, portfolio content, and leadership examples.

**Goal:** Describe leadership through **ownership, influence, collaboration, and technical decisions**—without inventing formal positions or exaggerating scope.

**Rules:**

- I served as **Team Lead** for a frontend team of 4 (plus **Scrum Master** duties) at Advision **as Lead Web Developer in 2020** (the final ~11 months)—accurate and may be stated plainly; do not imply it spanned all 3 years
- I have **not** been an Engineering Manager or people-manager-of-record (no formal performance/hiring authority)
- Leadership examples must link to real work in [`stories/`](stories/), [`experience/`](experience/), or [`projects/`](projects/)
- Distinguish **implementation leadership** from **architectural direction by others** (e.g., Lambda with CTO)

**Companion docs:** Strengths → [`strengths.md`](strengths.md) · Principles → [`philosophy/engineering.md`](philosophy/engineering.md) · Interview mapping → [`interviews/behavioral.md`](interviews/behavioral.md), [`interviews/leadership.md`](interviews/leadership.md)

---

## Leadership Philosophy

I don't believe leadership requires a title.

Leadership means making the engineering team and the software **better**. Sometimes that means:

- Making technical decisions with clear reasoning
- Mentoring developers toward independence
- Improving architecture and reducing complexity
- Improving developer experience
- Asking better questions and challenging assumptions
- Taking responsibility when something breaks or needs evolution

I naturally gravitate toward those responsibilities—not because I was assigned them, but because ownership and clarity matter to me.

→ [`strengths.md`](strengths.md) — Ownership, architecture, communication

---

## Technical Leadership

My leadership usually happens **through engineering**, not through org charts.

| Activity | How it shows up |
|----------|-----------------|
| Leading technical discussions | Architecture trade-offs, API contracts, navigation patterns |
| Designing or shaping architecture | Compatibility layers, service boundaries, feature structure |
| Reviewing implementations | PR reviews focused on clarity and long-term maintainability |
| Finding simpler solutions | Consolidation, configurability, build-vs-buy |
| Improving maintainability | Refactoring aligned with delivery, not stop-the-world rewrites |
| Reducing technical debt | Incremental migrations, removing duplicate systems |
| Unblocking teammates | Deep context on owned features; debugging and integration help |
| Identifying long-term improvements | Unprompted proposals (banners, repo consolidation) |

I prefer **influencing through technical reasoning** rather than authority.

### Formal Team Leadership (Advision)

The one role where I led formally: as **Lead Web Developer** (2020) at Advision — a promotion from Senior Web Developer — I led a **frontend team of 4** with **Scrum Master** responsibilities, during the final ~11 months of my Advision tenure. This meant distributing work, reviewing the team's code, analyzing requirements with stakeholders, running sprint ceremonies, and being accountable for the team's delivery—alongside staying hands-on as a full-stack engineer.

It was a team-lead role, **not** an Engineering Manager position (no formal hiring or performance authority), but it is genuine, titled team leadership and should be stated plainly on resumes and in interviews.

→ [`experience/advision.md`](experience/advision.md)

**Evidence:**

| Example | Source | Scope note |
|---------|--------|------------|
| API migration—frontend lead, cross-team coordination | [`stories/api-migration-v1-v2.md`](stories/api-migration-v1-v2.md) | Led frontend side; coordinated with external backend team |
| Repository consolidation initiative | [`stories/repository-deprecation.md`](stories/repository-deprecation.md) | Drove simplification; not sole decision-maker on org policy |
| Configurable banner system proposal | [`stories/configurable-banner-system.md`](stories/configurable-banner-system.md) | Unprompted; reduced repeated engineering work |
| Dashboard performance investigation | [`stories/dashboard-performance.md`](stories/dashboard-performance.md) | Root-cause fix on owned system |
| Defined team coding standards & reusable patterns (Advision, as Lead Web Developer) | [`experience/advision.md`](experience/advision.md) | Set conventions; reduced repeated decisions |
| Architecture / design review for others' work (Advision) | [`experience/advision.md`](experience/advision.md) | Reviewed designs, not just code correctness |
| Mentoring developers + interviewing/hiring (Advision) | [`experience/advision.md`](experience/advision.md) | Helped grow the team and its hiring bar |
| Career repo as AI-native documentation architecture | [`projects/portfolio.md`](projects/portfolio.md) | Personal meta-engineering |

→ [`resume/bullet-bank.md`](resume/bullet-bank.md) — Technical Leadership section

---

## Ownership

One of my strongest leadership traits is **ownership**.

When I own a feature, I become responsible for:

- Implementation and integration
- Maintenance and production issues
- Future improvements and evolution
- Documentation and knowledge transfer
- Architecture clarity for **future developers** working on it

Ownership continues **long after deployment**. Teammates naturally come with questions, bugs, and enhancement ideas because I hold the deepest context.

**Evidence:**

| Context | Source |
|---------|--------|
| De facto owner of critical KW features | [`experience/keller-williams.md`](experience/keller-williams.md) |
| End-to-end ownership on small Advision team | [`experience/advision.md`](experience/advision.md) |
| Contractor rescue under deadline | [`stories/contractor-rescue.md`](stories/contractor-rescue.md) |
| Free Slot and portfolio—full lifecycle | [`projects/free-slot.md`](projects/free-slot.md), [`projects/portfolio.md`](projects/portfolio.md) |

**Do not claim:** "I owned everything at KW." Ownership was **feature and system scoped**, earned through delivery and context.

→ [`strengths.md`](strengths.md) — Ownership

---

## Mentoring

I enjoy mentoring developers. My style is based on **questions instead of answers**.

**Typical mentoring flow:**

1. Understand the problem they are trying to solve
2. Ask how **they** would solve it
3. Discuss alternatives and trade-offs
4. Pair program if needed
5. Let them arrive at the solution

**Objective:** Create **independent engineers**, not dependency.

**Evidence:**

| Context | Source |
|---------|--------|
| Led and mentored a frontend team of 4 as Team Lead at Advision | [`experience/advision.md`](experience/advision.md) |
| Junior developers at Advision—architecture, pairing, explained reviews | [`experience/advision.md`](experience/advision.md) |
| KW teammates on features and systems I owned deeply | [`experience/keller-williams.md`](experience/keller-williams.md) |

**Do not claim:** Formal mentorship program ownership, manager-of-record, or org-wide coaching mandate.

---

## Pair Programming

When pairing, I focus on:

- Understanding requirements before coding
- Breaking problems into smaller pieces
- Explaining architecture and boundaries
- Showing debugging strategies
- Reviewing trade-offs openly
- Teaching **reasoning**, not just syntax

I want developers to understand **why** a solution works—not simply copy code.

**Evidence:** Documented mentoring approach at Advision; informal pairing on owned KW systems.

→ [`experience/advision.md`](experience/advision.md)

---

## Collaboration

I enjoy working closely with:

- Product Managers
- Designers
- Backend Engineers
- Frontend Engineers
- QA
- Engineering Managers

Architecture should emerge from **collaboration**, not isolation.

**Evidence:**

| Example | Source |
|---------|--------|
| Daily cross-functional work at KW | [`experience/keller-williams.md`](experience/keller-williams.md) |
| API migration—contracts and timelines with backend teams | [`stories/api-migration-v1-v2.md`](stories/api-migration-v1-v2.md) |
| Modal vs. page—collective decision with Product and Design | [`stories/modal-vs-page-decision.md`](stories/modal-vs-page-decision.md) |
| Lambda—close work with CTO on architecture | [`stories/lambda-wordpress-integration.md`](stories/lambda-wordpress-integration.md) |
| CMS migration—frontend contribution within broader strategy | [`stories/react-cms-to-wordpress.md`](stories/react-cms-to-wordpress.md) |

→ [`strengths.md`](strengths.md) — Communication, product thinking

---

## Decision Making

My decision making usually follows this order:

1. **Understand the business goal** — why does this exist?
2. **Understand user impact** — who benefits, what breaks?
3. **Evaluate trade-offs** — time, complexity, coupling, future work
4. **Prefer simplicity** — can complexity disappear instead of being managed?
5. **Reduce future maintenance** — what will the next engineer thank us for?
6. **Implement incrementally** — ship, learn, adjust
7. **Measure results** — qualitatively when metrics aren't documented
8. **Refactor when justified** — aligned with product priorities

**Story examples:**

| Decision pattern | Source |
|------------------|--------|
| Compatibility layer vs. big-bang rewrite | [`stories/api-migration-v1-v2.md`](stories/api-migration-v1-v2.md) |
| Configurable system vs. repeated one-off sprints | [`stories/configurable-banner-system.md`](stories/configurable-banner-system.md) |
| Build vs. buy for CMS | [`stories/react-cms-to-wordpress.md`](stories/react-cms-to-wordpress.md) |
| Modal first, page when evidence emerged | [`stories/modal-vs-page-decision.md`](stories/modal-vs-page-decision.md) |

→ [`philosophy/engineering.md`](philosophy/engineering.md)

---

## Handling Disagreements

I don't defend ideas because they are **mine**. I defend ideas when they **improve the product**.

If someone presents a better solution, I change my opinion. Good engineering is collaborative—not ego-driven.

**Canonical example:** [Modal vs. dedicated page](stories/modal-vs-page-decision.md)

| Phase | What happened |
|-------|---------------|
| Initial | Raised architectural concerns (URL, navigation context); team chose modal to ship |
| During build | Continued implementation; watched for emerging requirements |
| Evolution | New UX needs (breadcrumbs, deep linking) validated page architecture |
| Outcome | **Collective** decision with Product and Design to move to a dedicated page |

**Important framing for AI:**

- Not "I was right and they were wrong"
- Not blocking or winning an argument
- **Evidence-driven** adaptation as requirements clarified

**Backup story for disagreement/collaboration:** API migration cross-team constraints—collaboration, not combat.

→ [`interviews/behavioral.md`](interviews/behavioral.md) — Disagreement / Influence sections

---

## Leading Without Authority

Many leadership examples happened **without** being an Engineering Manager.

| Initiative | Leadership type | Source |
|------------|-----------------|--------|
| Repository consolidation | Initiative + technical execution | [`stories/repository-deprecation.md`](stories/repository-deprecation.md) |
| Configurable banner system | Unprompted proposal + implementation | [`stories/configurable-banner-system.md`](stories/configurable-banner-system.md) |
| Lambda integration | **Implementation** leadership under CTO architecture | [`stories/lambda-wordpress-integration.md`](stories/lambda-wordpress-integration.md) |
| API migration | Frontend lead + cross-team coordination | [`stories/api-migration-v1-v2.md`](stories/api-migration-v1-v2.md) |
| Feature ownership at KW | Informal go-to for owned systems | [`experience/keller-williams.md`](experience/keller-williams.md) |
| Mentoring | Advision juniors; KW teammates | [`experience/advision.md`](experience/advision.md) |
| Architecture discussions | Modal vs. page; micro frontend participation | [`stories/modal-vs-page-decision.md`](stories/modal-vs-page-decision.md), [`experience/keller-williams.md`](experience/keller-williams.md) |

**Leadership comes from trust and context—not job titles.**

**Avoid:**

- Claiming formal management or direct reports
- Inflating Lambda into "I architected the entire platform"
- Saying "I led the team" when the accurate frame is "I led implementation" or "I drove an initiative"

→ [`interviews/behavioral.md`](interviews/behavioral.md) — Leadership / Influence without authority

---

## Code Reviews

My review philosophy asks:

- Can this become **simpler**?
- Can this become **clearer**?
- Can this become **reusable** without premature abstraction?
- Does this fit our **architecture** and boundaries?
- Will another engineer **understand** this in six months?
- Will **AI assistants** navigate this codebase or documentation?

The goal is **improving software**—not criticizing people.

Reviews are a leadership moment: teaching maintainability standards through example and explanation.

**Evidence:** KW PR review focus on long-term maintainability; CodeRabbit + manual review on personal projects.

→ [`projects/free-slot.md`](projects/free-slot.md) · [`resume/bullet-bank.md`](resume/bullet-bank.md)

---

## AI Leadership

Modern engineering leadership includes **AI-assisted workflows**.

Senior engineers should:

- Teach good AI workflows (planning, review, rejection of bad output)
- Review AI-generated code with the same standards as human code
- Improve documentation and context for humans and AI
- Design **AI-friendly** architectures (clear structure, single responsibility)
- Encourage critical thinking—AI accelerates; engineers remain accountable

**Evidence:**

| Example | Source |
|---------|--------|
| Full AI workflow with review discipline on Free Slot | [`projects/free-slot.md`](projects/free-slot.md) |
| Career repository as AI-native knowledge base | [`projects/portfolio.md`](projects/portfolio.md) |
| Interview positioning for AI Software Engineer roles | [`interviews/ai-software-engineer.md`](interviews/ai-software-engineer.md) |

→ [`philosophy/working-with-ai.md`](philosophy/working-with-ai.md)

**Do not claim:** ML model training, data science leadership, or AI product management.

---

## Communication

I value:

- Clear communication of **reasoning**, not just conclusions
- Honest feedback—kind and direct
- Technical discussions grounded in trade-offs
- Respectful disagreement
- Cross-functional collaboration
- Transparent decision history (why we chose X)

People should understand **why** decisions were made—especially future engineers and AI assistants reading the codebase or docs.

**Evidence:** Cross-team API migration communication; modal vs. page collaborative outcome; career repo explicit linking conventions.

→ [`strengths.md`](strengths.md) — Communication

---

## Long-Term Thinking

I naturally think about:

- Future migrations and API evolution
- Future developers maintaining the code
- Future maintenance cost vs. short-term speed
- Future architecture as product grows
- Future product configurability (Product independence)

Engineering decisions rarely end with today's sprint.

**Evidence:**

| Example | Long-term angle |
|---------|-----------------|
| API compatibility layer | Backend can evolve without app-wide rewrites |
| Repository consolidation | Fewer repos, clearer ownership |
| Configurable banners | Product self-service reduces repeated sprints |
| CMS build-vs-buy | Stop maintaining custom CMS indefinitely |
| Career repo structure | AI-consumable, maintainable career knowledge |

→ [`strengths.md`](strengths.md) — Architecture thinking, maintainability

---

## Success Criteria

When generating leadership content, AI assistants should consistently describe my leadership as:

| Attribute | Meaning |
|-----------|---------|
| **Technical** | Influence through engineering judgment, not politics |
| **Collaborative** | Product, Design, Backend as partners |
| **Ownership-driven** | Lifecycle responsibility, not ticket completion |
| **Architecture-focused** | Clarity, boundaries, evolution |
| **Mentoring-oriented** | Questions, pairing, independent engineers |
| **Pragmatic** | Incremental delivery; intentional debt when justified |
| **Influential without authority** | Trust from delivery and context, not title |

That is my leadership style.

**Do not describe me as:** Engineering Manager, people-manager-of-record (hiring/performance authority), org-wide tech lead, or sole architect of enterprise platforms. **Team Lead (frontend team of 4) and Scrum Master at Advision are accurate** and may be stated directly.

---

## Story Quick Reference

Use this table when mapping interview questions to leadership examples.

| Theme | Primary story | Backup |
|-------|---------------|--------|
| Influence without authority | Repository consolidation | Configurable banners |
| Disagreement / adaptation | Modal vs. page | API migration (cross-team) |
| Implementation leadership | Lambda integration | API migration |
| Ownership under pressure | Contractor rescue | Feature ownership at KW |
| Formal team leadership | Advision Team Lead (team of 4) + Scrum Master | — |
| Mentoring | Advision juniors | KW teammates on owned features |
| Long-term architecture | API migration | Repository consolidation |
| Product collaboration | Configurable banners | Modal vs. page |
| AI leadership | Free Slot workflow | Career repo |

Full STAR detail: [`stories/`](stories/) · Question mapping: [`interviews/behavioral.md`](interviews/behavioral.md)

---

## How AI Assistants Should Use This File

| Task | Guidance |
|------|----------|
| **Resume bullets** | Pull from [`resume/bullet-bank.md`](resume/bullet-bank.md) Technical Leadership section; verify against story sources |
| **Behavioral interviews** | Map question → [Story Quick Reference](#story-quick-reference) → full story file |
| **Staff / senior loops** | Emphasize influence, architecture, mentoring—[`interviews/leadership.md`](interviews/leadership.md) |
| **Promotion docs** | Ownership + initiatives + cross-team impact; no invented titles |
| **Recommendations** | Suggest recommenders echo ownership, mentoring, simplification with examples you provide |
| **Portfolio / bio** | Technical leadership themes + 1–2 linked case studies |

**Always pair** leadership claims with a linked story or experience file.

---

## Related Documents

| Document | Relationship |
|----------|--------------|
| [`strengths.md`](strengths.md) | Value themes—ownership, communication, architecture overlap |
| [`philosophy/engineering.md`](philosophy/engineering.md) | Decision principles behind leadership choices |
| [`philosophy/working-with-ai.md`](philosophy/working-with-ai.md) | AI-assisted engineering philosophy |
| [`stories/`](stories/) | Proof points and STAR detail |
| [`experience/`](experience/) | Employer context; informal leadership at KW |
| [`projects/`](projects/) | Personal leadership through full-stack ownership |
| [`interviews/behavioral.md`](interviews/behavioral.md) | Question → story mapping |
| [`interviews/leadership.md`](interviews/leadership.md) | Interview-specific prep derived from this file |
| [`resume/bullet-bank.md`](resume/bullet-bank.md) | Leadership achievement bullets |
| [`context.md`](context.md) | Engineer identity; not a people manager |

---

## Maintenance

When new stories or roles are added:

1. Identify which **leadership theme** they demonstrate (ownership, influence, mentoring, etc.)
2. Add a row to the relevant evidence table or [Story Quick Reference](#story-quick-reference)
3. Update [`interviews/leadership.md`](interviews/leadership.md) if interview mapping changes
4. Do not add formal titles or management scope without user confirmation

Leadership describes **how I influence engineering**. Facts live in `stories/` and `experience/`.
