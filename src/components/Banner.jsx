"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { Github, Youtube, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Banner() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: Youtube, href: "https://youtube.com/@yourchannel", label: "YouTube" },
    { icon: Instagram, href: "https://instagram.com/yourusername", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/yourusername", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  ];

  return (
    <>
      <div className="bg-[url('https://aakash-sharma.netlify.app/static/media/cloudBg.f28b5c6961fd82be839c.png')] bg-cover bg-center">
        <section className=" min-h-screen py-10 w-screen">
          
        <div className="flex flex-col md:flex-row items-center justify-between  gap-10 container mx-auto px-4">
              {/* Left Side */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Hi, I'm <span className="text-blue-500">Abdul Al Roman</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
              I'm a{" "}
              <span className="text-blue-600 font-bold">
                <Typewriter
                  words={[
                    "React Developer",
                    "Full Stack Developer",
                    "MERN Stack Engineer",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h2>

            <p className="max-w-xl mx-auto md:mx-0 text-gray-600 dark:text-gray-400 text-lg">
              I’m passionate about building scalable web applications that
              improve user experiences and solve real-world problems. Ambitious
              to keep learning and growing as a developer every day.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4 pt-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-2xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all duration-200"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            {/* Resume Button */}
            <div className="pt-4">
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 bg-black text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-[500px] md:max-w-[700px] aspect-square">
              <Image
                src="https://aakash-sharma.netlify.app/static/media/webdev.4d72dbba32efee3890cef9bcacce7aa7.svg"
                alt="Developer working"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
        </section>
      </div>
    </>
  );
}
