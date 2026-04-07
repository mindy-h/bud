import bottleImg from '../../assets/bottle.webp';
import heroImg from '../../assets/hero_img.webp';
import texture1 from '../../assets/texture1.webp';
import texture2 from '../../assets/texture2.webp';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="The Great American Lager">
      {/* Left panel */}
      <div className={styles.leftPanel}>
        <div
          className={styles.textureOverlay}
          style={{ backgroundImage: `url(${texture1})` }}
          aria-hidden="true"
        />
        <div className={styles.leftContent}>
          <h1 className={styles.heading}>
            The Great<br />
            American<br />
            Lager
          </h1>
          <p className={styles.description}>
            From steam-powered breweries to today&rsquo;s neighborhood bars,
            we&rsquo;ve served generations through boom times, quiet years, and
            everything in between.
          </p>
          <a href="#" className={styles.cta}>
            Search Nearby
          </a>
        </div>
      </div>

      {/* Bottle - overlapping center (absolute on desktop, in-flow on mobile) */}
      <div className={styles.bottleWrapper} aria-hidden="true">
        <div
          className={styles.bottleBg}
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <img
          src={bottleImg}
          alt=""
          className={styles.bottleImage}
        />
      </div>

      {/* Right panel */}
      <div className={styles.rightPanel}>
        <div
          className={styles.textureOverlay}
          style={{ backgroundImage: `url(${texture2})` }}
          aria-hidden="true"
        />
        <img
          src={heroImg}
          alt=""
          className={styles.heroBackground}
          aria-hidden="true"
        />
        <p className={styles.since}>
          Since<br />
          <span className={styles.year}>1876</span>
        </p>
      </div>
    </section>
  );
}
