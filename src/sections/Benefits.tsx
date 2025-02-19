import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Maximize2, Search } from "lucide-react";
import Link from "next/link";
import { DEMO_CALL_LINK } from "@/constants/website";


const BENEFITS_CONSTANTS = {
  badge: "Benefits",
  title: "Why Ares?",
  description: "Ares is a tool that helps you save time and money on your legal cases.",
  mainCTA: "Schedule a call",
  cards: [
    {
      icon: Clock,
      stat: "15+",
      label: "Hours Saved Per Case",
    },
    {
      icon: Search,
      stat: "100%",
      label: "Case Coverage",
    },
    {
      icon: Maximize2,
      stat: "2x",
      label: "Caseload Capacity",
    },
  ],
};

const BenefitCard = ({ card, isLast }: { card: (typeof BENEFITS_CONSTANTS.cards)[0]; isLast: boolean }) => {
  const Icon = card.icon;

  return (
    <div className={`px-6 py-10 sm:px-8 sm:py-12 ${!isLast ? "border-r border-gray-100 md:border-r md:border-b-0 border-b" : ""}`}>
      <div className="space-y-4 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50/50">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="text-3xl font-semibold tracking-tight text-gray-900">{card.stat}</h3>
        <p className="text-[15px] font-medium text-gray-500 tracking-tight">{card.label}</p>
      </div>
    </div>
  );
};

export default function Benefits() {
  return (
    <section className="container py-16 pb-12 sm:pt-32 md:pb-24" id="benefits">
      <div className="mx-auto mb-16 sm:mb-20 lg:mb-24 max-w-[800px] text-center space-y-8">
        <Badge variant="secondary" className="px-3.5 py-1.5 text-sm font-medium tracking-wide">
          {BENEFITS_CONSTANTS.badge}
        </Badge>
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">{BENEFITS_CONSTANTS.title}</h2>
          <p className="mx-auto max-w-[600px] text-[17px] leading-relaxed text-gray-500">{BENEFITS_CONSTANTS.description}</p>
        </div>
        <Button size="lg" className="h-12">
          <Link
            target="_blank"
            href={DEMO_CALL_LINK}
            className="flex items-center"
          >
            {BENEFITS_CONSTANTS.mainCTA}
          </Link>
        </Button>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {BENEFITS_CONSTANTS.cards.map((card, i) => (
              <BenefitCard key={i} card={card} isLast={i === BENEFITS_CONSTANTS.cards.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
