import { useEffect, useRef, useState } from 'react';
import texture3 from '../../assets/texture3.png';
import budcrown from '../../assets/budcrown.png';
import moaSvg from '../../assets/moa.svg';
import budweiserImg from '../../assets/budweiser.png';
import selectImg from '../../assets/select.png';
import select55Img from '../../assets/select55.png';
import zeroImg from '../../assets/zero.png';
import cheladaImg from '../../assets/chelada.png';
import styles from './OurBeers.module.css';

const products = [
  {
    id: 'budweiser',
    name: 'Budweiser',
    style: 'American-Style Lager,',
    abv: '5.0% ABV',
    image: budweiserImg,
  },
  {
    id: 'bud-zero',
    name: 'Budweiser Zero',
    style: 'Non-Alcoholic,',
    abv: '0.0% ABV',
    image: zeroImg,
  },
  {
    id: 'bud-select',
    name: 'Budweiser Select',
    style: 'Light Lager,',
    abv: '4.3% ABV',
    image: selectImg,
  },
  {
    id: 'bud-select-55',
    name: 'Budweiser Select 55',
    style: 'Ultra Light Lager,',
    abv: '2.4% ABV',
    image: select55Img,
  },
  {
    id: 'bud-chelada',
    name: 'Budweiser Chelada',
    style: 'Budweiser Chelada With',
    abv: 'Clamato, 5.0% ABV',
    image: cheladaImg,
  },
];

export default function OurBeers() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

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
      style={{ backgroundImage: `url(${texture3})` }}
      aria-label="Our Beers"
      ref={sectionRef}
    >
      <h2 className={styles.heading}>Our Beers</h2>

      <div className={styles.grid}>
        {products.map((product, i) => (
          <a
            key={product.id}
            href="#"
            className={`${styles.card} ${visible ? styles.cardVisible : ''}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className={styles.cardImageWrap}>
              <img
                src={budcrown}
                alt=""
                className={styles.crown}
                aria-hidden="true"
              />
              <img
                src={product.image}
                alt={product.name}
                className={styles.canImage}
              />
            </div>
            <div className={styles.cardBody}>
              <span className={styles.cardName}>{product.name}</span>
              <span className={styles.cardDetails}>
                {product.style}
              </span>
              <span className={styles.cardDetails}>
                {product.abv}
              </span>
            </div>
          </a>
        ))}
      </div>

      <img
        src={moaSvg}
        alt=""
        className={styles.moa}
        aria-hidden="true"
      />
    </section>
  );
}
