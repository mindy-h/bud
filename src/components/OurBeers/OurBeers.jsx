import { useEffect, useRef, useState } from 'react';
import texture3 from '../../assets/texture3.webp';
import budcrown from '../../assets/budcrown.webp';
import moaSvg from '../../assets/moa.svg';
import budweiserImg from '../../assets/budweiser.webp';
import selectImg from '../../assets/select.webp';
import select55Img from '../../assets/select55.webp';
import zeroImg from '../../assets/zero.webp';
import cheladaImg from '../../assets/chelada.webp';
import styles from './OurBeers.module.css';

const products = [
  {
    id: 'budweiser',
    name: 'Budweiser',
    tagline: 'American-Style Lager,',
    description: '5.0% ABV',
    image: budweiserImg,
    link: '/budweiser',
  },
  {
    id: 'bud-zero',
    name: 'Budweiser Zero',
    tagline: 'Non-Alcoholic,',
    description: '0.0% ABV',
    image: zeroImg,
    link: '/budweiser-zero',
  },
  {
    id: 'bud-select',
    name: 'Budweiser Select',
    tagline: 'Light Lager,',
    description: '4.3% ABV',
    image: selectImg,
    link: '/budweiser-select',
  },
  {
    id: 'bud-select-55',
    name: 'Budweiser Select 55',
    tagline: 'Ultra Light Lager,',
    description: '2.4% ABV',
    image: select55Img,
    link: '/budweiser-select-55',
  },
  {
    id: 'bud-chelada',
    name: 'Budweiser Chelada',
    tagline: 'Budweiser Chelada With',
    description: 'Clamato, 5.0% ABV',
    image: cheladaImg,
    link: '/budweiser-chelada',
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
        {products.map((product, i) => {
          const CardWrapper = product.link ? 'a' : 'div';
          const wrapperProps = product.link ? { href: product.link } : {};

          return (
            <CardWrapper
              key={product.id}
              {...wrapperProps}
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
                {product.tagline && (
                  <span className={styles.cardDetails}>{product.tagline}</span>
                )}
                {product.description && (
                  <span className={styles.cardDetails}>{product.description}</span>
                )}
              </div>
            </CardWrapper>
          );
        })}
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