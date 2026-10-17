# Next.js Portfolio Implementation Plan

> **For agentic workers:** Follow this plan in the current checkout.

**Goal:** Turn the existing portfolio repository into a Next.js site that can run as a Node.js application on Hostinger.

**Architecture:** Use the Next.js App Router and server-rendered pages. Keep portfolio content in a typed local data module, with one small client component for filtering work and generated detail pages for each project.

**Tech Stack:** Next.js 16, React 19, TypeScript, CSS, npm.

**Spec:** User request in this conversation.

## Global Constraints

- Use Node.js and Next.js; do not use PHP, WordPress, Docker, or a custom domain.
- Do not publish invented personal history, project outcomes, or credentials.
- Preserve the existing public GitHub repository and use a temporary Hostinger address if deployment becomes available.
- Deploy as a Node.js application, not a static archive, if Hostinger plan and connector permit it.

## Review Focus

- Project descriptions must match the public GitHub READMEs.
- Project filters and detail links must work on keyboard and mobile.
- The Next.js production build must succeed on the available Node.js runtime.
- Do not include credentials in the repository or deployment archive.
- Hostinger plan eligibility and deployment must be reported only after account-backed verification.

---

### Task 1: Build the Next.js portfolio

**Files:** `app/`, `components/`, `lib/projects.ts`, `package.json`, `next.config.ts`, `tsconfig.json`, `README.md`; remove the old static entry point and stylesheet.

- [ ] Create the Next.js App Router shell and typed project content based on the user's public repositories.
- [ ] Add responsive project filtering and generated project detail pages.
- [ ] Document local development and Hostinger Node.js deployment requirements.
- [ ] Run the production build and a browser smoke check.

### Task 2: Publish the verified source

**Files:** Existing repository `mukundajmera/mukund-ajmera-portfolio`.

- [ ] Commit and push the finished source to the existing `main` branch.
- [ ] Verify the remote commit and repository contents.

### Task 3: Deploy on Hostinger

**Files:** Existing Hostinger account and a temporary free subdomain.

- [ ] Read the active plan, website list, and available temporary subdomain from Hostinger tools.
- [ ] Deploy the Next.js Node app and check the live page and health endpoint.
- [ ] If Hostinger tools remain unavailable, report that exact blocker without claiming deployment.
