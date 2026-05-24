"use client";

/**
 * FlowThread — a single continuous neon "AI thread" that weaves
 * vertically through a page, connecting all sections visually.
 *
 * Renders as an absolutely-positioned, full-height SVG inside a relative
 * parent (e.g. <main className="relative">). Uses mix-blend-mode: screen
 * so the line shows over dark section backgrounds without occluding them.
 *
 * Optional waypoints render small HUD labels on top of the path at
 * specified vertical positions (in % of parent height).
 */

interface Waypoint {
  /** Vertical position in % of the parent height (0–100). */
  y: number;
  label: string;
  color?: string;
  /** Horizontal position in % (0–100). Defaults to 50 (center). */
  x?: number;
}

interface FlowThreadProps {
  waypoints?: Waypoint[];
}

const DEFAULT_PATH =
  "M 50 0 C 10 90, 10 180, 50 250 C 90 320, 90 410, 50 480 C 10 550, 10 640, 50 710 C 90 780, 90 870, 50 940 L 50 1000";

export default function FlowThread({ waypoints = [] }: FlowThreadProps) {
  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 5 }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        style={{ mixBlendMode: "screen" }}
      >
        <defs>
          {/* Multi-color stroke gradient driven down the line */}
          <linearGradient
            id="ft-grad"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="0"
            y2="1000"
          >
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="30%" stopColor="#ec4899" />
            <stop offset="55%" stopColor="#f97316" />
            <stop offset="80%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>

          <linearGradient
            id="ft-grad-soft"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="0"
            y2="1000"
          >
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#ec4899" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.5" />
          </linearGradient>

          <filter id="ft-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" />
          </filter>

          <filter id="ft-glow-strong" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>

        {/* Far halo (very soft) */}
        <path
          d={DEFAULT_PATH}
          stroke="url(#ft-grad-soft)"
          strokeWidth="9"
          fill="none"
          filter="url(#ft-glow-strong)"
          opacity="0.45"
          vectorEffect="non-scaling-stroke"
        />

        {/* Mid halo */}
        <path
          d={DEFAULT_PATH}
          stroke="url(#ft-grad)"
          strokeWidth="4"
          fill="none"
          filter="url(#ft-glow)"
          opacity="0.7"
          vectorEffect="non-scaling-stroke"
        />

        {/* Crisp main line */}
        <path
          d={DEFAULT_PATH}
          stroke="url(#ft-grad)"
          strokeWidth="1.6"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />

        {/* Traveling pulse — bright dashed segments running along the path */}
        <path
          d={DEFAULT_PATH}
          stroke="#ffffff"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="3 360"
          vectorEffect="non-scaling-stroke"
          opacity="0.95"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-3000"
            dur="9s"
            repeatCount="indefinite"
          />
        </path>

        {/* Secondary, slower pulse with offset */}
        <path
          d={DEFAULT_PATH}
          stroke="#fbbf24"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="2 480"
          vectorEffect="non-scaling-stroke"
          opacity="0.75"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="-200"
            to="-3200"
            dur="13s"
            repeatCount="indefinite"
          />
        </path>

        {/* Waypoint anchor dots on the line at known intersection points
            (where path crosses the center axis x=50). */}
        {[0, 250, 480, 710, 940].map((y) => (
          <g key={y}>
            <circle
              cx="50"
              cy={y}
              r="3"
              fill="#ffffff"
              opacity="0.95"
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx="50"
              cy={y}
              r="1.4"
              fill="#a855f7"
              vectorEffect="non-scaling-stroke"
            />
          </g>
        ))}
      </svg>

      {/* HUD waypoint chips overlay (HTML, positioned in % of parent) */}
      {waypoints.map((w) => {
        const color = w.color ?? "#c084fc";
        return (
          <div
            key={`${w.label}-${w.y}`}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{
              top: `${w.y}%`,
              left: `${w.x ?? 50}%`,
            }}
          >
            <span
              className="px-3 py-1 rounded-full border text-[9px] font-bold uppercase tracking-[0.22em] backdrop-blur-md"
              style={{
                borderColor: `${color}55`,
                background: "rgba(8,10,24,0.55)",
                color,
                boxShadow: `0 0 18px ${color}66, inset 0 0 0 1px rgba(255,255,255,0.04)`,
              }}
            >
              {w.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
