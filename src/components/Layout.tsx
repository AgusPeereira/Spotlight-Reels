import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import DmButton from './DmButton';
import ScrollManager from './ScrollManager';

// Estructura común a todas las páginas: encabezado, contenido y pie
export default function Layout() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <DmButton />
      {/* Vuelve arriba al cambiar de página y baja a la sección si el link tiene #ancla */}
      <ScrollManager />
    </>
  );
}
