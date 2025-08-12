"use client"

import { Github, Linkedin,Mail, Heart, ArrowUp } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Abdulal-Roman09",
      label: "GitHub",
    },
    {
      icon: Mail, 
      href: "mailto:abdulal.roman09@gmail.com",
      label: "Gmail",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/abdul-al-roman09/",
      label: "LinkedIn",
    },
  ]


  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  return (
   <footer className="relative bg-black text-white mt-auto overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.1)_50%,transparent_75%)] bg-[length:20px_20px]" />

      <div className="relative mx-auto container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Your Portfolio
            </h3>
            <p className="text-white text-sm leading-relaxed">
              Crafting digital experiences with passion and precision. Let's build something amazing together.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 rounded-full bg-slate-800/50 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 transition-all duration-300 transform hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  className="block text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-2 text-slate-400 text-sm">
              <p>Ready to start a project?</p>
              <a
                href="mailto:abdulal.roman09@gmail.com"
                className="block text-blue-400 hover:text-blue-300 transition-colors"
              >
                abdulal.roman09@gmail.com
              </a>
              <p className="text-xs text-slate-500 mt-4">Available for freelance work and collaborations</p>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span>© {currentYear} Your Portfolio. Made with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>using Next.js & Tailwind CSS</span>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 text-slate-400 hover:text-white transition-all duration-300 text-sm"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-xl" />
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-xl" />
    </footer>
  )
}
