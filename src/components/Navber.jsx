// Navber.jsx

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
import { usePathname } from "next/navigation";
import Link from "next/link";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "ContactMe" },
];

export default function Navber() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 md:px-6">
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 6h14" />
                  <path d="M3 12h14" />
                  <path d="M3 18h14" />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <NavigationMenuItem key={link.href} className="w-full">
                        <NavigationMenuLink
                          href={link.href}
                          className={`py-1.5 block w-full text-left ${
                            isActive
                              ? "text-primary font-semibold"
                              : "text-muted-foreground hover:text-primary"
                          }`}
                        >
                          {link.label}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          {/* Logo */}
         
    <div className="pr-2">
       <Link href="/"
     className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
       <span className="text-white mr-1 pl-2">Roman</span>
       <span className="w-12 h-8 rounded bg-white text-blac flex items-center pl-1 ">.dev</span></Link>
    </div>
       
        </div>

        {/* Center items */}
        <div className="max-md:hidden">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {navigationLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink
                      href={link.href}
                      className={`py-1.5 font-medium rounded px-4 ${
                        isActive
                          ? "bg-black text-white"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Button asChild  className="text-sm" >
            <a href="https://drive.google.com/file/d/15dNOQzoQ0GUTefFNDuC2R8Kl2r97yAqK/view?usp=sharing">Download CV</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
