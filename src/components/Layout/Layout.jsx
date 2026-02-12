/**
 * Layout - Main layout wrapper with SkipLink, Header, main landmark
 * Ensures proper document structure for screen readers
 */

import { Outlet } from 'react-router-dom';
import SkipLink from '../SkipLink/SkipLink';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css';

export default function Layout() {
  return (
    <>
      <SkipLink href="#main-content" />
      <Header />
      <main id="main-content" className={styles.main} role="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
