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
import SectionFlowBridge from "@landing/components/SectionFlowBridge";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <SectionFlowBridge variant="arc" align="right" />
        <HowItWorks />
        <SectionFlowBridge variant="wave" align="left" flip />
        <Courses />
        <SectionFlowBridge variant="stream" align="center" />
        <TechStack />
        <SectionFlowBridge variant="knot" align="right" flip />
        <Testimonials />
        <SectionFlowBridge variant="wave" align="left" />
        <FAQ />
        <SectionFlowBridge variant="arc" align="center" flip overlap="top" />
        <CommunityCTA />
      </main>
      <Footer />
    </>
  );
}
