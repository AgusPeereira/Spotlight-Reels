import { site } from '../config/site';
import LegalPage from '../components/LegalPage';

// Política de reembolsos: sin reembolsos, salvo las tres excepciones.
// (Texto de "Spotlight Reels: políticas legales de la web".)
export default function Refunds() {
  return (
    <LegalPage
      title="Refund Policy"
      description="All sales are final, except in the cases listed in this policy."
    >
      <p>
        Every video is made by hand, for one player, starting the moment you send your footage.
        Because of that,{' '}
        <strong>all sales are final and we don’t offer refunds once an order is paid</strong>,
        except in the cases below.
      </p>

      <h2>We will refund you in full if</h2>
      <ul>
        <li>
          we don’t deliver your videos within 7 days after the promised delivery time, counted
          from when your footage was complete;
        </li>
        <li>you were charged twice for the same order (we refund the duplicate);</li>
        <li>
          we decline your order, for example because the footage can’t be used to make a good
          video. We will tell you this before we start.
        </li>
      </ul>

      <h2>What we offer instead of a refund</h2>
      <ul>
        <li>
          <strong>Edits.</strong> Each package includes rounds of edits so the video ends up right.
        </li>
        <li>
          <strong>Change your package</strong> before we start, paying the difference to upgrade.
          Downgrades are not refunded.
        </li>
        <li>
          <strong>Change the player or the timing.</strong> You can use your order for another
          player in your family, or send your footage later, within 6 months of payment.
        </li>
      </ul>

      <h2>How to ask</h2>
      <p>
        Email <a href={`mailto:${site.email}`}>{site.email}</a> with your name and your PayPal
        transaction ID. We reply within 24 hours. Approved refunds are sent through PayPal to the
        original payment method.
      </p>
      <p>
        Please contact us before opening a PayPal dispute. Most problems can be fixed with an edit,
        faster than any claim.
      </p>
    </LegalPage>
  );
}
