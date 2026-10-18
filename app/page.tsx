import Link from "next/link";
import { WorkShelf } from "@/components/work-shelf";
import { IdeaBox } from "@/components/idea-box";

export default function HomePage() {
  return (
    <main id="top">
      <header className="site-header wrap">
        <Link className="wordmark" href="/" aria-label="Mukund Ajmera home">
          <span className="wordmark-mark" aria-hidden="true">M</span>
          <span>Mukund Ajmera</span>
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="https://www.linkedin.com/in/mukundajmera" target="_blank" rel="noreferrer">
            Connect <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="hero-location"><span className="status-dot" aria-hidden="true" /> Software portfolio · Bengaluru, India</p>
          <h1 id="hero-title">Making AI useful at the <span>interface.</span></h1>
          <p className="hero-lede">
            I’m Mukund Ajmera. I explore how voice, documents, and browser automation can become practical software.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore selected work <span aria-hidden="true">↓</span></a>
            <a className="text-link" href="https://github.com/mukundajmera" target="_blank" rel="noreferrer">GitHub profile <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="signal-board" role="img" aria-label="A map of the portfolio's three themes">
          <div className="signal-orbit orbit-one" />
          <div className="signal-orbit orbit-two" />
          <div className="signal-core"><span>MA</span><small>building<br />at the edges</small></div>
          <span className="signal-node node-voice">Voice</span>
          <span className="signal-node node-docs">Documents</span>
          <span className="signal-node node-browser">Browser</span>
          <span className="signal-connector connector-a" />
          <span className="signal-connector connector-b" />
          <span className="signal-connector connector-c" />
          <p className="signal-caption">Three ways to make software more useful</p>
        </div>
        <div className="hero-index" aria-hidden="true"><span>01</span><span>Selected work</span></div>
      </section>

      <WorkShelf />

      <IdeaBox />

      <section className="about-section wrap" id="about" aria-labelledby="about-title">
        <div className="section-kicker"><span className="kicker-line" /> A little about the work</div>
        <div className="about-grid">
          <h2 id="about-title">Curiosity, then a working model.</h2>
          <div className="about-copy">
            <p>
              My public projects sit where applied AI meets everyday workflows: voice tools, answers grounded in documents, and browser automation.
            </p>
            <p>
              The work focuses on making the moving parts understandable—clear interfaces, useful diagnostics, and architectures that can be explored one piece at a time.
            </p>
            <a className="text-link" href="https://www.linkedin.com/in/mukundajmera" target="_blank" rel="noreferrer">Find me on LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="principle-list" aria-label="Areas of interest">
          <div><span className="principle-symbol symbol-blue" aria-hidden="true">◎</span><span>AI that meets a real workflow</span></div>
          <div><span className="principle-symbol symbol-orange" aria-hidden="true">⌁</span><span>Answers with their sources</span></div>
          <div><span className="principle-symbol symbol-lilac" aria-hidden="true">↗</span><span>Automation that can recover</span></div>
        </div>
      </section>

      <footer className="site-footer wrap">
        <span>© {new Date().getFullYear()} Mukund Ajmera</span>
        <span>Built with Next.js · Open on <a href="https://github.com/mukundajmera/mukund-ajmera-portfolio" target="_blank" rel="noreferrer">GitHub ↗</a></span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
