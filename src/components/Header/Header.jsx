/**
 * Header - Accessible navigation with semantic HTML
 * Uses <header> and <nav> landmarks for screen readers
 * All interactive elements are keyboard accessible
 */

import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/demo-form', label: 'Demo Form' },
];

export default function Header() {
  return (
    <header className={styles.header} role="banner">
      <div className={styles.container}>
        <NavLink to="/" className={styles.logo} aria-label="Budnew - Home">
          Budnew
        </NavLink>
        <nav className={styles.nav} aria-label="Main navigation">
          <ul className={styles.navList} role="list">
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                  }
                  end={to === '/'}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
