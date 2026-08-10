<p align="left">
  <img alt="Duoasa logo" src="assets/readme/duoasa-logo.png" width="120">
</p>

<h1 align="center">Duoasa Design</h1>

<p align="center">
  <strong>English</strong>
  &middot;
  <a href="README.zh-CN.md">简体中文</a>
</p>

<p align="center">
  An AI-assisted personal design site built with OpenAI Codex, WebGL motion, and rule-driven static front-end workflows.
</p>

<p align="center">
  <a href="https://design.duoasa.com"><img alt="Live site" src="https://img.shields.io/badge/site-design.duoasa.com-111111?style=for-the-badge"></a>
  <img alt="Built with Codex" src="https://img.shields.io/badge/built%20with-OpenAI%20Codex-111111?style=for-the-badge">
  <img alt="Static frontend" src="https://img.shields.io/badge/frontend-HTML%20%2F%20CSS%20%2F%20JS-2F80ED?style=for-the-badge">
  <img alt="Cloudflare Workers" src="https://img.shields.io/badge/deploy-Cloudflare%20Workers-F38020?style=for-the-badge">
</p>

<p align="center">
  <a href="https://design.duoasa.com">Website</a>
  &middot;
  <a href="AGENTS.md">Agent Rules</a>
  &middot;
  <a href="#motion-and-open-source-references">Motion References</a>
  &middot;
  <a href="#codex-collaboration-workflow">Codex Workflow</a>
  &middot;
  <a href="#build-your-own-site-with-codex">Build Your Site</a>
  &middot;
  <a href="#deployment">Deployment</a>
</p>

---

## Overview

