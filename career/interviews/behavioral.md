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
| **Situation** | Sports-betting marketing site; contractor failed to deliver primary sportsbook-listing React page after several weeks; event-driven deadline; contractor gone; meeting with PM, Lead, another dev—postpone was the main option. |
| **Task** | Volunteer to finish; deliver before sporting-event deadline with less than a week left; decide continue vs. rebuild. |
| **Actions** | Had already reviewed contractor branch; volunteered ("I'll do it"); Lead confirmed commitment (overtime); told team rebuild was simpler; implemented visual responsive page mostly solo; Lead helped with questions. |
| **Result** | Shipped on time; positive team and client feedback; maintainable implementation. **Volunteered ownership—early career (~2 years).** |
| **Lessons** | Event deadlines don't bend; step up when team is stuck; inherited code deserves objective evaluation; rewrite can be lower risk than repair. |

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

### Micro Frontend Migration

**Source:** [`../stories/microfrontend-migration.md`](../stories/microfrontend-migration.md) · **Employer:** Keller Williams

| STAR | Summary |
|------|---------|
| **Situation** | Shared shell library was a dependency of ~40 frontend repositories; every shell update forced coordinated package bumps and re-releases across all of them (dependency hell). |
| **Task** | Organization made a staff-level decision to adopt micro frontends; execute the migration for the three repositories my team owned without destabilizing production. |
| **Actions** | Migrated all three owned applications onto the micro frontend model; learned the architecture (exposure, composition, independent deployment) while executing. |
| **Result** | Team's applications shipped independently; shell updates stopped fanning out into dozens of releases. **No quantified metrics documented.** |
| **Lessons** | Shared libraries have a scaling ceiling; executing others' decisions well is a skill; migrations are learning accelerators. |

**Competencies:** Architecture at scale · Execution · Learning quickly · Micro frontends

**Strong for:** Architecture at scale · Learning new technology under constraints · Executing a decision you didn't make

**Honest scope:** The decision was organizational; my contribution was executing my team's three repositories.

---

### Production Debugging Workflow (Supplementary)

**Source:** [`../stories/production-debugging-workflow.md`](../stories/production-debugging-workflow.md) · **Employer:** Keller Williams

| STAR | Summary |
|------|---------|
| **Situation** | Production bugs arrived as Zendesk tickets, usually with a user session capture attached. |
| **Task** | Diagnose and resolve production issues for owned features; keep users unblocked. |
| **Actions** | Investigated session data; narrowed down errors; reproduced locally following user steps when needed; for critical bugs, rolled back first, then fixed and redeployed ASAP. |
| **Result** | Fast restoration on critical failures; tight feedback loop into how features were built. **A workflow pattern, not a single incident: do not invent a specific outage.** |
| **Lessons** | Restore first, diagnose second; session data shortens diagnosis; production support is part of ownership. |

**Competencies:** Debugging · Production discipline · Ownership

**Strong for:** How do you handle production bugs · Debugging process · Speed vs. safety

---

### Mentoring a Junior Through React Fundamentals

**Source:** [`../stories/mentoring-junior-react.md`](../stories/mentoring-junior-react.md) · **Employer:** Advision

| STAR | Summary |
|------|---------|
| **Situation** | Recent graduate on the team struggled with React fundamentals; completing tickets was a real challenge for her. |
| **Task** | As the most experienced React developer, make her productive and self-sufficient. |
| **Actions** | Sat with her most evenings teaching React fundamentals (components, props, state, rendering); taught the model, not the ticket; sustained investment over time. |
| **Result** | She grasped the fundamentals and started completing tickets independently. **No timeline metrics documented.** |
| **Lessons** | Consistent short sessions beat one-off explanations; teach the model, not the ticket; mentoring is a seniority obligation. |

**Competencies:** Mentoring · Patience · Seniority · Teaching

**Strong for:** Mentoring/coaching · Helping someone grow · What seniority means

