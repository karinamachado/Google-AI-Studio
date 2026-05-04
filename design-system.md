# Design System — Forge Identity
**Fitness & Performance Brand**

---

## 1. Concept and Style

This design system is built on the tension between **raw human power** and **technological precision**. The visual language communicates transformation — not as aspiration, but as an ongoing, unfinished process. Every visual decision reinforces the idea that identity is forged, not given.

The system operates in deep darkness, punctuated by combustion-grade orange and ember-red — colors that feel thermal, kinetic, and alive. Typography is unapologetically heavy. Compositions are confrontational. Imagery is dramatic and lit from within.

**Keywords:** `combustion` · `high-contrast` · `editorial-athletic` · `dark-dominant` · `structured-bold` · `transformation`

---

## 2. Color System

### 2.1 Primitive Colors

#### Neutrals (Dark Scale)
| Token | HEX | Usage |
|---|---|---|
| `neutral-950` | `#0A0A0A` | Background absolute |
| `neutral-900` | `#111111` | Background primary |
| `neutral-850` | `#181818` | Surface dark |
| `neutral-800` | `#1E1E1E` | Card background |
| `neutral-700` | `#2A2A2A` | Elevated surface |
| `neutral-600` | `#3A3A3A` | Dividers, borders |
| `neutral-400` | `#6B6B6B` | Muted text |
| `neutral-200` | `#B0B0B0` | Secondary text |
| `neutral-100` | `#D9D9D9` | Body text on dark |
| `neutral-50` | `#F0F0F0` | High-emphasis text |
| `neutral-0` | `#FFFFFF` | Primary text / logo |

#### Core Chromatic Palette
| Token | HEX | Description |
|---|---|---|
| `orange-vivid` | `#E8400A` | Core brand — combustion orange |
| `orange-hot` | `#FF4D0D` | Hover / active state |
| `orange-muted` | `#C03200` | Pressed / deep accent |
| `red-ember` | `#B22A00` | Secondary accent — darker fire |
| `red-glow` | `#FF2200` | Cinematic light leak / FX only |
| `gray-steel` | `#5C6B7A` | Cold contrast on select refs |

---

### 2.2 Semantic Colors

| Role | Token | HEX | Description |
|---|---|---|---|
| **Primary** | `color-primary` | `#E8400A` | Main brand action — CTAs, highlights, key words |
| **Primary Hover** | `color-primary-hover` | `#FF4D0D` | Interactive state |
| **Primary Pressed** | `color-primary-pressed` | `#C03200` | Pressed/active state |
| **Background** | `color-bg` | `#111111` | Default dark background |
| **Surface** | `color-surface` | `#1E1E1E` | Cards, panels, overlays |
| **Text Primary** | `color-text-primary` | `#FFFFFF` | Headlines, primary labels |
| **Text Secondary** | `color-text-secondary` | `#B0B0B0` | Subheadings, descriptive text |
| **Text Muted** | `color-text-muted` | `#6B6B6B` | Captions, metadata |
| **Text Accent** | `color-text-accent` | `#E8400A` | Emphasized keywords in headlines |
| **Border Subtle** | `color-border` | `#2A2A2A` | Component separation |
| **Success** | `color-success` | `#2E7D32` | Confirmation states |
| **Warning** | `color-warning` | `#F57C00` | Attention states |
| **Error** | `color-error` | `#C62828` | Destructive / alert states |

#### Color Logic
- The system is **dark-first**: backgrounds never exceed `neutral-800`.
- Orange (`#E8400A`) functions as the single energetic force — used sparingly but with full intensity.
- Mixed-weight headlines use white for supporting words and orange for charged/active words.
- Color is used **narratively**: orange appears where transformation, motion, or emphasis is implied.

---

## 3. Typography

### 3.1 General Style
Condensed, extended-weight grotesque or athletic sans-serif for display. Tight, structured, neutral sans for body. The typographic voice is **loud in headlines, disciplined in text**.

### 3.2 Font Families
| Role | Family | Fallback |
|---|---|---|
| Display / Headlines | `Bebas Neue` | `sans-serif` |
| Body / UI | `Inter` | `sans-serif` |

### 3.3 Hierarchy

