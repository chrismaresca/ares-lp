"use client";

import { Card } from "@/components/ui/card";

// React
import { useEffect, useRef, useState } from "react";

// Constants
import { bottomCTAConstants, CASE_PROCESS_CONSTANTS, CONTACT_US_CALL_LINK } from "@/constants/website";
import { MotionButtonWithCustomIcon } from "@/components/buttons/motion-button-with-icon";

function CaseProcessHeader() {
  return (
    <div className="mx-auto max-w-[800px] text-center space-y-8 py-16 intersect-once intersect:motion-preset-slide-up motion-delay-100 motion-duration-500 motion-ease-in-out">
      <p className="text-sm tracking-widest mb-6 text-muted-foreground font-medium uppercase">{CASE_PROCESS_CONSTANTS.badge}</p>
      <div className="space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.4] sm:leading-[1.4]">{CASE_PROCESS_CONSTANTS.title}</h1>
        <p className="mx-auto max-w-[600px] text-lg text-muted-foreground leading-relaxed">
          {CASE_PROCESS_CONSTANTS.description}
        </p>
      </div>
      <div className="flex justify-center">
        <MotionButtonWithCustomIcon size="lg" textOptions={{ textOptions: [{ text: bottomCTAConstants.cta, href: CONTACT_US_CALL_LINK }], blank: true }} fromColor="bg-primary" toColor="bg-black" switchTextColor={false} />
      </div>
    </div>
  );
}

export default function CaseProcess() {
  // Start with -1 so that no step is triggered initially
  const [activeStep, setActiveStep] = useState(-1);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers = stepsRef.current.map((step, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Only update if this step is further than any previously triggered step
            setActiveStep((prev) => Math.max(prev, index));
          }
        },
        {
          threshold: 0.2,
          rootMargin: "0px 0px -50% 0px",
        }
      );

      if (step) {
        observer.observe(step);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  useEffect(() => {
    if (progressRef.current) {
      // Calculate progress based on the number of steps triggered.
      // activeStep starts at -1, so until the first step is triggered, progress will be 0.
      const progress = ((activeStep + 1) / CASE_PROCESS_CONSTANTS.processSteps.length) * 100;
      progressRef.current.style.height = `${progress}%`;
    }
  }, [activeStep]);

  return (
    <section className="relative section-spacing" id="process">
      <div className="container">
        <CaseProcessHeader />

        <div className="relative max-w-5xl mx-auto mt-32">
          {/* Center line container */}
          <div className="absolute left-1/2 -top-28 -bottom-[-80px] w-[2.5px] bg-border/30 -translate-x-1/2">
            {/* Progress line */}
            <div
              ref={progressRef}
              className="absolute top-0 left-0 w-full bg-black transition-all duration-500 ease-in-out"
              style={{ height: "0%" }}
            />
          </div>

          {/* Process steps */}
          <div className="relative">
            {CASE_PROCESS_CONSTANTS.processSteps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) {
                    stepsRef.current[index] = el;
                  }
                }}
                className={`relative flex items-center gap-8 mb-16 last:mb-0 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Step number with circle */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full 
                  ${index <= activeStep ? "bg-black" : "bg-black/40"} 
                  text-primary-foreground font-semibold z-10 transition-colors duration-500 intersect-once intersect:motion-preset-slide-up motion-delay-[${index +
                    1 * 100}ms]`}
                >
                  {step.number} 
                </div>

                {/* Content card */}
                <Card
                  className={`w-[calc(50%-2rem)] p-6 space-y-3 ${
                    index % 2 === 0 ? "mr-auto" : "ml-auto"
                  } ${index <= activeStep ? "border-black" : ""} transition-all duration-500 intersect-once intersect:motion-preset-slide-up motion-delay-[${index +
                    1 * 200}ms]`}
                >
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
