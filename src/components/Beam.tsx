import styles from './Beam.module.css';

type Props = {
  // "hero" = más grande y se enciende al cargar la página
  variant?: 'default' | 'hero';
  className?: string;
};

// Haz de luz verde que cae desde arriba: la firma visual de la marca.
// Se ubica de forma absoluta dentro de una sección con position: relative.
export default function Beam({ variant = 'default', className = '' }: Props) {
  const variantClass = variant === 'hero' ? styles.hero : '';
  return <div aria-hidden="true" className={`${styles.beam} ${variantClass} ${className}`} />;
}
