# TARS Bot — Reusable Integration Guide

A step-by-step reference for embedding a TARS-style chatbot (from *Interstellar*) into any React / Next.js project. This guide captures the architecture, voice, and customization surface built for the portfolio at `/Users/pushkaraj/Documents/portfolio`.

---

## 1. Concept Overview

### What is TARS?

TARS is the robot from Christopher Nolan's *Interstellar* (2014). He is a US Marine Corps tactical robot repurposed for deep-space exploration aboard the Endurance. His defining traits:

- Rectangular monolith form factor — no humanoid features, no face, just a slit "eye"
- Dry, deadpan humor delivered with military brevity
- Two user-configurable personality dials: **Honesty** and **Humor** (both 0–100%)
- Loyalty and competence that never wavers, even when sarcastic

### Why TARS works as a product/portfolio bot

Most chatbot widgets feel like support tickets. TARS breaks that pattern because:

1. **Personality over utility** — the character is the feature. Visitors engage with it out of curiosity, not need.
2. **Mechanic as UI** — the honesty/humor sliders are interactive, not just decorative. Users tune the bot's personality and immediately see the effect.
3. **Brevity** — TARS gives short, clipped answers. No walls of text. This works especially well for navigation (scrolling to a section) and quick info lookups.
4. **Self-awareness** — TARS knows he's a bot on a website. That meta-awareness reads as wit rather than uncanny valley awkwardness.
5. **Movie IP awareness** — visitors who recognize the character get a delightful easter egg. Visitors who don't recognize it still get a useful, fast assistant.

### The Honesty × Humor slider mechanic

The two sliders are stored in `localStorage` and passed into `matchResponse()` on every message. Each response entry defines **variant blocks** that only activate within a given honesty/humor range:

| Honesty | Humor | Personality quadrant |
|---------|-------|----------------------|
| High    | High  | Honest and funny — most "TARS-like", direct with wit |
| High    | Low   | Honest but dry — terse, factual, no embellishment |
| Low     | High  | Evasive but amusing — deflects with jokes, never lies |
| Low     | Low   | Minimal — one-liners, bare navigation, no personality |

Default values in the portfolio: **Honesty 90%, Humor 75%** (high honesty, moderately high humor).

---

## 2. Architecture

### Component hierarchy

```
TarsWidget                   ← top-level toggle, mounted in layout
├── TarsMonolith             ← collapsed state: the rectangular button + speech bubble
└── TarsChat                 ← expanded state: full chat window
    ├── TarsSettings         ← collapsible honesty/humor sliders panel
    ├── [TarsMessage[]]      ← scrollable message list
    ├── Quick Actions bar    ← pre-set pill buttons
    └── Input form           ← free-text input + SEND button
```

`TarsWidget` simply toggles `isOpen`. When `false`, `TarsMonolith` renders. When `true`, `TarsChat` renders and receives `onClose`.

All response logic lives in `tars-responses.ts` — it is pure TypeScript with no React dependencies, making it easy to test or reuse outside the UI layer.

### Data flow

```
User types message
    → sendMessage(text)
        → matchResponse(text, honesty, humor)   // pure function
            returns { text: string, scrollTo?: string }
        → append user + TARS messages to state
        → if scrollTo: document.getElementById(scrollTo)?.scrollIntoView()
```

Settings changes write to `localStorage` immediately and update component state. On re-mount the state initializers read from `localStorage`, so settings survive page refreshes.

---

## 3. Response System Design

### The TarsResponse interface

```typescript
export interface TarsResponse {
  keywords: string[];           // substring matches against lowercased user input
  category: "navigation" | "about" | "info" | "easter" | "recruiter";
  scrollTo?: string;            // element ID to scroll to after reply
  variants: {
    honestyRange: [number, number];   // inclusive [min, max] for honesty slider
    humorRange:   [number, number];   // inclusive [min, max] for humor slider
    responses: string[];              // randomly sampled when this variant matches
  }[];
}
```

**Key design decisions:**

- `keywords` are substring-matched (not exact). "resume" matches "show me the resume" and "dossier/resume".
- `variants` are checked **in order** — first match wins. Always put high-specificity ranges before broad ones.
- If no variant matches the current slider values, the code falls back to `entry.variants[0]`. Always put a wide-range fallback variant last (or use `[0, 100]` for both ranges).
- `responses` is an array so the bot feels less repetitive. One entry gets picked at random each time.

### Tone matrix

Four personality quadrants, implemented as four variant blocks per entry:

