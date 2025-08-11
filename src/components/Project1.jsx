"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import TechList from "./Technologies";

const carouselItems = [
  {
    img: "https://i.ibb.co/7dmZ3pjX/Screenshot-2025-08-11-071409.png",
    title: "Forest Serenity",
    des: "Discover the peace and beauty of the forest. A perfect place to escape the everyday hustle and reconnect with nature.",
  },
  {
    img: "https://i.ibb.co/NnsLzRFq/Screenshot-2025-08-11-071438.png",
    title: "Golden Canopy",
    des: "Bask in the warmth and beauty of the golden leaves against a clear blue sky. A perfect spot for a peaceful retreat and reflection.",
  },
  {
    img: "https://i.ibb.co/Mx9j2fqq/Screenshot-2025-08-11-071623.png",
    title: "Urban Exploration",
    des: "Venture into the hidden corners of the city and uncover the beauty of forgotten urban landscapes. A thrilling escape into the depths of urban architecture.",
  },
  {
    img: "https://i.ibb.co/kgGffb2K/Screenshot-2025-08-11-071659.png",
    title: "Industrial Mystery",
    des: "Explore the enigmatic charm of industrial structures. A perfect setting for those with a sense of adventure and an eye for urban beauty.",
  },
  {
    img: "https://i.ibb.co/Kjd4W2b4/Screenshot-2025-08-11-071508.png",
    title: "Blossom Bliss",
    des: "Revel in the vibrant colors and delicate petals of a blossoming field. An ideal retreat for those seeking a burst of natural beauty and serenity.",
  },
];
const technologies = [
  // Frontend
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },

  // Backend
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },

  // Database
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },

  // Tools
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

export default function Project1() {
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
      <div className="contaner mx-auto p-6 bg-white rounded-lg shadow-2xl px-4">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold mb-2">Project 1</h1>
          <p className="text-lg font-semibold">Product Recommendation Site</p>
        </div>

        <div className="space-y-3">
          <div>
            <h2 className="font-semibold">Name:</h2>
            <p>Interactive Travel Platform</p>
          </div>
          <div>
            <h2 className="font-semibold">Description:</h2>
            <p>
              An interactive React-based travel platform where users can post
              queries, share personalized recommendations, and manage profiles
              securely using Firebase Authentication. The site emphasizes
              real-time updates and dynamic dashboards to foster an engaged
              traveler community.
            </p>
          </div>
          <div>
            <h2 className="font-semibold">Technologies:</h2>
            <p>
              React, Firebase Authentication, Real-time Database, Dynamic
              Dashboards
            </p>
          </div>
        </div>
      </div>

      <div className="pt-16 flex w-full flex-row-reverse justify-between">
        <div className="relative h-[540px] w-full overflow-hidden rounded-lg before:bg-black/50 sm:h-[600px] md:h-[540px] lg:gap-10">
          {carouselItems.map((slide, index) => {
            const { img, title, des } = slide;
            return (
              <div
                key={`index_${index}`}
                className={`absolute inset-0 transition-opacity duration-500 ease-linear ${
                  index === currentSlider
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              >
                <Image
                  src={img}
                  width={1200}
                  height={800}
                  alt={title}
                  className={`h-full w-full object-contain object-center transition-transform duration-500 ease-linear ${
                    index === currentSlider ? "scale-100" : "scale-105"
                  }`}
                />

                {/* <div className="absolute inset-0 flex flex-col p-5 text-center text-white drop-shadow-lg">
            <div className="mb-0 mt-auto rounded-md bg-white/40 p-3 backdrop-blur-lg">
              <div className="mb-3 overflow-hidden text-xl font-semibold lg:text-3xl text-emerald-500">
                <h1
                  className={`${
                    index === currentSlider ? "" : "translate-y-12"
                  } duration-500 ease-linear`}
                >
                  {title}
                </h1>
              </div>
              <div className="overflow-hidden text-sm md:text-base lg:text-lg">
                <p
                  className={`${
                    index === currentSlider ? "" : "-translate-y-12"
                  } duration-500 ease-linear text-emerald-500`}
                >
                  {des}
                </p>
              </div>
            </div>
          </div> */}
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center justify-center gap-3 p-2">
          {carouselItems.map((slide, index) => {
            const { img, title } = slide;
            return (
              <Image
                onClick={() => setCurrentSlider(index)}
                src={img}
                key={index}
                width={1200}
                height={600}
                className={`h-6 w-10 bg-black/20 sm:h-8 md:h-12 md:w-20 ${
                  currentSlider === index
                    ? "opacity-100 ring ring-sky-500"
                    : "opacity-60"
                } box-content cursor-pointer rounded-md md:rounded-lg`}
                alt={title}
              />
            );
          })}
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex  items-center justify-center flex-col py-5">
          {/* Links */}
          <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
            Links
          </p>
          <div className="flex gap-4 py-4 content-center">
            <a
              href="https://github.com/Abdulal-Roman09/Questly"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
            >
              GitHub
            </a>
            <a
              href="https://b11-a11.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
            >
              Live Demo
            </a>
          </div>

          {/* Technology Used */}
          <div className="text-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
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

              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28"
                fill="none"
                width="auto"
                height="auto"
              >
                <title>file_type_tailwind</title>
                <path
                  d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
                  fill="#44a8b3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
