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
import HomeFlowBridge from "@landing/components/HomeFlowBridge";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden">
        <Hero />
        <HomeFlowBridge intensity="strong" asset="stream" />
        <HowItWorks />
        <HomeFlowBridge flip asset="arc" />
        <Courses />
        <HomeFlowBridge intensity="strong" asset="wave" />
        <TechStack />
        <HomeFlowBridge flip asset="stream" />
        <Testimonials />
        <HomeFlowBridge asset="arc" />
        <FAQ />
        <HomeFlowBridge flip intensity="strong" asset="wave" />
        <CommunityCTA />
      </main>
      <Footer />
    </>
  );
}
