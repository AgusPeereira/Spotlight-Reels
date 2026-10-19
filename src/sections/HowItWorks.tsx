import { Link } from 'react-router';
import Reveal from '../components/Reveal';
import Ring from '../components/Ring';
import styles from './HowItWorks.module.css';

const steps = [
  {
    title: 'DM us “VIDEO” or pick a pack.',
    text: 'Tell us your position, grad year and goal.',
  },
  { title: 'Pay securely with PayPal.', text: '' },
  { title: 'Fill a 5-minute form.', text: 'Share your footage link and your details.' },
  { title: 'Get your videos.', text: 'Ready in 48 hours, with edits included.' },
];

// 9. Cómo funciona
export default function HowItWorks() {
  return (
    <section id="how-it-works" className={`section ${styles.section}`} aria-labelledby="how-title">
      <div className="container">
        <Reveal className={styles.head}>
          <h2 id="how-title" className="h2">
            Your season, ready for recruiting. <em>4 steps, 48 hours.</em>
          </h2>
        </Reveal>

        <ol className={styles.steps}>
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 90} className={styles.step}>
              <div className={styles.marker} aria-hidden="true">
                <span className={styles.num}>{i + 1}</span>
                <Ring width={58} />
              </div>
              <h3 className={styles.title}>
                <span className="sr-only">Step {i + 1}: </span>
                {s.title}
              </h3>
              {s.text && <p className="muted">{s.text}</p>}
            </Reveal>
          ))}
        </ol>

        <Reveal className={styles.cta}>
          <Link to="/#packages" className="btn btn-primary btn-lg">
            See packages
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
