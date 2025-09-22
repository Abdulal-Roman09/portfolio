import React from "react";

const projects = [
  {
    id: 1,
    title: "Parcel Delivery App",
    description: "A MERN stack app for booking and tracking parcels.",
    link: "https://yourprojectlink.com",
  },
  {
    id: 2,
    title: "Plant Shop",
    description: "E-commerce site built with React, Node.js, and MongoDB.",
    link: "https://yourprojectlink.com",
  },
  {
    id: 3,
    title: "Education Platform",
    description: "Next.js based platform with authentication and dashboard.",
    link: "https://yourprojectlink.com",
  },
];

const ProjectsContainer = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6  mx-auto container">
      {projects.map((project) => (
        <div
          key={project.id}
          className="p-4 border rounded-2xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-bold mb-2">{project.title}</h2>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Project
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectsContainer;
