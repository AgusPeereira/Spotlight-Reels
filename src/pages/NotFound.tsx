import { Link } from 'react-router';
import { useSeo } from '../hooks/useSeo';
import Beam from '../components/Beam';
import Ring from '../components/Ring';
import styles from './NotFound.module.css';

// Página 404: cuando la dirección no existe
export default function NotFound() {
  useSeo('Page not found | Spotlight Reels', 'This page doesn’t exist.');

  return (
    <section className={styles.page} aria-labelledby="nf-title">
      <Beam variant="hero" className={styles.beam} />
      <div className={`container ${styles.inner}`}>
        <p className={styles.code} aria-hidden="true">
          404
        </p>
        <Ring width={160} className={styles.ring} />
        <h1 id="nf-title" className={styles.title}>
          Out of <em>the spotlight.</em>
        </h1>
        <p className="lead">This page doesn’t exist, or it moved. Let’s get you back in the game.</p>
        <Link to="/" className="btn btn-primary btn-lg">
          Back to home
        </Link>
      </div>
    </section>
  );
}
