/**
 * TermsPage - Placeholder for Terms of Service
 */

import styles from './AboutPage.module.css';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function TermsPage() {
  useDocumentTitle('Terms of Service');
  return (
    <div className={styles.container}>
      <h1>Terms of Service</h1>
      <p className={styles.lead}>
        By using this website, you agree to our terms of service.
      </p>
      <section aria-labelledby="usage-heading">
        <h2 id="usage-heading">Usage</h2>
        <p>
          This is a demonstration project. Use it responsibly and in accordance
          with applicable laws.
        </p>
      </section>
    </div>
  );
}
