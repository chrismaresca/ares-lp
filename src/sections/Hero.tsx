import { Button } from "@/components/ui/button";

// Constants
import { heroSection } from "@/constants/website";

// Shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Components
import Video from "@/components/demo";

// Constants
import { DEMO_CALL_LINK } from "@/constants/website";

// Components
import Link from "next/link";

// Download Chronology
import DownloadChronology from "@/components/download-chronology";

export default function Hero() {
  return (
    <div className="relative overflow-x-hidden" id="hero">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-primary/10 to-transparent blur-[100px]" />
      <section className="container relative pt-24 md:pt-32">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">{heroSection.title}</h1>
              <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl">{heroSection.description}</p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button size="lg" className="h-12">
                <Link target="_blank" href={DEMO_CALL_LINK} className="flex items-center">
                  {heroSection.mainCTA}
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12">
                <DownloadChronology text={heroSection.secondaryCTA} className="flex items-center" iconClassName="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex -space-x-1.5">
                {[...Array(4)].map((_, i) => (
                  <Avatar key={i} className="h-8 w-8">
                    <AvatarImage 
                      src={heroSection.avatarImages[i]} 
                      alt={`User ${i + 1}`}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-gradient-to-br from-neutral-200 to-neutral-300 text-xs">
                      U{i + 1}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="text-muted-foreground">{heroSection.trustBadgeText}</div>
            </div>
          </div>
          {/* <div className="relative mt-8 lg:mt-0">
            <div className="absolute -right-16 top-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-background/50 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm">
              <div className="flex h-full items-center justify-center bg-muted">
                <svg className="h-16 w-16 text-muted-foreground" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </div>
          </div> */}

          <Video />
        </div>
      </section>
    </div>
  );
}
