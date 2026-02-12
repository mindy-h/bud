/**
 * HomePage - Proper heading hierarchy (h1 only once per page)
 */

import { useState } from 'react';
import Modal from '../components/Modal/Modal';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import styles from './HomePage.module.css';

export default function HomePage() {
  useDocumentTitle('Home');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.container}>
      <h1>Welcome to Budnew</h1>
      <p className={styles.lead}>
        A fully accessible website built with React and WCAG 2.1 AA compliance
        in mind.
      </p>
      <section className={styles.section} aria-labelledby="features-heading">
        <h2 id="features-heading">Features</h2>
        <ul className={styles.featureList}>
          <li>Keyboard-accessible navigation</li>
          <li>Skip link for keyboard users</li>
          <li>Semantic HTML structure</li>
          <li>Focus indicators on all interactive elements</li>
          <li>Form validation with accessible error messages</li>
          <li>Modal with proper focus management</li>
        </ul>
      </section>
      <section className={styles.section} aria-labelledby="demo-heading">
        <h2 id="demo-heading">Try the Modal</h2>
        <p>
          <button
            type="button"
            className={styles.button}
            onClick={() => setIsModalOpen(true)}
          >
            Open Dialog
          </button>
        </p>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Accessible Modal"
          closeLabel="Close dialog"
        >
          <p>
            This modal demonstrates proper focus trap, Escape key to close, and
            focus return. Press <kbd>Escape</kbd> or click the close button to
            dismiss.
          </p>
        </Modal>
      </section>
    </div>
  );
}
