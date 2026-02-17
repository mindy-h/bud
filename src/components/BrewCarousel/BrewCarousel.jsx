import { useState, useCallback, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import texturefull from '../../assets/texturefull.webp';
import styles from './BrewCarousel.module.css';

const slides = [
  { id: 1, label: 'FPO Slide 1' },
  { id: 2, label: 'FPO Slide 2' },
  { id: 3, label: 'FPO Slide 3' },
];

export default function BrewCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const goTo = useCallback((index) => {
    setCurrent((index + slides.length) % slides.length);
  }, []);

  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  // Auto-advance every 6s, pause on hover
  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 6000);
  }, []);

  const stopTimer = useCallback(() => {
    clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, [startTimer, stopTimer]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') { prev(); startTimer(); }
    if (e.key === 'ArrowRight') { next(); startTimer(); }
  };

  return (
    <section
      className={styles.section}
      style={{ backgroundImage: `url(${texturefull})` }}
      aria-label="Keeping The Brew Alive"
    >
      <div className={styles.header}>
        <h2 className={styles.heading}>Keeping The Brew Alive</h2>
        <a href="/history" className={styles.cta}>Explore 150 Years</a>
      </div>

      <div
        className={styles.carouselWrap}
        onMouseEnter={stopTimer}
        onMouseLeave={startTimer}
        onKeyDown={handleKeyDown}
        role="region"
        aria-roledescription="carousel"
        aria-label="150 years of Budweiser"
      >
        {/* Prev button */}
        <button
          type="button"
          className={styles.navBtn}
          onClick={() => { prev(); startTimer(); }}
          aria-label="Previous slide"
        >
          <ArrowLeft size={20} aria-hidden="true" />
        </button>

        {/* Slide track */}
        <div className={styles.track} aria-live="polite">
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              className={`${styles.slide} ${i === current ? styles.slideActive : ''}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${i + 1} of ${slides.length}`}
              aria-hidden={i !== current}
            >
              <div className={styles.slidePlaceholder}>
                <span className={styles.fpoText}>{slide.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Next button */}
        <button
          type="button"
          className={styles.navBtn}
          onClick={() => { next(); startTimer(); }}
          aria-label="Next slide"
        >
          <ArrowRight size={20} aria-hidden="true" />
        </button>
      </div>

      {/* Indicators */}
      <div className={styles.indicators} role="tablist" aria-label="Slide navigation">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => { goTo(i); startTimer(); }}
          />
        ))}
      </div>
    </section>
  );
}
