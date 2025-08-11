import { Github, Youtube, Instagram, Twitter, Linkedin } from "lucide-react"

export default function SocialSidebar() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: Youtube,
      href: "https://youtube.com/@yourchannel",
      label: "YouTube",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/yourusername",
      label: "Instagram",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/yourusername",
      label: "Twitter",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
  ]

  return (
 <div className="fixed left-10 bottom-0 z-50 hidden md:flex flex-col items-center gap-4">
      {/* Social Icons */}
      <div className="flex flex-col gap-4">
        {socialLinks.map((social) => {
          const Icon = social.icon
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-2xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all duration-200 group"
              aria-label={social.label}
            >
              <Icon size={20} />
            </a>
          )
        })}
      </div>

      {/* Vertical Line */}
      <div className="w-px h-20 bg-slate-300 dark:bg-slate-600 mt-4"></div>
    </div>
  )
}
