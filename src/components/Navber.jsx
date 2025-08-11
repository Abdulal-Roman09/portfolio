import Image from "next/image";
import logo from "../../public/logo.png";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const navigationLinks = [
  { href: "#", label: "Home", active: true },
  { href: "/projects", label: "Projects" },
  { href: "#", label: "Pricing" },
  { href: "#", label: "About" },
];

export default function Navber() {
  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                aria-label="Toggle menu"
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  width={16}
                  height={16}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 5h16" />
                  <path d="M4 12h16" />
                  <path d="M4 19h16" />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      <NavigationMenuLink
                        href={link.href}
                        className={`py-1.5 ${
                          link.active
                            ? "text-primary"
                            : "text-muted-foreground hover:text-primary"
                        }`}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          {/* Logo */}
          <a href="#" className="text-primary hover:text-primary/90">
            <Image src={logo} alt="Logo" width={24} height={24} />
          </a>
        </div>

        {/* Center items */}
        <div className="max-md:hidden">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {navigationLinks.map((link, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    href={link.href}
                    className={`py-1.5 font-medium ${
                      link.active
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="text-sm">
            <a href="#">Download CV</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
