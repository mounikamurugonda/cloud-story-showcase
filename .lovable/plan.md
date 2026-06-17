# Mounika Murugonda — Portfolio + C-Cloud_B Case Study

A paper-minimal, editorial portfolio (home with hero + about + featured case study) and a dedicated long-form case study route for C-Cloud_B, built on the chosen "Architectural grid" direction with Framer Motion interactions.

## Routes

- `/` — Home: nav, hero (name, role, intro), about/approach (capabilities + tools), featured case study card linking to the case study, footer.
- `/work/c-cloud-b` — Long-form case study with sticky chapter markers.

## Design tokens (verbatim from chosen direction)

Add to `src/styles.css`:
- Fonts: Newsreader (serif) + Inter (sans), loaded via `<link>` in `__root.tsx`.
- Colors: `--color-paper #fdfcfb`, `--color-ink #18181b`, `--color-lead #71717a`, `--color-line #e4e4e7`.
- Utility classes: `.paper-grain` (fixed SVG noise overlay), `.dot-grid` (radial dot background).
- Selection color zinc-200.

## Case study structure (`/work/c-cloud-b`)

1. **Cover** — oversized serif title "C-Cloud_B", tagline, 16:9 hero image plate.
2. **Overview meta strip** — Client, Role, Timeline, Tools, Year (5-col grid with hairline dividers).
3. **Chapter 01 — Context & Discovery** — sticky margin marker, problem statement, image plate of research artifacts.
4. **Chapter 02 — Research & User Flows** — interview insights, user flow diagram image.
5. **Chapter 03 — Wireframes & IA** — low-fi wireframe gallery (2-up).
6. **Chapter 04 — Visual System** — typography/color/components specimen.
7. **Chapter 05 — Final UI** — screen gallery (3-4 screens, mixed sizes).
8. **Outcomes** — 3 stat cards + reflection quote.
9. **Footer / Next project** — large serif link back to home.

Each chapter uses the sticky-marker + 8-col content layout from the prototype.

## Framer Motion interactions

- Hero headline: word-by-word mask reveal on mount.
- Section headings: `whileInView` fade + slight Y translate (one-shot, `viewport={{ once: true }}`).
- Image plates: scale-from-0.96 + opacity on enter; subtle hover lift (`whileHover y: -4`).
- Sticky chapter markers: opacity tween as section enters viewport (via `useScroll` per section).
- Featured case study card on home: magnetic hover (transform follows pointer with spring).
- Nav links: underline scale-x using layout animation.
- Page transitions between `/` and `/work/c-cloud-b`: fade + 8px Y via `AnimatePresence` in `__root.tsx`.

## Images

All hero/plate visuals generated via `imagegen` using the prompts embedded in the chosen prototype (dashboard concept, pencil sketches, wireframes, flow diagrams). Saved under `src/assets/case-study/` and imported as ES modules. No external stock photos.

## File plan

- `src/styles.css` — add tokens, fonts utilities (`.paper-grain`, `.dot-grid`).
- `src/routes/__root.tsx` — add Newsreader+Inter `<link>` to head; wrap `<Outlet />` in `AnimatePresence` page transition; update site meta (title "Mounika Murugonda — Frontend & UI/UX Developer", description, og tags).
- `src/routes/index.tsx` — Home page (replace placeholder).
- `src/routes/work.c-cloud-b.tsx` — Case study route with own `head()` (unique title/description/og).
- `src/components/site/Nav.tsx` — shared top nav.
- `src/components/site/Footer.tsx` — shared footer.
- `src/components/site/Reveal.tsx` — Framer Motion in-view wrapper.
- `src/components/site/ImagePlate.tsx` — captioned image plate with hover lift.
- `src/components/site/ChapterMarker.tsx` — sticky margin chapter label.
- `src/components/site/MagneticLink.tsx` — pointer-following hover element.
- `src/components/case-study/Cover.tsx`, `MetaStrip.tsx`, `Chapter.tsx`, `Outcomes.tsx`.
- `src/assets/case-study/*.{jpg,png}` — generated imagery.

## Dependencies

- `bun add framer-motion`

## Not in scope

- No projects index, no contact form (per your scope answer).
- No live Figma sync (desktop Figma MCP not connected). Case study copy will be tasteful placeholder narrative around the C-Cloud_B theme; you can swap in real text after I build. If you'd like real Figma screens pulled in later, install Lovable Desktop and enable the Figma MCP, then I can replace the generated visuals with actual frames.
