import Reveal from '../components/Reveal';
import styles from './WhatYouGet.module.css';

// Lo que entregamos → lo que se lleva la familia
const rows = [
  {
    deliver: 'A 3–5 minute recruiting video',
    get: 'A real chance.',
    why: 'A coach can see your player and consider them.',
  },
  {
    deliver: 'You marked in every clip',
    get: 'No confusion.',
    why: 'Coaches know who to watch in a second.',
  },
  {
    deliver: 'A player card with your info',
    get: 'Easy to reach.',
    why: 'If a coach is interested, they know how to contact you.',
  },
  {
    deliver: 'The format coaches ask for',
    get: 'Peace of mind.',
    why: 'No guessing what works. It’s done right.',
  },
  {
    deliver: '48-hour delivery',
    get: 'On time.',
    why: 'Ready for the ID camp, the showcase or the recruiting date.',
  },
  {
    deliver: 'A Hype Cut for social',
    get: 'Pride.',
    why: 'Something of their own to share. Their hard work, seen.',
  },
  {
    deliver: 'Edits included',
    get: 'No risk.',
    why: 'You won’t be stuck with something you don’t like.',
  },
];

// 6. Lo que realmente te llevás (sección clara, para cambiar el ritmo)
export default function WhatYouGet() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="value-title">
      <div className="container">
        <Reveal className={styles.head}>
          <h2 id="value-title" className="h2">
            More than <em>a video.</em>
          </h2>
          <p className={styles.intro}>
            We deliver a video. What you get is a real chance to be seen.
          </p>
        </Reveal>

        <div className={styles.labels} aria-hidden="true">
          <span>We deliver</span>
          <span>You get</span>
        </div>
        <ul className={styles.rows}>
          {rows.map((r) => (
            <li key={r.get} className={styles.row}>
              <p className={styles.deliver}>
                <span className="sr-only">We deliver: </span>
                {r.deliver}
              </p>
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
              <p className={styles.get}>
                <span className="sr-only">You get: </span>
                <strong>{r.get}</strong> {r.why}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
