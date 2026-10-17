import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found wrap">
      <Link className="wordmark" href="/">
        <span className="wordmark-mark" aria-hidden="true">M</span>
        <span>Mukund Ajmera</span>
      </Link>
      <p className="section-kicker"><span className="kicker-line" /> Page not found</p>
      <h1>This page isn’t in the portfolio.</h1>
      <Link className="button button-primary" href="/">Return home <span aria-hidden="true">↗</span></Link>
    </main>
  );
}
