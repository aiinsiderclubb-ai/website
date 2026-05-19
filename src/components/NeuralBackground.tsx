"use client";

import { useEffect, useRef } from "react";
import { usePerformanceMode } from "@landing/hooks/usePerformanceMode";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  hue: 0 | 1 | 2;
  size: number;
}

const PALETTE = {
  dark: {
    nodes: ["rgba(192, 132, 252, 0.9)", "rgba(251, 146, 60, 0.8)", "rgba(34, 211, 238, 0.8)"],
    lines: ["rgba(168, 85, 247, 0.16)", "rgba(249, 115, 22, 0.09)", "rgba(6, 182, 212, 0.11)"],
  },
  light: {
    nodes: ["rgba(124, 58, 237, 0.7)", "rgba(234, 88, 12, 0.6)", "rgba(8, 145, 178, 0.6)"],
    lines: ["rgba(124, 58, 237, 0.12)", "rgba(234, 88, 12, 0.07)", "rgba(8, 145, 178, 0.09)"],
  },
} as const;

function particleCount(w: number, h: number, low: boolean) {
  const area = w * h;
  const density = low ? 0.000022 : 0.000038;
  const max = low ? 42 : 72;
  const min = low ? 24 : 40;
  return Math.min(max, Math.max(min, Math.floor(area * density)));
}

/** Spatial hash — O(n) neighbor lookup instead of O(n²) */
function buildGrid(particles: Particle[], cellSize: number, cols: number, rows: number) {
  const grid: number[][] = Array.from({ length: cols * rows }, () => []);
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];
    const col = Math.min(cols - 1, Math.max(0, Math.floor(p.x / cellSize)));
    const row = Math.min(rows - 1, Math.max(0, Math.floor(p.y / cellSize)));
    grid[row * cols + col].push(i);
  }
  return grid;
}

function getNeighbors(
  i: number,
  particles: Particle[],
  grid: number[][],
  cellSize: number,
  cols: number,
  rows: number,
  linkDist: number
): number[] {
  const p = particles[i];
  const col = Math.floor(p.x / cellSize);
  const row = Math.floor(p.y / cellSize);
  const neighbors: number[] = [];
  const linkDistSq = linkDist * linkDist;

  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      const nc = col + dc;
      const nr = row + dr;
      if (nc < 0 || nr < 0 || nc >= cols || nr >= rows) continue;
      for (const j of grid[nr * cols + nc]) {
        if (j <= i) continue;
        const q = particles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        if (dx * dx + dy * dy < linkDistSq) neighbors.push(j);
      }
    }
  }
  return neighbors;
}

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef(0);
  const perf = usePerformanceMode();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || perf.minimal) return;

    const ctx = canvas.getContext("2d", { alpha: true, desynchronized: true });
    if (!ctx) return;

    const low = perf.low;
    let width = 0;
    let height = 0;
    let running = true;
    let lastFrame = 0;
    const frameInterval = low ? 1000 / 24 : 1000 / 40; // 24fps mobile, 40fps desktop

    const getPalette = () =>
      document.documentElement.getAttribute("data-theme") === "light" ? PALETTE.light : PALETTE.dark;

    const initParticles = () => {
      const count = particleCount(width, height, low);
      particlesRef.current = Array.from({ length: count }, (): Particle => {
        const r = Math.random();
        const hue: 0 | 1 | 2 = r < 0.6 ? 0 : r < 0.85 ? 1 : 2;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * (low ? 0.2 : 0.35),
          vy: (Math.random() - 0.5) * (low ? 0.2 : 0.35),
          hue,
          size: 0.9 + Math.random() * (low ? 0.5 : 0.9),
        };
      });
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, low ? 1 : 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    };

    const draw = (now: number) => {
      if (!running) return;
      rafRef.current = requestAnimationFrame(draw);

      if (document.hidden) return;

      if (now - lastFrame < frameInterval) return;
      lastFrame = now;

      const palette = getPalette();
      const particles = particlesRef.current;
      const linkDist = low ? 95 : 130;
      const cellSize = linkDist;
      const cols = Math.ceil(width / cellSize) + 1;
      const rows = Math.ceil(height / cellSize) + 1;

      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      const grid = buildGrid(particles, cellSize, cols, rows);

      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        for (const j of getNeighbors(i, particles, grid, cellSize, cols, rows, linkDist)) {
          const q = particles[j];
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          const lineHue = p.hue === q.hue ? p.hue : 0;
          ctx.strokeStyle = palette.lines[lineHue];
          ctx.globalAlpha = 1 - dist / linkDist;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1;
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = palette.nodes[p.hue];
        ctx.fill();
      }
    };

    resize();
    rafRef.current = requestAnimationFrame(draw);

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    };

    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      running = false;
      cancelAnimationFrame(rafRef.current);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
    };
  }, [perf.minimal, perf.low]);

  if (perf.minimal) {
    return <div className="fixed inset-0 -z-[1] pointer-events-none site-grid opacity-40" aria-hidden />;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-[1] pointer-events-none"
      style={{ contain: "strict" }}
      aria-hidden
    />
  );
}
