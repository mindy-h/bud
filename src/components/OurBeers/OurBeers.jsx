import { useEffect, useRef, useState } from 'react';
import { client, urlFor } from '../../sanity/client';
import texture3 from '../../assets/texture3.webp';
import budcrown from '../../assets/budcrown.webp';
import moaSvg from '../../assets/moa.svg';
import styles from './OurBeers.module.css';

export default function OurBeers() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "brew" && featured == true] | order(order asc) {
      _id,
      name,
      tagline,
      description,
      image,
      backgroundColor,
      link,
      order
    }`;

    client
      .fetch(query)
      .then((data) => {
        console.log('Brews fetched:', data);
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching brews:', err);
        setLoading(false);
      });
  }, []);

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

  if (loading) {
    return (
      <section
        className={styles.section}
        style={{ backgroundImage: `url(${texture3})` }}
        aria-label="Our Beers"
      >
        <h2 className={styles.heading}>Our Beers</h2>
        <div className={styles.grid}>
          <p>Loading...</p>
        </div>
      </section>
    );
  }

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
              key={product._id}
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
  src={urlFor(product.image).width(800).url()}
  alt={product.image.alt || product.name}
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