export type ProjectCategory = "Voice & AI" | "Knowledge systems" | "Browser automation";

export type PortfolioProject = {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  cardTags: string[];
  stack: string[];
  artLabel: string;
  visual: "voice" | "documents" | "browser";
  repository: string;
  repoLabel: string;
  sections: Array<{ heading: string; body: string }>;
  maturityNote: string;
};

export const projects: PortfolioProject[] = [
  {
    slug: "awaaztwin",
    title: "AwaazTwin",
    category: "Voice & AI",
    summary: "A local-first voice cloning and text-to-speech project, with a web portal and a separate processing backend.",
    cardTags: ["Voice tools", "Local-first"],
    stack: ["Next.js", "FastAPI", "Redis Queue", "PostgreSQL", "MinIO"],
    artLabel: "Voice signal / 01",
    visual: "voice",
    repository: "https://github.com/mukundajmera/AwaazTwin",
    repoLabel: "View AwaazTwin on GitHub",
    sections: [
      { heading: "The idea", body: "AwaazTwin explores a local-first platform for voice cloning and text-to-speech, with a web interface for configuration, content, practice flows, and diagnostics." },
      { heading: "How it is structured", body: "The repository describes a Next.js portal connected to a FastAPI API. PostgreSQL stores metadata, Redis Queue handles background jobs, and MinIO stores audio objects." },
      { heading: "A useful status detail", body: "The README currently labels the XTTS-Hindi and OpenVoice engine adapters as placeholders. The architecture is documented, while those model integrations are not presented as finished engines." },
    ],
    maturityNote: "The repository README marks the voice engine adapters as placeholders.",
  },
  {
    slug: "docurag",
    title: "DocuRAG",
    category: "Knowledge systems",
    summary: "A document question-answering system designed to return answers with source citations and confidence context.",
    cardTags: ["RAG", "Document Q&A"],
    stack: ["Next.js", "PostgreSQL", "Qdrant", "Vertex AI", "Clerk"],
    artLabel: "Question → source / 02",
    visual: "documents",
    repository: "https://github.com/mukundajmera/enterprise-scale-RAG-system",
    repoLabel: "View DocuRAG on GitHub",
    sections: [
      { heading: "The idea", body: "DocuRAG is a retrieval-augmented generation project for asking questions across uploaded documents. Its README describes support for common formats such as PDF, text, Markdown, and Word files." },
      { heading: "Grounded answers", body: "The repository lists source citations with page numbers, confidence scoring, streaming responses, and multi-tenant isolation as core parts of the design." },
      { heading: "The documented stack", body: "The project README describes a Next.js application with API routes, PostgreSQL, Qdrant, Vertex AI, Clerk, Google Cloud Storage, and Upstash Redis." },
    ],
    maturityNote: "This summary reflects features and architecture listed in the repository README; it does not claim an externally hosted service.",
  },
  {
    slug: "browserai-craft",
    title: "BrowserAI Craft",
    category: "Browser automation",
    summary: "A browser automation framework prototype built around visual reasoning, natural-language tasks, and adaptable website workflows.",
    cardTags: ["Automation", "Browser extension"],
    stack: ["TypeScript", "React", "Plasmo", "Ollama", "Playwright"],
    artLabel: "Observe → act / 03",
    visual: "browser",
    repository: "https://github.com/mukundajmera/WebFlow-AI-Agent",
    repoLabel: "View BrowserAI Craft on GitHub",
    sections: [
      { heading: "The idea", body: "BrowserAI Craft aims to turn plain-language instructions into browser workflows, using visual context instead of relying only on brittle selectors." },
      { heading: "The approach", body: "The README lays out an Observe → Think → Act → Verify structure, with pluggable site adapters and support for local language model providers such as Ollama and LM Studio." },
      { heading: "Where to look", body: "The repository is structured as a browser extension with a side panel, background orchestration, execution adapters, and tests. Its roadmap is the source of truth for implementation progress." },
    ],
    maturityNote: "The repository README includes a phased roadmap; check it for current implementation status.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
