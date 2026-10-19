import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router';

// Maneja el scroll al cambiar de página:
// - si el link tiene #ancla (ej. /#packages), baja a esa sección;
// - si es una página nueva, empieza arriba de todo;
// - con "atrás"/"adelante" del navegador, deja que el navegador recuerde la posición.
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (hash) {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
      return;
    }
    if (navigationType !== 'POP') window.scrollTo(0, 0);
  }, [pathname, hash, key, navigationType]);

  return null;
}
