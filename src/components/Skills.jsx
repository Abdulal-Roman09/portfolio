"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiPrisma,
  SiFirebase,
  SiFramer,
  SiStripe,
  SiRedux,
  SiYarn,
  SiNpm,
  SiMongoose,
  SiJsonwebtokens,
  SiReacthookform,
  SiShadcnui,
  SiReactquery,
} from "react-icons/si";

const technologies = [
  // Frontend
  { name: "React", icon: <FaReact className="text-blue-500 text-6xl" />, category: "Frontend" },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-900 dark:text-white text-6xl" />, category: "Framework" },
  { name: "HTML", icon: <SiHtml5 className="text-orange-500 text-6xl" />, category: "Frontend" },
  { name: "CSS", icon: <SiCss3 className="text-blue-500 text-6xl" />, category: "Frontend" },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-6xl" />, category: "Language" },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-6xl" />, category: "Language" },

  { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400 text-6xl" />, category: "Styling" },
  { name: "Shadcn UI", icon: <SiShadcnui className="text-gray-900 dark:text-white text-6xl" />, category: "Styling" },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-500 text-6xl" />, category: "Animation" },
  { name: "JWT", icon: <SiJsonwebtokens className="text-purple-600 text-6xl" />, category: "Authentication" },
  { name: "React Hook Form", icon: <SiReacthookform className="text-indigo-600 text-6xl" />, category: "Form" },
  { name: "React Query", icon: <SiReactquery className="text-green-400 text-6xl" />, category: "Form" },

  // Backend
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-6xl" />, category: "Backend" },
  { name: "Express", icon: <SiExpress className="text-gray-900 dark:text-white text-6xl" />, category: "Backend" },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700 text-6xl" />, category: "Database" },
  { name: "Mongoose", icon: <SiMongoose className="text-red-500 text-6xl" />, category: "Database" },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-6xl" />, category: "Backend" },

  // Version Control
  { name: "Git", icon: <FaGitAlt className="text-orange-600 text-6xl" />, category: "Version Control" },
  { name: "GitHub", icon: <FaGithub className="text-gray-800 dark:text-white text-6xl" />, category: "Version Control" },

  // Package Managers
  { name: "NPM", icon: <SiNpm className="text-red-600 text-6xl" />, category: "Package Manager" },
  { name: "Yarn", icon: <SiYarn className="text-blue-500 text-6xl" />, category: "Package Manager" },

  // Payment
  { name: "Stripe", icon: <SiStripe className="text-blue-500 text-6xl" />, category: "Payment" },
];

const Skills = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".skill-card");

    // Set initial scale for all cards
    gsap.set(cards, { scale: 0.8, transformOrigin: "center center", zIndex: 1 });

    // Timeline animation for scale in/out
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    tl.to(cards, {
      scale: 0.8,
      duration: 0.5,
      stagger: 0.1,
      ease: "power1.out",
      zIndex: (index) => cards.length - index,
    }).to(cards, {
      scale: 1,
      duration: 0.5,
      stagger: 0.2,
      ease: "power1.inOut",
      zIndex: 1,
    });

    return () => tl.kill();
  }, []);

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-slate-900 px-4"
      ref={containerRef}
    >
      <div className="mx-auto container">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-900 dark:text-white">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-20 gap-12">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="skill-card bg-gray-100 dark:bg-slate-700 rounded-xl shadow-2xl p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 cursor-default"
            >
              <div className="mb-4">{tech.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {tech.name}
              </h3>
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-medium dark:bg-blue-600 dark:text-blue-100">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
