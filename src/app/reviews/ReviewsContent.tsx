"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import PageLayout from "@/components/shared/PageLayout";
import { useI18n } from "@/context/i18n-context";

const allReviews = [
  {
    initials: "MC",
    name: "Michael Chen",
    role: "AI Automation Engineer",
    category: "success",
    badge: "$280K Income",
    badgeType: "success",
    quote: "Started with zero AI knowledge 8 months ago. Now I'm earning $280K annually as an AI automation consultant. The community support was incredible — always someone ready to help 24/7. Best investment I've ever made!",
    metrics: ["+280% income increase", "8 months transformation", "Now at Google"],
  },
  {
    initials: "SJ",
    name: "Sarah Johnson",
    role: "Marketing Director",
    category: "courses",
    badge: "ChatBot Course",
    badgeType: "course",
    quote: "The ChatBot Development course was exactly what I needed. Clear explanations, practical projects, and real-world applications. Built 3 chatbots for our company that save us 25 hours per week!",
    metrics: ["25 hours/week saved", "3 chatbots deployed", "40% efficiency boost"],
  },
  {
    initials: "AR",
    name: "Alex Rodriguez",
    role: "Startup Founder",
    category: "community",
    badge: "Telegram Member",
    badgeType: "community",
    quote: "The Telegram community is pure gold. Got help implementing Zapier automations that boosted our lead conversion by 150%. The daily tips alone are worth joining for!",
    metrics: ["150% conversion boost", "Daily valuable tips", "Amazing network"],
  },
  {
    initials: "EW",
    name: "Emma Williams",
    role: "Freelance AI Consultant",
    category: "mentorship",
    badge: "VIP Mentorship",
    badgeType: "vip",
    quote: "The personal mentorship was life-changing. My mentor helped me land my first $5K automation project within 2 weeks. Now I have a waiting list of clients!",
    metrics: ["First $5K project in 2 weeks", "Client waiting list", "Personal guidance"],
  },
  {
    initials: "DP",
    name: "David Park",
    role: "Software Developer",
    category: "courses",
    badge: "Voice Agent",
    badgeType: "course",
    quote: "Voice Agent bootcamp blew my mind! Built my first voice assistant in just 7 days. The Vapi.ai integration was so smooth. Already using it for customer support.",
    metrics: ["Voice agent in 7 days", "Vapi.ai mastery", "Customer support automation"],
  },
  {
    initials: "LZ",
    name: "Lisa Zhang",
    role: "AI Research Scientist",
    category: "success",
    badge: "$180K → $320K",
    badgeType: "success",
    quote: "Transitioned from traditional data science to AI automation. Salary jumped from $180K to $320K in 6 months. The advanced courses gave me the edge I needed.",
    metrics: ["$140K salary increase", "Career transition", "6 months timeline"],
  },
  {
    initials: "JW",
    name: "James Wilson",
    role: "Business Owner",
    category: "community",
    badge: "Active Member",
    badgeType: "community",
    quote: "The community helped me automate my entire e-commerce business. From inventory management to customer service — everything runs on autopilot now!",
    metrics: ["Full business automation", "Inventory management", "Customer service automation"],
  },
  {
    initials: "MG",
    name: "Maria Garcia",
    role: "Digital Marketing Consultant",
    category: "mentorship",
    badge: "Elite Program",
    badgeType: "vip",
    quote: "Elite mentorship was worth every penny. My mentor helped me build automation systems for 15+ clients. Now running a $500K/year automation agency!",
    metrics: ["15+ clients automated", "$500K annual revenue", "Automation agency"],
  },
  {
    initials: "RK",
    name: "Robert Kim",
    role: "Operations Manager",
    category: "courses",
    badge: "Automation Systems",
    badgeType: "course",
    quote: "Enterprise Automation course was exactly what our company needed. Implemented workflows that save us $2M annually in operational costs!",
    metrics: ["$2M annual savings", "Enterprise implementation", "Operational efficiency"],
  },
  {
    initials: "JB",
    name: "Jessica Brown",
    role: "Former Teacher → AI Consultant",
    category: "success",
    badge: "Career Change",
    badgeType: "success",
    quote: "Complete career transformation! Went from teaching ($45K) to AI consulting ($120K) in 10 months. The step-by-step guidance made it possible!",
    metrics: ["Teacher to AI Consultant", "$45K → $120K salary", "10 months transition"],
  },
  {
    initials: "TA",
    name: "Tom Anderson",
    role: "Freelancer",
    category: "community",
    badge: "Daily User",
    badgeType: "community",
    quote: "The daily tool recommendations in Telegram are incredible. Discovered 20+ AI tools that increased my productivity by 300%. Always first to know about new releases!",
    metrics: ["20+ tools discovered", "300% productivity boost", "Early access to tools"],
  },
];

const filters = ["all", "courses", "community", "mentorship", "success"] as const;
type Filter = typeof filters[number];


