"use client";

// Shadcn UI
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Constants
import { FaqConstants } from "@/constants/website";

export default function FAQ() {
  return (
    <section className="container pt-40 sm:pt-56 intersect-once intersect:motion-preset-slide-up motion-delay-200 motion-duration-800 motion-ease-in-out" id="faq">
      <div className="mx-auto mb-24 max-w-3xl text-center">
        <h2 className="mb-8 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">{FaqConstants.sectionTitle}</h2>
        <p className="text-lg leading-relaxed text-muted-foreground">{FaqConstants.sectionDescription}</p>
      </div>
      <Accordion type="single" collapsible className="w-full max-w-5xl mx-auto">
        {FaqConstants.questions.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-muted py-4">
            <AccordionTrigger className="text-lg hover:no-underline [&[data-state=open]>div]:rotate-180">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground pt-4 text-lg">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
