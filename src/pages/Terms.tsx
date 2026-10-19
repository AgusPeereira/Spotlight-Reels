import { Link } from 'react-router';
import { site } from '../config/site';
import LegalPage, { operatedBy } from '../components/LegalPage';

// Términos del servicio (texto de "Spotlight Reels: políticas legales de la web").
// Los paquetes y precios salen de site.ts.
export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      description="The terms for ordering a recruiting highlight video from Spotlight Reels."
    >
      <p>
        These Terms of Service (“Terms”) apply to every order placed with {operatedBy} (“Spotlight
        Reels”, “we”, “us”). By placing an order, you agree to these Terms, our{' '}
        <Link to="/refunds">Refund Policy</Link> and our <Link to="/privacy">Privacy Policy</Link>.
        If you are under 18, a parent or legal guardian must place the order and accept these Terms
        on your behalf.
      </p>

      <h2>1. What we do</h2>
      <p>
        We edit soccer highlight videos from footage you provide. We do not film games, contact
        coaches for you, or act as a recruiting agency.
      </p>

      <h2>2. Packages</h2>
      <p>
        The content of each package (video length, number of clips, extra videos and rounds of
        edits) is the one listed on our website at the time of purchase:
      </p>
      <ul>
        {site.packs.map((p) => (
          <li key={p.id}>
            <strong>
              {p.name} (${p.price}):
            </strong>{' '}
            {p.includes.join(' · ')}. Delivery in {p.delivery}.
          </li>
        ))}
      </ul>
      <p>Prices are in US dollars and are processed by PayPal.</p>

      <h2>3. Your footage and details</h2>
      <p>
        After paying, you complete our order form with your details and a link to your footage.
        Delivery time starts once we have your complete footage and details. If something is
        missing or can’t be used, we will tell you within 12 hours and before we start. Your order
        stays open for 6 months from the payment date; if we don’t receive your footage in that
        time, the order expires.
      </p>

      <h2>4. Delivery</h2>
      <p>
        We deliver your videos by download link to the email you gave us. Delivery times are
        counted in calendar days and hours from the moment your material is complete. If we expect
        a delay, we will tell you before the deadline.
      </p>

      <h2>5. Edits</h2>
      <p>
        Each package includes the rounds of edits listed above. An edit is a change to the video
        we delivered: the order or choice of clips, the text on the player card, the music from
        our library, or small timing adjustments. New footage, a new video or a different package
        are not edits; we can quote them separately. Please request your edits within 14 days of
        delivery. We deliver edits within 24 hours.
      </p>

      <h2>6. No guarantee of results</h2>
      <p>
        Nobody can honestly guarantee a scholarship, a roster spot, a tryout or a reply from a
        coach, and we don’t. We promise a video built for what coaches actually watch, delivered on
        time.
      </p>

      <h2>7. Your rights and ours</h2>
      <p>
        You keep all rights to your original footage. Once your order is paid, you may use the
        final videos for any personal, recruiting or social media purpose, including sending them
        to coaches and posting them online. We keep the rights to our own editing work, graphics
        and templates, and we may reuse them for other clients (never with your footage or your
        data).
      </p>

      <h2>8. Footage you send us</h2>
      <p>
        You confirm that you have the right to use the footage and images you send us, and that
        the people in them would not object to their use in a recruiting video. We may decline
        footage that is offensive or that you don’t have the right to use.
      </p>

      <h2>9. Music</h2>
      <p>
        We use music licensed for this use. If a platform flags the music, we will replace the
        track at no cost, even if you have used all your edits.
      </p>

      <h2>10. Showing your video</h2>
      <p>
        We will only show your video in our portfolio, website or social media with your separate
        permission (see our <Link to="/media-release">Media Release</Link>). Saying no does not
        affect your order.
      </p>

      <h2>11. Not affiliated</h2>
      <p>
        Spotlight Reels is an independent business. We are not affiliated with or endorsed by the
        NCAA, NAIA, NJCAA, any college, club, league, or video platform such as Hudl or Veo.
      </p>

      <h2>12. Limitation of liability</h2>
      <p>
        To the extent allowed by law, our total liability for any order is limited to the amount
        you paid for that order. We are not responsible for recruiting decisions made by coaches or
        schools.
      </p>

      <h2>13. Governing law</h2>
      <p>
        These Terms are governed by the laws of Uruguay. Before any formal claim, we ask you to
        write to us so we can try to solve it together.
      </p>

      <h2>14. Changes</h2>
      <p>
        We may update these Terms. The version that applies to your order is the one published on
        the day you paid.
      </p>

      <h2>15. Contact</h2>
      <p>
        <a href={`mailto:${site.email}`}>{site.email}</a> · Instagram{' '}
        <a href={site.instagram.url} target="_blank" rel="noopener noreferrer">
          {site.instagram.handle}
        </a>
      </p>
    </LegalPage>
  );
}