const badgeColors: Record<string, string> = {
  success: "bg-emerald-500/20 text-emerald-400",
  course: "bg-[#0ea5e9]/20 text-[#38bdf8]",
  community: "bg-[#7c3aed]/20 text-[#a78bfa]",
  vip: "bg-amber-500/20 text-amber-400",
};

export default function ReviewsPage() {
  const { t } = useI18n();
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const ratingBars = [
    { stars: t.reviewsRatingBars.fiveStars, pct: 89 },
    { stars: t.reviewsRatingBars.fourStars, pct: 8 },
    { stars: t.reviewsRatingBars.threeStars, pct: 2 },
    { stars: t.reviewsRatingBars.twoStars, pct: 1 },
    { stars: t.reviewsRatingBars.oneStar, pct: 0 },
  ];

  const filtered = activeFilter === "all" ? allReviews : allReviews.filter((r) => r.category === activeFilter);

  const filterLabels: Record<Filter, string> = {
    all: t.reviewsPage.allReviews,
    courses: t.reviewsPage.filterCourses,
    community: t.reviewsPage.filterCommunity,
    mentorship: t.reviewsPage.filterMentorship,
    success: t.reviewsPage.filterSuccess,
  };

  return (
    <PageLayout
      badge={t.reviewsPage.badge}
      title={t.reviewsPage.title}
      titleHighlight={t.reviewsPage.titleHighlight}
      subtitle={t.reviewsPage.subtitle}
    >
      {/* Stats bar */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-3 gap-4 glass rounded-2xl p-6 sm:p-10 border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { n: "1,847", l: t.reviewsPage.happyStudents },
              { n: "4.9/5", l: t.reviewsPage.avgRating },
              { n: "98%", l: t.reviewsPage.wouldRecommend },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-2xl sm:text-4xl font-display font-bold gradient-text">{s.n}</div>
                <div className="text-xs sm:text-sm text-[var(--color-text-secondary)] mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter buttons */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all capitalize ${
                  activeFilter === f
                    ? "bg-[#0ea5e9] text-white"
                    : "glass border border-white/10 text-[var(--color-text-secondary)] hover:border-white/20"
                }`}
              >
                {filterLabels[f]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
            >
              {filtered.map((r) => (
                <motion.div
                  key={r.name}
                  variants={fadeInUp}
                  className="glass rounded-2xl p-6 border border-white/10 flex flex-col hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#7c3aed] flex items-center justify-center text-white font-bold text-sm">
                        {r.initials}
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">{r.name}</div>
                        <div className="text-[var(--color-text-muted)] text-xs">{r.role}</div>
                        <div className="text-yellow-400 text-xs mt-0.5">★★★★★</div>
                      </div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium whitespace-nowrap ${badgeColors[r.badgeType]}`}>
                      {r.badge}
                    </span>
                  </div>

                  <blockquote className="text-[var(--color-text-secondary)] text-sm italic mb-4 flex-grow">
                    &ldquo;{r.quote}&rdquo;
                  </blockquote>

                  <div className="flex flex-wrap gap-2">
                    {r.metrics.map((m) => (
                      <span key={m} className="text-xs bg-white/5 text-[var(--color-text-muted)] px-2 py-1 rounded-md">
                        {m}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <p className="text-center text-[var(--color-text-muted)] text-sm mt-8">
            {t.reviewsPage.showing} {filtered.length} {t.reviewsPage.of} 1,847 {t.reviewsPage.reviews}
          </p>
        </div>
      </section>

      {/* Overall rating */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="glass rounded-2xl p-8 sm:p-12 border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center mb-10">
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-display font-bold text-white mb-4">{t.reviewsPage.overallRating}</h2>
                <div className="text-6xl font-display font-bold gradient-text">4.9</div>
                <div className="text-2xl text-yellow-400 mt-1">★★★★★</div>
                <p className="text-[var(--color-text-muted)] text-sm mt-1">{t.reviewsPage.basedOn}</p>
              </div>
              <div className="space-y-3">
                {ratingBars.map((rb) => (
                  <div key={rb.stars} className="flex items-center gap-3">
                    <span className="text-xs text-[var(--color-text-muted)] w-12">{rb.stars}</span>
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#0ea5e9] to-[#7c3aed] rounded-full"
                        style={{ width: `${rb.pct}%` }}
                      />
                    </div>
                    <span className="text-xs text-[var(--color-text-muted)] w-8">{rb.pct}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-display font-bold text-white mb-2">{t.reviewsPage.ratingTitle}</h3>
              <p className="text-[var(--color-text-secondary)] mb-6">{t.reviewsPage.ratingSubtitle}</p>
              <a
                href="https://t.me/+qjwWJz7aLR1hMDQ0"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0ea5e9] to-[#7c3aed] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.reviewsPage.startJourney}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
