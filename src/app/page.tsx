import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import AboutSection from "@/components/AboutSection";
import ServiceSection from "@/components/ServiceSection";
import PricingSection from "@/components/PricingSection";
import GallerySection from "@/components/GallerySection";
import AppointmentSection from "@/components/AppointmentSection";
import TeamSection from "@/components/TeamSection";
import CtaBanner from "@/components/CtaBanner";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#111111] text-white overflow-hidden">
      <Header />
      <Hero />
      <WhatWeDo />
      <AboutSection />
      <ServiceSection />
      <PricingSection />
      <GallerySection />
      <AppointmentSection />
      <TeamSection />
      <CtaBanner />
      <TestimonialsSection />
      <Footer />
      <FloatingChat />
    </main>
  );
}
