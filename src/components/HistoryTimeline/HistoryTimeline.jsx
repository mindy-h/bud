import { useEffect, useRef, useState } from 'react';
import styles from './HistoryTimeline.module.css';

const ERAS = [
  {
    id: 'era-1860',
    number: '1860',
    chapter: 'The Beginning',
    title: 'Building an American Icon',
    events: [
      {
        year: '1860',
        tag: 'The Foundation',
        headline: 'Building an American Icon',
        copy: 'Eberhard Anheuser purchases the Bavarian Brewery. In 1864, Eberhard\u2019s son-in-law, Adolphus Busch, joins the business and the two set about building what would become Anheuser\u2011Busch.',
        gradient: 'linear-gradient(135deg, #12080a 0%, #1e1210 40%, #0a0604 100%)',
        stamp: '1860',
      },
    ],
  },
  {
    id: 'era-1876',
    number: '1876',
    chapter: 'Chapter One',
    title: 'Carl Conrad & The First Budweiser',
    events: [
      {
        year: '1876',
        tag: 'The Beginning',
        headline: 'Carl Conrad and the First Budweiser',
        copy: 'In the 1870s, beer quality changed from town to town. A good glass one night didn\u2019t promise much the next. Working with St. Louis bottler Carl Conrad, the brewery created a lighter lager and put one name on it: Budweiser. That first decision to stand behind a single taste is the starting point of the 150\u2011year thread that still reaches all the way to 2026.',
        gradient: 'linear-gradient(135deg, #1a0f05 0%, #2c1a08 40%, #0e0805 100%)',
        stamp: '1876',
      },
    ],
  },
  {
    id: 'era-1880',
    number: '1880s',
    chapter: 'Chapter Two',
    title: 'Scaling Up Without Thinning Out',
    events: [
      {
        year: '1880 \u2013 1901',
        tag: 'Expansion',
        headline: 'A Regional Lager Becomes a National Name',
        copy: 'As cities grew and rail lines stretched across the country, \u201Cbigger\u201D often meant \u201Ccheaper.\u201D Under Adolphus Busch, the brewery invested in cold transport and brewing technology so more people could drink Budweiser without shortening the process or cutting corners. That\u2019s how a regional lager started to feel like a fixture, not just another local name.',
        gradient: 'linear-gradient(145deg, #0d0e1a 0%, #1a1f2e 40%, #0a0c14 100%)',
        stamp: '1880s',
      },
    ],
  },
  {
    id: 'era-1920',
    number: '1920',
    chapter: 'Chapter Three',
    title: 'Keeping the Craft Quietly Alive',
    events: [
      {
        year: '1920 \u2013 1933',
        tag: 'Prohibition Era',
        headline: 'Survival Without Compromise',
        copy: 'Prohibition shut down legal beer overnight, but it didn\u2019t erase what people knew. Budweiser shifted to near\u2011beer and other products, while inside the brewery they kept brewers, equipment and recipes intact. Those quiet years are why, when the doors opened again, Budweiser could come back as itself instead of starting from scratch.',
        gradient: 'linear-gradient(150deg, #0a0a14 0%, #12101a 40%, #060810 100%)',
        stamp: '1920s',
      },
    ],
  },
  {
    id: 'era-1933',
    number: '1933',
    chapter: 'Chapter Four',
    title: 'Clydesdales and the First Cases Back',
    events: [
      {
        year: '1933',
        tag: 'Repeal & Return',
        headline: 'A Red Wagon Through City Streets',
        copy: 'When Prohibition ended, Budweiser didn\u2019t just ease back onto shelves. Clydesdales pulled a red wagon through city streets, delivering the first legal cases as a kind of thank you and fresh start. That choice turned a business restart into a living tradition, one that still shows up today whenever people want to mark a new chapter.',
        gradient: 'linear-gradient(135deg, #180a06 0%, #241208 40%, #100806 100%)',
        stamp: '1933',
      },
    ],
  },
  {
    id: 'era-1940',
    number: '1940s\u20131980s',
    chapter: 'Chapter Five',
    title: 'Growing With Everyday Life',
    events: [
      {
        year: '1940s \u2013 1980s',
        tag: 'Cultural Expansion',
        headline: 'From Ballparks to Backyard BBQs',
        copy: 'From radios to stadium lights, how people gathered kept changing. Budweiser expanded from one brewery in St. Louis to many, and from local ads to \u201CThis Bud\u2019s For You\u201D echoing in ballparks, BBQs and small\u2011town bars. Even as the footprint grew, the pour stayed familiar.',
        gradient: 'linear-gradient(135deg, #0e1206 0%, #1a1e0a 40%, #0a0e06 100%)',
        stamp: '1960s',
      },
      {
        year: '1980s',
        tag: 'Iconic Advertising',
        headline: '\u201CThis Bud\u2019s For You\u201D',
        copy: 'The 1980s cemented Budweiser as more than a beer \u2014 it became a cultural shorthand for hard work and shared moments. Advertising campaigns spoke directly to working Americans, creating an emotional connection that transcended the product and made Budweiser synonymous with American pride.',
        gradient: 'linear-gradient(135deg, #1a0e06 0%, #261810 40%, #120e08 100%)',
        stamp: '1980s',
      },
    ],
  },
  {
    id: 'era-2000',
    number: '2000s',
    chapter: 'Chapter Six',
    title: 'Heritage in a World That Won\u2019t Sit Still',
    events: [
      {
        year: '2000s \u2013 2026',
        tag: 'Modern Era',
        headline: 'Consistent in an Age of Constant Change',
        copy: 'The last two decades rewired how we find everything. New drinks trend every week, and attention moves on fast. Budweiser kept one simple job: keep the beer itself consistent and let the story travel, from TV to timelines to Clydesdales showing up when we need a moment of celebration.',
        gradient: 'linear-gradient(135deg, #0a0610 0%, #140e20 40%, #06060e 100%)',
        stamp: '2026',
      },
      {
        year: '2026',
        tag: '150 Years',
        headline: 'The Thread That Runs Through All of It',
        copy: '150 years. One beer. From the first bottle Carl Conrad put his name on to the can someone cracked open last night \u2014 the same process, the same commitment. What started as a decision to stand behind a single consistent taste has become the longest\u2011running promise in American brewing.',
        gradient: 'linear-gradient(135deg, #1a0508 0%, #2c0c12 40%, #0e0408 100%)',
        stamp: '2026',
      },
    ],
  },
];

