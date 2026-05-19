"use client";

import dynamic from "next/dynamic";
import { usePerformanceMode } from "@landing/hooks/usePerformanceMode";

const NeuralBackground = dynamic(() => import("@landing/components/NeuralBackground"), {
  ssr: false,
});

export default function SiteBackground() {
  const perf = usePerformanceMode();

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
      style={{ contain: "strict" }}
      aria-hidden
    >
      {/* Cyber blueprint grid — pure CSS, zero GPU cost */}
      <div className="site-grid absolute inset-0 opacity-50" />

      {/* Ambient glow orbs — radial gradients, no filter:blur */}
      <div className={`ambient-orbs absolute inset-0 ${perf.low ? "ambient-orbs-static" : ""}`}>
        <div className="ambient-orb ambient-orb-violet" />
        {!perf.low && <div className="ambient-orb ambient-orb-orange" />}
        {!perf.low && <div className="ambient-orb ambient-orb-cyan" />}
      </div>

      {/* Particle network — lazy-loaded canvas */}
      {!perf.minimal && <NeuralBackground />}
    </div>
  );
}