Duoasa Design is the personal design site of XuChenChen / Duoasa and an AI-assisted design-to-code project built with [OpenAI Codex](https://openai.com/codex/).

This repository is shared for the developer community as a record of how a full-stack design engineer can work with a coding agent to turn visual direction, interaction rules, motion references, and maintenance constraints into a static production website.

## What This Project Explores

- Turning natural-language design intent into front-end implementation with Codex.
- Keeping human design judgment in control while using AI for code execution.
- Writing durable Markdown rules so future AI sessions can preserve page structure and deployment behavior.
- Combining static HTML, CSS, JavaScript, WebGL, and motion libraries without adding a heavy build pipeline.
- Treating visual experiments as maintainable product surfaces instead of one-off demos.

## About Duoasa

Duoasa is a full-stack design engineer interested in the overlap between product logic, visual systems, interaction rhythm, motion design, front-end implementation, and AI-assisted creation.

The design direction of this site favors clear hierarchy, precise spacing, responsive motion, and expressive atmosphere. It uses code as a medium for shaping visual memory, not only as a way to publish static pages.

## Codex Collaboration Workflow

This site was built through an iterative workflow with Codex:

| Step | Practice |
| --- | --- |
| 1 | Duoasa defines the design direction, content boundaries, motion references, and editing constraints. |
| 2 | Codex reads the existing codebase before making changes and follows the local implementation style. |
| 3 | Repeated decisions are moved into Markdown rules instead of staying only in conversation. |
| 4 | Finished pages are isolated so new experiments do not accidentally affect published pages. |
| 5 | Visual output is reviewed manually, then refined through additional design and code passes. |

For AI-assisted front-end work, the useful pattern is not a single prompt. The useful pattern is a loop: intent, implementation, review, rule-making, and controlled iteration.

## Rule Documents

Rule documents are treated as part of the source code. They turn repeated design, implementation, review, and maintenance decisions into durable instructions for future AI-assisted development sessions. Instead of asking Codex to infer every constraint from the current page, the repository records the decisions that must survive across prompts, contributors, and future redesigns.

The root workflow entry is [AGENTS.md](AGENTS.md). It works as a lightweight routing layer: before changing files, Codex checks the task type, identifies the affected surface, and reads the matching Markdown rule file. Focused rule documents then define scope boundaries, protected implementation patterns, asset ownership, required verification, and the conditions for considering a task complete.

| Document | Role | When it applies |
| --- | --- | --- |
| [AGENTS.md](AGENTS.md) | Agent workflow index for this repository | Before making repository changes; it decides which rule document should be read first |
| [Case Study Page Independence Rules](cases/README.md) | Keeps second-level project pages isolated and safe to edit | Before creating, freezing, editing, or refactoring any project case study page |
| [External Interaction Component Integration Guidelines](docs/external-interaction-component-guidelines.md) | Defines how to import, adapt, and verify external animated or interactive components | Before using WebGL, canvas, shader backgrounds, React Bits exports, scroll effects, pointer-reactive visuals, or other open-source interaction components |

Together, these documents form a small repository-specific operating model for Codex:

1. **Route the task.** `AGENTS.md` decides which specialized rules apply before implementation begins.
2. **Protect scope.** Each rule names the files and surfaces that may change, reducing accidental edits to finished pages.
3. **Preserve invariants.** Page isolation, rendering behavior, source fidelity, asset ownership, and cache updates are written as explicit requirements.
4. **Define verification.** Rules describe what must be checked in code and in the rendered page before handoff.
5. **Capture new decisions.** When a workflow produces a durable constraint, it can be promoted from conversation into a new rule file and linked from `AGENTS.md`.

Current rule coverage includes:

- finished detail pages own their own HTML, CSS, JavaScript, and project assets
- page-level styles stay scoped to the current project page
- local testbeds stay excluded from production until explicitly promoted
- external component integrations preserve source defaults, rendering pipeline, color space, alpha blending, DPR, and post-processing before visual tuning
- cache-version query strings are updated when changed CSS or JavaScript must be reloaded

This structure is intentionally extensible: new rule files can be added under `docs/` or a feature-specific folder, then referenced from `AGENTS.md` with a clear trigger condition.

When adding a rule document, make its contract easy for both humans and coding agents to scan. A useful rule normally answers five questions: **when does it apply, which files does it own, what must remain unchanged, how should the work be verified, and what must be reported at handoff?**

## Build Your Own Site With Codex

You can use this repository as a reference for building a personal portfolio or product site with Codex. The valuable part is not copying the visual identity; it is adapting the combination of a small static stack, explicit design direction, and repository-local rules.

### 1. Create your working copy

Fork this repository on GitHub, or clone it and connect it to a new remote:

```bash
git clone https://github.com/Duoasa/Duoasa-Design.git my-design-site
cd my-design-site
```

Keep the HTML, CSS, and JavaScript structure if you want a lightweight static site, or replace the implementation while preserving the rule-driven workflow.

### 2. Replace the project identity

Update the homepage content, project entries, contact information, metadata, logo, favicon, and images. Store project-specific assets under a dedicated directory instead of mixing them into global folders. Remove any Duoasa-specific content or rules that do not apply to your site.

### 3. Turn `AGENTS.md` into your rule index

Describe the repository-wide behavior Codex must follow, then route specialized tasks to focused rule documents. Start with rules that protect the highest-risk areas of your site, such as:

- project detail-page ownership and isolation
- shared design tokens and global navigation
- external motion or WebGL component integration
- responsive breakpoints and accessibility expectations
- asset storage, cache versions, preview checks, and deployment

Keep each trigger concrete. For example: “Read `docs/motion-rules.md` before importing or modifying any canvas, WebGL, shader, or pointer-reactive component.”

### 4. Give Codex a scoped build request

Ask Codex to read the rule index first, name the surface it will change, and preserve everything outside that scope. A practical first prompt can be:

```text
Read AGENTS.md and the rule files it routes to before editing.
Replace the homepage identity and project content with my portfolio material.
Preserve the existing responsive behavior and motion system.
Run a local preview, check desktop and mobile layouts, and summarize every changed file.
Do not modify finished project pages unless the rules explicitly require it.
```

For visual changes, attach a screenshot or reference image and describe the intended user outcome. Review the rendered result, then move repeated corrections into a rule document instead of relying on chat history.

### 5. Preview and review locally

The main site requires no build step. From the repository root, run:

```bash
python3 -m http.server 4173
```

Open `http://127.0.0.1:4173`, inspect the changed route, and check at least one desktop and one mobile viewport. Verify content, links, responsive layout, motion fallbacks, console errors, and any cache-version changes required by edited CSS or JavaScript.

### 6. Deploy deliberately

Connect your fork to the hosting platform you prefer. This repository uses Cloudflare Workers Static Assets, but the static output can also be hosted on GitHub Pages, Cloudflare Pages, Netlify, Vercel, or another static host. Keep deployment-specific instructions in the repository so Codex knows which branch, command, and verification steps are safe to use.

The resulting workflow is deliberately simple: **describe intent, let Codex implement inside explicit rules, review the real page, promote durable decisions into Markdown, and repeat.**

## Motion And Open-source References

The site combines hand-written interaction code with adapted open-source motion and WebGL references. Each reference was adjusted to fit the static site structure, responsive layout, performance constraints, and Duoasa Design visual direction.

| Layer | Use in this site | Reference |
| --- | --- | --- |
| Motion system | Entrance motion, scroll reveals, parallax moments, and scroll-controlled frame sequences | [GSAP](https://gsap.com/docs/v3/) + [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) |
| Creative component references | Grid scan, glass, terminal, prism, and prismatic visual experiments | [React Bits](https://www.reactbits.dev/) |
| Hero atmosphere | Adapted Grid Scan shader background for the homepage hero | [React Bits Grid Scan](https://www.reactbits.dev/backgrounds/grid-scan) |
| Glass experiments | Fluid glass and SVG-filter glass surface explorations | [Fluid Glass](https://www.reactbits.dev/components/fluid-glass), [Glass Surface](https://www.reactbits.dev/components/glass-surface) |
| WebGL components | Material rendering and 3D glass preview support | [Three.js](https://threejs.org/docs/), [React Three Fiber](https://r3f.docs.pmnd.rs/getting-started/introduction), [Drei](https://github.com/pmndrs/drei), [maath](https://github.com/pmndrs/maath) |
| Shader backgrounds | Terminal and prism-style lightweight WebGL effects | [OGL](https://github.com/oframe/ogl), [Faulty Terminal](https://www.reactbits.dev/backgrounds/faulty-terminal), [Prism](https://www.reactbits.dev/backgrounds/prism), [Prismatic Burst](https://www.reactbits.dev/backgrounds/prismatic-burst) |

## Technical Shape

| Area | Detail |
| --- | --- |
| Frontend | Static HTML, CSS, and JavaScript |
| Build step | None required for the main site |
| Assets | Localized vendor assets where stability matters |
| Page model | Independent case-study page files for safer AI-assisted iteration |
| Deployment | [Cloudflare Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/) |

## Deployment

Production site:

[https://design.duoasa.com](https://design.duoasa.com)

The Cloudflare Worker configuration lives in [wrangler.jsonc](wrangler.jsonc).

Pushing to `main` triggers the production deployment.

## Repository Purpose

This repository is shared for people interested in AI-assisted interface development, especially designers and developers exploring how coding agents can participate in real front-end production work.

The project is intentionally small in stack size but specific in process: keep design judgment human, make constraints explicit, let the agent work inside those constraints, and treat the codebase as a living collaboration record.
