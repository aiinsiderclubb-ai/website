"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-28 sm:pt-36 pb-20">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass border border-[var(--color-glass-border)] rounded-2xl p-8 sm:p-10">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-xs font-medium uppercase tracking-wider mb-6">
              Legal
            </span>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-[var(--color-text-primary)] mb-6">
              Privacy Policy
            </h1>
            <div className="prose-ai">
              <p>
                AI Insider respects your privacy. We collect only the information needed to respond to inquiries,
                process course applications, and improve the platform experience.
              </p>
              <h2>What we collect</h2>
              <ul>
                <li>Contact details you submit through forms or Telegram</li>
                <li>Basic analytics information such as page visits and interactions</li>
                <li>Communication history when you contact our team</li>
              </ul>
              <h2>How we use it</h2>
              <ul>
                <li>To respond to your requests and applications</li>
                <li>To provide course, mentorship, and B2B information</li>
                <li>To improve site performance and user experience</li>
              </ul>
              <h2>Data sharing</h2>
              <p>
                We do not sell your data. Information may be shared only with service providers required for delivery,
                analytics, payments, or communication, and only to the extent necessary.
              </p>
              <h2>Contact</h2>
              <p>
                For privacy-related questions, contact us via Telegram or email listed on the site.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
