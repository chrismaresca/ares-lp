// Next
import Image from "next/image";

// Fonts
import { Caveat } from "next/font/google";

// Constants
import { testimonialsConstants } from "@/constants/website";

// Shadcn UI
import { Card, CardContent } from "@/components/ui/card";

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
});

export default function Testimonials() {
  return (
    <section className="container py-48 sm:py-56">
      <div className="mb-32 max-w-[800px]">
        <p className="mb-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">{testimonialsConstants.badge}</p>
        <h2 className="text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">
          {testimonialsConstants.title1}
          <br />
          {testimonialsConstants.title2}
        </h2>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonialsConstants.testimonials.map((testimonial, index) => (
          <Card key={index} className="h-[600px] rounded-2xl border border-muted/20 bg-gradient-to-b from-muted/40 to-background p-2 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="flex h-full flex-col p-10">
              <div className="mb-8">
                <Image src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} width={64} height={64} className="rounded-full" />
              </div>
              <blockquote className="mb-8 flex-grow overflow-y-auto text-lg leading-relaxed">&quot;{testimonial.quote}&quot;</blockquote>
              <footer className="mt-auto">
                <div className={`${caveat.className} mb-1 text-2xl`}>{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.title} at {testimonial.company}
                </div>
              </footer>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
