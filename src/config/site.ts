// ============================================================
// CONFIGURACIÓN DE LA WEB
// Este es el único archivo que tenés que editar para cambiar
// links, precios, paquetes, videos de ejemplo y tu foto.
// ============================================================

export type PackId = 'starter' | 'pro' | 'elite';

export type Pack = {
  id: PackId;
  name: string;
  price: number; // en USD, sin símbolo
  outcome: string; // la frase de resultado que va debajo del precio
  includes: string[]; // cada ítem es una línea de la lista
  delivery: string;
  badge?: string; // ej. "MOST POPULAR"; dejalo vacío o borralo si no lleva
  featured?: boolean; // true = tarjeta destacada
  // Link de pago de PayPal. Si lo dejás vacío (''), el botón de pago
  // cambia solo a "Request a PayPal invoice" (Plan B por email).
  paypalUrl: string;
};

export type Example = {
  youtubeId: string; // el link del video de YouTube, o solo su ID (lo que va después de "youtu.be/")
  title: string; // ej. "Martina R. · Class of 2027"
  position: string; // ej. "Center back"
  // 'hype' = video vertical (Shorts/Reels): se muestra en formato de celular.
  // 'recruiting' = video horizontal para entrenadores.
  cut: 'recruiting' | 'hype';
};

// URL pública de la web. Cambiala cuando la publiques en Vercel
// (o cuando tengas dominio propio). Se usa para la imagen al compartir
// y para la página de regreso de PayPal.
const siteUrl = 'https://spotlight-reels.vercel.app';

export const site = {
  name: 'Spotlight Reels',
  url: siteUrl,

  // Página de regreso para tus links de PayPal, si tu cuenta lo permite.
  // Usá una por paquete para que el formulario sepa qué compró:
  //   Starter → https://TU-WEB/thank-you?pack=starter
  //   Pro     → https://TU-WEB/thank-you?pack=pro
  //   Elite   → https://TU-WEB/thank-you?pack=elite
  thankYouUrl: `${siteUrl}/thank-you`,

  // Formulario de pedido (Google Form). Si lo dejás vacío, la página
  // /thank-you dice "We'll email you the order form within 1 hour."
  orderFormUrl: 'https://forms.gle/RcXCgvcfkMR6ntLv8',

  // OPCIONAL: que el formulario se abra con el paquete ya elegido.
  // Se completa siguiendo registro/COMO-ARMAR-EL-REGISTRO.md (paso 3).
  // Si lo dejás vacío, se usa orderFormUrl tal cual.
  orderFormPrefill: {
    url: '', // link largo: https://docs.google.com/forms/d/e/.../viewform
    packEntryId: '', // ej. 'entry.123456789' (la pregunta "Package")
  },

  email: 'spotlightreels0108@gmail.com',

  instagram: {
    handle: '@spotlightreels.us',
    url: 'https://www.instagram.com/spotlightreels.us/',
    dmUrl: 'https://ig.me/m/spotlightreels.us', // abre directo los mensajes
  },

  packs: [
    {
      id: 'starter',
      name: 'Starter',
      price: 99,
      outcome: "Get on coaches' radar.",
      includes: [
        'Recruiting Cut (2–3 min, up to 20 clips)',
        'Player card',
        '1 round of edits',
      ],
      delivery: '48 hours',
      paypalUrl: 'https://www.paypal.com/ncp/payment/SLLWFE5VKV3KJ',
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 149,
      outcome: 'Get recruited, and look the part online.',
      includes: [
        'Recruiting Cut (3–5 min, up to 40 clips)',
        'Hype Cut for social',
        'Player graphic',
        '2 rounds of edits',
      ],
      delivery: '48 hours',
      badge: 'MOST POPULAR',
      featured: true,
      paypalUrl: 'https://www.paypal.com/ncp/payment/TA88KR9S9P92E',
    },
    {
      id: 'elite',
      name: 'Elite',
      price: 249,
      outcome: 'For players with full games to show.',
      includes: [
        'Everything in Pro',
        'We pick your plays from 2–3 full games',
        '3 extra social clips',
      ],
      delivery: '7 days',
      paypalUrl: 'https://www.paypal.com/ncp/payment/UJLYZ5P856NWL',
    },
  ] as Pack[],

  // Videos de ejemplo (YouTube "no listados", con permiso del jugador).
  // Mientras la lista esté vacía, la sección "See it in action" no se muestra.
  // Ejemplo:
  // { youtubeId: 'https://youtu.be/XXXXXXXXXXX', title: 'Martina R. · Class of 2027', position: 'Center back', cut: 'recruiting' },
  // Para un Hype Cut vertical (Shorts) usá cut: 'hype'.
  examples: [
    {
      youtubeId: 'https://youtu.be/A24YnONPRVo',
      title: 'Luciano Lombardo · Class of 2027',
      position: 'Goalkeeper · Doral Soccer ECNL',
      cut: 'recruiting',
    },
    {
      youtubeId: 'https://youtube.com/shorts/YaqiuH-nLes',
      title: 'Luciano Lombardo · Class of 2027',
      position: 'Goalkeeper · Doral Soccer ECNL',
      cut: 'hype',
    },
  ] as Example[],

  founder: {
    name: 'Guillermo',
    // Tu foto: guardala en web/public/ (ej. web/public/guillermo.jpg)
    // y escribí acá '/guillermo.jpg'. Vacío = se muestra el isotipo.
    photo: '',
  },

  // Datos que aparecen en las páginas legales (Terms, Privacy, Refunds, Cookies, Media Release).
  // Si abrís una empresa o el contador te sugiere otro nombre legal, cambialo acá.
  legal: {
    operator: 'Guillermo Pereira Letrizón',
    location: 'Salto, Uruguay',
    updated: 'October 19, 2026', // cambiá la fecha cada vez que edites una política
  },

  // Aviso en las páginas legales de que los textos están en revisión.
  // true = se muestra arriba de cada política.
  showLegalDraftNotice: false,
};

// Busca un paquete por su id (devuelve undefined si no existe)
export function getPack(id: string | undefined | null): Pack | undefined {
  return site.packs.find((p) => p.id === id);
}

// Link al formulario de pedido. Si sabemos el paquete y está configurado
// orderFormPrefill, el formulario se abre con ese paquete ya marcado.
export function orderFormLink(pack?: Pack): string {
  const { url, packEntryId } = site.orderFormPrefill;
  if (pack && url.trim() && packEntryId.trim()) {
    const base = url.trim().split('?')[0]; // por si el link ya trae "?usp=..."
    return `${base}?usp=pp_url&${packEntryId.trim()}=${encodeURIComponent(pack.name)}`;
  }
  return site.orderFormUrl;
}
