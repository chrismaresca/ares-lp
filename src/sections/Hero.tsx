import { Button } from "@/components/ui/button";

// Constants
import { heroSection } from "@/constants/website";

// Shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Components
import Video from "@/components/demo";

// Constants
import { DEMO_CALL_LINK } from "@/constants/website";

// Download Chronology
import DownloadChronology from "@/components/download-chronology";
import { MotionButtonWithCustomIcon } from "@/components/buttons/motion-button-with-icon";

export default function Hero() {
  return (
    <div className="relative overflow-x-hidden" id="hero">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-primary/10 to-transparent blur-[100px]" />
      <section className="container relative pt-24 md:pt-32">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6 motion-opacity-in-0 motion-blur-in-md motion-duration-[800ms] motion-delay-300 motion-ease-spring-smooth">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">{heroSection.title}</h1>
              <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl">{heroSection.description}</p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md motion-duration-[800ms] motion-delay-700 motion-ease-spring-smooth">
 
              <div className="block">
                <MotionButtonWithCustomIcon size="lg" textOptions={{ textOptions: [{ text: heroSection.mainCTA, href: DEMO_CALL_LINK }], blank: true }} fromColor="bg-primary" toColor="bg-black" switchTextColor={false} />
              </div>
              <Button size="lg" variant="outline">
                <DownloadChronology text={heroSection.secondaryCTA} className="flex items-center" iconClassName="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm motion-opacity-in-0 motion-blur-in-md motion-duration-[800ms] motion-delay-[1000ms] motion-ease-spring-smooth">
              <div className="flex -space-x-1.5">
                {[...Array(4)].map((_, i) => (
                  <Avatar key={i} className="h-8 w-8">
                    <AvatarImage src={heroSection.avatarImages[i]} alt={`User ${i + 1}`} className="object-cover" />
                    <AvatarFallback className="bg-gradient-to-br from-neutral-200 to-neutral-300 text-xs">U{i + 1}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="text-muted-foreground">{heroSection.trustBadgeText}</div>
            </div>
          </div>

          <div className="motion-opacity-in-0 motion-blur-in-md motion-duration-[800ms] motion-delay-300 motion-ease-spring-smooth">
            <Video />
          </div>
        </div>
      </section>
    </div>
  );
}
