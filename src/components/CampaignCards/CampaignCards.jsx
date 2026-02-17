import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import woodBg from '../../assets/campaign_woodbg.webp';
import lagerBeer from '../../assets/lagerbeer.svg';
import foaImg from '../../assets/FOA.webp';
import foaImg400 from '../../assets/FOA-400w.webp';
import mlbImg from '../../assets/mlb.webp';
import mlbImg400 from '../../assets/mlb-400w.webp';
import styles from './CampaignCards.module.css';

const campaigns = [
  {
    id: 'folds-of-honor',
    image: foaImg,
    srcSet: `${foaImg400} 400w, ${foaImg} 800w`,
    sizes: '(max-width: 768px) 100vw, 50vw',
    title: 'Folds of Honor',
    description: 'Celebrating 15 years and $33M raised for military families.',
    href: '#',
  },
  {
    id: 'mlb-budweiser',
    image: mlbImg,
    srcSet: `${mlbImg400} 400w, ${mlbImg} 800w`,
    sizes: '(max-width: 768px) 100vw, 50vw',
    title: '2026 Major League Baseball\u2122 & Budweiser',
    description: 'Win prizes all season long!',
    href: '#',
  },
];

export default function CampaignCards() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.cardVisible);
          }
        });
      },
      { threshold: 0.15 }
    );

    const currentRefs = cardsRef.current;
    currentRefs.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      currentRefs.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section
      className={styles.section}
      style={{ backgroundImage: `url(${woodBg})` }}
      aria-label="What's New"
    >
      <img
        src={lagerBeer}
        alt=""
        className={styles.lagerBeer}
        aria-hidden="true"
      />

      <h2 className={styles.heading}>What&rsquo;s New</h2>

      <div className={styles.grid}>
        {campaigns.map((campaign, i) => (
          <a
            key={campaign.id}
            href={campaign.href}
            className={styles.card}
            ref={(el) => { cardsRef.current[i] = el; }}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <div className={styles.cardImage}>
              <img
                src={campaign.image}
                srcSet={campaign.srcSet}
                sizes={campaign.sizes}
                alt=""
                loading="lazy"
              />
            </div>
            <div className={styles.cardBody}>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>{campaign.title}</h3>
                <p className={styles.cardDescription}>{campaign.description}</p>
              </div>
              <span className={styles.cardArrow} aria-hidden="true">
                <ArrowRight size={20} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
