// Next
import Link from "next/link";

// Shadcn UI
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuLink } from "@/components/ui/navigation-menu";

// Constants
import { NAVIGATION_ITEMS } from "@/constants/website";

// Components
import { SolutionsDropdown } from "@/components/header/solutions-dropdown";

export default function MainNav() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        {NAVIGATION_ITEMS.map((item) => (
          <NavigationMenuItem key={item.title}>
            {item.dropdown ? (
              <>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <SolutionsDropdown />
              </>
            ) : (
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">{item.title}</NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
