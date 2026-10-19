import { useRef, useState, type FormEvent } from 'react';
import { Link, Navigate, useParams } from 'react-router';
import { getPack, site, type Pack } from '../config/site';
import { useSeo } from '../hooks/useSeo';
import ContactHelp from '../components/ContactHelp';
import Ring from '../components/Ring';
import styles from './Order.module.css';

const nextSteps = [
  { title: 'You pay', text: 'Securely through PayPal, with your PayPal account or a card.' },
  { title: 'You fill out a 5-minute form', text: 'Your footage link and your details.' },
  { title: 'You get your videos', text: 'By email, with edits included.' },
];

// Arma el email del Plan B (cuando no hay link de PayPal para ese paquete)
function invoiceMailto(pack: Pack) {
  const subject = `PayPal invoice request – ${pack.name} pack ($${pack.price})`;
  const body = [
    'Hi Spotlight Reels,',
    '',
    `I'd like to order the ${pack.name} pack ($${pack.price} USD). Please send me a PayPal invoice.`,
    '',
    "Player's name: ",
    'Position: ',
    'Grad year: ',
    '',
    'Thanks!',
  ].join('\n');
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// Página para pagar un paquete: /order/starter, /order/pro, /order/elite
export default function Order() {
  const { pack: packId } = useParams();
  const pack = getPack(packId);

  useSeo(
    pack ? `Order ${pack.name} | Spotlight Reels` : 'Order | Spotlight Reels',
    'Review your pack and pay securely with PayPal. No account needed.',
  );

  // Si el paquete no existe, volvemos a la sección de paquetes
  if (!pack) return <Navigate to="/#packages" replace />;

  return <OrderContent pack={pack} />;
}

function OrderContent({ pack }: { pack: Pack }) {
  const [agreed, setAgreed] = useState(false);
  const [showError, setShowError] = useState(false);
  const checkboxRef = useRef<HTMLInputElement>(null);

  const hasPaypal = pack.paypalUrl.trim() !== '';

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!agreed) {
      setShowError(true);
      checkboxRef.current?.focus();
      return;
    }
    // PayPal se abre en la misma pestaña; el Plan B abre el email
    window.location.assign(hasPaypal ? pack.paypalUrl : invoiceMailto(pack));
  }

  return (
    <div className={`container ${styles.page}`}>
      <Link to="/#packages" className={styles.back}>
        ← All packages
      </Link>

      <div className={styles.layout}>
        {/* Resumen del paquete */}
        <section aria-labelledby="order-title">
          <h1 id="order-title" className={styles.title}>
            {pack.name} <em>pack</em>
          </h1>
          <p className={styles.outcome}>{pack.outcome}</p>

          <div className={styles.summary}>
            <div className={styles.priceRow}>
              <span>Total</span>
              <strong className={styles.price}>
                ${pack.price} <span>USD</span>
              </strong>
            </div>
            <h2 className={styles.subhead}>What’s included</h2>
            <ul className={styles.includes}>
              {pack.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className={styles.deliveryRow}>
              <span>Delivery</span>
              <strong>{pack.delivery}</strong>
            </div>
            <p className={styles.fine}>
              Delivery time starts once we have your complete footage and details.
            </p>
          </div>

          <h2 className={styles.subhead}>What happens next</h2>
          <ol className={styles.steps}>
            {nextSteps.map((s, i) => (
              <li key={s.title}>
                <span className={styles.stepMarker} aria-hidden="true">
                  <span>{i + 1}</span>
                  <Ring width={34} />
                </span>
                <div>
                  <strong>{s.title}</strong>
                  <p className="muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Caja de pago */}
        <div className={styles.side}>
          <form className={styles.payBox} onSubmit={handleSubmit} noValidate>
            <label className={styles.agree}>
              <input
                ref={checkboxRef}
                type="checkbox"
                checked={agreed}
                onChange={(e) => {
                  setAgreed(e.target.checked);
                  if (e.target.checked) setShowError(false);
                }}
                aria-invalid={showError}
                aria-describedby={showError ? 'agree-error' : undefined}
                required
              />
              <span>
                I agree to the{' '}
                <Link to="/terms" target="_blank" className="text-link">
                  Terms of Service
                </Link>{' '}
                and the{' '}
                <Link to="/refunds" target="_blank" className="text-link">
                  Refund Policy
                </Link>
                . I understand all sales are final, except as stated in the Refund Policy.
              </span>
            </label>
            {showError && (
              <p id="agree-error" className={styles.error} role="alert">
                Please check the box to continue.
              </p>
            )}

            <button type="submit" className="btn btn-primary btn-lg btn-block">
              {hasPaypal ? `Pay $${pack.price} with PayPal` : 'Request a PayPal invoice'}
            </button>

            {hasPaypal ? (
              <p className={styles.secure}>
                <LockIcon />
                Pay with your PayPal account or a debit/credit card. Secure checkout by PayPal.
              </p>
            ) : (
              <p className={styles.secure}>
                We’ll email you a PayPal invoice for ${pack.price} USD. Prefer Instagram?{' '}
                <a
                  href={site.instagram.dmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  Message us there
                </a>
                .
              </p>
            )}

            <Link to={`/thank-you?pack=${pack.id}`} className={styles.already}>
              Already paid? Fill out the order form →
            </Link>
          </form>

          <ContactHelp />
        </div>
      </div>
    </div>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" className="lock">
      <path
        fill="currentColor"
        d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z"
      />
    </svg>
  );
}
