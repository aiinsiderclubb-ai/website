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
import FlowThread from "@landing/components/FlowThread";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="relative">
        <FlowThread
          waypoints={[
            { y: 14, label: "Pipeline", color: "#c084fc" },
            { y: 32, label: "Programs", color: "#fb923c" },
            { y: 52, label: "Stack", color: "#67e8f9" },
            { y: 70, label: "Voices", color: "#f472b6" },
            { y: 88, label: "Join", color: "#fbbf24" },
          ]}
        />

        <Hero />
        <HowItWorks />
        <Courses />
        <TechStack />
        <Testimonials />
        <FAQ />
        <CommunityCTA />
      </main>
      <Footer />
    </>
  );
}
