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
    <section className="container section-spacing intersect-once intersect:motion-preset-slide-up motion-delay-200 motion-duration-800 motion-ease-in-out" id="testimonials">
      <div className="mb-32 max-w-[800px]">
        <p className="text-sm tracking-widest mb-6 text-muted-foreground font-medium uppercase">{testimonialsConstants.badge}</p>

        <h2 className="text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">
          {testimonialsConstants.title1}
          <br />
          {testimonialsConstants.title2}
        </h2>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonialsConstants.testimonials.map((testimonial, index) => (
          <Card key={index} className={`md:h-[700px] rounded-2xl border border-muted/20 bg-gradient-to-b from-muted/40 to-background p-2 shadow-md hover:shadow-lg transition-shadow ${index === 2 ? "block md:hidden  lg:block" : ""}`}>
            <CardContent className="relative flex h-full flex-col p-10">
              {/* Avatar */}
              <div className="mb-8">
                <Image src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} width={64} height={64} className="rounded-full" />
              </div>
              {/* Quote – reserve space for footer by adding bottom margin */}
              <blockquote className="mb-[80px] flex-grow overflow-hidden text-[1.1rem] leading-relaxed">&quot;{testimonial.quote}&quot;</blockquote>
              {/* Footer fixed at the bottom */}
              <footer className="absolute bottom-10 left-10 right-10">
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
