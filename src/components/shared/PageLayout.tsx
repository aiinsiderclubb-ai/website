"use client";

import { motion } from "framer-motion";
import Header from "@landing/components/Header";
import Footer from "@landing/components/Footer";
import FlowThread from "@landing/components/FlowThread";

interface FlowWaypoint {
  y: number;
  label: string;
  color?: string;
  x?: number;
}

interface PageLayoutProps {
  children: React.ReactNode;
  badge: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  activePage?: string;
  /** Optional HUD chips placed along the FlowThread. */
  flowWaypoints?: FlowWaypoint[];
}

const DEFAULT_FLOW: FlowWaypoint[] = [
  { y: 22, label: "Intro", color: "#c084fc" },
  { y: 46, label: "Inside", color: "#fb923c" },
  { y: 70, label: "Proof", color: "#67e8f9" },
  { y: 90, label: "Join", color: "#fbbf24" },
];

export default function PageLayout({ children, badge, title, titleHighlight, subtitle, flowWaypoints }: PageLayoutProps) {
  return (
    <>
      <Header />
      <main className="relative isolate">
        <FlowThread waypoints={flowWaypoints ?? DEFAULT_FLOW} />
        <div className="relative z-10">
        {/* Page Hero */}
        <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[var(--color-bg-primary)]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#a855f7]/[0.06] rounded-full pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.06)_0%,transparent_70%)]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#a855f7]/10 border border-[#a855f7]/25 text-[#c084fc] text-xs font-medium tracking-wider uppercase mb-6">
                {badge}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[var(--color-text-primary)] mb-4 leading-tight">
                {title}
                {titleHighlight && (
                  <>
                    <br />
                    <span className="gradient-text">{titleHighlight}</span>
                  </>
                )}
              </h1>
              {subtitle && (
                <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                  {subtitle}
                </p>
              )}
            </motion.div>
          </div>
        </section>

        {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
