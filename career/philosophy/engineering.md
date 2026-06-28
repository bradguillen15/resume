# Engineering Philosophy

## Purpose

This document describes how I make engineering decisions—not a list of universal best practices, but my personal philosophy inferred from years of building and maintaining software.

I don't optimize for writing the most code. I optimize for building software that remains understandable, maintainable, and easy to evolve. Software engineering is a long-term discipline. Every decision should consider not only today's requirements but also the cost of maintaining that decision months or years later.

For who I am as an engineer at a high level, see [`../context.md`](../context.md). For architecture-specific principles, see [`architecture.md`](architecture.md).

---

## Simplicity Over Cleverness

One of my strongest preferences is simplicity.

If two solutions solve the same problem, I almost always choose the simpler one. Simple code is easier to review, debug, maintain, extend, onboard new developers into, and reason about.

I avoid unnecessary abstractions and unnecessary complexity. Complexity should exist only when the business problem genuinely requires it.

---

## Less Code Is Better Code

I genuinely enjoy deleting code. Removing complexity often creates more value than adding another abstraction.

Whenever I join a project I naturally look for:

- Duplicated logic
- Repeated patterns
- Unnecessary boilerplate
- Obsolete code
- Opportunities to consolidate implementations

My favorite refactors are the ones that reduce maintenance effort without changing product behavior.

---

## Product Before Code

I don't like implementing tickets blindly.

Before writing code I want to understand why the feature exists, who benefits from it, how users interact with it, and what problem it solves. Understanding the product usually leads to better technical decisions—and sometimes to suggesting improvements that weren't originally requested.

---

## Ownership

I enjoy owning parts of a product. Ownership means more than implementing features. It means feeling responsible for maintainability, developer experience, usability, future improvements, and production quality.

When I own a feature, I naturally become the person teammates ask about it.

---

## Technical Debt

Technical debt is not always bad. Sometimes delivering value quickly is the correct engineering decision. The important part is making that decision intentionally.

Whenever technical debt is introduced, I prefer understanding why we are accepting it, how expensive it will become, and when it should be revisited. I avoid creating technical debt simply because it is easier today.

---

## Abstractions

I like abstractions—but only when they remove complexity.

A good abstraction should reduce duplication, isolate implementation details, make future migrations easier, and improve readability. I don't create abstractions simply because something "might be reused."

---

## Legacy Systems

I enjoy working in mature codebases. Large systems usually contain years of engineering decisions. Rather than criticizing legacy software, I prefer understanding why it evolved that way—then looking for safe, incremental improvements.

I don't believe every legacy system needs a rewrite.

---

## AI-Assisted Development

AI has changed how I write software. Instead of writing every line myself, I increasingly review, critique, simplify, and improve AI-generated implementations.

My engineering value comes less from typing code and more from making good decisions. AI accelerates implementation. It does not replace engineering judgment.

See also [`working-with-ai.md`](working-with-ai.md).

---

## Code Reviews

When reviewing code I usually focus on questions like:

- Is this understandable?
- Is it simpler than before?
- Will future developers understand this?
- Does this introduce unnecessary coupling?
- Can external dependencies be isolated?
- Is there unnecessary duplication?

I care more about maintainability than clever implementations.

---

## Continuous Improvement

I rarely stop improving a codebase after finishing a ticket. While implementing features I naturally notice opportunities to simplify, refactor, document, remove duplication, and improve architecture.

I usually propose these improvements when they align with product priorities—instead of treating refactoring as an isolated activity disconnected from delivery.

---

## Summary

The engineer I want to become is not the one who writes the most code. I want to become the engineer who consistently leaves software in a better state than it was before.

If a teammate inherits code I worked on, my goal is for them to understand it quickly, maintain it confidently, and improve it without fear.

---

## Related Documents

| Document | Relationship |
|----------|--------------|
| [`../context.md`](../context.md) | High-level engineer profile and motivations |
| [`architecture.md`](architecture.md) | System design and structural decisions |
| [`working-with-ai.md`](working-with-ai.md) | How I think about AI-assisted engineering |
| [`../stories/`](../stories/) | Concrete examples of these principles in practice |
| [`../experience/`](../experience/) | Where these patterns showed up across employers |
