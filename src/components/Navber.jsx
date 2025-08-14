"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { Menu, Home, User, Code, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";

const navigationLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/projects", label: "Projects", icon: Code },
  { href: "/contact", label: "ContactMe", icon: Mail },
];

export default function Navber() {
  const pathname = usePathname();

  return (
    <motion.header
      className="fixed top-0 bg-transparent left-0 right-0 z-50 border-b  dark:bg-background dark:text-foreground"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 md:px-6">

        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                aria-label="Toggle menu"
                className="group size-8 md:hidden text-foreground dark:text-foreground"
                variant="ghost"
                size="icon"
              >
                <Menu size={24} />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-44 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-1">
                  {navigationLinks.map((link) => {
                    const isActive = pathname === link.href;
                    const Icon = link.icon;
                    return (
                      <NavigationMenuItem key={link.href} className="w-full">
                        <NavigationMenuLink
                          href={link.href}
                          className={`py-2 px-3 flex items-center gap-2 w-full rounded ${
                            isActive
                              ? "text-primary font-semibold dark:bg-blue-500"
                              : "text-muted-foreground hover:text-primary hover:bg-muted-foreground/10"
                          }`}
                        >
                          {/* <Icon size={18} /> */}
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
            <Link
              href="/"
              className="text-sm bg-black dark:bg-white rounded-md p-1 font-semibold flex items-center justify-center"
            >
              <span className="text-white dark:text-black mr-1 pl-2">Roman</span>
              <span className="w-12 h-8 rounded bg-white dark:bg-blue-600 text-black dark:text-white flex items-center pl-3">
                .dev
              </span>
            </Link>
          </div>
        </div>

        {/* Center items (desktop menu) */}
        <div className="max-md:hidden">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-2">
              {navigationLinks.map((link) => {
                const isActive = pathname === link.href;
                const Icon = link.icon;
                return (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink
                      href={link.href}
                      className={`py-2 px-4 rounded flex items-center gap-2 font-medium ${
                        isActive
                          ? "bg-primary dark:bg-blue-500 text-primary-foreground"
                          : "text-muted-foreground hover:text-primary hover:bg-muted-foreground/10"
                      }`}
                    >
                      {/* <Icon size={18} /> */}
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
          <ThemeToggle />
          <Button
            asChild
            className="text-sm bg-primary text-primary-foreground hover:bg-blue-600
            dark:bg-blue-600 dark:text-white dark:hover:bg-black"
          >
            <a href="https://drive.google.com/file/d/15dNOQzoQ0GUTefFNDuC2R8Kl2r97yAqK/view?usp=sharing">
            <Download/>
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
