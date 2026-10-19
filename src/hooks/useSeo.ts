import { useEffect } from 'react';

// Cambia el título de la pestaña y la descripción de cada página
export function useSeo(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [title, description]);
}
