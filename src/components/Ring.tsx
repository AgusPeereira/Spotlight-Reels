type Props = {
  width?: number;
  className?: string;
};

// El anillo del logo: el mismo que marca al jugador en los videos
export default function Ring({ width = 64, className }: Props) {
  return (
    <svg
      viewBox="0 0 140 44"
      width={width}
      height={(width * 44) / 140}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* pathLength=1 permite animar el trazo (dibujarlo) con CSS si hace falta */}
      <ellipse
        cx="70"
        cy="22"
        rx="64"
        ry="17"
        fill="none"
        stroke="#39FF6A"
        strokeWidth="9"
        pathLength={1}
      />
    </svg>
  );
}
