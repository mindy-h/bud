/**
 * AccessibilityPage - Our commitment to accessibility
 */

import styles from './AboutPage.module.css';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function AccessibilityPage() {
  useDocumentTitle('Accessibility');
  return (
    <div className={styles.container}>
      <h1>Accessibility Statement</h1>
      <p className={styles.lead}>
        We are committed to ensuring digital accessibility for people with
        disabilities. We continually improve the user experience for everyone
        and apply the relevant accessibility standards.
      </p>
      <section aria-labelledby="standards-heading">
        <h2 id="standards-heading">Conformance</h2>
        <p>
          This website aims to conform to WCAG 2.1 Level AA. We have
          implemented skip links, proper heading hierarchy, keyboard
          navigation support, focus indicators, and semantic HTML throughout.
        </p>
      </section>
      <section aria-labelledby="feedback-heading">
        <h2 id="feedback-heading">Feedback</h2>
        <p>
          If you encounter accessibility barriers, please contact us. We
          welcome your feedback and will respond within a reasonable timeframe.
        </p>
      </section>
    </div>
  );
}
