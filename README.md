# Mukund Ajmera Portfolio

A Next.js portfolio for Mukund Ajmera. It presents selected public GitHub projects with individual detail pages and a topic filter.

## Stack

- Next.js 16 App Router, React 19, TypeScript
- Node.js server (`next start`), with `/api/health` for a deployment health check
- Local typed project data, plus a small private visitor-idea feature backed by MySQL
- No CMS or WordPress

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. To check the production build:

```bash
npm run build
npm run start
```

## MySQL idea form

The homepage has a short idea form. Its API validates entries, stores them in a private `portfolio_ideas` table, and reads a new row back before confirming success. Messages are never exposed in a public listing. The health route returns only connection status at `/api/health/database`.

For local development, provide these variables in a private `.env.local` file (never commit it):

```text
DB_HOST=127.0.0.1
DB_PORT=3306
DB_NAME=your_database
DB_USER=your_user
DB_PASSWORD=your_password
```

`DATABASE_URL` is also supported. Hostinger's database setup supplies the database variables to the deployed Node.js application. If no database is configured, the portfolio still runs; the idea form returns a generic unavailable message.

## Project content sources

Project summaries and maturity notes are based on the repositories' public READMEs:

- [AwaazTwin](https://github.com/mukundajmera/AwaazTwin)
- [Enterprise-Scale RAG System / DocuRAG](https://github.com/mukundajmera/enterprise-scale-RAG-system)
- [WebFlow-AI-Agent / BrowserAI Craft](https://github.com/mukundajmera/WebFlow-AI-Agent)

Public profile links:

- [GitHub](https://github.com/mukundajmera)
- [LinkedIn](https://www.linkedin.com/in/mukundajmera)

## Hostinger deployment

This repository is configured as a Node.js app (`npm run build` / `npm run start`), not as a static export. Hostinger's managed Node.js hosting can deploy it from the connected GitHub repository. A free temporary Hostinger subdomain can be used; this project does not require a custom domain.

Current temporary deployment: <https://honeydew-rail-974143.hostingersite.com>. Hostinger's Node.js deployment is connected to this repository's `main` branch, with automatic builds enabled for pushes.

For a live server, `GET /api/health` checks the application and `GET /api/health/database` checks MySQL connectivity without returning database details.

## Reusable project prompt

See [`PROJECT_PROMPT.md`](./PROJECT_PROMPT.md) for the full prompt used to guide the build, hosting, and verification.
