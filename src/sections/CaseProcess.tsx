"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Constants
import { caseProcessConstants } from "@/constants/website";

export default function CaseProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((section, index) => {
      if (!section) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep(index);
          }
        },
        {
          threshold: 0.5,
        }
      );

      observer.observe(section);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const scrollToSection = (index: number) => {
    const step = caseProcessConstants.processSteps[index];
    if (!step.comingSoon) {
      sectionRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <section className="relative bg-muted/30">
      <div className="container py-24 md:py-32">
        {/* Section Header */}
        <div className="mx-auto mb-24 max-w-[800px] text-center">
          <Badge variant="secondary" className="mb-8">
            Meet Ares
          </Badge>
          <h2 className="mb-8 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">{caseProcessConstants.title}</h2>
          <p className="mb-10 text-lg leading-relaxed text-muted-foreground">{caseProcessConstants.description}</p>
          <Button size="lg" className="text-lg">
            {caseProcessConstants.cta}
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="flex flex-col md:flex-row md:gap-8 lg:gap-12">
          {/* Fixed Navigation */}
          <div className="hidden md:sticky md:block md:top-24 md:h-[calc(100vh-6rem)] md:w-64 lg:w-72 space-y-1 mb-12 md:mb-0">
            <h2 className="text-2xl font-semibold mb-6">Case Process</h2>
            <div className="space-y-6">
              {caseProcessConstants.processSteps.map((step, index) => (
                <div key={index} className="flex items-center space-x-3">
                  {activeStep === index && !step.comingSoon && <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0" />}
                  <button 
                    onClick={() => scrollToSection(index)} 
                    className={cn(
                      "text-left font-medium transition-opacity duration-200",
                      step.comingSoon ? "opacity-25 cursor-default" : activeStep === index ? "opacity-100" : index < activeStep ? "opacity-40" : "opacity-25"
                    )}
                  >
                    {step.title}
                  </button>
                  {step.comingSoon && <Badge variant="secondary" className="ml-1 text-[10px]">Coming Soon</Badge>}
                </div>
              ))}
            </div>
          </div>

          {/* Content Sections */}
          <div className="flex-1 space-y-8 md:space-y-0">
            {caseProcessConstants.processSteps.map((step, index) => !step.comingSoon && (
              <div
                key={index}
                ref={(el) => {
                  if (el) {
                    sectionRefs.current[index] = el;
                  }
                }}
                className="min-h-screen flex items-center"
              >
                <Card className="w-full min-h-[calc(100vh-8rem)] p-8 md:p-12 flex flex-col justify-center">
                  <div className="grid gap-8 h-full md:grid-cols-2 items-center">
                    <div className="space-y-6">
                      <h3 className="text-3xl font-semibold tracking-tight lg:text-4xl">{step.title}</h3>
                      <p className="text-lg text-muted-foreground">{step.description}</p>
                      <Button variant="default">Learn more</Button>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="text-center">
                        <div className="relative inline-flex items-center justify-center">
                          <Progress value={step.progress} className="h-32 w-32 rounded-full [&>div]:rounded-full" />
                          <span className="absolute text-4xl font-bold">{step.progress}%</span>
                        </div>
                        <p className="mt-4 text-sm text-muted-foreground">{step.progressText}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
