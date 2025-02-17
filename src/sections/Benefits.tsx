// TODO: Fix

// Shadcn UI
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Icons
import { Download } from "lucide-react";

// Constants
const BENEFITS_CONSTANTS = {
  badge: "Meet Ares",
  title: "Made for Modern Medical Chronologies",
  description: "MedChron is created by a founding team with experience in medical records and legal tech. Committed to building the best tool for personal injury law firms.",
  downloadText: "Download Example Medical Chronology",
  cards: [
    {
      title: "Identification of Medical Records",
      type: "grid",
      items: Array(12).fill(null)
    },
    {
      title: "AI-Powered Analysis",
      type: "list",
      items: Array(4).fill(null)
    },
    {
      title: "Dynamic Medical Insights",
      type: "tags",
      items: [
        { text: "Treatment Timeline", variant: "primary" },
        { text: "Injury Analysis", variant: "muted" },
        { text: "Medical Expenses", variant: "primary" },
        { text: "Recovery Progress", variant: "muted" },
        { text: "Expert Reports", variant: "primary" },
        { text: "Patient History", variant: "muted" },
      ]
    }
  ]
};

// Components
const GridItem = () => (
  <div className="group flex h-14 w-14 items-center justify-center rounded-xl bg-white/40 p-2 shadow-sm transition-colors hover:bg-white/60 dark:bg-white/5 dark:hover:bg-white/10">
    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 shadow-sm transition-transform group-hover:scale-105 dark:from-gray-800 dark:to-gray-700" />
  </div>
);

const ListItem = () => (
  <div className="group flex items-center gap-3 rounded-xl border bg-white/40 p-4 shadow-sm transition-colors hover:bg-white/60 dark:bg-white/5 dark:hover:bg-white/10">
    <div className="h-8 w-8 rounded-full bg-primary/10" />
    <div className="h-4 w-full rounded-md bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800" />
  </div>
);

const Tag = ({ text, variant }: { text: string; variant: string }) => (
  <span className={`inline-flex rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${variant === "primary" ? "bg-primary/10 text-primary hover:bg-primary/20" : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"}`}>
    {text}
  </span>
);

const BenefitCard = ({ card }: { card: typeof BENEFITS_CONSTANTS.cards[0] }) => (
  <Card className="relative min-h-[480px] overflow-hidden border-none bg-gradient-to-b from-white to-gray-50/50 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_4px_32px_-1px_rgba(0,0,0,0.12)] dark:from-gray-900 dark:to-gray-800/50">
    <CardHeader className="pb-8">
      <CardTitle className="text-2xl font-semibold tracking-tight">{card.title}</CardTitle>
    </CardHeader>
    <CardContent>
      {card.type === "grid" && (
        <div className="mt-6 grid grid-cols-4 gap-4">
          {card.items.map((_, i) => <GridItem key={i} />)}
        </div>
      )}
      {card.type === "list" && (
        <div className="mt-6 space-y-4">
          {card.items.map((_, i) => <ListItem key={i} />)}
        </div>
      )}
      {card.type === "tags" && (
        <div className="mt-6 flex flex-wrap gap-2">
          {card.items.map((tag, i) => <Tag key={i} text={tag.text} variant={tag.variant} />)}
        </div>
      )}
    </CardContent>
  </Card>
);

export default function Benefits() {
  return (
    <section className="container py-32 sm:py-40">
      <div className="mx-auto mb-24 max-w-[800px] text-center">
        <Badge variant="secondary" className="mb-8">
          {BENEFITS_CONSTANTS.badge}
        </Badge>
        <h2 className="mb-8 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">{BENEFITS_CONSTANTS.title}</h2>
        <p className="mb-10 text-lg leading-relaxed text-muted-foreground">{BENEFITS_CONSTANTS.description}</p>
        <Button variant="link" size="lg" className="text-lg">
          {BENEFITS_CONSTANTS.downloadText}
          <Download className="ml-2 h-5 w-5" />
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {BENEFITS_CONSTANTS.cards.map((card, i) => (
          <BenefitCard key={i} card={card} />
        ))}
      </div>
    </section>
  );
}
