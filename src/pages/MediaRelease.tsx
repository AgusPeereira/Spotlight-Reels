import { site } from '../config/site';
import LegalPage from '../components/LegalPage';

// Media Release: el permiso (opcional) para mostrar el video del jugador.
// El cliente lo da o no en el Google Form; esta página explica qué significa.
export default function MediaRelease() {
  return (
    <LegalPage
      title="Media Release"
      description="Optional permission to show your video as an example of our work."
    >
      <p>
        With your permission, we’d love to show your video as an example of our work. This is
        optional and never affects your order.
      </p>
      <p>
        If you say yes, you allow Spotlight Reels to show the final videos we made for you (and
        the player’s name, position, graduation year and club as they appear in the video) on our
        website, Instagram and other social media, for free and without time limit, to promote our
        services. We will never sell your video, use it in paid ads without asking you again, or
        share your contact details.
      </p>
      <p>If the player is under 18, this permission must be given by a parent or legal guardian.</p>
      <p>
        You can withdraw your permission at any time by emailing{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a>. We will remove your video from our
        website and our profiles within 7 days. Content that others have already shared or saved is
        outside our control.
      </p>
    </LegalPage>
  );
}
