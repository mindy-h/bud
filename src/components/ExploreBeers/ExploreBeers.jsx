import { useEffect, useRef, useState } from 'react';
import textureFull from '../../assets/texturefull.webp';
import budcrown from '../../assets/budcrown.webp';
import budweiserImg from '../../assets/budweiser.webp';
import selectImg from '../../assets/select.webp';
import select55Img from '../../assets/select55.webp';
import zeroImg from '../../assets/zero.webp';
import cheladaImg from '../../assets/chelada.webp';
import styles from './ExploreBeers.module.css';

const allProducts = [
  {
    id: 'budweiser',
    name: 'Budweiser',
    style: 'American-Style Lager,',
    abv: '5.0% ABV',
    image: budweiserImg,
    href: '/budweiser',
  },
  {
    id: 'bud-zero',
    name: 'Budweiser Zero',
    style: 'Non-Alcoholic,',
    abv: '0.0% ABV',
    image: zeroImg,
    href: '#',
  },
  {
    id: 'bud-select',
    name: 'Budweiser Select',
    style: 'Light Lager,',
    abv: '4.3% ABV',
    image: selectImg,
    href: '#',
  },
  {
    id: 'bud-select-55',
    name: 'Budweiser Select 55',
    style: 'Ultra Light Lager,',
    abv: '2.4% ABV',
    image: select55Img,
    href: '#',
  },
  {
    id: 'bud-chelada',
    name: 'Budweiser Chelada',
    style: 'Budweiser Chelada With',
    abv: 'Clamato, 5.0% ABV',
    image: cheladaImg,
    href: '#',
  },
];

export default function ExploreBeers({ exclude }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const products = allProducts.filter((p) => p.id !== exclude);

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
      style={{ backgroundImage: `url(${textureFull})` }}
      aria-label="Explore Our Other Beers"
      ref={sectionRef}
    >
      <h2 className={styles.heading}>Explore Our Other Beers</h2>

      <div className={styles.grid}>
        {products.map((product, i) => (
          <a
            key={product.id}
            href={product.href}
            className={`${styles.card} ${visible ? styles.cardVisible : ''}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className={styles.cardImageWrap}>
              <img
                src={budcrown}
                alt=""
                className={styles.crown}
                aria-hidden="true"
                loading="lazy"
              />
              <img
                src={product.image}
                alt={product.name}
                className={styles.canImage}
                loading="lazy"
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
    </section>
  );
}
