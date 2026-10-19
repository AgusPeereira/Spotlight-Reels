import { site } from '../config/site';
import styles from './ContactHelp.module.css';

// Bloque "¿Dudas?" que aparece en todas las páginas del camino de compra
export default function ContactHelp() {
  return (
    <aside className={styles.box} aria-label="Contact">
      <p className={styles.title}>Questions? We’re here.</p>
      <p className="muted">We answer every message ourselves, usually the same day.</p>
      <ul className={styles.links}>
        <li>
          <a href={site.instagram.dmUrl} target="_blank" rel="noopener noreferrer">
            Instagram {site.instagram.handle}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
        <li>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </li>
      </ul>
    </aside>
  );
}
