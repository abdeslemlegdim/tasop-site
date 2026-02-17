import AboutSection from "@/components/sections/AboutSection";
import BusinessInquirySection from "@/components/sections/BusinessInquirySection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SiteFooter from "@/components/sections/SiteFooter";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WorkflowSection from "@/components/sections/WorkflowSection";
import StickyNav from "@/components/ui/StickyNav";

export default function Home() {
  return (
    <main className="relative overflow-hidden premium-bg">
      {/* Sticky navigation */}
      <StickyNav />

      {/* Subtle grid pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="relative">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <WorkflowSection />
        <BusinessInquirySection />
        <ContactSection />
        <SiteFooter />
      </div>
    </main>
  );
}
