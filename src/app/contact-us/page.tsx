"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { CONTACT_US_CALL_LINK, contactUsConstants } from "@/constants/website";
import { MotionButton } from "@/components/buttons/motion-button";

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const copyToClipboard = (email: string) => {
    navigator.clipboard.writeText(email).then(() => {
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(null), 2000);
    });
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="ml-0 sm:ml-[5%] mt-0 sm:mt-[8%] max-w-4xl transform space-y-8 sm:space-y-12">
          <div className="space-y-4 motion-opacity-in-0 motion-blur-in-md motion-duration-[800ms] motion-delay-300 motion-ease-spring-smooth">
            <h2 className="text-lg sm:text-xl font-medium tracking-tight">
              <span className="text-zinc-900">{contactUsConstants.tag1}</span>
              <span className="text-zinc-500"> {contactUsConstants.tag2}</span>
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight text-zinc-900">{contactUsConstants.title}</h1>
          </div>

          <div className="sm:flex hidden flex-row gap-4 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md motion-duration-[800ms] motion-delay-700 motion-ease-spring-smooth">
            <MotionButton buttonText="Email Us" buttonHref="mailto:founders@areslegal.ai" variant="primary" />
            <MotionButton buttonText="Call Us" buttonHref={CONTACT_US_CALL_LINK} variant="secondary" />
          </div>

          <div className="flex sm:hidden flex-col sm:flex-row gap-4 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md motion-duration-[800ms] motion-delay-700 motion-ease-spring-smooth">
            <Button variant="outline" size="sm" onClick={() => copyToClipboard(contactUsConstants.emails[0])} className="font-mono text-xs w-full sm:w-auto justify-between">
              <span className="mr-2">{contactUsConstants.emails[0]}</span>
              {copiedEmail === contactUsConstants.emails[0] ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>

          <div className="hidden sm:block space-y-4 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md motion-duration-[800ms] motion-delay-[1200ms] motion-ease-spring-smooth">
            <p className="text-sm text-muted-foreground">{contactUsConstants.copyEmailSubtitle}</p>
            <div className="flex flex-col w-fit sm:flex-row gap-4">
              {contactUsConstants.emails.map((email, index) => (
                <Button key={index} variant="outline" size="sm" onClick={() => copyToClipboard(email)} className="font-mono text-sm w-full sm:w-auto justify-between">
                  <span className="mr-2">{email}</span>
                  {copiedEmail === email ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
