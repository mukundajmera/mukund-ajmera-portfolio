# Hostinger-Ready Portfolio with MySQL Demo Plan

> **For agentic workers:** Follow this plan in the current checkout.

**Goal:** Publish the existing Next.js portfolio to Hostinger from GitHub and add a small, working MySQL-backed visitor idea form.

**Architecture:** Keep the portfolio in Next.js App Router with React and TypeScript. Add one server-side API route that validates and stores short ideas in a dedicated Hostinger MySQL database; provide a safe database health endpoint. Connect the existing GitHub repository to a new Hostinger Node.js website on a free temporary subdomain.

**Tech Stack:** Next.js 16, React 19, TypeScript, Node.js 20+, mysql2/promise, Hostinger Business Web Hosting, MySQL, GitHub.

**Spec:** The user's request in this conversation: build/update Mukund Ajmera's portfolio, host on Hostinger without WordPress or a paid/custom domain, demonstrate a small MySQL-backed feature, verify the complete workflow, and provide the full prompt used.

## Global Constraints

- Keep the project on the existing `main` branch and GitHub repository `mukundajmera/mukund-ajmera-portfolio`.
- Deploy a managed Node.js/Next.js site on the active Business Web Hosting order; do not use WordPress, PHP, VPS, Docker, or purchase/claim a custom domain.
- Use a free Hostinger temporary subdomain and a dedicated database assigned to the new site.
- Never commit database credentials or other secrets. Set them only as Hostinger environment variables.
- Use only facts supported by Mukund's public repositories/profile; preserve project descriptions already traceable to public READMEs.
- Keep MySQL writes private: visitor suggestions are stored but not publicly listed.
- Verify local production build, API validation, live page content, database connectivity, insert/read-back, and a GitHub-triggered redeployment before reporting completion.

## Design Plan

- **Palette:** Preserve the existing portfolio palette: slate ink `#17213b`, paper blue-grey `#eef2f7`, bright blue `#3c4ed9`, orange `#e8845e`, and lilac `#b8b9e9`.
- **Type:** Keep Manrope for readable portfolio copy and DM Mono for small technical metadata, matching the existing page.
- **Layout:** Retain the existing left-aligned introduction, three project cards, and compact footer. Add a small “Leave a build idea” panel after selected work, as the only new interactive element; on mobile it stacks into one column.
- **Principle:** Make the database demo understandable as a visitor feature, not as infrastructure jargon. Confirm when an idea is saved; never display visitor submissions publicly.

## Review Focus

- Invalid, empty, oversized, or malformed idea submissions receive a clear 4xx response and are not written.
- Missing DB configuration does not expose credentials or SQL errors.
- SQL values use prepared statements; visitor messages are not returned through a public listing endpoint.
- Mobile layout, keyboard focus, reduced-motion preferences, and accessible live form status remain usable.
- Live verification must confirm real page copy, successful database round-trip, and automatic deployment after a GitHub push.

---

### Task 1: Add a private MySQL-backed visitor idea feature

**Files:** `components/idea-box.tsx`, `app/page.tsx`, `app/globals.css`, `lib/db.ts`, `app/api/ideas/route.ts`, `app/api/health/database/route.ts`, `package.json`, `package-lock.json`.

- [ ] Add a responsive React form for a short idea, with client-side feedback and accessible status messages.
- [ ] Add a bounded MySQL connection pool using Hostinger environment variables and `127.0.0.1:3306`.
- [ ] Validate/limit the input, create the small table if absent, write with a prepared statement, and read the inserted row back before returning success.
- [ ] Add a database health route that returns only connectivity status, never connection details.

### Task 2: Document the reusable prompt and safe deployment setup

**Files:** `PROJECT_PROMPT.md`, `README.md`.

- [ ] Save a reusable prompt covering the stack, portfolio goals, design direction, database demo, GitHub deployment, and verification gates.
- [ ] Document local commands, required Hostinger environment variable names, and the privacy behavior of the idea form; do not include secret values.

### Task 3: Verify and publish source

**Files:** Existing GitHub repository `mukundajmera/mukund-ajmera-portfolio`.

- [ ] Run the production build and local HTTP checks, including form validation without DB credentials.
- [ ] Commit and push the finished source to the existing `main` branch.
- [ ] Verify the remote branch points at the intended commit.

### Task 4: Provision and deploy on Hostinger

**Resources:** Active Business Web Hosting order, new free temporary subdomain, Node.js website, and dedicated MySQL database.

- [ ] Confirm the active order, available site, GitHub installation/repository, and database state before writes.
- [ ] Generate a free temporary subdomain, create a new Node.js website, and wait for setup completion.
- [ ] Create a dedicated database and set its credentials as Hostinger environment variables without printing them.
- [ ] Start the first Next.js build from the connected GitHub repository, then enable Git auto-deploy.
- [ ] Push a small README-only commit to exercise automatic redeployment and verify the resulting build completed.

### Task 5: Verify live behavior

**Files/URLs:** New Hostinger temporary URL and its `/api/health`, `/api/health/database`, and `/api/ideas` routes.

- [ ] Verify the homepage and portfolio copy over HTTPS.
- [ ] Verify the DB health endpoint reports connected.
- [ ] Submit a real test idea, confirm the insert/read-back result, and confirm invalid input is rejected.
- [ ] Re-read build logs/status and report the live URL, repository, tested behavior, and any limitations.
