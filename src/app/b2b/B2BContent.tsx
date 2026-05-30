"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@landing/lib/motion";
import PageLayout from "@landing/components/shared/PageLayout";

const services = [
  {
    icon: "🤖",
    title: "Chatbots for Sales & Support",
    desc: "Scripts, integrations and analytics. Capture leads, answer 24/7, reduce support load.",
    points: ["WhatsApp / Telegram / Web", "CRM sync & webhooks", "FAQ / RAG knowledge base"],
    primary: true,
  },
  {
    icon: "🎙️",
    title: "Voice Agents",
    desc: "Calls, barge-in, scenarios, call recording. Great for call centers and inbound requests.",
    points: ["Vapi.ai, Whisper", "SLAs & monitoring", "Safe tool-actions"],
  },
  {
    icon: "📚",
    title: "RAG Assistants",
    desc: "Assistants on your data: docs, knowledge base, wiki. Access control and audit.",
    points: ["Vector DBs + rerank", "RBAC & logs", "Evals & quality"],
  },
  {
    icon: "🎯",
    title: "Lead Qualification",
    desc: "ICP scoring, auto-routing, demo booking, CRM sync and funnel reporting.",
    points: ["HubSpot / Salesforce", "Rules & fallbacks", "Conversion metrics"],
  },
  {
    icon: "🔧",
    title: "Process Automation",
    desc: "n8n / Make / Airflow. Approvals, syncs, reports. Remove manual steps.",
    points: ["Reliable orchestrations", "DLQ, retries, alerts", "Observability"],
  },
  {
    icon: "📊",
    title: "Evals & Analytics",
    desc: "Quality, cost and safety metrics. Clear reports for business and security.",
    points: ["Test sets, red-teaming", "Cost / perf dashboards", "Stakeholder reports"],
  },
];

const stats = [
  { value: "24h", label: "Proposal turnaround" },
  { value: "2–6 wks", label: "Typical delivery" },
  { value: "340%", label: "Avg. ROI" },
  { value: "GDPR", label: "Compliant by design" },
];

const industries = ["Fintech", "E-commerce", "Healthcare", "SaaS / Cloud", "EdTech", "Real Estate", "Gaming", "Media"];

const roadmap = [
  { step: 1, title: "Discovery (1–2 weeks)", desc: "Goals, KPIs, data sources, risks, constraints. Quick audit and value map." },
  { step: 2, title: "Design (1–2 weeks)", desc: "Architecture, guardrails, integrations, rollout plan and success metrics." },
  { step: 3, title: "Pilot (2–4 weeks)", desc: "Ship MVP to real users with telemetry and evaluations. Iterate fast." },
  { step: 4, title: "Production (ongoing)", desc: "SLAs, monitoring, incident response, security reviews and compliance." },
  { step: 5, title: "Scale (quarterly)", desc: "New use-cases, A/B tests, enablement, cost and quality optimization." },
];

const definitions = [
  {
    q: "What is AI automation for business?",
    a: "AI automation for business is the use of AI models and workflow tools to handle repetitive, language-heavy tasks — answering customers, qualifying leads, booking calls and syncing data across your CRM. It runs 24/7, reduces manual workload and keeps a human in the loop for high-risk decisions.",
  },
  {
    q: "What is an AI voice agent?",
    a: "An AI voice agent is a real-time conversational system that answers and makes phone calls, understands speech, and takes safe actions such as booking appointments or updating a CRM. It typically combines speech-to-text (e.g. Whisper), an LLM for reasoning, and a voice platform like Vapi.ai.",
  },
  {
    q: "How much does an AI chatbot or voice agent cost?",
    a: "A production AI chatbot project usually starts in the low four figures, while voice agents with CRM integration cost more due to telephony and real-time requirements. Most of the cost is implementation; ongoing usage scales with call and message volume. We scope a fixed proposal after a short discovery call.",
  },
];

const faqs = [
  { q: "How is our data protected?", a: "All data is encrypted at rest and in transit using AES-256. We implement zero-trust architecture with role-based access controls and comprehensive audit logging." },
  { q: "Can you integrate with our existing CRM?", a: "Yes, we support all major CRMs: Salesforce, HubSpot, Pipedrive, Zoho. Custom integrations available via REST APIs and webhooks." },
  { q: "What's the typical implementation timeline?", a: "Simple chatbots: 2-3 weeks. Complex voice agents with CRM integration: 4-6 weeks. We provide weekly progress updates." },
  { q: "Do you provide ongoing support?", a: "Yes, we offer 24/7 monitoring, monthly performance reviews, and quarterly optimization sessions. SLA-backed response times." },
  { q: "What if the AI makes mistakes?", a: "We implement safety guardrails, escalation triggers, and human oversight. All critical actions require confirmation or human approval." },
  { q: "Can we customize the AI's personality?", a: "Absolutely. We train the AI on your brand voice, tone, and specific business rules. Full customization of responses and workflows." },
];

