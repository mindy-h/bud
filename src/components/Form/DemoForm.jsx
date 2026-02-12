/**
 * DemoForm - Accessible form with validation
 * - All inputs have associated labels (explicit or aria-label)
 * - Error states announced via aria-live
 * - Required fields marked with aria-required and visual indicator
 * - Error messages linked via aria-describedby
 */

import { useState } from 'react';
import styles from './DemoForm.module.css';

const initialFormState = {
  name: '',
  email: '',
  message: '',
};

const initialErrors = {
  name: '',
  email: '',
  message: '',
};

export default function DemoForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrors);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const validate = () => {
    const newErrors = { ...initialErrors };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validate()) {
      setSubmitStatus('error');
      return;
    }

    // Simulate submission
    setSubmitStatus('success');
    setFormData(initialFormState);
    setErrors(initialErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
      noValidate
      aria-labelledby="form-title"
    >
      <h2 id="form-title" className={styles.title}>
        Contact Form
      </h2>

      {/* Live region for status updates - announced to screen readers */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className={styles.srOnly}
      >
        {submitStatus === 'success' && 'Form submitted successfully.'}
        {submitStatus === 'error' && 'Please fix the errors before submitting.'}
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-name">
          Name <span aria-hidden="true">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={errors.name ? styles.inputError : ''}
          autoComplete="name"
        />
        {errors.name && (
          <span id="name-error" className={styles.error} role="alert">
            {errors.name}
          </span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-email">
          Email <span aria-hidden="true">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={errors.email ? styles.inputError : ''}
          autoComplete="email"
        />
        {errors.email && (
          <span id="email-error" className={styles.error} role="alert">
            {errors.email}
          </span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-message">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={errors.message ? styles.inputError : ''}
          rows={4}
        />
        {errors.message && (
          <span id="message-error" className={styles.error} role="alert">
            {errors.message}
          </span>
        )}
      </div>

      <div className={styles.actions}>
        <button type="submit" className={styles.submitButton}>
          Send Message
        </button>
        <button
          type="button"
          onClick={() => {
            setFormData(initialFormState);
            setErrors(initialErrors);
            setSubmitStatus(null);
          }}
          className={styles.resetButton}
        >
          Reset
        </button>
      </div>

      {submitStatus === 'success' && (
        <p className={styles.successMessage} role="status">
          Thank you! Your message has been sent successfully.
        </p>
      )}
    </form>
  );
}
