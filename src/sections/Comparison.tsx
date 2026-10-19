import { site } from '../config/site';
import Reveal from '../components/Reveal';
import Beam from '../components/Beam';
import styles from './Comparison.module.css';

// Columnas de la comparación. La última es la nuestra (destacada).
const options = [
  'Generic freelance editors',
  'Doing it yourself',
  'Big recruiting services',
  'Spotlight Reels',
];

// Nuestro rango de precios sale de los paquetes en site.ts
function priceRange() {
  const prices = site.packs.map((p) => p.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  return min === max ? `$${min}` : `$${min}–$${max}`;
}

// Cada fila: el criterio y el valor para cada columna, en el mismo orden
const getRows = (ourRange: string) => [
  { label: 'Price', values: ['From $10', 'Free, but costs you hours', '$250–$500+ per video', ourRange] },
  {
    label: 'Built for recruiting',
    values: ['Depends on the editor', 'Only if you know what coaches want', 'Yes', 'Yes'],
  },
  { label: 'Video for social included', values: ['Varies', '—', 'Varies', 'Yes, with Pro'] },
  { label: 'Edits included', values: ['Varies', '—', 'Not always', 'Yes'] },
  { label: 'Delivery', values: ['Varies', 'As long as it takes you', 'Several days', '48 hours'] },
];

const ours = options.length - 1;

// 7. Por qué elegirnos (tabla en computadora, tarjetas en el celular)
export default function Comparison() {
  const rows = getRows(priceRange());
  // Columnas de las otras opciones (todas menos la nuestra)
  const others = options.map((_, i) => i).filter((i) => i !== ours);

  return (
    <section id="why-us" className="section" aria-labelledby="compare-title">
      <div className="container">
        <Reveal className={styles.head}>
          <Beam className={styles.beam} />
          <h2 id="compare-title" className="h2">
            Why families <em>choose us.</em>
          </h2>
          <p className="lead">
            There are cheaper options and more expensive ones. Here’s where we stand.
          </p>
        </Reveal>

        {/* Computadora: tabla real */}
        <Reveal className={styles.tableWrap}>
          <table className={styles.table}>
            <caption className="sr-only">How Spotlight Reels compares with other options</caption>
            <thead>
              <tr>
                <td />
                {options.map((o, i) => (
                  <th key={o} scope="col" className={i === ours ? styles.ours : undefined}>
                    {o}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label}>
                  <th scope="row">{r.label}</th>
                  {r.values.map((v, i) => (
                    <td key={i} className={i === ours ? styles.ours : undefined}>
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        {/* Celular: nuestra tarjeta a la vista; las otras opciones en un desplegable */}
        <div className={styles.cards}>
          <ComparisonCard title={options[ours]} column={ours} rows={rows} highlighted />
          <details className={styles.others}>
            <summary>Compare with other options</summary>
            <ul>
              {others.map((col) => (
                <li key={col}>
                  <ComparisonCard title={options[col]} column={col} rows={rows} />
                </li>
              ))}
            </ul>
          </details>
        </div>

        <Reveal className={styles.closing}>
          <p className={styles.promise}>
            We never promise scholarships. <em>We promise a video coaches actually watch.</em>
          </p>
          <p className="muted">
            Specialized like the big services. Accessible like a freelancer. Honest like a coach
            you trust.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

type CardProps = {
  title: string;
  column: number;
  rows: { label: string; values: string[] }[];
  highlighted?: boolean;
};

// Tarjeta de una opción (versión celular de una columna de la tabla)
function ComparisonCard({ title, column, rows, highlighted = false }: CardProps) {
  return (
    <div className={`${styles.card} ${highlighted ? styles.cardOurs : ''}`}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <dl className={styles.cardList}>
        {rows.map((r) => (
          <div key={r.label}>
            <dt>{r.label}</dt>
            <dd>{r.values[column]}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
