interface PBLogoProps {
  size?: number;
}

export function PBLogo({ size = 32 }: PBLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="48" fill="url(#bg-gradient)" stroke="#F59E0B" strokeOpacity={0.3} strokeWidth={2} />
      <circle cx="20" cy="25" r="1.5" fill="white" opacity={0.8} />
      <circle cx="75" cy="20" r="1" fill="white" opacity={0.6} />
      <circle cx="30" cy="75" r="1" fill="white" opacity={0.5} />
      <circle cx="80" cy="65" r="1.5" fill="#06B6D4" opacity={0.6} />
      <ellipse
        cx="50"
        cy="50"
        rx="40"
        ry="14"
        transform="rotate(-25 50 50)"
        fill="none"
        stroke="#F59E0B"
        strokeOpacity={0.35}
        strokeWidth={1.5}
      />
      <text
        x="50"
        y="56"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#E2E8F0"
        fontFamily="system-ui, sans-serif"
        fontWeight={800}
        fontSize={32}
        letterSpacing={-1}
      >
        PB
      </text>
      <defs>
        <radialGradient id="bg-gradient" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#1a2744" />
          <stop offset="100%" stopColor="#0a0e1a" />
        </radialGradient>
      </defs>
    </svg>
  );
}
