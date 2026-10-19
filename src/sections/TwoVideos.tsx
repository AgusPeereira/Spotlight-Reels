import Reveal from '../components/Reveal';
import Ring from '../components/Ring';
import styles from './TwoVideos.module.css';

// 4. Un pedido, dos videos
export default function TwoVideos() {
  return (
    <section className="section" aria-labelledby="two-videos-title">
      <div className="container">
        <Reveal className={styles.head}>
          <h2 id="two-videos-title" className="h2">
            One order, <em>two videos.</em>
          </h2>
        </Reveal>

        <div className={styles.grid}>
          <Reveal as="article" className={styles.card}>
            <div className={`${styles.frame} ${styles.landscape}`} aria-hidden="true">
              <span className={styles.frameBeam} />
              <Ring width={96} className={styles.frameRing} />
              <span className={styles.tag}>16:9 · 3–5 min</span>
            </div>
            <h3 className={styles.name}>
              Recruiting <em>Cut</em>
            </h3>
            <p className={styles.for}>The video for coaches.</p>
            <p className="muted">
              Clean, 3–5 minutes, your best plays first, you in the spotlight in every clip, and a
              player card with your info.
            </p>
          </Reveal>

          <Reveal as="article" className={styles.card} delay={120}>
            <div className={`${styles.frame} ${styles.portrait}`} aria-hidden="true">
              <span className={styles.frameBeam} />
              <Ring width={70} className={styles.frameRing} />
              <span className={styles.tag}>9:16 · Social</span>
            </div>
            <h3 className={styles.name}>
              Hype <em>Cut</em>
            </h3>
            <p className={styles.for}>The video for you.</p>
            <p className="muted">Vertical, animated and made to share on Instagram or TikTok.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
