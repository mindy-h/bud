import { useEffect, useState } from 'react';
import { client } from '../../sanity/client';
import bottleImg from '../../assets/bottle.webp';
import heroImg from '../../assets/hero_img.webp';
import texture1 from '../../assets/texture1.webp';
import texture2 from '../../assets/texture2.webp';
import styles from './Hero.module.css';

/** Full hero layout when Sanity has no `hero` doc or the request fails. */
const FALLBACK_HERO = {
  headline: 'The Great American Lager',
  subheadline:
    'The same commitment to quality since 1876 — brewed for those who give everything their best.',
  ctaText: 'Explore 150 Years',
  ctaLink: '/history',
};

export default function Hero() {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = `*[_type == "hero"][0]{
      _id,
      _type,
      headline,
      subheadline,
      ctaText,
      ctaLink,
      backgroundImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`;

    client
      .fetch(query)
      .then((data) => {
        setHeroData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching hero:', err);
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className={styles.hero} aria-label="Loading">
        <div className={styles.leftPanel}>
          <div className={styles.leftContent}>
            <div>Loading...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error('Failed to load hero content', error);
  }

  const data = error || !heroData ? FALLBACK_HERO : heroData;

  return (
    <section className={styles.hero} aria-label={data.headline}>
      {/* Left panel */}
      <div className={styles.leftPanel}>
        <div
          className={styles.textureOverlay}
          style={{ backgroundImage: `url(${texture1})` }}
          aria-hidden="true"
        />
        <div className={styles.leftContent}>
          <h1 className={styles.heading}>
            {data.headline.split(' ').map((word, i) => (
              <span key={i}>
                {word}
                {i < data.headline.split(' ').length - 1 && <br />}
              </span>
            ))}
          </h1>
          {data.subheadline && (
            <p className={styles.description}>
              {data.subheadline}
            </p>
          )}
          {data.ctaText && data.ctaLink && (
            <a href={data.ctaLink} className={styles.cta}>
              {data.ctaText}
            </a>
          )}
        </div>
      </div>

      {/* Bottle - overlapping center */}
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