---

### Team Lead Burnout (Failure Story)

**Source:** [`../stories/team-lead-burnout.md`](../stories/team-lead-burnout.md) · **Employer:** Advision (Lead period, 2020)

| STAR | Summary |
|------|---------|
| **Situation** | Most senior developer on my team of 4 (after me) was capable and delivering, but did not want the senior/lead track; the company's PM and culture expected more from him. |
| **Task** | As a first-time lead, balance stakeholder expectations against the developer's honest preferences. |
| **Actions** | Handled it badly: kept pushing him toward a role he did not want, did not push back upward, did not protect the working arrangement; lacked the soft skills at the time. |
| **Result** | He burned out and quit; we have not spoken since. The experience soured me on formal lead roles for a while. |
| **Lessons** | Meet people where they are; retention is a leadership outcome; a lead absorbs pressure downward selectively; soft skills are learned skills. |

**Competencies:** Leadership (failure) · Self-awareness · People judgment

**Strong for:** Biggest failure · Difficult team situation · What would you do differently as a leader

**Avoid:** Blaming the developer; venting about company culture; pretending the outcome was fine.

---

### Greenfield Java API (Early-Career Failure)

**Source:** [`../stories/greenfield-api-lesson.md`](../stories/greenfield-api-lesson.md) · **Employer:** First Factory

| STAR | Summary |
|------|---------|
| **Situation** | Junior engineer assigned to start a new system for a US client; responsible for architecting the database and REST API; senior supervisor was largely hands-off. |
| **Task** | Design and deliver the system's foundation (schema, API) essentially unsupervised. |
| **Actions** | Designed and built the database and Java REST API (Hibernate, Jersey); made architectural mistakes without an engaged reviewer; did not insist on design review. |
| **Result** | The team was eventually removed from the client engagement; I believe my wrong decisions contributed. **Specific wrong decisions are not remembered; do not reconstruct them.** |
| **Lessons** | Ask for design review early and explicitly; foundational decisions deserve disproportionate scrutiny; supervision that never intervenes is not mentorship. |

**Competencies:** Architecture (early) · Honesty · Growth from failure

**Strong for:** Biggest mistake · Failure with real consequences · Why design review matters to me

**Avoid:** Blaming the senior colleague; inventing the specific technical mistakes.

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
| Micro frontend migration | Architecture at scale, learning fast, execution | Already used for "architecture" |
| Production debugging workflow | Production process, debugging discipline | Process questions only (not a single incident) |
| Mentoring junior (React) | Mentoring, coaching, seniority | Mentoring questions only |
| Team lead burnout | Failure, difficult people situation, leadership lessons | Use once per interview; it is heavy |
| Greenfield API | Early failure with consequences, design review | Already used for "failure" |

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

### Why did you leave Keller Williams?

**Honest answer (keep it brief and neutral):**

> I was laid off in April 2026 when Keller Williams restructured and ended all of its independent contractor engagements; my role was structured that way. It wasn't performance-related. Since then I've been shipping personal projects and doing structured coursework while interviewing, so the time has been continuous building, not a gap.

**Important points:** State it plainly and move on; do not over-explain or apologize. Pivot quickly to what you have built since (Free Slot, portfolio, AI chat feature, coursework in [`../learning/2026.md`](../learning/2026.md)).

**Avoid:** Bitterness about the restructuring; vagueness that sounds like hiding something; calling it a "gap."

**Source:** [`../experience/keller-williams.md`](../experience/keller-williams.md)

---

### Why isn't your degree finished? / What were you doing in 2015?

**Degree (Computer Engineering, ~90%):** Only the final research project is missing. Once I started working full-time, the career took priority over that last requirement. State it plainly; never claim a conferred degree.

**2015 gap (between FPT internship and First Factory):** I finished my technical degree, started Computer Engineering at ULACIT, and job hunted. The first round of applications didn't land a role, so I kept studying; when I felt ready I applied again and got First Factory in May 2016. Frame it as education, not idleness.

