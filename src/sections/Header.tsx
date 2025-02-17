// Lucide
import { ChevronRight } from "lucide-react";

// Shadcn UI
import { Button } from "@/components/ui/button";

// Components
import Logo from "@/components/header/logo";
import MainNav from "@/components/header/main-nav";

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
          <Button variant="ghost" className="hidden lg:flex">
            Sign in
          </Button>
          {/* End of Sign in Button */}

          {/* Schedule a demo Button */}
          <Button>
            Schedule a demo
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          {/* End of Schedule a demo Button */}
        </div>
      </div>
    </header>
  );
}
