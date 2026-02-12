/**
 * PrivacyPage - Placeholder for Privacy Policy
 */

import styles from './AboutPage.module.css';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function PrivacyPage() {
  useDocumentTitle('Privacy Policy');
  return (
    <div className={styles.container}>
      <h1>Privacy Policy</h1>
      <p className={styles.lead}>
        Your privacy is important to us. This page outlines how we collect,
        use, and protect your information.
      </p>
      <section aria-labelledby="collection-heading">
        <h2 id="collection-heading">Information We Collect</h2>
        <p>
          We collect information you provide directly, such as when you fill out
          our contact form. This may include your name, email address, and
          message content.
        </p>
      </section>
    </div>
  );
}
