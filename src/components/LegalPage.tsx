import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { site } from '../config/site';
import { useSeo } from '../hooks/useSeo';
import styles from './LegalPage.module.css';

type Props = {
  title: string;
  description: string;
  children: ReactNode;
};

// Estructura común de las páginas legales (Terms, Privacy, Refunds, Cookies, Media Release)
export default function LegalPage({ title, description, children }: Props) {
  useSeo(`${title} | Spotlight Reels`, description);

  return (
    <article className={`container ${styles.page}`}>
      <Link to="/" className={styles.back}>
        ← Home
      </Link>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.updated}>Last updated: {site.legal.updated}</p>

      {/* Aviso: se prende con showLegalDraftNotice en site.ts */}
      {site.showLegalDraftNotice && (
        <p className={styles.notice} role="note">
          This page is being reviewed. If anything is unclear, email us at{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a> before you order.
        </p>
      )}

      <div className={styles.content}>{children}</div>
    </article>
  );
}

// Nombre del responsable, para usar dentro de los textos legales
export const operatedBy = `Spotlight Reels, operated by ${site.legal.operator}, ${site.legal.location}`;
