# Mukund Ajmera Portfolio

A Next.js portfolio for Mukund Ajmera. It presents selected public GitHub projects with individual detail pages and a topic filter.

## Stack

- Next.js 16 App Router, React 19, TypeScript
- Node.js server (`next start`), with `/api/health` for a deployment health check
- Local typed project data; no CMS, database, or WordPress

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

## Project content sources

Project summaries and maturity notes are based on the repositories' public READMEs:

- [AwaazTwin](https://github.com/mukundajmera/AwaazTwin)
- [Enterprise-Scale RAG System / DocuRAG](https://github.com/mukundajmera/enterprise-scale-RAG-system)
- [WebFlow-AI-Agent / BrowserAI Craft](https://github.com/mukundajmera/WebFlow-AI-Agent)

Public profile links:

- [GitHub](https://github.com/mukundajmera)
- [LinkedIn](https://www.linkedin.com/in/mukundajmera)

## Hostinger deployment

This repository is configured as a Node.js app (`npm run build` / `npm run start`), not as a static export. Hostinger's managed Node.js web apps support Next.js on eligible Business and Cloud plans. The account plan must be checked before deploying. A temporary Hostinger subdomain can be used; this project does not require a custom domain.

For a live server, `GET /api/health` returns `{ "status": "ok", "service": "mukund-ajmera-portfolio" }`.
