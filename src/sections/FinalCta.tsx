import { site } from '../config/site';
import Beam from '../components/Beam';
import Reveal from '../components/Reveal';
import styles from './FinalCta.module.css';

// 15. Contacto / llamado final
export default function FinalCta() {
  return (
    <section id="contact" className={`section ${styles.section}`} aria-labelledby="cta-title">
      <Beam className={styles.beam} />
      <Reveal className={`container ${styles.inner}`}>
        <h2 id="cta-title" className={styles.title}>
          Ready to <em>get seen?</em>
        </h2>
        <p className="lead">
          Send us “VIDEO” on Instagram or email us. We reply within 24 hours.
        </p>
        <div className={styles.actions}>
          <a
            href={site.instagram.dmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            DM us on Instagram
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={`mailto:${site.email}`} className="btn btn-secondary btn-lg">
            Email us
          </a>
        </div>
        <p className={styles.email}>{site.email}</p>
      </Reveal>
    </section>
  );
}
