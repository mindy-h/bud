import { useEffect, useRef, useCallback } from 'react';
import styles from './EraNav.module.css';

const eras = [
  { id: 'era-1860', year: '1860', label: 'The Foundation' },
  { id: 'era-1876', year: '1876', label: 'The Origin' },
  { id: 'era-1880', year: '1880s', label: 'Scaling Up' },
  { id: 'era-1920', year: '1920s', label: 'Prohibition' },
  { id: 'era-1933', year: '1933', label: 'The Return' },
  { id: 'era-1940', year: '1940–80s', label: 'Growth Era' },
  { id: 'era-2000', year: '2000s+', label: 'Modern Age' },
];

export default function EraNav({ activeEra }) {
  const navRef = useRef(null);

  useEffect(() => {
    if (!navRef.current || !activeEra) return;
    const active = navRef.current.querySelector(`[data-era="${activeEra}"]`);
    if (active) {
      active.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeEra]);

  const handleClick = useCallback((e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    const navH = navRef.current?.offsetHeight || 0;
    const top = target.getBoundingClientRect().top + window.scrollY - navH - 24;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  return (
    <nav ref={navRef} className={styles.nav} aria-label="Jump to era">
      <div className={styles.inner}>
        {eras.map((era) => (
          <a
            key={era.id}
            href={`#${era.id}`}
            data-era={era.id}
            className={`${styles.item} ${activeEra === era.id ? styles.itemActive : ''}`}
            onClick={(e) => handleClick(e, era.id)}
          >
            <span className={styles.year}>{era.year}</span>
            <span className={styles.label}>{era.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
