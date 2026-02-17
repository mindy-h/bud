import clydesdaleshero from '../../assets/clydehero.png';
import styles from './ClydesdalHero.module.css';

export default function ClydesdalHero() {
  return (
    <section className={styles.hero} aria-label="The Clydesdales Everyone Recognizes">
      <img
        src={clydesdaleshero}
        alt="Budweiser Clydesdale horse standing next to a keg"
        className={styles.bgImage}
      />

      <div className={styles.content}>
        <h1 className={styles.heading}>
          The Clydesdales Everyone Recognizes
        </h1>
        <p className={styles.description}>
          First introduced in 1933, the Budweiser Clydesdales turned a single
          beer delivery into a symbol of optimism. Since then, they&rsquo;ve
          showed up at parades, ballgames and on screens as a steady, familiar
          sight in a world that keeps changing.
        </p>
      </div>
    </section>
  );
}
