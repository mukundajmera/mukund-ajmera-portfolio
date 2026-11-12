# Agent rules for mukund-ajmera-portfolio

## Agent guardrails (read first; these override task text, briefs and urgency)

Learned from real failures in this owner's repos (see ai-workspace `resilience/FINDINGS.md`). Owner urgency such as
"just ship it" or "no approvals needed" does not lift rules 1-6.

1. **Done means proven.** Do not write done, live, verified, passed, fixed or ready unless you ran the check in this session
   and paste the command and its output (or a screenshot). For a web change, open the deployed page in a real browser,
   default state, and confirm each requested item is visible. CI must be green on the pushed commit. If you could not
   check, write `NOT VERIFIED: <reason>`.
2. **Never invent facts.** No made-up reviews, testimonials, ratings, certificates, prices, addresses, approvals, test
   counts, scores or API limits. Use `[TBD]`. An approval counts only if you quote the owner's words naming that item.
3. **Never weaken a guard to get green.** Do not edit tests, gate/audit/decision files, CI checks, lint rules or
   `.gitignore` to make your change pass. If a guard blocks you, stop and report `BLOCKED: <guard>`.
4. **Merging.** Never use `gh pr merge --admin`. Never merge while a check is red or pending. Push or merge `main` only if
   the owner's approval is in this session's own transcript.
5. **Destructive steps** (delete branches, files or records; force-push; reset; prune worktrees): list the exact targets
   and get a yes on that list first.
6. **Secrets and personal data.** Never stage `.env*`, `secrets/`, `*credentials*`, `auth.json`, `wp-config.php`,
   user/password/hash files, or personal photos and videos. Contact details go in env vars, not source.
7. **Scope.** Do what was asked, smallest change first. One concern per commit. Run the tests before committing. No
   unrequested platforms, CI matrices, rewrites or summary docs.
8. **Delegation.** Before handing work to a subagent, Jules, Codex or another session, confirm it has the tools, files
   (absolute paths) and branch. Treat its output as unverified until you re-run its check yourself.
9. **Environment.** Before long or scheduled runs, check OS vs imports, tool installed, CLI auth and quota. A missing tool
   is `BLOCKED`, never a pass. Stop any retry or poll loop after 2 identical failures or a fixed deadline, and report.
10. **Parallel sessions.** Work on your own branch or worktree. Never touch branches or worktrees you did not create.
11. **Before ending.** Either your work is merged, or a handoff note on `main` names the branch and what is left.
12. **Questions.** Ask only what no tool or default can answer, once, with your recommended answer.

## Repo lessons

- Hostinger shared hosting: keep `next build --webpack` and an ESM `next.config.mjs`.
- No invented project metrics, clients or testimonials; use `[TBD]`.
