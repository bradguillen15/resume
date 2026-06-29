# Resume Bullet Bank

## Purpose

Reusable database of resume bullet points derived from documented experience. This is **not** a resume.

Every bullet is based on real work documented in [`../experience/`](../experience/), [`../stories/`](../stories/), or [`../projects/`](../projects/). Each bullet includes a **Source** link and **Tags** for role-specific selection.

**Rules:** Do not invent metrics. Do not exaggerate. When impact cannot be quantified, describe engineering or user impact without numbers.

---

## How to use

1. Select bullets relevant to the target role (see [Usage rules](#usage-rules)).
2. Pull from [`master-resume.md`](master-resume.md) for summary and employment context.
3. Expand bullets into interview answers using linked story files.
4. Never duplicate facts here—update source documents first, then this bank.

---

## Frontend Engineering

- Built and maintained large-scale React applications in TypeScript serving production users at Keller Williams.
  - **Source:** [`../experience/keller-williams.md`](../experience/keller-williams.md)
  - **Tags:** frontend, react, typescript, keller-williams

- Developed complex user interfaces using React, TypeScript, Redux, and React Query in a long-lived production codebase.
  - **Source:** [`../experience/keller-williams.md`](../experience/keller-williams.md)
  - **Tags:** frontend, react, typescript, state-management

- Built React frontends and user flows as part of full-stack delivery at Advision Development.
  - **Source:** [`../experience/advision.md`](../experience/advision.md)
  - **Tags:** frontend, react, full-stack, advision

- Designed reusable components and custom hooks to improve maintainability and reduce duplicated business logic.
  - **Source:** [`../projects/free-slot.md`](../projects/free-slot.md)
  - **Tags:** frontend, react, architecture, maintainability

- Improved application maintainability by identifying reusable abstractions and extracting shared patterns across features.
  - **Source:** [`../philosophy/engineering.md`](../philosophy/engineering.md), [`../context.md`](../context.md)
  - **Tags:** frontend, architecture, maintainability

- Delivered frontend features while collaborating closely with Product, Design, Backend Engineers, and QA.
  - **Source:** [`../experience/keller-williams.md`](../experience/keller-williams.md)
  - **Tags:** frontend, collaboration, keller-williams

- Diagnosed and resolved frontend rendering bottlenecks that significantly improved dashboard responsiveness in a production React application.
  - **Source:** [`../stories/dashboard-performance.md`](../stories/dashboard-performance.md)
  - **Tags:** frontend, react, performance, keller-williams

- Investigated application rendering behavior to identify and eliminate unnecessary React renders without a large architectural rewrite.
  - **Source:** [`../stories/dashboard-performance.md`](../stories/dashboard-performance.md)
  - **Tags:** frontend, react, performance, debugging

- Improved user experience through targeted frontend rendering optimizations while keeping implementations simple and maintainable.
  - **Source:** [`../stories/dashboard-performance.md`](../stories/dashboard-performance.md)
  - **Tags:** frontend, performance, keller-williams

- Participated in migration toward a micro frontend architecture to improve team independence and long-term maintainability.
  - **Source:** [`../experience/keller-williams.md`](../experience/keller-williams.md)
  - **Tags:** frontend, architecture, micro-frontends, keller-williams

- Modernized legacy frontend implementations through incremental refactoring aligned with product delivery.
  - **Source:** [`../experience/keller-williams.md`](../experience/keller-williams.md), [`../philosophy/engineering.md`](../philosophy/engineering.md)
  - **Tags:** frontend, refactoring, legacy

- Adapted frontend integrations to support a CMS migration with minimal disruption to existing user-facing functionality.
  - **Source:** [`../stories/react-cms-to-wordpress.md`](../stories/react-cms-to-wordpress.md)
  - **Tags:** frontend, migration, advision

- Encapsulated Supabase behind reusable services and hooks so UI components remain independent of backend infrastructure.
  - **Source:** [`../projects/free-slot.md`](../projects/free-slot.md)
  - **Tags:** frontend, react, architecture, supabase

---

## Backend Engineering

- Built backend services using Java, Spring Boot, Hibernate, and relational databases in production applications.
  - **Source:** [`../experience/first-factory.md`](../experience/first-factory.md)
  - **Tags:** backend, java, spring-boot, hibernate, first-factory

- Designed and implemented REST APIs for frontend consumers and internal services.
  - **Source:** [`../experience/first-factory.md`](../experience/first-factory.md), [`../experience/advision.md`](../experience/advision.md)
  - **Tags:** backend, rest-api

- Architected a Java REST API from scratch using Hibernate and Jersey, with JUnit and Mockito test coverage and Selenium-based QA automation.
  - **Source:** [`../experience/first-factory.md`](../experience/first-factory.md)
  - **Tags:** backend, java, hibernate, jersey, testing, first-factory

- Built a Yeoman generator that scaffolds full CRUD APIs for Java (Spring Boot) or Node.js from user-selected options, reducing boilerplate for new services.
  - **Source:** [`../experience/first-factory.md`](../experience/first-factory.md)
  - **Tags:** backend, tooling, java, nodejs, developer-experience, first-factory

- Created Node.js services and GraphQL endpoints where they fit specific product requirements at Advision Development.
  - **Source:** [`../experience/advision.md`](../experience/advision.md)
  - **Tags:** backend, nodejs, graphql, advision

- Led implementation of an AWS Lambda integration that transformed internal service data into a simplified format for WordPress consumption.
  - **Source:** [`../stories/lambda-wordpress-integration.md`](../stories/lambda-wordpress-integration.md)
  - **Tags:** backend, aws, lambda, serverless, advision

- Designed backend data transformation logic that reduced coupling between internal services and a public-facing CMS.
  - **Source:** [`../stories/lambda-wordpress-integration.md`](../stories/lambda-wordpress-integration.md)
  - **Tags:** backend, architecture, integration, advision

- Built backend integrations between internal services and external platforms using scheduled synchronization and service boundaries.
  - **Source:** [`../stories/lambda-wordpress-integration.md`](../stories/lambda-wordpress-integration.md)
  - **Tags:** backend, integration, aws

- Implemented cloud infrastructure using AWS services including Lambda, API Gateway, EC2, IAM, and S3.
  - **Source:** [`../stories/lambda-wordpress-integration.md`](../stories/lambda-wordpress-integration.md)
  - **Tags:** backend, aws, cloud, advision

---

## Full Stack

- Delivered features spanning React frontends, backend services, API integrations, and cloud infrastructure on a small engineering team.
  - **Source:** [`../experience/advision.md`](../experience/advision.md)
  - **Tags:** full-stack, advision

- Worked across React, Node.js, REST APIs, GraphQL, relational databases, and AWS at Advision — plus Java/Spring Boot backend earlier at First Factory.
  - **Source:** [`../experience/advision.md`](../experience/advision.md), [`../experience/first-factory.md`](../experience/first-factory.md)
  - **Tags:** full-stack, backend, frontend

- Implemented real-time features with WebSockets at Advision, enabling low-latency live updates on the frontend.
  - **Source:** [`../experience/advision.md`](../experience/advision.md)
  - **Tags:** full-stack, realtime, websockets, advision

- Collaborated with backend teams to migrate API contracts while maintaining frontend stability through compatibility layers.
  - **Source:** [`../stories/api-migration-v1-v2.md`](../stories/api-migration-v1-v2.md)
  - **Tags:** full-stack, integration, migration

- Balanced frontend architecture with backend integration concerns throughout feature development and cross-team migrations.
  - **Source:** [`../experience/keller-williams.md`](../experience/keller-williams.md)
  - **Tags:** full-stack, architecture, keller-williams

- Designed and deployed a production-ready full-stack application using React 19, TypeScript, and Supabase with authentication and database integration.
  - **Source:** [`../projects/free-slot.md`](../projects/free-slot.md)
  - **Tags:** full-stack, react, supabase, personal-project

---

## Architecture

- Consolidated application architecture by deprecating an entire repository, reducing deployment and maintenance complexity across frontend systems.
  - **Source:** [`../stories/repository-deprecation.md`](../stories/repository-deprecation.md)
  - **Tags:** architecture, simplification, keller-williams

- Identified an opportunity to align architectural simplification with an existing product migration, minimizing delivery risk and avoiding a standalone refactor project.
  - **Source:** [`../stories/repository-deprecation.md`](../stories/repository-deprecation.md)
  - **Tags:** architecture, refactoring, product-thinking, keller-williams

- Reduced long-term engineering overhead through incremental repository consolidation from three repositories to two.
  - **Source:** [`../stories/repository-deprecation.md`](../stories/repository-deprecation.md)
  - **Tags:** architecture, devops, simplification, keller-williams

- Led migration from a legacy API contract to a redesigned V2 endpoint by introducing a compatibility layer that isolated backend changes from the frontend.
  - **Source:** [`../stories/api-migration-v1-v2.md`](../stories/api-migration-v1-v2.md)
  - **Tags:** architecture, migration, api, keller-williams

- Reduced migration risk by encapsulating API contract changes behind transformation logic instead of refactoring application-wide consumers.
  - **Source:** [`../stories/api-migration-v1-v2.md`](../stories/api-migration-v1-v2.md)
  - **Tags:** architecture, migration, api, keller-williams

- Designed and implemented a configurable banner system that replaced repeated one-off implementations with a reusable, configuration-driven solution.
  - **Source:** [`../stories/configurable-banner-system.md`](../stories/configurable-banner-system.md)
  - **Tags:** architecture, frontend, reusability, keller-williams

- Reduced recurring engineering work by transforming informational banners into configurable application behavior rather than sprint-sized feature requests.
  - **Source:** [`../stories/configurable-banner-system.md`](../stories/configurable-banner-system.md)
  - **Tags:** architecture, product-thinking, keller-williams

- Identified an unprompted opportunity to eliminate repetitive feature development through lightweight, reusable frontend architecture.
  - **Source:** [`../stories/configurable-banner-system.md`](../stories/configurable-banner-system.md)
  - **Tags:** architecture, initiative, keller-williams

- Influenced architectural decisions by advocating for navigation patterns aligned with evolving product requirements, reducing unnecessary implementation complexity.
  - **Source:** [`../stories/modal-vs-page-decision.md`](../stories/modal-vs-page-decision.md)
  - **Tags:** architecture, product-thinking, collaboration, keller-williams

- Collaborated with Product and Design to evolve feature architecture as requirements expanded, resulting in a simpler and more maintainable page-based solution.
  - **Source:** [`../stories/modal-vs-page-decision.md`](../stories/modal-vs-page-decision.md)
  - **Tags:** architecture, collaboration, ux, keller-williams

- Simplified large codebases through incremental refactoring and architectural improvements aligned with product priorities.
  - **Source:** [`../experience/keller-williams.md`](../experience/keller-williams.md), [`../philosophy/engineering.md`](../philosophy/engineering.md)
  - **Tags:** architecture, refactoring, maintainability

- Introduced clear service boundaries and stable internal models to isolate infrastructure and API changes from application logic.
  - **Source:** [`../stories/api-migration-v1-v2.md`](../stories/api-migration-v1-v2.md), [`../projects/free-slot.md`](../projects/free-slot.md)
  - **Tags:** architecture, abstraction, maintainability

- Led a data layer migration that removed Redux in favor of a more maintainable, performant state-management approach, reducing boilerplate by ~40%.
  - **Source:** [`../stories/redux-removal.md`](../stories/redux-removal.md)
  - **Tags:** architecture, frontend, state-management, simplification, metrics, keller-williams

- Reduced state-management complexity and improved developer experience by replacing a heavyweight global store with lighter patterns and React Query for server state.
  - **Source:** [`../stories/redux-removal.md`](../stories/redux-removal.md)
  - **Tags:** architecture, frontend, react-query, maintainability, keller-williams

---

## Performance

- Reduced dashboard load time by ~35%+ by implementing lazy loading to resolve excessive re-render issues in a production React application.
  - **Source:** [`../stories/dashboard-performance.md`](../stories/dashboard-performance.md)
  - **Tags:** performance, react, metrics, keller-williams

- Diagnosed and resolved frontend rendering bottlenecks to improve application responsiveness by tracing render behavior before applying optimizations.
  - **Source:** [`../stories/dashboard-performance.md`](../stories/dashboard-performance.md)
  - **Tags:** performance, react, debugging, keller-williams

- Investigated performance issues by distinguishing backend latency from unnecessary frontend rendering work.
  - **Source:** [`../stories/dashboard-performance.md`](../stories/dashboard-performance.md)
  - **Tags:** performance, debugging, keller-williams

- Prioritized responsive drag-and-drop interactions through sensible state management rather than premature optimization.
  - **Source:** [`../projects/free-slot.md`](../projects/free-slot.md)
  - **Tags:** performance, frontend, personal-project

---

## Cloud and DevOps

- Implemented AWS Lambda functions and related cloud resources for production backend integrations.
  - **Source:** [`../stories/lambda-wordpress-integration.md`](../stories/lambda-wordpress-integration.md)
  - **Tags:** cloud, aws, lambda, advision

- Maintained CI/CD pipelines using GitHub Actions, Spinnaker, and Harness for production frontend deployments.
  - **Source:** [`../experience/keller-williams.md`](../experience/keller-williams.md)
  - **Tags:** devops, cicd, keller-williams

- Participated in production deployments, release promotion flows, and pipeline troubleshooting across multiple environments.
  - **Source:** [`../experience/keller-williams.md`](../experience/keller-williams.md)
  - **Tags:** devops, cicd, production, keller-williams

- Maintained automated build and deployment workflows for a production portfolio site using GitHub Actions and Firebase Hosting.
  - **Source:** [`../projects/portfolio.md`](../projects/portfolio.md)
  - **Tags:** devops, cicd, firebase, personal-project

- Deployed Cloud Functions for contact form delivery, review submission, and IP rate limiting on a live production site.
  - **Source:** [`../projects/portfolio.md`](../projects/portfolio.md)
  - **Tags:** cloud, firebase, backend, personal-project

---

## Technical Leadership

- Promoted to Lead Web Developer (2020) at Advision and led a frontend team of 4 as Scrum Master—mentoring developers, analyzing requirements, and running sprint ceremonies and stakeholder communication.
  - **Source:** [`../experience/advision.md`](../experience/advision.md)
  - **Tags:** leadership, team-lead, scrum-master, mentoring, advision

- As Lead Web Developer at Advision, defined team coding standards and reusable patterns, reviewed others' architecture and technical designs, mentored developers, and interviewed and helped hire engineers.
  - **Source:** [`../experience/advision.md`](../experience/advision.md)
  - **Tags:** leadership, standards, architecture-review, mentoring, hiring, advision

- As one of only two frontend engineers on a cross-functional product squad, owned large portions of a large-scale production React application end-to-end.
  - **Source:** [`../experience/keller-williams.md`](../experience/keller-williams.md)
  - **Tags:** ownership, frontend, scope, keller-williams

- Owned three interconnected frontend applications (user, admin, shared) within a platform of ~40 micro frontends, consolidating them from three repositories into two.
  - **Source:** [`../experience/keller-williams.md`](../experience/keller-williams.md)
  - **Tags:** frontend, architecture, micro-frontends, scale, keller-williams

- Owned complex frontend features from design collaboration through production deployment and long-term maintenance.
  - **Source:** [`../experience/keller-williams.md`](../experience/keller-williams.md)
  - **Tags:** leadership, ownership, keller-williams

- Led frontend implementation of a cross-team API migration while coordinating with an external backend engineering team.
  - **Source:** [`../stories/api-migration-v1-v2.md`](../stories/api-migration-v1-v2.md)
  - **Tags:** leadership, migration, collaboration, keller-williams

- Led implementation of an AWS Lambda service under CTO-defined architecture, owning technical execution and delivery.
  - **Source:** [`../stories/lambda-wordpress-integration.md`](../stories/lambda-wordpress-integration.md)
  - **Tags:** leadership, backend, aws, advision

- Mentored junior developers through pair programming, code reviews, and architectural discussions.
  - **Source:** [`../experience/advision.md`](../experience/advision.md), [`../experience/keller-williams.md`](../experience/keller-williams.md)
  - **Tags:** leadership, mentoring

- Mentored teammates on features and systems I owned deeply, becoming the primary point of contact for questions and enhancements.
  - **Source:** [`../experience/keller-williams.md`](../experience/keller-williams.md)
  - **Tags:** leadership, mentoring, ownership, keller-williams

- Collaborated with Product and Design to refine requirements, suggest UX improvements, and align technical decisions with product behavior.
  - **Source:** [`../experience/keller-williams.md`](../experience/keller-williams.md)
  - **Tags:** leadership, collaboration, product-thinking

- Took ownership of business-critical features throughout their lifecycle including maintainability, production quality, and future improvements.
  - **Source:** [`../context.md`](../context.md), [`../experience/keller-williams.md`](../experience/keller-williams.md)
  - **Tags:** leadership, ownership

---

## Collaboration

- Worked closely with cross-functional teams including Product Managers, Designers, Backend Engineers, QA, and external engineering teams.
  - **Source:** [`../experience/keller-williams.md`](../experience/keller-williams.md)
  - **Tags:** collaboration, keller-williams

- Coordinated API migrations across engineering teams, aligning on contracts, timelines, and rollout strategy.
  - **Source:** [`../stories/api-migration-v1-v2.md`](../stories/api-migration-v1-v2.md)
  - **Tags:** collaboration, migration, api, keller-williams

- Collaborated with an external backend team to deliver a cross-team API migration with minimal disruption to ongoing feature development.
  - **Source:** [`../stories/api-migration-v1-v2.md`](../stories/api-migration-v1-v2.md)
  - **Tags:** collaboration, migration, keller-williams

- Proposed product and engineering improvements beyond assigned implementation tasks, including configurable systems and navigation architecture.
  - **Source:** [`../stories/configurable-banner-system.md`](../stories/configurable-banner-system.md), [`../stories/modal-vs-page-decision.md`](../stories/modal-vs-page-decision.md)
  - **Tags:** collaboration, initiative, product-thinking

- Collaborated directly with the CTO on architecture and technical direction while owning implementation on a small engineering team.
  - **Source:** [`../experience/advision.md`](../experience/advision.md)
  - **Tags:** collaboration, advision

- Participated in architectural discussions focused on maintainability, business impact, and long-term engineering cost.
  - **Source:** [`../experience/keller-williams.md`](../experience/keller-williams.md), [`../philosophy/engineering.md`](../philosophy/engineering.md)
  - **Tags:** collaboration, architecture

---

## Code Quality

- Reduced technical debt through incremental refactoring aligned with product delivery rather than isolated cleanup projects.
  - **Source:** [`../philosophy/engineering.md`](../philosophy/engineering.md), [`../experience/keller-williams.md`](../experience/keller-williams.md)
  - **Tags:** code-quality, refactoring, technical-debt

- Introduced reusable abstractions that simplified future feature development and isolated third-party dependencies.
  - **Source:** [`../projects/free-slot.md`](../projects/free-slot.md), [`../stories/configurable-banner-system.md`](../stories/configurable-banner-system.md)
  - **Tags:** code-quality, architecture, maintainability

- Reviewed code with emphasis on understandability, coupling, duplication, and long-term maintainability over clever implementations.
  - **Source:** [`../philosophy/engineering.md`](../philosophy/engineering.md), [`../experience/keller-williams.md`](../experience/keller-williams.md)
  - **Tags:** code-quality, code-review

- Reviewed and simplified AI-generated implementations before production deployment, rejecting unnecessary complexity.
  - **Source:** [`../projects/free-slot.md`](../projects/free-slot.md), [`../context.md`](../context.md)
  - **Tags:** code-quality, ai-engineering

- Improved codebases by identifying duplication, consolidating implementations, and removing obsolete code when safe.
  - **Source:** [`../philosophy/engineering.md`](../philosophy/engineering.md), [`../stories/repository-deprecation.md`](../stories/repository-deprecation.md)
  - **Tags:** code-quality, simplification, refactoring

- Preferred simple, maintainable implementations over unnecessary abstractions and premature generalization.
  - **Source:** [`../philosophy/engineering.md`](../philosophy/engineering.md)
  - **Tags:** code-quality, maintainability

---

## AI Engineering

- Integrated AI-assisted development into daily engineering workflows while maintaining strong code review and simplification standards.
  - **Source:** [`../context.md`](../context.md), [`../projects/free-slot.md`](../projects/free-slot.md)
  - **Tags:** ai-engineering, workflow

- Used AI to accelerate implementation, test authoring, debugging, refactoring, and architecture exploration under human review.
  - **Source:** [`../projects/free-slot.md`](../projects/free-slot.md), [`../philosophy/engineering.md`](../philosophy/engineering.md)
  - **Tags:** ai-engineering, testing, productivity

- Reviewed and simplified AI-generated code before shipping, rejecting implementations that introduced unnecessary complexity.
  - **Source:** [`../projects/free-slot.md`](../projects/free-slot.md)
  - **Tags:** ai-engineering, code-quality

- Built an AI-native career knowledge base with structured documentation designed for accurate resume and interview generation.
  - **Source:** [`../projects/portfolio.md`](../projects/portfolio.md)
  - **Tags:** ai-engineering, documentation, personal-project

- Leveraged AI tools including Cursor, Claude Code, ChatGPT, GitHub Copilot, and CodeRabbit in production engineering workflows.
  - **Source:** [`../resume/master-resume.md`](master-resume.md), [`../context.md`](../context.md)
  - **Tags:** ai-engineering, tooling

- Applied context engineering through structured markdown documentation to improve AI assistant accuracy and consistency.
  - **Source:** [`../projects/portfolio.md`](../projects/portfolio.md), [`../context.md`](../context.md)
  - **Tags:** ai-engineering, documentation

---

## Testing

- Implemented end-to-end testing against a local Supabase stack shared with the development environment for realistic integration coverage.
  - **Source:** [`../projects/free-slot.md`](../projects/free-slot.md)
  - **Tags:** testing, e2e, supabase, personal-project

- Used Playwright and modern testing practices to validate production workflows on a personal full-stack application.
  - **Source:** [`../projects/free-slot.md`](../projects/free-slot.md)
  - **Tags:** testing, playwright, e2e, personal-project

- Expanded automated test coverage as a safety net for refactoring and deployment confidence rather than a coverage metric target.
  - **Source:** [`../projects/free-slot.md`](../projects/free-slot.md)
  - **Tags:** testing, maintainability, personal-project

- Used Vitest for unit testing in the production portfolio repository.
  - **Source:** [`../resume/master-resume.md`](master-resume.md), [`../projects/portfolio.md`](../projects/portfolio.md)
  - **Tags:** testing, vitest, personal-project

---

## CI/CD

- Maintained production deployment pipelines using GitHub Actions, Harness, and Spinnaker for enterprise frontend applications.
  - **Source:** [`../experience/keller-williams.md`](../experience/keller-williams.md)
  - **Tags:** cicd, devops, keller-williams

- Participated in release management, deployment automation, and pipeline troubleshooting as part of feature ownership.
  - **Source:** [`../experience/keller-williams.md`](../experience/keller-williams.md)
  - **Tags:** cicd, production, keller-williams

- Automated build, validation, and deployment workflows for personal projects to keep main releasable at any point.
  - **Source:** [`../projects/free-slot.md`](../projects/free-slot.md), [`../projects/portfolio.md`](../projects/portfolio.md)
  - **Tags:** cicd, personal-project

---

## Ownership

- Took ownership of an incomplete React feature after an external contractor failed to deliver, rebuilding the implementation and meeting the project deadline.
  - **Source:** [`../stories/contractor-rescue.md`](../stories/contractor-rescue.md)
  - **Tags:** ownership, delivery, advision

- Evaluated an unfinished implementation and determined that a clean rebuild would reduce delivery risk and improve maintainability compared to continuing partial work.
  - **Source:** [`../stories/contractor-rescue.md`](../stories/contractor-rescue.md)
  - **Tags:** ownership, judgment, advision

- Delivered production-ready functionality under tight deadlines by rapidly understanding requirements and implementing a complete solution from approved designs.
  - **Source:** [`../stories/contractor-rescue.md`](../stories/contractor-rescue.md)
  - **Tags:** ownership, delivery, frontend, advision

- Served as the primary engineer responsible for long-term maintenance of multiple product areas through deep feature ownership.
  - **Source:** [`../experience/keller-williams.md`](../experience/keller-williams.md)
  - **Tags:** ownership, keller-williams

- Balanced engineering quality with business priorities throughout feature development and incremental modernization efforts.
  - **Source:** [`../experience/keller-williams.md`](../experience/keller-williams.md), [`../philosophy/engineering.md`](../philosophy/engineering.md)
  - **Tags:** ownership, pragmatism

- Owned end-to-end feature delivery on a small team spanning frontend, backend, infrastructure, and production support.
  - **Source:** [`../experience/advision.md`](../experience/advision.md)
  - **Tags:** ownership, full-stack, advision

---

## Migration Experience

- Led frontend migration from API V1 to V2 by introducing a compatibility layer that shielded application consumers from breaking backend changes.
  - **Source:** [`../stories/api-migration-v1-v2.md`](../stories/api-migration-v1-v2.md)
  - **Tags:** migration, api, frontend, keller-williams

- Supported migration from a custom React CMS to WordPress, adapting frontend integrations with minimal user-facing disruption.
  - **Source:** [`../stories/react-cms-to-wordpress.md`](../stories/react-cms-to-wordpress.md)
  - **Tags:** migration, cms, frontend, advision

- Contributed to migrating an internally developed React CMS to WordPress, simplifying long-term maintenance and improving content management workflows.
  - **Source:** [`../stories/react-cms-to-wordpress.md`](../stories/react-cms-to-wordpress.md)
  - **Tags:** migration, cms, advision

- Helped modernize legacy frontend infrastructure by integrating a mature CMS platform in place of a custom-built solution.
  - **Source:** [`../stories/react-cms-to-wordpress.md`](../stories/react-cms-to-wordpress.md)
  - **Tags:** migration, legacy, advision

- Participated in incremental migration toward micro frontend architecture with minimal production disruption.
  - **Source:** [`../experience/keller-williams.md`](../experience/keller-williams.md)
  - **Tags:** migration, micro-frontends, keller-williams

- Aligned repository consolidation with an in-flight product migration to reduce the cost of architectural simplification.
  - **Source:** [`../stories/repository-deprecation.md`](../stories/repository-deprecation.md)
  - **Tags:** migration, architecture, keller-williams

---

## Personal Projects

- Designed and deployed Free Slot, a production-ready React 19 application with Supabase authentication, database integration, and CI/CD automation.
  - **Source:** [`../projects/free-slot.md`](../projects/free-slot.md)
  - **Tags:** personal-project, full-stack, react, supabase

- Implemented anonymous-first UX in a production app: anonymous activity is stored in local storage and seamlessly migrated to Supabase when the user creates an account—removing signup friction without losing data.
  - **Source:** [`../projects/free-slot.md`](../projects/free-slot.md)
  - **Tags:** personal-project, full-stack, supabase, ux, architecture

- Added production error monitoring and observability with Sentry on a personal production app, capturing and triaging errors from production rather than relying on user reports.
  - **Source:** [`../projects/free-slot.md`](../projects/free-slot.md)
  - **Tags:** personal-project, observability, sentry, production

- Built a local Supabase development environment enabling offline work and end-to-end testing without production credentials.
  - **Source:** [`../projects/free-slot.md`](../projects/free-slot.md)
  - **Tags:** personal-project, devops, testing, supabase

- Developed personal projects with architecture intentionally designed for maintainability, testability, and AI-assisted development.
  - **Source:** [`../projects/free-slot.md`](../projects/free-slot.md)
  - **Tags:** personal-project, architecture, ai-engineering

- Evolved a personal portfolio into an AI-native career knowledge base with structured documentation and a production Firebase backend.
  - **Source:** [`../projects/portfolio.md`](../projects/portfolio.md)
  - **Tags:** personal-project, documentation, ai-engineering, firebase

- Maintained a live production portfolio at bradguillen.com with contact workflows, review moderation, and automated deployment.
  - **Source:** [`../projects/portfolio.md`](../projects/portfolio.md)
  - **Tags:** personal-project, production, firebase

---

## Continuous Learning & Certifications

- Completed structured AI engineering coursework through Anthropic: Claude Code in Action, AI Fluency, and Model Context Protocol (introductory and advanced), plus Agent Skills.
  - **Source:** [`../learning/2026.md`](../learning/2026.md#certifications--structured-courses)
  - **Tags:** ai-engineering, certifications, mcp, continuous-learning

- Advanced backend and full-stack skills through Boot.dev coursework (in progress): Python (OOP and functional), server-side TypeScript, SQL, Docker, CI/CD, AWS, and Retrieval Augmented Generation, reinforced by guided projects including an AI agent in Python.
  - **Source:** [`../learning/2026.md`](../learning/2026.md#certifications--structured-courses)
  - **Tags:** backend, full-stack, python, typescript, certifications, continuous-learning

- Reinforced cloud and DevOps fundamentals through completed Boot.dev courses in AWS, S3/CloudFront, Docker, and CI/CD with GitHub Actions.
  - **Source:** [`../learning/2026.md`](../learning/2026.md#certifications--structured-courses)
  - **Tags:** cloud, devops, aws, cicd, continuous-learning

- Built foundational understanding of LLM application patterns through completed coursework in Retrieval Augmented Generation and Model Context Protocol.
  - **Source:** [`../learning/2026.md`](../learning/2026.md#certifications--structured-courses)
  - **Tags:** ai-engineering, rag, mcp, continuous-learning

**Note:** These are structured courses and guided projects—evidence of deliberate skill development, not production ownership. Frame as continuous learning; do not present as enterprise production experience.

---

## Usage Rules

Future resume generators should:

- **Select only bullets relevant** to the target position—typically 3–5 per role section on a one-page resume.
- **Avoid repeating the same competency** multiple times unless each bullet adds distinct evidence.
- **Prefer achievement-focused bullets** over technology lists.
- **Combine bullets from different categories** to match the desired role shape.
- **Never fabricate metrics**—no percentages, latency numbers, or team sizes unless documented elsewhere.
- **Prefer engineering impact** over implementation detail in final resume copy.
- **Preserve Source links** internally; tailored resumes may omit links but must not drift from sourced facts.

### Role-specific emphasis

| Target role | Prioritize categories |
|-------------|----------------------|
| **Frontend Engineer** | Frontend Engineering, Performance, Architecture, Collaboration |
| **Senior Software Engineer** | Architecture, Technical Leadership, Code Quality, Ownership, Collaboration |
| **Full Stack Engineer** | Full Stack, Backend Engineering, Cloud and DevOps, Architecture, Personal Projects, Continuous Learning & Certifications |
| **AI Software Engineer** | AI Engineering, Code Quality, Architecture, Personal Projects, Testing, Continuous Learning & Certifications |
| **Platform Engineer** | Cloud and DevOps, CI/CD, Architecture, Migration Experience, Continuous Learning & Certifications |

### Frame consistently

Describe as a **Software Engineer with deep frontend expertise and practical backend experience**—not frontend-only.

---

## Related Documents

| Document | Purpose |
|----------|---------|
| [`master-resume.md`](master-resume.md) | Canonical complete profile—primary input for generation |
| [`frontend.md`](frontend.md) | Frontend-tailored resume view |
| [`fullstack.md`](fullstack.md) | Full-stack-tailored resume view |
| [`ai-engineer.md`](ai-engineer.md) | AI engineer-tailored resume view |
| [`../context.md`](../context.md) | Engineer identity |
| [`../strengths.md`](../strengths.md) | Canonical strengths and value themes |
| [`../leadership.md`](../leadership.md) | Leadership style—influence without management title |
| [`../philosophy/engineering.md`](../philosophy/engineering.md) | Engineering principles underlying bullets |
| [`../philosophy/working-with-ai.md`](../philosophy/working-with-ai.md) | AI-assisted engineering philosophy |
| [`../experience/`](../experience/) | Employer source documents |
| [`../stories/`](../stories/) | Detailed accomplishment narratives |
| [`../projects/`](../projects/) | Personal project source documents |
---

## Maintenance

When adding bullets:

1. Verify the accomplishment exists in a source document.
2. Add **Source** and **Tags** to every new bullet.
3. Place under the most relevant competency category.
4. Update tailored resume views (`frontend.md`, etc.) by selection—not by copying unsourced text.