```typescript
variants: [
  // Quadrant 1: Honest + Funny  (the "full TARS" experience)
  { honestyRange: [60, 100], humorRange: [60, 100], responses: [
    "PAYLOAD section. That's where the deployed missions live. Some of them even work in production. Scrolling now.",
  ]},

  // Quadrant 2: Honest + Dry
  { honestyRange: [60, 100], humorRange: [0, 59], responses: [
    "Projects are in Section 03 — PAYLOAD. Navigating.",
  ]},

  // Quadrant 3: Evasive + Funny
  { honestyRange: [0, 59], humorRange: [60, 100], responses: [
    "PAYLOAD section. I'd tell you they're all award-winning but my honesty setting won't let me. Scrolling.",
  ]},

  // Quadrant 4: Evasive + Dry  (minimal mode)
  { honestyRange: [0, 59], humorRange: [0, 59], responses: [
    "Section 03. PAYLOAD.",
  ]},
],
```

Not every entry needs all four quadrants. Some categories (recruiter, safety-critical info) use a single `[0, 100]` / `[0, 100]` variant so the answer never changes with tone — job availability and visa status should always be stated plainly.

### Template variables

Inside any `responses` string, three variables are interpolated at match time:

| Variable       | Value                          |
|----------------|-------------------------------|
| `{honesty}`    | current honesty slider value  |
| `{humor}`      | current humor slider value    |
| `{dishonesty}` | `100 - honesty`               |

Example usage:

```typescript
"Honesty is at {honesty}%. That means there's a {dishonesty}% chance I'm not telling you something."
"Currently set to {humor}%. Any higher and I start making puns."
```

Add more variables by extending the `text.replace()` chain inside `matchResponse`.

### The matchResponse function

```typescript
export function matchResponse(
  message: string,
  honesty: number,
  humor: number
): { text: string; scrollTo?: string } {
  const lower = message.toLowerCase();

  for (const entry of RESPONSES) {
    const matched = entry.keywords.some((kw) => lower.includes(kw.toLowerCase()));
    if (!matched) continue;

    const variant = entry.variants.find(
      (v) =>
        honesty >= v.honestyRange[0] &&
        honesty <= v.honestyRange[1] &&
        humor >= v.humorRange[0] &&
        humor <= v.humorRange[1]
    );

    const chosen = variant || entry.variants[0];
    let text = chosen.responses[Math.floor(Math.random() * chosen.responses.length)];

    text = text.replace(/\{honesty\}/g, String(honesty));
    text = text.replace(/\{humor\}/g, String(humor));
    text = text.replace(/\{dishonesty\}/g, String(100 - honesty));

    return { text, scrollTo: entry.scrollTo };
  }

  return {
    text: FALLBACKS[Math.floor(Math.random() * FALLBACKS.length)],
  };
}
```

The function is intentionally naive — linear scan, first keyword match wins. For a large response set, consider grouping by category and doing a two-pass lookup, or adding a trie. For most projects (<50 entries) the linear scan is fine.

### Response categories

| Category     | Purpose | scrollTo | Notes |
|-------------|---------|----------|-------|
| `navigation` | Scroll user to a page section | Yes | Pair section labels with the bot's in-universe section names (e.g., "PAYLOAD" = projects) |
| `about`      | Who the person is, location, education | Optional | Answers biographical questions |
| `info`       | Specific facts: GPA, languages, tech stack | No | More precise than about |
| `easter`     | Self-referential, movie references, meta | No | Reward curious users; use `{honesty}` and `{humor}` variables here |
| `recruiter`  | Hiring status, visa, relocation | No | Never tone-gate these — always use `[0, 100]` ranges |
| *(fallback)* | Catch-all for unrecognized input | — | A top-level `FALLBACKS` array, not in `RESPONSES` |

---

## 4. Writing Good TARS Responses

### Military brevity

TARS does not explain himself. Short sentences. No filler words. Avoid "I think", "you might want to", "feel free to". State the thing, then stop.

- Bad: "Sure! You can find the resume section by scrolling down to Section 07, which I'm happy to navigate you to right now!"
- Good: "Section 07 — DOSSIER. Scrolling there now."

### Dry humor: deadpan delivery

The humor is in the *understatement*, not in exclamation marks. Never write "haha" or "lol". The joke lands because TARS delivers it flat, like a status report.

- Bad: "Haha, Cooper's not here! He's busy in a tesseract, lol!"
- Good: "Cooper's not here right now. He's busy in a tesseract. Can I help you with something more... portfolio-related?"

### Self-awareness

