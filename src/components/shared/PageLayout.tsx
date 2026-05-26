"use client";

import { motion } from "framer-motion";
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
  return (
    <>
      <Header />
      <main>
        {/* Page Hero */}
        <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[var(--color-bg-primary)]" />
          <div
            className="absolute inset-0 pointer-events-none opacity-50"
            style={{
              background:
                "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(168,85,247,0.12) 0%, transparent 65%)",
            }}
          />
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
      </main>
      <Footer />
    </>
  );
}
