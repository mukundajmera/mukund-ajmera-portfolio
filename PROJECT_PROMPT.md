# Reusable website build prompt

Build, verify, and deploy a polished, dynamic portfolio website for Mukund Ajmera.

## Product and content

- Use Next.js App Router, React components, TypeScript, and Node.js. Do not use WordPress, PHP, a static-only export, Docker, or a VPS.
- Present Mukund's publicly verifiable work in applied AI, voice, document search, and browser automation. Use his public GitHub repositories and LinkedIn profile as the source of truth. Do not invent employers, roles, qualifications, awards, or project results.
- Make the website useful as a portfolio and as a small working application. Include selected project pages, responsive navigation, and a short visitor idea form.
- Store idea submissions privately in MySQL. Do not publish a feed of visitor messages or collect names, emails, or other personal information. Validate inputs, use prepared SQL statements, and return generic errors that reveal no database details.

## Design

- Create a clear, distinctive, responsive visual system with readable typography, strong hierarchy, considered whitespace, and custom CSS illustrations where useful.
- Support keyboard navigation, visible focus, accessible form status, and reduced-motion preferences.
- Keep the interface concise and credible; avoid made-up metrics, testimonials, and placeholder copy.

## Hosting and delivery

- Keep the source in `mukundajmera/mukund-ajmera-portfolio` on GitHub and deploy the Next.js Node.js application to the user's existing Hostinger Business Web Hosting plan.
- Use a free Hostinger temporary subdomain unless a custom domain has already been explicitly requested. Never buy a domain or change existing websites or databases for this task.
- Configure a dedicated MySQL database through Hostinger and keep generated credentials in Hostinger environment variables only. Never commit, print, or place secrets in the browser bundle.
- Enable GitHub push deployment for the intended repository and branch after the first successful build.
- Handle as much as possible without human intervention. Ask only if a decision, account permission, or external blocker genuinely prevents safe progress.

## Required verification and handoff

- Run the production build and relevant local checks before deployment.
- Confirm the GitHub branch contains the delivered source and that Hostinger completes a build from that branch.
- Check the live HTTPS homepage and health endpoint, database connectivity, valid submission plus database read-back, and rejection of invalid submissions.
- Make a GitHub commit after auto-deploy is enabled and verify that it causes another successful Hostinger build.
- Finish with the live URL, GitHub repository, deployment status, database check, verification performed, and any real limitations. Do not claim a step succeeded without evidence.