| Level | Style | Weight | Size Range | Use |
|---|---|---|---|---|
| `display` | Bebas Neue | 400 (visually Black) | 72–120px | Hero statements, campaign headlines |
| `h1` | Bebas Neue | 400 | 48–72px | Section titles |
| `h2` | Bebas Neue | 400 | 32–48px | Sub-section headers |
| `h3` | Bebas Neue | 400 | 20–28px | Card titles, feature labels |
| `overline` | Inter Uppercase | Medium / 500 | 10–12px | Category labels, eyebrows |
| `body` | Inter | Regular / 400 | 14–16px | Paragraphs, descriptions |
| `caption` | Inter | Regular / 400 | 11–13px | Metadata, footnotes |
| `label` | Inter Uppercase | Medium / 500 | 11–13px | Button labels, tags |

### 3.4 Weight Distribution
- Display and headlines are **heavy and compressive** — wide letterforms, maximum weight.
- Body text is intentionally light to create **dramatic contrast** with headline weight.
- Never use medium weight for headlines; the jump from Regular body to Black headline is intentional.

### 3.5 Spacing Tendencies
- Display: `letter-spacing: -0.02em` — tight, compressed
- Overline: `letter-spacing: 0.12em` — widely tracked uppercase
- Body: `letter-spacing: 0` — neutral, readable
- Line-heights: Display `0.9–1.0` · H1 `1.0–1.1` · Body `1.5–1.6`

### 3.6 Tailwind Class Reference
```
// Bebas Neue (display/headlines)
font-['Bebas_Neue',sans-serif]

// Inter (body/UI)
font-['Inter',sans-serif]

// Common headline patterns
text-[96px] leading-[0.9] tracking-[-2.4px]   // display
text-[64px] leading-[0.95] tracking-[-1.6px]  // h1
text-[48px] leading-[1.0]  tracking-[-1.2px]  // h2

// Overline pattern
text-[11px] tracking-[0.14em] uppercase font-medium  // overline
text-[12px] tracking-[1.2px] uppercase               // label
```

---

## 4. Spacing and Layout

### 4.1 Base Grid
**8pt base grid** — all spacing values are multiples of 8.

| Token | Value | Description |
|---|---|---|
| `space-1` | `4px` | Micro — icon padding, tight gaps |
| `space-2` | `8px` | Small — inline element gaps |
| `space-3` | `16px` | Default — component internal |
| `space-4` | `24px` | Medium — between related elements |
| `space-5` | `32px` | Large — card padding, section gaps |
| `space-6` | `48px` | XL — section separators |
| `space-7` | `64px` | 2XL — hero padding |
| `space-8` | `96px` | 3XL — major section breaks |
| `space-9` | `128px` | 4XL — full-bleed vertical rhythm |

### 4.2 Layout Structure
- **12-column grid**, with 24px gutters on desktop, 16px on mobile.
- Margins: 80px on desktop (`px-20`) / 24px on mobile (`px-6`).
- Max content width: `max-w-7xl` (1280px) centered.
- Layouts alternate between **full-bleed image sections** and **contained text panels**.
- Content blocks favor **2-column asymmetry** (e.g. 5col image + 7col text, or reversed).
- Hero sections break the grid intentionally — typography overflows into imagery.

### 4.3 Section Vertical Rhythm
- Section padding: `py-32` (128px) — default
- Tight sections: `py-16` (64px) — stats bars, utility strips
- Internal section sub-blocks: `mb-16` / `mb-20` / `mb-32`

### 4.4 Density
**High-impact, low-clutter.** Not sparse — theatrical. Sections breathe generously between each other (`96–128px`), but internal components are compact.

---

## 5. Shapes and UI Language

### 5.1 Border Radius
| Context | Value | Tailwind | Description |
|---|---|---|---|
| Buttons (primary) | `0px` | (no rounding) | Sharp — aggressive, no softening |
| Cards (landing) | `0px` | (no rounding) | Structural rigidity |
| Modals / overlays | `0px` | (no rounding) | Sharp-edged panels |
| Inputs (modals) | `10px` | `rounded-[10px]` | Minimal softness in sub-screens |
| Icon containers | `12–16px` | `rounded-2xl` / `rounded-3xl` | Contained icon wells |
| Badges / tags | `2–4px` | `rounded-sm` | Near-sharp |

