"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@landing/data/content";
import { useI18n } from "@landing/context/i18n-context";
import { useTheme } from "@landing/context/theme-context";
import { useLocalePath } from "@landing/hooks/useLocalePath";
import { Lang } from "@landing/i18n/translations";

const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "ru", label: "RU", flag: "🇷🇺" },
  { code: "uk", label: "UA", flag: "🇺🇦" },
];

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";
  const { lang, setLang, t } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const langRef = useRef<HTMLDivElement>(null);
  const localPath = useLocalePath();

  const navLinks = [
    { label: t.nav.home, href: localPath("/"), basePath: "" },
    { label: t.nav.courses, href: localPath("/courses"), basePath: "/courses" },
    { label: t.nav.community, href: localPath("/community"), basePath: "/community" },
    { label: t.nav.reviews, href: localPath("/reviews"), basePath: "/reviews" },
    { label: t.nav.b2b, href: localPath("/b2b"), basePath: "/b2b" },
    { label: t.nav.blog, href: localPath("/blog"), basePath: "/blog" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const currentLang = LANGS.find(l => l.code === lang)!;

  const isActive = (basePath: string) => {
    if (basePath === "") return pathname === "/" || pathname === "";
    return pathname === basePath || pathname.startsWith(`${basePath}/`);
  };
  const currentPage = navLinks.find((l) => isActive(l.basePath))?.label ?? "Page";

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] as [number, number, number, number] }}
        className={`fixed top-0 left-0 right-0 z-50 ${
          scrolled
            ? isHome
              ? "shadow-[0_2px_24px_rgba(0,0,0,0.14)]"
              : "shadow-[0_10px_40px_rgba(5,10,30,0.45)]"
            : ""
        }`}
        style={{
          background: scrolled
            ? isHome
              ? "var(--header-bg)"
              : "linear-gradient(180deg, rgba(9,8,24,0.86) 0%, rgba(12,10,32,0.68) 100%)"
            : isHome
              ? "transparent"
              : "linear-gradient(180deg, rgba(8,7,20,0.72) 0%, rgba(8,7,20,0.42) 100%)",
          backdropFilter: scrolled || !isHome ? "blur(16px) saturate(145%)" : "none",
          transition: "background 0.25s ease, backdrop-filter 0.25s ease, box-shadow 0.25s ease",
          WebkitBackdropFilter: scrolled || !isHome ? "blur(16px) saturate(145%)" : "none",
          borderBottom: scrolled || !isHome
            ? isHome
              ? "1px solid var(--header-border)"
              : "1px solid rgba(168,85,247,0.20)"
            : "none",
        }}
      >
        {/* Gradient top accent line */}
        <div
          className={`absolute top-0 left-0 right-0 h-[1px] ${
            isHome
              ? "bg-gradient-to-r from-transparent via-[#a855f7]/70 to-transparent opacity-70"
              : "bg-gradient-to-r from-transparent via-[#a855f7]/80 via-50% to-transparent opacity-90"
          }`}
        />
        {!isHome && (
          <div
            className="absolute inset-0 pointer-events-none opacity-15"
            style={{
              backgroundImage:
                "linear-gradient(rgba(34,211,238,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.07) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />
        )}

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between h-16 ${isHome ? "lg:h-[68px]" : "lg:h-[70px]"}`}>

            {/* ── Logo ── */}
            <Link href={localPath("/")} className="flex items-center gap-3 group shrink-0">
              <div className={`relative w-9 h-9 rounded-xl overflow-hidden ${!isHome ? "ring-1 ring-[#a855f7]/40 shadow-[0_0_24px_rgba(168,85,247,0.22)]" : ""}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7] via-[#c084fc] to-[#f97316] group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm tracking-tight">AI</div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[var(--color-text-primary)] font-semibold text-[15px] tracking-tight transition-colors">
                  {siteConfig.name}
                </span>
                <span className="text-[9px] text-[var(--color-text-muted)] uppercase tracking-[0.18em] hidden sm:block mt-0.5">
                  {isHome ? siteConfig.tagline : `AI Insider OS · ${currentPage}`}
                </span>
              </div>
            </Link>

            {/* ── Desktop Nav ── */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const active = isActive(link.basePath);
                return (
                  <Link
                    key={link.basePath}
                    href={link.href}
                    className={`relative px-3.5 py-2 text-sm font-medium transition-all duration-200 rounded-lg group ${
                      active
                        ? isHome
                          ? "text-[var(--color-accent)]"
                          : "text-[#67e8f9]"
                        : isHome
                          ? "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                          : "text-slate-300/90 hover:text-white"
                    }`}
                  >
                    {active && (
                      <motion.div
                        layoutId="nav-pill"
                        className={`absolute inset-0 rounded-lg ${
                          isHome
                            ? "bg-[var(--color-accent-glow)] border border-[var(--color-accent-border)]"
                            : "bg-white/[0.06] border border-[#a855f7]/25 shadow-[0_0_24px_rgba(168,85,247,0.16)]"
                        }`}
                        transition={{ type: "spring", stiffness: 380, damping: 34 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* ── Right Controls ── */}
            <div className="hidden lg:flex items-center gap-2">
              {!isHome && (
                <span className="px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.18em] font-semibold text-violet-100 border border-white/10 bg-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                  Route · {currentPage}
                </span>
              )}
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-glass-bg)] border border-[var(--color-glass-border)] transition-all duration-200"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={theme}
                    initial={{ y: 6, opacity: 0, rotate: -15 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: -6, opacity: 0, rotate: 15 }}
                    transition={{ duration: 0.18 }}
                  >
                    {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                  </motion.span>
                </AnimatePresence>
              </button>

              {/* Language Switcher */}
              <div ref={langRef} className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-glass-bg)] border border-[var(--color-glass-border)] transition-all duration-200"
                >
                  <span>{currentLang.flag}</span>
                  <span>{currentLang.label}</span>
                  <motion.svg
                    width="10" height="10" viewBox="0 0 10 10" fill="currentColor"
                    animate={{ rotate: langOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-36 rounded-xl border border-[var(--color-glass-border)] overflow-hidden z-50"
                      style={{ background: "var(--header-bg)", backdropFilter: "blur(20px)" }}
                    >
                      {LANGS.map((l) => (
                        <button
                          key={l.code}
                          onClick={() => { setLang(l.code); setLangOpen(false); }}
                          className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                            lang === l.code
                              ? "text-[var(--color-accent)] bg-[var(--color-accent-glow)]"
                              : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-glass-bg)]"
                          }`}
                        >
                          <span className="text-base">{l.flag}</span>
                          <span className="font-medium">{l.label}</span>
                          {lang === l.code && <span className="ml-auto text-[var(--color-accent)] text-xs">✓</span>}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA */}
              <a
                href={siteConfig.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative overflow-hidden px-5 py-2.5 text-sm font-semibold text-white rounded-xl transition-all duration-300 group ${
                  isHome
                    ? "hover:shadow-[0_0_24px_rgba(14,165,233,0.4)]"
                    : "hover:shadow-[0_0_28px_rgba(34,211,238,0.35)]"
                }`}
                style={{
                  background: isHome
                    ? "linear-gradient(135deg, #a855f7 0%, #f97316 100%)"
                    : "linear-gradient(135deg, #06b6d4 0%, #7c3aed 55%, #f97316 100%)",
                }}
              >
                <span className="relative z-10">{t.nav.joinCommunity}</span>
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
              </a>
            </div>

            {/* ── Mobile: theme + hamburger ── */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] border border-[var(--color-glass-border)] transition-all"
              >
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="relative w-9 h-9 flex items-center justify-center rounded-xl border border-[var(--color-glass-border)]"
                aria-label="Toggle menu"
              >
                <div className="flex flex-col gap-[5px] w-[18px]">
                  <span className={`block h-[1.5px] bg-[var(--color-text-primary)] transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
                  <span className={`block h-[1.5px] bg-[var(--color-text-primary)] transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
                  <span className={`block h-[1.5px] bg-[var(--color-text-primary)] transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] as [number, number, number, number] }}
            className="lg:hidden fixed inset-0 top-[68px] z-40 flex flex-col"
            style={{ background: "var(--header-bg)", backdropFilter: "blur(14px)" }}
          >
            {!isHome && (
              <div
                className="absolute inset-0 pointer-events-none opacity-35"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(34,211,238,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.08) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
            )}

            <div className="flex flex-col h-full px-6 py-8 overflow-y-auto">
              {/* Nav links */}
              <div className="space-y-1 mb-8">
                {navLinks.map((link, i) => {
                  const active = isActive(link.basePath);
                  return (
                    <motion.div
                      key={link.basePath}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-lg font-medium transition-all ${
                          active
                            ? "text-[var(--color-accent)] bg-[var(--color-accent-glow)] border border-[var(--color-accent-border)]"
                            : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-glass-bg)]"
                        }`}
                      >
                        {link.label}
                        {active && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Language switcher */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-6"
              >
                <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-3 px-1">Language</p>
                <div className="flex gap-2">
                  {LANGS.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setMobileOpen(false); }}
                      className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-medium border transition-all ${
                        lang === l.code
                          ? "border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-accent-glow)]"
                          : "border-[var(--color-glass-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent-border)]"
                      }`}
                    >
                      <span>{l.flag}</span><span>{l.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-auto"
              >
                <a
                  href={siteConfig.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center py-4 rounded-xl text-white font-semibold text-base transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #a855f7 0%, #f97316 100%)" }}
                >
                  {t.nav.joinCommunity}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
