interface MissionPatchProps {
  size?: number;
}

export function MissionPatch({ size = 180 }: MissionPatchProps) {
  return (
    <div className="group">
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:rotate-[5deg]"
      >
        <circle cx="100" cy="100" r="96" fill="url(#patch-bg)" stroke="#F59E0B" strokeOpacity={0.4} strokeWidth={2} />
        <circle cx="40" cy="30" r="2" fill="#F59E0B" opacity={0.6} />
        <circle cx="155" cy="25" r="2" fill="#F59E0B" opacity={0.5} />
        <circle cx="165" cy="50" r="1.5" fill="#06B6D4" opacity={0.5} />
        <circle cx="30" cy="145" r="1.5" fill="#06B6D4" opacity={0.4} />
        <circle cx="170" cy="130" r="1" fill="white" opacity={0.3} />
        <g transform="translate(100, 58) scale(0.8) rotate(-20)">
          <path
            d="M0 -45 L5 -30 L7 -5 L8 25 L14 35 L14 43 L8 38 L7 50 L0 57 L-7 50 L-8 38 L-14 43 L-14 35 L-8 25 L-7 -5 L-5 -30 Z"
            fill="#1e293b"
            stroke="#F59E0B"
            strokeWidth={1.5}
            strokeLinejoin="round"
          />
          <path d="M-3 -18 L0 -25 L3 -18 Z" fill="none" stroke="#06B6D4" strokeWidth={1.2} />
          <line x1="-2" y1="-5" x2="-2" y2="25" stroke="#F59E0B" strokeWidth={0.5} opacity={0.3} />
          <line x1="2" y1="-5" x2="2" y2="25" stroke="#F59E0B" strokeWidth={0.5} opacity={0.3} />
          <rect x="-14" y="35" width="6" height="6" rx={1} fill="none" stroke="#F59E0B" strokeWidth={0.8} opacity={0.5} />
          <rect x="8" y="35" width="6" height="6" rx={1} fill="none" stroke="#F59E0B" strokeWidth={0.8} opacity={0.5} />
          <path d="M-4 53 L0 62 L4 53" fill="#F59E0B" opacity={0.3} />
          <path d="M-2 53 L0 59 L2 53" fill="#F59E0B" opacity={0.15} />
        </g>
        <line x1="60" y1="120" x2="140" y2="120" stroke="#F59E0B" strokeOpacity={0.3} strokeWidth={1} />
        <text x="100" y="136" textAnchor="middle" fill="#E2E8F0" fontFamily="system-ui, sans-serif" fontWeight={700} fontSize={11} letterSpacing={1}>
          PUSHKARAJ BARADKAR
        </text>
        <text x="100" y="152" textAnchor="middle" fill="#F59E0B" fontFamily="monospace" fontSize={7} letterSpacing={2}>
          SOFTWARE ENGINEER
        </text>
        <text x="100" y="163" textAnchor="middle" fill="#06B6D4" fontFamily="monospace" fontSize={7} letterSpacing={2}>
          AI RESEARCHER
        </text>
        <text x="100" y="183" textAnchor="middle" fill="#475569" fontFamily="monospace" fontSize={7} letterSpacing={3}>
          USC // 2025-2026
        </text>
        <path id="topArc" d="M 30 80 A 70 70 0 0 1 170 80" fill="none" />
        <text fill="#475569" fontFamily="monospace" fontSize={7} letterSpacing={3}>
          <textPath href="#topArc" startOffset="50%" textAnchor="middle">★ MISSION CONTROL ★</textPath>
        </text>
        <defs>
          <radialGradient id="patch-bg" cx="40%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#1a2744" />
            <stop offset="100%" stopColor="#0d1117" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