> The landing system avoids pill shapes entirely. Rounding is earned, not default.
> Modal/sub-screen forms may use `rounded-[10px]` on inputs for usability at smaller sizes.

### 5.2 Stroke Usage
- Borders are **rarely used decoratively** — when present, they are thin (`1px`), dark, and structural.
- Default border color: `#2A2A2A` (`border-[#2A2A2A]`)
- Active states may introduce a **1px orange border** or a left-side accent rule.
- Icon strokes: thin (`1.5–2px`), precise.
- Never use decorative borders on primary CTA buttons.

### 5.3 Component Style
- **Flat with selective elevation** — no gradients on UI elements (only on imagery and backgrounds).
- CTA buttons: solid fill, no shadow, all-caps label, heavy weight, `0px` radius.
- Ghost buttons: `1px` border `#2A2A2A` or `#E8400A`, no fill, text white or orange.
- Cards: `#1E1E1E` background, `1px solid #2A2A2A` border, no box-shadow by default.
- Interactive states use **color shifts** (orange → brighter orange) not shadow lift.

---

## 6. Visual Details

### 6.1 Shadows
- UI components: **no shadow** — flatness reinforces the industrial edge.
- Hero/editorial imagery: **dramatic cinematic shadows** cast from directional orange/red light.
- Overlay panels: `box-shadow: 0 8px 40px rgba(0,0,0,0.6)` — deep, far-reaching.
- Featured cards: `shadow-[0px_25px_50px_-12px_rgba(232,64,10,0.08)]` — subtle orange diffusion.

### 6.2 Borders
- Surface separators: `1px solid #2A2A2A` — nearly invisible, structural only.
- Decorative rules: Used as typographic dividers — thin horizontal lines.
- Section borders: `border-t border-b border-[#1E1E1E]` — ultra-subtle, marks transitions.
- Orange divider pair: `<div h-px w-8 bg-[#E8400A] />` flanking a label — section eyebrow pattern.

### 6.3 Decorations and FX
| Element | Description |
|---|---|
| **Light leaks** | Directional orange/red beams bleeding across images — editorial, cinematic |
| **Dot matrix / halftone** | Low-opacity pixel grid patterns over image areas — tech / military aesthetic |
| **Text-behind-subject** | Large outlined or low-opacity type placed behind the figure — layered depth |
| **Glow edges** | Subtle orange rim-light around subjects — photographic, not CSS-generated |
| **Grain overlay** | Subtle noise texture at 8–12% opacity over dark backgrounds — tactile, grounded |
| **Geometric shapes** | Angular forms (chevrons, arrows) used as graphic dividers or background accents |
| **Ambient glow** | `bg-[#E8400A]/5` radial blur — very subtle thermal warmth on dark sections |
| **Bottom gradient** | `linear-gradient(to top, rgba(232,64,10,0.07), transparent)` — cinematic base light |

#### FX Principles
- All effects serve the **transformation narrative** — fire, heat, energy, emergence.
- Never apply decorative FX to UI components (buttons, inputs, cards).
- FX are restricted to **hero zones, campaign imagery, and editorial backgrounds**.

---

## 7. Contrast and Accessibility

### 7.1 Contrast Levels
| Pairing | Ratio | Status |
|---|---|---|
| White text on `#111111` | ~18:1 | ✅ AAA |
| White text on `#1E1E1E` | ~14:1 | ✅ AAA |
| `#E8400A` on `#111111` | ~5.2:1 | ✅ AA |
| `#B0B0B0` on `#111111` | ~7.6:1 | ✅ AA |
| `#6B6B6B` on `#111111` | ~3.1:1 | ⚠ Use for large/decorative text only |

### 7.2 Readability Approach
- **White is the primary reading color** — all body text defaults to `#FFFFFF` or `#D9D9D9`.
- Orange is used for **scannable highlights**, never long-form text.
- Muted gray (`#6B6B6B`) is reserved for metadata, captions, and non-essential text — never body copy.
- **All interactive elements** (links, buttons) must pass AA contrast in both default and hover states.

### 7.3 Hierarchy Through Color
- The eye is guided: dark background → white headline → orange keyword → muted body.
- Color emphasis follows a strict **one-accent rule per visual block**: one word or phrase in orange per headline unit.
- Avoid competing accents within the same visual zone.

