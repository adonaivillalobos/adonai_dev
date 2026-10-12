function Logo({ size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="ADVR logo"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#logo-gradient)" />
      <text
        x="32"
        y="39"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
        fontSize="20"
        fontWeight="800"
        fill="#0f172a"
        textLength="46"
        lengthAdjust="spacingAndGlyphs"
      >
        ADVR
      </text>
    </svg>
  )
}

export default Logo