import { Link } from 'react-router';
import { site } from '../config/site';
import LegalPage, { operatedBy } from '../components/LegalPage';

// Política de privacidad (Ley 18.331 de Uruguay).
// (Texto de "Spotlight Reels: políticas legales de la web".)
export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="What information Spotlight Reels collects, why, and how you can control it."
    >
      <p>
        {operatedBy}, is responsible for the personal information described here. We collect only
        what we need to make your video, and we never sell your data.
      </p>

      <h2>1. What we collect</h2>
      <ul>
        <li>
          <strong>When you pay:</strong> PayPal processes your payment and shares with us your
          name, email, the amount and a transaction ID. We never see your card or bank details.
        </li>
        <li>
          <strong>In the order form:</strong> the parent or guardian’s name and email; the
          player’s name, position, graduation year, club or school, and the details you choose to
          show on the player card (for example height, stats or contact info); links to your
          footage and any photos you send.
        </li>
        <li>
          <strong>When you write to us:</strong> the messages and contact details you send by
          email or Instagram.
        </li>
        <li>
          <strong>When you visit the website:</strong> our hosting provider keeps basic technical
          logs (such as IP address and browser type) for security. We don’t use tracking cookies
          (see our <Link to="/cookies">Cookie Policy</Link>).
        </li>
      </ul>

      <h2>2. Why we use it</h2>
      <p>
        To make and deliver your videos, handle edits, answer your questions, keep payment records
        required by law, and keep our website secure. We don’t use your data for advertising and
        we don’t sell or share it with anyone for their own marketing.
      </p>

      <h2>3. Who helps us</h2>
      <p>
        We use a few trusted services to run the business: PayPal (payments), Google (order form,
        email and file storage), our website host, and the editing software and tools we use to
        make your video, including AI-assisted tools. They only process your data to provide their
        service to us.
      </p>

      <h2>4. International transfers</h2>
      <p>
        We are based in Uruguay, and some of these services store data in the United States or
        other countries. By placing an order and submitting the order form, you consent to your
        data being transferred and stored there for the purposes in this policy.
      </p>

      <h2>5. Your video</h2>
      <p>
        Your video is yours. We only show it in our portfolio, website or social media if you give
        us separate permission in our <Link to="/media-release">Media Release</Link>, and you can
        withdraw that permission at any time.
      </p>

      <h2>6. Players under 18</h2>
      <p>
        Our services are meant to be ordered by adults. If the player is under 18, a parent or
        legal guardian must complete the order form and give any permission on their behalf. Our
        website is not directed to children under 13, and we don’t knowingly collect information
        from them directly.
      </p>

      <h2>7. How long we keep it</h2>
      <p>
        We delete your raw footage 90 days after delivery. We keep your final videos for 12 months
        so you can request them again, unless you ask us to delete them sooner. We keep payment
        records as long as the law requires.
      </p>

      <h2>8. Your rights</h2>
      <p>
        You can ask us at any time to see the data we have about you, correct it, or delete it,
        and to stop using it. Email <a href={`mailto:${site.email}`}>{site.email}</a> and we will
        reply within 5 business days. Under Uruguayan law (Law 18.331), you can also contact
        Uruguay’s data protection authority, the Unidad Reguladora y de Control de Datos
        Personales.
      </p>

      <h2>9. Security</h2>
      <p>
        We use services with strong security, keep access to your files limited to the people
        working on your order, and share delivery links only with you.
      </p>

      <h2>10. Changes</h2>
      <p>
        If we change this policy, we will update the date above. Important changes will be
        announced on our website.
      </p>

      <p>
        <strong>Contact:</strong> <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </LegalPage>
  );
}
