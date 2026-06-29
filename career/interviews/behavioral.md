# Behavioral Interview Knowledge Base

## Purpose

This document is **not** a list of interview questions with canned answers. It is a knowledge base describing my engineering stories, values, and decision-making so future AI assistants can help prepare for behavioral interviews.

**Objectives:**

- Simulate behavioral interviews consistently
- Generate STAR answers grounded in documented stories
- Adapt stories to different company styles (Amazon, Stripe, Meta, OpenAI, startups, etc.)
- Identify the **strongest story** for each question type
- **Avoid repeating** the same story when multiple competencies need coverage
- Reflect how I **genuinely** think and work

**Rules:** Never fabricate stories. Never exaggerate impact. When metrics are unknown, explain engineering reasoning and business impact qualitatively.

**Canonical sources:** [`../stories/`](../stories/), [`../experience/`](../experience/), [`../context.md`](../context.md), [`../philosophy/`](../philosophy/)

---

## How AI Assistants Should Use This Document

1. Read [`../context.md`](../context.md) and [`../strengths.md`](../strengths.md) for identity and value themes before generating answers.
2. Select a story from the [Story library](#story-library) mapped to the question theme.
3. Expand using the linked story file for accurate detail—do not invent scenes, metrics, or dialogue.
4. Format as **STAR** (Situation, Task, Action, Result) when the user wants a full answer.
5. Rotate stories across a mock interview—see [Story rotation guide](#story-rotation-guide).
6. Challenge the user if they undervalue impact ([`../context.md`](../context.md) calibration rules).
7. For gaps marked **Not yet documented**, ask the user or use weakness/framing guidance—never fabricate.

---

## My Engineering Identity

**Core traits:** Ownership · Code quality · Maintainability · Simplicity · Collaboration · Product thinking · Curiosity · Continuous learning · Pragmatism · AI-assisted engineering

**I prefer:**

- Simple systems over clever ones
- Reusable abstractions that remove complexity—not ceremony
- Incremental improvements over massive rewrites
- Reducing technical debt gradually, aligned with product work
- Removing code instead of adding unnecessary code
- Keeping engineering aligned with business value

→ Full profile: [`../context.md`](../context.md) · Principles: [`../philosophy/engineering.md`](../philosophy/engineering.md)

---

## Core Principles (Interview Framing)

I don't believe engineering is about writing the most code. I believe it is about **solving business problems while leaving the codebase healthier than before**.

I care deeply about:

- **Maintainability** — code outlives the ticket
- **Readability** — code is read more than written
- **Architecture** — boundaries, stable interfaces, reduced blast radius
- **Ownership** — end-to-end responsibility, not ticket completion
- **Developer experience** — for teammates and my future self
- **Long-term sustainability** — products expected to live for years

**Interview philosophy:** The best engineers often **remove complexity** instead of adding it. Good engineering is simple, maintainable, understandable, collaborative, and business-driven.

---

## Story Library

Each entry summarizes STAR components. **Full detail lives in linked story files**—expand from there, do not duplicate or embellish here.

---

### Repository Consolidation

**Source:** [`../stories/repository-deprecation.md`](../stories/repository-deprecation.md) · **Employer:** Keller Williams

| STAR | Summary |
|------|---------|
| **Situation** | Team owned three repositories; overlapping responsibilities created deployment overhead, duplicated config, and cognitive load—nothing broken, but architecture was more complex than needed. |
| **Task** | Reduce maintenance and operational complexity without disrupting product delivery or requiring a standalone refactor project. |
| **Actions** | Noticed URL migration touched same areas as repo boundaries; proposed combining efforts; analyzed dependencies; migrated incrementally; deprecated entire repository (three → two). |
| **Result** | Simpler architecture, fewer pipelines, lower maintenance, clearer ownership. **No quantified metrics documented.** |
| **Lessons** | Best architectural improvements often appear during product work; deleting software can create more value than adding it. |

**Competencies:** Architecture · Ownership · Refactoring · Technical leadership · Pragmatism · Developer experience

**Strong for:** Technical debt · Simplification · Initiative · Balancing delivery with quality · Project you're proud of

---

### API Migration (V1 → V2)

**Source:** [`../stories/api-migration-v1-v2.md`](../stories/api-migration-v1-v2.md) · **Employer:** Keller Williams

| STAR | Summary |
|------|---------|
| **Situation** | Frontend depended on external team's API; V2 changed response structure completely; many consumers existed. |
| **Task** | Adopt new backend contract without massive frontend refactor, high regression risk, or blocking ongoing feature work. |
| **Actions** | Evaluated direct refactor vs. compatibility layer; chose mapper transforming V2 → existing internal model; coordinated with external backend team; fixed issues incrementally at integration boundary. |
| **Result** | Successful migration with minimal consumer changes; isolated future contract changes; ongoing development continued. **No quantified metrics documented.** |
| **Lessons** | Stable internal models insulate apps from external evolution; reduce blast radius at boundaries. |

**Competencies:** Architecture · Backend understanding · Cross-team collaboration · Risk management · Integration design

**Strong for:** Difficult migration · Working across teams · Architectural decision · Minimizing regressions · Backend integration

---

### Configurable Banner System

**Source:** [`../stories/configurable-banner-system.md`](../stories/configurable-banner-system.md) · **Employer:** Keller Williams

| STAR | Summary |
|------|---------|
| **Situation** | Developers repeatedly spent entire sprints building simple informational banners; engineers were part of the content workflow. |
| **Task** | Eliminate repetitive engineering work without overengineering a simple domain. |
| **Actions** | Proposed configurable banner system unprompted; designed lightweight config-driven component (location, content, visibility, behavior); enabled Product self-serve. |
| **Result** | System used ~3 years; banner requests became configuration; eventually deprecated cleanly when no longer needed. **No quantified time-savings metrics—describe qualitatively.** |
| **Lessons** | Recurring work signals missing abstraction; best feature may prevent future feature requests. |

**Competencies:** Product thinking · Automation · Architecture · Developer experience · Initiative

**Strong for:** Unassigned opportunity · Developer productivity · Reusable systems · Root cause thinking

---

### Lambda Integration (WordPress)

**Source:** [`../stories/lambda-wordpress-integration.md`](../stories/lambda-wordpress-integration.md) · **Employer:** Advision

| STAR | Summary |
|------|---------|
| **Situation** | WordPress marketing site needed internal service data; internal API exposed too much; direct coupling was wrong. |
| **Task** | Expose only required data reliably; CTO defined Lambda architecture; candidate owned implementation. |
| **Actions** | Led Lambda implementation; transformed and cached responses; configured AWS (Lambda, API Gateway, IAM, EC2, S3); scheduled sync (not real-time—business-appropriate); worked with CTO throughout. |
| **Result** | Reliable integration; clean separation between internal services and CMS. **No quantified metrics documented.** |
| **Lessons** | Different consumers need different data shapes; cloud services should simplify integration. |

**Competencies:** Backend · Cloud · Leadership (implementation) · Integration · Service boundaries

**Strong for:** Backend project · AWS · Cloud integration · Leading implementation · Data transformation

---

### Contractor Rescue

**Source:** [`../stories/contractor-rescue.md`](../stories/contractor-rescue.md) · **Employer:** Advision

| STAR | Summary |
|------|---------|
| **Situation** | External contractor failed to deliver React page after several weeks; deadline fixed; partial non-functional implementation remained. |
| **Task** | Deliver production-ready feature before deadline; decide continue vs. rebuild. |
| **Actions** | Evaluated partial work objectively; chose clean rebuild from approved designs; implemented page, data integration, validation; focused on delivery over archaeology of incomplete code. |
| **Result** | Feature shipped before deadline; maintainable implementation team owned. **Not a personal failure story—organizational recovery.** |
| **Lessons** | Inherited code deserves objective evaluation; rewrite is sometimes lower risk than repair under deadline pressure. |

**Competencies:** Ownership · Execution · Delivery · Judgment · Pressure

**Strong for:** Taking ownership · Delivering under pressure · Rewrite vs. refactor · Recovering struggling work

**Avoid:** Blaming the contractor; framing as "hero save" without humility.

---

### Dashboard Performance

**Source:** [`../stories/dashboard-performance.md`](../stories/dashboard-performance.md) · **Employer:** Keller Williams

| STAR | Summary |
|------|---------|
| **Situation** | Dashboard felt slow after load; functionally correct; early in tenure on project—learning codebase while fixing real UX pain. |
| **Task** | Improve responsiveness without large rewrite; production stability required. |
| **Actions** | Investigated render flow first (not premature memoization); ruled out backend as primary issue; identified unnecessary rendering; applied simple targeted fix. |
| **Result** | Noticeably more responsive; teammates valued fix more than I expected. **No latency metrics documented.** |
| **Lessons** | Performance work starts with observation; boring fixes to real pain matter; user impact ≠ implementation complexity. |

**Competencies:** Debugging · Performance · React · Investigation · Humility

**Strong for:** Difficult bug · Performance optimization · Unfamiliar codebase · Root cause

---

### Modal vs. Page

**Source:** [`../stories/modal-vs-page-decision.md`](../stories/modal-vs-page-decision.md) · **Employer:** Keller Williams

| STAR | Summary |
|------|---------|
| **Situation** | Cross-organization search feature proposed as modal in org-centric app; I raised architectural concerns about navigation context early. |
| **Task** | Choose UX/architecture matching feature responsibilities—not win an argument. |
| **Actions** | Advocated for dedicated page (URL, history, lifecycle); team proceeded with modal given constraints; as breadcrumbs/deep linking emerged, complexity grew; discussed with Product/Design; collective move to page. |
| **Result** | Simpler implementation; navigation behavior from platform not custom modal simulation. **Not "I was right"—requirements evolved.** |
| **Lessons** | Architecture should follow product behavior; revisit assumptions when new information appears; stop simulating the browser inside wrong container. |

**Competencies:** Product thinking · Communication · Architecture · Collaboration · Adaptability

**Strong for:** Disagreement · Influencing without authority · Changing direction · Product partnership · UX + engineering

**Avoid:** "I told them so" framing.

---

### CMS Migration (Build vs. Buy) — Supplementary

**Source:** [`../stories/react-cms-to-wordpress.md`](../stories/react-cms-to-wordpress.md) · **Employer:** Advision

| STAR | Summary |
|------|---------|
| **Situation** | Custom React CMS became expensive to maintain; content tasks required engineers. |
| **Task** | Support migration to WordPress from frontend side with minimal user disruption. |
| **Actions** | Adapted frontend to consume WordPress content; supported transition while product continued operating. |
| **Result** | Simpler content workflows; reduced custom CMS maintenance. **Candidate did not own overall migration strategy.** |
| **Lessons** | Not every problem needs custom software; engineering quality includes what you stop maintaining. |

**Competencies:** Pragmatism · Migration · Build vs. buy · Frontend integration

**Strong for:** Legacy modernization · Technical debt · Pragmatic engineering

---

### Free Slot — AI Judgment (Supplementary)

**Source:** [`../projects/free-slot.md`](../projects/free-slot.md) · **Personal project**

| STAR | Summary |
|------|---------|
| **Situation** | Using AI-assisted development on personal full-stack project. |
| **Task** | Ship maintainable code, not accept generated complexity. |
| **Actions** | Used AI for drafts/tests/exploration; reviewed critically; **rejected** AI implementation that over-engineered a simple feature; shipped simpler hand-written logic. |
| **Result** | Maintainable codebase; AI accelerates without replacing judgment. |
| **Lessons** | AI is accelerator; human owns simplification and architecture. |

**Competencies:** AI-assisted engineering · Code quality · Judgment

**Strong for:** Working with AI · Code review · Maintainability

---

## Story Rotation Guide

Avoid using the same story for every answer in one interview session.

| Story | Best for | Use sparingly for |
|-------|----------|-------------------|
| Repository consolidation | Simplification, tech debt, pride, initiative | Already used for "challenge" |
| API migration | Migration, cross-team, architecture, risk | Already used for "backend" |
| Configurable banners | Initiative, DX, product thinking | Already used for "improvement" |
| Lambda | Backend, AWS, leadership (implementation) | Already used for "cloud" |
| Contractor rescue | Ownership, pressure, delivery | Already used for "failure/recovery" |
| Dashboard performance | Debugging, performance, learning codebase | Already used for "challenge" |
| Modal vs. page | Disagreement, collaboration, product | Already used for "influence" |
| CMS migration | Build vs. buy, pragmatism | Legacy, modernization |
| Free Slot AI | AI workflow, judgment | AI-specific questions only |

---

## Common Behavioral Questions

For each: **recommended stories**, **important points**, **mistakes to avoid**.

---

### Tell me about yourself

**Recommended flow (2–3 minutes):**

1. Senior Software Engineer, ~10 years, software engineer with deep frontend expertise and practical backend experience
2. Recent years: large-scale React/TypeScript at Keller Williams—ownership, architecture, API migrations, simplification
3. Foundation: Team Lead / full-stack at Advision—led a frontend team of 4; Node.js, Lambda, GraphQL; Java/Spring Boot backend at First Factory
4. Current: Free Slot and portfolio—full-stack, Supabase, AI-assisted engineering, documentation-driven career repo
5. Theme: ownership, maintainability, simplifying systems, product thinking

**Important points:** Lead with **Software Engineer**, not Frontend Engineer. Mention backend and cloud as professional experience, not hobbies.

**Avoid:** Keyword dumps; invented metrics; "passionate about code"

**Sources:** [`../context.md`](../context.md), [`../resume/master-resume.md`](../resume/master-resume.md)

---

### Biggest technical challenge

**Primary stories (pick one):**

1. **Repository consolidation** — organizational complexity, incremental migration, aligned with product work
2. **API migration** — cross-team, structural contract change, compatibility layer trade-offs
3. **Lambda integration** — first cloud implementation leadership, service boundaries
4. **Dashboard performance** — investigation over optimization, unfamiliar codebase

**Important points:** Emphasize **decision process**, **options considered**, **trade-offs**, **why**—not heroics. No invented metrics.

**Avoid:** Claiming challenge was "easy"; frontend-only framing for KW stories

---

### Biggest failure / Tell me about a mistake

**⚠️ Not yet documented:** No production incident, rollback, or outage story exists in the career knowledge base. **Do not fabricate** rollback, RCA, or outage narratives.

**Until documented, use one of these honest approaches:**

| Approach | Story / framing |
|----------|-----------------|
| **Learning from early direction** | Modal vs. page — team tried modal; requirements evolved; adapted collectively (not personal failure, shows humility) |
| **Calibration weakness** | Undervaluing own impact (dashboard fix felt "normal" but mattered to team) |
| **Judgment trade-off** | Times maintainability investment exceeded what deadline required—learned to balance ([Weaknesses](#weaknesses)) |
| **Organizational context** | Contractor rescue — inherited failure, focus on evaluation and delivery (not your mistake) |

**When user adds a production incident story:** Document in `../stories/` first, then add STAR entry here.

**Avoid:** "I can't think of any failure"; inventing outages; blaming others

---

### Disagreement with team / teammate

**Primary story:** **Modal vs. page**

**Backup:** API migration (cross-team contract constraints—collaboration not combat)

**Important points:**

- Raised concerns early with **architectural reasoning**, not personal preference
- **Listened** — team had valid constraints; proceeded with modal initially
- Used **evidence** — emerging nav requirements validated concerns
- **Collaborative outcome** — Product/Design discussion, collective decision for page
- Not about winning

**Avoid:** "They were wrong"; conflict drama; taking credit alone

---

### Leadership / Influence without authority

**Primary stories:**

1. **Lambda integration** — led implementation under CTO direction
2. **Repository consolidation** — drove simplification initiative
3. **Configurable banners** — unprompted proposal
4. **Feature ownership at KW** — informal go-to for owned systems
5. **Mentoring** — Advision juniors; KW teammates on owned features

**Important points:** Not a people manager; leadership through **ownership**, **mentoring**, **technical clarity**, **initiative**

**Sources:** [`../experience/keller-williams.md`](../experience/keller-williams.md), [`../experience/advision.md`](../experience/advision.md), [`../leadership.md`](../leadership.md), [`leadership.md`](leadership.md)

**Avoid:** Claiming formal management; inflating Lambda into sole architect

---

### Technical debt

**Framework (philosophy-backed):**

- Technical debt **can be acceptable** when intentional and business-justified
- Prefer **gradual reduction** aligned with product priorities—not stop-the-world refactors
- Examples: repository consolidation with URL migration; API layer instead of big-bang rewrite; CMS build-vs-buy

**Stories:** Repository consolidation · API migration · CMS migration · Configurable banners (prevent debt accumulation)

**Avoid:** Perfectionism; "we had zero tech debt"; rewriting everything

**Source:** [`../philosophy/engineering.md`](../philosophy/engineering.md)

---

### Ownership

**Primary stories:**

1. **Repository consolidation** — saw opportunity, drove simplification
2. **Configurable banners** — unprompted system design
3. **Contractor rescue** — inherited delivery, rebuilt, shipped
4. **KW feature ownership** — long-term maintenance, bugs, enhancements, CI/CD literacy

**Important points:** Ownership = maintainability + production + future improvements, not just shipping

**Avoid:** Ticket-taker framing

---

### Working with Product / Design

**Primary stories:** Modal vs. page · Configurable banners · KW daily collaboration · UX suggestions during implementation

**Important points:**

- Ask **why** before coding ([`../philosophy/engineering.md`](../philosophy/engineering.md))
- Suggest UX improvements when they improve product outcome
- Refine requirements through discussion—not passive implementation
- Configurable banners moved Product into content workflow appropriately

**Avoid:** "Product was wrong"; engineering silo mentality

---

### Working with AI / AI-assisted development

**Primary stories:** Free Slot AI rejection · Portfolio career repo (context engineering) · General philosophy

**Important points:**

- AI **accelerates** drafting, tests, exploration, review
- Humans own **architecture**, **simplification**, **what ships**
- Review everything; reject unnecessary generated complexity
- AI is a **teammate**, not replacement for judgment
- Expect more time reviewing than typing every line

**Avoid:** "AI writes all my code"; hype; no review discipline

**Sources:** [`../context.md`](../context.md), [`../projects/free-slot.md`](../projects/free-slot.md), [`../philosophy/engineering.md`](../philosophy/engineering.md)

---

### Tell me about a time you learned something quickly

**Primary stories:** Dashboard performance (new to codebase) · Contractor rescue (rapid requirements → delivery) · First Factory professional transition

---

### Tell me about improving developer experience

**Primary stories:** Configurable banners · Repository consolidation · Free Slot local Supabase dev environment

---

### Tell me about a time you simplified something

**Primary story:** Repository consolidation

**Backup:** Configurable banners · API compatibility layer · CMS migration · Rejected over-complex AI code

---

## Personal Strengths

Use with **specific story evidence**—not as unsupported adjectives.

| Strength | Story evidence |
|----------|----------------|
| Ownership | Contractor rescue, KW feature ownership, Free Slot |
| Architecture | API migration, repo consolidation, modal vs. page |
| Simplification | Repo deprecation, banners, deletion over addition |
| Large codebases | KW (~5.5 years), incremental refactoring philosophy |
| Communication | Cross-team API migration, modal vs. page, Product/Design |
| Maintainability | Philosophy throughout; compatibility layers; Supabase abstraction |
| Learning quickly | Dashboard investigation (KW, new codebase); Advision full-stack context switching |
| Cross-functional collaboration | KW daily work; API migration |
| AI code review | Free Slot rejection example |

→ Themes also in [`../context.md`](../context.md)

---

## Weaknesses (Honest — Not Humble-Brags)

**Do not use fake weaknesses** ("I work too hard").

**Documented honest framings:**

1. **Maintainability vs. deadline** — Sometimes I invest extra time simplifying or refactoring when good-enough would meet the immediate deadline. I've learned to align improvements with product priorities and ask whether incremental quality work fits the sprint—or belongs on the roadmap.

2. **Undervaluing impact** — Problems can feel "straightforward" after years of experience (dashboard fix, API mapper). I practice articulating **user and team impact**, not just technical steps.

3. **Specialization perception** — Recent years are frontend-heavy; I actively reinforce backend narrative with Advision/First Factory evidence and full-stack projects so others don't pigeonhole me.

**Not yet documented:** Specific failure with production incident—add to stories when ready.

---

## Adapting to Company Styles

| Style | Emphasis when adapting STAR answers |
|-------|-------------------------------------|
| **Amazon (LPs)** | Ownership, dive deep (dashboard), invent and simplify (repo, banners), earn trust (modal collaboration), deliver results (contractor rescue) |
| **Stripe / startups** | Pragmatism, shipping, integration boundaries, full-stack ownership |
| **Meta / large tech** | Scale (KW), cross-team (API migration), architecture at organization level |
| **OpenAI / AI companies** | AI workflow judgment, context engineering, review discipline, Free Slot |

Always **ground** adaptations in documented stories—do not invent LP scenarios.

---

## Interview Philosophy

Good engineering is:

- **Simple** — prefer boring, understandable solutions
- **Maintainable** — next developer inherits with confidence
- **Understandable** — readability over cleverness
- **Collaborative** — Product, Design, Backend as partners
- **Business-driven** — intentional debt, aligned refactors

The best engineers often **remove complexity** instead of adding it.

---

## Gaps and Future Additions

| Gap | Action |
|-----|--------|
| Production incident / failure story | Add to `../stories/` when user documents one |
| Formal conflict with peer | No dedicated story—use modal vs. page or cross-team API friction honestly |

---

## Related Documents

| Document | Purpose |
|----------|---------|
| [`../strengths.md`](../strengths.md) | Canonical strengths for resumes, bios, recommendations |
| [`../leadership.md`](../leadership.md) | Leadership style—influence without management title |
| [`../stories/`](../stories/) | Full STAR detail and lessons |
| [`../philosophy/engineering.md`](../philosophy/engineering.md) | Values and decision principles |
| [`../philosophy/working-with-ai.md`](../philosophy/working-with-ai.md) | AI-assisted engineering philosophy |
| [`../context.md`](../context.md) | Engineer identity and AI assistant rules |
| [`../resume/master-resume.md`](../resume/master-resume.md) | Complete career facts |
| [`technical.md`](technical.md) | Technical interview prep |
| [`../leadership.md`](../leadership.md) | Canonical leadership style and evidence |
| [`leadership.md`](leadership.md) | Leadership interview prep (derived) |
---

## Maintenance

When a new story is added to `../stories/`:

1. Add STAR summary and competency tags here
2. Map to relevant behavioral questions
3. Update rotation guide to prevent overuse of existing stories

When generating STAR answers: **story file → this mapping → tailored answer**. Never skip the story file.
