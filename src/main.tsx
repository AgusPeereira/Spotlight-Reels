import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
// Tipografías alojadas en la propia web (no se le pasa ningún dato a Google)
import '@fontsource/bebas-neue/400.css';
import '@fontsource/barlow/400.css';
import '@fontsource/barlow/600.css';
import './styles/global.css';

import Layout from './components/Layout';
import Home from './pages/Home';
import Order from './pages/Order';
import ThankYou from './pages/ThankYou';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Refunds from './pages/Refunds';
import Cookies from './pages/Cookies';
import MediaRelease from './pages/MediaRelease';
import NotFound from './pages/NotFound';

// Mapa de páginas de la web
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/order/:pack', element: <Order /> },
      { path: '/thank-you', element: <ThankYou /> },
      { path: '/terms', element: <Terms /> },
      { path: '/privacy', element: <Privacy /> },
      { path: '/refunds', element: <Refunds /> },
      { path: '/cookies', element: <Cookies /> },
      { path: '/media-release', element: <MediaRelease /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

// Solo en desarrollo (npm run dev): datos de prueba extremos con ?data=worst
let DevToggle: (() => React.JSX.Element) | null = null;
if (import.meta.env.DEV) {
  const { applyFixture } = await import('./dev/fixtures');
  const { site } = await import('./config/site');
  applyFixture(site);
  DevToggle = (await import('./dev/DataToggle')).default;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    {DevToggle && <DevToggle />}
  </StrictMode>,
);
