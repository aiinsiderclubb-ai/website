"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import PageLayout from "@/components/shared/PageLayout";
import { useI18n } from "@/context/i18n-context";

const industries = ["Fintech", "E-commerce", "Healthcare", "SaaS / Cloud", "EdTech", "Real Estate", "Gaming", "Media"];

export default function B2BPage() {
  const { t } = useI18n();

  const services = [
    {
      icon: "🤖",
      title: t.b2bServices.s1Title,
      desc: t.b2bServices.s1Desc,
      points: [t.b2bServices.s1P1, t.b2bServices.s1P2, t.b2bServices.s1P3],
      primary: true,
    },
    {
      icon: "🎙️",
      title: t.b2bServices.s2Title,
      desc: t.b2bServices.s2Desc,
      points: [t.b2bServices.s2P1, t.b2bServices.s2P2, t.b2bServices.s2P3],
    },
    {
      icon: "📚",
      title: t.b2bServices.s3Title,
      desc: t.b2bServices.s3Desc,
      points: [t.b2bServices.s3P1, t.b2bServices.s3P2, t.b2bServices.s3P3],
    },
    {
      icon: "🎯",
      title: t.b2bServices.s4Title,
      desc: t.b2bServices.s4Desc,
      points: [t.b2bServices.s4P1, t.b2bServices.s4P2, t.b2bServices.s4P3],
    },
    {
      icon: "🔧",
      title: t.b2bServices.s5Title,
      desc: t.b2bServices.s5Desc,
      points: [t.b2bServices.s5P1, t.b2bServices.s5P2, t.b2bServices.s5P3],
    },
    {
      icon: "📊",
      title: t.b2bServices.s6Title,
      desc: t.b2bServices.s6Desc,
      points: [t.b2bServices.s6P1, t.b2bServices.s6P2, t.b2bServices.s6P3],
    },
  ];

  const roadmap = [
    { step: 1, title: t.b2bRoadmap.r1Title, desc: t.b2bRoadmap.r1Desc },
    { step: 2, title: t.b2bRoadmap.r2Title, desc: t.b2bRoadmap.r2Desc },
    { step: 3, title: t.b2bRoadmap.r3Title, desc: t.b2bRoadmap.r3Desc },
    { step: 4, title: t.b2bRoadmap.r4Title, desc: t.b2bRoadmap.r4Desc },
    { step: 5, title: t.b2bRoadmap.r5Title, desc: t.b2bRoadmap.r5Desc },
  ];

  const faqs = [
    { q: t.b2bFaqs.q1, a: t.b2bFaqs.a1 },
    { q: t.b2bFaqs.q2, a: t.b2bFaqs.a2 },
    { q: t.b2bFaqs.q3, a: t.b2bFaqs.a3 },
    { q: t.b2bFaqs.q4, a: t.b2bFaqs.a4 },
    { q: t.b2bFaqs.q5, a: t.b2bFaqs.a5 },
    { q: t.b2bFaqs.q6, a: t.b2bFaqs.a6 },
  ];

  const securityBadges: [string, string][] = [
    ["🇪🇺", t.b2bSecurity.label1],
    ["🛡️", t.b2bSecurity.label2],
    ["🔐", t.b2bSecurity.label3],
  ];

  const securityItems: [string, string][] = [
    [t.b2bSecurity.item1Bold, t.b2bSecurity.item1Rest],
    [t.b2bSecurity.item2Bold, t.b2bSecurity.item2Rest],
    [t.b2bSecurity.item3Bold, t.b2bSecurity.item3Rest],
    [t.b2bSecurity.item4Bold, t.b2bSecurity.item4Rest],
    [t.b2bSecurity.item5Bold, t.b2bSecurity.item5Rest],
  ];
  const [activeStep, setActiveStep] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({ company: "", name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout
      badge={t.b2bPage.badge}
      title={t.b2bPage.title}
      titleHighlight={t.b2bPage.titleHighlight}
      subtitle={t.b2bPage.subtitle}
    >
      {/* CTA buttons */}
      <div className="flex justify-center gap-4 pb-10 flex-wrap">
        <a
          href="https://t.me/vladyslavarcher"
          className="px-8 py-4 bg-gradient-to-r from-[#0ea5e9] to-[#7c3aed] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.b2bPage.bookCall}
        </a>
        <a href="#contact" className="px-8 py-4 glass border border-white/20 text-white font-semibold rounded-xl hover:border-white/40 transition-colors">
          {t.b2bPage.getProposal}
        </a>
      </div>

      {/* Feature pills */}
      <div className="flex flex-wrap justify-center gap-3 pb-16 px-4">
        {[["⚡️", t.b2bPage.pill1], ["🔗", t.b2bPage.pill2], ["🛡️", t.b2bPage.pill3], ["📈", t.b2bPage.pill4]].map(([icon, label]) => (
          <div key={label} className="flex items-center gap-2 glass rounded-full px-4 py-2 border border-white/10 text-sm text-[var(--color-text-secondary)]">
            <span>{icon}</span><span>{label}</span>
          </div>
        ))}
      </div>

      {/* Services */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span variants={fadeInUp} className="inline-flex px-4 py-1.5 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-xs font-medium uppercase tracking-wider mb-4">
              {t.b2bPage.servicesBadge}
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">{t.b2bPage.servicesTitle}</motion.h2>
            <motion.p variants={fadeInUp} className="text-[var(--color-text-secondary)] max-w-xl mx-auto">{t.b2bPage.servicesSubtitle}</motion.p>
          </motion.div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeInUp}
                className={`rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                  s.primary
                    ? "bg-gradient-to-br from-[#0ea5e9]/20 to-[#7c3aed]/10 border-[#0ea5e9]/30"
                    : "glass border-white/10 hover:border-white/20"
                }`}
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-lg font-display font-bold text-white mb-2">{s.title}</h3>
                <p className="text-[var(--color-text-secondary)] text-sm mb-4">{s.desc}</p>
                <div className="space-y-1">
                  {s.points.map((p) => (
                    <div key={p} className="text-xs text-[#38bdf8]">• {p}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries marquee */}
      <section className="py-10 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-6">
          <span className="text-[var(--color-text-muted)] text-sm uppercase tracking-wider">{t.b2bPage.trustedBy}</span>
        </div>
        <div className="flex gap-4 overflow-hidden">
          <div className="flex gap-4 animate-[scroll-x_20s_linear_infinite] min-w-max">
            {[...industries, ...industries].map((ind, i) => (
              <span key={i} className="glass border border-white/10 px-6 py-2 rounded-full text-sm text-[var(--color-text-secondary)] whitespace-nowrap">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-flex px-4 py-1.5 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-xs font-medium uppercase tracking-wider mb-4">
              {t.b2bPage.roadmapBadge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">{t.b2bPage.roadmapTitle}</h2>
            <p className="text-[var(--color-text-secondary)]">{t.b2bPage.roadmapSubtitle}</p>
          </motion.div>

          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {roadmap.map((r) => (
              <button
                key={r.step}
                onClick={() => setActiveStep(r.step)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeStep === r.step
                    ? "bg-gradient-to-r from-[#0ea5e9] to-[#7c3aed] text-white"
                    : "glass border border-white/10 text-[var(--color-text-secondary)] hover:border-white/20"
                }`}
              >
                <span className="w-5 h-5 rounded-full bg-white/20 text-xs flex items-center justify-center font-bold">{r.step}</span>
                <span>{r.title.split(" ")[0]}</span>
              </button>
            ))}
          </div>

          <motion.div
            key={activeStep}
            className="glass rounded-2xl p-8 border border-white/10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-xl font-display font-bold text-white mb-3">{roadmap[activeStep - 1].title}</h4>
            <p className="text-[var(--color-text-secondary)]">{roadmap[activeStep - 1].desc}</p>
          </motion.div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-flex px-4 py-1.5 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-xs font-medium uppercase tracking-wider mb-4">
              {t.b2bPage.securityBadge}
            </span>
            <h2 className="text-3xl font-display font-bold text-white mb-4">{t.b2bPage.securityTitle}</h2>
            <p className="text-[var(--color-text-secondary)]">{t.b2bPage.securitySubtitle}</p>
          </motion.div>

          <div className="glass rounded-2xl p-8 border border-white/10">
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {securityBadges.map(([icon, label]) => (
                <div key={label} className="flex items-center gap-2 bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 rounded-xl px-5 py-3">
                  <span className="text-xl">{icon}</span>
                  <span className="text-white font-semibold text-sm">{label}</span>
                </div>
              ))}
            </div>
            <ul className="space-y-3">
              {securityItems.map(([bold, rest]) => (
                <li key={bold} className="flex items-center gap-2 text-[var(--color-text-secondary)] text-sm">
                  <span className="text-green-400">✓</span>
                  <strong className="text-white">{bold}</strong> {rest}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-flex px-4 py-1.5 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-xs font-medium uppercase tracking-wider mb-4">{t.b2bPage.faqBadge}</span>
            <h2 className="text-3xl font-display font-bold text-white">{t.b2bPage.faqTitle}</h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <motion.div
                key={f.q}
                className="glass rounded-xl border border-white/10 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full flex justify-between items-center p-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-white font-medium">{f.q}</span>
                  <span className={`text-[#0ea5e9] text-lg transition-transform ${openFaq === i ? "rotate-180" : ""}`}>⌄</span>
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-5 text-[var(--color-text-secondary)] text-sm"
                  >
                    {f.a}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 border-t border-white/5" id="contact">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="glass rounded-2xl p-8 sm:p-12 border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">{t.b2bPage.requestSent}</h3>
                <p className="text-[var(--color-text-secondary)]">{t.b2bPage.requestSentSubtitle}</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-display font-bold text-white mb-2 text-center">{t.b2bPage.contactTitle}</h3>
                <p className="text-[var(--color-text-secondary)] text-center mb-8">{t.b2bPage.contactSubtitle}</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: "company", placeholder: t.b2bPage.companyPlaceholder, type: "text" },
                      { name: "name", placeholder: t.b2bPage.contactNamePlaceholder, type: "text" },
                      { name: "email", placeholder: t.b2bPage.emailPlaceholder, type: "email" },
                      { name: "phone", placeholder: t.b2bPage.phonePlaceholder, type: "tel", required: false },
                    ].map((f) => (
                      <input
                        key={f.name}
                        type={f.type}
                        placeholder={f.placeholder}
                        required={f.required !== false}
                        value={form[f.name as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                        className="w-full glass border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[#0ea5e9]/50 bg-transparent"
                      />
                    ))}
                  </div>
                  <textarea
                    rows={4}
                    placeholder={t.b2bPage.messagePlaceholder}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full glass border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[#0ea5e9]/50 bg-transparent resize-none"
                  />
                  <div className="flex gap-4 flex-wrap">
                    <button
                      type="submit"
                      className="px-8 py-3 bg-gradient-to-r from-[#0ea5e9] to-[#7c3aed] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
                    >
                      {t.b2bPage.sendRequest}
                    </button>
                    <a
                      href="https://t.me/vladyslavarcher"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 glass border border-white/20 text-white font-semibold rounded-xl hover:border-white/40 transition-colors"
                    >
                      {t.common.messageTelegram}
                    </a>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
