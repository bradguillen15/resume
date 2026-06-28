# AI Software Engineer Interview Knowledge Base

## Purpose

This document is **not** a prompt engineering cheat sheet or LLM API reference. It describes **how I think about AI Software Engineering**—software engineering enhanced by AI—so future AI assistants can prepare me for **AI Software Engineer** interviews.

**This role is:**

- Production software engineering with AI in the workflow and product
- Architecture, integration, review discipline, developer tooling, AI-native systems

**This role is NOT:**

- Machine learning research
- Foundation model training or fine-tuning
- Data science or advanced ML mathematics
- Claiming expertise I haven't documented

**Optimize for:** engineering maturity, judgment, reliability, maintainability, context design, human-in-the-loop quality.

**Objectives:**

- Simulate AI Software Engineer interviews
- Prepare architecture discussions (AI-assisted dev + LLM product integration)
- Challenge my AI engineering decisions constructively
- Recommend learning paths for documented gaps
- Identify weak areas honestly
- Prepare coding interviews involving LLMs (integration, review, guardrails—not leetcode trivia)
- Prepare system design for AI-powered SaaS at **application** layer

**Rules:** Ground in [`../projects/free-slot.md`](../projects/free-slot.md), [`../projects/portfolio.md`](../projects/portfolio.md), [`../context.md`](../context.md), [`../philosophy/engineering.md`](../philosophy/engineering.md). Never claim ML training, RAG in production, or MCP at scale unless documented later.

**Related:** Canonical philosophy → [`../philosophy/working-with-ai.md`](../philosophy/working-with-ai.md) · Behavioral AI answers → [`behavioral.md`](behavioral.md) · Full stack → [`fullstack.md`](fullstack.md) · Resume view → [`../resume/ai-engineer.md`](../resume/ai-engineer.md)

---

## How AI Assistants Should Use This Document

