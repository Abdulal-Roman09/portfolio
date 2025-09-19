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
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/70 backdrop-blur-md text-black dark:border-gray-700 dark:bg-background dark:text-foreground"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 sm:px-0">
        {/* Left: Logo + Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* Mobile Hamburger Menu */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                aria-label="Toggle menu"
                className="md:hidden text-black dark:text-foreground"
                variant="ghost"
                size="icon"
              >
                <Menu size={24} />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="w-44 p-2 md:hidden bg-white dark:bg-gray-900 text-black dark:text-white rounded-lg shadow-lg"
            >
              <NavigationMenu className="max-w-none">
                <NavigationMenuList className="flex flex-col items-start gap-1">
                  {navigationLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <NavigationMenuItem key={link.href} className="w-full">
                        <NavigationMenuLink
                          href={link.href}
                          className={`py-2 px-3 flex items-center gap-2 w-full rounded ${
                            isActive
                              ? "text-primary font-semibold dark:bg-blue-500"
                              : "hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800"
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
            <Link
              href="/"
              className="text-sm bg-black dark:bg-gray-800 rounded-md p-1 font-semibold flex items-center justify-center"
            >
              <span className="text-white mr-1 pl-2">Roman</span>
              <span className="w-12 h-8 rounded bg-white dark:bg-blue-600 text-black dark:text-white flex items-center pl-3">
                .dev
              </span>
            </Link>
          </div>
        </div>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-2">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    href={link.href}
                    className={`py-2 px-4 rounded flex items-center gap-2 font-medium ${
                      isActive
                        ? "bg-primary dark:bg-blue-600 text-primary-foreground"
                        : "text-black dark:text-muted-foreground hover:text-primary dark:hover:bg-blue-500"
                    }`}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right: Desktop Theme + Resume */}
        <div className="hidden md:flex gap-4 items-center">
          <ThemeToggle />
          <Button
            asChild
            className="text-sm bg-primary text-primary-foreground hover:bg-blue-600 dark:bg-blue-600 dark:text-white dark:hover:bg-black transition-colors duration-500 ease-in-out"
          >
            <a
              href="https://drive.google.com/file/d/1w1IcdDvClGpiXyvTDdDGKmXNrL-ZxT36/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={16} /> Download Resume
            </a>
          </Button>
        </div>

        {/* Mobile Theme + Resume */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button
            asChild
            className="text-sm bg-primary text-primary-foreground hover:bg-blue-600 dark:bg-blue-600 dark:text-white dark:hover:bg-black transition-colors duration-500 ease-in-out"
          >
            <a
              href="https://drive.google.com/file/d/1w1IcdDvClGpiXyvTDdDGKmXNrL-ZxT36/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={16} /> Resume
            </a>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
