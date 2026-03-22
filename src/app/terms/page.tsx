"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-28 sm:pt-36 pb-20">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass border border-[var(--color-glass-border)] rounded-2xl p-8 sm:p-10">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-[#a78bfa] text-xs font-medium uppercase tracking-wider mb-6">
              Legal
            </span>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-[var(--color-text-primary)] mb-6">
              Terms of Service
            </h1>
            <div className="prose-ai">
              <p>
                By using AI Insider, you agree to use the platform, community, and educational materials responsibly
                and in compliance with applicable laws.
              </p>
              <h2>Educational use</h2>
              <p>
                Course and mentorship materials are provided for educational purposes. Specific business outcomes,
                income levels, or client results are not guaranteed.
              </p>
              <h2>Payments and access</h2>
              <p>
                Paid products may include fixed-term or lifetime access depending on the offer. Refund terms are governed
                by the specific course or service description at the moment of purchase.
              </p>
              <h2>Acceptable use</h2>
              <ul>
                <li>Do not misuse the platform or attempt unauthorized access</li>
                <li>Do not redistribute paid course materials without permission</li>
                <li>Do not use provided tools or training for unlawful or harmful activity</li>
              </ul>
              <h2>Changes</h2>
              <p>
                We may update these terms as the platform evolves. Continued use of the site after updates means you
                accept the revised terms.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
