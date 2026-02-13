import texturefull from '../../assets/texturefull.png';
import iconsImg from '../../assets/icons.png';
import merchImg from '../../assets/merch.png';
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
          <img src={iconsImg} alt="Budweiser Clydesdales in the snow" />
        </div>
        <div className={styles.textBlock}>
          <h2 className={styles.heading}>American Icons Since 1933</h2>
          <p className={styles.body}>
            Go to the Clydesdales page for schedule, tours, and origin details.
          </p>
          <a href="#" className={styles.cta}>Learn About Clydesdales</a>
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
          <img src={merchImg} alt="Budweiser 150th anniversary hat and shirt" />
        </div>
      </div>
    </section>
  );
}
