import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router';
import styles from './Header.module.css';

// Links del menú: todos llevan a secciones de la Home
const navLinks = [
  { label: 'Why us', to: '/#why-us' },
  { label: 'How it works', to: '/#how-it-works' },
  { label: 'Packages', to: '/#packages' },
  { label: 'FAQ', to: '/#faq' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  // Cierra el menú del celular al cambiar de página o de sección
  useEffect(() => {
    setOpen(false);
  }, [location.key]);

  // Cierra el menú con la tecla Escape y devuelve el foco al botón
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={styles.header} data-open={open}>
      <div className={`container ${styles.bar}`}>
        <Link to="/" className={styles.brand} aria-label="Spotlight Reels, home">
          <img
            src="/brand/spotlight-reels-isotipo-transparente-claro-1000.svg"
            alt=""
            width={34}
            height={34}
          />
          <span className={styles.wordmark} aria-hidden="true">
            Spotlight <em>Reels</em>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Main">
          <ul id="main-menu" className={styles.links}>
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className={styles.link}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li className={styles.menuCta}>
              <Link to="/#packages" className="btn btn-primary btn-block">
                Get started
              </Link>
            </li>
          </ul>
        </nav>

        <Link to="/#packages" className={`btn btn-primary ${styles.cta}`}>
          Get started
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="main-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className={styles.burger} aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
