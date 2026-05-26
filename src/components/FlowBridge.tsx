"use client";

import Image from "next/image";

export type FlowBridgeVariant =
  | "hero-how"
  | "how-courses"
  | "courses-tech"
  | "tech-reviews"
  | "reviews-faq"
  | "faq-community"
  | "section-down"
  | "section-up";

type FlowBridgeProps = {
  variant?: FlowBridgeVariant;
  className?: string;
};

const VARIANTS: Record<
  FlowBridgeVariant,
  {
    asset: string;
    position: string;
    flip?: boolean;
    glow: string;
  }
> = {
  "hero-how": {
    asset: "/images/flow/ribbon-stream.png",
    position: "left-[-8%] md:left-[-4%] top-1/2 -translate-y-1/2 w-[min(92vw,720px)] h-auto",
    glow: "rgba(168,85,247,0.22)",
  },
  "how-courses": {
    asset: "/images/flow/ribbon-arc.png",
    position: "right-[-12%] md:right-[-6%] top-0 w-[min(88vw,680px)] h-auto",
    flip: true,
    glow: "rgba(249,115,22,0.20)",
  },
  "courses-tech": {
    asset: "/images/flow/ribbon-wave.png",
    position: "left-[-10%] bottom-0 w-[min(90vw,700px)] h-auto",
    glow: "rgba(236,72,153,0.18)",
  },
  "tech-reviews": {
    asset: "/images/flow/ribbon-knot.png",
    position: "right-[-8%] top-1/2 -translate-y-1/2 w-[min(85vw,640px)] h-auto",
    flip: true,
    glow: "rgba(34,211,238,0.16)",
  },
  "reviews-faq": {
    asset: "/images/flow/ribbon-stream.png",
    position: "left-[5%] top-0 w-[min(80vw,620px)] h-auto",
    flip: true,
    glow: "rgba(168,85,247,0.18)",
  },
  "faq-community": {
    asset: "/images/flow/ribbon-arc.png",
    position: "right-[-6%] bottom-0 w-[min(92vw,760px)] h-auto",
    glow: "rgba(249,115,22,0.22)",
  },
  "section-down": {
    asset: "/images/flow/ribbon-wave.png",
    position: "left-1/2 -translate-x-1/2 top-0 w-[min(95vw,900px)] h-auto",
    glow: "rgba(168,85,247,0.16)",
  },
  "section-up": {
    asset: "/images/flow/ribbon-stream.png",
    position: "left-1/2 -translate-x-1/2 bottom-0 w-[min(95vw,900px)] h-auto rotate-180",
    glow: "rgba(249,115,22,0.16)",
  },
};

/** Decorative energy ribbon that visually links two adjacent sections */
export default function FlowBridge({ variant = "section-down", className = "" }: FlowBridgeProps) {
  const cfg = VARIANTS[variant];

  return (
    <div
      aria-hidden
      className={`flow-bridge relative z-20 pointer-events-none h-28 sm:h-36 md:h-44 lg:h-52 -my-10 sm:-my-14 md:-my-16 overflow-visible ${className}`}
    >
      {/* SVG energy threads — lightweight, always visible */}
      <svg
        className="absolute inset-0 w-full h-full opacity-70"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id={`flow-grad-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.9" />
            <stop offset="45%" stopColor="#ec4899" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.9" />
          </linearGradient>
          <filter id={`flow-glow-${variant}`}>
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M-40 140 C 200 40, 400 180, 600 90 S 1000 30, 1240 120"
          stroke={`url(#flow-grad-${variant})`}
          strokeWidth="2.5"
          strokeLinecap="round"
          filter={`url(#flow-glow-${variant})`}
          className="flow-bridge-path"
        />
        <path
          d="M-20 160 C 220 80, 420 200, 640 110 S 980 50, 1220 150"
          stroke={`url(#flow-grad-${variant})`}
          strokeWidth="1.2"
          strokeOpacity="0.45"
          strokeLinecap="round"
          className="flow-bridge-path flow-bridge-path-delay"
        />
      </svg>

      {/* Ribbon image from brand assets */}
      <div
        className={`absolute ${cfg.position} opacity-75 md:opacity-90 transition-opacity duration-500 ${cfg.flip ? "scale-x-[-1]" : ""}`}
        style={{
          filter: `drop-shadow(0 0 40px ${cfg.glow}) drop-shadow(0 0 80px ${cfg.glow})`,
        }}
      >
        <Image
          src={cfg.asset}
          alt=""
          width={1200}
          height={400}
          className="h-auto w-full object-contain flow-bridge-ribbon"
          priority={variant === "hero-how"}
        />
      </div>

      {/* Ambient pulse nodes */}
      <span className="flow-node flow-node-a" />
      <span className="flow-node flow-node-b" />
      <span className="flow-node flow-node-c" />
    </div>
  );
}
