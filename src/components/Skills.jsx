"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

const technologies = [
  {
    name: "React",
    icon: <FaReact className="text-blue-500" />,
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
    category: "Framework",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" />,
    category: "Language",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400" />,
    category: "Language",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-teal-400" />,
    category: "Styling",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-600" />,
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-700" />,
    category: "Database",
  },
  {
    name: "Express",
    icon: <SiExpress className="text-black" />,
    category: "Backend",
  },
];

const Skills = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".skill-card");

    gsap.set(cards, { scale: 0.8, zIndex: 1 });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    tl.to(cards, {
      scale: 0.8,
      duration: 0.5,
      stagger: 0.2,
      ease: "power1.out",
      zIndex: (index) => cards.length - index,
    }).to(cards, {
      scale: 1,
      duration: 0.5,
      stagger: 0.2,
      ease: "power1.inOut",
      zIndex: 1,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-slate-900 px-4"
      ref={containerRef}
    >
    <div className="src/app/contact/page.jsx">
        <div className="mx-auto container h-fit">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-900 dark:text-white">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-20 gap-12 relative">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="skill-card bg-gray-100 dark:bg-slate-800 rounded-xl shadow-2xl p-6 flex flex-col items-center transition-transform cursor-default relative"
            >
              <div className="text-6xl mb-4">{tech.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {tech.name}
              </h3>
              <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-medium dark:bg-indigo-800 dark:text-indigo-100">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Skills;
