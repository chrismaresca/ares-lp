import Link from "next/link";

// Shadcn UI
import { NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";

import { SOLUTIONS } from "@/constants/website";

export function SolutionsDropdown() {
  return (
    <NavigationMenuContent>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
        {SOLUTIONS.map((solution) => (
          <li key={solution.title}>
            <NavigationMenuLink asChild>
              <Link href={solution.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                <div className="text-sm font-medium leading-none">{solution.title}</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{solution.description}</p>
              </Link>
            </NavigationMenuLink>
          </li>
        ))}
      </ul>
    </NavigationMenuContent>
  );
}
