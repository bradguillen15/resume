# First Factory

## Purpose

Canonical record of employment at First Factory. Resume bullets and interview answers should reference this file—not duplicate it.

This document describes the beginning of my professional engineering career. It emphasizes growth and foundation—not accomplishments that compete with later roles. Many years have passed; where specific implementation details are no longer remembered, that is stated explicitly rather than inferred.

---

## Overview

**Company:** First Factory

**Role:** Software Engineer

**Dates:** May 2016 – November 2017 (~1.5 years)

This was my first professional software engineering role. It gave me experience designing backend applications, working inside enterprise software, and contributing as part of a professional engineering team—not solo academic projects.

The role established foundations I still use: layered architecture, API design, working in existing codebases, code review, and writing code that other developers must maintain. It is the starting point of my professional backend experience, which continued at [`advision.md`](advision.md) and still informs how I work today despite later frontend specialization.

---

## Primary Responsibilities

This was an early-career role, but I owned concrete deliverables end-to-end rather than only assigned tickets:

- Architecting a **Java REST API from scratch** with **Hibernate** and **Jersey**, covered by **JUnit** and **Mockito** tests; collaborating with QA on **Selenium**-based automation
- Building a **Yeoman generator** that scaffolds full CRUD APIs for **Java (Spring Boot)** or **Node.js** from user-selected options
- Developing a **Google Sheets add-on** to auto-generate reports using **JavaScript (ES6)**, **Webpack**, and **Google Apps Script**
- Providing support across multiple **enterprise applications** using **Java 8**, **JSP**, **Spring**, and **jQuery**
- Designing and implementing **REST APIs** with **Hibernate** persistence against **relational databases**

Architectural direction for the larger enterprise systems came from senior engineers, but I owned the design and implementation of the tools and services above.

---

## Engineering Context

First Factory placed engineers on client projects using enterprise Java tooling. The stack I worked with included:

- **Java** (incl. Java 8) and **Spring Boot** for application services; **JSP** and **jQuery** in older enterprise apps
- **Hibernate** as the ORM layer; **Jersey** for REST endpoints
- **REST APIs** as the primary integration surface for frontends and other consumers
- **JUnit** and **Mockito** for testing; **Selenium** for QA automation
- **Node.js**, **JavaScript (ES6)**, **Webpack**, **Yeoman**, and **Google Apps Script** for tooling and add-on work
- **C#** / **ASP.NET MVC** for a clinic management application; **Python / Flask** project contribution
- **Maven** for build and dependency management; **Git** for version control
- **Relational databases** for persistence

This was my introduction to professional **enterprise applications**—codebases with existing structure, conventions, and history that predated my arrival. Specific database products, deployment environments, and internal tooling details are no longer remembered with confidence; what persisted is the experience of working within that kind of system rather than starting from a blank file.

---

## Key Projects

**Java REST API (architected from scratch)** — Designed and built a Java REST API using Hibernate and Jersey, with JUnit and Mockito test coverage, **for a US client**—including on-site collaboration and direct stakeholder reporting. Worked with QA on Selenium-based automation. Real production backend work with ownership over the design, not just assigned tickets.

**Yeoman generator** — Built a developer tool that scaffolds full-stack project templates for Java (Spring Boot) or Node.js based on user-selected options—reducing setup time and repetitive boilerplate for new projects. An early example of the "remove repeated work" instinct that recurs throughout my career.

**Clinic management application (C# / ASP.NET MVC)** — Developed a C# application to handle internal operational workflows for a clinic.

**Python / Flask** — Contributed to a Python Flask project.

**Google Sheets reporting add-on** — Developed an add-on that auto-generates reports using JavaScript (ES6), Webpack, and Google Apps Script.

**Enterprise application support** — Supported multiple enterprise applications built with Java 8, JSP, Spring, JavaScript, and jQuery.

**Engineering impact:** Concrete, owned deliverables across multiple languages (Java REST API, a code generator, a C# application, Python/Flask, a reporting tool) in a professional environment—establishing real backend and tooling experience, not tutorial-level exposure.

---

## Engineering Growth

This role marked the transition from university programming to professional software engineering. Much of the growth was procedural and cultural as much as technical:

- **Version control** — Using **Git** as part of a team, not just for personal backups
- **Code reviews** — Receiving and incorporating feedback; learning that my first solution was rarely the one that shipped
- **Working within a team** — Estimates, standups, handoffs, and depending on others' work
- **Writing maintainable code** — Code read more often than written
- **Reading existing codebases** — Most days started with understanding what was already there
- **Understanding software architecture** — Layers, separation of concerns, and why structure exists
- **Communicating technical ideas** — Explaining approach, asking questions when requirements were unclear
- **Estimating work** — Learning how long things actually take versus initial guesses
- **Receiving feedback** — Treating review comments as learning, not criticism

These habits formed before Advision or Keller Williams. They explain why I still default to understanding existing code before adding to it.

---

## What I Learned

Lessons from First Factory that still influence my work:

- **Writing code for other developers** — Not just for myself or for the compiler
- **Understanding layered architectures** — Controllers, services, persistence—each with a job
- **Separating concerns** — Keeping business logic, data access, and transport layers distinct
- **Thinking about maintainability** — Even as a junior, code outlived the ticket that introduced it
- **Designing APIs before implementing them** — Shape and naming matter for everyone downstream
- **Understanding how frontend and backend interact** — Contracts, error handling, and what consumers actually need
- **Building inside an existing codebase** — Rarely greenfield; usually extend, adapt, fit in
- **Professional engineering practices** — Reviews, **Git** workflow, team standards as the default

These are not unique insights—they are what a first professional role is supposed to teach. The value is that I learned them early, on real systems, before later roles added depth.

---

## Looking Back

Although I eventually specialized in frontend work, the backend foundation from First Factory has remained useful.

It allows me to communicate effectively with backend engineers, reason about **REST API** design, follow discussions about persistence and service boundaries, and work across the stack when the product benefits—without treating backend work as a black box.

This role partly explains why I naturally think beyond frontend concerns: maintainability, API contracts, and architecture were part of my professional identity from the start, not something I picked up only after years of UI work.

First Factory is not the headline of my career. It is the floor—honest, foundational, and still load-bearing.

---

## Related Documents

| Document | Relationship |
|----------|--------------|
| [`advision.md`](advision.md) | Next role—full-stack ownership building on this foundation |
| [`keller-williams.md`](keller-williams.md) | Later role—frontend specialization and senior ownership |
| [`../context.md`](../context.md) | Engineer profile—backend experience spans entire career arc |
| [`../philosophy/engineering.md`](../philosophy/engineering.md) | Principles shaped in part by early professional habits |
| [`../resume/`](../resume/) | Curated bullets derived from this file |

There are no dedicated story files for First Factory. The experience is documented here at overview depth; later roles contain the detailed engineering narratives.
