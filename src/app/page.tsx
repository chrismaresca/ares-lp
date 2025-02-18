
// Sections
import Header from "@/sections/Header"
import Hero from "@/sections/Hero"
import LogoTicker from "@/sections/LogoTicker"
import Benefits from "@/sections/Benefits"
import Testimonials from "@/sections/Testimonials"
import CaseProcess from "@/sections/CaseProcess"
import FAQ from "@/sections/Faq"
import Footer from "@/sections/Footer"
import BottomCta from "@/sections/BottomCta"
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <div className="mt-16">
        <LogoTicker />
      </div>
      <Benefits />
      <Testimonials />
      <CaseProcess />
      <FAQ />
      <BottomCta />
      <Footer />
    </div>
  )
}

