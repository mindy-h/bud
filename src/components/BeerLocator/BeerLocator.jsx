import { useState } from 'react';
import { Search } from 'lucide-react';
import locatorbg from '../../assets/locatorbg.svg';
import styles from './BeerLocator.module.css';

export default function BeerLocator() {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section
      className={styles.section}
      aria-label="Find a Bud Near You"
    >
      <div className={styles.card}>
        <img
          src={locatorbg}
          alt=""
          className={styles.cardBg}
          aria-hidden="true"
          loading="lazy"
        />

        <div className={styles.content}>
          <h2 className={styles.heading}>Find a Bud Near You</h2>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputWrap}>
              <Search size={20} className={styles.searchIcon} aria-hidden="true" />
              <input
                type="text"
                className={styles.input}
                placeholder="Enter zip code or address"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Enter zip code or address"
              />
            </div>
            <button type="submit" className={styles.button}>
              Search Nearby
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
