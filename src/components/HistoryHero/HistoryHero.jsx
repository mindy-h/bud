import historyhero from '../../assets/historyhero.png';
import styles from './HistoryHero.module.css';

export default function HistoryHero() {
  return (
    <section className={styles.hero} aria-label="150 Years of Change">
      <img
        src={historyhero}
        alt="Budweiser 150th anniversary — 150 Years of Change, 1 Beer That Stayed True"
        className={styles.bgImage}
      />

      <div className={styles.content}>
        <div className={styles.textBlock}>
          <h1 className={styles.heading}>
            150 Years of Change.<br />
            1 Beer That Stayed True.
          </h1>
          <p className={styles.description}>
            From St. Louis to today, the brewing stayed honest so the feeling
            stayed familiar.
          </p>
        </div>
      </div>
    </section>
  );
}
