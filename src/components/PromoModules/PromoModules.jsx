import texturefull from '../../assets/texturefull.webp';
import iconsImg from '../../assets/icons.webp';
import iconsImg400 from '../../assets/icons-400w.webp';
import merchImg from '../../assets/merch.webp';
import merchImg400 from '../../assets/merch-400w.webp';
import styles from './PromoModules.module.css';

export default function PromoModules() {
  return (
    <section
      className={styles.section}
      style={{ backgroundImage: `url(${texturefull})` }}
      aria-label="Featured content"
    >
      {/* ===== Clydesdales module ===== */}
      <div className={styles.module}>
        <div className={styles.imageBlock}>
          <img
            src={iconsImg}
            srcSet={`${iconsImg400} 400w, ${iconsImg} 800w`}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Budweiser Clydesdales in the snow"
            loading="lazy"
          />
        </div>
        <div className={styles.textBlock}>
          <h2 className={styles.heading}>American Icons Since 1933</h2>
          <p className={styles.body}>
            Go to the Clydesdales page for schedule, tours, and origin details.
          </p>
          <a href="/clydesdales" className={styles.cta}>Learn About Clydesdales</a>
        </div>
      </div>

      {/* ===== Merch module ===== */}
      <div className={`${styles.module} ${styles.moduleReversed}`}>
        <div className={styles.textBlock}>
          <h2 className={styles.heading}>
            Originals,<br />Not Souvenirs
          </h2>
          <p className={styles.body}>
            Budweiser originals you actually wear, hats and shirts built for daily use.
            Shop the rest of the lineup: hoodies, jackets, beanies, bags, and more.
          </p>
          <a href="#" className={styles.cta}>Shop Bud Merch</a>
        </div>
        <div className={styles.imageBlock}>
          <img
            src={merchImg}
            srcSet={`${merchImg400} 400w, ${merchImg} 800w`}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Budweiser 150th anniversary hat and shirt"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
