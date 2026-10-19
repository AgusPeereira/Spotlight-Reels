import Beam from '../components/Beam';
import Reveal from '../components/Reveal';
import styles from './WhyWeExist.module.css';

// Los tres problemas del padre (antes era una sección aparte)
const problems = [
  'You’re not sure what coaches want to see in a video.',
  'You don’t have the time or the tools to edit it.',
  'ID camps, showcases and recruiting dates don’t wait.',
];

// 2. Por qué existimos + el problema que resolvemos
export default function WhyWeExist() {
  return (
    <section id="why-we-exist" className={`section ${styles.section}`} aria-labelledby="why-title">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.head}>
          <Beam className={styles.beam} />
          <h2 id="why-title" className="h2">
            Talent shouldn’t go unseen because of a <em>bad video.</em>
          </h2>
        </Reveal>

        <Reveal className={styles.body}>
          <p>
            College coaches get more highlight videos than they can watch, and they decide in
            seconds. Good players get passed over every season, not because they aren’t good
            enough, but because no one saw what they can do.
          </p>
          <p>
            Behind every player is a family that has invested years of practices, trips and
            tournaments.
          </p>
          <p className={styles.punch}>We exist to make sure that work gets seen.</p>
        </Reveal>
      </div>

      {/* El problema, en una línea por punto */}
      <div className="container">
        <Reveal className={styles.problem}>
          <h3 className={styles.problemTitle}>
            You know your game. <em>Coaches need to see it.</em>
          </h3>
          <ul className={styles.points}>
            {problems.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
