# Budnew - Accessible React Website

A fully accessible website built with React, designed for WCAG 2.1 AA compliance. This project demonstrates best practices for accessibility in modern web applications.

## Project Overview

Budnew is a demonstration project that showcases:

- **Design-to-code workflow**: Ready to integrate with Figma design files
- **Accessibility-first development**: WCAG 2.1 AA compliance throughout
- **Component-based architecture**: Reusable, accessible React components
- **Semantic HTML**: Proper structure for screen readers and assistive technologies

## Figma Design

**Figma Design File**: _[Add your Figma file link here]_

When you have a Figma design:

1. Export assets to `public/assets/figma/`
2. Update design tokens in `src/theme/design-tokens.css` from Dev Mode/Inspect
3. Replace placeholder components with Figma-specified styles as needed

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server (typically http://localhost:5173) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Accessibility Features Implemented

- **Skip navigation link** - Bypass repeated content (WCAG 2.8.1)
- **Proper heading hierarchy** - Single h1 per page, no skipped levels
- **Keyboard accessibility** - All interactive elements operable via Tab, Enter, Space, Escape
- **Visible focus indicators** - Enhanced focus styles on all focusable elements
- **Semantic landmarks** - `header`, `nav`, `main`, `footer`, `section`, `aside`
- **Form accessibility** - Labels, error states, aria-invalid, live regions
- **Modal focus management** - Focus trap, Escape to close, focus return
- **Color contrast** - All text meets 4.5:1 (normal) or 3:1 (large) minimum
- **Reduced motion** - Respects `prefers-reduced-motion` media query

## WCAG 2.1 AA Compliance Checklist

| Criterion | Status |
|-----------|--------|
| 1.1.1 Non-text Content | ✓ |
| 1.3.1 Info and Relationships | ✓ |
| 1.4.3 Contrast (Minimum) | ✓ |
| 2.1.1 Keyboard | ✓ |
| 2.1.2 No Keyboard Trap | ✓ |
| 2.4.1 Bypass Blocks | ✓ |
| 2.4.2 Page Titled | ✓ |
| 2.4.3 Focus Order | ✓ |
| 2.4.4 Link Purpose | ✓ |
| 2.4.6 Headings and Labels | ✓ |
| 2.4.7 Focus Visible | ✓ |
| 3.1.1 Language of Page | ✓ |
| 4.1.2 Name, Role, Value | ✓ |

See [ACCESSIBILITY.md](./ACCESSIBILITY.md) for detailed compliance documentation.

## Technologies Used

- **React** (v19.x) - UI library
- **Vite** - Build tool
- **React Router** (v7.x) - Client-side routing
- **CSS Modules** - Scoped component styles
- **Design tokens** - Centralized theme (colors, typography, spacing)

## Project Structure

```
budnew/
├── public/
│   └── assets/
│       └── figma/          # Exported Figma assets
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── SkipLink/
│   │   ├── Modal/
│   │   ├── Form/
│   │   └── Layout/
│   ├── pages/
│   ├── hooks/
│   │   └── useDocumentTitle.js
│   ├── theme/
│   │   ├── design-tokens.css
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── README.md
├── DESIGN-NOTES.md
├── ACCESSIBILITY.md
└── package.json
```

## Design-to-Code Decisions

- **Accessibility over pixel-perfection**: When Figma designs lack focus states or error states, we've added them per WCAG. See [DESIGN-NOTES.md](./DESIGN-NOTES.md).
- **Design tokens**: Values in `design-tokens.css` can be updated from Figma Dev Mode. Current values are WCAG-compliant placeholders.
- **Responsive breakpoints**: Mobile-first; breakpoints at 768px and 1200px. Adjust to match Figma frames when design is provided.

## Testing Instructions

### Manual Testing

1. **Keyboard navigation**: Use only Tab, Enter, Space, Escape. Verify all interactions work.
2. **Screen reader**: Test with NVDA (Windows), JAWS (Windows), or VoiceOver (Mac).
3. **Color contrast**: Validate with [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

### Automated Testing

1. **Lighthouse**: Run Accessibility audit in Chrome DevTools.
2. **axe DevTools**: Install extension and run scan.
3. **HTML validation**: Use [W3C Validator](https://validator.w3.org/).

See [ACCESSIBILITY.md](./ACCESSIBILITY.md) for full testing checklist.

## Known Issues / Future Improvements

- No Figma design file linked yet — design tokens are placeholders
- Consider adding automated axe-core tests in CI
- Add unit tests for form validation and modal behavior

## Credits and Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WebAIM](https://webaim.org/)
- [Inclusive Components](https://inclusive-components.design/)
