/**
 * SkipLink - WCAG 2.8.1 (Level A)
 * Allows keyboard users to bypass repeated navigation and jump to main content.
 * Visually hidden until focused; appears on first Tab press.
 */

export default function SkipLink({ href = '#main-content', children = 'Skip to main content' }) {
  return (
    <a href={href} className="skip-link">
      {children}
    </a>
  );
}
