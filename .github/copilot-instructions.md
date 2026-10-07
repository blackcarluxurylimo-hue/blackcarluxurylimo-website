# Black Car Luxury Limo - Copilot Instructions

## Project Overview
- Single-page React app built with Vite.
- Entry files: src/main.jsx and src/App.jsx.
- Main sections are composed in src/App.jsx: Header, Hero, ExperienceStrip, FleetShowcase, Services, Footer.
- Styling is centralized in src/styles/global.css.

## Tech Stack
- React 19
- Vite 7
- React Router (currently one route: /)
- React Icons
- ESLint 9

## Commands
- Install dependencies: npm.cmd install
- Run dev server: npm.cmd run dev
- Build: npm.cmd run build
- Preview production build: npm.cmd run preview
- Lint: npm.cmd run lint

Important for this Windows environment:
- Use npm.cmd instead of npm in PowerShell to avoid npm.ps1 execution policy issues.

## Architecture And Editing Notes
- Keep changes in src and rebuild; do not hand-edit dist outputs.
- Preserve the existing component-based structure and current visual style.
- Prefer minimal, targeted edits over large refactors unless explicitly requested.
- Keep routing compatible with BrowserRouter in src/main.jsx.

## Contact Actions Status (Temporarily Disabled)
The following interaction types are intentionally disabled for now:
- Phone links (tel:)
- Email links (mailto:)
- WhatsApp links/actions (wa.me and window.location.assign for WhatsApp)

Where this was applied:
- src/components/Header.jsx
- src/components/Hero.jsx
- src/components/Footer.jsx
- src/components/Services.jsx
- src/components/FleetShowcase.jsx

How it was disabled:
- Contact anchors were switched to href="#" and onClick handlers call event.preventDefault().
- Fleet WhatsApp button uses an onClick handler that prevents default and does not navigate.
- Original targets are preserved in inline comments prefixed with: Disabled for now:

How to re-enable later:
- Search for: Disabled for now:
- Restore the original href or navigation line from the comment.
- Remove the temporary preventDefault handler for that element.

## Reliability Checklist For Future Changes
- After modifying contact-related UI, verify no live tel:, mailto:, or wa.me targets remain unless intentionally re-enabled.
- Run npm.cmd run build after significant changes to ensure production output still compiles.
- Keep accessibility attributes (aria-label, button types, alt text) intact when editing interactive elements.
