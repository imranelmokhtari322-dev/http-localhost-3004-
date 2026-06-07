interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 36, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer ring — faint halo */}
      <circle cx="18" cy="18" r="16" stroke="white" strokeWidth="0.75" opacity="0.18" />

      {/* Upper arc of S — sweeps right */}
      <path
        d="M18 5 Q32 5 32 13 Q32 18 18 18"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
      />

      {/* Lower arc of S — sweeps left (counter-rotation) */}
      <path
        d="M18 18 Q4 18 4 23 Q4 31 18 31"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
      />

      {/* Pivot dot */}
      <circle cx="18" cy="18" r="2.8" fill="white" />

      {/* Tiny arrowhead on upper arc tip */}
      <path
        d="M15 5.8 L18 4.2 L18.8 7.8"
        stroke="white"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
