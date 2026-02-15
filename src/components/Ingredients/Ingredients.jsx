import { useEffect, useRef, useState } from 'react';
import ingredientsBg from '../../assets/ingredients_bg.png';
import moaSvg from '../../assets/moa.svg';
import styles from './Ingredients.module.css';

export default function Ingredients({ items }) {
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
    <section
      className={styles.section}
      style={{ backgroundImage: `url(${ingredientsBg})` }}
      aria-label="Time-Tested Ingredients"
      ref={sectionRef}
    >

      <h2 className={styles.heading}>Time-Tested Ingredients</h2>
      <p className={styles.subheading}>
        Every Budweiser starts with four simple ingredients, carefully selected
        and American-grown.{' '}
        <a href="#">Learn about our farming practices &rarr;</a>
      </p>

      <div className={styles.grid}>
        {items.map((item, i) => (
          <div
            key={item.name}
            className={`${styles.card} ${visible ? styles.cardVisible : ''}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className={styles.cardImageWrap} aria-hidden="true">
              <div className={styles.cardCircle} />
              <img
                src={item.image}
                alt=""
                className={styles.cardImage}
                loading="lazy"
              />
            </div>
            <div className={styles.cardBody}>
              <span className={styles.cardName}>{item.name}</span>
              <span className={styles.cardDescription}>
                {item.description}
              </span>
            </div>
          </div>
        ))}
      </div>

      <img
        src={moaSvg}
        alt=""
        className={styles.moa}
        aria-hidden="true"
        loading="lazy"
      />
    </section>
  );
}
