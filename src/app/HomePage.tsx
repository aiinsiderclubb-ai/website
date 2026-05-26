"use client";

import Header from "@landing/components/Header";
import Hero from "@landing/components/Hero";
import HowItWorks from "@landing/components/HowItWorks";
import Courses from "@landing/components/Courses";
import TechStack from "@landing/components/TechStack";
import Testimonials from "@landing/components/Testimonials";
import FAQ from "@landing/components/FAQ";
import CommunityCTA from "@landing/components/CommunityCTA";
import Footer from "@landing/components/Footer";
import FlowBridge from "@landing/components/FlowBridge";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <FlowBridge variant="hero-how" ribbon />
        <HowItWorks />
        <Courses />
        <TechStack />
        <Testimonials />
        <FAQ />
        <FlowBridge variant="faq-community" ribbon />
        <CommunityCTA />
      </main>
      <Footer />
    </>
  );
}
