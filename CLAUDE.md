# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## MCP Tools: code-review-graph

**Use the code-review-graph MCP tools before Grep/Glob/Read for any codebase exploration.** The graph is pre-indexed and returns structural context (callers, dependents, imports) in far fewer tokens than file scanning.

| Task | Tool to use first |
|------|-------------------|
| Find a function/component by name or concept | `semantic_search_nodes` |
| Understand what calls or imports a given node | `query_graph` (patterns: `callers_of`, `importers_of`, `callees_of`) |
| See all nodes in a file | `query_graph` pattern=`file_summary` |
| Assess blast radius of a change | `get_impact_radius` |
| Review uncommitted changes | `detect_changes` (auto-diffs against HEAD~1) |
| High-level architecture | `get_architecture_overview` |

Fall back to Grep/Glob/Read only when the graph doesn't cover what you need (e.g. raw file content, CSS values, JSON data files).

## Commands

```bash
npm run dev      # start dev server (Next.js 16, port 3000)
npm run build    # production build
npm run lint     # ESLint (no test suite)
```

## Architecture

This is a **Next.js 16 / React 19** single-page portfolio. The entire site renders from `src/app/page.tsx`, which is a Server Component that reads all content at build time and passes it down as props to section components — there is no client-side data fetching.

### Data sources (two kinds)

**File-system content** — loaded by `src/lib/data.ts` and `src/lib/blog.ts` at request time using `fs.readFileSync`:
- `content/projects/*.json` — one file per project, typed as `Project` in `src/lib/types.ts`
- `content/research/*.json` — research papers
- `content/blog/*.mdx` — blog posts with YAML frontmatter

**Hardcoded data** — everything else lives in `src/lib/portfolio-data.ts`:
- `EXPERIENCE`, `EDUCATION`, `SKILLS`, `CONFERENCES`, `ACHIEVEMENTS`, `LINKS`

Adding/editing a project = edit or create a JSON file in `content/projects/`. No code changes needed. Projects are sorted by `year` descending.

### Project image convention

Screenshots go in `public/images/projects/<name>.png`. Reference them in project JSON as `"screenshot": "/images/projects/<name>.png"`.

### Resume

The downloadable PDF is served from `public/resume.pdf`. To update it, replace that file. All download links in the codebase already point to `/resume.pdf` — no code changes needed.

### Key UI pieces

- **3D background** — `src/components/three/SpaceCanvas.tsx` renders a persistent Three.js/R3F canvas fixed behind all content via `z-index`.
- **TARS bot** — `src/components/tars/` — a floating chat widget (Interstellar-themed) mounted globally in the layout. Response logic is in `tars-responses.ts`.
- **TelemetryBar** — a fixed HUD bar at the bottom of the layout (`src/components/layout/TelemetryBar.tsx`).
- **Section components** in `src/components/sections/` are thin presentational components; they receive all data as props from `page.tsx`.

### Styling

Tailwind CSS v4 with custom design tokens (space/HUD aesthetic). Fonts: Space Grotesk (`font-heading`), Inter (`font-body`), JetBrains Mono (`font-mono`). Custom classes like `text-text-dim`, `bg-space-deep`, `text-cyan-accent` are defined in `src/styles/globals.css`.

### Contact API

`src/app/api/contact/route.ts` — POST endpoint that sends email via the `resend` package. Requires `RESEND_API_KEY` env var.
