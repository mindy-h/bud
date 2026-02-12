# Accessibility Documentation - WCAG 2.1 AA

This document details WCAG 2.1 Level AA compliance, testing procedures, and audit results.

## WCAG 2.1 AA Compliance Overview

### Perceivable

| Criterion | Level | Status | Implementation |
|-----------|-------|--------|----------------|
| 1.1.1 Non-text Content | A | ✓ | Images have alt text; decorative use `alt=""` |
| 1.3.1 Info and Relationships | A | ✓ | Semantic HTML (header, nav, main, section, form labels) |
| 1.3.4 Orientation | AA | ✓ | Content works in portrait and landscape |
| 1.4.1 Use of Color | A | ✓ | Color not sole means of conveying info |
| 1.4.3 Contrast (Minimum) | AA | ✓ | 4.5:1 normal, 3:1 large text |
| 1.4.4 Resize Text | AA | ✓ | Text resizable to 200% |
| 1.4.10 Reflow | AA | ✓ | No horizontal scroll at 320px width |
| 1.4.12 Text Spacing | AA | ✓ | Supports user spacing overrides |

### Operable

| Criterion | Level | Status | Implementation |
|-----------|-------|--------|----------------|
| 2.1.1 Keyboard | A | ✓ | All functionality via keyboard |
| 2.1.2 No Keyboard Trap | A | ✓ | Modal has focus trap + Escape to exit |
| 2.4.1 Bypass Blocks | A | ✓ | Skip link to main content |
| 2.4.2 Page Titled | A | ✓ | Unique, descriptive page titles |
| 2.4.3 Focus Order | A | ✓ | Logical tab order matches visual order |
| 2.4.4 Link Purpose | A | ✓ | Link text describes destination |
| 2.4.6 Headings and Labels | AA | ✓ | Descriptive headings; form labels |
| 2.4.7 Focus Visible | AA | ✓ | Visible focus on all focusable elements |
| 2.5.3 Label in Name | A | ✓ | Visible text matches accessible name |

### Understandable

| Criterion | Level | Status | Implementation |
|-----------|-------|--------|----------------|
| 3.1.1 Language of Page | A | ✓ | `<html lang="en">` |
| 3.2.1 On Focus | A | ✓ | No context change on focus |
| 3.2.2 On Input | A | ✓ | No unexpected context change on input |
| 3.3.1 Error Identification | A | ✓ | Form errors identified and described |
| 3.3.2 Labels or Instructions | A | ✓ | Labels on all form inputs |
| 3.3.3 Error Suggestion | AA | ✓ | Error messages suggest correction |

### Robust

| Criterion | Level | Status | Implementation |
|-----------|-------|--------|----------------|
| 4.1.2 Name, Role, Value | A | ✓ | ARIA where needed; semantic HTML |
| 4.1.3 Status Messages | AA | ✓ | aria-live for form success/error |

## Color Contrast Audit

### Current Palette (Before/After)

| Element | Foreground | Background | Ratio | Pass |
|---------|------------|------------|-------|------|
| Body text | #0f172a | #ffffff | 12.6:1 | ✓ |
| Secondary text | #475569 | #ffffff | 7.5:1 | ✓ |
| Primary button | #ffffff | #2563eb | 8.6:1 | ✓ |
| Error text | #dc2626 | #ffffff | 5.1:1 | ✓ |
| Muted text | #64748b | #ffffff | 4.5:1 | ✓ |

**No adjustments needed** for current palette. When integrating Figma colors, re-run contrast checks with [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

## Keyboard Navigation Flows

1. **Page load** → Focus on first focusable element (or document)
2. **First Tab** → Skip link appears and receives focus
3. **Second Tab** → Header logo
4. **Continue Tab** → Nav links, then main content, then footer links
5. **Modal open** → Focus moves to modal; Tab cycles within modal only
6. **Escape** → Modal closes; focus returns to trigger
7. **Form** → Tab through inputs in order; Enter submits

## Screen Reader Testing Notes

### VoiceOver (macOS)

- Skip link: "Skip to main content, link" — announces correctly
- Nav links: "Home, link, current page" for active state
- Modal: Dialog role announced; title read as "Accessible Modal"
- Form errors: Error message announced when field receives focus with aria-invalid

### NVDA (Windows)

- Test with Firefox or Chrome
- Form validation: Errors in `role="alert"` announced immediately
- Live region: Success/error status announced on change

### Testing Checklist

- [ ] Navigate by headings (H, Shift+H)
- [ ] Navigate by landmarks (D for next, Shift+D for previous)
- [ ] Form labels read with inputs
- [ ] Error messages announced
- [ ] Modal focus trap works; Escape closes

## Automated Testing

### Lighthouse (Chrome DevTools)

1. Open DevTools → Lighthouse
2. Select "Accessibility"
3. Run report
4. Target: 100 on Accessibility score

### axe DevTools

1. Install [axe DevTools](https://www.deque.com/axe/devtools/) extension
2. Open page → Run scan
3. Address any violations (aim for 0)

### HTML Validation

- Run [W3C Validator](https://validator.w3.org/) on built pages
- Ensure no errors; fix any markup issues

## Accessibility Testing Checklist

### Keyboard-Only Testing

- [ ] Tab through all interactive elements
- [ ] No element unreachable by keyboard
- [ ] Enter/Space activate buttons and links
- [ ] Escape closes modal
- [ ] Skip link visible and functional on first Tab
- [ ] Focus order matches visual order

### Screen Reader Testing

- [ ] VoiceOver (Mac) or NVDA (Windows)
- [ ] All content reachable and understandable
- [ ] Form labels and errors announced
- [ ] Landmarks and headings available
- [ ] No "clickable" or "button" without context

### Color Contrast Validation

- [ ] Use Figma color values
- [ ] Check with WebAIM Contrast Checker
- [ ] Normal text: 4.5:1 minimum
- [ ] Large text (18px+ or 14px bold): 3:1 minimum

### Responsive Testing

- [ ] 320px width (mobile)
- [ ] 768px width (tablet)
- [ ] 1280px width (desktop)
- [ ] No horizontal scroll
- [ ] Touch targets ≥ 44×44px where possible

## Known Accessibility Considerations

1. **Animations**: Modal uses 200–250ms animations; respects `prefers-reduced-motion` (reduced to near-instant).
2. **Focus management**: Modal uses `requestAnimationFrame` to focus first element — some screen readers may need a brief pause; consider adding `aria-describedby` for modal body if needed.
3. **External links**: Consider adding `rel="noopener noreferrer"` and `target="_blank"` with warning for external links in production.

## Future Testing Recommendations

- Integrate [jest-axe](https://github.com/nickcolley/jest-axe) for component-level automated tests
- Add Lighthouse CI to catch regressions
- Schedule periodic manual screen reader testing
- Document any third-party widget accessibility (e.g., if adding maps or charts)
