"use client";

// Shadcn UI
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Constants
import { FaqConstants } from "@/constants/website";

export default function FAQ() {
  return (
    <section className="container py-24 md:py-32">
      <div className="mx-auto mb-24 max-w-3xl text-center">
        <h2 className="mb-8 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">{FaqConstants.sectionTitle}</h2>
        <p className="text-lg leading-relaxed text-muted-foreground">{FaqConstants.sectionDescription}</p>
      </div>
      <Accordion type="single" collapsible className="w-full max-w-5xl mx-auto">
        {FaqConstants.questions.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-muted py-4">
            <AccordionTrigger className="text-base hover:no-underline [&[data-state=open]>div]:rotate-180">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground pt-4">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
