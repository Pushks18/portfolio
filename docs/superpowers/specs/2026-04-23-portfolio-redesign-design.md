# Portfolio Redesign Design

Date: 2026-04-23
Branch: `portfolio-design`

## Goal

Redesign the existing portfolio into a simpler, easier-to-scan, single-page experience inspired by the provided screenshot's calm editorial feel, without copying its exact layout. The redesign must keep all portfolio information sourced from the current repository content and must not overwrite or replace the existing `main` branch implementation.

## Constraints

- Keep the site as a single-page portfolio with anchor navigation.
- Source all copy and portfolio data from the current repository content on `main`.
- Preserve existing detail routes for projects, research, blog, and resume where practical, but make the homepage the main destination.
- Avoid the current "mission control" visual language on the homepage.
- The redesign must be responsive, readable, and fast to skim on desktop and mobile.
- The work must happen on the `portfolio-design` branch.

## Source of Truth

The homepage should continue to derive content from the current content and data modules, primarily:

- `src/lib/portfolio-data.ts`
- `src/lib/data.ts`
- `src/lib/blog.ts`
- content files under `content/`

The redesign should reshape presentation, not rewrite or invent portfolio facts.

## Recommended Direction

Use an editorial minimal homepage with a small amount of structured summary content:

- A slim sticky header with clear anchor navigation
- A compact introduction led by the existing portfolio identity and role
- An "at a glance" summary strip for current focus, education, location, and important links
- Clean, spacious sections for experience, projects, research, skills, writing, resume, and contact
- A light visual palette, dark text, and one restrained accent color

This keeps the page calm and readable like the reference while making recruiter-relevant information visible quickly.

## Page Structure

### 1. Header

- Sticky top navigation
- Name/wordmark on the left
- Section anchors on the right
- Minimal hover/active states
- Mobile-friendly condensed nav layout

### 2. Intro

- Short greeting or lead-in
- Full name
- Role line assembled from existing portfolio identity
- One concise intro paragraph using existing profile content
- Primary actions for projects, resume, and contact

### 3. At-a-Glance Summary

- Location
- Current role or latest position
- Education highlight
- Focus areas derived from existing skills and experience
- External links such as GitHub, LinkedIn, email

This section should be visually compact and scan well in one screen without feeling like a dashboard.

### 4. Experience

- Reverse-chronological list using existing experience data
- Strong role/company headings
- Compact metadata line for location and dates
- Brief bullet-style summaries drawn from existing descriptions

### 5. Projects

- Featured project cards from current project data
- Short descriptions, stack, and links
- Cards should feel lightweight and readable, not glossy or overdesigned

### 6. Research / Writing

- Separate lightweight sections for research and blog if content exists
- Keep previews minimal with strong titles and short metadata

### 7. Skills

- Consolidated, cleaner presentation of skill categories
- Avoid overwhelming tag walls; group clearly and limit visual noise

### 8. Resume / Contact

- Resume download access remains easy to find
- Contact block stays simple and direct
- End the page cleanly without a heavy footer treatment

## Visual System

### Typography

- Replace the default-feeling type treatment with a more intentional editorial pairing
- Prioritize readability over decorative personality
- Large headings, comfortable paragraph measure, and strong spacing rhythm

### Color

- Light background
- Dark neutral text
- One muted accent color for nav, links, and emphasis
- Subtle borders or separators where useful

### Layout

- Narrower readable content column
- Generous whitespace
- Consistent vertical rhythm
- Sections broken by spacing and light rules rather than heavy containers

### Motion

- Minimal motion only
- Small reveal/fade effects where useful
- No large animated background systems on the homepage

## Implementation Plan

### Routing and Data

- Keep `src/app/page.tsx` as the single-page composition entry point
- Reuse existing server-side data loading for projects, research, blog, and skills
- Avoid introducing new content sources unless necessary for formatting helpers

### Components

- Replace or heavily simplify the current homepage section components
- Build a unified homepage language across header, intro, summary, and content sections
- Reuse detail-page data contracts so project, blog, and research pages continue to work

### Styling

- Rework `src/app/globals.css` into a defined visual system with CSS variables
- Preserve Tailwind usage where it helps component-level layout
- Remove or bypass homepage-specific sci-fi styles that conflict with the new direction

### Responsiveness

- Desktop: comfortable reading width and sticky nav
- Tablet: reduced spacing and simplified section density
- Mobile: stacked summary items, scrollable or wrapped nav behavior, readable line lengths

## Error Handling and Fallbacks

- If a data section is empty, omit or collapse the section gracefully
- Preserve stable rendering if optional metadata is missing in content files
- Ensure anchor navigation still works even if some sections are hidden

## Testing

- Run lint
- Run production build
- Visually verify the homepage on desktop and mobile widths
- Confirm anchor navigation works
- Confirm detail pages still build and route correctly

## Deployment and Branching

- Develop on `portfolio-design`
- Deploy to a preview first
- After user approval, switch the existing Vercel production target to the redesigned deployment if desired
- Keep `main` untouched in GitHub

## Out of Scope

- Rewriting factual content
- Turning the homepage into a multi-page site
- Maintaining the current mission-control art direction on the homepage
- Changing the canonical production URL before the redesign is approved
