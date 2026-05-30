"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@landing/components/Header";
import Footer from "@landing/components/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  badge: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  activePage?: string;
}

export default function PageLayout({ children, badge, title, titleHighlight, subtitle }: PageLayoutProps) {
  const signalCards = [
    { label: "Signal", value: "Live", color: "bg-emerald-400" },
    { label: "Mode", value: "AI OS", color: "bg-cyan-300" },
    { label: "Status", value: "Ready", color: "bg-orange-400" },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Page Hero */}
        <section className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
          <div className="absolute inset-0 bg-[var(--color-bg-primary)]" />
          <div className="absolute inset-0 opacity-35 hud-grid pointer-events-none" />
          <div className="absolute -top-24 right-[-18vw] h-[520px] w-[720px] rotate-[-14deg] bg-[linear-gradient(120deg,transparent_15%,rgba(34,211,238,0.18)_36%,rgba(168,85,247,0.20)_55%,rgba(249,115,22,0.16)_72%,transparent_88%)] blur-2xl" />
          <div className="absolute left-[-12vw] top-24 h-[360px] w-[520px] rounded-full bg-[#7c3aed]/15 blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#a855f7]/50 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] as [number, number, number, number] }}
              className="grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-center"
            >
              <div className="text-left">
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <span className="hud-badge">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                    {badge}
                  </span>
                  <span className="hidden sm:inline-flex h-7 items-center rounded-full border border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] px-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                    AI Insider interface
                  </span>
                </div>

                <h1 className="max-w-4xl text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-[var(--color-text-primary)] leading-[0.98] tracking-[-0.04em] mb-6">
                  {title}
                  {titleHighlight && (
                    <>
                      <br />
                      <span className="gradient-text">{titleHighlight}</span>
                    </>
                  )}
                </h1>

                {subtitle && (
                  <p className="text-base sm:text-lg text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
                    {subtitle}
                  </p>
                )}

                <div className="mt-8 grid grid-cols-3 gap-3 max-w-xl">
                  {signalCards.map((card) => (
                    <div key={card.label} className="hud-panel rounded-2xl px-4 py-3">
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                        <span className={`h-1.5 w-1.5 rounded-full ${card.color}`} />
                        {card.label}
                      </div>
                      <div className="mt-1 text-sm sm:text-base font-semibold text-[var(--color-text-primary)]">{card.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative hidden min-h-[430px] lg:block">
                <div className="absolute -right-[13vw] -top-24 h-[360px] w-[620px] rotate-[-11deg] origin-top-right">
                  <Image
                    src="/images/internal-page-ribbon.png"
                    alt=""
                    fill
                    priority
                    sizes="(min-width: 1024px) 760px, 0px"
                    className="object-cover object-center opacity-90 mix-blend-screen [mask-image:radial-gradient(ellipse_at_62%_42%,black_0%,black_48%,transparent_76%)]"
                  />
                </div>
                <div className="absolute -right-12 top-0 h-56 w-56 rounded-full bg-orange-500/18 blur-3xl" />
                <div className="absolute right-24 top-20 h-44 w-44 rounded-full bg-violet-500/16 blur-3xl" />
                <div className="absolute right-6 top-80 h-px w-72 rotate-[-11deg] bg-gradient-to-r from-transparent via-orange-300/35 to-transparent" />
              </div>
            </motion.div>
          </div>
        </section>

        {children}
      </main>
      <Footer />
    </>
  );
}
