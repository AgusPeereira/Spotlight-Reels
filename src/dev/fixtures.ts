// SOLO PARA DESARROLLO: datos extremos para probar que el diseño no se rompe.
// Se activan con ?data=worst (o empty, one) en la URL, y solo con `npm run dev`.
// No afectan la web publicada.
import type { site as Site } from '../config/site';

type SiteConfig = typeof Site;

export const fixtureNames = ['demo', 'worst', 'empty', 'one'] as const;
export type FixtureName = (typeof fixtureNames)[number];

// Se lee una sola vez al cargar (los links internos no llevan ?data=)
let chosen: FixtureName | null = null;

export function currentFixture(): FixtureName {
  if (chosen) return chosen;
  const value = new URLSearchParams(window.location.search).get('data');
  chosen = (fixtureNames as readonly string[]).includes(value ?? '') ? (value as FixtureName) : 'demo';
  return chosen;
}

// Aplica el conjunto de datos elegido sobre la configuración, antes de mostrar la web
export function applyFixture(site: SiteConfig) {
  const name = currentFixture();

  if (name === 'worst') {
    site.email = 'spotlightreels.recruiting.videos@gmail.com';
    site.instagram.handle = '@spotlightreels.recruitingvideos.us';
    site.orderFormUrl = ''; // formulario sin configurar
    site.founder.photo = '/fotos/guillermo-no-existe.jpg'; // foto con ruta equivocada
    site.packs = [
      {
        ...site.packs[0],
        name: 'Starter Recruiting Package',
        price: 99,
        outcome: "Get on coaches' radar before the spring ID camp and showcase season starts.",
        paypalUrl: '', // Plan B: factura por email
      },
      {
        ...site.packs[1],
        name: 'Pro',
        price: 1249,
        badge: 'MOST POPULAR WITH FAMILIES',
        includes: [
          'Recruiting Cut (3–5 min, up to 40 clips)',
          'Hype Cut for social',
          'Player graphic',
          'Second Recruiting Cut tailored to a specific division or conference',
          'Coach email template with your video link and player card',
          '2 rounds of edits',
        ],
      },
      { ...site.packs[2], name: 'Elite', delivery: '7–10 business days' },
    ];
    site.examples = [
      {
        youtubeId: 'dQw4w9WgXcQ',
        title: 'Valentina Hernández-Castellanos · Class of 2027',
        position: 'Center back / Defensive midfielder',
      },
      { youtubeId: 'xxxxxxxxxxx', title: 'Jo · 2028', position: 'GK' }, // id inválido: sin miniatura
      {
        youtubeId: 'https://youtu.be/jNQXAC9IVRw?si=Ab12Cd34', // link completo pegado
        title: 'Nguyễn Thị Phương Anh · Class of 2026 · ECNL Southwest',
        position: 'Winger',
      },
    ];
  }

  if (name === 'empty') {
    // Ningún link configurado: todo tiene que funcionar por el Plan B
    site.packs = site.packs.map((p) => ({ ...p, paypalUrl: '' }));
    site.orderFormUrl = '';
  }

  if (name === 'one') {
    // Un solo paquete y un solo video de ejemplo
    site.packs = [site.packs[1]];
    site.examples = [{ youtubeId: 'dQw4w9WgXcQ', title: 'Mía · Class of 2027', position: 'Forward' }];
  }
}
