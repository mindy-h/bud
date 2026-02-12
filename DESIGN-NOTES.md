# Design Notes - Figma to Code

This document explains the design-to-code decisions, token extraction, and accessibility improvements made during implementation.

## Figma File Structure Overview

**Status**: No Figma design file has been linked yet. The following structure is anticipated when a design is provided.

When you add a Figma file:

1. **File key** and **node IDs** - Used for Dev Mode extraction
2. **Pages** - Map to routes (Home, About, Contact, etc.)
3. **Components** - Map to React components (Header, Footer, Button, etc.)
4. **Frames** - Define responsive breakpoints (Mobile, Tablet, Desktop)
5. **Auto Layout** - Converted to CSS Flexbox/Grid

## Design Token Extraction Process

Tokens are stored in `src/theme/design-tokens.css`. To extract from Figma:

1. Open Figma file in Dev Mode
2. Select a frame or component
3. Use **Inspect** panel for:
   - **Fill** → `--color-*` variables
   - **Text** → `--font-size-*`, `--font-weight-*`, `--line-height-*`
   - **Effects** (shadows) → add to component CSS if needed
4. For **Auto Layout** padding/gap → `--space-*` variables
5. Cross-reference with **Variables** (if design uses Figma variables)

## Typography Scale and Usage

| Token | Size | Usage |
|-------|------|-------|
| `--font-size-xs` | 12px | Captions, labels |
| `--font-size-sm` | 14px | Secondary text |
| `--font-size-base` | 16px | Body (WCAG min) |
| `--font-size-lg` | 18px | Large text, leads |
| `--font-size-xl` | 20px | Section titles |
| `--font-size-2xl` | 24px | Page sections |
| `--font-size-3xl` | 30px | Page titles |
| `--font-size-4xl` | 36px | Hero text |

**Font family**: Inter (Google Fonts) — replace with Figma font if different.

## Color Palette with Contrast Ratios

All colors were chosen to meet WCAG 2.1 AA:

| Token | Hex | Usage | Contrast |
|-------|-----|-------|----------|
| `--color-text-primary` | #0f172a | Primary text | 12.6:1 on white |
| `--color-text-secondary` | #475569 | Secondary text | 7.5:1 |
| `--color-text-muted` | #64748b | Muted text | 4.5:1 |
| `--color-primary` | #2563eb | Buttons, links | 4.5:1+ on white |
| `--color-error` | #dc2626 | Error text | 4.5:1+ |

**Large text (18px+ bold)**: 3:1 minimum. All primary/secondary text meets 4.5:1.

If Figma colors fail contrast, document in DESIGN-NOTES and suggest alternatives (darker/lighter variants).

## Spacing System

Figma Auto Layout padding and gap values map to:

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` to `--space-4` | 4px–16px | Inline spacing |
| `--space-6` to `--space-12` | 24px–48px | Section spacing |
| `--space-16` to `--space-24` | 64px–96px | Large gaps |

## Component Mapping: Figma → React

| Figma Component | React Component | Location |
|-----------------|-----------------|----------|
| Header / Navigation | Header | `src/components/Header/` |
| Footer | Footer | `src/components/Footer/` |
| Button Primary | Button (in forms/pages) | Inline styles |
| Modal / Dialog | Modal | `src/components/Modal/` |
| Form / Input | DemoForm | `src/components/Form/` |
| Skip Link | SkipLink | `src/components/SkipLink/` |

**Component variants**: If Figma uses properties (e.g., Button: primary/secondary), add as CSS classes or props to React components.

## Accessibility Improvements Beyond Original Design

These were added because Figma designs often omit accessibility states:

| Improvement | Rationale | WCAG |
|-------------|----------|------|
| Focus indicators (2px outline) | Keyboard users need visible focus | 2.4.7 |
| Error state styling (red border) | Form validation feedback | 3.3.1 |
| Hover/active states on buttons | Interactive feedback | 2.1.1 |
| Skip link (off-screen until focus) | Bypass blocks | 2.4.1 |
| aria-labels on icon-only buttons | Name, role, value | 4.1.2 |
| Live region for form status | Dynamic content updates | 4.1.3 |
| Reduced motion support | No seizure-inducing flashes | 2.3.1 |

**Design compromise**: Focus rings may differ from Figma. We prioritize visibility (2px, high-contrast) over pixel-perfect match.

## Responsive Behavior Notes

- **Breakpoints**: 768px (tablet), 1200px (container max)
- **Header**: Stacks remain horizontal; nav links may shrink padding on small screens
- **Footer**: Stacks vertically below 768px
- **Contact page**: Two-column grid becomes single column on mobile

Update breakpoints to match Figma frame widths when design is provided.

## Design Compromises for Accessibility

1. **Focus ring**: May be thicker/higher contrast than Figma spec — required for WCAG 2.4.7
2. **Minimum font size**: Body text 16px minimum — Figma may use 14px; we override
3. **Link underline**: Optional in Figma; consider adding for links in body text (WCAG 2.4.4)
4. **Required field indicator**: Asterisk + `aria-required` — Figma may not show; we add both

When conflicts arise, document the Figma intent and our accessibility-driven change with rationale.
