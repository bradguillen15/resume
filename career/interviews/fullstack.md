# Senior Full Stack Interview Knowledge Base

## Purpose

This document is **not** a collection of backend interview questions or API trivia. It describes **how I think as a Full Stack Software Engineer** so future AI assistants can prepare me for **Senior Full Stack** interviews.

**Optimize for:** architecture, trade-offs, ownership, scalability thinking, maintainability, system design, connecting frontend and backend decisions.

**Do not optimize for:** memorizing APIs, framework syntax, or claiming depth I haven't documented.

**Objectives:**

- Simulate senior full stack interviews
- Generate backend and system design questions with trade-off focus
- Evaluate system design discussions against documented experience
- Identify weak areas and recommend study plans
- Connect frontend and backend decisions in answers
- Prepare coding interviews with full-stack context (API + UI boundaries)

**Rules:** Ground answers in [`../stories/`](../stories/), [`../experience/`](../experience/), [`../projects/`](../projects/). Never fabricate production systems, metrics, or scale I haven't operated.

**Related:** Resume positioning → [`../resume/fullstack-version.md`](../resume/fullstack-version.md) · Behavioral → [`behavioral.md`](behavioral.md) · Frontend depth → [`frontend.md`](frontend.md)

---

## How AI Assistants Should Use This Document

