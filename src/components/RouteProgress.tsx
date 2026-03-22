"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function RouteProgress() {
  const pathname = usePathname();
  const [width, setWidth] = useState(0);
  const [visible, setVisible] = useState(false);
  const prevPath = useRef(pathname);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clear = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  // Start bar on link click
  useEffect(() => {
    const start = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      if (!href || href.startsWith("http") || href.startsWith("#") || href.startsWith("mailto")) return;
      if (href === pathname) return;

      clear();
      setVisible(true);
      setWidth(15);
      timers.current.push(setTimeout(() => setWidth(45), 120));
      timers.current.push(setTimeout(() => setWidth(70), 500));
      timers.current.push(setTimeout(() => setWidth(85), 1200));
    };

    document.addEventListener("click", start, { passive: true });
    return () => document.removeEventListener("click", start);
  }, [pathname]);

  // Finish bar when pathname changes
  useEffect(() => {
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;

    clear();
    setWidth(100);
    timers.current.push(setTimeout(() => setVisible(false), 280));
    timers.current.push(setTimeout(() => setWidth(0), 600));
  }, [pathname]);

  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 z-[9999] h-[2.5px] pointer-events-none"
      style={{
        width: `${width}%`,
        background: "linear-gradient(90deg, #0ea5e9, #06b6d4, #7c3aed)",
        opacity: visible ? 1 : 0,
        transition: width === 100
          ? "width 0.12s ease, opacity 0.28s ease 0.25s"
          : "width 0.4s cubic-bezier(0.22, 0.61, 0.36, 1)",
        boxShadow: "0 0 8px rgba(14,165,233,0.6)",
      }}
    />
  );
}
