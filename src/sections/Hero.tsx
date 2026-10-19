import { Link } from 'react-router';
import { site } from '../config/site';
import Beam from '../components/Beam';
import styles from './Hero.module.css';

// 1. Hero: lo primero que ve el padre al entrar
export default function Hero() {
  const lowestPrice = Math.min(...site.packs.map((p) => p.price));

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Beam variant="hero" />
      {/* Líneas de la cancha en perspectiva: el haz cae sobre el círculo central */}
      <svg
        className={styles.pitch}
        viewBox="0 0 1400 300"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M0 150 H1400" />
        <ellipse cx="700" cy="150" rx="290" ry="62" />
        <ellipse cx="700" cy="150" rx="6" ry="2.5" className={styles.spot} />
        <path d="M260 0 L-120 300 M1140 0 L1520 300" />
      </svg>
      <div className={`container ${styles.inner}`}>
        <img
          className={styles.logo}
          src="/brand/spotlight-reels-logo-vertical-transparente-claro-2000x1400.svg"
          alt="Spotlight Reels"
          width={2000}
          height={1400}
          fetchPriority="high"
        />

        <h1 id="hero-title" className={styles.title}>
          Get seen by the <em>right coaches.</em>
        </h1>

        <p className={styles.subtitle}>
          Recruiting highlight videos for soccer players, built for what college coaches actually
          watch. Ready in 48 hours.
        </p>

        <div className={styles.actions}>
          <Link to="/#packages" className="btn btn-primary btn-lg">
            See packages
          </Link>
          <a
            href={site.instagram.dmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-lg"
          >
            DM us “VIDEO”
            <span className="sr-only"> on Instagram (opens in a new tab)</span>
          </a>
        </div>

        <ul className={styles.facts}>
          <li>Made by a person, not a template</li>
          <li>From ${lowestPrice}</li>
          <li>Edits included</li>
        </ul>
      </div>
    </section>
  );
}
