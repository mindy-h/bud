/**
 * DemoFormPage - Standalone form demo
 */

import DemoForm from '../components/Form/DemoForm';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import styles from './DemoFormPage.module.css';

export default function DemoFormPage() {
  useDocumentTitle('Demo Form');
  return (
    <div className={styles.container}>
      <h1>Demo Form</h1>
      <p className={styles.lead}>
        This form demonstrates accessible form patterns: associated labels,
        error states with aria-invalid, live region for status updates, and
        validation feedback.
      </p>
      <DemoForm />
    </div>
  );
}
