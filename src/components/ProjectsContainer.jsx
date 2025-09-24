"use client";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github, Info } from "lucide-react"; // icons

const ProjectsContainer = ({ projects }) => {
  return (
    <div className="dark:bg-gray-900">
      <div className="container mx-auto py-10">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300 flex flex-col h-[520px]"
            >
              {/* Image Section */}
              <div className="relative w-full h-48 rounded-t-2xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 line-clamp-1">
                  {project.title} ({project.name})
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex gap-3 flex-wrap justify-center items-center mb-5">
                  {project.technologies.map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        title={tech.name}
                        className="h-9 w-9 object-contain transition-transform duration-300 hover:scale-110"
                      />
                      <span className="text-[11px] mt-1 text-gray-600 dark:text-gray-300">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto justify-center">
                  {/* Details */}
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-black dark:bg-blue-600 text-white font-medium py-2 px-3 rounded-lg transition-all hover:opacity-90 text-sm"
                  >
                    <Info size={16} /> Details
                  </Link>

                  {/* Live Link */}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white font-medium py-2 px-3 rounded-lg transition-all hover:opacity-90 text-sm"
                    >
                      <ExternalLink size={16} /> Live
                    </a>
                  )}

                  {/* GitHub Client */}
                  {project.githubLinkClient && (
                    <a
                      href={project.githubLinkClient}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-700 text-white font-medium py-2 px-3 rounded-lg transition-all hover:opacity-90 text-sm"
                    >
                      <Github size={16} /> Client
                    </a>
                  )}

                  {/* GitHub Server */}
                  {project.githubLinkServer && (
                    <a
                      href={project.githubLinkServer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-700 text-white font-medium py-2 px-3 rounded-lg transition-all hover:opacity-90 text-sm"
                    >
                      <Github size={16} /> Server
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
