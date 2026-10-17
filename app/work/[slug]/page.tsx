import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="project-detail-page" id="top">
      <header className="site-header wrap">
        <Link className="wordmark" href="/">
          <span className="wordmark-mark" aria-hidden="true">M</span>
          <span>Mukund Ajmera</span>
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          <Link href="/#work">Work</Link>
          <Link href="/#about">About</Link>
          <a className="nav-contact" href="https://www.linkedin.com/in/mukundajmera" target="_blank" rel="noreferrer">Connect <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <article className="detail-wrap wrap">
        <Link className="back-link" href="/#work"><span aria-hidden="true">←</span> Back to selected work</Link>
        <div className="detail-intro">
          <p className="section-kicker"><span className="kicker-line" /> {project.category}</p>
          <h1>{project.title}</h1>
          <p className="detail-summary">{project.summary}</p>
          <a className="button button-primary" href={project.repository} target="_blank" rel="noreferrer">
            {project.repoLabel} <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className={`detail-art project-${project.visual}`} aria-hidden="true">
          <span className="detail-art-label">{project.artLabel}</span>
          {project.visual === "voice" && <div className="waveform detail-waveform">{Array.from({ length: 47 }, (_, i) => <i key={i} />)}</div>}
          {project.visual === "documents" && <div className="document-stack detail-documents"><i /><i /><i /><span>Q&amp;A</span></div>}
          {project.visual === "browser" && <div className="browser-window detail-browser"><div className="browser-toolbar"><i /><i /><i /></div><div className="browser-scene"><b /><span /><span /><em>AI</em></div></div>}
        </div>

        <div className="detail-columns">
          <div className="detail-sections">
            {project.sections.map((section) => (
              <section className="detail-section" key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>
          <aside className="detail-aside">
            <div className="aside-block">
              <h2>Tools in the repo</h2>
              <ul className="stack-list">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="aside-block status-note">
              <h2>Project note</h2>
              <p>{project.maturityNote}</p>
            </div>
          </aside>
        </div>

        <div className="detail-next">
          <span>More selected work</span>
          <Link href="/#work">Browse all projects <span aria-hidden="true">↗</span></Link>
        </div>
      </article>

      <footer className="site-footer wrap">
        <span>© {new Date().getFullYear()} Mukund Ajmera</span>
        <span>Built with Next.js · <a href="https://github.com/mukundajmera/mukund-ajmera-portfolio" target="_blank" rel="noreferrer">Source on GitHub ↗</a></span>
        <Link href="/#top">Back to portfolio ↑</Link>
      </footer>
    </main>
  );
}
