import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

// Constants
import { footerConstants } from "@/constants/website";

// Shadcn
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-inherit pt-12 sm:pt-24">
      <div className="container flex flex-col items-center justify-between gap-6 py-8 md:h-24 md:flex-row md:py-0">
        <p className="text-center text-sm text-muted-foreground md:text-left">{footerConstants.copyright}</p>

        <div className="flex items-center gap-3">
            <Button variant="ghost" className="mt-0.5">
              <Link href="/contact-us" className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Contact Us</span>
              </Link>
            </Button>
          <div className="flex items-center gap-6">
            <button className="p-0 focus:outline-none">
              <Link href="https://www.linkedin.com/company/ares-legal-ai/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
