interface LogoProps {
  className?: string;
}

export function LogoMark({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Solentra House mark"
      className={className}
    >
      <circle
        cx="40"
        cy="40"
        r="26"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="22" cy="58" r="7" fill="#A8C58F" />
      <circle cx="58" cy="22" r="3.6" fill="#9AB8DC" />
    </svg>
  );
}

export function LogoFull({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 320 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Solentra House"
      className={className}
    >
      <circle
        cx="40"
        cy="40"
        r="26"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="22" cy="58" r="7" fill="#A8C58F" />
      <circle cx="58" cy="22" r="3.6" fill="#9AB8DC" />
      <text
        x="86"
        y="40"
        dominantBaseline="central"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="28"
        fontWeight="500"
        letterSpacing="-0.5"
        fill="currentColor"
      >
        Solentra House
      </text>
    </svg>
  );
}