function EventCard({ event, observerRef }) {
  const ref = useRef(null);
  const mediaRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = observerRef.current;
    if (!observer) { setVisible(true); return; }

    el._onVisible = () => setVisible(true);
    observer.observe(el);
    return () => observer.unobserve(el);
  }, [observerRef]);

  // Subtle scroll-driven parallax on media block
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    const media = mediaRef.current;
    if (!media) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = media.getBoundingClientRect();
        const vh = window.innerHeight;
        // Progress: 0 when element enters bottom, 1 when it exits top
        const progress = 1 - (rect.top + rect.height) / (vh + rect.height);
        // Shift image ±20px based on scroll position
        const shift = (progress - 0.5) * 40;
        media.style.transform = `translateY(${shift}px)`;
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <article
      ref={ref}
      className={`${styles.event} ${visible ? styles.eventVisible : ''}`}
    >
      <div className={styles.eventMedia} ref={mediaRef}>
        <div className={styles.eventImgWrap} style={{ '--img-gradient': event.gradient }}>
          <div className={styles.eventImgOverlay} />
          <span className={styles.eventYearStamp} aria-hidden="true">{event.stamp}</span>
        </div>
      </div>

      <div className={styles.eventNode} aria-hidden="true">
        <div className={styles.eventNodeDot} />
      </div>

      <div className={styles.eventContent}>
        <span className={styles.eventYear}>{event.year}</span>
        <span className={styles.eventTag}>{event.tag}</span>
        <h3 className={styles.eventHeadline}>{event.headline}</h3>
        <p className={styles.eventCopy}>{event.copy}</p>
      </div>
    </article>
  );
}

export default function HistoryTimeline({ onActiveEra }) {
  const eraRefs = useRef({});
  const eventObserverRef = useRef(null);

  // Single shared observer for all event card animations
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target._onVisible?.();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    eventObserverRef.current = observer;
    return () => observer.disconnect();
  }, []);

  // Era tracking observer for sticky nav
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onActiveEra?.(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-80px 0px -40% 0px' }
    );

    Object.values(eraRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [onActiveEra]);

  return (
    <div className={styles.timeline} role="region" aria-label="Budweiser timeline">
      <div className={styles.spine} aria-hidden="true" />

      {ERAS.map((era) => (
        <section
          key={era.id}
          id={era.id}
          ref={(el) => { eraRefs.current[era.id] = el; }}
          className={styles.era}
        >
          <div className={styles.eraHeader}>
            <span className={styles.eraNumber}>{era.number}</span>
            <h2 className={styles.eraTitle}>{era.title}</h2>
          </div>

          {era.events.map((event) => (
            <EventCard
              key={`${era.id}-${event.year}`}
              event={event}
              observerRef={eventObserverRef}
            />
          ))}
        </section>
      ))}
    </div>
  );
}
