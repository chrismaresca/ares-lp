import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DEMO_BUTTON_TEXT,
  CONTACT_US_CALL_LINK,
  BENEFITS_CONSTANTS,
} from "@/constants/website";

const BenefitCard = ({ card, isLast }: { card: (typeof BENEFITS_CONSTANTS.cards)[0]; isLast: boolean }) => {
  const Icon = card.icon

  return (
    <div
      className={`px-6 py-10 sm:px-8 sm:py-12 ${!isLast ? "border-b border-gray-100 md:border-b-0 md:border-r" : ""}`}
    >
      <div className="space-y-4 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50/50">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="text-3xl font-semibold tracking-tight text-gray-900">{card.stat}</h3>
        <p className="text-[15px] font-medium text-gray-700 tracking-tight">{card.label}</p>
        <p className="text-sm text-gray-500 leading-relaxed">{card.description}</p>
      </div>
    </div>
  )
}

export default function Benefits() {
  return (
    <section
      className="container py-16 pb-12 sm:pt-32 md:pb-24 intersect-once intersect:motion-preset-slide-up motion-delay-200 motion-duration-800 motion-ease-in-out"
      id="features"
    >
      <div className="mx-auto max-w-[1000px] text-center space-y-8 py-16">
        <p className="text-sm tracking-widest mb-6 text-muted-foreground font-medium uppercase">
          {BENEFITS_CONSTANTS.badge}
        </p>
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl leading-[1.4] sm:leading-[1.4]">
            {BENEFITS_CONSTANTS.title.firstLine.beforeItalic}{" "}
            <span className="italic font-serif">{BENEFITS_CONSTANTS.title.firstLine.italic}</span>{" "}
            {BENEFITS_CONSTANTS.title.firstLine.afterItalic}
            <br className="hidden sm:block" /> {BENEFITS_CONSTANTS.title.secondLine.before}
          </h1>
          <p className="mx-auto max-w-[600px] text-lg text-muted-foreground leading-relaxed">
            {BENEFITS_CONSTANTS.description}
          </p>
        </div>
        <Button
          variant="link"
          size="lg"
          className="text-[17px] font-medium text-blue-600 hover:text-blue-700 tracking-tight group transition-all duration-300"
        >
          <Link href={CONTACT_US_CALL_LINK} className="flex items-center">
            {DEMO_BUTTON_TEXT}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
          </Link>
        </Button>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {BENEFITS_CONSTANTS.cards.map((card, i) => (
              <BenefitCard key={i} card={card} isLast={i === BENEFITS_CONSTANTS.cards.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

