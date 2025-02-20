"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"
import { bottomCTAConstants, CASE_PROCESS_CONSTANTS, CONTACT_US_CALL_LINK } from "@/constants/website"
import { MotionButtonWithCustomIcon } from "@/components/buttons/motion-button-with-icon"

function CaseProcessHeader() {
  return (
    <div className="mx-auto max-w-[800px] text-center space-y-8 py-16 intersect-once intersect:motion-preset-slide-up motion-delay-100 motion-duration-500 motion-ease-in-out">
      <p className="text-sm tracking-widest mb-6 text-muted-foreground font-medium uppercase">
        {CASE_PROCESS_CONSTANTS.badge}
      </p>
      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.4] sm:leading-[1.4]">
          {CASE_PROCESS_CONSTANTS.title}
        </h1>
        <p className="mx-auto max-w-[600px] text-base sm:text-lg text-muted-foreground leading-relaxed">
          {CASE_PROCESS_CONSTANTS.description}
        </p>
      </div>
      <div className="flex justify-center">
        <MotionButtonWithCustomIcon
          size="lg"
          textOptions={{ textOptions: [{ text: bottomCTAConstants.cta, href: CONTACT_US_CALL_LINK }], blank: true }}
          fromColor="bg-primary"
          toColor="bg-black"
          switchTextColor={false}
        />
      </div>
    </div>
  )
}

export default function CaseProcess() {
  const [activeStep, setActiveStep] = useState(-1)
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observers = stepsRef.current.map((step, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep((prev) => Math.max(prev, index))
          }
        },
        {
          threshold: 0.2,
          rootMargin: "0px 0px -50% 0px",
        },
      )

      if (step) {
        observer.observe(step)
      }

      return observer
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  useEffect(() => {
    if (progressRef.current) {
      const progress = ((activeStep + 1) / CASE_PROCESS_CONSTANTS.processSteps.length) * 100
      progressRef.current.style.height = `${progress}%`
    }
  }, [activeStep])

  return (
    <section className="relative section-spacing" id="process">
      <div className="container">
        <CaseProcessHeader />

        <div className="relative max-w-5xl mx-auto mt-16 sm:mt-32">
          {/* Process steps */}
          <div className="relative">
            {/* Center line container */}
            <div
              className="absolute left-4 sm:left-1/2 top-0 w-[1.8px] bg-border/30 sm:-translate-x-1/2"
              style={{
                height: `calc(100% - ${CASE_PROCESS_CONSTANTS.processSteps.length > 1 ? "5rem" : "0px"})`,
              }}
            >
              {/* Progress line */}
              <div
                ref={progressRef}
                className="absolute top-0 left-0 w-full bg-black transition-all duration-500 ease-in-out"
                style={{ height: "0%" }}
              />
            </div>

            {CASE_PROCESS_CONSTANTS.processSteps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) {
                    stepsRef.current[index] = el
                  }
                }}
                className={`relative flex items-start sm:items-center gap-6 sm:gap-8 mb-12 sm:mb-16 last:mb-0 ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Step number with circle */}
                <div
                  className={`absolute left-0 -translate-y-1 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-0 flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 rounded-full z-50
                  ${index <= activeStep ? "bg-black" : "bg-zinc-300"} 
                  text-primary-foreground text-sm sm:text-base font-semibold transition-colors duration-500 intersect-once intersect:motion-preset-slide-up motion-delay-[${
                    index + 1 * 100
                  }ms]`}
                >
                  {step.number}
                </div>

                {/* Content card */}
                <Card
                  className={`w-[calc(100%-3rem)] sm:w-[calc(50%-2rem)] p-4 sm:p-6 space-y-2 sm:space-y-3 ml-12 sm:ml-0 ${
                    index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
                  } ${index <= activeStep ? "border-black" : ""} transition-all duration-500 intersect-once intersect:motion-preset-slide-up motion-delay-[${
                    index + 1 * 200
                  }ms]`}
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