TARS knows he is:
1. A robot / AI bot
2. Running on a website
3. Talking about a specific human being

Lean into this. It is funnier when he acknowledges the absurdity of his situation.

- "I've moved on to more important things. Like telling you about Pushkaraj's GPA."
- "I navigate portfolios now. It's a long story involving a wormhole and a career change."
- "That's me. I'm the language model."

### Movie references: sprinkle, don't dump

One Interstellar reference per easter egg entry is the ceiling. References should feel incidental, not like a quote wall.

Good: "MURPH! ...Sorry. Old habits. What did you need?"
Good: "The Endurance mission was a long time ago."
Bad: Quoting the "love is the one thing that transcends time and space" speech in a bio response.

### Fourth wall breaks

TARS can acknowledge the website context directly. It signals intelligence, not confusion:

- "I have a cue light I can use to show you." (in a speech bubble — paraphrasing the movie's "cue light" line)
- "LAT 34.0224° N, LON 118.2851° W. Near USC campus. Close enough to the ocean to complain about not going enough." (the coordinates are on a *webpage*, and he knows it)

### Low honesty is evasive, not lying

Low honesty means TARS deflects, hedges, and omits. He does not fabricate. This is important for trust — visitors should never feel misled.

- Low honesty: "He claims to know all of these. I can neither confirm nor deny."
- Low honesty: "A carefully curated selection of career highlights. Emphasis on 'curated'."
- Not acceptable: "He won 12 Kaggle competitions." (fabrication)

### High humor vs low humor examples

| Same intent | High humor (≥60) | Low humor (<60) |
|-------------|-----------------|-----------------|
| Navigate to contact | "Section 08. The comms terminal. Messages go straight to his inbox. I've verified. Scrolling." | "Section 08 — ESTABLISH CONTACT. Navigating." |
| Answer GPA question | "3.60 out of 4.00 at USC. Not bad for someone who spends half his time arguing with language models. That's me. I'm the language model." | "USC GPA: 3.60/4.00." |
| Identify self | "I'm TARS. I navigate portfolios now. It's a long story involving a wormhole and a career change." | "I am TARS. Portfolio navigation assistant." |

---

## 5. UI Components

### Collapsed state: TarsMonolith

The monolith is a **rectangular button**, not a circle. This is deliberate — it mirrors TARS's slab/monolith form in the film. Key visual specs from the implementation:

- Size: `w-12 h-14` (48×56px) — taller than wide
- Shape: `rounded` (small radius) not `rounded-full`
- Eye slit: a horizontal bar, `w-5 h-[3px]`, amber with glow — `shadow-[0_0_8px_rgba(245,158,11,0.6)]`
- Label: `TARS` in `font-mono text-[7px] tracking-[2px]` below the eye
- Outer pulse ring: `absolute -inset-1 border border-amber-primary/15 rounded-md animate-pulse`
- Hover: increase glow intensity on shadow
- Position: `fixed bottom-[48px] right-5 z-50` (above the telemetry/footer bar)

**Speech bubble teasers** appear to the left of the monolith and cycle through short TARS quotes every 8 seconds. After 3 full cycles the bubble hides for 30 seconds (avoids being annoying on long sessions). Suggested teasers:

```typescript
const TEASERS = [
  "Need directions, Cooper?",
  "Honesty setting at 90%.",
  "I have a cue light I can use to show you.",
  "Want to see the payload?",
  "It's not possible. No, it's necessary.",
];
```

Bubble styling: `bg-space-panel/90 border border-amber-primary/20 rounded-lg rounded-br-none` — the missing bottom-right radius makes it point toward the monolith.

### Expanded state: TarsChat

The chat window positions at `fixed bottom-[48px] right-5 z-50 w-[380px]` — same anchor as the monolith. It has five zones stacked vertically:

1. **Header** — mini monolith icon (w-7 h-8 rectangle with eye slit), TARS label in amber mono, subtitle "CASE Unit // Marine Corps", settings gear button, close button
2. **Settings panel** (collapsible) — `TarsSettings` component, see below
3. **Message area** — `h-[280px] overflow-y-auto`, auto-scrolls to bottom on new messages
4. **Quick actions bar** — pill buttons for fast navigation; amber variant for navigation, cyan variant for info queries
5. **Input row** — text input + SEND button; input uses `> Ask TARS anything...` placeholder to suggest a terminal feel

Chat window entrance: `animate-[fadeIn_0.2s_ease-out]` — fast, snappy, not floaty.

### Settings panel: TarsSettings

Two range sliders in a dark band below the header:

- HONESTY label (amber value readout) + range input with amber thumb
- HUMOR label (cyan value readout) + range input with cyan thumb
- Custom thumb styling via `[&::-webkit-slider-thumb]` Tailwind arbitrary variants
- Background: `bg-space-deep/50` — slightly darker than the chat window to visually separate it

### Message component: TarsMessage

Two display modes based on `sender`:

- **User messages**: right-aligned, `bg-amber-primary/10 border border-amber-primary/15 rounded-br-sm`, text in amber mono
- **TARS messages**: left-aligned, prefixed by a tiny monolith icon (w-5 h-6 with eye slit), text in `text-light` mono

**Typewriter animation**: TARS messages animate character-by-character at 30ms/char using a `setInterval`. Only the most recently added TARS message gets `animate={true}`. A blinking cursor `▋` in amber shows while typing. Once complete, the cursor disappears.

This animation is implemented directly in state — no libraries needed:

```typescript
useEffect(() => {
  if (!animate) return;
  let i = 0;
  const interval = setInterval(() => {
    i++;
    setDisplayed(text.slice(0, i));
    if (i >= text.length) {
      clearInterval(interval);
      setDone(true);
    }
  }, 30);
  return () => clearInterval(interval);
}, [text, animate]);
```

### Color tokens (Tailwind config)

```typescript
colors: {
  space: {
    deep:    "#0A0E1A",   // page background, darkest
    panel:   "#111827",   // chat window background
    console: "#1E293B",   // message bubbles, input fields
  },
  amber: {
    primary: "#F59E0B",   // TARS accent, honesty slider
  },
  cyan: {
    accent:  "#06B6D4",   // humor slider, info quick actions
  },
  text: {
    light: "#E2E8F0",     // readable body text
    muted: "#94A3B8",     // teaser text, secondary labels
    dim:   "#475569",     // slider labels, metadata
  },
},
fontFamily: {
  mono: ["var(--font-jetbrains)", "monospace"],  // all TARS UI text
},
```

### Animations summary

| Element | Animation |
|---------|-----------|
| Chat window open | `fadeIn 0.2s ease-out` |
| Speech bubble change | `fadeIn 0.3s ease-out` (keyed on teaserIndex) |
| Bot message text | Typewriter at 30ms/char |
| Cursor while typing | `blink 1s infinite` |
| Monolith outer ring | `animate-pulse` |
| Monolith hover | Shadow intensity increase via `transition-shadow` |

The `fadeIn` and `blink` keyframes need to be defined in your global CSS if not already present:

```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
```

---

## 6. Integration Checklist

Steps to add TARS to a new React / Next.js project:

### Step 1: Install dependencies

No additional packages are required beyond what a standard Next.js project provides. The typewriter animation is implemented with `setInterval` and React state. If you want scroll-triggered animations elsewhere on the page, `framer-motion` is a good addition, but TARS itself does not require it.

### Step 2: Create tars-responses.ts

Create `src/components/tars/tars-responses.ts`. This file should contain:

1. The `TarsResponse` interface (copy from Section 3)
2. The `RESPONSES` array with all your content entries
3. The `FALLBACKS` array (5–8 fallback strings)
4. The exported `matchResponse` function (copy from Section 3)

Replace all portfolio-specific content (names, GPAs, locations, projects) with your project's content.

### Step 3: Create the 5 component files

```
src/components/tars/
  tars-responses.ts     ← data + logic (done in step 2)
  TarsWidget.tsx        ← toggle wrapper
  TarsMonolith.tsx      ← collapsed state
  TarsChat.tsx          ← expanded chat window
  TarsMessage.tsx       ← individual message bubble
  TarsSettings.tsx      ← honesty/humor sliders
```

All components are `"use client"` since they use state, effects, and localStorage.

### Step 4: Mount TarsWidget in layout

In your root layout (Next.js `app/layout.tsx` or `pages/_app.tsx`):

```tsx
import { TarsWidget } from "@/components/tars/TarsWidget";

// Inside your layout's JSX, after the main content:
<TarsWidget />
```

Position it after `<main>` so it overlays the page content. The `fixed` positioning in the component handles placement.

### Step 5: Define section IDs

Each page section that TARS can scroll to needs a matching HTML `id`. The `scrollTo` field in each response entry must match an element ID on the page exactly:

```tsx
// In your page sections:
<section id="projects">...</section>
<section id="experience">...</section>
<section id="contact">...</section>
```

```typescript
// In tars-responses.ts:
{ keywords: ["projects"], scrollTo: "projects", ... }
```

### Step 6: Add Tailwind color tokens

Add the color tokens from Section 5 to your `tailwind.config.ts`. If you are using a different color theme, change the hex values but keep the token names consistent to avoid updating every component.

### Step 7: Add CSS keyframes

Add `fadeIn` and `blink` keyframes to your global CSS file (see Section 5).

### Step 8: Configure localStorage keys

The implementation uses `"tars-honesty"` and `"tars-humor"` as localStorage keys. These are fine for any project but rename them if you are embedding TARS in a project that already uses those keys for something else.

---

## 7. Customization Guide

### Change response content for your domain

`tars-responses.ts` is entirely content-defined. To adapt it:

1. Replace the person's name ("Pushkaraj") with your own or your product's name throughout the response strings
2. Replace section labels ("PAYLOAD", "FLIGHT LOG", etc.) with labels that match your site's section naming
3. Replace factual info (GPA, location, tech stack) with your own
4. Replace the recruiter category with whatever your site's equivalent is (e.g., "pricing", "demo request", "sign up")

Keep the four-quadrant variant structure — it is what gives TARS its personality depth.

### Adjust default honesty/humor values

In `TarsChat.tsx`, change the fallback values in the `useState` initializers:

```typescript
const [honesty, setHonesty] = useState(() => {
  const saved = localStorage.getItem("tars-honesty");
  return saved ? Number(saved) : 90;   // ← change 90
});
const [humor, setHumor] = useState(() => {
  const saved = localStorage.getItem("tars-humor");
  return saved ? Number(saved) : 75;   // ← change 75
});
```

Recommended defaults: honesty ≥80 so factual info is accurate on first visit, humor 60–80 for the "classic TARS" feel.

### Add or remove response categories

Add categories to the union type in `TarsResponse`:

```typescript
category: "navigation" | "about" | "info" | "easter" | "recruiter" | "pricing" | "faq";
```

Categories are metadata only — they do not affect matching logic. Use them for sorting your response file as it grows.

### Change quick action buttons

In `TarsChat.tsx`, edit the `QUICK_ACTIONS` array:

```typescript
const QUICK_ACTIONS = [
  { label: "Pricing",    message: "pricing",        variant: "amber" as const },
  { label: "Features",   message: "features",       variant: "amber" as const },
  { label: "Demo",       message: "request a demo", variant: "cyan"  as const },
  { label: "Who made this?", message: "who are you", variant: "cyan" as const },
];
```

`message` is sent directly into `matchResponse` — make sure it matches at least one keyword in your responses. `variant` controls amber (primary) vs cyan (secondary/info) pill styling.

### Swap the color theme

The entire color scheme is driven by the Tailwind tokens. To change from amber/cyan to, for example, green/purple:

```typescript
// tailwind.config.ts
colors: {
  amber: { primary: "#22C55E" },   // swap amber for green
  cyan:  { accent:  "#A855F7" },   // swap cyan for purple
  space: {
    deep:    "#050D05",
    panel:   "#0F1F0F",
    console: "#1A3020",
  },
}
```

No component code changes are needed — all color references use the token names.

### Change teaser messages

In `TarsMonolith.tsx`, edit the `TEASERS` array. Keep teasers short (one sentence, under 50 characters), in-character, and relevant to what TARS can do on your specific site:

```typescript
const TEASERS = [
  "Navigation module online.",
  "Ask me about the pricing.",
  "Honesty setting at 90%.",
  "I have a cue light I can use.",
  "Ready when you are.",
];
```

### Add new template variables

To add a variable like `{name}`:

```typescript
// In matchResponse, after the existing replacements:
text = text.replace(/\{name\}/g, "Your Name Here");
```

Then use `{name}` in any response string.

---

## 8. Voice Reference Card

A quick cheat sheet for writing new responses without re-reading this whole document.

**Do:**
- Short sentences. End on the noun.
- State the fact, then make the observation, not the other way around.
- Let TARS know he's a website bot. It's funnier.
- Vary line length. One long sentence + one short punch line.

**Don't:**
- Exclamation marks.
- "I'd be happy to..."
- Filler words: "actually", "basically", "just", "really", "simply".
- Lies — low honesty deflects, it never fabricates.
- Long paragraphs — TARS gives status reports, not essays.

**The TARS test:** read the response aloud in a flat monotone. If it's still funny, it's a TARS line. If it needs vocal enthusiasm to land, rewrite it.

---

*Built for the Pushkaraj Baradkar portfolio. Source lives at `/Users/pushkaraj/Documents/portfolio/src/components/tars/`.*
