import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
import ProductShowcase from "@/components/ProductShowcase";
import InteractiveDemo from "@/components/InteractiveDemo";
import SolutionsSection from "@/components/SolutionsSection";
import IndustriesSection from "@/components/IndustriesSection";
import WhyDigiWire from "@/components/WhyDigiWire";
// import CaseStudies from "@/components/CaseStudies";
// import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Dark hero — has its own background: #0B0E14 */}
        <HeroSection />

        {/*
          CSS Gradient Bridge
          ─────────────────────────────────────────────────────────────────
          • Uses negative margin-top to pull it UP into the hero's bottom,
            so it visually overlaps the hero without adding empty space.
          • The gradient goes from the hero dark color (#0B0E14) to the
            page light color (#F8FAFC).
          • Sits above hero content (z-10) via position:relative.
          • No JS, no overlay, no grey band — just a seamless visual blend.
          ─────────────────────────────────────────────────────────────────
        */}


        {/* Light sections — all have their own opaque white backgrounds */}
        <SocialProof />
        <ProductShowcase />
        <InteractiveDemo />
        <SolutionsSection />
        <IndustriesSection />
        <WhyDigiWire />
        {/* <CaseStudies /> */}
        {/* <PricingSection /> */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
