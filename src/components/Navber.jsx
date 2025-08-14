"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { usePathname } from "next/navigation"
import { Menu, Home, User, Code, Mail, Download } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import ThemeToggle from "./ThemeToggle"

const navigationLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/projects", label: "Projects", icon: Code },
  { href: "/contact", label: "Contact", icon: Mail },
]

export default function GlassmorphicNavbar() {
  const pathname = usePathname()
  const [bgClass, setBgClass] = useState("bg-black") // default bg

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setBgClass(prefersDark ? "bg-blue-600" : "bg-black")
  }, [])

  return (
    <motion.header
      className="fixed top-4 left-4 right-4 z-50 mx-auto container"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={`relative overflow-hidden rounded-2xl ${bgClass} bg-opacity-30 backdrop-blur-xl border border-white/20 shadow-2xl`}>
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 pointer-events-none" />

        <div className="relative flex h-16 items-center justify-between gap-4 px-6">
          {/* Left: Logo & Hamburger */}
          <div className="flex items-center gap-3">
            {/* Hamburger Menu for small screens */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  aria-label="Toggle menu"
                  className="md:hidden bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  variant="ghost"
                  size="icon"
                >
                  <Menu size={20} className="text-white" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                className="w-48 p-2 md:hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl rounded-xl"
              >
                <NavigationMenu className="max-w-none *:w-full">
                  <NavigationMenuList className="flex flex-col gap-1">
                    {navigationLinks.map((link) => {
                      const isActive = pathname === link.href
                      const Icon = link.icon
                      return (
                        <NavigationMenuItem key={link.href}>
                          <NavigationMenuLink
                            href={link.href}
                            className={`py-3 px-4 flex items-center gap-3 w-full rounded-lg transition-all duration-300 hover:scale-[1.02] ${
                              isActive
                                ? "bg-white/20 text-white font-semibold shadow-lg"
                                : "text-white/80 hover:text-white hover:bg-white/15"
                            }`}
                          >
                            <Icon size={18} />
                            {link.label}
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      )
                    })}
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>

            {/* Logo */}
            <motion.div className="pr-2" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Link
                href="/"
                className="text-sm bg-white/15 backdrop-blur-sm hover:bg-white/25 rounded-xl p-2 font-semibold flex items-center justify-center border border-white/20 transition-all duration-300 shadow-lg"
              >
                <span className="text-white mr-1 pl-2">Roman</span>
                <span className="w-12 h-8 rounded-lg bg-white/20 backdrop-blur-sm text-white flex items-center pl-3 border border-white/30">
                  .dev
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Center: Menu Links for large screens */}
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-2">
                {navigationLinks.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <NavigationMenuItem key={link.href}>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                        <NavigationMenuLink
                          href={link.href}
                          className={`py-2.5 px-4 rounded-xl flex items-center gap-2 font-medium transition-all duration-300 border ${
                            isActive
                              ? "bg-white/25 text-white border-white/30 shadow-lg backdrop-blur-sm"
                              : "text-white/80 hover:text-white hover:bg-white/15 border-transparent hover:border-white/20 backdrop-blur-sm"
                          }`}
                        >
                          {link.label}
                        </NavigationMenuLink>
                      </motion.div>
                    </NavigationMenuItem>
                  )
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right: Theme toggle + Download */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
              <Button
                asChild
                className="text-sm bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-sm shadow-lg transition-all duration-300"
              >
                <a href="https://drive.google.com/file/d/15dNOQzoQ0GUTefFNDuC2R8Kl2r97yAqK/view?usp=sharing">
                  <Download size={16} />
                  Download CV
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
