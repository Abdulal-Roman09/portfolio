"use client";
import Link from "next/link";

const ProjectsContainer = ({ projects }) => {
  return (
<div className="dark:bg-gray-900  ">
      <div className="container mx-auto dark:bg-gray-900  py-10">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300 p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-5">
                {project.description}
              </p>
            </div>

            <Link
              href={`/projects/${project.id}`}
              className="mt-auto inline-block text-center bg-black dark:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              বিস্তারিত দেখুন
            </Link>
          </div>
        ))}
      </div>
    </div>
</div>
  );
};

export default ProjectsContainer;
