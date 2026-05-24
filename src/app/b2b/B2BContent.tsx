"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@landing/lib/motion";
import PageLayout from "@landing/components/shared/PageLayout";
import SectionBridge from "@landing/components/SectionBridge";

const services = [
  {
    icon: "🤖",
    title: "Chatbots for Sales & Support",
    desc: "Scripts, integrations and analytics. Capture leads, answer 24/7, reduce support load.",
    points: ["WhatsApp/Telegram/Web", "CRM sync & webhooks", "FAQ/RAG knowledge base"],
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
    points: ["HubSpot/Salesforce", "Rules & fallbacks", "Conversion metrics"],
  },
  {
    icon: "🔧",
    title: "Process Automation",
    desc: "n8n/Make/Airflow. Approvals, syncs, reports. Remove manual steps.",
    points: ["Reliable orchestrations", "DLQ, retries, alerts", "Observability"],
  },
  {
    icon: "📊",
    title: "Evals & Analytics",
    desc: "Quality, cost and safety metrics. Clear reports for business and security.",
    points: ["Test sets, red-teaming", "Cost/perf dashboards", "Stakeholder reports"],
  },
];

const industries = ["Fintech", "E-commerce", "Healthcare", "SaaS / Cloud", "EdTech", "Real Estate", "Gaming", "Media"];

const roadmap = [
  { step: 1, title: "Discovery (1–2 weeks)", desc: "Goals, KPIs, data sources, risks, constraints. Quick audit and value map." },
  { step: 2, title: "Design (1–2 weeks)", desc: "Architecture, guardrails, integrations, rollout plan and success metrics." },
  { step: 3, title: "Pilot (2–4 weeks)", desc: "Ship MVP to real users with telemetry and evaluations. Iterate fast." },
  { step: 4, title: "Production (ongoing)", desc: "SLAs, monitoring, incident response, security reviews and compliance." },
  { step: 5, title: "Scale (quarterly)", desc: "New use-cases, A/B tests, enablement, cost and quality optimization." },
];

