# Advision Development

## Purpose

Canonical record of employment at Advision Development. Resume bullets and interview answers should reference this file—not duplicate it. Detailed narratives live in [`../stories/`](../stories/).

This role is the strongest evidence that my backend experience is professional, not theoretical. Future readers should understand that full-stack ownership came before frontend specialization.

---

## Overview

**Company:** Advision Development

**Role:** Senior Web Developer, promoted to **Lead Web Developer** (Team Lead)

**Dates:** November 2017 – November 2020 (~3 years)
- **Senior Web Developer:** Nov 2017 – Dec 2019 (~2 years)
- **Lead Web Developer:** Jan 2020 – Nov 2020 (~11 months)

Advision was the foundation of my engineering career. The team was relatively small, so engineers owned features end-to-end rather than handing off across rigid role boundaries.

I joined as a **Senior Web Developer**, delivering full-stack across React, Node.js/Express, REST and GraphQL APIs, and real-time WebSocket features. In **January 2020 I was promoted to Lead Web Developer**, where I led a **frontend team of 4** and took on **Scrum Master** responsibilities—facilitating sprint ceremonies, managing stakeholder communication, and mentoring junior developers—while remaining hands-on. Architectural direction often came from the CTO, but implementation, day-to-day technical decisions, and (in the lead role) team delivery were mine to execute. This role shaped how I think about software engineering today—ownership, pragmatism, and understanding the full path from idea to production.

**Honest framing:** the **Team Lead / Scrum Master** responsibilities belong to the **Lead Web Developer** period (~final 11 months), not the full three years.

---

## Primary Responsibilities

- *(As Lead Web Developer, 2020)* **Led a frontend team of 4**—delegating work, reviewing code, and analyzing requirements with stakeholders
- *(As Lead Web Developer, 2020)* Acted as **Scrum Master**—facilitating sprint ceremonies and managing stakeholder communication
- Built and consumed **RESTful APIs** in **Node.js** and **Express**, coordinating with backend teams on contract definitions
- Worked with **GraphQL** to query and mutate backend data, improving frontend data-fetching efficiency
- Implemented **real-time features with WebSockets** for low-latency live updates
- Built **React** frontends in **JavaScript**; developed reusable components and shared logic across 3+ web applications
- Deployed applications to **AWS** (**EC2**, **S3**, **API Gateway**, **IAM**, **Lambda**)
- Collaborated directly with the CTO on architecture and technical direction
- Participated in architectural decisions for features and systems
- Owned features from initial discussion through production support
- Maintained **CI/CD** workflows and used **Git** for version control
- Supported **WordPress** integrations where the product required a mature CMS

---

## Engineering Context

Advision operated as a small engineering team building client and internal products. The stack reflected that reality: **Node.js** and **Express** on the backend, **React** on the frontend, **GraphQL** and **REST** where they fit specific problems, **WebSockets** for real-time features, and **AWS** for deployment and serverless work.

There was no luxury of narrow specialization. A feature might require a **REST API**, a **React** UI, an **AWS Lambda** function, and a **WordPress** integration in the same delivery cycle. **Git** and **CI/CD** were part of everyday work—not a separate ops team's problem.

This environment is why I am comfortable moving across the stack when the product needs it, even though later roles leaned more frontend-heavy.

---

## Major Engineering Contributions

High-level summaries below. Each links to a detailed story where one exists.

### Lambda Integration for WordPress

I led the implementation of an **AWS Lambda** service that consumed data from an internal API, transformed the response, stripped unnecessary information, cached the processed result, and exposed a **WordPress**-friendly API for the frontend to consume.

Architectural direction came from the CTO; I owned the implementation and technical execution. The work involved **AWS** services including **Lambda**, **EC2**, **IAM**, **API Gateway**, and related infrastructure configuration.

**Engineering impact:** WordPress could display dynamic data without the CMS calling internal APIs directly or duplicating backend logic. Caching reduced load and kept responses predictable for content-driven pages.

→ Detailed story: [`../stories/lambda-wordpress-integration.md`](../stories/lambda-wordpress-integration.md)

### CMS Migration

I helped migrate an internally-built **React** CMS toward **WordPress**.

The existing CMS had been developed before the **React** ecosystem matured. Over time it became difficult to maintain—content workflows that should have been straightforward required engineering time, and the custom CMS carried ongoing cost without clear product advantage.

**WordPress** simplified content management for non-engineers and reduced long-term maintenance burden. My work included adapting frontend functionality so existing product behavior survived the migration without forcing users through a disruptive transition.

