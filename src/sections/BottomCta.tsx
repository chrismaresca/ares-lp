import Link from "next/link";
import { Button } from "@/components/ui/button";

// Constants
import { bottomCTAConstants } from "@/constants/website";

export default function BottomCta() {
  return (
    <section className="bg-muted/30 flex items-center justify-center pb-16">
      <div className="container">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 flex items-center justify-center">
        <div className="mx-auto max-w-screen-sm text-center flex flex-col items-center">
          <h2 className="mb-8 text-4xl font-medium tracking-tight sm:text-5xl text-nowrap">{bottomCTAConstants.title}</h2>
          <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">{bottomCTAConstants.description}</p>
          <Button variant="default">
            <Link href="#hero" className="flex items-center">
              <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              {bottomCTAConstants.cta2}
            </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
