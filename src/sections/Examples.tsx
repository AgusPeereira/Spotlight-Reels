import { useState } from 'react';
import { site, type Example } from '../config/site';
import Reveal from '../components/Reveal';
import styles from './Examples.module.css';

const cutLabels = { recruiting: 'Recruiting Cut', hype: 'Hype Cut' };

// 8. Videos de ejemplo. Si la lista de site.ts está vacía, no se muestra nada.
export default function Examples() {
  if (site.examples.length === 0) return null;

  return (
    <section id="examples" className="section" aria-labelledby="examples-title">
      <div className="container">
        <Reveal className={styles.head}>
          <h2 id="examples-title" className="h2">
            See it <em>in action.</em>
          </h2>
        </Reveal>
        <ul className={styles.grid}>
          {site.examples.map((ex, i) => (
            <li
              key={`${ex.youtubeId}-${i}`}
              className={ex.cut === 'hype' ? styles.vertical : styles.horizontal}
            >
              <VideoCard example={ex} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Acepta el ID solo o el link completo (youtu.be/..., watch?v=..., /shorts/..., /embed/...)
function toYoutubeId(value: string) {
  const match = value.match(/(?:youtu\.be\/|[?&]v=|\/shorts\/|\/embed\/)([\w-]{11})/);
  return match ? match[1] : value.trim();
}

// Muestra la miniatura y carga el reproductor de YouTube recién al tocar.
// Así la página carga más rápido y YouTube no pone cookies hasta que se usa.
function VideoCard({ example }: { example: Example }) {
  const [playing, setPlaying] = useState(false);
  // Miniatura en alta calidad; si el video no la tiene, usamos la estándar
  const [thumb, setThumb] = useState('maxresdefault');
  const { title, position, cut } = example;
  const youtubeId = toYoutubeId(example.youtubeId);

  return (
    <article className={styles.card}>
      <div className={styles.player}>
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&playsinline=1`}
            title={`${title} – ${cutLabels[cut]}`}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <button type="button" className={styles.poster} onClick={() => setPlaying(true)}>
            <img
              src={`https://i.ytimg.com/vi/${youtubeId}/${thumb}.jpg`}
              alt=""
              loading="lazy"
              onError={() => setThumb('hqdefault')}
            />
            <span className={styles.tag} aria-hidden="true">
              {cutLabels[cut]}
            </span>
            <span className={styles.play} aria-hidden="true" />
            <span className="sr-only">
              Play {cutLabels[cut]}: {title}
            </span>
          </button>
        )}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className="muted">{position}</p>
    </article>
  );
}
