"use client";

import { usePerformanceMode } from "@landing/hooks/usePerformanceMode";

interface Waypoint {
  y: number;
  label: string;
  color?: string;
  /** Horizontal position in % (0–100). */
  x?: number;
}

interface FlowThreadProps {
  waypoints?: Waypoint[];
}

/** Gentle S-curve along the right edge — avoids crossing hero text */
const THREAD_PATH =
  "M 86 0 C 78 140, 94 280, 86 420 C 78 560, 94 700, 86 840 C 78 920, 86 1000";

export default function FlowThread({ waypoints = [] }: FlowThreadProps) {
  const { minimal, low, prefersReducedMotion } = usePerformanceMode();
  const animate = !minimal && !prefersReducedMotion;

  return (
    <div
      aria-hidden
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      style={{ isolation: "isolate" }}
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-80"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="flow-thread-grad"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="0"
            y2="1000"
          >
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.9" />
            <stop offset="35%" stopColor="#ec4899" stopOpacity="0.85" />
            <stop offset="65%" stopColor="#f97316" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Soft wide under-glow — no feGaussianBlur (GPU-heavy) */}
        <path
          d={THREAD_PATH}
          stroke="url(#flow-thread-grad)"
          strokeWidth="5"
          fill="none"
          opacity="0.22"
          vectorEffect="non-scaling-stroke"
        />

        {/* Main line */}
        <path
          d={THREAD_PATH}
          stroke="url(#flow-thread-grad)"
          strokeWidth="1.2"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />

        {/* Traveling pulse — CSS animation only, one layer */}
        {animate && (
          <path
            d={THREAD_PATH}
            stroke="#ffffff"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="4 320"
            vectorEffect="non-scaling-stroke"
            opacity="0.7"
            className="flow-thread-pulse"
          />
        )}

        {/* Anchor nodes */}
        {[0, 250, 500, 750, 1000].map((y) => (
          <circle
            key={y}
            cx="86"
            cy={y}
            r="1.8"
            fill="#c084fc"
            opacity="0.55"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      {/* Waypoints — only on desktop when not in low perf mode */}
      {!low &&
        waypoints.map((w) => {
          const color = w.color ?? "#c084fc";
          return (
            <div
              key={`${w.label}-${w.y}`}
              className="absolute -translate-y-1/2 hidden md:block"
              style={{
                top: `${w.y}%`,
                right: "4%",
                left: "auto",
              }}
            >
              <span
                className="px-2.5 py-0.5 rounded-full border text-[9px] font-bold uppercase tracking-[0.2em]"
                style={{
                  borderColor: `${color}44`,
                  background: "rgba(8,10,24,0.72)",
                  color,
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
