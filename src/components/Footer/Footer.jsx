/**
 * Footer - Accessible footer with complementary navigation
 * Uses <footer> landmark; secondary nav has distinct aria-label
 */

import { Link, NavLink } from 'react-router-dom';
import styles from './Footer.module.css';

const footerLinks = [
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms of Service' },
  { to: '/accessibility', label: 'Accessibility' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              Budnew
            </Link>
            <p className={styles.tagline}>
              Accessible by design. Built for everyone.
            </p>
          </div>
          <nav
            className={styles.nav}
            aria-label="Footer navigation"
          >
            <ul className={styles.linkList} role="list">
              {footerLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink to={to} className={styles.link}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Budnew. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
