# Web de Spotlight Reels

Vite + React + TypeScript. Sin backend: los pagos los procesa PayPal y los pedidos llegan por el Google Form.

## Verla en tu computadora

```bash
npm install
npm run dev
```

Abrí el link que aparece (`http://localhost:5173`). Para verla en el celular, conectalo al mismo wifi y abrí el link que dice `Network:`.

## Qué archivo editar

| Quiero cambiar… | Archivo |
| --- | --- |
| Precios, paquetes, links de PayPal, Google Form, email, Instagram, videos de ejemplo, tu foto | `src/config/site.ts` (es el único que vas a tocar seguido) |
| Textos de una sección de la Home | `src/sections/<Sección>.tsx` (ej. `Faq.tsx`, `Values.tsx`) |
| Página de pago / gracias | `src/pages/Order.tsx`, `src/pages/ThankYou.tsx` |
| Textos legales | `src/pages/Terms.tsx`, `Privacy.tsx`, `Refunds.tsx` |
| Colores, tipografías, espacios | `src/styles/tokens.css` |

## Agregar videos de ejemplo

1. Subí el video a YouTube como **No listado** (con permiso del jugador y de su familia).
2. En `site.ts`, dentro de `examples`, agregá una línea por video:

```ts
examples: [
  { youtubeId: 'https://youtu.be/XXXXXXXXXXX', title: 'Martina R. · Class of 2027', position: 'Center back' },
],
```

Podés pegar el link completo o solo el ID. Cuando haya al menos un video, la sección "See it in action" aparece sola.

## Agregar tu foto

1. Guardala en `public/` (por ejemplo `public/guillermo.jpg`, vertical, de unos 800×1000 px).
2. En `site.ts`: `founder: { name: 'Guillermo', photo: '/guillermo.jpg' }`.

Si la ruta está mal escrita, la web muestra el isotipo en su lugar, así que nunca vas a ver una imagen rota.

## Probar el camino de compra sin pagar

1. Home → **Packages** → **Order Pro**.
2. Tocá **Pay $149 with PayPal** sin marcar la casilla: tiene que pedirte que la marques.
3. Marcala y volvé a tocar: se abre la página de PayPal con el monto correcto. **No pagues**: volvé atrás.
4. Tocá **Already paid? Fill out the order form →**, que te lleva a `/thank-you`.
5. Tocá **Fill out the order form (5 min)**: se abre el Google Form en otra pestaña.

### Datos de prueba (solo con `npm run dev`)

Abajo al centro aparece un selector **Demo data / Worst case / No links / One**:

- **Worst case**: nombres largos, precio de 4 cifras, foto con ruta equivocada, videos de ejemplo y sin formulario.
- **No links**: todos los links de PayPal y el formulario vacíos, para ver el **Plan B** (factura por email).
- **One**: un solo paquete y un solo video.

Ese selector no aparece en la web publicada.

## Publicar en Vercel (gratis)

1. Creá una cuenta en [github.com](https://github.com) y un repositorio nuevo, **privado**, llamado `spotlight-reels-web` (sin README).
2. En la terminal, dentro de esta carpeta (`web`):

   ```bash
   git init
   git add .
   git commit -m "Primera versión de la web"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/spotlight-reels-web.git
   git push -u origin main
   ```

3. Entrá a [vercel.com](https://vercel.com) → **Sign up with GitHub**.
4. **Add New… → Project** → elegí `spotlight-reels-web` → **Import**. Vercel detecta Vite solo: no cambies nada → **Deploy**.
5. Cuando termine, copiá la dirección que te da (ej. `https://spotlight-reels-web.vercel.app`).
6. En `src/config/site.ts`, cambiá `siteUrl` por esa dirección y subí el cambio:

   ```bash
   git add .
   git commit -m "URL real"
   git push
   ```

   Vercel vuelve a publicar solo en cada `git push`.
7. En PayPal, si tus links de pago tienen la opción de "página de regreso", poné `https://TU-DIRECCION/thank-you`.
8. Probá el link compartiéndolo por WhatsApp: tiene que aparecer la imagen de la marca.

## Páginas legales

Los textos salen de tu documento "Spotlight Reels: políticas legales de la web":

| Página | Archivo |
| --- | --- |
| `/terms` Terms of Service | `src/pages/Terms.tsx` |
| `/refunds` Refund Policy | `src/pages/Refunds.tsx` |
| `/privacy` Privacy Policy | `src/pages/Privacy.tsx` |
| `/cookies` Cookie Policy | `src/pages/Cookies.tsx` |
| `/media-release` Media Release | `src/pages/MediaRelease.tsx` |

El nombre del responsable, la ciudad y la fecha de "Last updated" están en `site.ts`, dentro de `legal`. Si editás una política, actualizá esa fecha.

**Cookies:** la web no usa cookies de seguimiento (fuentes alojadas en la propia web, YouTube en modo privacidad y sin analítica), así que no necesita banner. Si algún día agregás Google Analytics o el píxel de Meta, hay que sumar el banner (el texto está en tu documento) y actualizar `Cookies.tsx`.

## Pendientes

- `site.ts`: reemplazar `siteUrl` por la URL real (paso 6 de "Publicar en Vercel").
- Armar el registro de compras: seguí `../registro/COMO-ARMAR-EL-REGISTRO.md` (preguntas nuevas del formulario, planilla y script).
- Agregar al Google Form las cuatro casillas de tu documento (sección 5), con los links a `/terms`, `/privacy` y `/media-release` cuando la web esté publicada.
- Preguntarle al contador por la inscripción en la URCDP y si el nombre legal está bien.
- Hacer revisar los textos legales por un abogado cuando el negocio crezca.
- Opcional: tu foto, videos de ejemplo y, más adelante, un email con dominio propio.
