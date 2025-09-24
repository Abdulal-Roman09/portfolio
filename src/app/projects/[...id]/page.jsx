"use client";

import React, { useState, useEffect } from "react";
import { projects } from "@/app/data/projects";
import Image from "next/image";
import { Github, Link as LinkIcon } from "lucide-react";

export default function ProjectDetails({ params }) {
  const { id } = params;
  const projectId = Array.isArray(id) ? id[0] : id;

  const project = projects.find((p) => p.id === projectId);

  const [currentSlider, setCurrentSlider] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlider((prev) =>
        prev === project?.carouselItems.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(intervalId);
  }, [project]);

  if (!project) {
    return <div className="p-10 text-red-500">প্রজেক্ট পাওয়া যায়নি!</div>;
  }

  return (
    <div className="pr-2 py-20">
      {/* Project Info Card */}
      <div className="container mx-auto p-6 rounded-lg shadow-2xl bg-white dark:bg-gray-900 transition-colors">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
        </div>
        <div className="space-y-6 text-gray-800 dark:text-gray-300">
          <div>
            <h2 className="font-semibold text-lg mb-1 border-b-2 border-black dark:border-blue-500 inline-block pb-1">
              Name:
            </h2>
            <p className="text-md">{project.title}</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-1 border-b-2 border-black dark:border-blue-500 inline-block pb-1">
              Description:
            </h2>
            <p className="text-md leading-relaxed">{project.description}</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-1 border-b-2 border-black dark:border-blue-500 inline-block pb-1">
              Technologies:
            </h2>
            <p className="text-md italic text-black dark:text-blue-400">
              {project.technologiesTitle || ""}
            </p>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="pt-16 flex flex-col-reverse lg:flex-row lg:justify-between items-center gap-6">
        <div className="relative h-[540px] w-full lg:w-4/5 overflow-hidden rounded-lg before:bg-black/50">
          {project.carouselItems.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ease-linear ${
                index === currentSlider ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <Image
                src={slide.img}
                alt={slide.title || `Slide ${index + 1}`}
                width={1200}
                height={800}
                className={`h-full w-full object-contain object-center transition-transform duration-500 ease-linear ${
                  index === currentSlider ? "scale-100" : "scale-105"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Carousel Thumbnails */}
        <div className="flex lg:flex-col flex-row gap-3 justify-center items-center">
          {project.carouselItems.map((slide, index) => (
            <Image
              key={index}
              src={slide.img}
              alt={slide.title || `Thumbnail ${index + 1}`}
              width={1200}
              height={800}
              onClick={() => setCurrentSlider(index)}
              className={`h-6 w-10 sm:h-8 md:h-12 md:w-20 rounded-md md:rounded-lg cursor-pointer transition-all ${
                currentSlider === index ? "opacity-100 ring ring-blue-500" : "opacity-60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-col items-center justify-center py-5 space-y-4">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold dark:text-gray-300">
          Links
        </h3>
        <div className="flex gap-4 py-4">
          {project.githubLinkClient && (
            <a
              href={project.githubLinkClient}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 text-white dark:bg-gray-700 dark:text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition flex items-center gap-2"
            >
              <Github />
              GitHub
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white dark:bg-blue-500 rounded-lg hover:bg-blue-500 dark:hover:bg-blue-400 transition flex items-center gap-2"
            >
              <LinkIcon />
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Technologies */}
      <div className="flex gap-6 flex-wrap justify-center items-center py-4">
        {project.technologies.map((tech) => (
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
  );
}
