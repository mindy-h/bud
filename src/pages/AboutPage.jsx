/**
 * AboutPage - Proper heading hierarchy
 */

import styles from './AboutPage.module.css';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function AboutPage() {
  useDocumentTitle('About');
  return (
    <div className={styles.container}>
      <h1>About Us</h1>
      <p className={styles.lead}>
        Budnew is a demonstration project showcasing how to build accessible
        web applications with React.
      </p>
      <section aria-labelledby="mission-heading">
        <h2 id="mission-heading">Our Mission</h2>
        <p>
          We believe the web should be accessible to everyone. This project
          implements WCAG 2.1 AA guidelines to ensure that people using
          assistive technologies can access all content and functionality.
        </p>
      </section>
      <section aria-labelledby="standards-heading">
        <h2 id="standards-heading">Accessibility Standards</h2>
        <p>
          We follow the Web Content Accessibility Guidelines (WCAG) 2.1 at Level
          AA. This includes proper contrast ratios, keyboard navigation, screen
          reader support, and semantic HTML structure.
        </p>
      </section>
    </div>
  );
}
