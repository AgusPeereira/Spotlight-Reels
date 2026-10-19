import { Link } from 'react-router';
import { site } from '../config/site';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <img
            src="/brand/spotlight-reels-isotipo-transparente-claro-1000.svg"
            alt=""
            width={44}
            height={44}
          />
          <p className={styles.wordmark}>
            Spotlight <em>Reels</em>
          </p>
          <p className="muted">Recruiting highlight videos for soccer players.</p>
        </div>

        <div>
          <h2 className={styles.heading}>Contact</h2>
          <ul className={styles.list}>
            <li>
              <a href={site.instagram.dmUrl} target="_blank" rel="noopener noreferrer">
                Instagram {site.instagram.handle}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className={styles.email}>
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className={styles.heading}>Legal</h2>
          <ul className={styles.list}>
            <li>
              <Link to="/terms">Terms of Service</Link>
            </li>
            <li>
              <Link to="/refunds">Refund Policy</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/cookies">Cookie Policy</Link>
            </li>
            <li>
              <Link to="/media-release">Media Release</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {new Date().getFullYear()} Spotlight Reels</p>
        <p>Payments processed securely by PayPal.</p>
      </div>
    </footer>
  );
}
