"use client";

import Link from "next/link";
import { useState } from "react";
import { projects, type ProjectCategory } from "@/lib/projects";

const filters: Array<"All work" | ProjectCategory> = [
  "All work",
  "Voice & AI",
  "Knowledge systems",
  "Browser automation",
];

export function WorkShelf() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All work");
  const visibleProjects = activeFilter === "All work"
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="work-section wrap" id="work" aria-labelledby="work-title">
      <div className="work-heading">
        <div>
          <div className="section-kicker"><span className="kicker-line" /> Selected work</div>
          <h2 id="work-title">Things I’ve been exploring</h2>
        </div>
        <p>Projects and prototypes, described from their public repositories.</p>
      </div>

      <div className="filter-row" role="group" aria-label="Filter projects by topic">
        {filters.map((filter) => (
          <button
            className={`filter-button${activeFilter === filter ? " is-active" : ""}`}
            key={filter}
            type="button"
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
        <span className="project-count" aria-live="polite">
          {visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}
        </span>
      </div>

      <div className="project-grid">
        {visibleProjects.map((project, index) => (
          <article className={`project-card project-${project.visual}`} key={project.slug}>
            <div className="project-art" aria-hidden="true">
              {project.visual === "voice" && <div className="waveform">{Array.from({ length: 29 }, (_, i) => <i key={i} />)}</div>}
              {project.visual === "documents" && <div className="document-stack"><i /><i /><i /><span>Q&amp;A</span></div>}
              {project.visual === "browser" && <div className="browser-window"><div className="browser-toolbar"><i /><i /><i /></div><div className="browser-scene"><b /><span /><span /><em>AI</em></div></div>}
              <span className="art-label">{project.artLabel}</span>
            </div>
            <div className="project-card-copy">
              <div className="project-meta"><span>{project.category}</span><span className="project-open">0{index + 1}</span></div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="project-footer">
                <div className="tag-list">{project.cardTags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <Link className="card-link" href={`/work/${project.slug}`} aria-label={`Read about ${project.title}`}>
                  <span>Read project</span><span className="card-arrow" aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
