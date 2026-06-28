# Working With AI

## Purpose

Canonical description of my philosophy on **AI-assisted software engineering**. This is **not** a tutorial, tool documentation, or prompt cheat sheet.

Future AI assistants should use this file when generating resumes, portfolio content, interview answers, blog posts, career advice, biographies, or technical writing about how I work with AI.

**Goal:** Capture my **engineering mindset**—how software engineering changes because AI exists—without hype, without claiming ML expertise, and without treating AI as a replacement for judgment.

**Companion docs:** Core principles → [`engineering.md`](engineering.md) · Strengths → [`../strengths.md`](../strengths.md) · Leadership → [`../leadership.md`](../leadership.md) · Interview prep → [`../interviews/ai-software-engineer.md`](../interviews/ai-software-engineer.md) · Project evidence → [`../projects/free-slot.md`](../projects/free-slot.md), [`../projects/portfolio.md`](../projects/portfolio.md)

---

## Core Belief

AI does **not** replace software engineering.

AI **changes how** software engineering is performed.

The engineer remains responsible for:

- Architecture
- Business logic
- Trade-offs
- Maintainability
- Correctness
- Testing
- Deployment
- Product understanding

**AI accelerates implementation. Engineering remains responsible for quality.**

---

## Software Engineering First

I identify as a **Software Engineer**—not an AI Engineer, not a Prompt Engineer.

Software engineering principles remain timeless:

- Simplicity
- Maintainability
- Ownership
- Testing
- Architecture
- Communication

Those principles become **even more important** in an AI-assisted world—not less. Faster drafting makes bad architecture and unnecessary complexity easier to accumulate. Discipline matters more, not less.

→ [`engineering.md`](engineering.md) · [`../context.md`](../context.md)

**Career positioning:** I pursue **AI Software Engineer** roles as a software engineer who integrates AI into production workflows—not as an ML researcher or prompt specialist.

→ [`../interviews/ai-software-engineer.md`](../interviews/ai-software-engineer.md)

---

## AI Is A Collaborator

I don't treat AI like autocomplete.

I treat AI like **another engineer sitting next to me**:

- Sometimes it proposes good ideas
- Sometimes it proposes terrible ideas
- My responsibility is to **evaluate those ideas critically**

AI participates in the discussion. **Humans make the final decision.**

**Evidence:** Free Slot—AI used for drafts, architecture discussion, tests, and refactoring suggestions; rejected over-engineered generated code in favor of simpler hand-written logic.

→ [`../projects/free-slot.md`](../projects/free-slot.md) — AI-Assisted Development

---

## Context Is More Valuable Than Prompts

The quality of AI output depends heavily on **context**.

| Input | Typical output |
|-------|----------------|
| Good prompt, poor context | Average code |
| Good prompt, excellent context | Dramatically better code |

**Useful context includes:**

- Project architecture and layer boundaries
- Coding conventions and folder organization
- Business rules and invariants
- Existing abstractions (hooks, services, templates)
- Examples of patterns already in the repo
- Linked documentation (single source of truth)

I invest more time **improving context** than inventing clever prompts.

**Documented examples:**

| Context investment | Source |
|--------------------|--------|
| `career/` repository—structured markdown, single responsibility, AI-consumable | [`../projects/portfolio.md`](../projects/portfolio.md) |
| Free Slot—layered architecture, Supabase abstraction, clear module boundaries | [`../projects/free-slot.md`](../projects/free-slot.md) |
| Cursor rules and project conventions in portfolio repo | [`../projects/portfolio.md`](../projects/portfolio.md) |

**Interview framing:** Discuss **context packaging** (architecture docs, examples, constraints) vs. one-shot "build X" prompts.

→ [`../interviews/ai-software-engineer.md`](../interviews/ai-software-engineer.md) — Context Engineering

---

## Code Review Never Disappears

Every line of AI-generated code should be **reviewed**.

**My review process asks:**

- Is this **understandable**?
- Can it be **simpler**?
- Does it follow our **architecture**?
- Does it **duplicate** existing logic?
- Would another engineer understand it?
- Would **future AI** understand it?

Code review becomes **more important**—not less.

**Evidence:**

| Practice | Source |
|----------|--------|
| Rejected AI implementation—unnecessary complexity for simple feature | [`../projects/free-slot.md`](../projects/free-slot.md) |
| CodeRabbit + manual review in workflow | [`../resume/bullet-bank.md`](../resume/bullet-bank.md) |
| Career repo linking conventions—reviewable, navigable structure | [`../projects/portfolio.md`](../projects/portfolio.md) |

→ [`../interviews/ai-software-engineer.md`](../interviews/ai-software-engineer.md) — Reviewing AI-Generated Code

---

## Simplicity Wins