**Engineering impact:** Content management moved to a tool built for that purpose. Engineering time shifted away from maintaining a bespoke CMS toward product features that actually differentiated the business.

→ Detailed story: [`../stories/react-cms-to-wordpress.md`](../stories/react-cms-to-wordpress.md)

### Backend Development

I built backend services using **Node.js**, designing **REST APIs** and **GraphQL** endpoints for frontend and external consumers and handling data persistence and business logic.

This was earlier in my career—I was not the most senior backend engineer on the team, and architectural direction often came from the CTO. But the work was production backend development: real services, real databases, real deployments—not tutorials or side projects.

**Engineering impact:** Established professional backend experience that later roles could build on. When I integrate with APIs or discuss service design today, it comes from having implemented those systems, not from reading about them.

### Contractor Rescue

I took ownership of a critical page after an external contractor failed to deliver usable work. The contractor had several weeks; what remained was effectively a restart.

I rebuilt the feature from scratch, completed it before the deadline, and delivered the functionality the product needed.

**Engineering impact:** The product shipped on time. The story is about ownership and reliability—stepping in when delivery was at risk, understanding requirements quickly, and executing under pressure—not about assigning blame.

→ Detailed story: [`../stories/contractor-rescue.md`](../stories/contractor-rescue.md)

---

## Working Environment

Working in a smaller company required wearing many hats. On any given week I might move between:

- **Frontend** — **React** components, user flows, integration with APIs
- **Backend** — **Node.js** services, **REST** and **GraphQL** endpoints
- **Infrastructure** — **AWS** resources, **Lambda** functions, deployment configuration
- **Architecture discussions** — trade-offs with the CTO before committing to an approach
- **Production support** — debugging issues that crossed layer boundaries

That constant context-switching was demanding, but it built confidence I still rely on: I can follow a problem from UI symptom to API contract to infrastructure constraint without treating any layer as someone else's job.

---

## Leadership & Mentoring

As **Lead Web Developer** (2020), leading a **frontend team of 4**, I owned more than my own deliverables: I distributed work, reviewed the team's code, analyzed requirements with stakeholders, and was accountable for the team shipping. As **Scrum Master**, I ran sprint ceremonies and kept communication flowing between the team and stakeholders.

In the lead role I also **defined coding standards and reusable patterns**, **reviewed others' designs and architecture**, **mentored developers** (not only on my own work), and **interviewed and helped hire** as the team grew. *(This is the formal-leadership scope — at Keller Williams I was a senior IC, not a lead.)*

I mentored junior developers directly—helping them understand architecture, pairing on difficult problems, reviewing code with explanations rather than just approvals, and walking through why a particular engineering decision made sense in context. Explaining a design forces clarity about whether it is actually good, and leading the team reinforced that engineering quality and delivery are a shared responsibility, not just an individual one.

---

## Lessons Learned

Advision taught me principles I still apply:

- **Full-stack thinking** — problems rarely respect layer boundaries; understanding the whole system leads to better decisions
- **Ownership** — end-to-end responsibility from idea to production, especially on a small team
- **Backend architecture** — professional experience with **Node.js**, **REST**, **GraphQL**, and service design—not theoretical knowledge
- **Cloud fundamentals** — **AWS** services, deployment, and serverless patterns in production contexts
- **Learning from experienced engineers** — working closely with the CTO on architectural direction accelerated my judgment
- **Keeping an open mind** — the right answer is not always the one you would build from scratch
- **Research before building** — **WordPress** for CMS, existing **AWS** patterns for integration—sometimes mature tools solve the problem better than custom code

This role is why I push back when my profile is reduced to "frontend only." The specialization came later; the foundation was full-stack.

---

## Related Documents

| Document | Description |
|----------|-------------|
| [`../stories/lambda-wordpress-integration.md`](../stories/lambda-wordpress-integration.md) | AWS Lambda integration for WordPress |
| [`../stories/react-cms-to-wordpress.md`](../stories/react-cms-to-wordpress.md) | React CMS → WordPress migration |
| [`../stories/contractor-rescue.md`](../stories/contractor-rescue.md) | Critical page delivery under deadline pressure |
| [`../context.md`](../context.md) | Engineer profile—backend experience context |
| [`../experience/keller-williams.md`](keller-williams.md) | Subsequent role—frontend specialization and senior ownership |
| [`../philosophy/engineering.md`](../philosophy/engineering.md) | How Advision patterns reflect broader philosophy |
| [`../resume/`](../resume/) | Curated bullets derived from this file |
