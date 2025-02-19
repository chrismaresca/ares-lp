import Link from "next/link";
import { Button } from "@/components/ui/button";

// Constants
import { bottomCTAConstants, DEMO_CALL_LINK } from "@/constants/website";

export default function BottomCta() {
  return (
    <section className="bg-muted/30 flex items-center justify-center pb-16">
      <div className="container">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 flex items-center justify-center">
        <div className="mx-auto max-w-screen-sm text-center flex flex-col items-center">
          <h2 className="mb-8 text-4xl font-medium tracking-tight sm:text-5xl text-nowrap">{bottomCTAConstants.title}</h2>
          <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">{bottomCTAConstants.description}</p>
              <Button size="lg" className="h-12">
                <Link target="_blank" href={DEMO_CALL_LINK} className="flex items-center">
                  {bottomCTAConstants.cta}
                </Link>
              </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
