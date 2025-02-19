"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Constants
import { CASE_PROCESS_CONSTANTS } from "@/constants/website";

function CaseProcessHeader() {
  return (
    <div className="mx-auto max-w-[800px] text-center space-y-8 py-16 intersect-once intersect:motion-preset-slide-up motion-delay-0 motion-duration-600 motion-ease-in-out">
      <p className="text-sm tracking-widest mb-6 text-muted-foreground font-medium uppercase">{CASE_PROCESS_CONSTANTS.badge}</p>
      <div className="space-y-6">
        <h1 className="text-4xl sm:text-5xl leading-[1.4] sm:leading-[1.4]">{CASE_PROCESS_CONSTANTS.title}</h1>
        <p className="mx-auto max-w-[600px] text-lg text-muted-foreground leading-relaxed">{CASE_PROCESS_CONSTANTS.description}</p>
      </div>
      <Link href="/contact-us" className="flex justify-center">
        <Button variant="default" size="lg" className="text-[17px] bg-primary hover:bg-black font-medium tracking-tight group transition-all duration-300">
          <div className="flex items-center">
            <span className="mr-4 group-hover:scale-[1.02] transition-all duration-300 ease-in-out">{CASE_PROCESS_CONSTANTS.cta}</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
          </div>
        </Button>
      </Link>
    </div>
  );
}

export default function CaseProcess() {
  // Find the index of the last completed step
  const activeIndex = CASE_PROCESS_CONSTANTS.processSteps.findLastIndex((step) => step.completed);

  return (
    <section className="relative " id="solutions">
      <div className="container py-24 md:py-32">
        <CaseProcessHeader />

        <div className="max-w-3xl mx-auto mt-16">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-0 bottom-0 w-[1px] bg-black/20" />

            {/* Timeline items */}
            {CASE_PROCESS_CONSTANTS.processSteps.map((step, index) => (
              <div key={index} className={`relative pl-10 pb-12 last:pb-0 intersect-once intersect:motion-preset-slide-up motion-delay-[${(index + 1) * 100}ms] motion-duration-800 motion-ease-in-out`}>
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 w-[15px] h-[15px] rounded-full 
                    ${step.completed ? "bg-black" : index === activeIndex + 1 ? "bg-black animate-pulse" : "bg-black/20"}`}
                />

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <h3 className={`text-xl font-semibold ${step.comingSoon ? "text-muted-foreground" : ""}`}>{step.title}</h3>
                    {/* {step.comingSoon && <span className="text-xs bg-muted px-2 py-1 rounded-full">Coming Soon</span>} */}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  <div className="flex ">
                    <Link href={step.actionHref ?? ""} target={step.actionTarget ?? "_self"} className={`${step.actionActive ? "opacity-100 pointer-events-auto" : "opacity-50 pointer-events-none"}`} aria-disabled={!step.actionActive} tabIndex={step.actionActive ? 0 : -1}>
                      <Button variant={step.comingSoon ? "outline" : "default"} size="sm" className="flex items-center gap-2" disabled={!step.actionActive}>
                        {step.action}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
