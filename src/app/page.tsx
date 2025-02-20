
// Sections
import Hero from "@/sections/Hero"
import LogoTicker from "@/sections/LogoTicker"
import Benefits from "@/sections/Benefits"
import Testimonials from "@/sections/Testimonials"
import CaseProcess from "@/sections/CaseProcess"
import FAQ from "@/sections/Faq"
import BottomCta from "@/sections/BottomCta"


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      {/* <div className="mt-16 motion-opacity-in-0 motion-blur-in-md motion-duration-[800ms] motion-delay-[1200ms] motion-ease-in-out">
        <LogoTicker />
      </div> */}
      <Benefits />
      <Testimonials />
      <CaseProcess />
      <FAQ />
      <BottomCta />
    </div>
  )
}

