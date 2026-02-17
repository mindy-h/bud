import { useEffect, useRef, useState } from 'react';
import spiritImg from '../../assets/spirit.png';
import originsImg from '../../assets/origins.png';
import whyImg from '../../assets/why.png';
import styles from './AmericanIcons.module.css';

const cards = [
  {
    id: 'spirit',
    title: 'Spirit Of Resilience',
    description:
      'Clydesdales were bred in Scotland to pull real weight in fields and on farms. The Budweiser Clydesdales still move with that same calm, steady strength \u2013 you feel them before you even see the logo.',
    image: spiritImg,
  },
  {
    id: 'origins',
    title: 'Origins Of An Icon',
    description:
      "On April 7, 1933, a hitch of Budweiser Clydesdales pulled a red beer wagon through St. Louis to celebrate the end of Prohibition. The surprise gift from August A. Busch Jr. and Adolphus Busch III to their father turned the Clydesdales into part of Budweiser's story from that day on.",
    image: originsImg,
  },
  {
    id: 'why',
    title: 'Why Clydesdales Still Show Up',
    description:
      'Today the Budweiser Clydesdales appear at parades, stadiums, holiday events and in memorable commercials. Even if you drink less beer, seeing them roll in feels like a small reset \u2013 the same scene returning again in a feed full of new things.',
    image: whyImg,
  },
];

export default function AmericanIcons() {
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
      aria-label="American Icons"
      ref={sectionRef}
    >
      <h2 className={styles.heading}>American Icons</h2>

      <div className={styles.grid}>
        {cards.map((card, i) => (
          <div
            key={card.id}
            className={`${styles.card} ${visible ? styles.cardVisible : ''}`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <img
              src={card.image}
              alt={card.title}
              className={styles.cardImage}
              loading="lazy"
            />
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDescription}>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
