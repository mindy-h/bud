/**
 * ContactPage - Contact information with proper structure
 */

import DemoForm from '../components/Form/DemoForm';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  useDocumentTitle('Contact');
  return (
    <div className={styles.container}>
      <h1>Contact</h1>
      <p className={styles.lead}>
        Get in touch with us. Fill out the form below and we&apos;ll respond as
        soon as possible.
      </p>
      <div className={styles.content}>
        <aside
          className={styles.aside}
          aria-labelledby="contact-info-heading"
        >
          <h2 id="contact-info-heading">Contact Information</h2>
          <address className={styles.address}>
            <p>Email: contact@budnew.example</p>
            <p>Phone: (555) 123-4567</p>
            <p>Address: 123 Accessibility Street, Web City</p>
          </address>
        </aside>
        <section aria-labelledby="form-heading">
          <h2 id="form-heading">Send a Message</h2>
          <DemoForm />
        </section>
      </div>
    </div>
  );
}
