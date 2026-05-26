"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Variant = "arc" | "wave" | "stream" | "knot";
type Align = "left" | "center" | "right";

const ASSETS: Record<Variant, string> = {
  arc: "/images/flow/ribbon-arc.png",
  wave: "/images/flow/ribbon-wave.png",
  stream: "/images/flow/ribbon-stream.png",
  knot: "/images/flow/ribbon-knot.png",
};

interface Props {
  variant?: Variant;
  align?: Align;
  flip?: boolean;
  className?: string;
  /** Slightly overlap previous/next section */
  overlap?: "top" | "bottom" | "both";
}

export default function SectionFlowBridge({
  variant = "wave",
  align = "center",
  flip = false,
  className = "",
  overlap = "both",
}: Props) {
  const alignClass =
    align === "left" ? "justify-start pl-0 md:pl-4" : align === "right" ? "justify-end pr-0 md:pr-4" : "justify-center";

  const overlapClass =
    overlap === "top"
      ? "-mt-24 md:-mt-32"
      : overlap === "bottom"
        ? "-mb-24 md:-mb-32"
        : "-my-16 md:-my-24";

  return (
    <div
      className={`relative z-20 pointer-events-none w-full max-w-[100vw] overflow-hidden ${overlapClass} ${className}`}
      aria-hidden
    >
      {/* Soft color bleed into adjacent sections */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(168,85,247,0.12) 0%, rgba(249,115,22,0.06) 40%, transparent 72%)",
        }}
      />

      <motion.div
        className={`relative mx-auto flex h-[140px] sm:h-[180px] md:h-[220px] lg:h-[260px] max-w-7xl px-4 ${alignClass}`}
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <div
          className={`relative w-full max-w-4xl h-full ${flip ? "scale-x-[-1]" : ""}`}
          style={{
            maskImage: "linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)",
          }}
        >
          <Image
            src={ASSETS[variant]}
            alt=""
            fill
            className="object-contain object-center drop-shadow-[0_0_40px_rgba(168,85,247,0.35)] flow-bridge-img"
            sizes="(max-width: 768px) 100vw, 900px"
            priority={false}
          />
        </div>
      </motion.div>

      {/* Connector lines — visual “thread” into next block */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[#a855f7]/50 via-[#f97316]/30 to-transparent" />
    </div>
  );
}