**Source:** [`../resume/master-resume.md`](../resume/master-resume.md) (Education)

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

**Two documented, honest failure stories now exist. Prefer these:**

1. **Team lead burnout** ([`../stories/team-lead-burnout.md`](../stories/team-lead-burnout.md)): best for people/leadership failure. As a first-time lead I mishandled a capable developer who did not want the senior track; he burned out and quit. Strongest when the role involves leading or mentoring.
2. **Greenfield Java API** ([`../stories/greenfield-api-lesson.md`](../stories/greenfield-api-lesson.md)): best for technical/judgment failure with real consequences. Early-career architecture mistakes made without insisting on design review contributed to losing a client engagement. Strongest for "mistake that changed how you work."

**Pick by interview type:** leadership-flavored question → burnout story; technical-flavored question → greenfield API. Both end with a concrete behavior change, which is what the question is really asking for.

**Backup framings (if both stories are already used):**

| Approach | Story / framing |
|----------|-----------------|
| **Learning from early direction** | Modal vs. page — team tried modal; requirements evolved; adapted collectively |
| **Calibration weakness** | Undervaluing own impact (dashboard fix felt "normal" but mattered to team) |
| **Judgment trade-off** | Times maintainability investment exceeded what deadline required—learned to balance ([Weaknesses](#weaknesses)) |

**Production incidents:** the debugging/rollback **workflow** is documented ([`../stories/production-debugging-workflow.md`](../stories/production-debugging-workflow.md)), but no single named outage story exists. **Do not fabricate** a specific outage or RCA narrative.

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
5. **Mentoring** — Advision juniors ([`../stories/mentoring-junior-react.md`](../stories/mentoring-junior-react.md)); KW teammates on owned features
6. **Leadership failure**: when asked about hard leadership lessons, use [`../stories/team-lead-burnout.md`](../stories/team-lead-burnout.md)
7. **De facto lead at KW**: the team never had a dedicated tech lead; I took ownership of technical decisions, with my manager typically asking "what is your recommendation?"

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

**Primary stories:** Micro frontend migration (learned the architecture while executing it) · Dashboard performance (new to codebase) · Contractor rescue (rapid requirements → delivery) · First Factory professional transition

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

## Weaknesses

**Do not use fake weaknesses** ("I work too hard").

**Documented honest framings:**

1. **Maintainability vs. deadline** — Sometimes I invest extra time simplifying or refactoring when good-enough would meet the immediate deadline. I've learned to align improvements with product priorities and ask whether incremental quality work fits the sprint—or belongs on the roadmap.

2. **Undervaluing impact** — Problems can feel "straightforward" after years of experience (dashboard fix, API mapper). I practice articulating **user and team impact**, not just technical steps.

3. **Specialization perception** — Recent years are frontend-heavy; I actively reinforce backend narrative with Advision/First Factory evidence and full-stack projects so others don't pigeonhole me.

**Documented failure stories:** [`../stories/team-lead-burnout.md`](../stories/team-lead-burnout.md) (people/leadership) and [`../stories/greenfield-api-lesson.md`](../stories/greenfield-api-lesson.md) (technical judgment). A single named production outage remains undocumented; the workflow is in [`../stories/production-debugging-workflow.md`](../stories/production-debugging-workflow.md).

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
| Single named production incident (specific outage + RCA) | Workflow documented in [`../stories/production-debugging-workflow.md`](../stories/production-debugging-workflow.md); add one concrete incident when recalled |
| Formal conflict with peer | No dedicated story; use modal vs. page, cross-team API friction, or team-lead burnout honestly |
| ~~Python / Flask story~~ | Resolved: a couple of months of maintenance on a Flask service, resume keyword only, not story-worthy (see [`../experience/first-factory.md`](../experience/first-factory.md)) |

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
