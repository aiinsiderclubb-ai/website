"use client";

import { motion } from "framer-motion";

export default function HomeSectionBridge() {
  return (
    <section
      aria-hidden
      className="relative h-16 md:h-20 -my-2 md:-my-3 overflow-hidden pointer-events-none"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-6xl">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-14 w-px bg-gradient-to-b from-transparent via-[#22d3ee]/70 to-transparent" />
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-[220px] w-40 h-px bg-gradient-to-r from-transparent to-[#a855f7]/50 hidden md:block" />
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-[80px] w-40 h-px bg-gradient-to-l from-transparent to-[#f97316]/50 hidden md:block" />

          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#a855f7]"
            animate={{ opacity: [0.45, 1, 0.45], scale: [1, 1.15, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-[#22d3ee]/30"
            animate={{ scale: [0.9, 1.2, 0.9], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
}