### 7.4 Accessibility Checklist (Components)
- All interactive elements include `aria-label` or visible label.
- Focus states use `focus-visible:ring-2 focus-visible:ring-[#E8400A]` — orange ring on keyboard nav.
- Modals: `role="dialog"` + `aria-modal="true"` + focus trap + `Escape` to close.
- Decorative SVGs: `aria-hidden="true"`.
- Body scroll locked when modal/overlay is open.

---

## 8. Component Patterns

### 8.1 Section Label (Eyebrow)
The standard pattern for marking a section's category above the headline:
```tsx
// With flanking dividers (centered sections — e.g. Investimento)
<div className="flex items-center justify-center gap-4 mb-4">
  <div className="h-px w-8 bg-[#E8400A]" />
  <span className="text-[#E8400A] font-['Inter',sans-serif] font-medium text-xs tracking-[1.44px] uppercase">
    LABEL
  </span>
  <div className="h-px w-8 bg-[#E8400A]" />
</div>

// Left-aligned (most sections)
<p className="text-[#E8400A] font-['Bebas_Neue',sans-serif] text-sm tracking-[2.8px] uppercase mb-4">
  Label
</p>
```

### 8.2 Section Headline Pattern
```tsx
// Standard — last line in orange
<h2 className="font-['Bebas_Neue',sans-serif] text-[clamp(64px,8vw,96px)] leading-[0.9] tracking-[-2.4px]">
  FIRST LINE<br />
  SECOND LINE<br />
  <span className="text-[#E8400A]">ACCENT LINE.</span>
</h2>

// All white — used when content below provides the accent
<h2 className="font-['Bebas_Neue',sans-serif] text-[80px] leading-[0.95] tracking-[-1px] text-white">
  LINE ONE.<br />
  LINE TWO.<br />
  LINE THREE.
</h2>
```

### 8.3 Primary Button
```tsx
<motion.button
  whileHover={{ backgroundColor: "#FF4D0D" }}
  whileTap={{ scale: 0.98 }}
  className="bg-[#E8400A] px-8 py-4 font-['Bebas_Neue',sans-serif] text-xl text-white tracking-[1px] uppercase"
>
  LABEL
</motion.button>
```

### 8.4 Ghost Button
```tsx
<motion.button
  whileHover={{ borderColor: "#E8400A", color: "#E8400A" }}
  className="border border-[#2A2A2A] px-8 py-4 font-['Bebas_Neue',sans-serif] text-xl text-white tracking-[1px] uppercase transition-colors"
>
  LABEL
</motion.button>
```

### 8.5 Card (Standard)
```tsx
<div className="bg-[#1E1E1E] border border-[#2A2A2A] p-8 hover:border-[#E8400A] transition-colors">
  {/* content */}
</div>
```

### 8.6 Card (Featured / Highlighted)
```tsx
<div className="bg-[#1E1E1E] border border-[#E8400A] p-8 shadow-[0px_25px_50px_-12px_rgba(232,64,10,0.08)]">
  {/* content */}
</div>
```

### 8.7 Input Field (Modal context)
```tsx
<input
  className="w-full bg-[#0D0D0D] border border-[#303030] text-[#F2F2F2] placeholder-[#606060]
             pl-12 pr-4 py-[14px] text-base font-['Inter',sans-serif] rounded-[10px]
             outline-none focus:border-[#E8400A] focus:ring-1 focus:ring-[#E8400A]/30 transition-all"
/>
```

### 8.8 Icon Pattern
- Icon size in UI: `16–20px` standard, `24–32px` for feature icons.
- Stroke weight: `1.5–2px` for small icons, `2.67px` for large feature icons.
- Icon color: `#E8400A` for primary/feature icons, `#6B6B6B` for muted/placeholder icons, `currentColor` for interactive icons that inherit button state.

---

## 9. Animation Principles

### 9.1 Library
**Motion (motion/react)** — `import { motion, AnimatePresence } from 'motion/react'`

### 9.2 Core Easing
```
ease: [0.16, 1, 0.3, 1]   // Snappy spring — default for entrances
ease: "easeInOut"           // Ambient / looping animations
ease: "linear"              // Ticker / marquee motion
```

