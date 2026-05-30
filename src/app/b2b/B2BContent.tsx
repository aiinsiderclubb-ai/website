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

const goalOptions = [
  "Increase qualified leads",
  "Reduce support workload",
  "Automate booking and calls",
  "Connect CRM and reporting",
  "Build a custom AI assistant",
];

const industries = ["Fintech", "E-commerce", "Healthcare", "SaaS / Cloud", "EdTech", "Real Estate", "Gaming", "Media"];

const roadmap = [
  {
    step: 1,
    title: "Discovery",
    phase: "Discovery",
    duration: "1–2 weeks",
    desc: "Goals, KPIs, data sources, risks, constraints. Quick audit and value map.",
    deliverables: ["Opportunity audit", "Value & ROI map", "Risk + data review"],
    output: "Scope",
  },
  {
    step: 2,
    title: "Design",
    phase: "Design",
    duration: "1–2 weeks",
    desc: "Architecture, guardrails, integrations, rollout plan and success metrics.",
    deliverables: ["System architecture", "Guardrails & prompts", "Integration plan"],
    output: "Blueprint",
  },
  {
    step: 3,
    title: "Pilot",
    phase: "Pilot",
    duration: "2–4 weeks",
    desc: "Ship MVP to real users with telemetry and evaluations. Iterate fast.",
    deliverables: ["Working MVP", "Telemetry + evals", "Fast iterations"],
    output: "MVP",
  },
  {
    step: 4,
    title: "Production",
    phase: "Production",
    duration: "ongoing",
    desc: "SLAs, monitoring, incident response, security reviews and compliance.",
    deliverables: ["SLAs & monitoring", "Incident response", "Security reviews"],
    output: "Live",
  },
  {
    step: 5,
    title: "Scale",
    phase: "Scale",
    duration: "quarterly",
    desc: "New use-cases, A/B tests, enablement, cost and quality optimization.",
    deliverables: ["New use-cases", "A/B tests", "Cost optimization"],
    output: "Growth",
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
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    focus: "",
    budget: "",
  });
  const [audit, setAudit] = useState({
    website: "",
    goal: "Increase qualified leads",
    details: "",
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Chatbots for Sales & Support",
    "Lead Qualification",
  ]);
  const [goalOpen, setGoalOpen] = useState(false);
  const [auditGenerated, setAuditGenerated] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const normalizedWebsite =
    audit.website.trim().replace(/^https?:\/\//, "").replace(/\/$/, "") || "your website";
  const selectedModules = services.filter((service) => selectedServices.includes(service.title));
  const reportModules = selectedModules.length > 0 ? selectedModules : services.slice(0, 3);
  const quizProgress = Math.round(
    ((audit.website.trim() ? 1 : 0) +
      (audit.goal ? 1 : 0) +
      (selectedServices.length ? 1 : 0) +
      (audit.details.trim() ? 1 : 0)) *
      25,
  );

  const toggleService = (title: string) => {
    setSelectedServices((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title],
    );
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

      {/* Interactive scanner */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-10 text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span variants={fadeInUp} className="hud-badge mb-4">
              AI opportunity scanner
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="mb-4 font-display text-3xl font-bold text-[var(--color-text-primary)] sm:text-5xl"
            >
              Get a custom AI plan for your business
            </motion.h2>
            <motion.p variants={fadeInUp} className="mx-auto max-w-2xl text-[var(--color-text-secondary)]">
              Drop your website, choose what you want to automate, and we&apos;ll generate a first
              version of the AI stack we would build for you.
            </motion.p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden ${CARD} p-6 sm:p-8`}
            >
              <Image
                src="/images/flow/ribbon-knot.png"
                alt=""
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover opacity-15 mix-blend-screen [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_72%)]"
              />

              <div className="relative z-10 space-y-6">
                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c084fc]">
                        Quiz progress
                      </div>
                      <div className="mt-1 text-sm text-[var(--color-text-secondary)]">
                        Build your AI opportunity map
                      </div>
                    </div>
                    <div className="gradient-text font-display text-2xl font-bold">{quizProgress}%</div>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#a855f7] to-[#f97316] transition-all duration-500"
                      style={{ width: `${quizProgress}%` }}
                    />
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <label className="mb-3 flex items-center gap-3 text-sm font-semibold text-[var(--color-text-primary)]">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#a855f7]/15 text-xs text-[#c084fc]">1</span>
                    Your website
                  </label>
                  <input
                    value={audit.website}
                    onChange={(e) => setAudit({ ...audit, website: e.target.value })}
                    placeholder="https://yourcompany.com"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[#a855f7]/50 focus:outline-none"
                  />
                  <p className="mt-2 text-xs text-[var(--color-text-muted)]">
                    We&apos;ll inspect the funnel, offer clarity, conversion points and automation gaps.
                  </p>
                </div>

                <div className="relative rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <label className="mb-3 flex items-center gap-3 text-sm font-semibold text-[var(--color-text-primary)]">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#a855f7]/15 text-xs text-[#c084fc]">2</span>
                    Main business goal
                  </label>
                  <button
                    type="button"
                    onClick={() => setGoalOpen((open) => !open)}
                    className="flex w-full items-center justify-between rounded-xl border border-[#a855f7]/25 bg-[#a855f7]/10 px-4 py-3 text-left text-[var(--color-text-primary)] transition-all hover:border-[#a855f7]/50"
                  >
                    <span>{audit.goal}</span>
                    <span className={`text-[#c084fc] transition-transform ${goalOpen ? "rotate-180" : ""}`}>⌄</span>
                  </button>

                  <AnimatePresence>
                    {goalOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.16 }}
                        className="absolute left-4 right-4 top-[92px] z-30 overflow-hidden rounded-2xl border border-[#a855f7]/30 bg-[#141027]/95 p-2 shadow-[0_22px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl"
                      >
                        {goalOptions.map((goal) => {
                          const active = audit.goal === goal;
                          return (
                            <button
                              key={goal}
                              type="button"
                              onClick={() => {
                                setAudit({ ...audit, goal });
                                setGoalOpen(false);
                              }}
                              className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition-all ${
                                active
                                  ? "bg-gradient-to-r from-[#a855f7]/35 to-[#f97316]/20 text-white"
                                  : "text-[var(--color-text-secondary)] hover:bg-white/[0.06] hover:text-[var(--color-text-primary)]"
                              }`}
                            >
                              <span className={`flex h-5 w-5 items-center justify-center rounded-full border text-[10px] ${
                                active ? "border-[#f97316]/60 bg-[#f97316]/20 text-[#fb923c]" : "border-white/15"
                              }`}>
                                {active ? "✓" : ""}
                              </span>
                              {goal}
                            </button>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <label className="mb-3 flex items-center gap-3 text-sm font-semibold text-[var(--color-text-primary)]">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#a855f7]/15 text-xs text-[#c084fc]">3</span>
                    What should AI help with?
                  </label>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {services.map((service) => {
                      const active = selectedServices.includes(service.title);
                      return (
                        <button
                          key={service.title}
                          type="button"
                          onClick={() => toggleService(service.title)}
                          className={`rounded-xl border p-4 text-left transition-all ${
                            active
                              ? "border-[#a855f7]/55 bg-[#a855f7]/15 shadow-[0_0_24px_rgba(168,85,247,0.16)]"
                              : "border-white/10 bg-white/[0.03] hover:border-white/20"
                          }`}
                        >
                          <div className="mb-2 flex items-center gap-2">
                            <span>{service.icon}</span>
                            <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                              {service.title}
                            </span>
                          </div>
                          <p className="text-xs leading-relaxed text-[var(--color-text-muted)]">
                            {service.desc}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <label className="mb-3 flex items-center gap-3 text-sm font-semibold text-[var(--color-text-primary)]">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#a855f7]/15 text-xs text-[#c084fc]">4</span>
                    Anything beyond the website?
                  </label>
                  <textarea
                    rows={4}
                    value={audit.details}
                    onChange={(e) => setAudit({ ...audit, details: e.target.value })}
                    placeholder="Example: we use HubSpot, get leads from ads, want Telegram alerts and automatic booking..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[#a855f7]/50 focus:outline-none"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setAuditGenerated(true)}
                  className="w-full rounded-xl bg-gradient-to-r from-[#a855f7] to-[#f97316] px-6 py-4 font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Generate AI opportunity map →
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden ${CARD} p-6 sm:p-8`}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#a855f7]/70 to-transparent" />
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <span className="hud-badge mb-3">Generated preview</span>
                  <h3 className="font-display text-2xl font-bold text-[var(--color-text-primary)]">
                    AI stack for {normalizedWebsite}
                  </h3>
                </div>
                <div className="hidden rounded-2xl border border-[#f97316]/25 bg-[#f97316]/10 px-4 py-3 text-right sm:block">
                  <div className="gradient-text font-display text-2xl font-bold">
                    {auditGenerated ? "72h" : "Live"}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">
                    first prototype
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="mb-2 text-xs uppercase tracking-[0.18em] text-[#c084fc]">
                    Funnel audit
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    We&apos;ll map where visitors drop off on <strong className="text-[var(--color-text-primary)]">{normalizedWebsite}</strong>:
                    offer clarity, forms, CTAs, response speed, FAQ coverage and conversion tracking.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="mb-3 text-xs uppercase tracking-[0.18em] text-[#fb923c]">
                    Recommended build
                  </div>
                  <div className="space-y-3">
                    {reportModules.map((service) => (
                      <div key={service.title} className="flex gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.06]">
                          {service.icon}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[var(--color-text-primary)]">
                            {service.title}
                          </div>
                          <p className="text-xs leading-relaxed text-[var(--color-text-muted)]">
                            {service.points.join(" · ")}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    ["01", "Audit", "Website + funnel gaps"],
                    ["02", "Prototype", "Bot / agent / workflow"],
                    ["03", "Deploy", "CRM + analytics + alerts"],
                  ].map(([step, title, desc]) => (
                    <div key={step} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="mb-3 gradient-text font-display text-xl font-bold">{step}</div>
                      <div className="text-sm font-semibold text-[var(--color-text-primary)]">{title}</div>
                      <div className="mt-1 text-xs text-[var(--color-text-muted)]">{desc}</div>
                    </div>
                  ))}
                </div>

                {audit.details && (
                  <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
                    <div className="mb-2 text-xs uppercase tracking-[0.18em] text-emerald-300">
                      Extra context captured
                    </div>
                    <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      “{audit.details}”
                    </p>
                  </div>
                )}

                <div className="rounded-2xl border border-[#a855f7]/25 bg-[#a855f7]/10 p-5">
                  <div className="mb-2 text-xs uppercase tracking-[0.18em] text-[#c084fc]">
                    Main outcome
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    Goal: <strong className="text-[var(--color-text-primary)]">{audit.goal}</strong>. We would turn this
                    into a concrete B2B proposal with scope, timeline, integrations and launch metrics.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mb-10 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="hud-badge mb-4">Roadmap</span>
            <h2 className="mb-4 font-display text-3xl font-bold text-[var(--color-text-primary)] sm:text-5xl">
              From discovery to scale
            </h2>
            <p className="mx-auto max-w-2xl text-[var(--color-text-secondary)]">
              Not a vague process. A visible launch path with clear checkpoints, deliverables and go/no-go decisions.
            </p>
          </motion.div>

          <div className={`relative overflow-hidden rounded-[2rem] ${CARD} p-6 sm:p-8 lg:p-10`}>
            {/* soft AI ambient glows (no image) */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#7c3aed]/15 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#f97316]/12 blur-3xl" />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(168,85,247,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.6) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                maskImage: "radial-gradient(ellipse 80% 80% at 50% 0%, black 30%, transparent 80%)",
              }}
            />

            {/* Pipeline rail */}
            <div className="relative z-10">
              <div className="relative">
                <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-[2px] rounded-full bg-white/[0.08] lg:block" />
                <div
                  className="pointer-events-none absolute left-0 top-7 hidden h-[2px] rounded-full bg-gradient-to-r from-[#a855f7] via-[#c084fc] to-[#f97316] shadow-[0_0_18px_rgba(168,85,247,0.55)] transition-all duration-500 lg:block"
                  style={{ width: `${((activeStep - 1) / (roadmap.length - 1)) * 100}%` }}
                />

                <div className="grid gap-6 lg:grid-cols-5">
                  {roadmap.map((r) => {
                    const active = activeStep === r.step;
                    const done = activeStep > r.step;
                    return (
                      <button
                        key={r.step}
                        type="button"
                        onClick={() => setActiveStep(r.step)}
                        className="group relative flex flex-col items-center text-center"
                      >
                        {/* node */}
                        <span
                          className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border font-display text-sm font-bold transition-all duration-300 ${
                            active
                              ? "scale-110 border-transparent bg-gradient-to-br from-[#a855f7] to-[#f97316] text-white shadow-[0_0_30px_rgba(168,85,247,0.6)]"
                              : done
                                ? "border-emerald-400/40 bg-emerald-400/15 text-emerald-300"
                                : "border-white/15 bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] group-hover:border-[#a855f7]/45 group-hover:text-[var(--color-text-primary)]"
                          }`}
                        >
                          {active && (
                            <span className="absolute inset-0 animate-ping rounded-full border border-[#a855f7]/40" />
                          )}
                          {done ? "✓" : `0${r.step}`}
                        </span>

                        <div
                          className={`mt-5 w-full rounded-2xl border p-4 text-left transition-all duration-300 ${
                            active
                              ? "border-[#a855f7]/45 bg-[#a855f7]/12 shadow-[0_20px_50px_-20px_rgba(168,85,247,0.6)]"
                              : "border-white/10 bg-white/[0.03] group-hover:-translate-y-1 group-hover:border-white/20"
                          }`}
                        >
                          <div className="mb-1 flex items-center justify-between">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c084fc]">
                              {r.phase}
                            </span>
                            <span className="text-[10px] text-[var(--color-text-muted)]">{r.duration}</span>
                          </div>
                          <h3 className="font-display text-base font-bold text-[var(--color-text-primary)]">
                            {r.title}
                          </h3>
                          <div className="mt-2 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.05] px-2 py-0.5 text-[10px] text-[var(--color-text-secondary)]">
                            → {r.output}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active checkpoint detail */}
              <motion.div
                key={activeStep}
                className="mt-8 grid gap-6 rounded-2xl border border-white/10 bg-black/25 p-6 backdrop-blur-sm lg:grid-cols-[1fr_320px]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
              >
                <div>
                  <div className="mb-2 flex items-center gap-3">
                    <span className="text-xs uppercase tracking-[0.18em] text-[#fb923c]">
                      Phase {roadmap[activeStep - 1].step} · {roadmap[activeStep - 1].duration}
                    </span>
                  </div>
                  <h3 className="mb-2 font-display text-2xl font-bold text-[var(--color-text-primary)]">
                    {roadmap[activeStep - 1].title}
                  </h3>
                  <p className="max-w-lg text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {roadmap[activeStep - 1].desc}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {roadmap[activeStep - 1].deliverables.map((d) => (
                      <span
                        key={d}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-[var(--color-text-secondary)]"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[#a855f7] to-[#f97316]" />
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-4 rounded-2xl border border-[#a855f7]/20 bg-[#a855f7]/[0.08] p-5">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                      Stage output
                    </div>
                    <div className="gradient-text font-display text-3xl font-bold">
                      {roadmap[activeStep - 1].output}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {roadmap.map((r) => (
                      <span
                        key={r.step}
                        className={`h-1.5 flex-1 rounded-full transition-all ${
                          r.step <= activeStep ? "bg-gradient-to-r from-[#a855f7] to-[#f97316]" : "bg-white/10"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveStep((s) => (s >= roadmap.length ? 1 : s + 1))}
                    className="rounded-xl bg-gradient-to-r from-[#a855f7] to-[#f97316] px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    {activeStep >= roadmap.length ? "Restart pipeline" : "Next phase →"}
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mb-10 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="hud-badge mb-4">Security</span>
            <h2 className="mb-4 font-display text-3xl font-bold text-[var(--color-text-primary)] sm:text-5xl">
              Security command center
            </h2>
            <p className="mx-auto max-w-2xl text-[var(--color-text-secondary)]">
              Every automation ships with access control, logging, fallbacks and human approval for high-risk actions.
            </p>
          </motion.div>

          <div className={`relative overflow-hidden rounded-3xl ${CARD} p-6 sm:p-8 lg:p-10`}>
            <Image
              src="/images/flow/ribbon-arc.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-18 mix-blend-screen [mask-image:radial-gradient(ellipse_at_25%_45%,black,transparent_72%)]"
            />
            <div className="relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="relative mx-auto aspect-square w-full max-w-[380px]">
                {/* ambient core glow */}
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.16),transparent_60%)]" />

                {/* rotating dashed outer ring */}
                <div className="absolute inset-2 rounded-full border border-dashed border-[#a855f7]/25 [animation:spin_32s_linear_infinite]" />
                {/* radar sweep */}
                <div
                  className="absolute inset-8 rounded-full [animation:spin_5s_linear_infinite]"
                  style={{
                    background:
                      "conic-gradient(from 0deg, rgba(34,211,238,0) 0deg, rgba(34,211,238,0.22) 50deg, rgba(34,211,238,0) 90deg)",
                  }}
                />
                {/* concentric rings + crosshair */}
                <div className="absolute inset-8 rounded-full border border-cyan-300/15" />
                <div className="absolute inset-20 rounded-full border border-[#a855f7]/20" />
                <div className="absolute left-1/2 top-[10%] h-[80%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                <div className="absolute top-1/2 left-[10%] h-px w-[80%] -translate-y-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* orbiting badge chips (wrapper spins, chips counter-spin to stay upright) */}
                <div className="absolute inset-0 [animation:spin_26s_linear_infinite]">
                  {["RBAC", "Audit", "GDPR", "Fallback"].map((label, i) => (
                    <div
                      key={label}
                      className="absolute left-1/2 top-1/2 h-0 w-0"
                      style={{ transform: `rotate(${i * 90}deg) translateY(-150px)` }}
                    >
                      <div
                        className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-white/10 bg-[var(--color-bg-secondary)]/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-text-secondary)] shadow-[0_0_18px_rgba(168,85,247,0.18)] [animation:spin_26s_linear_infinite_reverse]"
                        style={{ transform: `rotate(${-i * 90}deg)` }}
                      >
                        {label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* center shield */}
                <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] border border-[#a855f7]/35 bg-[var(--color-bg-secondary)]/70 shadow-[0_0_60px_rgba(168,85,247,0.3)] backdrop-blur-sm">
                  <span className="absolute inset-0 rounded-[2rem] border border-[#a855f7]/30 [animation:ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
                  <div className="absolute inset-4 rounded-3xl border border-white/10" />
                  <div className="relative text-center">
                    <div className="mb-1 text-4xl">🛡️</div>
                    <div className="gradient-text font-display text-3xl font-bold">99.9%</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                      uptime
                    </div>
                  </div>
                </div>

                {/* live status pill */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 [animation:pulse_1.6s_ease-in-out_infinite]" />
                  Monitoring active
                </div>
              </div>

              <div>
                <div className="mb-6 grid gap-3 sm:grid-cols-3">
                  {[["🇪🇺", "GDPR", "Data rules"], ["🛡️", "SOC 2", "Controls"], ["🔐", "ISO 27001", "Process"]].map(([icon, label, sub]) => (
                    <div key={label} className="rounded-2xl border border-[#a855f7]/25 bg-[#a855f7]/10 p-4">
                      <div className="mb-3 text-2xl">{icon}</div>
                      <div className="font-display text-lg font-bold text-[var(--color-text-primary)]">{label}</div>
                      <div className="text-xs text-[var(--color-text-muted)]">{sub}</div>
                    </div>
                  ))}
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    ["End-to-end encryption", "All sensitive data in transit and at rest."],
                    ["Audit logs", "Every AI action is traceable by user, time and tool."],
                    ["Role-based access", "Only approved people can trigger sensitive workflows."],
                    ["Rollback plans", "Every launch includes fallbacks and incident response."],
                    ["Human approval gates", "Critical actions can require manual confirmation."],
                    ["Regular testing", "Security and reliability checks before production."],
                  ].map(([title, desc]) => (
                    <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/15 text-xs text-emerald-300">✓</span>
                        <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">{title}</h3>
                      </div>
                      <p className="text-xs leading-relaxed text-[var(--color-text-muted)]">{desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5">
                  <div className="mb-2 text-xs uppercase tracking-[0.18em] text-cyan-200">
                    Production rule
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    AI can draft, route and recommend — but actions that change money, contracts,
                    medical/legal status or customer records can stay behind approval gates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16" id="contact">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className={`relative overflow-hidden rounded-3xl ${CARD} p-6 sm:p-8 lg:p-10`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/flow/ribbon-wave.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-22 mix-blend-screen [mask-image:radial-gradient(ellipse_at_70%_35%,black,transparent_76%)]"
            />
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#f97316]/70 to-transparent" />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <span className="hud-badge mb-5">Proposal engine</span>
                <h2 className="mb-4 font-display text-3xl font-bold leading-tight text-[var(--color-text-primary)] sm:text-5xl">
                  Send your use-case.
                  <br />
                  <span className="gradient-text">Get a launch plan in 24h.</span>
                </h2>
                <p className="mb-7 max-w-xl text-[var(--color-text-secondary)]">
                  Tell us what you want to automate and we&apos;ll return a scoped AI proposal:
                  recommended stack, timeline, integrations, risks and quick-win automation.
                </p>

                <div className="grid gap-3 sm:grid-cols-3 lg:max-w-xl">
                  {[
                    ["01", "Audit", "Website + funnel"],
                    ["02", "Scope", "AI modules + CRM"],
                    ["03", "Launch", "MVP timeline"],
                  ].map(([step, title, desc]) => (
                    <div key={step} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="mb-3 gradient-text font-display text-2xl font-bold">{step}</div>
                      <div className="text-sm font-semibold text-[var(--color-text-primary)]">{title}</div>
                      <div className="mt-1 text-xs text-[var(--color-text-muted)]">{desc}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 lg:max-w-xl">
                  <div className="text-xs uppercase tracking-[0.18em] text-emerald-300">No generic pitch</div>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    We answer with the specific automations we would build for your business, not a template deck.
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30 p-5 backdrop-blur-md shadow-[0_30px_80px_-30px_rgba(168,85,247,0.5)] sm:p-7">
                {/* top accent line */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#a855f7]/70 to-transparent" />
                {/* corner glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#f97316]/15 blur-3xl" />

                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-emerald-400/25 bg-emerald-400/10 text-5xl shadow-[0_0_50px_rgba(52,211,153,0.3)]">
                      ✓
                    </div>
                    <h3 className="mb-2 font-display text-2xl font-bold text-[var(--color-text-primary)]">Request received</h3>
                    <p className="mx-auto mb-6 max-w-sm text-[var(--color-text-secondary)]">
                      Our team is scoping your proposal now. Expect a tailored AI plan within 24 hours.
                    </p>
                    <div className="mx-auto flex max-w-sm items-center justify-center gap-2 text-xs text-[var(--color-text-muted)]">
                      {["Brief logged", "Stack matched", "Proposal queued"].map((s, i) => (
                        <span key={s} className="flex items-center gap-2">
                          <span className="text-emerald-300">✓</span>
                          {s}
                          {i < 2 && <span className="text-white/15">→</span>}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <div>
                        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 [animation:pulse_1.6s_ease-in-out_infinite]" />
                          Accepting briefs
                        </div>
                        <h3 className="font-display text-xl font-bold text-[var(--color-text-primary)]">
                          Project brief
                        </h3>
                        <p className="text-sm text-[var(--color-text-muted)]">Fast to send, detailed enough to scope.</p>
                      </div>
                      <div className="rounded-2xl border border-[#f97316]/25 bg-[#f97316]/10 px-4 py-3 text-right">
                        <div className="gradient-text font-display text-2xl font-bold">24h</div>
                        <div className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">reply</div>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {[
                          { name: "company", placeholder: "Company", type: "text", icon: "🏢" },
                          { name: "name", placeholder: "Contact name", type: "text", icon: "👤" },
                          { name: "email", placeholder: "Work email", type: "email", icon: "✉️" },
                          { name: "phone", placeholder: "Phone (optional)", type: "tel", required: false, icon: "📞" },
                        ].map((f) => (
                          <div key={f.name} className="group relative">
                            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-sm opacity-60">
                              {f.icon}
                            </span>
                            <input
                              type={f.type}
                              placeholder={f.placeholder}
                              required={f.required !== false}
                              value={form[f.name as keyof typeof form]}
                              onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                              className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-10 pr-4 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] transition-all focus:border-[#a855f7]/60 focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(168,85,247,0.15)] focus:outline-none"
                            />
                          </div>
                        ))}
                      </div>

                      {/* quick-select: project focus */}
                      <div>
                        <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                          What do you need?
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {["AI chatbot", "Voice agent", "Lead qualification", "Integrations", "Custom build"].map((opt) => {
                            const active = form.focus === opt;
                            return (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => setForm({ ...form, focus: active ? "" : opt })}
                                className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all ${
                                  active
                                    ? "border-[#a855f7]/60 bg-[#a855f7]/15 text-[var(--color-text-primary)] shadow-[0_0_18px_rgba(168,85,247,0.25)]"
                                    : "border-white/10 bg-white/[0.04] text-[var(--color-text-secondary)] hover:border-white/25"
                                }`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* quick-select: budget */}
                      <div>
                        <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                          Budget range
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          {["< €2k", "€2k–€10k", "€10k+"].map((opt) => {
                            const active = form.budget === opt;
                            return (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => setForm({ ...form, budget: active ? "" : opt })}
                                className={`rounded-xl border px-2 py-2.5 text-xs font-semibold transition-all ${
                                  active
                                    ? "border-[#f97316]/60 bg-[#f97316]/15 text-[var(--color-text-primary)]"
                                    : "border-white/10 bg-white/[0.04] text-[var(--color-text-secondary)] hover:border-white/25"
                                }`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <textarea
                        rows={4}
                        placeholder="Website, CRM, current bottleneck, what you want AI to automate..."
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] transition-all focus:border-[#a855f7]/60 focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(168,85,247,0.15)] focus:outline-none"
                      />

                      <button
                        type="submit"
                        className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#a855f7] to-[#f97316] px-8 py-3.5 font-semibold text-white shadow-[0_10px_40px_-10px_rgba(168,85,247,0.6)] transition-transform hover:scale-[1.01]"
                      >
                        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                        <span className="relative flex items-center justify-center gap-2">
                          Generate proposal request
                          <span className="transition-transform group-hover:translate-x-1">→</span>
                        </span>
                      </button>

                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <a
                          href="https://t.me/vladyslavarcher"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-[var(--color-text-primary)] transition-colors hover:border-white/40"
                        >
                          <span>✈️</span> Prefer Telegram?
                        </a>
                        <div className="flex items-center gap-3 text-[11px] text-[var(--color-text-muted)]">
                          <span className="flex items-center gap-1"><span className="text-emerald-300">🔒</span> NDA on request</span>
                          <span className="flex items-center gap-1"><span className="text-emerald-300">✓</span> No spam</span>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
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
    </PageLayout>
  );
}