1. Lead with **Software Engineer first, AI Engineer second**—production reliability over hype.
2. Use project evidence (Free Slot, career repo) for **workflow** answers; use [Topics to learn](#topics-to-learn-next) for **growth** answers.
3. Reject answers that sound like ML research unless user documents that experience.
4. For system design, focus on **integration, evaluation, security, cost, fallbacks**—not GPU clusters.
5. Simulate **code review of AI output** as an interview exercise.
6. Push back on merging AI-generated code without simplification narrative.

---

## Engineering Identity

**I am:**

- A **Software Engineer first**
- An **AI Engineer second**—AI amplifies delivery; it does not replace judgment

**My value:**

- Building **reliable production software**
- Architecture, maintainability, ownership, trade-offs
- Integrating AI into **real workflows** with review discipline

**Career intent:** Pursuing **AI Software Engineer** roles while expanding capability through production projects and continuous learning ([`../context.md`](../context.md)).

**Not claiming:** ML engineer, research scientist, LLM infrastructure specialist at hyperscale.

---

## AI Engineering Philosophy

| AI automates | Humans own |
|--------------|------------|
| Drafting implementation | **Architecture** |
| Test scaffolding | **Correctness** |
| Exploration of alternatives | **Security** |
| Documentation drafts | **Maintainability** |
| Refactor suggestions | **Business logic** |
| Boilerplate | **Trade-offs** |

**AI increases speed. Engineering determines quality.**

→ Shared with [`../philosophy/engineering.md`](../philosophy/engineering.md) · Canonical philosophy: [`../philosophy/working-with-ai.md`](../philosophy/working-with-ai.md)

---

## My AI Workflow (Documented)

Typical lifecycle:

1. **Understand requirements** — product and constraints first ([`../philosophy/engineering.md`](../philosophy/engineering.md))
2. **Discuss architecture with AI** — alternatives, trade-offs, boundaries
3. **Evaluate options** — simplest adequate design
4. **Generate implementation** — drafts, not final truth
5. **Review every line** — simplify, reject over-engineering
6. **Write tests** — AI lowers cost; increase coverage where valuable
7. **Deploy** — CI/CD as part of ownership
8. **Monitor** — *(application-level; AI observability = study area)*
9. **Iterate**

**AI participates throughout. Engineering remains human-owned.**

**Evidence:** Free Slot full lifecycle · Portfolio/career repo built with AI in the loop · [`../projects/free-slot.md`](../projects/free-slot.md)

---

## Context Engineering

**Belief:** Context is often **more important than clever prompts.**

Useful context includes:

- System **architecture** and layer boundaries
- **Coding standards** and folder organization
- **Business rules** and invariants
- **Examples** of patterns already used in the repo
- **Existing abstractions**—hooks, services, templates
- Linked **documentation** (single source of truth)

**The better the context → the better the generated code.**

**Documented example:** This `career/` repository—structured markdown, single responsibility, [`../context.md`](../context.md) as entry point, designed for AI consumption without repeated re-prompting. → [`../projects/portfolio.md`](../projects/portfolio.md)

**Interview framing:** Discuss **context packaging** (repo rules, architecture docs, examples) vs. one-shot "build X" prompts.

---

## Prompt Engineering (Application Layer)

Prompts should describe:

- **Intent** and user outcome
- **Constraints** (stack, patterns, non-goals)
- **Architecture** boundaries
- **Expected behavior** and edge cases
- **Success criteria** (testable, reviewable)

**I rarely ask:** "Build X."

**I prefer:** Explain how the project works, what constraints exist, how success is measured, what patterns to follow.

**Not a trivia skill:** Interview focus is **structured intent + constraints**, not token tricks.

---

## Reviewing AI-Generated Code

**Never merge blindly.**

**Review checklist:**

| Question | Action if no |
|----------|--------------|
| Is it **understandable**? | Simplify or rewrite |
| Can it be **simpler**? | Remove layers |
| Does it match **project architecture**? | Refactor to boundaries |
| Is **business logic** correct? | Fix before ship |
| Is it **testable**? | Extract and test |
| **Duplication** introduced? | Consolidate |
| **Unnecessary abstractions**? | Inline or delete |
| Would another engineer understand quickly? | Rename, restructure |
| Would an **LLM** navigate it later? | Improve module boundaries |

**Canonical story:** Rejected AI implementation on Free Slot—over-engineered simple feature; shipped simpler hand-written logic. → [`../projects/free-slot.md`](../projects/free-slot.md)

**Tools:** CodeRabbit and manual review in workflow ([`../resume/bullet-bank.md`](../resume/bullet-bank.md))

---

## AI Failure Modes (What I Watch For)

Common problems I **actively simplify** before accepting:

- Overengineering and premature frameworks
- **Hallucinated APIs** or libraries
- Ignoring **existing project patterns**
- Duplicated logic across files
- Wrong abstractions that outlive the feature
- Unnecessary complexity and large files
- Poor naming
- Frontend: too many `useEffect` chains, unnecessary dependencies

**Senior signal:** Saying **no** to working AI code that fails maintainability bar.

---

## AI and Testing

AI **dramatically reduces cost** of writing tests → modern teams should **increase** automated coverage where it reduces risk.

**Workflow:**

1. Generate tests (unit, integration, E2E drafts)
2. **Review**—edge cases, flakiness, meaningful assertions
3. Improve edge cases
4. Run in **realistic environment** (Free Slot: local Supabase + Playwright)
5. Validate and iterate

Testing becomes **normal development**, not a luxury deferred.

→ [`../projects/free-slot.md`](../projects/free-slot.md)

---

## AI and Refactoring

AI is particularly valuable for:

- Large refactors (exploration, migration plans)
- **Documentation** and code explanations
- Architecture exploration
- **Test generation**
- Dead code and duplication detection
- Abstraction opportunities

**Humans decide. AI accelerates.**

**Professional parallel:** Repository consolidation, API compatibility layers—human judgment on whether to refactor; AI can speed execution once decided. → [`../stories/repository-deprecation.md`](../stories/repository-deprecation.md)

---

## MCP (Model Context Protocol)

**Current understanding (honest scope):**

- Purpose: **tools and structured context** extend LLM capabilities safely
- MCP servers expose **documented capabilities** (docs, repos, APIs) to agents
- Improves engineering when context is **curated**, not raw dump
- **Expanding practical experience**—Cursor MCP usage in development

**Do not claim:** Production MCP at scale, custom MCP server authorship in production, unless documented later.

**Interview framing:** Explain MCP as **context + tool boundary** pattern—analogous to service boundaries in backend design.

---

## Agent Workflows

**I understand conceptually:**

| Agent type | Role |
|------------|------|
| Planning | Requirements, architecture options |
| Implementation draft | Code under review |
| Review | Complexity, patterns, security smell |
| Documentation | Keep docs aligned with code |
| Testing | Generate and expand tests |

**Belief:** Agents should **specialize**. General-purpose "do everything" agents often become inefficient and hard to verify.

**Human orchestrates** which agent runs when; human approves merges.

**Study area:** Agent orchestration frameworks—honest learning in progress.

---

## AI Tools (Current)

| Tool | Role in workflow |
|------|------------------|
| **Cursor** | Primary IDE-integrated AI development |
| **Claude / Claude Code** | Architecture discussion, review, generation |
| **ChatGPT** | Exploration, drafting |
| **GitHub Copilot** | Inline assistance |
| **CodeRabbit** | Automated review pass |

**Priority:** **Workflow and review discipline** over specific model version loyalty. Continuously evaluate tools; engineering process stays stable.

---

## AI and Architecture

**Better architecture → better AI performance.**

Systems intentionally designed to be:

- **Modular** — clear files and responsibilities
- **Well documented** — context for humans and LLMs
- **Predictable** — consistent patterns
- **Easy to navigate** — feature boundaries
- **Consistent** — naming, hooks, services

**Examples:**

- Free Slot: Supabase behind services/hooks; components don't import SDK
- Career repo: single-responsibility markdown, linked sources
- API migration: stable internal model isolates external change

**Improving architecture improves AI productivity**—same as improving human onboarding.

---

## AI and Documentation

Documentation is **no longer only for humans**. Documentation is **context**.

| Quality | Effect |
|---------|--------|
| Good structured docs | Better AI outputs, consistent resumes/interviews |
| Poor or duplicated docs | Hallucination risk, drift, inconsistency |

**Portfolio project goal:** AI-native career knowledge base—documentation is source of truth; AI generates views. → [`../projects/portfolio.md`](../projects/portfolio.md)

---

## AI and Maintainability

Maintainability matters **more** when AI writes more code.

**Evaluation question:**

> Would another engineer understand this? Would an LLM understand this?

If both are **yes**, architecture is probably healthy.

Aligns with entire career philosophy: simplicity, deletion, boundaries ([`../philosophy/engineering.md`](../philosophy/engineering.md)).

---

## Documented Evidence (What I Can Defend in Interviews)

| Evidence | AI Software Engineering themes |
|----------|-------------------------------|
| **Free Slot** | AI-assisted dev, review/simplify, reject over-engineering, tests, production deploy |
| **Career / portfolio repo** | Context engineering, AI-native docs, structured knowledge base |
| **Engineering philosophy** | Human judgment, intentional debt, less code |
| **CodeRabbit + review checklist** | Automated + human review pipeline |
| **Behavioral: Working with AI** | [`behavioral.md`](behavioral.md) |

**Not yet documented for interviews:**

- RAG pipeline in production
- LLM product features shipped to end users at scale
- Custom evaluation pipelines in production
- Fine-tuning or embedding indexes at work

State these as **learning goals**, not experience.

---

## Common Interview Topics (Approach Frameworks)

AI should prompt **trade-offs and process**, not textbook definitions.

| Topic | How to answer with documented grounding |
|-------|----------------------------------------|
| **Build an AI-powered SaaS** | Start with problem; human-owned core logic; LLM for bounded tasks; eval + fallback; defer custom training; cite Free Slot dev workflow + future product AI as study |
| **Integrate LLM into existing app** | Boundary layer; no LLM in every component; typed contracts; log prompts/responses carefully; cost and latency budgets |
| **Evaluate AI output** | Review checklist; tests; human spot-check; CodeRabbit; rejection example |
| **Prevent hallucinations** | Constrain tools/context; verify APIs exist; tests; don't trust generated deps |
| **Structure prompts** | Intent, constraints, architecture, success criteria—not magic words |
| **Design context** | Career repo example; architecture docs, examples, rules files |
| **Review AI-generated code** | Free Slot rejection story; simplify-first culture |
| **Monitor AI systems** | Application logs, error rates, cost, latency—**AI observability = study** |
| **Secure AI applications** | Secrets out of prompts; validate outputs; least privilege on tools; PII handling |
| **AI-assisted developer workflows** | Full lifecycle above; context engineering; specialized agents |

---

## System Design Practice (AI Application Layer)

Mock designs—always include: **human fallback**, **evaluation**, **cost**, **security**, **maintainability**.

| Design prompt | Discussion angles |
|---------------|-------------------|
| AI copilot inside IDE | Context boundaries, not full repo leak |
| AI resume generator from docs | Portfolio/career repo—actual architecture |
| AI customer support chat | RAG study area; guardrails; escalate to human |
| AI code review bot | CodeRabbit-like; false positive handling |
| AI test generator CI step | Free Slot pattern; block merge on failures |
| Document Q&A over codebase | Chunking/RAG—**conceptual** until built |

**Defer in designs unless role demands:** Custom model training, GPU fleet, vector DB at billion scale.

---

## Coding Interview Preparation (LLM-Adjacent)

Not typical LeetCode-only.

**Practice:**

- Design a **safe wrapper** around LLM API (timeout, retry, structured output parsing)
- **Review** intentionally bad AI-generated module—list fixes
- Sketch **context payload** for a feature given architecture doc
- Implement **mapper/validator** for LLM JSON output before UI consumption
- Discuss **idempotency** for AI-triggered side effects

**Optional algorithms:** Only if role specifies—still tie to reliability narrative.

---

## Topics To Learn Next

**Honest study list**—discuss in interviews as **growth**, not current production depth:

| Topic | Relevance |
|-------|-----------|
| **RAG** | Document Q&A, career search, product features |
| **Vector databases & embeddings** | Retrieval quality, chunking strategies |
| **Chunking strategies** | Context window limits |
| **Tool / function calling** | Agent boundaries |
| **Streaming** | UX for LLM products |
| **LLM caching** | Cost and latency |
| **Guardrails** | Output validation, policy |
| **AI observability** | Traces, prompt logging, eval metrics |
| **OpenTelemetry for AI** | Production debugging |
| **Prompt evaluation** | Regression on prompt changes |
| **AI security** | Injection, exfiltration, tool abuse |
| **Evaluation pipelines** | CI for LLM behavior |
| **MCP servers** | Deeper custom server development |
| **Agent orchestration** | Specialized agents |
| **Long-context strategies** | When vs. RAG |
| **Structured outputs** | JSON schema, parsing reliability |
| **Memory systems** | Stateful assistants—trade-offs |

**Track progress:** [`../learning/2026.md`](../learning/2026.md)

**Study plan template (AI can generate):**

1. One **concept** from table (read + summarize)
2. One **small experiment** (e.g., local RAG on `career/` docs)
3. One **system design** mock (AI SaaS with guardrails)
4. One **code review** exercise on AI-generated snippet
5. One **behavioral** story (Free Slot rejection, career repo context)

---

## Things I Will Never Pretend To Know

**Do not let interview prep invent experience in:**

- Training foundation models
- Distributed LLM training
- Fine-tuning production models
- Deep learning research
- Advanced ML mathematics
- Large-scale inference infrastructure (GPU clusters, model serving at hyperscale)

**If I haven't done it, I won't claim it.**

**Correct redirect:** "I'm an application-layer AI software engineer strengthening retrieval and eval skills; my strength is shipping maintainable software with AI in the loop."

---

## Weak Areas (Interview Honesty)

| Area | Frame |
|------|-------|
| RAG in production | Learning; can discuss architecture conceptually |
| Vector DB tuning | Study |
| LLM product metrics / eval at scale | Study |
| AI observability tooling | Study |
| MCP server production authorship | Expanding; not claimed yet |
| ML fundamentals | Not the role I'm targeting |

---

## Anti-Patterns in AI Engineer Interviews

| Avoid | Prefer |
|-------|--------|
| "AI writes all my code" | Review, simplify, reject |
| Prompt trivia | Context engineering, constraints |
| ML buzzwords without projects | Free Slot, career repo workflows |
| Claiming RAG/fine-tuning in prod | Learning roadmap |
| Ignoring security and cost | Boundaries, fallbacks, monitoring plan |
| No software engineering stories | Repository deprecation, API layers, ownership |

---

## Success Criteria

An interviewer should conclude:

> *This engineer understands software engineering deeply and already knows how to integrate AI into real engineering workflows. As AI technology evolves, they have an excellent foundation to grow into increasingly advanced AI systems.*

**Primary objective**—not "ML researcher," not "prompt influencer."

**Secondary signals:**

- Can articulate **human-in-the-loop** workflow with concrete rejection example
- Understands **context > prompts** with career repo evidence
- **Software Engineer first**—architecture, tests, deploy, maintainability
- Honest about **ML/training gaps** and **application-layer growth**

---

## Related Documents

| Document | Purpose |
|----------|---------|
| [`../philosophy/working-with-ai.md`](../philosophy/working-with-ai.md) | **Canonical** AI-assisted engineering philosophy |
| [`../philosophy/engineering.md`](../philosophy/engineering.md) | Core engineering principles |
| [`behavioral.md`](behavioral.md) | STAR stories including Working with AI |
| [`fullstack.md`](fullstack.md) | Full stack system thinking |
| [`frontend.md`](frontend.md) | Frontend + AI code review |
| [`../resume/ai-engineer.md`](../resume/ai-engineer.md) | AI engineer resume view |
| [`../resume/bullet-bank.md`](../resume/bullet-bank.md) | AI Engineering bullets |
| [`../projects/free-slot.md`](../projects/free-slot.md) | Primary AI workflow evidence |
| [`../projects/portfolio.md`](../projects/portfolio.md) | Context engineering / AI-native docs |
| [`../context.md`](../context.md) | Identity and AI assistant rules |

**Notes:**

- `career/resume/ai-engineer-version.md` — **not created**; use [`../resume/ai-engineer.md`](../resume/ai-engineer.md) (consider adding `ai-engineer-version.md` later mirroring `fullstack-version.md`)

---

## Maintenance

When AI workflow or projects evolve:

1. Update [`../projects/free-slot.md`](../projects/free-slot.md) or [`../philosophy/working-with-ai.md`](../philosophy/working-with-ai.md) first
2. Move items from [Topics to learn](#topics-to-learn-next) to [Documented evidence](#documented-evidence-what-i-can-defend-in-interviews) when production-ready
3. Never move items to evidence without source documentation

When simulating interviews: **engineering maturity first**, **AI second**.
