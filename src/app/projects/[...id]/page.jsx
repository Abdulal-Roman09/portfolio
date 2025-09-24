import { projects } from "@/app/data/projects";
import Image from "next/image";
import { Github, Link as LinkIcon } from "lucide-react";

export default function ProjectDetails({ params }) {
  // params.id কখনো array হতে পারে
  const { id } = params;
  const projectId = Array.isArray(id) ? id[0] : id;

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div className="p-10 text-red-500">প্রজেক্ট পাওয়া যায়নি!</div>;
  }

  return (
    <div className="pr-2">
      {/* Project Info Card */}
      <div className="container mx-auto p-6 rounded-lg shadow-2xl bg-white dark:bg-gray-900 transition-colors">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
          <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
            {project.description}
          </p>
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

      {/* Carousel */}
      <div className="pt-16 flex w-full flex-row-reverse justify-between">
        <div className="relative h-[540px] w-full overflow-hidden rounded-lg sm:h-[400px] md:h-[540px] lg:gap-10">
          {project.carouselItems.map((slide, index) => (
            <Image
              key={index}
              src={slide.img}
              width={1200}
              height={800}
              alt={`${project.title} screenshot ${index + 1}`}
              className="h-full w-full object-contain object-center transition-transform duration-500 ease-linear"
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
    </div>
  );
}
