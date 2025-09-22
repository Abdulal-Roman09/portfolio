"use client";
import Link from "next/link";
import { projects } from './../app/data/projects';

const ProjectsContainer = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mx-auto container">
      {projects.map((project) => (
        <div
          key={project.id}
          className="p-4 border rounded-2xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-bold mb-2">{project.title}</h2>
          <p className="text-gray-600 mb-4">{project.description}</p>
          
          {/* Link to dynamic details page */}
          <Link
            href={`/projects/${project.id}`}
            className="text-blue-600 hover:underline"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectsContainer;
