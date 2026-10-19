import { site } from '../config/site';
import styles from './DmButton.module.css';

// Botón flotante "DM us" (solo se ve en el celular)
export default function DmButton() {
  return (
    <a
      href={site.instagram.dmUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 3C6.9 3 3 6.7 3 11.3c0 2.5 1.2 4.7 3.1 6.2v3.2l2.9-1.6c.9.3 1.9.4 3 .4 5.1 0 9-3.7 9-8.2S17.1 3 12 3Z"
        />
      </svg>
      DM us
      <span className="sr-only"> on Instagram (opens in a new tab)</span>
    </a>
  );
}
