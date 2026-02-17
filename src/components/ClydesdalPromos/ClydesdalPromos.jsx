import wsrLogo from '../../assets/wsr.png';
import wsrImg from '../../assets/wsr_img.png';
import scheduleImg from '../../assets/schedule.png';
import styles from './ClydesdalPromos.module.css';

export default function ClydesdalPromos() {
  return (
    <section className={styles.section} aria-label="Visit the Clydesdales">
      {/* ===== Warm Springs Ranch module ===== */}
      <div className={styles.module}>
        <div className={styles.imageBlock}>
          <img
            src={wsrImg}
            alt="Budweiser Clydesdale mare and foal at Warm Springs Ranch"
            loading="lazy"
          />
        </div>
        <div className={styles.textBlock}>
          <img
            src={wsrLogo}
            alt="Warm Springs Ranch"
            className={styles.logo}
            loading="lazy"
          />
          <h2 className={styles.heading}>
            Where Budweiser Clydesdales are Raised
          </h2>
          <p className={styles.body}>
            Warm Springs Ranch in Missouri is the official home of the Budweiser
            Clydesdales. On more than 300 acres, mares, foals and stallions are
            bred, trained and cared for by a dedicated team. Tours let you stand
            close to the Clydesdales and see how a tradition that started in 1933
            is being prepared for the next generation.
          </p>
          <a href="#" className={styles.cta}>Go to Warm Springs Ranch</a>
        </div>
      </div>

      {/* ===== Brewery & Schedule module (reversed) ===== */}
      <div className={styles.module}>
        <div className={styles.textBlock}>
          <h2 className={styles.heading}>
            See The Clydesdales and the Brewery Story
          </h2>
          <p className={styles.body}>
            At the Budweiser brewery, you can visit the historic stables, walk
            the brewhouse and learn how the Budweiser Clydesdales fit into the
            larger Budweiser story. Come for the tour, stay for the beer, and
            feel how this long-running tradition still lives inside a modern
            brewery.
          </p>
          <a href="#" className={styles.cta}>View Schedule</a>
        </div>
        <div className={styles.imageBlock}>
          <img
            src={scheduleImg}
            alt="Budweiser Clydesdale in the historic stables"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
