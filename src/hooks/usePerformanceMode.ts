"use client";

import { useEffect, useState } from "react";

export interface PerformanceMode {
  /** Fewer particles, lower FPS */
  low: boolean;
  /** No canvas animation — static grid only */
  minimal: boolean;
  /** Prefer CSS over JS effects */
  prefersReducedMotion: boolean;
}

export function usePerformanceMode(): PerformanceMode {
  const [mode, setMode] = useState<PerformanceMode>({
    low: false,
    minimal: false,
    prefersReducedMotion: false,
  });

  useEffect(() => {
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileMq = window.matchMedia("(max-width: 768px)");
    const coarseMq = window.matchMedia("(pointer: coarse)");
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;

    const update = () => {
      const reduced = motionMq.matches;
      const mobile = mobileMq.matches;
      const coarse = coarseMq.matches;
      setMode({
        prefersReducedMotion: reduced,
        minimal: reduced,
        low: reduced || mobile || coarse || !!saveData,
      });
    };

    update();
    motionMq.addEventListener("change", update);
    mobileMq.addEventListener("change", update);
    coarseMq.addEventListener("change", update);

    return () => {
      motionMq.removeEventListener("change", update);
      mobileMq.removeEventListener("change", update);
      coarseMq.removeEventListener("change", update);
    };
  }, []);

  return mode;
}
