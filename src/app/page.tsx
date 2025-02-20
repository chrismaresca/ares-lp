// Sections
import Hero from "@/sections/Hero";
import Benefits from "@/sections/Benefits";
// import Testimonials from "@/sections/Testimonials";
import CaseProcess from "@/sections/CaseProcess";
import FAQ from "@/sections/Faq";
import BottomCta from "@/sections/BottomCta";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Benefits />
      {/* <Testimonials /> */}
      <CaseProcess />
      <FAQ />
      <BottomCta />
    </div>
  );
}
