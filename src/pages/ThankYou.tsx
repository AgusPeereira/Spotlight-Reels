import { Link, useSearchParams } from 'react-router';
import { getPack, orderFormLink, site } from '../config/site';
import { useSeo } from '../hooks/useSeo';
import Beam from '../components/Beam';
import ContactHelp from '../components/ContactHelp';
import styles from './ThankYou.module.css';

// Página después de pagar: lleva al formulario de pedido.
// Si la dirección trae ?pack=pro (desde PayPal o desde "Already paid?"),
// el formulario se abre con ese paquete ya elegido.
export default function ThankYou() {
  useSeo(
    'Thank you | Spotlight Reels',
    'Payment received. Fill out the 5-minute order form so we can start your videos.',
  );

  const [params] = useSearchParams();
  const pack = getPack(params.get('pack'));
  const hasForm = site.orderFormUrl.trim() !== '';

  return (
    <section className={styles.page} aria-labelledby="thanks-title">
      <Beam variant="hero" className={styles.beam} />
      <div className={`container ${styles.inner}`}>
        <h1 id="thanks-title" className={styles.title}>
          Payment received. <em>Thank you!</em>
        </h1>

        {hasForm ? (
          <>
            <p className="lead">
              One last step: tell us about the player and share your footage. It takes about 5
              minutes. Keep your PayPal receipt handy: the form asks for the transaction ID.
            </p>
            <a
              href={orderFormLink(pack)}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-primary btn-lg ${styles.formBtn}`}
            >
              Fill out the order form (5 min)
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </>
        ) : (
          <p className={styles.fallback}>We’ll email you the order form within 1 hour.</p>
        )}

        <div className={styles.info}>
          <h2 className={styles.infoTitle}>When does the clock start?</h2>
          <p className="muted">
            Your pack’s delivery time starts once we have your complete footage and details. If
            something is missing, we’ll message you right away so nothing slows you down.
          </p>
        </div>

        <ContactHelp />

        <p className={styles.notYet}>
          Haven’t paid yet?{' '}
          <Link to="/#packages" className="text-link">
            See packages
          </Link>
        </p>
      </div>
    </section>
  );
}
