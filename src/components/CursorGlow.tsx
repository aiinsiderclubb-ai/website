"use client";

import { useEffect, useRef, useState } from "react";

// Pure CSS cursor glow — no Framer Motion spring overhead
// Uses requestAnimationFrame for smooth, throttled updates
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    // Only on desktop and only if user prefers motion
    if (isTouchDevice) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handleMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (!ref.current) return;
        ref.current.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`;
      });
      if (!visible) setVisible(true);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("mouseleave", () => setVisible(false));
    document.addEventListener("mouseenter", () => setVisible(true));

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", handleMove);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="fixed top-0 left-0 pointer-events-none z-[9998] w-[300px] h-[300px] rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(14,165,233,0.04) 0%, transparent 70%)",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease",
        willChange: "transform",
      }}
    />
  );
}
