# Morana Design System

Morana is a metalearning consultancy. It teaches people and teams **how they learn**, then helps them reach goals by retiring the methods that quietly stopped working. Two delivery tracks:

- **Company** - Project (custom program design) and Workshop (MVP offerings). Retainer is deferred.
- **Individual** - Short Intensive, 6–8 weeks (MVP; pricing not set). Extensive 3-month+ is deferred.

Deferred and explicitly out of scope for now: retainers, the extensive individual track, cohorts at scale, and a second goal category.

The name is deliberate. Morana is the Slavic goddess of winter and death, whose effigy is burned to end winter - death enabling rebirth. The brand uses that as a stated idea: **an ending is the precondition for growth.** The tagline is *"Every spring starts with a winter."*

Surfaces in scope: **marketing website** (Programs · Approach · About · Contact) and a **slide template** (pitch and teaching). Email was descoped by the client during setup. Blog was removed. Everything ships in **English and Bulgarian at full parity**.

## Sources

Everything in this system derives from two inputs, and nothing else:

1. `uploads/l-d-color-palette.svg` - a Coolors export: `#efe3a9 · #88944c · #668f66 · #6a5d7b · #362b3b` (<https://coolors.co/efe3a9-88944c-668f66-6a5d7b-362b3b>).
2. A structured intake conversation covering brand meaning, audience, voice, surfaces, motion, and layout direction.

**There was no codebase, no Figma file, no logo, no font files, and no existing product screens.** Nothing here is a recreation of an existing UI - it is an original system built to the brief. Two consequences a reader must know:

- **No logo exists.** The brand mark is the name set in type (see Wordmark below). Nothing was drawn or reconstructed. If Morana commissions a mark, it drops into `assets/` and replaces the type lockup.
- **Fonts are substitutions.** Newsreader and Archivo are Google Fonts chosen to match the requested "editorial serif + clean sans - warm, considered, a bit literary" direction. **If you have licensed faces, send the files and I'll swap them.**

## Decisions on record

| Decision | Choice |
| --- | --- |
| Palette | Source hues deepened one step; originals retained as `-400` tints |
| Ground | Warm cream, not white |
| Type | Newsreader (display) + Archivo (sans), Cyrillic subsets |
| Wordmark | Serif small caps, institutional; `Морана` on BG pages |
| Motif | Concentric rings - layers of understanding |
| Hero | Rings cropped full-bleed behind centred type, held by a cream aperture |
| Motion | Expressive; hero, hover/press, and step indicators only |
| Reduced motion | Full static fallback |
| Voice | "We" - a small studio |
| Myth | Stated brand idea; renewal language throughout |
| Renewal vocabulary | unlearn, renewal, rebuild (only these three) |
| Palette as season metaphor | No - palette is treated as neutral |
| Pricing | Never shown; "Get in touch" |
| Proof | Research citations + named case studies (slots, not invented content) |
| CTA | "Get in touch" |

---

## Content fundamentals

**Register.** Professional with a dry edge - roughly 65 on a 0–100 sober-to-playful dial. The wit is in precision and restraint, never in exclamation marks. Assume the reader is competent and busy.

**Person.** First-person plural: *we*. Morana is a small studio, not a named practitioner. Address the reader as *you*. Never *our clients*, never third-person *Morana believes*.

**Casing.** Sentence case everywhere - headlines, buttons, labels, nav. The only uppercase is the eyebrow label (12px, `0.2em` tracking) and the wordmark. No Title Case On Headlines.

**Sentence shape.** Short declaratives. A hyphen earns its place when the second clause corrects the first - that construction *is* the voice. **Never use an em dash; always a plain hyphen.** This is a hard house rule across copy, UI text, slides, and documentation:

> "We map how learning actually happens - not how the org chart says it does."

> "Name the habits that stopped paying rent, and retire them on purpose."

> "Methods your people can run without us in the room."

**Renewal language.** Only three words carry the myth: **unlearn**, **renewal**, **rebuild**. Explicitly rejected: *thaw*, *effigy*, *burning*, *cycle*, *ending*, *winter/spring* as recurring vocabulary (the tagline is the one exception - it earns its winter). The myth is a stated idea, not a costume; write it once, clearly, and move on. In an HR or L&D context never lead with "goddess of death."

**Process language.** Three steps, always these names: **Audit → Unlearn → Rebuild.**

**Never.**
- No emoji. Not in product, not in email, not in slides.
- No consultancy jargon: *leverage, synergy, unlock potential, proven framework, paradigm, journey, transformation.*
- No exclamation marks.
- No invented statistics. Outcome numbers appear only when Morana supplies them; until then those slots stay visibly empty and labeled.
- No pricing.

**Citations.** Research is credited in named callout cards - `Björk, 2011` - not inline superscripts. Name the finding in plain language, then attribute.

**Bulgarian.** Real Bulgarian copy, at parity. It is written natively, not translated word-for-word, and it keeps the same restraint. The tagline reads *"Всяка пролет започва със зима."* **Needs a native review pass before launch.**

---

## Visual foundations

**Colour.** Warm and earthy: a cream ground, olive as the working accent, sage for growth, plum for reflection, near-black plum ink for text and inverse surfaces. The five source hues read washed out at screen scale, so each was deepened one step (`--olive-600 #6f7c33`, `--sage-500 #4e7a55`, `--plum-500 #56466b`, `--ink-700 #2a2030`); the originals survive as the `-400` tints for large fills. Cream `#efe3a9` is untouched - it is the most recognisable brand colour. **Maximum two grounds per screen.** The palette is *not* a seasonal metaphor; don't map greens to "spring" in layouts.

**Type.** Newsreader for anything that speaks, Archivo for anything that functions. Headlines are serif at weight 300–400 with `-0.024em` tracking and 1.0–1.01 leading - large, light, and tightly set. **Headlines are never bold and never uppercase.** One italic plum word per headline carries the idea (`winter`, `unlearn`); a second italic word kills it. Body is 17.5px/1.6 at a 42ch measure. Eyebrows are 12px uppercase olive at `0.2em`.

**Backgrounds.** Flat cream. No photography (none exists yet), no gradient washes, no noise or grain, no repeating patterns. The single background device is the **ring field**: concentric circles, 2px stroke, cropped off the edges of the viewport. Cropping is deliberate - whole circles look like a diagram, cropped ones look like a system continuing past the frame.

**The rings.** Four orbits at 16s / 26s / 40s / 58s, alternating direction, each carrying one small node, plus a ring expanding outward through the field every 7s (sage at birth → olive mid-flight → plum as it fades). Where type sits over the field, a radial cream **aperture** (`--aperture`) opens behind it so contrast never drops. The same motif, static, is the step indicator and the favicon.

**Animation.** Motion is part of the brand, but it is scoped to three places: the homepage hero, hover/press states, and program step indicators. Entrances rise 14px and fade over ~1.1s on `--ease-brand` `cubic-bezier(.2,.8,.2,1)`, staggered ~250ms, and run exactly once. Loops use `--ease-expand` and never accelerate. No bounce, no spring overshoot, no parallax, no scroll-jacking, no page transitions. `prefers-reduced-motion` gets a **full static fallback** - `tokens/motion.css` zeroes every duration, so honouring it costs consumers nothing.

**Hover.** Primary buttons swap olive → plum over 200ms (a hue shift, not a darken). Secondary buttons fill with `--accent-quiet` and their border goes olive. Links go olive → plum. Nav links go body ink → olive. Never opacity fades, never underlines-on-hover.

**Press.** `scale(0.97)` over 160ms. No colour change on press - the shrink is the feedback.

**Focus.** A 2px plum (`--focus-ring`) outline at 2px offset. Never removed, never a soft glow.

**Borders.** Hairlines carry the structure: `1px solid rgba(42,32,48,.16)`. Section dividers and card edges are rules, not shadows. Dark surfaces use `rgba(239,227,169,.28)`.

**Shadows.** Almost none. `--shadow-card` is `0 1px 2px rgba(42,32,48,.05)` - present only so cards lift off cream by a hair. `--shadow-raised` exists for dialogs. There is **no inner-shadow system**; sunken areas are a cream tint shift (`--surface-sunken`) instead. The one glow in the system, `--glow-accent`, is reserved for the ignite moment on the rings and is currently unused.

**Corners.** 2px on everything rectangular. 3px on inputs. Circles for the motif. Pills appear exactly once - the EN/BG toggle. **No 8px+ rounded cards**; the brand reads square and printed.

**Cards.** Cream `--surface-card` on cream page, one hairline border, 2px radius, no shadow beyond the hairline, generous internal padding (20–24px). No coloured left borders, no gradient fills, no icon badges in corners.

**Transparency and blur.** Transparency is used only for hairlines, muted text on dark, and the aperture gradient. **No frosted glass, no backdrop-filter anywhere.** Protection for text over the moving rings is the cream aperture - a soft radial mask, not a capsule or a scrim.

**Layout.** One container (`1140px` max) with `5vw` gutters, `96px` section rhythm. Content is asymmetric and left-aligned by default; the hero is the deliberate exception (centred, because the rings are radial). The header is absolutely positioned over the hero and scrolls away - nothing is sticky, nothing is fixed. Two measures: `42ch` body, `14ch` hero.

**Imagery.** Abstract shapes and type only - chosen over photography, and a real constraint rather than a placeholder state. Where a photo would eventually go, the ring field or a cream panel goes instead. If photography is added later it should be warm, low-contrast, and human; never cool, never blue-filtered, never stock-corporate.

**Deck.** The deck inverts the site: dark plum `--surface-inverse` covers with cream rings, then cream body slides. 16:9, with 1:1 pull-quote variants for social.

---

## Iconography

**There is no icon set in the sources, and none was drawn.** Nothing in this system is a hand-rolled SVG imitation of an icon family.

The approach, in priority order:

1. **The rings are the only proprietary glyph.** Concentric 2px circles, rendered as CSS borders - favicon, avatar mark, step indicator, slide cover centrepiece. No other bespoke mark exists.
2. **Text over icons.** The language switcher is literally `EN / BG`, not a globe. Steps are numbered `01 / 02 / 03` in Archivo, not numbered-circle glyphs. Nav has no icons at all. This is a type-led brand and mostly does not need an icon set.
3. **Where UI genuinely needs icons** (form validation, an accordion chevron, external-link marks), use **Lucide** from CDN: `https://unpkg.com/lucide@latest`. **This is a flagged substitution** - Lucide was chosen because its 2px default stroke and rounded caps match the ring strokes exactly, so icons and motif share one line weight. Set `stroke-width: 2`, size 20px, `currentColor`.
4. **No emoji, ever** - including in email subject lines and slide bullets.
5. **No unicode characters as icons** (no `→` arrows in buttons, no `•` bullet decoration beyond real list markup). Em dashes are banned outright as punctuation too - use a hyphen.

If Morana later commissions an icon set, it should be 2px stroke, square-terminal, and drawn on a 24px grid to sit with the rings.

---

## Index

**Root**
- `styles.css` - the single entry point consumers link. `@import` lines only.
- `readme.md` - this file.
- `thumbnail.html` - homepage tile for the system.
- `SKILL.md` - agent-invocable skill wrapper *(written at the end of the build)*.

**`tokens/`** - `fonts.css` (Google Fonts import, EN + BG subsets) · `colors.css` · `typography.css` · `spacing.css` · `shape.css` (radii, borders, elevation, aperture) · `motion.css` (easings, durations, orbit speeds, reduced-motion overrides).

**`guidelines/`** - 21 specimen cards feeding the Design System tab, grouped **Colors** (cream, olive, sage, plum, ink, surfaces, text roles, states) · **Type** (display, body, scale, labels, Cyrillic, italic accent) · **Spacing** (scale, layout) · **Shape** (radii, elevation) · **Motion** (easing, ring field) · **Brand** (wordmark, step indicator, tagline lockup, voice).

**`candidates/`** - the exploration trail: 12 hero and motion studies reviewed during setup. `i3-aperture.html` is the direction that won. Kept for provenance; not part of the shipped system.

**`assets/`** - *empty by design.* No logo, no photography, no icon binaries were supplied. Icons come from the Lucide CDN.

**`components/`** - eleven components in four groups. Import them from `window.<Namespace>` after loading `_ds_bundle.js`, or read the sibling `.prompt.md` for usage.

| Component | Group | What it is |
| --- | --- | --- |
| `Button` | `core/` | The only action element. Five variants, two sizes, 0.97 press. |
| `Badge` | `core/` | Uppercase track label; also the deferred-offering flag. |
| `SectionHeading` | `core/` | Eyebrow + serif title + italic accent + lead. Opens every section. |
| `RingMark` | `core/` | The concentric-rings glyph: mark, step indicator, animated hero field. |
| `ProgramCard` | `content/` | One offering: track badge, name, duration, description, CTA. Never a price. |
| `ResearchCallout` | `content/` | Named citation card - the only proof format until case studies land. |
| `NavHeader` | `navigation/` | Wordmark, four nav links, language toggle. Bilingual labels built in. |
| `LanguageToggle` | `navigation/` | The literal `EN / BG` text switch. Header only. |
| `Footer` | `navigation/` | Inverse footer: wordmark, tagline, nav repeat, legal. |
| `Input` | `forms/` | Text field; `multiline` covers textareas. Uppercase olive label, plum focus ring. |
| `ContactForm` | `forms/` | The site's single conversion path, with its own thank-you state. |

**UI kit and slides** - in progress; this file is updated as each lands.

### Intentional additions

Nothing in this system was defined by a source inventory, so the component list came from the intake conversation rather than from existing code. The agreed set is: Button, RingMark (step indicator), ProgramCard, ResearchCallout, NavHeader (with language toggle), Footer, form controls (Input, Textarea, ContactForm), SectionHeading, Badge. Accordion, stat blocks, pull quotes, toasts, avatars, tabs, and dialogs were considered and **deliberately left out** - Morana has no screen that needs them yet.
