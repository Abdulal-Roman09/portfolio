"use client";
import Link from "next/link";

const ProjectsContainer = ({ projects }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-extrabold text-center mb-10">আমার প্রজেক্টসমূহ</h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300 p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-5">{project.description}</p>
            </div>

            <Link
              href={`/projects/${project.id}`}
              className="mt-auto inline-block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              বিস্তারিত দেখুন
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsContainer;
