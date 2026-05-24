"use client";

import { motion } from "framer-motion";

type Variant = "violet" | "orange" | "cyan" | "violet-orange" | "cyan-violet" | "violet-cyan" | "orange-violet";

interface SectionBridgeProps {
  /** Visual variant — controls the gradient palette of the connector. */
  variant?: Variant;
  /** Optional label that sits in the middle of the bridge — like a HUD waypoint. */
  label?: string;
  /** Curve direction. left = curve dips down on the left half, right = on the right half. */
  curve?: "left" | "right" | "straight";
  /** Vertical height of the bridge in px. */
  height?: number;
}

const PALETTES: Record<Variant, { from: string; via?: string; to: string; node: string; glow: string }> = {
  violet: { from: "#a855f7", to: "#7c3aed", node: "#c084fc", glow: "rgba(168,85,247,0.35)" },
  orange: { from: "#fb923c", to: "#f97316", node: "#fdba74", glow: "rgba(249,115,22,0.32)" },
  cyan: { from: "#22d3ee", to: "#06b6d4", node: "#67e8f9", glow: "rgba(34,211,238,0.32)" },
  "violet-orange": { from: "#a855f7", via: "#ec4899", to: "#f97316", node: "#fb923c", glow: "rgba(236,72,153,0.32)" },
  "cyan-violet": { from: "#22d3ee", via: "#7c3aed", to: "#a855f7", node: "#c084fc", glow: "rgba(124,58,237,0.32)" },
  "violet-cyan": { from: "#a855f7", via: "#7c3aed", to: "#22d3ee", node: "#67e8f9", glow: "rgba(34,211,238,0.30)" },
  "orange-violet": { from: "#f97316", via: "#ec4899", to: "#a855f7", node: "#c084fc", glow: "rgba(168,85,247,0.32)" },
};

export default function SectionBridge({
  variant = "violet-orange",
  label,
  curve = "straight",
  height = 120,
}: SectionBridgeProps) {
  const p = PALETTES[variant];
  const id = `sb-${variant}-${curve}`;

  // Build path: a smooth horizontal line with a slight S/curve dip
  const path =
    curve === "left"
      ? "M 0 60 C 220 60, 280 110, 480 60 S 780 10, 1024 60"
      : curve === "right"
      ? "M 0 60 C 220 60, 280 10, 480 60 S 780 110, 1024 60"
      : "M 0 60 C 256 60, 320 60, 512 60 S 768 60, 1024 60";

  return (
    <div
      aria-hidden
      className="relative w-full pointer-events-none select-none"
      style={{ height, marginTop: -height / 2, marginBottom: -height / 2, zIndex: 5 }}
    >
      {/* Soft glow underneath the bridge */}
      <div
        className="absolute inset-0 mix-blend-screen opacity-70"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${p.glow} 0%, transparent 70%)`,
        }}
      />

      <svg
        viewBox="0 0 1024 120"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id={`${id}-line`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={p.from} stopOpacity="0" />
            <stop offset="12%" stopColor={p.from} stopOpacity="0.9" />
            {p.via && <stop offset="50%" stopColor={p.via} stopOpacity="1" />}
            <stop offset="88%" stopColor={p.to} stopOpacity="0.9" />
            <stop offset="100%" stopColor={p.to} stopOpacity="0" />
          </linearGradient>
          <linearGradient id={`${id}-line-soft`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={p.from} stopOpacity="0" />
            <stop offset="50%" stopColor={p.via ?? p.to} stopOpacity="0.25" />
            <stop offset="100%" stopColor={p.to} stopOpacity="0" />
          </linearGradient>
          <filter id={`${id}-blur`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" />
          </filter>
        </defs>

        {/* Outer halo line */}
        <path
          d={path}
          stroke={`url(#${id}-line-soft)`}
          strokeWidth="6"
          fill="none"
          filter={`url(#${id}-blur)`}
          opacity="0.7"
        />

        {/* Main line */}
        <path
          d={path}
          stroke={`url(#${id}-line)`}
          strokeWidth="1.5"
          fill="none"
        />

        {/* Animated traveling pulse along the line */}
        <motion.circle
          r="3.5"
          fill={p.node}
          filter={`drop-shadow(0 0 6px ${p.glow})`}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <animateMotion dur="4.5s" repeatCount="indefinite" path={path} />
        </motion.circle>
        <motion.circle
          r="2"
          fill={p.from}
          filter={`drop-shadow(0 0 4px ${p.glow})`}
        >
          <animateMotion dur="6s" repeatCount="indefinite" path={path} begin="-2s" />
        </motion.circle>

        {/* Endpoint nodes */}
        <circle cx="0" cy="60" r="4" fill={p.from} opacity="0.0" />
        <circle cx="1024" cy="60" r="4" fill={p.to} opacity="0.0" />

        {/* Soft tick marks along the line — circuit-like decoration */}
        {[0.18, 0.34, 0.5, 0.66, 0.82].map((t) => (
          <circle
            key={t}
            cx={1024 * t}
            cy={60}
            r={t === 0.5 ? 2.4 : 1.6}
            fill={p.node}
            opacity={t === 0.5 ? 0.95 : 0.5}
          />
        ))}
      </svg>

      {label && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className="px-3 py-1 rounded-full border text-[10px] font-semibold uppercase tracking-[0.2em] backdrop-blur-md"
            style={{
              background: "rgba(8, 10, 24, 0.55)",
              borderColor: p.glow,
              color: p.node,
              boxShadow: `0 0 18px ${p.glow}`,
            }}
          >
            {label}
          </div>
        </div>
      )}
    </div>
  );
}