### 9.3 Entrance Animations (whileInView)
```tsx
// Standard fade-up (sections)
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6, delay }}

// Slide from side (two-column layouts)
initial={{ opacity: 0, x: -30 }} // left column
initial={{ opacity: 0, x: 30 }}  // right column

// Scale-in (modals, feature icons)
initial={{ scale: 0.6, opacity: 0 }}
animate={{ scale: 1, opacity: 1 }}
transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
```

### 9.4 Modal / Overlay
```tsx
// Backdrop
initial={{ opacity: 0 }} → animate({ opacity: 1 }) — duration: 0.3

// Panel
initial={{ opacity: 0, y: 32, scale: 0.97 }}
animate={{ opacity: 1, y: 0, scale: 1 }}
transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
```

### 9.5 Ambient / Looping
```tsx
// Hero glow pulse
animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }}
transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}

// Ticker / marquee
animate={{ x: [0, -1000] }}
transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
```

### 9.6 Hover States
- Always use `whileHover` (not CSS `:hover`) for interactive components.
- Default transition for color: `transition-colors` Tailwind class.
- Buttons: `whileHover={{ backgroundColor: "#FF4D0D" }}` + optional `scale: 1.02`.
- Ghost buttons: `whileHover={{ borderColor: "#E8400A", color: "#E8400A" }}`.

---

## Token Summary (Design Tokens Reference)

```
// Colors
--color-bg:              #111111
--color-surface:         #1E1E1E
--color-surface-dark:    #181818
--color-primary:         #E8400A
--color-primary-hover:   #FF4D0D
--color-primary-pressed: #C03200
--color-text-primary:    #FFFFFF
--color-text-secondary:  #B0B0B0
--color-text-muted:      #6B6B6B
--color-text-accent:     #E8400A
--color-border:          #2A2A2A
--color-border-strong:   #3A3A3A

// Spacing
--space-1: 4px
--space-2: 8px
--space-3: 16px
--space-4: 24px
--space-5: 32px
--space-6: 48px
--space-7: 64px
--space-8: 96px
--space-9: 128px

// Radius
--radius-sharp:  0px
--radius-subtle: 4px
--radius-card:   8px
--radius-input:  10px

// Typography Scale
--text-display: 96px / Bebas Neue / leading-[0.9]  / tracking-[-0.02em]
--text-h1:      64px / Bebas Neue / leading-[0.95] / tracking-[-0.01em]
--text-h2:      48px / Bebas Neue / leading-[1.0]  / tracking-0
--text-h3:      24px / Bebas Neue / leading-[1.1]  / tracking-0
--text-body:    15px / Inter      / leading-[1.6]  / tracking-0
--text-caption: 12px / Inter      / leading-[1.5]  / tracking-0
--text-label:   11px / Inter      / leading-[1.4]  / tracking-[0.10em] / uppercase
--text-overline:11px / Inter      / leading-[1.4]  / tracking-[0.14em] / uppercase
```

---

## 10. Project File Structure Reference

```
src/
├── app/
│   ├── App.tsx                    # Main layout — all landing sections
│   ├── routes.tsx                 # React Router config (if multi-page)
│   └── components/
│       ├── Accordion.tsx          # FAQ accordion
│       ├── CoachCard.tsx          # Coach card (initials variant)
│       ├── CoachCardNew.tsx       # Coach card (photo variant, grayscale)
│       ├── LoginModal.tsx         # Admin login overlay
│       ├── PricingCard.tsx        # Pricing plan card
│       ├── StatCard.tsx           # Stats bar item
│       └── TestimonialCard.tsx    # Testimonial card
├── imports/                       # Figma-imported assets
│   ├── image_header.png           # Hero background
│   ├── Background.png             # Quem Somos image
│   ├── 1440WLight/                # Equipment section assets
│   ├── Section-4/                 # Coach photos
│   ├── Section-5/                 # Pricing section SVGs
│   ├── Section-6/                 # Location section assets
│   └── LoginAdmin/                # Login modal assets
└── styles/
    ├── fonts.css                  # Google Fonts imports
    └── theme.css                  # CSS custom properties / base styles
```

---

*Design System — Forge Identity | v1.0 | FORGEE Academy · Indaiatuba, SP*
*Last updated: May 2026*