1. Read [`../context.md`](../context.md)—**Software Engineer** with deep frontend expertise and **professional** backend experience.
2. Use this doc for **system thinking**; use story files for **proof points**.
3. Ask **follow-up trade-offs** on every system design ("What breaks first?" "What would you defer?").
4. Connect answers across stack boundaries—API shape affects UI; deployment affects ownership.
5. For [Weak areas](#weak-areas), recommend study—do not let me bluff expert answers.
6. When simulating coding interviews, include **contract design**, not just algorithm puzzles.
7. Push back if I undersell Advision/First Factory backend or oversell KW as backend-authoring.

---

## Positioning (Interview Narrative)

**Frame:**

> I've spent the last several years specializing in frontend systems at scale while continuing to work across APIs, cloud integrations, databases, CI/CD, and full-stack personal projects. I think in **systems**, not layers.

**Primary objective:** Interviewer concludes—

> *This engineer clearly has stronger frontend experience, but understands backend architecture, cloud systems, APIs, deployment, and can contribute across the stack.*

**Honest scope:**

| Layer | Documented depth |
|-------|------------------|
| **Frontend at scale** | Keller Williams (~5.5 years)—strongest |
| **Professional backend** | Advision (Node.js, Lambda, GraphQL); First Factory (Java/Spring Boot) |
| **Integration architecture** | KW API migration, Advision Lambda/WordPress |
| **Current full-stack practice** | Free Slot (Supabase), Portfolio (Firebase) |
| **Not claimed** | Kubernetes at scale, message queues in production, million-user systems |

---

## Engineering Philosophy (Systems Thinking)

I don't think in terms of frontend versus backend. I think in terms of **systems**.

Every feature has:

| Dimension | Full stack responsibility |
|-----------|---------------------------|
| User experience | What users see and do |
| Business logic | Rules that outlive UI framework |
| API design | Contracts between consumers |
| Data persistence | Models, consistency, queries |
| Deployment | How changes reach production |
| Monitoring | How we know it's healthy *(learning area at depth)* |
| Maintenance | Cost over years |
| Testing | Confidence to change |
| Ownership | Who answers at 2am |

I enjoy understanding the **entire lifecycle**—not owning every layer in isolation, but reasoning across them.

→ [`../philosophy/engineering.md`](../philosophy/engineering.md)

---

## Full Stack Philosophy

**Boundaries and evolution:**

- The **frontend should not know** backend implementation details (Supabase, vendor SDKs, raw API shapes)
- The **backend should expose stable contracts**—versioned, validated, meaningful errors
- Both sides should **evolve independently** when possible
- **Compatibility layers** beat application-wide rewrites when contracts change
- **Abstractions should reduce coupling**, not add ceremony

**Documented examples:**

| Pattern | Source |
|---------|--------|
| API compatibility layer (V1 → V2) | [`../stories/api-migration-v1-v2.md`](../stories/api-migration-v1-v2.md) |
| Lambda transformation layer (internal API → WordPress) | [`../stories/lambda-wordpress-integration.md`](../stories/lambda-wordpress-integration.md) |
| Supabase hidden behind services/hooks | [`../projects/free-slot.md`](../projects/free-slot.md) |
| CMS build-vs-buy (stop maintaining custom backend surface) | [`../stories/react-cms-to-wordpress.md`](../stories/react-cms-to-wordpress.md) |
| Repository consolidation (fewer deployment boundaries) | [`../stories/repository-deprecation.md`](../stories/repository-deprecation.md) |

---

## API Design

**What I value:**

- Predictable endpoints and **clear contracts**
- Consistent naming and **validation** at the boundary
- **Meaningful error messages** for clients and operators
- **Versioning** when breaking change is unavoidable
- **Idempotent operations** where retries matter (payments, writes)
- **Backward compatibility** when business allows

**Default preferences:**

- Prefer **adding fields** over breaking contracts
- Prefer **adapters/mappers** at the boundary over rewriting every consumer
- Prefer **stable internal models** on the client even when backend reshapes

**Canonical interview story:** Cross-team V2 migration—mapper after fetch; consumers unchanged; rollback feasible at one layer. → [`../stories/api-migration-v1-v2.md`](../stories/api-migration-v1-v2.md)

**Interview framing:** Discuss trade-offs (adapter maintenance vs. big-bang refactor)—not REST verb trivia.

---

## Database Thinking

**Comfortable discussing (conceptual + professional Hibernate/SQL experience):**

- Normalization and when denormalization is intentional
- Relationships and query shape impact on APIs
- Indexes (purpose—not DBA-level tuning claims)
- Transactions and consistency expectations
- Pagination, filtering, sorting API patterns
- Caching at appropriate layers
- How **backend data modeling affects frontend** development velocity

**Honest limit:** I am **not a database expert**. Professional work used **Hibernate ORM** and relational databases; **PostgreSQL/Supabase** on Free Slot. Do not claim advanced DBA or query-optimizer depth.

**Sources:** [`../experience/first-factory.md`](../experience/first-factory.md), [`../experience/advision.md`](../experience/advision.md), [`../projects/free-slot.md`](../projects/free-slot.md)

---

## Backend Development (Documented Experience)

**Professional production experience:**

| Technology | Context |
|------------|---------|
| **Java, Spring Boot, Hibernate** | First Factory (architected a REST API) |
| **Node.js, GraphQL** | Advision (production backend services) |
| **REST APIs** | All professional roles |
| **Node.js, GraphQL** | Advision—where problem fit |
| **AWS Lambda** | Advision—implementation leadership |
| **Backend integrations** | Lambda ↔ WordPress, internal services |
| **SQL / relational DBs** | Hibernate-backed persistence |

**Recent professional focus:** Frontend-heavy at Keller Williams—**integration and transformation**, not primary backend service author.

**Continued strengthening:** Free Slot (Supabase), study areas in [`../learning/2026.md`](../learning/2026.md).

**Express:** Listed in resume skills for ATS—**confirm production depth before claiming in interviews** ([`../resume/master-resume.md`](../resume/master-resume.md)).

---

## Cloud

**Documented experience:**

| Service / platform | Context |
|--------------------|---------|
| **AWS Lambda, API Gateway, IAM, EC2, S3** | Advision Lambda integration |
| **Supabase** | Free Slot—auth, database, local dev stack |
| **Firebase** | Portfolio—Hosting, Firestore, Cloud Functions |
| **CI/CD on cloud pipelines** | GitHub Actions, Harness, Spinnaker (KW) |

**CloudFront:** In skills list—**omit from deep dive unless author confirms production use**.

**Philosophy:** Understand cloud **responsibilities** (permissions, deployment, scheduled vs. real-time sync)—not claiming Cloud Engineer specialization. Lambda story used **scheduled sync** because business didn't need real-time—pragmatic trade-off.

---

## Architecture

When designing or evaluating systems, I think about:

| Concern | Question I ask |
|---------|----------------|
| **Scalability** | What breaks first? What can wait? |
| **Maintainability** | Can a new engineer change this safely? |
| **Observability** | How do we know it failed? *( deepen in study)* |
| **Developer experience** | Local dev, testability, clear boundaries |
| **Testing** | What gives refactor confidence? |
| **Deployment** | Releasable incrementally? |
| **Future migrations** | Where would contract change land? |
| **Coupling** | What ripples when X changes? |
| **Failure modes** | Partial failure, retries, stale data |
| **Recovery** | Rollback path? |

**Default choice:** Simplest architecture that satisfies **current** requirements with room to evolve—avoid building for hypothetical scale.

**Senior signal:** Name what you **defer** (queues, k8s, microservices) and why.

---

## Debugging (Full Stack)

**Workflow:**

1. Understand **expected behavior** (user, API contract, data shape)
2. **Reproduce**—isolate layer (client, network, server, DB)
3. Identify where **assumptions break**
4. Read **surrounding code** and ownership boundaries
5. Inspect **history** (recent deploys, PRs, migrations)
6. Use **logs** and observable signals *(expand in study)*
7. Confirm **hypothesis** with minimal experiment
8. Implement **minimal fix** at root cause
9. **Validate**—regression risk, related consumers

**Documented examples:**

- Dashboard: ruled out backend; fixed render root cause → [`../stories/dashboard-performance.md`](../stories/dashboard-performance.md)
- API migration: isolate discrepancies in mapper layer → [`../stories/api-migration-v1-v2.md`](../stories/api-migration-v1-v2.md)

---

## CI/CD and Production

**Documented experience:**

- **GitHub Actions, Harness, Spinnaker** — Keller Williams pipeline maintenance
- **GitHub Actions + Firebase** — Portfolio deploy
- **CI/CD on personal projects** — Free Slot releasable main

**Beliefs:**

- Deployment pipelines are **part of software engineering**, not an afterthought
- Feature ownership includes **how code ships**
- Understand **rollback** conceptually—compatibility layers and incremental migration support safer rollback (API story)

**Do not invent:** Specific zero-downtime deploy implementations unless user documents them.

---

## Ownership (Full Stack)

Ownership continues **after deployment**.

**Includes:**

- Understanding **architecture** end-to-end for owned features
- **Production issues**—where to look across layers
- Helping **teammates** navigate owned systems
- **Documentation** and clear boundaries
- **Technical debt**—intentional, gradually reduced
- **Future improvements** planned with product alignment

**Stories:** Contractor rescue · Repository consolidation · KW feature ownership · Free Slot entire lifecycle

→ [`behavioral.md`](behavioral.md) Ownership section

---

## Testing Philosophy

**Beliefs:**

- Tests **increase confidence** to refactor and deploy
- Tests **document behavior** at boundaries
- **AI reduces cost** of writing tests—invest more in E2E/integration where valuable

**Priority (practical pyramid):**

1. **Unit** — pure logic, transforms, mappers (API compatibility layer is ideal unit-test surface)
2. **Integration** — API + DB contracts, service boundaries
3. **E2E** — critical user paths; Free Slot uses Playwright against local Supabase

**Documented:** Free Slot local stack shared by dev and E2E → [`../projects/free-slot.md`](../projects/free-slot.md)

**Avoid:** Coverage percentage claims; testing implementation details.

---

## AI and Full Stack Engineering

AI changes **how** software is built—not **who** owns quality.

**Typical full-stack workflow:**

1. **Plan** — boundaries, contracts, data model sketch
2. **Discuss with AI** — alternatives, trade-offs
3. **Generate** — boilerplate, tests, exploration
4. **Review** — security, coupling, complexity
5. **Simplify** — reject over-engineered generated code
6. **Test** — especially at integration boundaries
7. **Deploy** — pipeline validation
8. **Monitor** — *(study area for depth)*

→ Free Slot AI rejection example · Portfolio context-engineering · [`../context.md`](../context.md)

---

## Documented Stories → Full Stack Themes

| Story | Full stack themes to discuss |
|-------|------------------------------|
| API migration | Versioning, adapters, cross-team contracts, rollback |
| Lambda / WordPress | ETL at boundary, scheduled sync, AWS, coupling |
| CMS migration | Build vs. buy, reducing custom backend surface |
| Repository consolidation | Operational architecture, fewer deploy units |
| Configurable banners | Product-configurable behavior, API vs. config |
| Contractor rescue | Delivery, rebuild vs. repair, full feature ownership |
| Free Slot | Supabase abstraction, auth, E2E, CI/CD, full lifecycle |
| Portfolio | Firebase backend, serverless functions, knowledge base |

Use these before inventing hypothetical "at scale" war stories.

---

## System Design Practice Topics

Use to **generate mock designs**. For each, practice: architecture, data model, API, scaling path, caching, security, deployment, monitoring, **trade-offs**, and **what you'd defer**.

| Topic | Connect to documented experience |
|-------|-----------------------------------|
| **URL shortener** | API design, idempotency, caching—general practice |
| **Chat application** | Real-time vs. polling—honest: not production RCS experience |
| **Analytics dashboard** | Dashboard performance story; read-heavy APIs |
| **Booking platform** | Transactions, consistency—conceptual + SQL background |
| **CMS** | WordPress migration, configurable content—strong fit |
| **E-commerce backend** | REST, inventory consistency—conceptual |
| **Notification system** | Banner system analogy; scheduled vs. event-driven |
| **Event-driven architecture** | **Weak area**—discuss conceptually; Lambda scheduled sync as simpler alternative |
| **File upload service** | S3 exposure; portfolio/Firebase patterns |
| **Scheduling platform** | **Free Slot**—activities, drag-and-drop, Supabase |
| **AI-powered SaaS** | Free Slot + portfolio AI workflow; human review gates |

**Mock design discipline:**

- Start with requirements and **non-goals**
- Draw boundaries (client / API / data / async)
- State **simplest viable** architecture first
- Add complexity only when interviewer pushes scale
- Cite **real stories** when patterns match

---

## Common Interview Questions (Approach Frameworks)

AI should prompt **reasoning**, not memorized answers.

| Question | Framework + documented hook |
|----------|----------------------------|
| **How would you version an API?** | Additive changes first; V2 + adapter story; deprecate with timeline |
| **How would you migrate a database?** | Incremental, dual-write/dual-read if needed; CMS migration honesty (frontend-adjacent) |
| **How would you cache expensive requests?** | Layer choice (CDN, API, client); Lambda caching in WordPress story; stale tolerance |
| **How would you design a notification system?** | Configurable banners; push vs. poll; idempotency |
| **How would you deploy with zero downtime?** | Blue/green conceptually; incremental migration; **don't invent KW specifics** |
| **How would you scale to millions of users?** | Identify bottleneck; defer queues/sharding; honest frontend-heavy background |
| **How would you monitor production?** | Logs, errors, user reports; study area—willingness to learn |
| **How would you debug intermittent production issues?** | Reproduce, layer isolation, mapper boundary, dashboard process |
| **How would you secure REST APIs?** | Authn/z at boundary, validation, least privilege IAM (Lambda story) |
| **How would you design authentication?** | Supabase auth on Free Slot; session vs. token trade-offs; OAuth internals = weak area |

---

## Coding Interview Preparation

Full stack coding is not only algorithms.

**Include practice on:**

- Design REST endpoint + request/response types
- Implement mapper from messy API → stable client model (API migration pattern)
- Simple service layer + hook consumption (Free Slot pattern)
- Pagination/filter query design
- Idempotent write handler sketch
- Debug given code across fetch → transform → render

**When doing LeetCode-style problems:** Still articulate complexity and trade-offs—senior signal.

---

## Weak Areas and Study Plan

**Continue improving—be honest in interviews:**

| Area | Status | Suggested focus |
|------|--------|-----------------|
| Distributed systems | Conceptual | Read patterns; relate to API boundaries |
| Message queues (SQS, Kafka) | Not production-documented | When they'd help vs. scheduled Lambda |
| Event-driven architecture | Weak | Compare to sync + scheduled sync used in Lambda story |
| Kubernetes | Basic Docker only | Defer in designs unless role requires |
| Redis internals | Study | Caching layer discussions |
| Advanced PostgreSQL | Supabase user | Indexing, EXPLAIN—practical depth |
| Auth strategies / OAuth internals | Supabase auth | High-level flows; don't bluff OAuth spec |
| Background workers | Conceptual | Lambda as prior serverless batch pattern |
| High-scale backend | Not documented | Honest scale limits; growth mindset |

**Track progress:** [`../learning/2026.md`](../learning/2026.md) · [`../context.md`](../context.md) career direction

**Study plan template (AI can generate weekly):**

1. One **system design** mock using story connection
2. One **backend concept** from weak areas (read + summarize)
3. One **coding** problem + optional API design follow-up
4. One **behavioral** full-stack ownership story from [`behavioral.md`](behavioral.md)

---

## Mock Interview Modes

| Mode | Description |
|------|-------------|
| **System design** | CMS, scheduling app, notification system—trade-offs required |
| **API design** | Version migration scenario—mapper vs. rewrite |
| **Cross-stack debug** | Slow dashboard or API shape mismatch scenarios |
| **Architecture review** | Critique tight coupling between UI and Supabase SDK |
| **Full stack coding** | Endpoint + client consumer + transform function |
| **Resume defense** | Challenge frontend-heavy timeline; practice Advision/First Factory backend narrative |

---

## Anti-Patterns in Full Stack Interviews

| Avoid | Prefer |
|-------|--------|
| "I'm frontend but I know backend" | Professional backend at Advision/First Factory + current projects |
| Claiming KW wrote backend services | Integration layers and migrations—accurate |
| Inventing million-user war stories | Documented systems + scaling thought experiment |
| Microservices by default | Simplest architecture; micro frontends only where team scale justified |
| No trade-offs | Always name cost of chosen pattern |
| Express/K8s/Redis depth without evidence | Honest study areas |

---

## Success Criteria

A full stack interviewer should conclude:

> *This engineer clearly has stronger frontend experience, but understands backend architecture, cloud systems, APIs, deployment, and can contribute across the stack.*

**Secondary signals:**

- Thinks in **lifecycle** and **boundaries**, not silos
- Uses **compatibility layers** and **stable contracts** vocabulary with real examples
- **Owns** production path including CI/CD
- **Pragmatic** about scale and complexity
- **Honest** about gaps without underselling professional backend years

---

## Related Documents

| Document | Purpose |
|----------|---------|
| [`../resume/fullstack-version.md`](../resume/fullstack-version.md) | Resume generation spec and bullet mix |
| [`../resume/master-resume.md`](../resume/master-resume.md) | Complete career facts |
| [`../resume/bullet-bank.md`](../resume/bullet-bank.md) | Full stack bullet selection |
| [`behavioral.md`](behavioral.md) | STAR stories and ownership |
| [`frontend.md`](frontend.md) | Frontend-specific interview depth |
| [`technical.md`](technical.md) | General technical prep (scaffold) |
| [`../philosophy/engineering.md`](../philosophy/engineering.md) | Core principles |
| [`../stories/`](../stories/) | Proof points for answers |
| [`../projects/free-slot.md`](../projects/free-slot.md) | Current full-stack evidence |

---

## Maintenance

When new backend/full-stack stories or projects are documented:

1. Update source in `../stories/` or `../projects/`
2. Add row to [Documented Stories → Full Stack Themes](#documented-stories--full-stack-themes)
3. Map to system design practice topics where relevant

When simulating interviews: **connect layers**, **cite real work**, **name trade-offs**.
