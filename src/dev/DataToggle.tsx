// SOLO PARA DESARROLLO: selector abajo al centro para cambiar entre datos de prueba.
// No aparece en la web publicada.
import { currentFixture, fixtureNames } from './fixtures';

const labels = { demo: 'Demo data', worst: 'Worst case', empty: 'No links', one: 'One' };

export default function DataToggle() {
  const active = currentFixture();

  function select(name: string) {
    const url = new URL(window.location.href);
    if (name === 'demo') url.searchParams.delete('data');
    else url.searchParams.set('data', name);
    window.location.assign(url.toString()); // recarga para aplicar los datos
  }

  return (
    <div
      role="group"
      aria-label="Test data (dev only)"
      style={{
        position: 'fixed',
        left: '50%',
        bottom: 12,
        transform: 'translateX(-50%)',
        zIndex: 999,
        display: 'flex',
        gap: 2,
        padding: 3,
        borderRadius: 999,
        background: '#d9dcd9',
        font: '600 12px system-ui, sans-serif',
        boxShadow: '0 2px 10px rgb(0 0 0 / 0.4)',
      }}
    >
      {fixtureNames.map((name) => (
        <button
          key={name}
          type="button"
          onClick={() => select(name)}
          aria-pressed={active === name}
          style={{
            border: 0,
            borderRadius: 999,
            padding: '6px 10px',
            cursor: 'pointer',
            background: active === name ? '#fff' : 'transparent',
            color: '#111',
            font: 'inherit',
            whiteSpace: 'nowrap',
          }}
        >
          {labels[name]}
        </button>
      ))}
    </div>
  );
}
