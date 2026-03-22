"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/data/content";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const SERVICES = [
  {
    id: "influencer",
    color: "#7c3aed",
    colorBg: "rgba(124,58,237,0.1)",
    icon: "👤",
    label: "AI-інфлюенсери",
    tagline: "Ваш бренд 24/7 у соцмережах",
    description:
      "Створюємо унікальних AI-персонажів, які представляють ваш бренд у соцмережах. Без гонорарів, скандалів та вихідних.",
    metric: "3M+",
    metricLabel: "підписників у наших клієнтів",
    features: [
      "Унікальний зовнішній вигляд і характер",
      "Контент на будь-яку мову",
      "Публікація за розкладом 24/7",
      "Відповіді на коментарі",
      "Аналітика та A/B тести",
    ],
    results: [
      { label: "Залучення", value: "+340%" },
      { label: "Охоплення", value: "×8" },
      { label: "Вартість підписника", value: "−70%" },
    ],
  },
  {
    id: "video",
    color: "#0ea5e9",
    colorBg: "rgba(14,165,233,0.1)",
    icon: "🎬",
    label: "AI-відео",
    tagline: "Відео без камер і команди",
    description:
      "Генеруємо рекламні відео, Reels, YouTube Shorts і презентації. Від скрипту до готового відео — за години.",
    metric: "500+",
    metricLabel: "відео на місяць",
    features: [
      "Рекламні відео до 60 секунд",
      "Shorts та Reels для соцмереж",
      "Корпоративні презентації",
      "Субтитри на 10+ мов",
      "Брендований стиль і шрифти",
    ],
    results: [
      { label: "Швидкість виробництва", value: "×20" },
      { label: "Вартість відео", value: "−85%" },
      { label: "CTR", value: "+210%" },
    ],
  },
  {
    id: "ugc",
    color: "#f97316",
    colorBg: "rgba(249,115,22,0.1)",
    icon: "⚡",
    label: "AI UGC",
    tagline: "Автентична реклама у масштабі",
    description:
      "UGC-реклама без реальних людей. Сотні варіантів з різними «креаторами», емоціями та сценаріями для тестування.",
    metric: "80%",
    metricLabel: "економія бюджету",
    features: [
      "Різноманітні AI-персонажі",
      "Тестування 100+ варіантів",
      "Нативний формат для Meta/TikTok",
      "Унбоксинг та огляди",
      "Адаптація під різні аудиторії",
    ],
    results: [
      { label: "Кількість креативів", value: "×50" },
      { label: "ROAS", value: "+180%" },
      { label: "CPA", value: "−60%" },
    ],
  },
  {
    id: "creative",
    color: "#22c55e",
    colorBg: "rgba(34,197,94,0.1)",
    icon: "🎨",
    label: "AI Креативна студія",
    tagline: "Банери та креативи без дизайнерів",
    description:
      "Генеруємо банери, пости, сторіс та рекламні матеріали у вашому брендстайлі. Сотні варіантів за день.",
    metric: "100+",
    metricLabel: "креативів на місяць",
    features: [
      "Банери для Google Display",
      "Пости та сторіс для соцмереж",
      "Email-шаблони",
      "Рекламні матеріали для OZON/Rozetka",
      "Адаптація під різні розміри",
    ],
    results: [
      { label: "Час виробництва", value: "−90%" },
      { label: "A/B варіантів", value: "+500%" },
      { label: "CTR банерів", value: "+120%" },
    ],
  },
];

const PROCESS = [
  { step: "01", title: "Бриф", desc: "Розповідаєте про бренд, ЦА та цілі. Ми аналізуємо ринок і конкурентів." },
  { step: "02", title: "Концепція", desc: "Розробляємо AI-персонажа або стиль контенту. Затверджуєте разом з нами." },
  { step: "03", title: "Виробництво", desc: "AI генерує перший контент протягом 48 годин. Ви перевіряєте і даєте фідбек." },
  { step: "04", title: "Запуск", desc: "Публікуємо за розкладом, оптимізуємо на основі даних, масштабуємо." },
];

const FAQS = [
  {
    q: "Чи виглядає AI-контент натурально?",
    a: "Сучасні AI-технології дозволяють створювати контент, який практично неможливо відрізнити від звичайного. Ми додаємо реалістичні деталі та \"недосконалості\".",
  },
  {
    q: "Скільки часу займає запуск?",
    a: "Від підписання договору до перших публікацій — 5-7 робочих днів. Перший пакет контенту готовий за 48 годин після затвердження концепції.",
  },
  {
    q: "Чи можна адаптувати контент під різні мови?",
    a: "Так, ми підтримуємо 10+ мов включно з українською, російською, англійською, польською та іншими.",
  },
  {
    q: "Які результати можна очікувати?",
    a: "Наші клієнти в середньому отримують +340% до залучення, зниження вартості контенту на 80% і ріст охоплення в 8 разів протягом перших 3 місяців.",
  },
];

