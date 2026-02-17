import { useState, useEffect, useCallback } from 'react';
import budLogo from '../../assets/budlogo.webp';
import styles from './Header.module.css';

const menuColumns = [
  {
    heading: 'Our Beers',
    links: [
      { label: 'Budweiser', href: '/budweiser' },
      { label: 'Budweiser Select', href: '/budweiser-select' },
      { label: 'Budweiser Select 55', href: '/budweiser-select-55' },
      { label: 'Budweiser Zero', href: '/budweiser-zero' },
      { label: 'Budweiser Chelada', href: '/budweiser-chelada' },
    ],
  },
  {
    heading: 'Campaigns',
    links: [
      { label: 'Campaign 1', href: '#' },
      { label: 'Campaign 2', href: '#' },
      { label: 'Campaign 3', href: '#' },
    ],
  },
  {
    heading: 'About Us',
    links: [
      { label: 'Clydesdales', href: '/clydesdales' },
      { label: 'Contact Us', href: '#' },
      { label: 'History', href: '#' },
      { label: 'Sustainability', href: '#' },
    ],
  },
  {
    heading: 'Engage',
    links: [
      { label: 'Buy Merch', href: '#' },
    ],
  },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen, closeMenu]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <header className={styles.header} role="banner">
      <div className={styles.navBar}>
        {/* Left: Menu toggle */}
        <button
          type="button"
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="main-menu"
          aria-label={isMenuOpen ? 'Close main menu' : 'Open main menu'}
        >
          {isMenuOpen ? (
            <svg className={styles.menuIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg className={styles.menuIcon} width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
              <path d="M1 1h20M1 8h20M1 15h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
          <span className={styles.menuLabel}>Main Menu</span>
        </button>

        {/* Center: Logo */}
        <a href="/" className={styles.logo} aria-label="Budweiser Home">
          <img src={budLogo} alt="Budweiser" className={styles.logoImage} />
        </a>

        {/* Right: Actions */}
        <div className={styles.actions}>
          <a href="#" className={styles.actionLink} aria-label="Find Your Bud">
            <svg className={styles.actionIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className={styles.actionLabel}>Find Your Bud</span>
          </a>
          <button type="button" className={styles.actionLink} aria-label="Select language, currently English">
            <svg className={styles.actionIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <path d="M2 12h20M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10c-2.5-3-4-6.5-4-10s1.5-7 4-10z" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span className={styles.actionLabel}>EN</span>
          </button>
        </div>
      </div>

      {/* Menu dropdown panel */}
      <nav
        id="main-menu"
        className={`${styles.menuPanel} ${isMenuOpen ? styles.menuPanelOpen : ''}`}
        aria-label="Main menu"
        aria-hidden={!isMenuOpen}
      >
        <div className={styles.menuContent}>
          {menuColumns.map((column) => (
            <div key={column.heading} className={styles.menuColumn}>
              <h2 className={styles.menuHeading}>{column.heading}</h2>
              <ul className={styles.menuList}>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={styles.menuLink}
                      tabIndex={isMenuOpen ? 0 : -1}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Connect / Social column */}
          <div className={styles.menuColumn}>
            <h2 className={styles.menuHeading}>Connect</h2>
            <ul className={styles.socialList}>
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className={styles.socialLink}
                    aria-label={social.label}
                    tabIndex={isMenuOpen ? 0 : -1}
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
