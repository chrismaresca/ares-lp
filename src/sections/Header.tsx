// Shadcn UI
import { Button } from "@/components/ui/button";

// Components
import Logo from "@/components/header/logo";
import MainNav from "@/components/header/main-nav";

// Constants
import { CONTACT_US_CALL_LINK, DEMO_BUTTON_TEXT } from "@/constants/website";

// Components
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Logo */}
          <Logo />
          {/* End of Logo */}

          {/* Main Navigation */}
          <MainNav />
          {/* End of Main Navigation */}
        </div>
        <div className="flex items-center gap-4">
          {/* Sign in Button */}
          <Link href="/contact-us">
            <Button variant="ghost" className="hidden sm:flex">
              Contact Us
            </Button>
          </Link>
          {/* End of Sign in Button */}

          {/* Schedule a demo Button */}
          <Button>
            <Link target="_blank" href={CONTACT_US_CALL_LINK} className="flex items-center">
              {DEMO_BUTTON_TEXT}
            </Link>
          </Button>
          {/* End of Schedule a demo Button */}
        </div>
      </div>
    </header>
  );
}