const CARD = "rounded-2xl border border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] backdrop-blur-sm";

export default function B2BContent() {
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
      badge="B2B Services"
      title="AI That Drives"
      titleHighlight="Revenue & Efficiency"
      subtitle="We design and ship business-ready AI: chatbots, voice agents, RAG assistants, lead qualification and CRM automations. Fast, secure and ROI-driven."
    >
      {/* CTA + stats */}
      <section className="pt-2 pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            <a
              href="https://t.me/vladyslavarcher"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-gradient-to-r from-[#a855f7] to-[#f97316] px-8 py-4 font-semibold text-white transition-opacity hover:opacity-90"
            >
              Book a B2B call →
            </a>
            <a
              href="#contact"
              className={`${CARD} px-8 py-4 font-semibold text-[var(--color-text-primary)] transition-colors hover:border-[#a855f7]/40`}
            >
              Get a proposal
            </a>
          </div>

          <motion.div
            className="grid grid-cols-2 gap-4 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeInUp} className={`${CARD} px-5 py-6 text-center`}>
                <div className="gradient-text font-display text-2xl font-bold sm:text-3xl">{s.value}</div>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-[var(--color-text-muted)] sm:text-xs">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Definitions / direct answers (AEO) */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl space-y-8 px-4 sm:px-6 lg:px-8">
          {definitions.map((d) => (
            <div key={d.q}>
              <h2 className="mb-3 font-display text-xl font-bold text-[var(--color-text-primary)] sm:text-2xl">{d.q}</h2>
              <p className="leading-relaxed text-[var(--color-text-secondary)]">{d.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mb-12 text-center" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span variants={fadeInUp} className="hud-badge mb-4">Services</motion.span>
            <motion.h2 variants={fadeInUp} className="mb-4 font-display text-3xl font-bold text-[var(--color-text-primary)] sm:text-4xl">What we deliver</motion.h2>
            <motion.p variants={fadeInUp} className="mx-auto max-w-xl text-[var(--color-text-secondary)]">Pre-built modules and custom solutions tailored to your workflows.</motion.p>
          </motion.div>

          <motion.div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeInUp}
                className={`group ${CARD} p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#a855f7]/40 hover:shadow-[0_18px_50px_-12px_rgba(168,85,247,0.35)] ${
                  s.primary ? "ring-1 ring-[#a855f7]/30" : ""
                }`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#a855f7]/25 to-[#f97316]/20 text-2xl">
                  {s.icon}
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-[var(--color-text-primary)]">{s.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">{s.desc}</p>
                <div className="space-y-1.5 border-t border-white/5 pt-4">
                  {s.points.map((p) => (
                    <div key={p} className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
                      <span className="text-[#fb923c]">▸</span> {p}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries marquee */}
      <section className="overflow-hidden py-12">
        <div className="mx-auto mb-6 max-w-7xl px-4 text-center">
          <span className="text-sm uppercase tracking-wider text-[var(--color-text-muted)]">Built for teams across industries</span>
        </div>
        <div className="flex gap-4 overflow-hidden">
          <div className="flex min-w-max animate-[scroll-x_20s_linear_infinite] gap-4">
            {[...industries, ...industries].map((ind, i) => (
              <span key={i} className={`${CARD} whitespace-nowrap px-6 py-2 text-sm text-[var(--color-text-secondary)]`}>
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mb-10 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="hud-badge mb-4">Roadmap</span>
            <h2 className="mb-4 font-display text-3xl font-bold text-[var(--color-text-primary)] sm:text-4xl">From discovery to scale</h2>
            <p className="text-[var(--color-text-secondary)]">A transparent delivery pipeline aligned to business outcomes.</p>
          </motion.div>

          <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
            {roadmap.map((r) => (
              <button
                key={r.step}
                onClick={() => setActiveStep(r.step)}
                className={`flex flex-shrink-0 items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                  activeStep === r.step
                    ? "bg-gradient-to-r from-[#a855f7] to-[#f97316] text-white"
                    : `${CARD} text-[var(--color-text-secondary)] hover:border-[#a855f7]/40`
                }`}
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-xs font-bold">{r.step}</span>
                <span>{r.title.split(" ")[0]}</span>
              </button>
            ))}
          </div>

          <motion.div
            key={activeStep}
            className={`${CARD} p-8`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="mb-3 font-display text-xl font-bold text-[var(--color-text-primary)]">{roadmap[activeStep - 1].title}</h3>
            <p className="text-[var(--color-text-secondary)]">{roadmap[activeStep - 1].desc}</p>
          </motion.div>
        </div>
      </section>

      {/* Security */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mb-10 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="hud-badge mb-4">Security</span>
            <h2 className="mb-4 font-display text-3xl font-bold text-[var(--color-text-primary)]">Enterprise-grade security</h2>
            <p className="text-[var(--color-text-secondary)]">Your data safety is our priority.</p>
          </motion.div>

          <div className={`${CARD} p-8`}>
            <div className="mb-8 flex flex-wrap justify-center gap-4">
              {[["🇪🇺", "GDPR Compliant"], ["🛡️", "SOC 2 Ready"], ["🔐", "ISO 27001"]].map(([icon, label]) => (
                <div key={label} className="flex items-center gap-2 rounded-xl border border-[#a855f7]/25 bg-[#a855f7]/10 px-5 py-3">
                  <span className="text-xl">{icon}</span>
                  <span className="text-sm font-semibold text-[var(--color-text-primary)]">{label}</span>
                </div>
              ))}
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                ["End-to-end encryption", "for all data transmission"],
                ["Audit logs", "for every AI interaction"],
                ["Role-based access", "control (RBAC)"],
                ["Rollback plans", "and incident response"],
                ["Regular penetration", "testing"],
              ].map(([bold, rest]) => (
                <li key={bold} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                  <span className="text-emerald-400">✓</span>
                  <strong className="text-[var(--color-text-primary)]">{bold}</strong> {rest}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mb-10 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="hud-badge mb-4">FAQ</span>
            <h2 className="font-display text-3xl font-bold text-[var(--color-text-primary)]">Frequently asked questions</h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={f.q} className={`${CARD} overflow-hidden`}>
                <button className="flex w-full items-center justify-between p-5 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-medium text-[var(--color-text-primary)]">{f.q}</span>
                  <span className={`text-lg text-[#c084fc] transition-transform ${openFaq === i ? "rotate-180" : ""}`}>⌄</span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-[var(--color-text-secondary)]">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16" id="contact">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className={`relative overflow-hidden ${CARD} p-8 sm:p-12`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/flow/ribbon-arc.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-20 mix-blend-screen [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
            />
            <div className="relative z-10">
              {submitted ? (
                <div className="py-8 text-center">
                  <div className="mb-4 text-5xl">✅</div>
                  <h3 className="mb-2 font-display text-2xl font-bold text-[var(--color-text-primary)]">Request sent!</h3>
                  <p className="text-[var(--color-text-secondary)]">We&apos;ll send a proposal and timeline within 24 hours.</p>
                </div>
              ) : (
                <>
                  <h3 className="mb-2 text-center font-display text-2xl font-bold text-[var(--color-text-primary)]">Ready to discuss your B2B project?</h3>
                  <p className="mb-8 text-center text-[var(--color-text-secondary)]">Tell us about your use-case — we&apos;ll send a proposal within 24 hours.</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {[
                        { name: "company", placeholder: "Company", type: "text" },
                        { name: "name", placeholder: "Contact name", type: "text" },
                        { name: "email", placeholder: "Email", type: "email" },
                        { name: "phone", placeholder: "Phone (optional)", type: "tel", required: false },
                      ].map((f) => (
                        <input
                          key={f.name}
                          type={f.type}
                          placeholder={f.placeholder}
                          required={f.required !== false}
                          value={form[f.name as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                          className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[#a855f7]/50 focus:outline-none"
                        />
                      ))}
                    </div>
                    <textarea
                      rows={4}
                      placeholder="Briefly describe your use-case (bot, voice agent, integrations, timeline)"
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[#a855f7]/50 focus:outline-none"
                    />
                    <div className="flex flex-wrap gap-4">
                      <button type="submit" className="rounded-xl bg-gradient-to-r from-[#a855f7] to-[#f97316] px-8 py-3 font-semibold text-white transition-opacity hover:opacity-90">
                        Send request
                      </button>
                      <a
                        href="https://t.me/vladyslavarcher"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl border border-white/20 px-8 py-3 font-semibold text-[var(--color-text-primary)] transition-colors hover:border-white/40"
                      >
                        Message on Telegram
                      </a>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
