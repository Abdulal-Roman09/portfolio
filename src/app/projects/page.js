import ProjectsContainer from "@/components/ProjectsContainer";
import React from "react";
import { projects } from "../data/projects";
console.log(projects);

const Project = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <p className="text-4xl font-bold py-20 text-center">All Projects</p>
        <ProjectsContainer projects={projects} />
      </div>
    </div>
  );
};

export default Project;
