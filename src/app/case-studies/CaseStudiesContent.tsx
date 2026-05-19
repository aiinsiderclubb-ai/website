"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@landing/components/shared/PageLayout";
import { useI18n } from "@landing/context/i18n-context";
import { caseStudyMetrics, caseStudyStats } from "@landing/data/caseStudies";

type CaseKey = "c1" | "c2" | "c3" | "c4";

function useCases() {
  const { t } = useI18n();
  const c = t.caseStudiesCases;
  const keys: CaseKey[] = ["c1", "c2", "c3", "c4"];

  return keys.map((key) => {
    const metrics = caseStudyMetrics[key];
    return {
      key,
      tag: c[`${key}Tag` as keyof typeof c],
      title: c[`${key}Title` as keyof typeof c],
      client: c[`${key}Client` as keyof typeof c],
      timeline: c[`${key}Timeline` as keyof typeof c],
      challenge: c[`${key}Challenge` as keyof typeof c],
      solution: c[`${key}Solution` as keyof typeof c],
      quote: c[`${key}Quote` as keyof typeof c],
      author: c[`${key}Author` as keyof typeof c],
      results: [1, 2, 3, 4].map((n, i) => ({
        value: metrics[i],
        label: c[`${key}R${n}Label` as keyof typeof c],
      })),
    };
  });
}

export default function CaseStudiesContent() {
  const { t } = useI18n();
  const p = t.caseStudiesPage;
  const s = t.caseStudiesStats;
  const cases = useCases();
  const [expanded, setExpanded] = useState<string | null>(cases[0]?.key ?? null);

  const statLabels = [s.s1Label, s.s2Label, s.s3Label, s.s4Label];

  return (
    <PageLayout badge={p.badge} title={p.title} titleHighlight={p.titleHighlight} subtitle={p.subtitle}>
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {caseStudyStats.map((stat, i) => (
              <div key={stat.key} className="glass-card rounded-xl p-5 text-center">
                <div className="text-2xl sm:text-3xl font-display font-bold gradient-text mb-1">{stat.value}</div>
                <p className="text-[11px] sm:text-xs text-[var(--color-text-muted)] uppercase tracking-wider">{statLabels[i]}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {cases.map((item, i) => {
            const open = expanded === item.key;
            return (
              <motion.article
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card rounded-2xl overflow-hidden border border-[var(--color-glass-border)]"
              >
                <button
                  type="button"
                  onClick={() => setExpanded(open ? null : item.key)}
                  className="w-full text-left p-6 sm:p-8 hover:bg-[var(--color-glass-hover)] transition-colors"
                >
                  <span className="text-xs font-medium text-[#c084fc] uppercase tracking-wider">{item.tag}</span>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-[var(--color-text-primary)] mt-2 mb-2">{item.title}</h2>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    {item.client} · {item.timeline}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
                    {item.results.map((r) => (
                      <div key={r.label} className="rounded-lg bg-[var(--color-bg-tertiary)] p-3">
                        <div className="text-lg font-bold text-[var(--color-text-primary)]">{r.value}</div>
                        <p className="text-[10px] text-[var(--color-text-muted)] leading-tight mt-0.5">{r.label}</p>
                      </div>
                    ))}
                  </div>
                  <span className="inline-block mt-4 text-sm text-[#c084fc]">{open ? p.showLess : p.readFull}</span>
                </button>

                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden border-t border-[var(--color-glass-border)]"
                    >
                      <div className="p-6 sm:p-8 pt-0 space-y-6">
                        <div>
                          <h3 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-2">{p.challenge}</h3>
                          <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{item.challenge}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-2">{p.solution}</h3>
                          <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{item.solution}</p>
                        </div>
                        <blockquote className="border-l-2 border-[#a855f7] pl-4 italic text-[var(--color-text-secondary)] text-sm">
                          &ldquo;{item.quote}&rdquo;
                          <footer className="mt-2 not-italic text-[var(--color-text-muted)]">— {item.author}</footer>
                        </blockquote>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="py-20 bg-[var(--color-bg-secondary)]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-sm text-[#c084fc] uppercase tracking-wider mb-3">{p.wantResults}</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[var(--color-text-primary)] mb-4">
            {p.buildTitle} <span className="gradient-text">{p.buildTitleHighlight}</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-8">{p.buildSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses" className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#a855f7] to-[#f97316] text-white text-sm font-medium">
              {p.learnSkills}
            </Link>
            <Link href="/b2b" className="px-7 py-3.5 rounded-full border border-[var(--color-glass-border)] text-[var(--color-text-primary)] text-sm font-medium hover:bg-[var(--color-glass-hover)]">
              {p.doneForYou}
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
