import { site } from '../config/site';
import LegalPage from '../components/LegalPage';

// Política de cookies: hoy la web no usa cookies de seguimiento, así que no lleva banner.
// Si algún día agregás Google Analytics o el píxel de Meta, hay que sumar el banner
// (el texto está en "Spotlight Reels: políticas legales de la web") y actualizar esta página.
export default function Cookies() {
  return (
    <LegalPage
      title="Cookie Policy"
      description="This website does not use cookies to track you or to show you ads."
    >
      <p>
        Cookies are small files a website stores in your browser.{' '}
        <strong>This website does not use cookies to track you or to show you ads.</strong>
      </p>
      <ul>
        <li>We don’t use analytics, advertising pixels or social media trackers.</li>
        <li>Our fonts are hosted on our own website.</li>
        <li>
          Example videos use YouTube’s privacy-enhanced mode and only load when you press play.
          Once you play a video, YouTube’s own privacy policy applies.
        </li>
        <li>
          When you pay, you leave our website for PayPal, and PayPal’s cookie policy applies
          there.
        </li>
      </ul>
      <p>
        If we ever add analytics or advertising tools, we will update this page and ask for your
        permission first, with a clear option to say no.
      </p>
      <p>
        Questions: <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </LegalPage>
  );
}
