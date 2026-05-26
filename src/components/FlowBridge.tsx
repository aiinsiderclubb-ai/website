"use client";

import Image from "next/image";

export type FlowBridgeVariant =
  | "hero-how"
  | "how-courses"
  | "courses-tech"
  | "tech-reviews"
  | "reviews-faq"
  | "faq-community"
  | "section-down";

type FlowBridgeProps = {
  variant?: FlowBridgeVariant;
  className?: string;
  /** Show ribbon PNG (black bg removed via screen blend). Use sparingly. */
  ribbon?: boolean;
};

const RIBBON_CFG: Partial<
  Record<FlowBridgeVariant, { asset: string; position: string; flip?: boolean }>
> = {
  "hero-how": {
    asset: "/images/flow/ribbon-stream.png",
    position: "left-[-6%] md:left-0 top-1/2 -translate-y-1/2 w-[min(78vw,560px)]",
  },
  "faq-community": {
    asset: "/images/flow/ribbon-arc.png",
    position: "right-[-4%] md:right-2 top-1/2 -translate-y-1/2 w-[min(72vw,520px)]",
    flip: true,
  },
  "how-courses": {
    asset: "/images/flow/ribbon-wave.png",
    position: "right-[-8%] top-0 w-[min(70vw,480px)]",
    flip: true,
  },
};

/** Thin gradient thread between sections; optional ribbon accent */
export default function FlowBridge({
  variant = "section-down",
  className = "",
  ribbon = false,
}: FlowBridgeProps) {
  const ribbonCfg = ribbon ? RIBBON_CFG[variant] : undefined;

  return (
    <div
      aria-hidden
      className={`flow-bridge relative z-20 pointer-events-none overflow-visible ${
        ribbon ? "h-24 sm:h-28 md:h-32 -my-8 sm:-my-10" : "h-12 sm:h-14 -my-4 sm:-my-5"
      } ${className}`}
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-55"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id={`flow-grad-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.85" />
            <stop offset="55%" stopColor="#ec4899" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.85" />
          </linearGradient>
        </defs>
        <path
          d="M0 70 C 280 20, 520 95, 760 45 S 1080 15, 1200 65"
          stroke={`url(#flow-grad-${variant})`}
          strokeWidth="1.5"
          strokeLinecap="round"
          className="flow-bridge-path"
        />
      </svg>

      {ribbonCfg && (
        <div
          className={`absolute ${ribbonCfg.position} h-auto ${ribbonCfg.flip ? "scale-x-[-1]" : ""}`}
        >
          <Image
            src={ribbonCfg.asset}
            alt=""
            width={900}
            height={320}
            className="h-auto w-full object-contain flow-bridge-ribbon flow-bridge-ribbon-blend"
          />
        </div>
      )}
    </div>
  );
}
