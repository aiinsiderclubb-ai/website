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
import SectionBridge from "@landing/components/SectionBridge";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionBridge variant="violet-orange" curve="right" label="Pipeline" />
        <HowItWorks />
        <SectionBridge variant="orange-violet" curve="left" label="Curriculum" />
        <Courses />
        <SectionBridge variant="violet-cyan" curve="right" label="Stack" />
        <TechStack />
        <SectionBridge variant="cyan-violet" curve="left" label="Voices" />
        <Testimonials />
        <SectionBridge variant="violet" curve="straight" label="FAQ" />
        <FAQ />
        <SectionBridge variant="violet-orange" curve="right" label="Join" />
        <CommunityCTA />
      </main>
      <Footer />
    </>
  );
}
