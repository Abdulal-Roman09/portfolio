import React from "react";
import ProjectsContainer from "@/components/ProjectsContainer";
import { projects } from "../data/projects";

const Project = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-4 py-20">
        {/* Section Header */}
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-200 mb-12">
          All Projects
        </h1>

        {/* Projects Grid */}
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-xl transition-colors">
          <ProjectsContainer projects={projects} />
        </div>
      </div>
    </div>
  );
};

export default Project;
