"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/content";
import { useI18n } from "@/context/i18n-context";

function TelegramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

const AVATAR_COLORS = [
  "hsl(195, 80%, 42%)",
  "hsl(220, 75%, 55%)",
  "hsl(160, 70%, 40%)",
  "hsl(250, 65%, 55%)",
  "hsl(185, 72%, 45%)",
];

export default function Footer() {
  const { t } = useI18n();

  const footerLinks = {
    [t.footer.platform]: [
      { label: t.nav.courses, href: "/courses" },
      { label: t.nav.community, href: "/community" },
      { label: t.nav.reviews, href: "/reviews" },
      { label: t.nav.b2b, href: "/b2b" },
      { label: t.nav.blog, href: "/blog" },
    ],
    [t.footer.resources]: [
      { label: t.footer.about, href: "/about", external: false },
      { label: t.footer.aiStudio, href: "/ai-studio", external: false },
      { label: t.footer.caseStudies, href: "/case-studies", external: false },
      { label: t.footer.aiInsiderStudio, href: siteConfig.studioUrl, external: true },
      { label: t.common.contactManager, href: "https://t.me/vladyslavarcher", external: true },
    ],
    [t.footer.connect]: [
      { label: t.footer.telegramCommunity, href: siteConfig.telegram, external: true },
    ],
  };

  const stats = [
    { value: "6,079+", label: t.metrics.specialists },
    { value: "340%", label: t.metrics.roi },
    { value: "150+", label: t.metrics.partners },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="footer-dark relative overflow-hidden">
      {/* ── Grid background ── */}
      <div className="absolute inset-0 footer-grid pointer-events-none" style={{ opacity: 0.5 }} />

      {/* ── Glow orbs ── */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.03) 0%, transparent 70%)" }} />

      {/* ── Giant watermark text ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <span
          className="font-display font-bold tracking-tighter whitespace-nowrap"
          style={{
            fontSize: "clamp(80px, 20vw, 240px)",
            background: "linear-gradient(135deg, rgba(14,165,233,0.04) 0%, rgba(124,58,237,0.04) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          AI INSIDER
        </span>
      </div>

      {/* ── Top gradient line ── */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(14,165,233,0.5) 30%, rgba(124,58,237,0.5) 70%, transparent 100%)" }} />

      {/* ── CTA Section ── */}
      <div className="relative z-10 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
            style={{
              background: "rgba(14,165,233,0.1)",
              border: "1px solid rgba(14,165,233,0.25)",
              color: "#38bdf8",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
            <span className="text-xs font-medium tracking-wider uppercase">{t.footer.ctaBadge}</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-white leading-[1.0] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            {t.footer.ctaTitle}
            <br />
            <span className="gradient-text">{t.footer.ctaTitleHighlight}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg max-w-xl mx-auto mb-10"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            {t.footer.ctaSubtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href={siteConfig.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold text-sm transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #0ea5e9 0%, #7c3aed 100%)",
                boxShadow: "0 0 0 rgba(14,165,233,0)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 40px rgba(14,165,233,0.4)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 0 rgba(14,165,233,0)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
              }}
            >
              <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
              <TelegramIcon />
              <span className="relative">{t.nav.joinCommunity}</span>
              <span className="relative"><ArrowIcon /></span>
            </a>

            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-medium text-sm transition-all duration-300"
              style={{
                color: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.25)";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              }}
            >
              {t.footer.browseCourses}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex flex-wrap justify-center items-stretch rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="px-8 py-5 text-center"
                style={{ borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}
              >
                <div className="text-2xl font-display font-bold gradient-text">{s.value}</div>
                <div className="text-[11px] uppercase tracking-wider mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Main footer body ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden">
                <div
                  className="absolute inset-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: "linear-gradient(135deg, #0ea5e9, #06b6d4, #7c3aed)" }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">AI</div>
              </div>
              <div>
                <div className="text-white font-display font-bold text-lg leading-none">{siteConfig.name}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {siteConfig.tagline}
                </div>
              </div>
            </Link>

            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.38)" }}>
              {t.footer.tagline}
            </p>

            {/* Social proof avatars */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {AVATAR_COLORS.map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold text-white"
                    style={{
                      background: color,
                      border: "2px solid #0d0d0d",
                    }}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-xs text-white font-medium">+12,000</div>
                <div className="text-[10px]" style={{ color: "rgba(255,255,255,0.35)" }}>{t.footer.activeMembers}</div>
              </div>
            </div>

            {/* Rating stars */}
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#f59e0b">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{t.footerRating}</span>
            </div>
          </div>

          {/* Links columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      {"external" in link && link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-2 text-sm transition-colors duration-200"
                          style={{ color: "rgba(255,255,255,0.38)" }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff"; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.38)"; }}
                        >
                          <span
                            className="w-1 h-1 rounded-full shrink-0 transition-colors group-hover:bg-[#0ea5e9]"
                            style={{ background: "rgba(255,255,255,0.18)" }}
                          />
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="group flex items-center gap-2 text-sm transition-colors duration-200"
                          style={{ color: "rgba(255,255,255,0.38)" }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff"; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.38)"; }}
                        >
                          <span
                            className="w-1 h-1 rounded-full shrink-0 transition-colors group-hover:bg-[#0ea5e9]"
                            style={{ background: "rgba(255,255,255,0.18)" }}
                          />
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom gradient divider ── */}
        <div className="h-px mb-6" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.07) 50%, transparent 100%)" }} />

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.22)" }}>
              © {year} {siteConfig.name}. {t.footer.rights}
            </p>
            <span className="hidden sm:block" style={{ color: "rgba(255,255,255,0.1)" }}>|</span>
            <Link href="/privacy" className="text-xs transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.28)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#0ea5e9"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.28)"; }}
            >{t.footer.privacy}</Link>
            <Link href="/terms" className="text-xs transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.28)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#0ea5e9"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.28)"; }}
            >{t.footer.terms}</Link>
          </div>

          <div className="flex items-center gap-3 text-xs" style={{ color: "rgba(255,255,255,0.22)" }}>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {t.footer.systemsOperational}
            </span>
            <span style={{ color: "rgba(255,255,255,0.1)" }}>·</span>
            <span>{t.footer.madeWith}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
