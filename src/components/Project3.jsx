"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const carouselItems = [
  {
    img: "https://i.ibb.co/DDRsZwKL/Screenshot-2025-08-12-061426.png",
    title: "Forest Serenity",
    des: "Discover the peace and beauty of the forest. A perfect place to escape the everyday hustle and reconnect with nature.",
  },
  {
    img: "https://i.ibb.co/Q3w7ptLY/Screenshot-2025-08-12-061447.png",
    title: "Golden Canopy",
    des: "Bask in the warmth and beauty of the golden leaves against a clear blue sky. A perfect spot for a peaceful retreat and reflection.",
  },
  {
    img: "https://i.ibb.co/ksy0nq5G/Screenshot-2025-08-12-061356.png",
    title: "Urban Exploration",
    des: "Venture into the hidden corners of the city and uncover the beauty of forgotten urban landscapes. A thrilling escape into the depths of urban architecture.",
  },
  {
    img: "https://i.ibb.co/JjqSmKs1/Screenshot-2025-08-12-062104.png",
    title: "Industrial Mystery",
    des: "Explore the enigmatic charm of industrial structures. A perfect setting for those with a sense of adventure and an eye for urban beauty.",
  },
];

const technologies = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

export default function Project3() {
  const [currentSlider, setCurrentSlider] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setCurrentSlider(
          currentSlider === carouselItems.length - 1 ? 0 : currentSlider + 1
        ),
      5000
    );
    return () => clearInterval(intervalId);
  }, [currentSlider]);

  return (
    <div className="pr-2">
      {/* Project Info Card */}
      <div className="container mx-auto p-6 rounded-lg shadow-2xl bg-white dark:bg-gray-900 transition-colors">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold text-blue-700 dark:text-blue-500 mb-2">
            Project 3
          </h1>
          <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
            Salad Restaurant App
          </p>
        </div>

        <div className="space-y-6 text-gray-800 dark:text-gray-300">
          <div>
            <h2 className="font-semibold text-lg mb-1 border-b-2 border-blue-500 dark:border-blue-500 inline-block pb-1">
              Name:
            </h2>
            <p className="text-md">Salad Flavaro</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-1 border-b-2 border-blue-500 dark:border-blue-500 inline-block pb-1">
              Description:
            </h2>
            <p className="text-md leading-relaxed">
              A modern restaurant blog and ordering platform built with Node.js, Express, and MongoDB. Features include comprehensive menu management, customer reviews, and an intuitive ordering system designed to provide an engaging user experience and efficient backend management for restaurant owners.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-1 border-b-2 border-blue-500 dark:border-blue-500 inline-block pb-1">
              Technologies:
            </h2>
            <p className="text-md italic text-blue-600 dark:text-blue-400">
              React, Node.js, Express, MongoDB, Firebase
            </p>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="pt-16 flex w-full flex-row-reverse justify-between">
        <div className="relative h-[540px] w-full overflow-hidden rounded-lg before:bg-black/50 sm:h-[400px] md:h-[540px] lg:gap-10">
          {carouselItems.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ease-linear ${
                index === currentSlider ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <Image
                src={slide.img}
                width={1200}
                height={800}
                alt={slide.title}
                className={`h-full w-full object-contain object-center transition-transform duration-500 ease-linear ${
                  index === currentSlider ? "scale-100" : "scale-105"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Carousel Thumbnails */}
        <div className="flex flex-col items-center justify-center gap-3 p-2">
          {carouselItems.map((slide, index) => (
            <Image
              onClick={() => setCurrentSlider(index)}
              src={slide.img}
              key={index}
              width={1200}
              height={600}
              className={`h-6 w-10 bg-black/20 sm:h-8 md:h-12 md:w-20 ${
                currentSlider === index ? "opacity-100 ring ring-blue-500" : "opacity-60"
              } box-content cursor-pointer rounded-md md:rounded-lg`}
              alt={slide.title}
            />
          ))}
        </div>
      </div>

      {/* Links & Technologies */}
      <div className="space-y-6">
        <div className="flex flex-col items-center justify-center py-5">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 dark:text-gray-300">Links</p>
          <div className="flex gap-4 py-4 content-center">
            <a
              href="https://github.com/Abdulal-Roman09/Salad-Flavor"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 text-white dark:bg-gray-700 dark:text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition"
            >
              GitHub
            </a>
            <a
              href="https://whimsical-jelly-bedd51.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white dark:bg-blue-500 rounded-lg hover:bg-blue-500 dark:hover:bg-blue-400 transition"
            >
              Live Demo
            </a>
          </div>

          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 dark:text-gray-300">
            Technologies Used
          </h3>
          <div className="flex gap-6 flex-wrap justify-center items-center">
            {technologies.map((tech) => (
              <img
                key={tech.name}
                src={tech.icon}
                alt={tech.name}
                title={tech.name}
                className="h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 transition-all"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
