import type { CSSProperties } from 'react';
import { Link } from 'react-router';
import { site } from '../config/site';
import Reveal from '../components/Reveal';
import Beam from '../components/Beam';
import styles from './Packages.module.css';

// 11. Paquetes (los datos salen de site.ts)
export default function Packages() {
  return (
    <section id="packages" className="section" aria-labelledby="packages-title">
      <div className="container">
        <Reveal className={styles.head}>
          <Beam className={styles.beam} />
          <h2 id="packages-title" className="h2">
            Pro-level videos, <em>family prices.</em>
          </h2>
          <p className="lead">
            Every video is made by a person who watches your footage, picks your best plays and
            marks you in every clip. No templates, no shortcuts. We price that work fairly.
          </p>
        </Reveal>

        <ul
          className={styles.grid}
          style={{ '--cols': Math.min(site.packs.length, 3) } as CSSProperties}
        >
          {site.packs.map((pack) => (
            <li
              key={pack.id}
              className={`${styles.card} ${pack.featured ? styles.featured : ''}`}
            >
              {pack.badge && <p className={styles.badge}>{pack.badge}</p>}
              <h3 className={styles.name}>{pack.name}</h3>
              <p className={styles.price}>
                <span className={styles.currency}>$</span>
                {pack.price}
                <span className={styles.usd}>USD</span>
              </p>
              <p className={styles.outcome}>{pack.outcome}</p>

              <ul className={styles.includes}>
                {pack.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <p className={styles.delivery}>
                <span>Delivery</span>
                <strong>{pack.delivery}</strong>
              </p>

              <Link
                to={`/order/${pack.id}`}
                className={`btn btn-block ${pack.featured ? 'btn-primary' : 'btn-secondary'}`}
              >
                Order {pack.name}
              </Link>
            </li>
          ))}
        </ul>

        <p className={styles.note}>
          Delivery time starts once we have your complete footage and details.
        </p>
      </div>
    </section>
  );
}