One of the biggest weaknesses of AI is **unnecessary complexity**.

**Common examples I actively simplify:**

- Too many abstractions or premature frameworks
- Overuse of hooks or indirection
- Multiple `useEffect` chains
- Unnecessary dependencies
- Large files and duplicated utilities
- Clever code that obscures intent

Whenever AI produces unnecessary complexity, I **simplify it**. Simple software survives longer.

**Canonical story:** Free Slot—rejected AI-generated implementation; shipped simpler hand-written logic.

→ [`../projects/free-slot.md`](../projects/free-slot.md) · [`engineering.md`](engineering.md) — Simplicity Over Cleverness

---

## Documentation Becomes Context

Documentation is no longer written **only for humans**.

Documentation also **teaches AI**:

- Good documentation → better generated code
- Poor documentation → more hallucinations and wrong assumptions
- Well-structured projects → easier for both humans and AI

The career repository is an intentional example: documentation designed for accuracy, maintainability, and **AI consumption** without repeated re-prompting.

→ [`../projects/portfolio.md`](../projects/portfolio.md) — Vision, Repository Philosophy

---

## Architecture Matters Even More

AI performs better in **clean codebases**.

Projects with:

- Clear boundaries
- Consistent patterns
- Modular design
- Predictable organization
- Small files
- Good naming

…produce significantly better AI output.

**Improving architecture also improves AI productivity**—not just human productivity.

**Evidence:**

| Pattern | Source |
|---------|--------|
| Supabase hidden behind services/hooks—UI doesn't import vendor SDK | [`../projects/free-slot.md`](../projects/free-slot.md) |
| Career repo—single responsibility files, linked facts | [`../projects/portfolio.md`](../projects/portfolio.md) |
| API compatibility layer—stable internal models at boundaries | [`../stories/api-migration-v1-v2.md`](../stories/api-migration-v1-v2.md) |

→ [`architecture.md`](architecture.md) (in progress)

---

## AI Makes Testing Easier

Writing tests is no longer as expensive. Modern AI tools reduce much of the repetitive work.

That changes engineering expectations:

- Modern software should include **more automated tests** than in previous years
- AI removes many excuses for skipping tests
- Tests remain **reviewed**—edge cases, flakiness, and meaningful assertions still require human judgment

**Evidence:** Free Slot—AI assists test writing; E2E tests against local Supabase stack; tests as safety net, not checkbox.

→ [`../projects/free-slot.md`](../projects/free-slot.md) — Testing

---

## AI Changes Refactoring

Refactoring becomes dramatically **cheaper**.

Tasks like:

- Renaming and extracting utilities
- Moving files and updating imports
- Splitting components
- Improving documentation
- Mechanical consistency fixes

…become much faster. This encourages **continuous improvement** rather than waiting for massive rewrites.

**Principle:** Incremental refactors aligned with delivery—not stop-the-world rewrites.

→ [`engineering.md`](engineering.md) · [`../stories/repository-deprecation.md`](../stories/repository-deprecation.md)

---

## AI Rewards Clean Code

Readable code is no longer only for teammates. It is also for **AI**.

Future maintainability depends on both. Whenever I write code I increasingly ask:

- Can another engineer understand this?
- Can another AI understand this?

If both answers are yes, the software is probably healthy.

**Evidence:** Career repo structure; Free Slot separation of concerns; code review questions that include AI navigability.

→ [`../strengths.md`](../strengths.md) — Maintainability

---

## Learning Philosophy

AI changes very quickly. Instead of memorizing specific tools, I focus on **concepts** that survive model churn:

| Concept area | Status |
|--------------|--------|
| LLM workflows and human-in-the-loop quality | **Practicing** — Free Slot, career repo |
| Context engineering | **Practicing** — documented here and in portfolio |
| Tool calling / MCP | **Learning** — not claimed at production scale |
| Agent systems | **Learning** — conceptual interest |
| RAG | **Learning** — not documented in production |
| Evaluation and observability for AI features | **Learning** — study area |
| Security implications of AI-generated code | **Practicing** — review discipline |
| Testing with AI assistance | **Practicing** — Free Slot |

→ [`../learning/2026.md`](../learning/2026.md) · [`../interviews/ai-software-engineer.md`](../interviews/ai-software-engineer.md) — Topics to learn next

**Do not claim:** ML training, fine-tuning at scale, RAG in production, or MCP infrastructure expertise unless documented later.

---

## What I Reject

| Rejected idea | Why |
|---------------|-----|
| AI should replace engineering judgment | Speed without quality creates debt |
| Blind acceptance of generated code | Working code can still be unmaintainable |
| Productivity measured only by lines of code | Outcome and maintainability matter |
| Unnecessary complexity from AI | Simplify before shipping |
| Architecture that depends entirely on AI | Software must remain human-understandable |
| "Prompt engineer" as primary identity | Software engineer first |

