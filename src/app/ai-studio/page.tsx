import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIStudioPage from "./AIStudioPage";

export const metadata: Metadata = {
  title: "AI Контент-Студія",
  description:
    "AI-інфлюенсери, відеопродакшн, UGC-реклама та креативи для вашого бізнесу. Контент 24/7 без зйомок, дизайнерів та команди.",
  keywords: [
    "AI інфлюенсери",
    "AI відео продакшн",
    "AI UGC реклама",
    "AI контент студія",
    "virtual influencer",
    "AI маркетинг",
    "автоматизація контенту",
    "AI креативи",
  ],
  openGraph: {
    title: "AI Контент-Студія | AI Insider",
    description:
      "AI-інфлюенсери, відеопродакшн, UGC-реклама та креативи. Контент 24/7 без зйомок і команди.",
  },
};

export default function AIStudio() {
  return (
    <>
      <Header />
      <main>
        <AIStudioPage />
      </main>
      <Footer />
    </>
  );
}