const faqs = [
  { q: "How are our data protected?", a: "All data is encrypted at rest and in transit using AES-256. We implement zero-trust architecture with role-based access controls and comprehensive audit logging." },
  { q: "Can you integrate with our existing CRM?", a: "Yes, we support all major CRMs: Salesforce, HubSpot, Pipedrive, Zoho. Custom integrations available via REST APIs and webhooks." },
  { q: "What's the typical implementation timeline?", a: "Simple chatbots: 2-3 weeks. Complex voice agents with CRM integration: 4-6 weeks. We provide weekly progress updates." },
  { q: "Do you provide ongoing support?", a: "Yes, we offer 24/7 monitoring, monthly performance reviews, and quarterly optimization sessions. SLA-backed response times." },
  { q: "What if the AI makes mistakes?", a: "We implement safety guardrails, escalation triggers, and human oversight. All critical actions require confirmation or human approval." },
  { q: "Can we customize the AI's personality?", a: "Absolutely. We train the AI on your brand voice, tone, and specific business rules. Full customization of responses and workflows." },
];

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
      subtitle="We design and ship business-ready AI: chatbots, voice agents, RAG assistants, lead qualification, CRM automations and integrations. Fast, secure and ROI-driven."
    >
      {/* CTA buttons */}
      <div className="flex justify-center gap-4 pb-10 flex-wrap">
        <a
          href="https://t.me/vladyslavarcher"
          className="px-8 py-4 bg-gradient-to-r from-[#a855f7] to-[#f97316] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book B2B Call →
        </a>
        <a href="#contact" className="px-8 py-4 glass border border-white/20 text-white font-semibold rounded-xl hover:border-white/40 transition-colors">
          Get Proposal
        </a>
      </div>

      {/* Feature pills */}
      <div className="flex flex-wrap justify-center gap-3 pb-16 px-4">
        {[["⚡️", "Rapid delivery"], ["🔗", "CRM/ERP integrations"], ["🛡️", "Guardrails & reporting"], ["📈", "Outcome-focused"]].map(([icon, label]) => (
          <div key={label} className="flex items-center gap-2 glass rounded-full px-4 py-2 border border-white/10 text-sm text-[var(--color-text-secondary)]">
            <span>{icon}</span><span>{label}</span>
          </div>
        ))}
      </div>

      <SectionBridge variant="violet-orange" curve="right" label="Services" />
      {/* Services */}
      <section className="py-20 border-t border-white/5 hud-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span variants={fadeInUp} className="hud-badge mb-4">
              Services
            </motion.span>
            <motion.h2 variants={fadeInUp} className="hud-title text-3xl sm:text-4xl mb-4">What We Deliver</motion.h2>
            <motion.p variants={fadeInUp} className="hud-subtitle max-w-xl mx-auto">Pre-built modules and custom solutions tailored to your workflows.</motion.p>
          </motion.div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeInUp}
                className={`hud-frame hud-scan hud-panel rounded-2xl p-6 glow-hover-card transition-all duration-300 hover:-translate-y-1 ${
                  s.primary
                    ? "bg-gradient-to-br from-[#a855f7]/20 to-[#f97316]/10 border-[#a855f7]/35"
                    : "glass border-white/10 hover:border-white/20"
                }`}
                style={{
                  "--card-glow": s.primary ? "rgba(168,85,247,0.35)" : "rgba(34,211,238,0.25)",
                } as React.CSSProperties}
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-lg font-display font-bold text-white mb-2">{s.title}</h3>
                <p className="text-[var(--color-text-secondary)] text-sm mb-4">{s.desc}</p>
                <div className="space-y-1">
                  {s.points.map((p) => (
                    <div key={p} className="text-xs text-[#fb923c]">• {p}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries marquee */}
      <section className="py-10 border-t border-white/5 overflow-hidden hud-grid">
        <div className="max-w-7xl mx-auto px-4 text-center mb-6">
          <span className="text-[var(--color-text-muted)] text-sm uppercase tracking-wider">Trusted by Industry Leaders</span>
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

      <SectionBridge variant="orange-violet" curve="left" label="Roadmap" />
      {/* Roadmap */}
      <section className="py-20 border-t border-white/5 hud-grid">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="hud-badge mb-4">
              Roadmap
            </span>
            <h2 className="hud-title text-3xl sm:text-4xl mb-4">From Discovery to Scale</h2>
            <p className="hud-subtitle">A transparent delivery pipeline aligned to business outcomes.</p>
          </motion.div>

          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {roadmap.map((r) => (
              <button
                key={r.step}
                onClick={() => setActiveStep(r.step)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeStep === r.step
                    ? "bg-gradient-to-r from-[#a855f7] to-[#f97316] text-white"
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
            className="hud-panel hud-frame hud-scan rounded-2xl p-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-xl font-display font-bold text-white mb-3">{roadmap[activeStep - 1].title}</h4>
            <p className="text-[var(--color-text-secondary)]">{roadmap[activeStep - 1].desc}</p>
          </motion.div>
        </div>
      </section>

      <SectionBridge variant="violet-cyan" curve="right" label="Security" />
      {/* Security */}
      <section className="py-20 border-t border-white/5 hud-grid">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="hud-badge mb-4">
              Security
            </span>
            <h2 className="hud-title text-3xl mb-4">Enterprise-Grade Security</h2>
            <p className="hud-subtitle">Your data safety is our priority</p>
          </motion.div>

          <div className="hud-panel hud-frame hud-scan rounded-2xl p-8">
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {[["🇪🇺", "GDPR Compliant"], ["🛡️", "SOC 2 Ready"], ["🔐", "ISO 27001"]].map(([icon, label]) => (
                <div key={label} className="flex items-center gap-2 bg-[#a855f7]/10 border border-[#a855f7]/25 rounded-xl px-5 py-3">
                  <span className="text-xl">{icon}</span>
                  <span className="text-white font-semibold text-sm">{label}</span>
                </div>
              ))}
            </div>
            <ul className="space-y-3">
              {[
                ["End-to-end encryption", "for all data transmission"],
                ["Audit logs", "for every AI interaction"],
                ["Role-based access", "control (RBAC)"],
                ["Rollback plans", "and incident response"],
                ["Regular penetration", "testing"],
              ].map(([bold, rest]) => (
                <li key={bold} className="flex items-center gap-2 text-[var(--color-text-secondary)] text-sm">
                  <span className="text-green-400">✓</span>
                  <strong className="text-white">{bold}</strong> {rest}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <SectionBridge variant="cyan-violet" curve="left" label="FAQ" />
      {/* FAQ */}
      <section className="py-20 border-t border-white/5 hud-grid">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="hud-badge mb-4">FAQ</span>
            <h2 className="hud-title text-3xl">Frequently Asked Questions</h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <motion.div
                key={f.q}
                className="hud-panel hud-frame hud-scan rounded-xl overflow-hidden"
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
                  <span className={`text-[#c084fc] text-lg transition-transform ${openFaq === i ? "rotate-180" : ""}`}>⌄</span>
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

      <SectionBridge variant="violet-orange" curve="right" label="Talk to Us" />
      {/* Contact Form */}
      <section className="py-20 border-t border-white/5 hud-grid" id="contact">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="hud-panel hud-frame hud-scan rounded-2xl p-8 sm:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Request Sent!</h3>
                <p className="text-[var(--color-text-secondary)]">We&apos;ll send a proposal and timeline within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-display font-bold text-white mb-2 text-center">Ready to discuss your B2B project?</h3>
                <p className="text-[var(--color-text-secondary)] text-center mb-8">Tell us about your use-case — we&apos;ll send a proposal within 24 hours.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        className="w-full glass border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[#a855f7]/50 bg-transparent"
                      />
                    ))}
                  </div>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your use-case (bot, voice agent, integrations, timeline)"
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full glass border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[#a855f7]/50 bg-transparent resize-none"
                  />
                  <div className="flex gap-4 flex-wrap">
                    <button
                      type="submit"
                      className="px-8 py-3 bg-gradient-to-r from-[#a855f7] to-[#f97316] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
                    >
                      Send Request
                    </button>
                    <a
                      href="https://t.me/vladyslavarcher"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 glass border border-white/20 text-white font-semibold rounded-xl hover:border-white/40 transition-colors"
                    >
                      Message on Telegram
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
