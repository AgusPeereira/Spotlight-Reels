import { useState } from 'react';
import { site } from '../config/site';
import Reveal from '../components/Reveal';
import styles from './Founder.module.css';

// 13. Quién está detrás (en primera persona, firmado por Guillermo)
export default function Founder() {
  const { name, photo } = site.founder;
  // Si la foto no carga (ruta mal escrita), mostramos el isotipo en su lugar
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section className={`section ${styles.section}`} aria-labelledby="founder-title">
      <div className={`container ${styles.layout}`}>
        <Reveal className={styles.media}>
          {photo && !photoFailed ? (
            <img
              src={photo}
              alt={`${name}, founder of Spotlight Reels`}
              className={styles.photo}
              loading="lazy"
              onError={() => setPhotoFailed(true)}
            />
          ) : (
            // Sin foto: el isotipo de la marca ocupa ese lugar
            <div className={styles.placeholder}>
              <img
                src="/brand/spotlight-reels-isotipo-transparente-claro-1000.svg"
                alt=""
                width={1000}
                height={1000}
                loading="lazy"
              />
            </div>
          )}
        </Reveal>

        <Reveal className={styles.story} delay={100}>
          <h2 id="founder-title" className={`h2 ${styles.title}`}>
            Who’s behind <em>Spotlight Reels.</em>
          </h2>

          <div className={styles.text}>
            <p>
              I’m Guillermo. I’ve played soccer since I was a kid, and like every player, I grew up
              with idols and the dream of being seen. I learned recruiting from the inside, working
              with my cousin, Matías Pereira Merlo, who helps players from around the world earn
              scholarships and play in the US. By his side I saw what college coaches look for,
              what each league requires, and how much a first impression matters.
            </p>
            <p>
              My first highlight videos got players seen by college coaches, and that’s when I
              understood: the video is often the first time a coach sees you play. Talent shouldn’t
              go unseen because of a bad video.
            </p>
            <p>
              That’s why I created Spotlight Reels, to help players get the opportunities they’ve
              worked for: recruiting videos built for what coaches actually watch, plus a video
              made to share, ready in 48 hours, at a price families can afford.
            </p>
            <p>
              I make every video myself, and I know what’s behind every order: years of practices,
              trips and sacrifice.
            </p>
            <p className={styles.highlight}>I want every family to feel it was worth it.</p>
            <p>I’ll never promise you a scholarship, but I’ll make sure coaches see your best.</p>
          </div>

          <p className={styles.signature}>— Guillermo, founder of Spotlight Reels</p>
        </Reveal>
      </div>
    </section>
  );
}