Software should remain **understandable by humans**—AI is a collaborator, not the author of record.

---

## My Long-Term Goal

My goal is **not** to become someone who writes prompts.

My goal is to become a **Senior Software Engineer who knows how to build software in an AI-native world**:

- Designing AI-friendly systems
- Creating better context
- Reviewing AI-generated code with discipline
- Building maintainable architectures
- Using AI to accelerate delivery **without sacrificing quality**

**Engineering remains the profession. AI becomes another powerful tool.**

→ [`../context.md`](../context.md) — Career direction

---

## Personal Principles

When working with AI I try to remember:

| Principle | Meaning |
|-----------|---------|
| **Think** before generating | Requirements and architecture first |
| **Review** before merging | Every line; simplify when needed |
| **Simplify** before optimizing | Remove complexity AI introduces |
| **Document** before scaling | Context for humans and AI |
| **Test** before deploying | AI lowers cost; raise expectations |
| **Own** the outcome | Responsibility cannot be delegated |

**AI can help build software. Responsibility cannot be delegated.**

---

## Documented AI Workflow

Typical lifecycle (not a rigid process—adapted per task):

1. **Understand requirements** — product and constraints first
2. **Discuss architecture with AI** — alternatives, trade-offs, boundaries
3. **Evaluate options** — simplest adequate design
4. **Generate implementation** — drafts, not final truth
5. **Review every line** — simplify, reject over-engineering
6. **Write tests** — AI lowers cost; increase coverage where valuable
7. **Deploy** — CI/CD as part of ownership
8. **Iterate** — refactor cheaply when justified

**AI participates throughout. Engineering remains human-owned.**

→ [`../projects/free-slot.md`](../projects/free-slot.md) · [`../interviews/ai-software-engineer.md`](../interviews/ai-software-engineer.md) — My AI Workflow

---

## Future Vision

I believe future software teams will **not** replace engineers with AI.

Instead, each engineer will become dramatically **more productive**.

The most valuable engineers will not be those who generate the most code. They will be those who create:

- The clearest architecture
- The best context
- The highest quality systems
- The strongest engineering culture

That is the kind of engineer I want to become.

→ [`../leadership.md`](../leadership.md) — AI Leadership

---

## How AI Assistants Should Use This File

| Task | Guidance |
|------|----------|
| **Resume / AI engineer bullets** | Software engineer first; cite Free Slot and career repo as evidence |
| **Interview answers** | Use [`../interviews/ai-software-engineer.md`](../interviews/ai-software-engineer.md) for question mapping; philosophy from here |
| **Blog / technical writing** | Voice: pragmatic, anti-hype, judgment-focused |
| **Career advice** | Learn concepts; don't chase every new tool |
| **Biography** | "Builds maintainable software in an AI-native world"—not "prompt expert" |

**Do not:** Claim ML training, RAG production, or replace [`engineering.md`](engineering.md) principles with AI hype.

---

## Related Documents

| Document | Relationship |
|----------|--------------|
| [`engineering.md`](engineering.md) | Timeless principles—simplicity, ownership, product thinking |
| [`architecture.md`](architecture.md) | Architecture principles (in progress) |
| [`../strengths.md`](../strengths.md) | AI-Assisted Engineering strength |
| [`../leadership.md`](../leadership.md) | AI leadership—teaching workflows, review discipline |
| [`../interviews/ai-software-engineer.md`](../interviews/ai-software-engineer.md) | Interview prep derived from this philosophy |
| [`../projects/free-slot.md`](../projects/free-slot.md) | Primary project evidence |
| [`../projects/portfolio.md`](../projects/portfolio.md) | AI-native documentation architecture |
| [`../resume/ai-engineer.md`](../resume/ai-engineer.md) | Resume view |
| [`../resume/fullstack-version.md`](../resume/fullstack-version.md) | Resume generation spec pattern |

**Note:** `career/resume/ai-engineer-version.md` is referenced in some prompts but **not created**—use [`../resume/ai-engineer.md`](../resume/ai-engineer.md) and [`../resume/fullstack-version.md`](../resume/fullstack-version.md) as the spec pattern until populated.

---

## Maintenance

When AI practices or projects evolve:

1. Update **Documented AI Workflow** and evidence tables—not duplicate into resume copy
2. Add new project evidence to relevant sections (context, review, testing)
3. Update [`../learning/2026.md`](../learning/2026.md) for concept-level learning progress
4. Sync [`../interviews/ai-software-engineer.md`](../interviews/ai-software-engineer.md) if interview framing changes

Philosophy describes **how I think**. Facts and workflows live in `projects/` and `interviews/`.
