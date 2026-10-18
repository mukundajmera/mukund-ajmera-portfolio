"use client";

import { useState, type FormEvent } from "react";

const MAX_LENGTH = 280;

export function IdeaBox() {
  const [idea, setIdea] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submitIdea(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/ideas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea }),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus(result.message ?? "That idea could not be saved. Please try again.");
        return;
      }

      setIdea("");
      setStatus(result.message ?? "Thanks. Your idea was saved.");
    } catch {
      setStatus("Could not reach the server. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="idea-section wrap" aria-labelledby="idea-title">
      <div className="idea-copy">
        <p className="section-kicker"><span className="kicker-line" /> Make the next version useful</p>
        <h2 id="idea-title">What should I build next?</h2>
        <p>Leave a short idea. It is stored privately and is not shown on this page.</p>
      </div>
      <form className="idea-form" onSubmit={submitIdea}>
        <label htmlFor="idea-message">A build idea</label>
        <textarea
          id="idea-message"
          name="idea"
          value={idea}
          onChange={(event) => setIdea(event.target.value)}
          maxLength={MAX_LENGTH}
          rows={3}
          placeholder="A small tool that would make…"
          required
        />
        <div className="idea-form-footer">
          <span className="idea-counter">{idea.length}/{MAX_LENGTH}</span>
          <button className="button button-primary" type="submit" disabled={isSubmitting || !idea.trim()}>
            {isSubmitting ? "Saving…" : "Send idea"} <span aria-hidden="true">↗</span>
          </button>
        </div>
        <div className="idea-honeypot" aria-hidden="true">
          <label htmlFor="idea-website">Leave this field empty</label>
          <input id="idea-website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <p className="idea-status" role="status" aria-live="polite">{status}</p>
      </form>
    </section>
  );
}
