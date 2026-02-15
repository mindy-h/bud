import { useEffect, useRef, useState } from 'react';
import styles from './ProductHero.module.css';

export default function ProductHero({
  name,
  description,
  canImage,
  texture,
  watermark,
  sizes,
  sizesText,
  ctaLabel,
  ctaHref,
}) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return (
    <section className={styles.hero} aria-label={name} ref={sectionRef}>
      {/* Full-width texture overlay on red bg */}
      <div
        className={styles.textureOverlay}
        style={{ backgroundImage: `url(${texture})` }}
        aria-hidden="true"
      />

      {/* AB Crest watermark — upper-left, angled */}
      <img
        src={watermark}
        alt=""
        className={styles.watermark}
        aria-hidden="true"
        loading="lazy"
      />

      {/* Left area — can image */}
      <div className={styles.leftPanel}>
        <img
          src={canImage}
          alt={`${name} can`}
          className={`${styles.canImage} ${visible ? styles.canVisible : ''}`}
        />
      </div>

      {/* Right panel — product info */}
      <div className={styles.rightPanel}>
        <h1 className={styles.productName}>{name}</h1>
        <p className={styles.productDescription}>{description}</p>

        <p className={styles.sizesLabel}>{sizesText}</p>
        <div className={styles.sizesGrid}>
          {sizes.map((size) => (
            <div key={size.id || size.label} className={styles.sizeItem}>
              <img
                src={size.icon}
                alt=""
                className={styles.sizeIcon}
                aria-hidden="true"
                loading="lazy"
              />
              <span className={styles.sizeText}>{size.label}</span>
            </div>
          ))}
        </div>

        <a href={ctaHref} className={styles.cta}>
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}
