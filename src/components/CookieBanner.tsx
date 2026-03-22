"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const STORAGE_KEY = "ai-insider-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      // localStorage not available
    }
  }, []);

  const accept = () => {
    try { localStorage.setItem(STORAGE_KEY, "accepted"); } catch { /* noop */ }
    setVisible(false);
  };

  const decline = () => {
    try { localStorage.setItem(STORAGE_KEY, "declined"); } catch { /* noop */ }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 28 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-[100] sm:max-w-sm"
        >
          <div
            className="rounded-2xl p-5 shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
            style={{
              background: "var(--header-bg)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid var(--color-glass-border)",
            }}
          >
            {/* Icon + title */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0ea5e9] to-[#7c3aed] flex items-center justify-center text-white text-sm font-bold shrink-0">
                🍪
              </div>
              <span className="text-[var(--color-text-primary)] font-semibold text-sm">
                Cookie Preferences
              </span>
            </div>

            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
              We use essential cookies to run the site and optional analytics cookies to
              improve your experience.{" "}
              <Link href="/privacy" className="text-[var(--color-accent)] hover:underline">
                Privacy Policy
              </Link>
            </p>

            <div className="flex gap-2">
              <button
                onClick={decline}
                className="flex-1 px-3 py-2 rounded-xl text-xs font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
                style={{ background: "var(--color-glass-bg)", border: "1px solid var(--color-glass-border)" }}
              >
                Essential only
              </button>
              <button
                onClick={accept}
                className="flex-1 px-3 py-2 rounded-xl text-xs font-medium text-white transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #0ea5e9 0%, #7c3aed 100%)" }}
              >
                Accept all
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
