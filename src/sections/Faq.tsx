import Reveal from '../components/Reveal';
import styles from './Faq.module.css';

const faqs = [
  { q: 'How long is the video?', a: '3–5 minutes, the length coaches recommend.' },
  {
    q: 'What footage works?',
    a: 'Full games or clips from Hudl, Veo, a phone or YouTube. Games beat practice.',
  },
  {
    q: 'Do you guarantee a scholarship?',
    a: 'No one honestly can. We make sure coaches see your best.',
  },
  { q: 'Can I post it?', a: 'Yes. The Hype Cut is made for social media.' },
  { q: 'Players under 18?', a: 'A parent or guardian fills out the order form.' },
  {
    q: 'How do I pay?',
    a: 'Securely through PayPal, with a PayPal account or a debit/credit card.',
  },
];

// 14. Preguntas frecuentes (acordeón nativo: funciona con teclado y lector de pantalla)
export default function Faq() {
  return (
    <section id="faq" className="section" aria-labelledby="faq-title">
      <div className={`container ${styles.layout}`}>
        <Reveal>
          <h2 id="faq-title" className="h2">
            Questions, <em>answered.</em>
          </h2>
        </Reveal>

        <Reveal className={styles.list} delay={100}>
          {faqs.map((f) => (
            <details key={f.q} className={styles.item}>
              <summary className={styles.question}>
                <span>{f.q}</span>
                <span className={styles.icon} aria-hidden="true" />
              </summary>
              <p className={styles.answer}>{f.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
