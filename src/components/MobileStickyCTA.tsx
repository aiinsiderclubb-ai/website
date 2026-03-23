"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/content";
import { useI18n } from "@/context/i18n-context";

export default function MobileStickyCTA() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past 80% of viewport height (past the hero)
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 340, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div
            className="flex items-center gap-2 px-4 py-3"
            style={{
              background: "var(--header-bg)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderTop: "1px solid var(--color-glass-border)",
            }}
          >
            <a
              href="/courses"
              className="flex-1 text-center py-3 rounded-xl text-sm font-semibold text-white transition-all active:scale-95"
              style={{ background: "linear-gradient(135deg, #0ea5e9 0%, #7c3aed 100%)" }}
            >
              {t.mobileStickyCta.getStarted}
            </a>
            <a
              href={siteConfig.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl text-sm font-medium text-[var(--color-text-secondary)] border border-[var(--color-glass-border)] hover:text-[var(--color-text-primary)] transition-colors active:scale-95"
            >
              {t.mobileStickyCta.community}
            </a>
          </div>
          {/* Safe area spacer for iOS */}
          <div className="h-safe-area-inset-bottom bg-[var(--header-bg)]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