export default function AIStudioPage() {
  const [activeService, setActiveService] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const service = SERVICES[activeService];

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-bg-primary)]" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(124,58,237,0.08) 0%, transparent 60%)",
          }}
        />
        {/* Grid */}
        <div className="absolute inset-0 footer-grid opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} custom={0} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/25 text-[#a78bfa] text-xs font-medium tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] animate-pulse" />
                AI Контент-Студія
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              custom={1}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[var(--color-text-primary)] leading-tight mb-6"
            >
              AI-контент для{" "}
              <span className="gradient-text">маркетингу</span>
              <br />
              без обмежень
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              custom={2}
              className="text-lg sm:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-2xl"
            >
              AI-інфлюенсери, відеопродакшн, UGC-реклама та креативи — без зйомок, дизайнерів та контентних &ldquo;затичок&rdquo;.
              Ваш контент-конвеєр працює 24/7.
            </motion.p>

            <motion.div variants={fadeInUp} custom={3} className="flex flex-col sm:flex-row gap-4">
              <a
                href={siteConfig.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)]"
                style={{ background: "linear-gradient(135deg, #7c3aed 0%, #0ea5e9 100%)" }}
              >
                <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12" />
                <span className="relative">Отримати консультацію</span>
              </a>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] border border-[var(--color-glass-border)] hover:border-[var(--color-accent-border)] transition-all"
              >
                Переглянути послуги
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Services detail ── */}
      <section id="services" className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-bg-secondary)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.h2
              variants={fadeInUp}
              custom={0}
              className="text-3xl sm:text-4xl font-display font-bold text-[var(--color-text-primary)] mb-4"
            >
              Чотири напрямки{" "}
              <span className="gradient-text">AI-контенту</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              custom={1}
              className="text-[var(--color-text-secondary)] text-lg max-w-xl mx-auto"
            >
              Виберіть послугу щоб дізнатись деталі
            </motion.p>
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {SERVICES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActiveService(i)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300"
                style={{
                  background: i === activeService ? s.colorBg : "var(--color-glass-bg)",
                  border: `1px solid ${i === activeService ? s.color + "50" : "var(--color-glass-border)"}`,
                  color: i === activeService ? s.color : "var(--color-text-secondary)",
                }}
              >
                <span>{s.icon}</span>
                {s.label}
              </button>
            ))}
          </div>

          {/* Active service detail */}
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Left */}
            <div
              className="rounded-2xl p-8"
              style={{ background: service.colorBg, border: `1px solid ${service.color}30` }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-display font-bold text-[var(--color-text-primary)] mb-2">{service.label}</h3>
              <p className="text-sm font-medium mb-4" style={{ color: service.color }}>{service.tagline}</p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">{service.description}</p>

              <div className="text-3xl font-display font-bold mb-1" style={{ color: service.color }}>
                {service.metric}
              </div>
              <div className="text-sm text-[var(--color-text-muted)]">{service.metricLabel}</div>
            </div>

            {/* Right */}
            <div className="space-y-4">
              {/* Features */}
              <div className="glass-card rounded-2xl p-6">
                <h4 className="text-sm font-bold text-[var(--color-text-primary)] uppercase tracking-wider mb-4">Що входить</h4>
                <ul className="space-y-2.5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: service.colorBg }}
                      >
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke={service.color} strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-[var(--color-text-secondary)]">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div className="grid grid-cols-3 gap-3">
                {service.results.map((r) => (
                  <div
                    key={r.label}
                    className="glass-card rounded-xl p-4 text-center"
                  >
                    <div className="text-xl font-bold mb-1" style={{ color: service.color }}>{r.value}</div>
                    <div className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider">{r.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-bg-primary)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.h2
              variants={fadeInUp}
              custom={0}
              className="text-3xl sm:text-4xl font-display font-bold text-[var(--color-text-primary)] mb-4"
            >
              Як ми <span className="gradient-text">запускаємо</span>
            </motion.h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.step}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="glass-card rounded-2xl p-6"
              >
                <div className="step-number text-5xl font-display font-bold mb-4">{p.step}</div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">{p.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-bg-secondary)]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-display font-bold text-[var(--color-text-primary)] text-center mb-10"
          >
            Часті <span className="gradient-text">питання</span>
          </motion.h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="glass-card rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-sm font-medium text-[var(--color-text-primary)] pr-4">{faq.q}</span>
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200"
                    style={{
                      background: "var(--color-glass-bg)",
                      border: "1px solid var(--color-glass-border)",
                      transform: openFaq === i ? "rotate(45deg)" : "rotate(0)",
                    }}
                  >
                    <svg className="w-3.5 h-3.5 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-bg-primary)]" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)" }}
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 max-w-2xl mx-auto px-4 text-center"
        >
          <motion.h2
            variants={fadeInUp}
            custom={0}
            className="text-3xl sm:text-4xl font-display font-bold text-[var(--color-text-primary)] mb-4"
          >
            Готові запустити{" "}
            <span className="gradient-text">AI-контент?</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            custom={1}
            className="text-[var(--color-text-secondary)] text-lg mb-8"
          >
            Напишіть нам — обговоримо ваш проєкт і розробимо індивідуальну стратегію
          </motion.p>
          <motion.div variants={fadeInUp} custom={2} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={siteConfig.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)]"
              style={{ background: "linear-gradient(135deg, #7c3aed 0%, #0ea5e9 100%)" }}
            >
              <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12" />
              <span className="relative">Написати в Telegram</span>
            </a>
            <Link
              href="/b2b"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-medium text-[var(--color-text-secondary)] border border-[var(--color-glass-border)] hover:border-[var(--color-accent-border)] hover:text-[var(--color-text-primary)] transition-all"
            >
              B2B рішення
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
